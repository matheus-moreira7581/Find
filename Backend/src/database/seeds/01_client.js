exports.seed = function(knex) {

    return knex('clients').del()
    .then(function() {

        return knex('clients').insert([
            {name: 'Lucas', email:"lucas@gmail.com", password:"$2b$10$RIreFY3xsYTO9OFq94ZJZeuf/jn8/izsoNXxs8C4SdSNXDvVStNO6", cell:"(11) 98582-4725", img_url:"https://res.cloudinary.com/dbehp0gsj/image/upload/v1593793320/uploads/lucas_bjwm0g.png"},
        ]);

    });
}