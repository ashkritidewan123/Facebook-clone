const mongoose=require('mongoose');

const userprofile=new mongoose.Schema({

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

const userdb= mongoose.model('userdb',schema);
module.exports=userdb;

