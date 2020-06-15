const knex = require('../database');
const { index } = require('./ClientsController');


module.exports = {

    async index(request, response){

        const category = await knex('categories').where('id_section', 1).select('title','img_url');

        return response.json(category);

    }

};