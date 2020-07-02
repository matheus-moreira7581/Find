const knex = require('../database');


module.exports = {

    // Add produtos

    async create(request, response, next) {

        try {

        const { name, description, price, img_url, limit_time, id_company } = request.body;

            const item = { name, description, price, img_url, limit_time, id_company };

            await knex('products').insert(item);

            response.status(201).json(item);
            

        } catch (error) {
            next(error)
        }
    },


    // Listar produtos 

    async index(request, response, next) {

        try {

            const { id_company } = request.params; 
    
            const products = await knex('products').where({ id_company });
    
            response.json(products);

            
        } catch (error) {
            next(error)

        }


    },

    
    // Listar produtos na tela do cliente, 
    // classificar por empresa (tela 28)
    // Parte do cliente

    async show(request, response, next) {

        try {

            const { id_company } = request.query;

            const product = await knex('products')
            .where({ id_company })
            .select('id', 'img_url', 'name', 'description', 'price');

            const company = await knex('companies')
            .where('id', id_company)
            .select('img_url', 'name', 'address');

            const data = company.map(items => {

                return {
                    "img_url": items.img_url,
                    "title": items.name,
                    "address": items.address,
                    "products": product
                }

            });

            response.json(data);
            
        } catch (error) {
            next(error)
        }

    },

    //Listar um único produto
    async getProduct(request, response, next){
        try{
            const { id } = request.params;

            const product = await knex('products').where({ id });

            response.json(product);
        }
        catch(error){
            next(error);
        }
    },
    
    // Atualizar dados de um produto

    async update(request, response, next) { 

        try {
          
            const { id } = request.params;

            const { img_url, name, description, price, limit_time } = request.body;

            await knex('products')
            .where({ id })
            .update({img_url, name, description, price, limit_time});

            const newdata = await knex('products').where({ id })

            response.status(200).json(newdata)

        } catch (error) {
            next(error)
        }

    },


    // Deletar um produto

    async delete(request, response, next) {

        try {
            const { id } = request.params;
    
            await knex('products').where('id', id).del();
      
            response.status(200).json({msg: 'Produto deletado com sucesso!'});
            
        } catch (error) {
            next(error)
        }

    }

}