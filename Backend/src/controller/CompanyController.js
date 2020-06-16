const knex = require('../database');
const bcrypt = require('bcrypt')


module.exports = {

    // Cadastrar uma empresa

    async create(request, response, next) {

         try {
            const { id_categories } = request.params;

            const hashedPassword = await bcrypt.hash(request.body.password, 10)

            const { name, email, cpf, cell, address} = request.body;
    
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


    // Login Clientes

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


    // Listar clientes

    async index(request, response, next) {

        try {
            const company = await knex('company');
    
            return response.json(company);
            
        } catch (error) {  
            next(error)
        }

    },

    // Mostrar dados de um cliente especifico

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

    // Atualizar dados de um cliente

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

    // Deletar uma empresa;

    async delete(request, response, next) {

        try {
            const { id } = request.params;
    
            const trx = await knex.transaction();

            await trx('company').where('id', id).del();
    
            await trx.commit();
    
            return response.json({msg: 'empresa deletado com sucesso!'});
            
        } catch (error) {
            next(error)
        }

    }
 
    
}