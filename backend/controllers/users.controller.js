const Users = require("../models/users.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const createJWT = require("../middleware/generateToken")
const generateOTP = require("../utils/generateOTP")
const sendEmail = require("../utils/sendEmail")
const cloudinary = require("../utils/cloudinary");

const signup = async (req, res) => {

    try {

        const { name, email, password, confirmPassword } = req.body;

        if (!name || !email || !password || !confirmPassword) {

            return res.status(400).json({ message: "Please enter all mandatory fields!" })
        }

        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists! login instead ..." })
        }

        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be atleast 8 characters long!" })
        }

        if (password !== confirmPassword) {

            return res.status(400).json({ message: "Password did not Match! try again ..." })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Users({
            name,
            email,
            password: hashedPassword
        });

        const token = createJWT({ userId: newUser._id, email: newUser.email });
        await newUser.save();

        res.status(200).json({ message: "User signed up successfully", newUser, token })

    } catch (error) {

        res.status(500).json({ message: error });
    }

}

const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please enter mandatory fields!" })
        }

        const user = await Users.findOne({ email })
        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials!" })
        }

        if (!passwordMatch) {
            return res.status(400).json({ message: "Incorrect Password! try again ..." })
        }

        const token = createJWT({ userId: user._id, email: user.email })
        res.status(200).json({ message: "User logged in successfully", user, token })

    } catch (err) {

        res.status(500).json({ message: err })
    }

}

const sendOTP = async (req, res) => {

    try {

        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Enter your Email!" })
        }

        const user = await Users.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "No user found!" })
        }

        const otp = generateOTP();
        const expiry = Date.now() + 5 * 60 * 1000;

        user.otp = otp;
        user.otpExpiry = expiry;

        await user.save();
        await sendEmail(email, "Rest Password OTP", `Your OTP is ${otp}`)

        res.status(200).json({ message: "OTP sent. Check your email" })

    } catch (err) {

        res.status(500).json({ error: err })

    }
}

const verifyOTP = async (req, res) => {

    if (!email) {
        return res.status(400).json({ message: "Enter your Email!" })
    }

    if (!otp) {
        return res.status(400).json({ message: "Enter OTP" })
    }

    try {

        const { email, otp } = req.body;

        const user = await Users.findOne({ email });

        if (!user) {
            return res.json({ message: "User noty found!" })
        }

        if (user.otp !== otp) {
            return res.status(400).json({ message: "Wrong OTP! try again ..." });
        }

        if (Date.now() > user.otpExpiry) {
            return res.status(400).json({ message: "OTP Expired!" })
        }

        res.status(200).json({ message: "OTP Verified successfully!" })

    } catch (err) {

        res.status(500).json({ message: err })

    }
}

const resetPassword = async (req, res) => {

    try {

        const { email, newPassword, confirmNewPassword } = req.body;

        if (!email || !newPassword || !confirmNewPassword) {
            return res.status(400).json({ message: "Enter the mandatory fields to reset password" })
        }

        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found!" })
        }

        if (newPassword.length < 8) {
            return res.status(400).json({ message: "Password must be atleast 8 characters long!" })
        }

        if (newPassword !== confirmNewPassword) {

            return res.status(400).json({ message: "Password did not Match! try again ..." })
        }

        const newHashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = newHashedPassword;
        user.otp = undefined;
        user.otpExpiry = undefined;

        const userData = await user.save();

        if (userData) {
            return res.status(200).json({ message: "Password reset successfull", userData })
        }

    } catch (err) {
        res.status(500).json({ message: err })
    }
}

const getUserProfile = async (req, res) => {

    try {

        //accessing req.user from the middleware
        const { userId } = req.user;

        const userData = await Users.findById(userId)

        if (!userData) {
            return res.status(400).json({ message: "User not found!" })
        }

        res.status(200).json({ user: userData })

    } catch (err) {

        console.log(err)
        res.status(400).json({ message: err })
    }
}

const uploadProfilePic = async (req, res) => {

    try {

        const userId = req.user.userId;
        const imageURL = req.file.path;

        const updateUser = await Users.findByIdAndUpdate({
            _id: userId
        },
            { $set: { profilePic: imageURL } },
            { new: true }
        )

        res.status(200).json({ message: "Image uploaded successfully", user: updateUser })

    } catch (err) {

        res.status(400).json({ message: err })
    }
}

const removeProfilePic = async (req, res) => {

    try {
        const { userId } = req.user;

        const user = await Users.findById(userId);

        if (!user) {
            return res.status(400).json({ message: "No such User found!" });
        }

        if (!user.profilePic) {
            return res.status(400).json({ message: "No picture to delete" })
        }

        // Extract public_id from stored URL
        const imageUrl = user.profilePic;
        const splitUrl = imageUrl.split("/");
        const publicIdWithExt = splitUrl[splitUrl.length - 1];  // abc123.jpeg or jpg
        const publicId = "profilePicture/" + publicIdWithExt.split(".")[0]; // profilePicture/abc123

        const imageDeleted = await cloudinary.uploader.destroy(publicId);

        if (imageDeleted) {
            user.profilePic = "";
            await user.save();
            return res.status(200).json({ message: "Photo removed" })
        }

    } catch (error) {

        res.status(500).json({ message: error });

    }
}

const deleteUser = async (req, res) => {

    try {

        const { userId } = req.user;

        const user = await Users.findByIdAndDelete(userId);

        if (!user) {
            return res.status(400).json({ message: "User does not exists!" })
        }

        if (user) {
            return res.status(200).json({ message: "Account deleted successfully", user });
        }

    } catch (err) {
        res.status(500).json({ message: err })
    }
}

module.exports = {
    signup,
    login,
    sendOTP,
    verifyOTP,
    resetPassword,
    getUserProfile,
    uploadProfilePic,
    removeProfilePic,
    deleteUser
}

