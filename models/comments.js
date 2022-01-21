const mongoose = require('mongoose');
const user = require('./user');
const post = require('./post');

const commentschema = new mongoose.Schema({

    postmedia:{
        type:String,
        required: true
    },

    commentnumber:{        //number of comments in a particular post
        type:Number,
        required: true
    },

    users: [{ type: Schema.Types.ObjectId, ref: 'user' }],

    postid: { type: Schema.Types.ObjectId, ref: 'post' },

    commentdata:{
        type:String,
        required:true
    },

    // likesoncomm:{       //number of likes on a comment
    //     type:Number,
    //     required:true
    // },

    // uidoflike:{         //users who like the post, not required as when there are no likes on comment or we push null as well
    //     type:String
    // }

})

module.exports = mongoose.model("comment",comments,"comment");