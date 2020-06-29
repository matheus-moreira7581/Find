exports.seed = function(knex) {

    return knex('categories').del()
    .then(function() {

        return knex('categories').insert([
            {title: "Restaurante", img_url: "", id_section: 1},
            {title: "Pizzaria", img_url: "", id_section: 1},
            {title: "Hamburguer", img_url: "", id_section: 1},
            {title: "Padaria", img_url: "", id_section: 1},
            {title: "Mercados", img_url: "", id_section: 2},
            {title: "Atacados", img_url: "", id_section: 2},
            {title: "Farmácia", img_url: "", id_section: 3},
            {title: "Suplementos", img_url: "", id_section: 3},
            {title: "Estética", img_url: "", id_section: 4},
            {title: "Moda e Acessórios", img_url: "", id_section: 4},
            {title: "Papelaria", img_url: "", id_section: 5},
            {title: "Livraria", img_url: "", id_section: 5},
            {title: "Material", img_url: "", id_section: 6},
            {title: "Ferramenta", img_url: "", id_section: 6},
            {title: "Barbeiro", img_url: "", id_section: 7},
            {title: "Odontologia", img_url: "", id_section: 8},
            {title: "UX | UI Design", img_url: "", id_section: 9},
            {title: "Babá", img_url: "", id_section: 10},
            {title: "Cozinheira", img_url: "", id_section: 10}
        ]);
    });
}