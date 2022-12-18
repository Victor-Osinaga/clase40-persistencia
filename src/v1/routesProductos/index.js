import Router from 'express'
import * as productsControllers from '../../controllers/productsControllers/index.js'
import { requiredAutentication } from '../../middlewares/auth.js';

const v1RouterProductos = new Router()

// ejemplo middleware

// v1RouterProductos.get('/', function asd(req,res,next){
//     console.log("desde next");
//     next()
// }, productsControllers.getAllProductsController);
v1RouterProductos.get('/', requiredAutentication, productsControllers.getAllProductsController);
v1RouterProductos.post('/', requiredAutentication, productsControllers.createProductController);
v1RouterProductos.get('/:id', productsControllers.getProductByIdController);
v1RouterProductos.delete('/:id', productsControllers.deleteByIdController);
v1RouterProductos.put('/:id', productsControllers.updateByIdController);

export {v1RouterProductos}