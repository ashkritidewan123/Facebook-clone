const express = require('express');
const chat = require('../controllers/chat');

const router= express.Router();

router.post("/",chat.sendmessage);
router.delete("/:id",chat.deletemessage);


module.exports = router;