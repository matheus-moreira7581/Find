exports.up = knex => knex.schema.createTable('products', table => {

    table.increments('id')
    table.integer('id_company').references('companies.id').notNullable().onDelete()
    table.string('name', 255).notNullable()
    table.text('description').notNullable()
    table.decimal('price', 5, 2).notNullable()
    table.string('img_url').nullable().defaultTo('https://res.cloudinary.com/dbehp0gsj/image/upload/v1594401813/uploads/Paisagem_gepabp.png')
    table.string('limit_time').notNullable()
    table.timestamp('deleted_at')

})


exports.down = knex => knex.schema.dropTable('products')