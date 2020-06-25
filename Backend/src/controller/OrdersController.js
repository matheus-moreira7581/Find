const knex = require('../database');
const { insert } = require('../database');


module.exports = {

    async create(request, response, next) {
        try {

            const elements = request.body;

            const trx = await knex.transaction();
            const order = elements.order;
            const insertedIds = await trx('orders').insert(order);
            
            const id_order = insertedIds[0];


           /*const data = elements.itens_cart.map(itens => {   
                return {
                    "id_order": id_order,
                    "id_product": itens.id_products,
                    "amount": itens.amount,
                    "Details": itens.Details
                }   
            });

        await trx('itens_cart').insert(data)

           const address = elements.address;

           const insertAddress = await trx('addresses').insert(address);

           const id_address = insertAddress[0];

           await trx('orders').where('id', id_order).update(id_address)*/

           await trx.commit();

        return response.json({id: id_order })

            
        } catch (error) {
            response.status(403).send()
            next(error)
        }
    }
    
}