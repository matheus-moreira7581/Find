exports.seed = function(knex) {

    return knex('sections').del()
    .then(function() {

        return knex('sections').insert([
            {name: "Alimentação", type:"product"},
            {name: "Derivados", type:"product"},
            {name: "Saúde", type:"product"},
            {name: "Moda e beleza", type:"product"},
            {name: "Educação", type:"product"},
            {name: "Construção", type:"product"},
            {name: "Moda e beleza", type:"service"},
            {name: "Saúde", type:"service"},
            {name: "Design", type:"service"},
            {name: "Serviços Domésticos", type:"service"},
        ]);

    });
}