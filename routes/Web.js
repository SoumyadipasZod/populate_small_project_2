const express = require('express')
const router =express.Router()
const WebController =require('../controllers/WebController')

router.get('/',WebController.index)
router.get('/show-user',WebController.showUser);
router.post('/add-user',WebController.addUser);
router.get('/show-post',WebController.showPost);
router.post('/add-post',WebController.addPost);
router.get('/show-comment',WebController.showComment);
router.post('/add-comment',WebController.addComment);


module.exports =router