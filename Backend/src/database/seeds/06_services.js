exports.seed = function(knex) {

  return knex('services').del()
  .then(function() {

      return knex('services').insert([
        {name: 'Corte Masculino', description: 'Corte Masculino utilizando maquina e tesoura.', price: 25.00, img_url: 'https://res.cloudinary.com/dbehp0gsj/image/upload/v1594051077/uploads/Cortes_masculinos_phh7hl.png', id_company: 2},

        {name: 'Sobrancelha Masculina', description: 'A sobrancelha é feita por meio da gilete e tesoura.', price: 5.00, img_url: 'https://res.cloudinary.com/dbehp0gsj/image/upload/v1594051075/uploads/Sobrancelha_mrjk2k.png', id_company: 2},
        
        {name: 'Barba Masculina', description: 'A barba é feita utilizando a gilete e a maquina com regulagem.', price: 15.00, img_url: 'https://res.cloudinary.com/dbehp0gsj/image/upload/v1594051076/uploads/Barba_fnxvyz.png', id_company: 2},
        
        {name: 'Limpeza de Pele', description: 'A limpeza de pele pode ser definida de acordo com a preferencia do cliente,', price: 40.00, img_url: 'https://res.cloudinary.com/dbehp0gsj/image/upload/v1594051077/uploads/Limpeza_kt4rvo.png', id_company: 2},
      ]);

  });
}