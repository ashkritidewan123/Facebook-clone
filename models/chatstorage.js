const mongoose=require('mongoose');

const chatschema=new mongoose.Schema({

    sender:{
        type:String,
        required:true
    },

    recipient:{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("chat",chatschema,"chats");