const knex = require('../database');


module.exports = {

    // Listar seções e subseções (tela da home)

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
    
            response.status(200).send()

            return response.json(mixed);
            
        } catch (error) {
            response.status(403).send()
            next(error)

        }
       

    },

    // Listar todas as categorias (opções para tela de cadastro)

    async listCategories(request, response, next) {
        try {
            const categories = await knex('categories').select('id', 'title');

            response.status(200).send()

            return response.json(categories);
            
        } catch (error) {
            response.status(404).send()
            next(error)
        }
    }

};