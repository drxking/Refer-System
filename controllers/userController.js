module.exports.getUserLoginController = (req, res) => {
    res.render("userLogin")
}

module.exports.postUserLoginController = (req, res) => {
    let { email, password } = req.body;

}

module.exports.getUserSignupController = (req, res) => {
res.render("userSignup")
}