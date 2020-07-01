const knex = require('../database');

module.exports ={ 

// Cadastrando pedido 

async create(request, response, next) {
    try {

        let prices = [];

        // Recebe o id do serviço e retorna seu preço  
        // e armazenando a informação em um array  

       const calc = (id_services) => {

           const { price } = services.find(e => {
               if(e.id == id_services) {
                   return e.price
               }
           })
           
           prices.push(price)

       }
    
       const elements = request.body;


       const services = await knex('services')
       .where('id_company', elements.request.id_company)
       .select('id', 'price');


       const trx = await knex.transaction();


       const id_request = await trx('requests')
       .returning('id')
       .insert(elements.request);


       const data = elements.items_request.map(items => { 

            calc(items.id_service)

            return {
                "id_request": id_request[0],
                "id_service": items.id_service,
                "details": items.details
            }  

        });


       await trx('items_request').insert(data)


       const id_address = await trx('addresses')
       .returning('id')
       .insert(elements.address);


        // Calculando o total do pedido

       const total = prices.reduce((total, prices) => total + prices, 0)


       await trx('requests').where('id', id_request[0])
       .update({
           'id_address': id_address[0], 
           'total': total
        });


       await trx.commit();

    
       return response.status(201).json({ status: "Serviço solicitado com sucesso."})

        
    } catch (error) {
        next(error)
    }
},


// Listar pedidos de uma empresa

async index(request, response, next) {
    try {

        const { id_company } = request.params;

        const requests = await knex('requests')
        .where({ id_company })
        .join('clients', 'clients.id', 'requests.id_client')
        .orderBy('request_date', 'desc')
        .select('clients.name', 'requests.id');

        response.status(200).json(requests)

        
    } catch (error) {
        next(error)
    }
},


async indexForIncome(request, response, next) {
    try {

        const { id_company } = request.params;

        const orders = await knex('requests')
        .where({ id_company })
        .orderBy('request_date', 'desc')
        .select('total', 'request_date');

        // console.log(orders);
        

        const groups = orders.reduce((groups, income) => {
            const date = new Date(income.request_date).toLocaleDateString();
            // const sp = Date(date).split('T')[0];
            if(!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(parseFloat(income.total));
            return groups;
        }, {});
        


        const groupArrays = Object.keys(groups).map((request_date) => {
            return {
                request_date,
                income: groups[request_date]
            };
        });

        for(i = 0; i < groupArrays.length; i++) {
            const total = Object.values(groupArrays[i].income).reduce((previous, current) => {
                return previous + current;
            });

            groupArrays[i].income = total

        }

        
        response.status(200).json(groupArrays);

        
    } catch (error) {
        next(error)
    }
},


// Detalhando pedido

async show(request, response, next) {
    try {

        const { id_request } = request.query;


        const requests = await knex('requests')
        .join('clients', 'clients.id', 'requests.id_client')
        .select('clients.name', 'requests.total', 'requests.payment', 'requests.local', 'requests.id_address', 'requests.schedule','requests.id');


        const req = requests.filter(e => e.id == id_request);


        const items_request = await knex('items_request')
        .where({ id_request })
        .join('services', 'services.id', 'items_request.id_service')
        .select( 'services.name', 'services.description', 'services.price', 'services.img_url', 'items_request.details');


        const address = await knex('addresses')
        .where('id', req[0].id_address)
        .select('street', 'neighborhood', 'ad_number', 'additional', 'landmark');

        
        response.status(200).json({
            "Order": req[0],
            "Address": address[0],
            "Items": items_request
        })
        
    } catch (error) {
        next(error)
    }
},


// Atualizar status 

async update(request, response, next) {
    try {
        
        const { id_request } = request.query;

        const { status } = request.body;

        await knex('requests').where('id', id_request)
        .update({ status });

        response.status(200).json({status});

    } catch (error) {

        next(error)
        
    }

}


}