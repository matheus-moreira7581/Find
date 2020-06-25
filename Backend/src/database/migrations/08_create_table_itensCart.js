exports.up = knex => knex.schema.createTable('itens_cart', table => {

    table.increments('id')
    table.integer('id_order').references('orders.id').notNullable().onDelete()
    table.integer('id_products').references('products.id').notNullable().onDelete()
    table.integer('amount').notNullable()
    table.text('Details').nullable()
})


exports.down = knex => knex.schema.dropTable('itens_cart')