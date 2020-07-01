exports.up = knex => knex.schema.createTable('items_order', table => {

    table.increments('id')
    table.integer('id_order').references('orders.id').notNullable().onDelete()
    table.integer('id_product').references('products.id').notNullable().onDelete()
    table.integer('amount').notNullable()
    table.text('details').nullable()
})


exports.down = knex => knex.schema.dropTable('items_order')