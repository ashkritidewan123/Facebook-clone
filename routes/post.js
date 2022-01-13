const express = require('express');
const postcontroller = require('../controllers/postcontroller');

const router= express.Router();

router.post("/",postcontroller.addpost);
router.delete("/logout", postcontroller.deletepost);
router.put("/login",postcontroller.editpost);


module.exports = router;