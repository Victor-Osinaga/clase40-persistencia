import passport from 'passport'

const registerController = passport.authenticate('registro', {
    successRedirect: '/api/v1/auth/successRegister',
    failureRedirect: '/api/v1/auth/failRegister'
})

const loginController = passport.authenticate('login', {
    successRedirect: '/api/v1/auth/successLogin',
    failureRedirect: '/api/v1/auth/failLogin'
})

function successRegisterController(req,res){
    res.redirect('/api/v1/admin/home')
}

function failRegisterController(req,res){
    res.render('failRegister')
}

function successLoginController(req,res){
    res.redirect('/api/v1/admin/home')
}

function failLoginController(req,res){
    res.render('failLogin')
}

function getLoginController(req,res){
    res.render('login')
}

function getRegisterController(req,res){
    res.render('register')
}

function logoutController(req,res){
    const username = req.user.username;
    if(req.isAuthenticated()){
        req.logout((err)=>{
            res.render('logout', {name: username})
        })
    }else{
        res.redirect('/api/v1/admin/home')
    }
}

export {
    registerController,
    loginController,
    successRegisterController,
    failRegisterController,
    successLoginController,
    failLoginController,
    logoutController,
    getLoginController,
    getRegisterController
}