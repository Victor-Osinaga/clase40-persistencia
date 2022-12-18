import Router from 'express'

import * as homeAdminControllers from '../../controllers/getAdminHomeControllers/index.js'
import { requiredAutentication, isAdmin } from '../../middlewares/auth.js';

const v1RouterAdminHome = new Router()

// rutas ADMIN
v1RouterAdminHome.get('/home', requiredAutentication, isAdmin, homeAdminControllers.getAdminHome);
v1RouterAdminHome.get('/products/create', requiredAutentication, isAdmin, homeAdminControllers.getAdminCreate);
v1RouterAdminHome.get('/info', requiredAutentication, isAdmin, homeAdminControllers.generateInfo);
v1RouterAdminHome.get('/info-ejs', requiredAutentication, isAdmin, homeAdminControllers.getAdminInfo);

export {v1RouterAdminHome}