const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)


let db = mongoose.connection;
db.on("error",(err)=>{
    console.log(`Error while connecting to database \n ${err}`)
})
db.on("open",()=>{
    console.log("Connected to Database Succesfully")
})

module.exports = db;