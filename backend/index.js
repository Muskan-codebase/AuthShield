const express = require("express");
const app = express();
const DBConnection = require("./db.connection");
const userRoute = require("./routes/user.routes");
const { rateLimiter } = require("./rate-limiter/rateLimiter")
const googleOAuthRoute = require("./routes/google.OAuth.route")
const cors = require("cors");
const helmet = require("helmet");
const sanitizeHtml = require('sanitize-html');
require("./config")

app.use(cors({
  origin: `${process.env.FRONTEND_URI}`,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

//built-in middleware to convert incoming request data to json()
app.use(express.json())

// Helmet is a built-in middleware to add security-related HTTP headers
// Protects against XSS, clickjacking, MIME type sniffing, and other attacks
app.use(helmet())

// Middleware to sanitize all string inputs in request body
app.use((req, res, next) => {
  if (req.body) {
    for (const key in req.body) {
      if (typeof req.body[key] === 'string') {
        req.body[key] = sanitizeHtml(req.body[key]); // sanitize input
      }
    }
  }
  next();
});

//middleware to block API request after certain attempts within a specified time frame (15 mins)
app.use(rateLimiter)

const PORT = process.env.PORT || 9000;

app.get("/", (_, res) => {
  res.json("Hello World!🌐");
})

app.use("/api", userRoute);
app.use("/api/auth", googleOAuthRoute)

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`)
})

DBConnection();
