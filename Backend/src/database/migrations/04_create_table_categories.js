exports.up = knex =>  knex.schema.createTable('categories', table => {

    table.increments('id')
    table.string('title', 255).notNullable()
    table.string('img_url').nullable()
    table.integer('id_section').notNullable()
    
});

exports.down = knex => knex.schema.dropTable('categories')