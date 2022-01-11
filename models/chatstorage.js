const mongoose=require('mongoose');

const chatschema=new mongoose.Schema({

    senderUName:{
        type:String,
        required:true
    },

    recipientUName:{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("chat",chatschema,"chats");