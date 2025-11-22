const nodemailer = require("nodemailer");
require("../config")

const sendEmail = async (email, subject, message) => {
    const transporter = await nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_APP_PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: email,
        subject,
        text: message
    }

    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;