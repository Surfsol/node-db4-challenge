const express = require('express')
const server = express()  //create instance of express server
const RecipeRouter = require('./recipes/recipes-router')

server.use(express.json())// allows express to read .json from body of request
server.use('/api/recipes', RecipeRouter)
server.get('/', (req, res) => { res.status(200).json({hello: 'Thursday project'})})

module.exports = server;