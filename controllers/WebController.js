const express = require('express');
const path =require('path');

// require models
const UserModel =require('../models/user')
const PostModel =require('../models/post')
const CommentModel =require('../models/comment')


// index
exports.index =(req,res) =>{
    CommentModel.find().populate('commentUser').populate('commentPost').exec((err,data) =>{
        if(!err){
            console.log(data);
            res.render('index',{
                displayData: data
            })
        }
    })
}


// User
exports.showUser =(req,res) => {
    res.render('user',{
        title:'user'
    })
}

exports.addUser =(req,res) => {
    UserModel({
        Name:req.body.name,
        Email:req.body.email,
        Phn:req.body.phone
    }).save().then((result) =>{
        console.log('user Added...')
        res.redirect('/show-user')
    }).catch((error) => {
        console.log(error)
    })
}


// post
exports.showPost =(req,res) => {
    UserModel.find().then((result) => {
        res.render('post',{
            title:'Post',
            Users:result
        })
    }).catch((error) => {
        console.log(error)
    })
}

exports.addPost =(req,res) => {
    PostModel({
        postHeading:req.body.heading,
        postContent:req.body.content,
        postUsers:req.body.selectuser
    }).save().then((result) =>{
        console.log('Post Submitted...')
        res.redirect('/show-post')
    }).catch((error) => {
        console.log(error)
    })
}


// comment
exports.showComment =(req,res) => {
    UserModel.find().then((result1) => {
        PostModel.find().then((result2) => {
            res.render('comment',{
                title:'Comment',
                displayData1:result1,
                displayData2:result2
            })
        })
    })
}

exports.addComment =(req,res) => {
    CommentModel({
        commentUser:req.body.user,
        commentPost:req.body.post,
        comment:req.body.comment
    }).save().then((result) => {
        console.log('Product Added...')
        res.redirect('/show-comment')
    }).catch((error) => {
        console.log(error)
    })
}