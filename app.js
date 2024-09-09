const express = require('express')
const app = express()
const path = require("path")
const cookieParser = require("cookie-parser")

require("dotenv").config()
let db = require("./config/db")


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser())

const adminRouter = require("./routes/adminRouter")
const superAdminRouter = require("./routes/superAdminRouter")
const userRouter = require("./routes/userRouter")



app.use("/admin", adminRouter)
app.use("/superadmin", superAdminRouter)
app.use("/users", userRouter)


app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(3000, () => {
    console.log("listening")
})