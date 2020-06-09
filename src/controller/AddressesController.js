const knex = require('../database')

module.exports = {

    // Cadastrar endereço

    async create(request, response) {

        const { id } = request.params;

        const { name, street, neighborhood, ad_number, additional, zip, city, state, landmark } = request.body;

        const address = {name, street, neighborhood, ad_number, additional, zip, city, state, landmark, id_clients: id};

        await knex('addresses').insert(address);

        return response.json(address);

    }



}