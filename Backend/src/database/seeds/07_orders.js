exports.seed = function(knex) {

  return knex('orders').del()
  .then(function() {

      return knex('orders').insert([
        {id_client: 1,	id_company: 1, id_address: 1, total: 128.00, payment: 'Dinheiro', receivement: 'Entregar',},
        {id_client: 1,	id_company: 1, id_address: 1, total: 160.50, payment: 'Dinheiro', receivement: 'Entregar'}
      ]);

  });
}