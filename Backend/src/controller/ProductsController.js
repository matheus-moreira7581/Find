const knex = require('../database')

module.exports = {

    async create(request, response, next) {

        try {

            const { name, description, price, img_url, limit_time, id_company } = request.body;

            const item = { name, description, price, img_url, limit_time, id_company };

            await knex('products').insert(item);

            response.json(item);
            

        } catch (error) {
            next(error)
        }

    }
}