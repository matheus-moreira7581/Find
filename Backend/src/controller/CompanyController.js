const knex = require('../database')
const bcrypt = require('bcrypt')


module.exports = {

    // Cadastrar uma empresa (tela de cadastro)

    async create(request, response, next) {

         try {
    
            const hashedPassword = await bcrypt.hash(request.body.password, 10)

            const { name, email, cpf, date_birth, address, id_categories, type, hours_schedule } = request.body;

    
            const company = { name, email, cpf, date_birth, address, password: hashedPassword, id_categories, type, hours_schedule};

            const checkEmail = await knex('company').where({ email });

            if (checkEmail.length !== 0) {
                return response.status(403).json({ msg: 'Já existe uma conta com esse email cadastrado' });

            }

            await knex('company').insert(company);
    
            response.status(201).json(company);
            
        } catch (error) {
            next(error)
        }

    },

   
    // Listar empresas filtrando pela categoria (parte clientes)

    async index(request, response, next) {

        try {
           const { id_categories } = request.query;

           const companies = await knex('company')
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
            
            const company = await knex('company')
            .where({ id });
    
            response.status(200).json(company)
            
        } catch (error) {
            next(error)
        }

    },


    // Atualizar dados de uma empresa (perfil)

    async update(request, response, next) { 

        try {
          
            const { id } = request.params;

            const { name, cell, address, img_url} = request.body;

            await knex('company').where({ id }).update({name, cell, address, img_url})

            const newdata = await knex('company').where({ id })

            response.status(200).json(newdata)

        } catch (error) {
            next(error)
        }

    },


    // Deletar uma empresa  (perfil)

    async delete(request, response, next) {

        try {
            const { id } = request.params;
    
            await knex('company').where('id', id).del();
      
            response.status(200).json({msg: 'empresa deletado com sucesso!'});
            
        } catch (error) {
            next(error)
        }

    }
 
    
}