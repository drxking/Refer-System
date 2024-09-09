const bcrypt = require('bcrypt')
let superAdminModel = require("../models/superadmin")



module.exports.getSuperAdminLoginController = async (req, res) => {
    res.render("superAdminLogin")
}




module.exports.postSuperAdminLoginController = async (req, res) => {
    try {
        let { email, username, password } = req.body;
        let superAdmin = await superAdminModel.findOne({ email })
        if (!superAdmin) return res.send("Cannot find SuperAdmin with this email!")
        let result = await bcrypt.compare(password, superAdmin.password)
        if (email == superAdmin.email && username == superAdmin.username && result) {
            res.redirect("/superadmin/dashboard")
        }
        else{
            res.send("Username Or Password Doesnot match!")
        }
    }
    catch (err) {
        res.send(err.message).status(500)
    }
}




module.exports.superAdminDashboard = (req,res)=>{
    res.render("superAdminDashboard")
}