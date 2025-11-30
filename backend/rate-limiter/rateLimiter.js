const rateLimit = require("express-rate-limit")

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 100,
    max: 100,
    message: "⚠ Rate Limit exceeded. You have exceeded the allowed number of requests. Please try again after 15 few minutes."
})

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 100,
    max: 5,
    handler: (_, res) => {
        console.log("Too many failed Login attempts. Please try again after 15 minutes");
        res.status(429).json({ message: "Too many Login attempts. try again after 15 minutes ..." });
    }
})

const signupLimiter = rateLimit({
    windowMs: 15 * 60 * 100,
    max: 5,
    handler: (_, res) => {
        console.log("Signup temporarily blocked due to multiple attempts. Try again in 15 minutes.");
        res.status(429).json({ message: "Signup temporarily blocked due to multiple attempts. Try again in 15 minutes." });
    }
})

const otpLimiter = rateLimit({
    windowMs: 15 * 60 * 100,
    max: 5,
    handler: (_, res) => {
        console.log("Too many attempts. Please try again after a few minutes.");
        res.status(429).json({ message: "Too many attempts. Please try again after a few minutes." });
    }
})

module.exports = {
    rateLimiter,
    loginLimiter,
    signupLimiter,
    otpLimiter
};