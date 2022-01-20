const mongoose=require('mongoose');
const postschema=require('../models/posts');

exports.addpost=function(req,res){
    let reqData = req.body;
    let post = new postschema(reqData);
    post.save(function (err, postdata) {
    if (err) {
      res.status(500).json({ status: "error", message: "Error: Something went wrong. Couldn't add your post." });
    } else {
      res.json({ status: "success", data: postdata });
    }
  });
}

exports.deletepost=function(req,res){
    let {postid}=req.params,
    update = { status: false };
    postschema.findOneAndUpdate({
      _id:postid,status:true},
      update,
      {new:true},
      function (err, postdata) {
        if (err) {
          console.log("Error: While removing post: " + err);
          return res.status(500).json({
            status: "error",
            message: "Error: Something went wrong. Couldn't remove your post.",
          });
        }
        res.json({
          status: "success",
          message: "Your post has been removed successfully.",
        });
    });

}


exports.editpost=function(req,res){
  let postmedia=req.body,
  postid=req.params,
  update = {};
  if (postmedia) {
    update["postmedia"] = postmedia;
  }
  
  postschema.findOneAndUpdate(
    { _id: postid, status: true},
    update,
    { new: true },
    function (err, postdata) {
      if (err) {
        console.log("Error: While updating post: " + err);
        return res.status(500).json({ status: "error", message: "Error: Something went wrong. Couldn't update your post." });
      }
      res.json({ status: "success", data: postdata });
    }
  );
}
