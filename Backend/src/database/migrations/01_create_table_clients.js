exports.up = knex => knex.schema.createTable('clients', table => {

    table.increments('id')
    table.string('name', 255).notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.string('cell', 255).notNullable()
    table.string('img_url').nullable().defaultTo('https://discordapp.com/channels/694679776694108161/694680070215696465/730620632848531486')
    table.timestamp('deleted_at')

})


exports.down = knex => knex.schema.dropTable('clients')