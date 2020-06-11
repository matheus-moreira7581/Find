const knex = require('../database');
const bcrypt = require('bcrypt')


module.exports = {

    // Cadastrar um cliente

    async create(request, response, next) {

         try {
            const hashedPassword = await bcrypt.hash(request.body.password, 10)

            const { name, email, cell, password } = request.body;
    
            const client = { name, email, cell, password: hashedPassword };
    
            await knex('clients').insert(client);
    
            return response.json(client);
            
        } catch (error) {
            next(error)
        }

    },


    // Login Clientes

    async login(request, response, next) {

        try {
            const clients = await knex('clients');

            if(await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
            }
            else 
            {
                res.send('Not Allowed')
            }
            //return response.json(clients);
            
        } catch (error) {  
            next(error)
        }

   },


    // Listar clientes

    async index(request, response, next) {

        try {
            const clients = await knex('clients');
    
            return response.json(clients);
            
        } catch (error) {  
            next(error)
        }

    },

    // Mostrar dados de um cliente especifico

    async show(request, response, next) {
   
        try {
            const { id } = request.params;
            
            const client = await knex('clients')
            .where({ id });
    
            return response.json(client)
            
        } catch (error) {
            next(error)
        }

    },

    // Atualizar dados de um cliente

    async update(request, response, next) { 

        try {
          
            const { id } = request.params;

            const { name, cell, img_url} = request.body;

            await knex('clients').where({ id }).update({name, cell, img_url})

            const newdata = await knex('clients').where({ id })

            return response.json(newdata)

        } catch (error) {
            next(error)
        }

    },

    // Deletar um cliente e seus endereços;

    async delete(request, response, next) {

        try {
            const { id } = request.params;
    
            const trx = await knex.transaction();
    
            await trx('addresses').where('id_clients', id).del();
    
            await trx('clients').where('id', id).del();
    
    
            await trx.commit();
    
            return response.json({msg: 'cliente deletado com sucesso!'});
            
        } catch (error) {
            next(error)
        }

    }
 
    
}