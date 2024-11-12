const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

mongoose.connection.on("error", (err) => {
    console.log(`Error for ${mongoose.connect.name}: ${err}`)
})

app.use(express.json())

// Routes Go Here

app.listen(3000, () => {
    console.log("The express app is ready!")
})