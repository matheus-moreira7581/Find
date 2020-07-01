exports.up = knex => knex.schema.createTable('services', table => {

    table.increments('id')
    table.string('name', 255).notNullable()
    table.text('description').notNullable()
    table.decimal('price', 5, 2).notNullable()
    table.string('img_url').nullable()
    table.integer('id_company').references('companies.id').notNullable().onDelete()

    
})



exports.down = knex => knex.schema.dropTable('services')