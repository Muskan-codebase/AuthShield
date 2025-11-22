const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    profilePic: {
        type: String
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    confirmPassword: {
        type: String,
    },
    otp: {
        type: String
    },
    otpExpiry: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Users = mongoose.model('user', userSchema);
module.exports = Users;