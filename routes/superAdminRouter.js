const express = require('express')
const router = express.Router()
const superAdminModel = require("../models/superadmin")
const bcrypt = require("bcrypt")

const { getSuperAdminLoginController, postSuperAdminLoginController, superAdminDashboard } = require("../controllers/superAdminController")


router.get("/", async (req, res) => {
    try {
        let salt = await bcrypt.genSalt(10)
        let hashedPassword = await bcrypt.hash("admin", salt)
        let superAdmin = await superAdminModel.create({
            username: "admin",
            email: "admin@admin.com",
            password: hashedPassword
        })
        res.send(superAdmin)
    }
    catch (err) {
        res.send(err.message)
    }
})
router.get("/dashboard", superAdminDashboard)
router.get("/login", getSuperAdminLoginController)
router.post("/login", postSuperAdminLoginController)

module.exports = router;