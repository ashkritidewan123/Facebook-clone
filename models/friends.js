const mongoose=require('mongoose');

const friendschema=new mongoose.Schema({

    username:{
        type:String,
        required:true
    },

    friendid:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("friend",friendschema,"friends");