const knex = require('../database')

module.exports = {

    // Listar clientes

    async index(request, response) {

        const clients = await knex('clients');

        return response.json(clients);
    },

    // Cadastrar um cliente
    async create(request, response) {

        const { name, email, cell, password } = request.body;

        const client = { name, email, cell, password };

        await knex('clients').insert(client);

        return response.json(client);

    }

    
}