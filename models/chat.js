const mongoose=require('mongoose');
const user = require('./user');
const chatschema=new mongoose.Schema({

    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },

    recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },

    message:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("chat",chatschema,"chat");