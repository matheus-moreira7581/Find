exports.seed = function(knex) {
    return knex('client').del()
    .then(() => {})
}