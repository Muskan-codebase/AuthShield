const mongoose = require("mongoose");
require("./config")

async function DBConnection() {

    try {

        const con = await mongoose.connect(process.env.MONGODB_URI);

        if (con) {
            console.log("Connected✅")
        }

    } catch (error) {

        console.log("Disconnected❌");
        console.log(error)
    }
}

module.exports = DBConnection;