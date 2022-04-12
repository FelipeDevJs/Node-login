
module.exports = { 
    sessionChecker(req,res, next){
        if(req.session.user && req.cookies.user_token){
            res.redirect("/dashboard")
        }else {
            next()
        }
    }
}