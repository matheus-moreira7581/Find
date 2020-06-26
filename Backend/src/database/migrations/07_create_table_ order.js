exports.up = knex => knex.schema.createTable('orders', table => {

    table.increments('id')
    table.integer('id_client').references('clients.id').notNullable().onDelete()
    table.integer('id_company').references('company.id').notNullable().onDelete()
    table.integer('id_address').references('addresses.id').nullable().onDelete()
    table.decimal('total', 5, 2).nullable()
    table.enu('payment', ['card', 'money']).notNullable()
    table.enu('receivement', ['delivery', 'by yourself']).notNullable()
    table.enu('status', ['in progress', 'canceled', 'finished', 'acept']).defaultTo('in progress')
    table.timestamp('order_date').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('orders')