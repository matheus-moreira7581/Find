exports.up = knex => knex.schema.createTable('request', table => {

    table.increments('id')
    table.decimal('total', 5, 2).notNullable()
    table.date('order_date').notNullable()
    table.enu('payment', ['card', 'money']).notNullable()
    table.enu('receivement', ['delivery', 'by yourself']).notNullable()
    table.enu('status', ['in progress', 'canceled', 'finished']).notNullable()
    table.integer('id_client').references('client.id').notNullable().onDelete()
    table.integer('id_company').references('company.id').notNullable().onDelete()

})


exports.down = knex => knex.schema.dropTable('request')