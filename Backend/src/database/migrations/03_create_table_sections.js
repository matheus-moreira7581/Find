exports.up = knex =>  knex.schema.createTable('sections', table => {

    table.increments('id')
    table.string('name', 255).notNullable()

});

exports.down = knex => knex.schema.dropTable('sections')