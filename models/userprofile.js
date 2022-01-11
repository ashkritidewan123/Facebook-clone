const mongoose=require('mongoose');

const userprofileschema=new mongoose.Schema({

    username:{
        type:String,
        required:true
    },

    firstname:{
        type:String,
        required:true
    },

    lastname:{
        type:String,
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    
    mobilenum:{
        type:String
    },

    dob:{
        type:String,
        required:true
    },
    
    password:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    status:String
});

module.exports = mongoose.model("profile",userprofileschema,"profiles");