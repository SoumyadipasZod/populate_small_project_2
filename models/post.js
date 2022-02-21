const mongoose = require('mongoose')
const Schema =mongoose.Schema

const PostSchema =new Schema({
    postHeading:{
        type:String,
        required:true
    },
    postContent:{
        type:String,
        required:true
    },
    postUsers:{
        type:Schema.Types.ObjectId,
        ref:'user'

    }
})

const PostModel =new mongoose.model('post', PostSchema)
module.exports = PostModel