const mongoose = require("mongoose")

const connectToDb = async ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then((conn)=>{
        console.log(`Database Connected to ${conn.connection.host}`)
    })
    .catch((err)=>{
        console.log(`The Error is ${err}`)
        process.exit(1)
    })
}

module.exports =connectToDb