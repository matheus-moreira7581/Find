exports.seed = function(knex) {

    return knex('company').del()
    .then(function() {

        return knex('company').insert([
            {name: 'Aço puro', email:"aço@mail.com", password:"987654", type:"service",
            cpf: "1234567891", date_birth:"10/10/1997", address:"av. são cristóvão", img_url:"my-photo", id_categories: 1},
            {name: 'Ouro puro', email:"ouro@mail.com", password:"123456", type:"product",
            cpf: "1234567891", date_birth:"10/10/1997", address:"av. são cristóvão", img_url:"my-photo", id_categories: 1},
            {name: 'Tasty Pizza', email:"tastypizza@gmail.com", password:"$2b$10$PBynjWrJdb28w.0xBfJMTujiJAoIA5h/EIRXHcswtwx5hTApJIh3O", type:"product",
            cpf: "24586875469", date_birth:"10/10/1992", address:"R. José da Costa Monteiro, 625", img_url:"my-photo", id_categories: 2}
        ]);

    });
}