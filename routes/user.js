const express = require('express');
const usercontroller = require('../controllers/user');

const router= express.Router();

router.post("/",usercontroller.register);
router.post("/login",usercontroller.login);
router.get("/logout", usercontroller.logout);
router.get("/:searchId",usercontroller.search);
router.get("/:id",usercontroller.delete);

module.exports = router;