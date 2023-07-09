require("dotenv").config()
const express = require("express")
const connectToDb = require("./config/db.js")
const cors = require("cors") // to get rid of Website related issues 

const userRoutes = require("./routes/userroutes.js")
const app = express()

connectToDb()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())
app.use("/", userRoutes)

module.exports = app