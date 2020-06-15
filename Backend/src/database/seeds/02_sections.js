exports.seed = function(knex) {

    return knex('sections').del()
    .then(function() {

        return knex('sections').insert([
            {title: "Alimentação"},
            {title: "Derivados"},
            {title: "Saúde"},
            {title: "Moda e beleza"},
            {title: "Educação"},
            {title: "Construção"}
        ]);

    });
}