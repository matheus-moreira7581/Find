exports.seed = function(knex) {

  return knex('products').del()
  .then(function() {

      return knex('products').insert([
        {name: 'Calabresa c/ Queijo', description: 'Molho, calabresa, mozzarella e azeitona.', price: 44.00, img_url: '', limit_time: '5', id_company: 3},
        {name: 'Três Queijos', description: 'Molho, mozzarella, requeijão e parmesão ralado.', price: 40.00, img_url: '', limit_time: '5', id_company: 3},
        {name: 'Marguerita', description: 'Molho, mozzarella, tomate e manjericão.', price: 39.00, img_url: '', limit_time: '5', id_company: 3},
        {name: 'Carne Seca', description: 'Molho, mozzarella e carne seca.', price: 40.50, img_url: '', limit_time: '5', id_company: 3},
        {name: 'Frango c/ Catupiry', description: 'Molho, frango desfiado e catupiry.', price: 38.00, img_url: '', limit_time: '5', id_company: 3}
      ]);

  });
}