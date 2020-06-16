const knex = require('../database');

module.exports = {

    async index(request, response) {
        
        const category = await knex('categories').select('title', 'img_url','id_section');
        const section = await knex('sections');

        let i = 1;

        const mixed = section.map(items => {

            if(items.id == i) {
                
                i += 1;
                return {
                    "Section" : items.name,
                    "Subcategory": category.filter(elements => elements.id_section == items.id)
                }
            
            }

        });

       
        return response.json(mixed);

    }

};