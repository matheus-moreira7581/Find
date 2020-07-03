exports.seed = function(knex) {

  return knex('products').del()
  .then(function() {

      return knex('products').insert([
        {name: 'Calabresa c/ Queijo', description: 'Molho, calabresa, mozzarella e azeitona.', price: 44.00, img_url: 'https://res.cloudinary.com/dbehp0gsj/image/upload/v1593793748/uploads/calabresa_dwykzy.png', limit_time: '5', id_company: 3},
        {name: 'Três Queijos', description: 'Molho, mozzarella, requeijão e parmesão ralado.', price: 40.00, img_url: 'https://res.cloudinary.com/dbehp0gsj/image/upload/v1593793748/uploads/3_queijos_cnlxmd.png', limit_time: '5', id_company: 3},
        {name: 'Marguerita', description: 'Molho, mozzarella, tomate e manjericão.', price: 39.00, img_url: 'https://res.cloudinary.com/dbehp0gsj/image/upload/v1593793748/uploads/marguerita_bzzp8i.png', limit_time: '5', id_company: 3},
        {name: 'Carne Seca', description: 'Molho, mozzarella e carne seca.', price: 40.50, img_url: 'https://res.cloudinary.com/dbehp0gsj/image/upload/v1593793748/uploads/carne_seca_o7epij.png', limit_time: '5', id_company: 3},
        {name: 'Frango c/ Catupiry', description: 'Molho, frango desfiado e catupiry.', price: 38.00, img_url: 'https://res.cloudinary.com/dbehp0gsj/image/upload/v1593793748/uploads/frango_rajrxw.png', limit_time: '5', id_company: 3},
        {name: 'Portuguesa', description: 'Molho, mozzarella, tomate, milho, calabresa, cebola, ovo, palmito e azeitona.', price: 40.00, img_url: 'https://res.cloudinary.com/dbehp0gsj/image/upload/v1593793748/uploads/portuguesa_dnoacy.png', limit_time: '5', id_company: 3}
      ]);

  });
}