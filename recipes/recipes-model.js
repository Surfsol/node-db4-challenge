const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id){
    return db('all_ingredients')
    .where({recipe_id: recipe_id})
}

function getInstructions(recipe_id){
    return db('instructions')
    .where({recipe_id: recipe_id})
}