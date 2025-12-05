const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary");

//configure storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "profilePicture", //folder in cloudinary
        allowed_formats: ["jpg", "jpeg", "png"],
        transformation: [{ width: 500, height: 500, crop: "limit" }],
    }
});

const parser = multer({ storage: storage })
module.exports = parser;