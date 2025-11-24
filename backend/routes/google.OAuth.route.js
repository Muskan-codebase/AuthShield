const express = require("express");
const router = express.Router();
const { googleLogin } = require("../controllers/google.OAuth.controller")

router.post("/google", googleLogin);

module.exports = router;
