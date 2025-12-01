const jwt = require("jsonwebtoken")
require("../config")
const secret_key = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {

    const token = req.cookies.token; // read from cookie

    if (!token) {

        return res.status(400).json({ error: "No Token found!" })
    }

    try {

        //verify and decode the payload using teh secret_key
        const decoded = jwt.verify(token, secret_key);

        if (decoded) {

            //once decoded, forward it to the next() -> next API/route handler for processing
            req.user = decoded;
            next();

        } else {

            return res.status(400).json({ error: "Invalid Token" })
        }


    } catch (err) {

        console.log(err)
    }
}

module.exports = verifyToken;