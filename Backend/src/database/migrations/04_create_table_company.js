exports.up = knex => knex.schema.createTable('company', table => {

    table.increments('id')
    table.string('name', 255).notNullable()
    table.string('cpf').notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.enu('type', ['service', 'product']).notNullable()
    table.string('date_birth').notNullable()
    table.string('address').notNullable()
    table.string('img_url').nullable()
    table.integer('id_categories').references('categories.id').notNullable().onDelete()

})


exports.down = knex => knex.schema.dropTable('company')