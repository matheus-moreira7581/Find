const knex = require('../database');
const bcrypt = require('bcrypt');

module.exports = {

    // Cadastrar um cliente (tela de cadastro - cliente)

    async create(request, response, next) {

         try {
            const hashedPassword = await bcrypt.hash(request.body.password, 10)

            const { name, email, cell } = request.body;
    
            const client = { name, email, cell, password: hashedPassword };

            const checkEmail = await knex('clients').where({ email });

            if (checkEmail.length !== 0) {
                
                return response.status(403).json({ msg: 'Já existe uma conta com esse email cadastrado' });

            }

            await knex('clients').insert(client);
            
            response.status(201).json(client);
            
        } catch (error) {
            next(error)
        }

    },


    // Listar clientes (apenas para desenvolvimento)

    async index(request, response, next) {

        try {
            const clients = await knex('clients');
    
            response.json(clients);
            
        } catch (error) {  
            next(error)
        }

    },

    // Mostrar dados de um cliente especifico (perfil)

    async show(request, response, next) {
   
        try {
            const { id } = request.params;
            
            const client = await knex('clients')
            .where({ id });
    
            response.status(200).json(client)
            
        } catch (error) {
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

            response.status(200).json(newdata)

        } catch (error) {
            next(error)
        }

    },

    // Deletar um cliente e seus endereços (perfil)

    async delete(request, response, next) {

        try {
            const { id } = request.params;
    
            await knex('clients').where('id', id).del();
    
            response.status(200).json({msg: 'cliente deletado com sucesso!'});
            
        } catch (error) {
            next(error)
        }

    }
 
    
}