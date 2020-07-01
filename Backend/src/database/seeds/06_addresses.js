exports.seed = function(knex) {

  return knex('addresses').del()
  .then(function() {

      return knex('addresses').insert([
        {street: 'rua rei aberto 1', neighborhood: 'ponta da praia', ad_number: 55, additional: 'apto 12', landmark: 'mercado'}
      ]);

  });
}