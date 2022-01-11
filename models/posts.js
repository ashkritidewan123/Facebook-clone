const mongoose=require('mongoose');

const postschema=new mongoose.Schema({

    username:{
        type:String,
        required:true
    },

    usernama:{
        type:String,
        required:true
    },

    typeofpost:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("post",postschema,"posts");