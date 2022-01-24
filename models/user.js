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

    //posts: [{ type: Schema.Types.ObjectId, ref: 'post' }],

    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }]

    
});
// const post = mongoose.model('posts', postschema);

module.exports = mongoose.model("user",userprofileschema,"user");