const mongoose = require('mongoose');
// const postschema=require('../models/posts');
const postschema = require('../models/chat');

exports.sendmessage=function(req,res){
    let reqData = req.body;
    let message = new postschema(reqData);
    post.save(function (err, messagedata) {
    if (err) {
      res.status(500).json({ status: "error", message: "Error: Something went wrong. Couldn't add your message." });
    } else {
      res.json({ status: "success", data: messagedata });
    }
  });
}

exports.deletemessage=function(req,res){
    let {messageid}=req.params,
    update = { status: false };
    postschema.findOneAndUpdate({
      _id:messageid,status:true},
      update,
      {new:true},
      function (err, messagedata) {
        if (err) {
          console.log("Error: While deleting message: " + err);
          return res.status(500).json({
            status: "error",
            message: "Error: Something went wrong. Couldn't delete your message.",
          });
        }
        res.json({
          status: "success",
          message: "Your message has been deleted successfully.",
        });
    });
}