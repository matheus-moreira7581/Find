const knex = require('../database');


module.exports = {

    // Cadastrar endereço

    async create(request, response, next) {

        try {
            const { id_clients } = request.params;
    
            const { name, street, neighborhood, ad_number, additional, zip, city, state, landmark } = request.body;
    
            const address = {name, street, neighborhood, ad_number, additional, zip, city, state, landmark, id_clients};
    
            await knex('addresses').insert(address);
    
            response.status(201).send()
            
            return response.json(address);

        } catch (error) {
            
            response.status(404).send()
            
            next(error)
        }

    },

    // Listar todos os endereços de um cliente especifico, se existirem 

    async show(request, response, next) {

        try {
            const { id_clients } = request.params;
    
            const clientAddresses = await knex('addresses')
            .where({ id_clients });

            if (clientAddresses.length == 0) { 
                
                response.status(401).send()
                return response.json({msg: 'Você ainda não possui endereços cadastrados'});
 
            }
    
            response.status(200).send()

            return response.json(clientAddresses);
            
        } catch (error) {
            response.status(404).send()
            next(error)
        }

    },

    // Listar todos os endereços (apenas para desenvolvimento)

    async index(request, response, next) {

        try {
            const addresses = await knex('addresses');
    
            response.status(200).send()

            return response.json(addresses);
            
        } catch (error) {
            response.status(404).send()
            next(error)
        }

    }



}