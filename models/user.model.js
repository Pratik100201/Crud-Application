const mongoose = require("mongoose")

const userData = new mongoose.Schema({
    name :{
        type : String,
        required : [ true , "Name is Required"],
        maxLength : [30 , "Name should be < 30"],
        trim : true
    },
    email : {
        type : String ,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        

    }
})

module.exports = mongoose.model("User", userData)