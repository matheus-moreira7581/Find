const knex = require('../database')
const bcrypt = require('bcrypt')


module.exports = {

    // Cadastrar uma empresa (tela de cadastro)

    async create(request, response, next) {

         try {
    
            const hashedPassword = await bcrypt.hash(request.body.password, 10)

            const { name, email, cpf, date_birth, address, id_categories, type, hours_schedule } = request.body;

    
            const company = { name, email, cpf, date_birth, address, password: hashedPassword, id_categories, type, hours_schedule};

            const checkEmail = await knex('companies').where({ email });

            if (checkEmail.length !== 0) {
                return response.status(403).json({ msg: 'Já existe uma conta com esse email cadastrado' });

            }

            await knex('companies').insert(company);
    
            response.status(201).json(company);
            
        } catch (error) {
            next(error)
        }

    },

   
    // Listar empresas filtrando pela categoria (parte clientes)

    async index(request, response, next) {

        try {
           const { id_categories } = request.query;

           const companies = await knex('companies')
           .where({ id_categories })
           .orderBy('status', 'desc')
           .select('id','name', 'address', 'img_url', 'id_categories', 'status');

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
          
            const { id } = request.params;

            const { name, date_birth, address, img_url, hours_schedule} = request.body;

            await knex('companies').where({ id }).update({ name, date_birth, address, img_url, hours_schedule})

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