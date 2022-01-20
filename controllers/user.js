const mongoose=require('mongoose');
const userprofileschema=require('../models/user');

// module.exports.register=async(req,res)=>{
//     // let reqdata=req.body;
//     // let profile=new userprofileschema(reqdata);
//     // res.send(profile);

// }

exports.registeruser = function (req, res) {
    // let user=new userprofileschema();
    // user.username=req.body.username;
    // user.firstname=req.body.firstname;
    // user.lastname=req.body.lastname;
    // user.email=req.body.email;
    // user.mobilenum=req.body.mobilenum;
    // user.dob=req.body.dob;
    // user.password=req.body.password;
    // user.gender=req.body.gender;

    userprofileschema.create([{
        username:req.body.username,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        mobilenum:req.body.mobilenum,
        dob:req.body.dob,
        password:req.body.password,
        gender:req.body.gender
    }], (err,userinfo)=>{
        if (err) {
            console.log("There is an error " + err);
            return res.status(500).json({
              status: "error",
              message: "Error:Something went wrong",
            });
          }
          else
            res.json({ status: "success", data: userinfo });
    })
};

exports.loginuser=function(req,res){
    let email=req.body.email;
    let pass=req.body.password;
    userprofileschema.findOne({email:email,password:pass},(err,user)=>{
            if (err) {
              console.log("Error: While login" + err);
              return res.status(500).json({
                status: "error",
                message: "Error: Something went wrong",
              });
            }
            res.json({
              status: "success",
              message: "User login successfull",
            });
    });
};

// exports.logoutuser=function(req,res){
//     res.send("we are logged out");
// }

// exports.searchuser=function(req,res){
//     res.send("here you can search the people");
// }

exports.deleteuser=function(req,res){
  let email=req.body.email;
  let pass=req.body.password;

  userprofileschema.deleteOne({email:email,password:pass},(err,user)=>{
    if (err) {
      console.log("Error: While deleting user" + err);
      return res.status(500).json({
        status: "error",
        message: "Error: Something went wrong, the user could not be deleted",
      });
    }
    res.json({
      status: "success",
      message: "The user is deleted successfully",
    });
  })
}
