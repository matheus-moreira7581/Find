exports.up = knex => knex.schema.createTable('addresses', table => {

    table.increments('id')
    table.string('street').notNullable()
    table.string('neighborhood').notNullable()
    table.integer('ad_number').notNullable()
    table.string('additional').nullable()
    table.string('landmark').nullable()
  //  table.integer('id_order').references('orders.id').notNullable().onDelete()
})


exports.down = knex => knex.schema.dropTable('addresses')