const knex = require('../database');

const cloudinary = require('../config/cloudinary')
const fs = require('fs')

module.exports = {


    // Add serviço

    async create(request, response, next) {

        try {

            const uploader = async (path) => await cloudinary.uploads(path,'images')

            const urls = []

            const file = request.file

            if(file){
                const {path} = file

                const newPath = await uploader(path)

                urls.push(newPath)

                fs.unlinkSync(path)
            }
            
            const { name, description, price, id_company } = request.body;

            const item = [{ name, description, price,  id_company }];

            const service = item.map(element => {
                if(urls.length > 0){
                    return {
                        "img_url": urls[0].url,
                        ...element
                    }
                }
                else return { ...element }
            })

            await knex('services').insert(service);

            response.status(201).send();
        

        } catch (error) {
            next(error)
        }
    },


    // Listar serviço (Tela de empresa) 

    async index(request, response, next) {

        try {

            const { id_company } = request.params; 

            const services = await knex('services')
            .where({ 
                id_company,
                'deleted_at': null 
            })

            response.json(services);

        
        } catch (error) {
            next(error)

        }

    },


    // Listar serviço na tela do cliente, 
    // classificar por empresa (tela 72)
    // tela do cliente

    async show(request, response, next) {

        try {

            const { id_company } = request.query;

            const services = await knex('services')
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
                "services": services
            }

        });

        response.json(data);
        
        } catch (error) {
            next(error)
        }

    },


    //Listar um único serviço (Tela do cliente)

    async getService(request, response, next){
        try{
            const { id } = request.params;

            const service = await knex('services').where({ id });

            response.json(service);

        }catch(error){
            next(error);
        }
    },


    // Atualizar dados de um serviço (Tela de empresa)

    async update(request, response, next) { 

        try {
      
            const uploader = async (path) => await cloudinary.uploads(path,'images')

            const urls = []

            const file = request.file
            
            if(file){
                const {path} = file

                const newPath = await uploader(path)

                urls.push(newPath)

                fs.unlinkSync(path)
            }

            const { id } = request.params;

            const { name, description, price } = request.body;

            const item = [{ name, description, price }];
            
            const service = item.map(element => {
                if(urls.length > 0) {
                    return {
                        "img_url": urls[0].url,...element
                    }
                }
                else return {...element}
            })

            const attributesToUpdate = service[0];

            await knex('services')
            .where({ id })
            .update(attributesToUpdate);

            response.status(200).send();

        } catch (error) {
            next(error)
        }

    },


    // Deletar um serviço (Tela de empresa)

    async delete(request, response, next) {

        try {
            const { id } = request.params;
    
            await knex('services')
            .where({id})
            .update('deleted_at', new Date());
      
            response.status(200).send();
        
        } catch (error) {
            next(error)
        }

    }




}