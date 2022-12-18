import {usersDAO} from '../DAO/usersDAO.js'

function requiredAutentication(req, res, next){
    if(req.isAuthenticated()){
        next()
    }else{
        res.status(401).redirect('/api/v1/auth/login')
    }
}

function isLoged(req,res,next){
    if(req.isAuthenticated()){
        res.redirect('/api/v1/admin/home')
    }else{
        next()
    }
}

async function isAdmin(req,res,next){
    let user = await usersDAO.getUserbyUsername(req.user.username)
    if(user.admin){
        console.log(user.admin)
        next()
    }else{
        res.redirect('/api/v1/user/home')
    }
}

export {
    requiredAutentication,
    isLoged,
    isAdmin
}