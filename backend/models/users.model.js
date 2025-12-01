const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    googleId: {
        type: String,
        unique: true,
        sparse: true
    }, // for Google users
    
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
    bio: {
        type: String
    },
    otp: {
        type: String
    },
    otpExpiry: {
        type: Date
    },
    resetToken: {
        type: String
    },
    resetTokenExpiry: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Users = mongoose.model('user', userSchema);
module.exports = Users;
