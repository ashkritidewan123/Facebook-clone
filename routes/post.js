const express = require('express');
const postcontroller = require('../controllers/postcontroller');

const router= express.Router();

router.post("/",postcontroller.addpost);
router.delete("/:postid", postcontroller.deletepost);
router.put("/:postid",postcontroller.editpost);


module.exports = router;