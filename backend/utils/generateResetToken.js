const crypto = require("crypto");

const resetToken = () => {

    return crypto.randomBytes(32).toString("hex");
}

module.exports = resetToken;