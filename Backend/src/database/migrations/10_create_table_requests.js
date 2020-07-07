exports.up = knex => knex.schema.createTable('requests', table => {

    table.increments('id')
    table.integer('id_client').references('clients.id').notNullable().onDelete()
    table.integer('id_company').references('companies.id').notNullable().onDelete()
    table.integer('id_address').references('addresses.id').nullable().onDelete()
    table.decimal('total', 5, 2).nullable()
    table.enu('payment', ['Cartão', 'Dinheiro']).notNullable()
    table.enu('local', ['Endereço do cliente', 'Endereço do profissional']).notNullable()
    table.enu('status', ['Solicitando', 'Cancelado', 'Finalizado', 'Aceito']).defaultTo('Solicitando')
    table.string('schedule').notNullable();
    table.timestamp('request_date').defaultTo(knex.fn.now())
})


exports.down = knex => knex.schema.dropTable('requests')