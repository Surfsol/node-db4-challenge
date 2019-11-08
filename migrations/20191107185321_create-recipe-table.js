
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl =>{
            tbl.increments()
            tbl.string('recipe').notNullable()
        })
        .createTable('instructions', tbl => {
            tbl.increments()
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            tbl.integer('step_number')
                // permit only nonnegative numbers in a column
                // or when you need a larger upper numeric range
                .unsigned()
                .notNullable() 
            tbl.text('instructions')
                .notNullable()
        })
        .createTable('ingredients', tbl => {
            tbl.increments()
            tbl.string('ingredient').notNullable
        })
        .createTable('all_ingredients', tbl => {
            tbl.increments()
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            tbl.float('quantity')
            tbl.string('measurement')
        })
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('all_ingredients')
  
};
