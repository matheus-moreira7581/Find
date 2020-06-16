exports.seed = function(knex) {

    return knex('sections').del()
    .then(function() {

        return knex('sections').insert([
            {name: "Alimentação"},
            {name: "Derivados"},
            {name: "Saúde"},
            {name: "Moda e beleza"},
            {name: "Educação"},
            {name: "Construção"}
        ]);

    });
}