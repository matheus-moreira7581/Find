exports.seed = function(knex) {

    return knex('clients').del()
    .then(function() {

        return knex('clients').insert([
            {name: 'Fulano', email:"fulano@mail.com", password:"789456", cell:"139876543", img_url:"my-photo"},
            {name: 'Ciclano', email:"ciclano@mail.com", password:"456123", cell:"139123456", img_url:"my-photo"},
            {name: 'Beltrano', email:"beltrano@mail.com", password:"123789", cell:"139321654", img_url:"my-photo"}
        ]);

    });
}