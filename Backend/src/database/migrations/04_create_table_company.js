exports.up = knex => knex.schema.createTable('company', table => {

    table.increments('id')
    table.integer('id_categories').references('categories.id').notNullable().onDelete()
    table.string('name', 255).notNullable()
    table.string('cpf').notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.string('date_birth').notNullable()
    table.string('address').notNullable()
    table.enu('type', ['service', 'product']).notNullable()
    table.json('hours_schedule').nullable()
    table.string('img_url').nullable()

})


exports.down = knex => knex.schema.dropTable('company')