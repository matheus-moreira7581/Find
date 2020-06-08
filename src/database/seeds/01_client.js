exports.seed = function(knex) {

    return knex('clients').del()
    .then(function() {

        return knex('clients').insert([
            {name: 'Rodrigo', email:"mail@mail.com", password:"12345", cell:"13991090415", img_url:"my-photo"},
            {name: 'Samuel', email:"smail@mail.com", password:"12345", cell:"13991090415", img_url:"my-photo"},
            {name: 'mac3', email:"mmail@mail.com", password:"12345", cell:"13991090415", img_url:"my-photo"}
        ]);

    });
}