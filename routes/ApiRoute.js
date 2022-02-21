const express = require('express');
const Route =express.Router()
const ApiController =require('../controllers/ApiController')

Route.get('/',ApiController.index);
Route.post('/add-user',ApiController.addUser)
Route.post('/add-post',ApiController.addPost)
Route.post('/add-comment',ApiController.addComment)


module.exports = Route