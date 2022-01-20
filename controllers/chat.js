const mongoose=require('mongoose');
const postschema=require('../models/posts');

exports.sendmessage=function(req,res){
    res.send("send message");
}

exports.deletemessage=function(req,res){
    res.send("you can delete the message");
}