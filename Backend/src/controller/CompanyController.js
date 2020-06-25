const knex = require('../database')
const bcrypt = require('bcrypt')


module.exports = {

    // Cadastrar uma empresa (tela de cadastro)

    async create(request, response, next) {

         try {
    
            const hashedPassword = await bcrypt.hash(request.body.password, 10)

            const { name, email, cpf, cell, address, id_categories, type } = request.body;
    
            const company = { name, email, cpf, cell, address, password: hashedPassword, id_categories, type};

            const checkEmail = await knex('company').where({ email });

            if (checkEmail.length !== 0) {
                response.status(403).send()
               return response.json({ msg: 'Já existe uma conta com esse email cadastrado' });

            }

            await knex('company').insert(company);
    
            response.status(201).send()

            return response.json(company);
            
        } catch (error) {
            
            response.status(404).send()
            
            next(error)
        }

    },

   
    // Listar empresas filtrando pela categoria (parte clientes)

    async index(request, response, next) {

        try {
           const { id_categories } = request.query;

           const companies = await knex('company')
           .where({ id_categories }).select('id','name', 'address', 'img_url', 'id_categories');

           response.status(200).send()

           return response.json(companies);

        } catch (error) {  
            
            response.status(404).send()
            
            next(error)
        }

    },


    // Mostrar dados de uma empresa especifico (perfil)

    async show(request, response, next) {
   
        try {
            const { id } = request.params;
            
            const company = await knex('company')
            .where({ id });
    
            response.status(200).send()

            return response.json(company)
            
        } catch (error) {
            
            response.status(404).send()
           
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

            response.status(200).send()
            
            return response.json(newdata)

        } catch (error) {
            
            response.status(404).send()
            
            next(error)
        }

    },


    // Deletar uma empresa  (perfil)

    async delete(request, response, next) {

        try {
            const { id } = request.params;
    
            await knex('company').where('id', id).del();
      
            response.status(200).send()
           
            return response.json({msg: 'empresa deletado com sucesso!'});
            
        } catch (error) {
            
            response.status(404).send()
            
            next(error)
        }

    }
 
    
}