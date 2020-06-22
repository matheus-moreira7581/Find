const knex = require('../database')
const bcrypt = require('bcrypt')

module.exports = {

     // Login para Empresas (tela de login)

     async login(request, response, next) {
        try 
        {
        const { email, password} = request.body;
            
        const user = await knex('company')
        .where({ email });

       
       if (user.length == 0) {

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
      

   }
}