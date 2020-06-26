// Arq de config da conexao
const environment = process.env.ENVIRONMENT || 'development'
const knexfile = require('../../knexfile')[environment];
const knex = require('knex')(knexfile);

module.exports = knex;