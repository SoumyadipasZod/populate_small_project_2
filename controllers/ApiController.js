const express = require('express')
const UserModel = require('../models/user')
const PostModel =require('../models/post')
const CommentModel =require('../models/comment')





// index page api controller
exports.index =(req,res) =>{
    CommentModel.find().populate('commentUser').populate('commentPost').exec((err,data) =>{
        if(!err){
            res.status(200).json({
                status: 'success',
                result: data,
                message: 'Data fetched Successfully'
            })
            
        }else{
            res.status(404).json({
                status:'failed',
                result:err,
                message: 'fetch record failed'
            })
        }
    })
}



// storing user data
exports.addUser =(req,res) => {
    const Users =new UserModel({
        Name:req.body.name,
        Email:req.body.email,
        Phn:req.body.phone
    })
    Users.save().then((result) =>{
        console.log(result)
        res.status(200).json({
            status: 'success',
            newUsers:result,
            message: 'User added successfully'
        })
    }).catch((err) => {
        res.status(404).json({
            status:'failed',
            result: err,
            message:'user storing failed'
        })
    })
}

// storing post data

exports.addPost =(req,res) => {
    const Posts =new PostModel({
        postHeading:req.body.heading,
        postContent:req.body.content,
        postUsers:req.body.selectuser
    })
    Posts.save().then((result) =>{
        console.log(result)
        res.status(200).json({
            status:'success',
            newPosts:result,
            message:'User Post saved successfully'
        })
    }).catch((err) => {
        res.status(404).json({
            status:'failed',
            result: err,
            message:'user post saving failed'
        })
    })
}

exports.addComment =(req,res) => {
    const Comments =new CommentModel({
        commentUser:req.body.user,
        commentPost:req.body.post,
        comment:req.body.comment
    })
    Comments.save().then((result) => {
        console.log('Product Added...')
        res.status(200).json({
            status:'success',
            newComments:result,
            message:'User Comment saved'
        })
    }).catch((err) => {
        res.status(404).json({
            status:'failed',
            result:err,
            message:'comment added failed'
        })
    })
}