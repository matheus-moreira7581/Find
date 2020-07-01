exports.up = knex => knex.schema.createTable('companies', table => {

    table.increments('id')
    table.integer('id_categories').references('categories.id').notNullable().onDelete()
    table.string('name', 255).notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.string('cpf').notNullable()
    table.string('date_birth').notNullable()
    table.string('address').notNullable()
    table.string('img_url').nullable()
    table.boolean('status').defaultTo(false)
    table.json('hours_schedule').nullable()
    table.enu('type', ['service', 'product']).notNullable()

})


exports.down = knex => knex.schema.dropTable('companies')