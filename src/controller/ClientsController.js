const knex = require('../database')

module.exports = {

    // Listar clientes

    async index(request, response) {

        const clients = await knex('clients');

        return response.json(clients);
    }

    //

}