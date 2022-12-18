import Router from 'express'
import * as auth from '../../middlewares/auth.js'

import * as authControllers from '../../controllers/authControllers/index.js';
// import * as productsControllers from '../../controllers/productsControllers/index.js'

const v1RouterAuth = new Router()

// register
v1RouterAuth.get('/register', auth.isLoged, authControllers.getRegisterController)
v1RouterAuth.post('/register', authControllers.registerController)
v1RouterAuth.get('/successRegister', authControllers.successRegisterController)
v1RouterAuth.get('/failRegister', authControllers.failRegisterController)

// login
v1RouterAuth.get('/login', auth.isLoged, authControllers.getLoginController)
v1RouterAuth.post('/login', authControllers.loginController)
v1RouterAuth.get('/successLogin', authControllers.successLoginController)
v1RouterAuth.get('/failLogin', authControllers.failLoginController)

v1RouterAuth.get('/logout', authControllers.logoutController)

export {v1RouterAuth}