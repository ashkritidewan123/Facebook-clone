const express = require('express');
const chatcontroller = require('../controllers/chatcontroller');

const router= express.Router();

router.post("/",chatcontroller.sendmessage);
router.delete("/logout", postcontroller.deletemessage);


module.exports = router;