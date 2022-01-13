const mongoose=require('mongoose');
const postschema=require('../models/posts');

exports.addpost=function(req,res){
    let reqData = req.body;
    let post = new postschema(reqData);
    post.save(function (err, postdata) {
    if (err) {
      res.status(500).json({ status: "error", message: "Error: Something went wrong. Couldn't add your review." });
    } else {
      res.json({ status: "success", data: postdata });
    }
  });
}

exports.deletepost=function(req,res){
    res.send("delete the post");
}

exports.editpost=function(req,res){
    res.send("edit the post");
}



