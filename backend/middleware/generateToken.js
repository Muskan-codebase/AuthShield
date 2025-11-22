const jwt = require("jsonwebtoken")
require("../config")
const secret_key = process.env.SECRET_KEY;

const createJWT = (data) => {

    const jwtToken = jwt.sign(data, secret_key, { expiresIn: '1hr'});
    return jwtToken;
}

module.exports = createJWT;