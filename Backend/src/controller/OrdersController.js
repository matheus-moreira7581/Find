const knex = require('../database');


module.exports = {

    // Cadastrando pedido 

    async create(request, response, next) {
        try {

            let prices = [];

            // função que calcula o preço do produto 
            // de acordo com quantidade solicitada, 
            // e armazena a informação em um array  

           const calc = (amount, id_products) => {

               const { price } = products.find(e => {
                   if(e.id == id_products) {
                       return e.price
                   }
               })
               
               prices.push(price * amount)

           }
        
           const elements = request.body;


           const products = await knex('products')
           .where('id_company', elements.order.id_company)
           .select('id', 'price');


           const trx = await knex.transaction();


           const id_order = await trx('orders')
           .returning('id')
           .insert(elements.order);


           const data = elements.itens_cart.map(itens => { 

                calc(itens.amount, itens.id_products)

                return {
                    "id_order": id_order[0],
                    "id_products": itens.id_products,
                    "amount": itens.amount,
                    "Details": itens.Details
                }  

            });


           await trx('itens_cart').insert(data)


           const id_address = await trx('addresses')
           .returning('id')
           .insert(elements.address);


            // Calculando o total do pedido

           const total = prices.reduce((total, prices) => total + prices, 0)


           await trx('orders').where('id', id_order[0])
           .update({
               'id_address': id_address[0], 
               'total': total
            });


           await trx.commit();
        
           return response.status(201).json({ status: "Pedido realizado com sucesso."})

            
        } catch (error) {
            next(error)
        }
    },


    // Listar pedidos de uma empresa

    async index(request, response, next) {
        try {

            const { id_company } = request.params;

            const orders = await knex('orders')
            .where({ id_company })
            .join('clients', 'clients.id', 'orders.id_client')
            .orderBy('order_date', 'desc')
            .select('clients.name', 'orders.id');

            return response.json(orders)

            
        } catch (error) {
            next(error)
        }
    },


    // Detalhando pedido

    async show(request, response, next) {
        try {

            const { id_order } = request.query;


            const orders = await knex('orders')
            .join('clients', 'clients.id', 'orders.id_client')
            .select('clients.name', 'orders.total', 'orders.payment', 'orders.receivement', 'orders.id_address', 'orders.id');


            const order = orders.filter(e => e.id == id_order);


            const itens_cart = await knex('itens_cart')
            .where({ id_order })
            .join('products', 'products.id', 'itens_cart.id_products')
            .select( 'products.name', 'products.description', 'products.price', 'products.img_url', 'itens_cart.amount', 'itens_cart.Details');


            const address = await knex('addresses')
            .where('id', orders[0].id_address)
            .select('street', 'neighborhood', 'ad_number', 'additional', 'landmark');

            
            return response.json({
                "Order": order[0],
                "Address": address[0],
                "Items": itens_cart
            })
            
        } catch (error) {
            next(error)
        }
    },


    // Atualizar status 

    async update(request, response, next) {
        try {
            
            const { id_order } = request.query;
    
            const { status } = request.body;
    
            await knex('orders').where('id', id_order)
            .update({ status });
    
            return response.json({status});

        } catch (error) {

            next(error)
            
        }

    }




    
}