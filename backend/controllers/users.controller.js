const Users = require("../models/users.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const createJWT = require("../middleware/generateToken")
const generateOTP = require("../utils/generateOTP")
const sendEmail = require("../utils/sendEmail")
const cloudinary = require("../utils/cloudinary");
const resetToken = require("../utils/generateResetToken")

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

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ message: "Incorrect password!" });
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

    try {

        const { email, otp } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Enter your Email!" })
        }

        if (!otp) {
            return res.status(400).json({ message: "Enter OTP" })
        }

        const user = await Users.findOne({ email });

        if (!user) {
            return res.json({ message: "User not found!" })
        }

        if (user.otp !== otp) {
            return res.status(400).json({ message: "Wrong OTP! try again ..." });
        }

        if (Date.now() > user.otpExpiry) {
            return res.status(400).json({ message: "OTP Expired!" })
        }

        user.otp = undefined;
        user.otpExpiry = undefined;

        const reset_Token = resetToken();
        user.resetToken = reset_Token;
        user.resetTokenExpiry = Date.now() + 10 * 60 * 1000;
        await user.save();

        const redirectURL = `http://localhost:5173/resetPassword?token=${reset_Token}&email=${email}`
        res.status(200).json({ message: "OTP Verified successfully!", redirectURL })

    } catch (err) {

        res.status(500).json({ message: err })

    }
}

const resetPassword = async (req, res) => {

    try {

        const { email, resetToken, newPassword, confirmNewPassword } = req.body;

        if (!email || !resetToken || !newPassword || !confirmNewPassword) {
            return res.status(400).json({ message: "Fill all required fields" });
        }

        const user = await Users.findOne({
            email,
            resetToken,
            resetTokenExpiry: { $gt: Date.now() } // Check expiry
        });

        if (!user) {
            return res.status(400).json({ message: "Invalid or expired token!" });
        }

        if (newPassword.length < 8) {
            return res.status(400).json({ message: "Password must be atleast 8 characters long!" })
        }

        if (newPassword !== confirmNewPassword) {

            return res.status(400).json({ message: "Password did not Match! try again ..." })
        }

        // if (!user.otpVerified) {
        //     return res.status(400).json({ message: "OTP not verified!" })
        // }

        const newHashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = newHashedPassword;
        user.resetToken = undefined;
        user.resetTokenExpiry = undefined;

        await user.save();
        res.status(200).json({ message: "Password reset successfully", user })

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

