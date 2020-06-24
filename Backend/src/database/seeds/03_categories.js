exports.seed = function(knex) {

    return knex('categories').del()
    .then(function() {

        return knex('categories').insert([
            {title: "Restaurante", img_url: "", id_section: 1},
            {title: "Pizzaria", img_url: "", id_section: 1},
            {title: "Hamburguer", img_url: "", id_section: 1},
            {title: "Padaria", img_url: "", id_section: 1},
            {title: "Mercados", img_url: "", id_section: 1},
            {title: "Atacados", img_url: "", id_section: 1}
        ]);
    });
}