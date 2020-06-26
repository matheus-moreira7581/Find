exports.seed = function(knex) {

    return knex('company').del()
    .then(function() {

        return knex('company').insert([
            {name: 'Aço puro', email:"aço@mail.com", password:"987654", type:"service",
            cpf: "1234567891", date_birth:"10/10/1997", address:"av. são cristóvão", img_url:"my-photo", id_categories: 1},
            {name: 'Ouro puro', email:"ouro@mail.com", password:"123456", type:"product",
            cpf: "1234567891", date_birth:"10/10/1997", address:"av. são cristóvão", img_url:"my-photo", id_categories: 1}
        ]);

    });
}