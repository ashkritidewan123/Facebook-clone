const mongoose = require('mongoose');
const user = require('./user');
const post = require('./post');

const likeschema = new mongoose.Schema({

    postmedia:{
        type:String,
        required:true
    },

    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],

    postid: { type: mongoose.Schema.Types.ObjectId, ref: 'post' },

    likesnum:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model("like",likeschema,"like");