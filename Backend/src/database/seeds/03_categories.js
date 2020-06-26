exports.seed = function(knex) {

    return knex('categories').del()
    .then(function() {

        return knex('categories').insert([
            {title: "Restaurante", img_url: "", id_section: 1},
            {title: "Pizzaria", img_url: "", id_section: 1},
            {title: "Hamburguer", img_url: "", id_section: 1},
            {title: "Padaria", img_url: "", id_section: 1},
            {title: "Mercados", img_url: "", id_section: 1},
            {title: "Barbeiro", img_url: "", id_section: 7},
            {title: "Odontologia", img_url: "", id_section: 8},
            {title: "UX | UI Design", img_url: "", id_section: 9},
            {title: "Cozinhaira", img_url: "", id_section: 10},
            {title: "Babá", img_url: "", id_section: 10},
        ]);
    });
}