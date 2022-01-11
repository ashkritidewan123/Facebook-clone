const mongoose=require('mongoose');

const likeschema=new mongoose.Schema({

    post:{
        type:String,
        required:true
    },

    likesnum:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model("like",likeschema,"likes");