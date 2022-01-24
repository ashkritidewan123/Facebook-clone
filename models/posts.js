const mongoose=require('mongoose');
const user = require('./user');
const postschema=new mongoose.Schema({

    // username:{
    //     type:String,
    //     required:true
    // },


    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },

    postmedia:{
        type:String,
        required:true
    },

    // typeofpost:{
    //     type:String,
    //     required:true
    // },

    postdate:{
        type:String,
        required:true
    },

    //comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }],

    //likes: [{ type: Schema.Types.ObjectId, ref: 'like' }]
    
    // postlocation:{      // location to be added in the post which can be any location
    //     type:String
    // },

    // tags:{
    //     type:String
    // },

    // currlocation:{      //we can enter it normally if a user wants or we can use if a person wants to
    //                     // to check-in
    //     type:String
    // },
    
    // caption:{           //with a photo or video
    //     type:String
    // }

})
// const user = mongoose.model('userprofile', userprofileschema);
// const comment = mongoose.model('comments', commentschema);
// const like = mongoose.model('likes', likeschema);
module.exports = mongoose.model("post",postschema,"post");