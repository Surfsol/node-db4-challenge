npm init -y - install package.json

create index.js
- make it main: index.js , in package.json
 "main": "index.js"

npm install express
npm i helmet // protects headers
npm i -g knex  //install globally to use cli command line interface
npm install sqlite3 

git init
- gives me a git ignore

npm i nodemon -D // could do global or dev
//scripts: node index.js // does not rerender when saved
scripts: "server":"nodemon index.js" //will rerender upon save<



server.js
const express = require('express')
const server = express()  //create instance of express server

server.use(express.json())// allows express to read .json from body of request

server.get('/', (req, res) => { res.status(200).json({hello: 'Web 23'})})

module.exports = server;



index.js

const server = require('./server')

const PORT = process.env.PORT || 4001;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})

npm i knex
knex  init
// makes a knexfile.js

 development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3' //points to db
    },
    useNullAsDefault: true //prevents bugs and issues 
  },




--------------------------------------------------
make a folder called Data

Add: db-config.js
-used to connect to database

//makes connection to db

const knex = require('knex')

const config = require('../knexfile')

module.exports = knex(config.development)

-------------------------------------------------------------

migration
knex migrate:make create-recipe-table

--------------------------------------------------------------------
Understand how to make tables and relationships

components 
-entities (nouns: zoo, animal, species), a resource --> tables
- properties --> columns or fields
- relationships --> Foreign Keys 

workflow
-identify entities
    recipes
    ingredients
-identify properties
    recipes: 
        id - primary key
        name - string
        

    ingredients:
        id - pk
        name - string

    how-to-make
        id - primary key
        recipe - foreign key
        ingredients-foreign key
        recipe name
        ingredients - string
        quantity - float
        instructions - string
        

-identify relationships
    many to many

- every table must have a primary key
        -more efficient to use #
        - postgres: type:serial
- work on 2 or 3 entities at a time


knex migrate:latest

knex migrate:rollback //if want to undo
-----------------------------------------------------------------------
open in sqlite3

seeds 

knex seed:make 001-recipe

knex seed:run





knex - enables you to access database and write sql statements using js


helper functions for sql
https://youtu.be/OFLPJfCNAS0
https://github.com/Surfsol/node-db3-challenge/blob/russell-terry/schemes/scheme-model.js


knex migrations: file representing changes to database