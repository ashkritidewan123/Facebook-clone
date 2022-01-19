const express = require('express');
const usercontroller = require('../controllers/usercontroller');

const router= express.Router();

router.post("/",usercontroller.register);
router.post("/login",usercontroller.login);
router.get("/logout", usercontroller.logout);
router.get("/:id",usercontroller.search);
router.get("/:id",usercontroller.delete);

module.exports = router;