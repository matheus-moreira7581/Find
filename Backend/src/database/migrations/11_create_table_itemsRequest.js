exports.up = knex => knex.schema.createTable('items_request', table => {

    table.increments('id')
    table.integer('id_request').references('requests.id').notNullable().onDelete()
    table.integer('id_service').references('services.id').notNullable().onDelete()
    table.text('details').nullable()

    
})



exports.down = knex => knex.schema.dropTable('items_request')