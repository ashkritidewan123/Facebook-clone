const mongoose = require('mongoose');
// const postschema=require('../models/posts');
const chatschema = require('../models/chat');

exports.sendmessage=function(req,res){  //create
  chatschema.create([{
    message:req.body.message,
    
}], (err,mess)=>{
  // console.log(req.body);
    if (err) {
        console.log("There is an error " + err);
        return res.status(500).json({
          status: "error",
          message: err||"ashkriti",
        });
      }
      else
        res.json({ status: "success", data: mess });
})
}

exports.deletemessage=function(req,res){
    let {messageid}=req.params,
    update = { status: false };
    chatschema.findOneAndUpdate({
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