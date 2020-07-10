exports.up = knex => knex.schema.createTable('companies', table => {

    table.increments('id')
    table.integer('id_categories').references('categories.id').notNullable().onDelete()
    table.string('company_name', 255).notNullable()
    table.string('name', 255).notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.string('cpf').notNullable()
    table.string('date_birth').notNullable()
    table.string('address').notNullable()
    table.string('img_url').nullable().defaultTo('https://res.cloudinary.com/dbehp0gsj/image/upload/v1594263837/uploads/Caixa_jl19l7.png')
    table.boolean('status').defaultTo(false)
    table.specificType('hours_schedule', 'text ARRAY').nullable(),
    table.enu('type', ['service', 'product']).notNullable()
    table.timestamp('deleted_at')

})


exports.down = knex => knex.schema.dropTable('companies')