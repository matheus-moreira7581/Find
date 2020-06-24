const knex = require('../database')
const bcrypt = require('bcrypt')

module.exports = {

     // Login para Usuários (empresa/cliente)

     async login(request, response, next) {

        try {

          const { email, password } = request.body;
            
          const client = await knex('clients')
          .where({ email });
          

          const company = await knex('company')
          .where({ email });
          


       
          if (client.length == 0 && company.length == 0) {

            return response.status(400).send('Cannot find user')

          } 

          function validation() {
            if(company.length !== 0) {

              return company[0]

            }else {

              return client[0]

            }
          }
          
          let user = validation();
        
          if(await bcrypt.compare(password, user.password)) {

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
