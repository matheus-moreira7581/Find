exports.up = knex =>  knex.schema.createTable('categories', table => {

    table.increments('id')
    table.string('title', 255).notNullable()
    table.string('img_url').nullable()
    table.integer('id_section').references('sections.id').notNullable().onDelete()
    
});

exports.down = knex => knex.schema.dropTable('categories')