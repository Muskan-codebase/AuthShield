const verifyToken = require("../middleware/verifyJwtToken");
const { signup, login, sendOTP, verifyOTP, resetPassword, getUserProfile, uploadProfilePic, removeProfilePic } = require("../controllers/users.controller")
const { signupLimiter, loginLimiter } = require("../rate-limiter/rateLimiter")
const parser = require("../middleware/upload");
const express = require("express")
const route = express.Router();

//middleware to block signup API requests after certain attempts
route.post("/signup", signupLimiter, signup);
//middleware to Login API requests after certain attempts
route.post("/login", loginLimiter, login);
route.post("/forgotPassword", sendOTP);
route.post("/verifyOTP", verifyOTP)
route.post("/resetPassword", resetPassword)

//middleware to verify token and authenticate a logged-in user
route.get("/getUserProfile", verifyToken, getUserProfile )
route.put("/uploadImage", verifyToken, parser.single("profilePicture"), uploadProfilePic )
route.delete("/removeProfilePic", verifyToken, removeProfilePic)

module.exports = route;

