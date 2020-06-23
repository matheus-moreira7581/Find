exports.up = knex => knex.schema.createTable('products', table => {

    table.increments('id')
    table.string('name', 255).notNullable()
    table.text('description').notNullable()
    table.decimal('price', 5, 2).notNullable()
    table.string('img_url').nullable()
    table.string('limit_time').notNullable()
    table.integer('id_company').references('company.id').notNullable().onDelete()

})


exports.down = knex => knex.schema.dropTable('products')