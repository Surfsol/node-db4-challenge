const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(id){
    return db('all_ingredients')
    .where({recipe_id: id})
}

function getInstructions(recipe_id){
    return db('instructions')
    .where({recipe_id: recipe_id})
}