exports.up = knex => knex.schema.createTable('addresses', table => {

    table.increments('id')
    table.string('name', 255).nullable()
    table.string('street').notNullable()
    table.string('neighborhood').notNullable()
    table.integer('ad_number').notNullable()
    table.string('additional').nullable()
    table.integer('zip', 8).notNullable()
    table.string('city').notNullable()
    table.string('state',2).notNullable()
    table.string('landmark').nullable()
    table.integer('id_clients').references('clients.id').notNullable().onDelete()
})


exports.down = knex => knex.schema.dropTable('addresses')