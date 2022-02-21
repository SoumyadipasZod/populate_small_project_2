const mongoose = require('mongoose')
const Schema =mongoose.Schema

const UserScehma =new Schema({
   Name:{
        type: String,
        required: true
    },
   Email:{
        type: String,
        required: true
    },
   Phn:{
        type: String,
        required: true
    }
})

const UserModel =new mongoose.model('user',UserScehma)
module.exports = UserModel