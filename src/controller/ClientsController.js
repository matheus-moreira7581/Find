const knex = require('../database')

module.exports = {

    // Cadastrar um cliente

     async create(request, response, next) {

         try {
            const { name, email, cell, password } = request.body;
    
            const client = { name, email, cell, password };
    
            await knex('clients').insert(client);
    
            return response.json(client);
            
        } catch (error) {
            next(error)
        }

    },

    // Listar clientes

    async index(request, response, next) {

        try {
            const clients = await knex('clients');
    
            return response.json(clients);
            
        } catch (error) {  
            next(error)
        }

    },

    // Mostra dados de um cliente especifico

    async show(request, response, next) {
   
        try {
            const { id } = request.params;
            
            const client = await knex('clients')
            .where('id', id);
    
            return response.json(client)
            
        } catch (error) {
            next(error)
        }

    },

    // Deletar um cliente e seus endereços;

    async delete(request, response, next) {

        try {
            const { id } = request.params;
    
            const trx = await knex.transaction();
    
            await trx('addresses').where('id_clients', id).del();
    
            await trx('clients').where('id', id).del();
    
    
            await trx.commit();
    
            return response.json({msg: 'cliente deletado com sucesso!'});
            
        } catch (error) {
            next(error)
        }

    }
 
    
}