const knex = require('../database')

module.exports = {

    // Cadastrar um cliente

     async create(request, response) {

        const { name, email, cell, password } = request.body;

        const client = { name, email, cell, password };

        await knex('clients').insert(client);

        return response.json(client);

    },

    // Listar clientes

    async index(request, response) {

        const clients = await knex('clients');

        return response.json(clients);
    },

    // Mostra dados de um cliente especifico

    async show(request, response) {

        const { id } = request.params;
        
        const client = await knex('clients')
        .where('id', id);

        return response.json(client)

    },

    // Deletar um cliente e seus endereços;

    async delete(request, response) {

        const { id } = request.params;

        
    }

    
    
}