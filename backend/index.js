const express = require("express");
const app = express();
const DBConnection = require("./db.connection");
const userRoute = require("./routes/user.routes");
const { rateLimiter } = require("./rate-limiter/rateLimiter")
const googleOAuthRoute = require("./routes/google.OAuth.route")
const cors = require("cors");
require("./config")

//built-in middleware to convert incoming request data to json()
app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

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
