const knex = require('../database');
const bcrypt = require('bcrypt')


module.exports = {

    // Cadastrar um cliente (tela de cadastro - cliente)

    async create(request, response, next) {

         try {
            const hashedPassword = await bcrypt.hash(request.body.password, 10)

            const { name, email, cell } = request.body;
    
            const client = { name, email, cell, password: hashedPassword };

            const checkEmail = await knex('clients').where({ email });

            if (checkEmail.length !== 0) {
                
                response.status(403).send()
               
                return response.json({ msg: 'Já existe uma conta com esse email cadastrado' });

            }

            await knex('clients').insert(client);
            
            response.status(201).send()
            
            return response.json(client);
            
        } catch (error) {
            
            response.status(404).send()
            
            next(error)
        }

    },


    // Listar clientes (apenas para desenvolvimento)

    async index(request, response, next) {

        try {
            const clients = await knex('clients');
    
            return response.json(clients);
            
        } catch (error) {  
            
            response.status(404).send()
            
            next(error)
        }

    },

    // Mostrar dados de um cliente especifico (perfil)

    async show(request, response, next) {
   
        try {
            const { id } = request.params;
            
            const client = await knex('clients')
            .where({ id });
    
            response.status(200).send()

            return response.json(client)
            
        } catch (error) {
            
            response.status(404).send()
            
            next(error)
        }

    },

    // Atualizar dados de um cliente (perfil)

    async update(request, response, next) { 

        try {
          
            const { id } = request.params;

            const { name, cell, img_url} = request.body;

            await knex('clients').where({ id }).update({name, cell, img_url})

            const newdata = await knex('clients').where({ id })

            response.status(200).send()
            
            return response.json(newdata)

        } catch (error) {
            
            response.status(404).send()
            
            next(error)
        }

    },

    // Deletar um cliente e seus endereços (perfil)

    async delete(request, response, next) {

        try {
            const { id } = request.params;
    
            const trx = await knex.transaction();

            await trx('addresses').where('id_clients', id).del();
    
            await trx('clients').where('id', id).del();
    
    
            await trx.commit();
    
            response.status(200).send()
            
            return response.json({msg: 'cliente deletado com sucesso!'});
            
        } catch (error) {
            
            response.status(404).send()
            
            next(error)
        }

    }
 
    
}