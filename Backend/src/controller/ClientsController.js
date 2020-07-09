const knex = require('../database');
const bcrypt = require('bcrypt');

const cloudinary = require('../config/cloudinary')
const fs = require('fs')

module.exports = {

    // Cadastrar um cliente (tela de cadastro - cliente)

    async create(request, response, next) {

         try {

            const hashedPassword = await bcrypt.hash(request.body.password, 10)

            const { name, email, cell } = request.body;
    
            const client = [{ name, email, cell, password: hashedPassword }];


            const checkEmail = await knex('clients').where({ email });

            if (checkEmail.length !== 0) {
                
                return response.status(403).json({ msg: 'Já existe uma conta com esse email cadastrado' });

            }

            await knex('clients').insert(client);
            
            response.status(201).json(client);
            
        } catch (error) {
            next(error)
        }

    },


    // Listar clientes (apenas para desenvolvimento)

    async index(request, response, next) {

        try {
            const clients = await knex('clients');
    
            response.json(clients);
            
        } catch (error) {  
            next(error)
        }

    },

    // Mostrar dados de um cliente especifico (perfil)

    async show(request, response, next) {
   
        try {
            const { id } = request.params;
            
            const client = await knex('clients')
            .where({ id });
    
            response.status(200).json(client)
            
        } catch (error) {
            next(error)
        }

    },


    // Atualizar dados de um cliente (perfil)

    async update(request, response, next) { 

        try {
          
            const uploader = async (path) => await cloudinary.uploads(path,'images')

            const urls = []

            const file = request.file

            const {path} = file

            const newPath = await uploader(path)

            urls.push(newPath)

            fs.unlinkSync(path)

            const { id } = request.params;

            const { name, cell } = request.body;

            const item = [{ name, cell}];

            const client = item.map(element => {
                return {
                    "img_url": urls[0].url,
                    ...element
                }
            })

            await knex('clients').where({ id }).update({client})

            const newdata = await knex('clients').where({ id })

            response.status(200).json(newdata)

        } catch (error) {
            next(error)
        }

    },

    // Deletar um cliente e seus endereços (perfil)

    async delete(request, response, next) {

        try {
            const { id } = request.params;
    
            await knex('clients')
            .where({id})
            .update('deleted_at', new Date());
    
            response.status(200).json({msg: 'Cliente deletado com sucesso!'});
            
        } catch (error) {
            next(error)
        }

    }
 
    
}