exports.seed = function(knex) {

  return knex('items_cart').del()
  .then(function() {

      return knex('items_cart').insert([
        {id_order: 1, id_products: 1, amount: 2, details: ''},
        {id_order: 1, id_products: 2, amount: 1, details: ''},
        {id_order: 2, id_products: 3, amount: 1, details: ''},
        {id_order: 2, id_products: 4, amount: 3, details: ''},
      ]);

  });
}