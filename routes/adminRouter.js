const express = require('express')
const router = express.Router()
const { getAdminLoginController } = require("../controllers/adminController")
router.get("/", (req, res) => {
    res.send("Admin")
})
router.get("/login", getAdminLoginController)

module.exports = router;