const knex = require('../database')
const bcrypt = require('bcrypt')

module.exports = {

     // Login para Usuários (empresa/cliente)

     async login(request, response, next) {

        try {

          const { email, password } = request.body;
            
          const client = await knex('clients')
          .where({ email })
          .select('email', 'password');

          const company = await knex('company')
          .where({ email })
          .select('email', 'password');


       
          if (client.length == 0 && company.length == 0) {

            return response.status(400).send('Cannot find user')

          } 
        
          if(await bcrypt.compare(password, client[0].password)) {

            response.send('Success')

          } 
          else {
            response.send('Not Allowed')
          } 
  
        } catch (error) 
        {  
            next(error)
        }
      

   }
}