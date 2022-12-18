import Router from 'express'
import * as cartsControllers from '../../controllers/cartsControllers/index.js'

const v1RouterCarritos = new Router()

v1RouterCarritos.post('/', cartsControllers.createCartController)

v1RouterCarritos.get('/:carritoId/productos', cartsControllers.getProductsCartController);

v1RouterCarritos.post('/:carritoId/productos', cartsControllers.createProductToCartController);

v1RouterCarritos.delete('/:carritoId/productos', cartsControllers.deleteProductFromCartController);

v1RouterCarritos.delete('/:carritoId', cartsControllers.deleteAllProductsFromCartController);

export {v1RouterCarritos}