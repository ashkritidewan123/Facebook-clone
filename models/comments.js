const mongoose=require('mongoose');

const comments=new mongoose.Schema({

    postmedia:{
        type:String,
        required: true
    },

    commentnum:{
        type:Number,
        required: true
    },

    commentdata:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("comment",comments,"comments");