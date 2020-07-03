const knex = require('../database')
const bcrypt = require('bcrypt')

const cloudinary = require('../config/cloudinary')
const fs = require('fs')

module.exports = {

    // Cadastrar uma empresa (tela de cadastro)

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

            const hashedPassword = await bcrypt.hash(request.body.password, 10)

            const { name, email, cpf, date_birth, address, id_categories, type, status, hours_schedule } = request.body;
            
            const item = [{ name, email, cpf, date_birth, address, password: hashedPassword, id_categories, type, status, hours_schedule}];


            const company = item.map(element => {
                return {
                    "img_url": urls[0].url,
                    ...element
                }
            })

            const checkEmail = await knex('companies').where({ email });

            if (checkEmail.length !== 0) {
                return response.status(403).json({ msg: 'Já existe uma conta com esse email cadastrado' });

            }

            await knex('companies').insert(company);
    
            return response.status(201).json(company);
            
        } catch (error) {
            next(error)
        }

    },

   
    // Listar empresas filtrando pela categoria (parte clientes)

    async index(request, response, next) {

        try {
           const { id_categories } = request.query;

           const companies = await knex('companies')
           .where({ id_categories }).select('id','name', 'address', 'img_url', 'id_categories');

           response.status(200).json(companies);

        } catch (error) {  
            next(error)
        }

    },


    // Mostrar dados de uma empresa especifico (perfil)

    async show(request, response, next) {
   
        try {
            const { id } = request.params;
            
            const company = await knex('companies')
            .where({ id });
    
            response.status(200).json(company)
            
        } catch (error) {
            next(error)
        }

    },


    // Atualizar dados de uma empresa (perfil)

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

            const { name, cell, address} = request.body;

            const item = [{ name, cell, address}];
            
            const company = item.map(element => {
                return {
                    "img_url": urls[0].url,
                    ...element
                }
            })

            await knex('companies').where({ id }).update({company})

            const newdata = await knex('companies').where({ id })

            response.status(200).json(newdata)

        } catch (error) {
            next(error)
        }

    },


    // Deletar uma empresa  (perfil)

    async delete(request, response, next) {

        try {
            const { id } = request.params;
    
            await knex('companies').where('id', id).del();
      
            response.status(200).json({msg: 'empresa deletado com sucesso!'});
            
        } catch (error) {
            next(error)
        }

    }
 
    
}