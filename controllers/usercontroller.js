const mongoose=require('mongoose');
const userprofileschema=require('../models/userprofile');

// module.exports.register=async(req,res)=>{
//     // let reqdata=req.body;
//     // let profile=new userprofileschema(reqdata);
//     // res.send(profile);

// }

exports.registeruser = function (req, res) {
    res.send({
        username:'',
        firstname:'',
        lastname:'',
        email:'',
        mobilenum:'',
        dob:'',
        password:'',
        gender:''
    });
};

exports.loginuser=function(req,res){
    res.send("this is the login");
}

exports.logoutuser=function(req,res){
    res.send("we are logged out");
}

exports.searchuser=function(req,res){
    res.send("here you can search the people");
}

exports.deleteuser=function(req,res){
    res.send("")
}