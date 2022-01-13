const mongoose=require('mongoose');
const userprofileschema=require('../models/userprofile');

// module.exports.register=async(req,res)=>{
//     // let reqdata=req.body;
//     // let profile=new userprofileschema(reqdata);
//     // res.send(profile);

// }

exports.register = function (req, res) {
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

exports.login=function(req,res){
    res.send("this is the login");
}

exports.logout=function(req,res){
    res.send("we are logged out");
}

exports.search=function(req,res){
    res.send("here you can search the people");
}

