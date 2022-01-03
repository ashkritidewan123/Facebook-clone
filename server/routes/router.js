const express =require('express');

const userController=require('../controller/controller');
const router=express.Router();
router.post('/registeration',userController.createid);