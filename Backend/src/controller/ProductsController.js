const knex = require('../database');

const cloudinary = require('../config/cloudinary')
const fs = require('fs')



module.exports = {

    // Add produtos

    async create(request, response, next) {

        try {

            const uploader = async (path) => await cloudinary.uploads(path,'images')

            const urls = []

            const files = request.files

            for (const file of files) {
            
                const {path} = file
                
                const newPath = await uploader(path)
                
                urls.push(newPath)

                fs.unlinkSync(path)
            }

          
          const { name, description, price, limit_time, id_company } = request.body;

            const item = [{ name, description, price, limit_time, id_company }];

            const product = item.map(element => {
                if(urls.length > 0) {
                    return {
                        "img_url": urls[0].url,...element
                    }
                }
                else return {...element}
            })

            await knex('products').insert(product);
            
            return response.status(201).json(product);


        } catch (error) {
            next(error)
        }
    },


    // Listar produtos 

    async index(request, response, next) {

        try {

            const { id_company } = request.params; 
    
            const products = await knex('products')
            .where({ 
                id_company,
                'deleted_at': null 
            });

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
            .where({ 
                id_company,
                'deleted_at': null 
            })
            .select('id', 'img_url', 'name', 'description', 'price');

            const company = await knex('companies')
            .where('id', id_company)
            .select('img_url', 'company_name', 'address');

            const data = company.map(items => {

                return {
                    "img_url": items.img_url,
                    "title": items.company_name,
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

            const product = await knex('products')
            .where({ id });

            response.json(product);
        }
        catch(error){
            next(error);
        }
    },
    
    // Atualizar dados de um produto

    async update(request, response, next) { 

        try {
          
            const uploader = async (path) => await cloudinary.uploads(path,'images')

            const urls = []

            const files = request.files

            for (const file of files) {
            
                const {path} = file

                const newPath = await uploader(path)

                urls.push(newPath)

                fs.unlinkSync(path)
            }


            const { id } = request.params;

            const { name, description, price, limit_time } = request.body;

            const item = [{ name, description, price, limit_time }];

            const product = item.map(element => {
                return {
                    "img_url": urls[0].url,
                    ...element
                }
            })

            const attributesToUpdate = product[0];

            await knex('products')
            .where({ id })
            .update(attributesToUpdate);

            
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
    
            await knex('products')
            .where({id})
            .update('deleted_at', new Date());
      
            response.status(200).json({msg: 'Produto deletado com sucesso!'});
            
        } catch (error) {
            next(error)
        }

    }

}