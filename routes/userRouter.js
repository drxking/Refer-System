const express = require('express')
const { getUserLoginController, postUserLoginController, getUserSignupController } = require('../controllers/userController')
const router = express.Router()

router.get("/login", getUserLoginController)
router.post("/login", postUserLoginController)
router.get("/signup",getUserSignupController)


module.exports = router;