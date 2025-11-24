const { OAuth2Client } = require("google-auth-library");
const Users = require("../models/users.model")
const createJWT = require("../middleware/generateToken")

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleLogin = async (req, res) => {
  const { token } = req.body; // Google ID token from frontend

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    const { sub, email, name, picture } = payload;

    let user = await Users.findOne({ googleId: sub });

    if (!user) {
      // Optional: check if email exists
      user = await Users.create({
        googleId: sub,
        name,
        email,
        profilePic: picture
      });
    }

    // Generate JWT using your existing function
    const jwtToken = createJWT({ id: user._id });

    res.json({ token: jwtToken, user });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Google token verification failed" });
  }
};

module.exports = {
    googleLogin
}