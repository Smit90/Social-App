const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")

dotenv.config()

// db connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log("MongoDB connected!");
})

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

// routes

app.get("/", (req, res) => {
    res.send("Welcome to homepage")
})

app.listen(8800, () => {
    console.log("server is running on port 8800")
})