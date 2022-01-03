const express = require('express');
const db = require('./../db/conn');
const router = express.Router();

const userprofile = require('../models/userprofile');


    exports.createid=async function(req,res){
        //validate request
        if(!req.body){
            res.status(400).send({message:"Content cannot be empty"});
            return;
        }

        //new user
        
        // const user=new userprofile({
        //     firstname:req.body.firstname,
        //     lastname:req.body.lastname,
        //     email:req.body.email,
        //     mobilenum:req.body.email,
        //     dob:req.body.dob,
        //     password:

        // })

        let{firstname,lastname,email,mobilenum,dob,password,confirmpassword,gender}=req.body;
        
        if(firstname==undefined || firstname==""){
            return res.send({
                code: 500,
                msg: "firstname is required"
            })
        }
        else if (email == true) {
            return res.send({
                code: 500,
                msg: "email  is required"
            })
        } 
        
        else if(dob==undefined|| dob==""){
            return res.send({
                code: 500,
                msg: "date of birth is required"
            })
        }
        
        else if (password == undefined || password == "") {
            return res.send({
                code: 500,
                msg: "password is required"
            })
        } else if (
            confirm_password == undefined || confirm_password == ""
        ) {
            return res.send({
                code: 500,
                msg: "confirm_password is required"
            })
        } else if (password.localeCompare(confirm_password) != 0) {
            return res.send({
                code: 500,
                msg: "password and confirm_paasword is not same"
            })
        }

        else if(gender="undefined"||gender==""){
            return res.send({
                code: 500,
                msg: "email  is required"
            })
        }

        let data = { firstname:firstname,lastname:lastname,email: email,mobilenum:mobilenum, password: password, gender:gender }
        const response = await userProfile.create(data, (err, result) => {
            if (!err) {
                return res.send({
                    code: 200,
                    msg: "Account created successfully",
                    result: {
                        id: result._id
                    }
                })
            } else {
                return res.send({
                    code: 500,
                    msg: "failed to create Account",
                    result: err
                })
            }
        })
    }
