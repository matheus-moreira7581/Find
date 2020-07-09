exports.seed = function(knex) {

    return knex('companies').del()
    .then(function() {

        return knex('companies').insert([
            {name: "Borges Santos", company_name: "Tasty Pizza", email:"tastypizza@gmail.com", password:"$2b$10$PBynjWrJdb28w.0xBfJMTujiJAoIA5h/EIRXHcswtwx5hTApJIh3O", type:"product",
            cpf: "245.868.754-69", date_birth:"10/10/1992", address:"R. José da Costa Monteiro, 625", img_url:"https://res.cloudinary.com/dbehp0gsj/image/upload/v1593793176/uploads/tasty_pizza_xfb7ru.png", id_categories: 2},

            {name: "Luiza Moreira Santos", company_name: "Uncle B's - Barbershop", email:"uncleb@gmail.com", password:"$2b$10$PBynjWrJdb28w.0xBfJMTujiJAoIA5h/EIRXHcswtwx5hTApJIh3O", type:"service",
            cpf: "548.624.587-98", date_birth:"10/10/1991", address:"R. José da Costa Monteiro, 625", hours_schedule:["13:00", "13:30", "14:00", "14:30", "15:00", "15:30"], 
            img_url:"https://res.cloudinary.com/dbehp0gsj/image/upload/v1594050778/uploads/Uncle_zpipvm.png", id_categories: 15}
        ]);

    });
}