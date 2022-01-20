const mongoose = require('mongoose');
const user = require('./user');
const post = require('./post');

const likeschema = new mongoose.Schema({

    postmedia:{
        type:String,
        required:true
    },

    user: [{ type: Schema.Types.ObjectId, ref: 'user' }],

    likesnum:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model("like",likeschema,"like");