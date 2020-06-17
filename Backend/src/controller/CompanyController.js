const knex = require('../database');
const bcrypt = require('bcrypt')


module.exports = {

    // Cadastrar uma empresa

    async create(request, response, next) {

         try {
    
            const hashedPassword = await bcrypt.hash(request.body.password, 10)

            const { name, email, cpf, cell, address, id_categories } = request.body;
    
            const company = { name, email, cpf, cell, address, password: hashedPassword, id_categories};

            const checkEmail = await knex('company').where({ email });

            if (checkEmail.length !== 0) {

               return response.json({ msg: 'Já existe uma conta com esse email cadastrado' });

            }

            await knex('company').insert(company);
    
            return response.json(company);
            
        } catch (error) {
            next(error)
        }

    },


    // Login Empresa

    async login(request, response, next) {
        try 
        {
        const { email, password} = request.body;
            
        const company = await knex('company')
        .where({ email });

       
       if (company.length == 0) {

          return response.status(400).send('Cannot find user')

        } 
        
        if(await bcrypt.compare(password, company[0].password)) {

            response.send('Success')

          } 
          else {

            response.send('Not Allowed')

          } 
  
        } catch (error) 
        {  
            next(error)
        }

   },

   
    // Listar empresas filtrando pela categoria 

    async index(request, response, next) {

        try {
           const { id_categories } = request.query;

           const companies = await knex('company')
           .where({ id_categories });

           return response.json(companies);

        } catch (error) {  
            next(error)
        }

    },


    // Mostrar dados de uma empresa especifico

    async show(request, response, next) {
   
        try {
            const { id } = request.params;
            
            const company = await knex('company')
            .where({ id });
    
            return response.json(company)
            
        } catch (error) {
            next(error)
        }

    },


    // Atualizar dados de uma empresa

    async update(request, response, next) { 

        try {
          
            const { id } = request.params;

            const { name, cell, address, img_url} = request.body;

            await knex('company').where({ id }).update({name, cell, address, img_url})

            const newdata = await knex('company').where({ id })

            return response.json(newdata)

        } catch (error) {
            next(error)
        }

    },


    // Deletar uma empresa

    async delete(request, response, next) {

        try {
            const { id } = request.params;
    
            await knex('company').where('id', id).del();
      
            return response.json({msg: 'empresa deletado com sucesso!'});
            
        } catch (error) {
            next(error)
        }

    }
 
    
}