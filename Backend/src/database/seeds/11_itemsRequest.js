exports.seed = function(knex) {

    return knex('items_request').del()
    .then(function() {
  
        return knex('items_request').insert([
          {id_request: 1, id_service: 1, details: ''},
          {id_request: 1, id_service: 2, details: ''},
          {id_request: 2, id_service: 1, details: ''},
          {id_request: 2, id_service: 3, details: ''},
        ]);
  
    });
  }