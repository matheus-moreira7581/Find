const knex = require('../database');
const { insert } = require('../database');


module.exports = {

    async create(request, response, next) {
        try {

           const elements = request.body;

           const trx = await knex.transaction();

           const id_order = await trx('orders')
           .returning('id')
           .insert(elements.order);

           const data = elements.itens_cart.map(itens => { 

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

           await trx('orders').where('id', id_order[0]).update('id_address', id_address[0])

           await trx.commit();

           return response.json({ status: "boa  mlk"})

            
        } catch (error) {
            response.status(403).send()
            next(error)
        }
    }
    
}