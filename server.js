const app = require("./app.js")

const Port = process.env.Port

app.listen(Port,()=>{ 
    console.log(`Port is Running on http://localhost:${Port}`);
})