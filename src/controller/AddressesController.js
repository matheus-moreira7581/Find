const knex = require('../database');
const { index } = require('./ClientsController');

module.exports = {

    // Cadastrar endereço

    async create(request, response) {

        const { id } = request.params;

        const { name, street, neighborhood, ad_number, additional, zip, city, state, landmark } = request.body;

        const address = {name, street, neighborhood, ad_number, additional, zip, city, state, landmark, id_clients: id};

        await knex('addresses').insert(address);

        return response.json(address);

    },

    // Listar todos os endereços de um cliente especifico

    async show(request, response) {

        const { id } = request.params;

        const clientAddresses = await knex('addresses')
        .where('id_clients', id);

        return response.json(clientAddresses);

    },

    // Listar todos os endereços

    async index(request, response) {

        const addresses = await knex('addresses');

        return response.json(addresses);

    }



}