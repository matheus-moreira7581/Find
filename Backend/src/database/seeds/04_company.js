exports.seed = function(knex) {

    return knex('companies').del()
    .then(function() {

        return knex('companies').insert([
            {name: 'Tasty Pizza', email:"tastypizza@gmail.com", password:"$2b$10$PBynjWrJdb28w.0xBfJMTujiJAoIA5h/EIRXHcswtwx5hTApJIh3O", type:"product",
            cpf: "24586875469", date_birth:"10/10/1992", address:"R. José da Costa Monteiro, 625", img_url:"https://res.cloudinary.com/dbehp0gsj/image/upload/v1593793176/uploads/tasty_pizza_xfb7ru.png", id_categories: 2}
        ]);

    });
}