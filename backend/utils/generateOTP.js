const crypto = require("crypto");

function generateOTP() {
    //generate random number from 0 (inclusive) -> 900,000 (exclusive) and add 100,000
    return crypto.randomInt(100000, 900000);
}

module.exports = generateOTP;