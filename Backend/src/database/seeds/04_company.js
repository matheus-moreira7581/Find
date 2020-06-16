exports.seed = function(knex) {

    return knex('company').del()
    .then(function() {

        return knex('company').insert([
            {name: 'Aço puro', email:"aço@mail.com", password:"987654", 
            cpf: "12345678910", cell:"139876543", address:"av. são cristóvão", img_url:"my-photo"},
            {name: 'Ouro puro', email:"ouro@mail.com", password:"123456", 
            cpf: "12345678910", cell:"139876543", address:"av. são cristóvão", img_url:"my-photo"}
        ]);

    });
}