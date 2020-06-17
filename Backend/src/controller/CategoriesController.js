const knex = require('../database');


module.exports = {

    // Listar seções e subseções

    async index(request, response, next) {
        try {

            const category = await knex('categories').select('title', 'img_url','id_section');
            const section = await knex('sections');
    
    
            const mixed = section.map(items => {
    
                if(category.find(e => items.id == e.id_section ? true : false)) {
    
                    return {
                        "Section" : items.name,
                        "Subcategory": category.filter(elements => elements.id_section == items.id)
                    }
                
                } 
    
            });
    
            return response.json(mixed);
            
        } catch (error) {

            next(error)

        }
       

    }


};