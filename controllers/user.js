const mongoose=require('mongoose');
const userprofileschema=require('../models/user');
const jwt = require("jsonwebtoken");

// module.exports.register=async(req,res)=>{
//     // let reqdata=req.body;
//     // let profile=new userprofileschema(reqdata);
//     // res.send(profile);

// }

exports.register = function (req, res) {
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
    }], (err,user)=>{
      console.log(req.body);
        if (err) {
            console.log("There is an error " + err);
            return res.status(500).json({
              status: "error",
              message: err||"ashkriti",
            });
          }
          else
            res.json({ status: "success", data: user.username });
    })
};

exports.loginuser=function(req,res){
    let email=req.body.email;
    let pass=req.body.password;
    const accessTokenSecret = "youraccesstokensecret";
    userprofileschema.find({email:email,password:pass},(err,user)=>{
            if (err) {
              console.log("Error: While login" + err);
              return res.status(500).json({
                status: "error",
                message: "Error: Something went wrong",
              });
            }

            else if( user === null ){
              return res.status(403).json({
                status: "error",
                message: "Error: Forbidden access wrong email or password",
              })
            }

            // res.json({
            //   status: "success",
            //   message: "User login successfull",
            // });

            else{
              const accessToken = jwt.sign({ email: email,  password: pass }, accessTokenSecret , { expiresIn: "20m" });
              res.json({ status: "success", data: user});
            }
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
