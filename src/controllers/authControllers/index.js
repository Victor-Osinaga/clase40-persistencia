import passport from 'passport'

const registerController = passport.authenticate('registro', {
    successRedirect: '/api/v1/auth/successRegister',
    failureRedirect: '/api/v1/auth/failRegister'
    // (err)=>{
    //     try {
    //         if(!err)return {successRedirect: '/api/v1/auth/successRegister'}
    //         throw {failureRedirect: '/api/v1/auth/failRegister'}
    //     } catch (error) {
    //         console.log("desde autcontroller",error);
    //         return error
    //     }
    // }
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
    // res.redirect('/api/v1/admin/home')
    res.status(200).send({success: "Iniciando sesión..."})
}

function failLoginController(req,res){
    // res.render('failLogin')
    res.status(400).send({msg: "El email no está registrado"})
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