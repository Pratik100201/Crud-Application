const user = require("../models/user.model.js")



exports.home = (req,res)=>{
    res.send("<h1> Hello Welcome to Home Page</h1>") ;
}

exports.createUser= async (req,res)=>{
    try {
        const {name , email ,password } = req.body
        if (!name || !email || !password) {
            throw new Error("Please Fill Valid Inputs !")
        }

        const userCheck = await user.findOne({email})
        if (userCheck) {
            throw new Error("User Already Exist")
        }
        const validUser = await user.create( {
            name,
            email,
            password
        })
        console.log(validUser)
        res.status(201).json({
            success : true ,
            message : "User has been created"
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}
exports.getUser= async (req,res)=>{
    try {
    const users =   await user.find({})
    res.status(201).json({
        success : true ,
        users
    })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}
exports.editUser= async(req,res)=>{
    try {
      const userUpdate =  await user.findByIdAndUpdate(req.params.id , req.body)
      res.status(201).json({
        success : true ,
        message : "User has been updated"
     })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}
exports.deleteUser= async(req,res)=>{
    try {
      const userId =  req.params.id
     const userd =  await user.findByIdAndDelete(userId)
     res.status(201).json({
        success : true ,
        message : "User has been deleted"
     })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success : false,
            message : error.message
        })  
    }
}


exports.loginUser = async(req,res)=>{
    try {
        const { email , password} = req.body;
        if(!email || ! password){
            throw new Error("Please Enter Valid Inputs to Check login !")
        }
        const validUser = await user.findOne({email})
        if(validUser){
            if(validUser.password == password){
                res.status(200).json({
                    success : true ,
                    message : "User login Successfully!"
                })
           
                }
                else{
                    res.status(400).json({
                        success : false,
                        message : "Password doesn't match"
                    })
            }
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success : false,
            message : error.message
        })  
    }
}