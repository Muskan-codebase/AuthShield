function generateOTP() {
    //generate random number from 0 (inclusive) -> 900,000 (exclusive) and add 100,000
    return Math.floor(Math.random() * 900000 + 100000).toString();
}

module.exports = generateOTP;