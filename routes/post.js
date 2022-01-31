const express = require('express');
const post = require('../controllers/post');

const router= express.Router();

router.post("/post",post.addpost);
router.delete("/:id", post.deletepost);
router.put("/:postid",post.editpost);


module.exports = router;