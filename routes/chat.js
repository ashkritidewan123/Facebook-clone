const express = require('express');
const chatcontroller = require('../controllers/chat');

const router= express.Router();

router.post("/",chatcontroller.sendmessage);
router.delete("/",chatcontroller.deletemessage);


module.exports = router;