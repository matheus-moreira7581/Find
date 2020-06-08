exports.up = knex => knex.schema.createTable('addresses', table => {

    table.increments('id')
    table.string('street', 255).notNullable()
    table.string('neighborhood',).notNullable()
    table.integer('ad_number',).notNullable()
    table.string('').nullable()
    table.integer('zip', 11).notNullable()
    table.string('img_url').nullable()

})


exports.down = knex => knex.schema.dropTable('addresses')