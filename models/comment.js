const mongoose = require('mongoose')
const Schema =mongoose.Schema

const CommentSchema = new Schema({
    
    commentUser: {
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    commentPost:{
        type: Schema.Types.ObjectId,
        ref:'post'
    },
    comment:{
        type:String,
        required:true
    }
})

const CommentModel =new mongoose.model('comment', CommentSchema)
module.exports = CommentModel