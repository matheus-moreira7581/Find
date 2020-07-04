exports.seed = function(knex) {

    return knex('items_order').del()
    .then(function() {
  
        return knex('items_order').insert([
          {id_order: 1, id_product: 1, amount: 2, details: ''},
          {id_order: 1, id_product: 2, amount: 1, details: ''},
          {id_order: 2, id_product: 3, amount: 1, details: ''},
          {id_order: 2, id_product: 4, amount: 3, details: ''},
        ]);
  
    });
  }