exports.up = knex => knex.schema.createTable('clients', table => {

    table.increments('id')
    table.string('name', 255).notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.string('cell', 255).notNullable()
    table.string('img_url').nullable()
    table.timestamp('deleted_at')

})


exports.down = knex => knex.schema.dropTable('clients')