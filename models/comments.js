const mongoose=require('mongoose');

const comments=new mongoose.Schema({

    postmedia:{
        type:String,
        required: true
    },

    commentnum:{        //number of comments in a particular post
        type:Number,
        required: true
    },

    username:{          //the person who posts
        type:String,
        required:true
    },

    commentdata:{
        type:String,
        required:true
    },

    likesoncomm:{       //number of likes on a comment
        type:Number,
        required:true
    },

    uidoflike:{         //users who like the post, not required as when there are no likes on comment or we push null as well
        type:String
    }

})

module.exports = mongoose.model("comment",comments,"comments");