const knex = require('../database');

module.exports = {

    async index(request, response) {

        //const category = await knex('sections')
        //.join('categories', 'sections.id', 'categories.id_section')
        //.select('sections.name', 'categories.*')

        const category = await knex('categories');

        return response.json(category);

    }

};