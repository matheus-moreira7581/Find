exports.seed = function(knex) {

  return knex('requests').del()
  .then(function() {

      return knex('requests').insert([
        {id_client: 1,	id_company: 2, id_address: 2, total: 30.00, payment: 'Dinheiro', local: 'Endereço do cliente', schedule: '15:00'},
        {id_client: 1,	id_company: 2, id_address: 2, total: 45.00, payment: 'Dinheiro', local: 'Endereço do cliente', schedule: '16:00'}
      ]);

  });
}