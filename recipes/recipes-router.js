const express = require('express')

const Recipes = require('./recipes-model')

const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to retrieve.'})
    })
})

router.get('/:id/list', (req, res) => {
    const {id} = req.params
    Recipes.getShoppingList(id)
    .then(list => {
        res.json(list)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to retrieve.'})
    })
})

router.get('/:id/instructions', (req, res) => {
    const {id} = req.params
    console.log(id)
    Recipes.getInstructions(id)
    .then(inst => {
        res.json(inst)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to retrieve.'})
    })
})

module.exports = router;