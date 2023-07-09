const express = require("express")

//Routes initalization with respecive method associated with them
const {home , createUser , editUser , deleteUser, getUser, loginUser} = require("../controllers/userController")
const router = express.Router()
    router.get("/",home)
    router.post("/createUser",createUser)
    router.get("/getUser",getUser)
    router.put("/editUser/:id",editUser)
    router.delete("/deleteUser/:id",deleteUser)
    router.post("/loginUser",loginUser)
module.exports = router