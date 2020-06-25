exports.up = knex => knex.schema.createTable('company', table => {

    table.increments('id')
    table.string('name', 255).notNullable()
    table.integer('cpf', 12).notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.enu('type', ['service', 'product']).notNullable()
    table.integer('cell', 12).notNullable()
    table.string('address').notNullable()
    table.string('img_url').nullable()
    table.integer('id_categories').references('categories.id').notNullable().onDelete()

})


exports.down = knex => knex.schema.dropTable('company')