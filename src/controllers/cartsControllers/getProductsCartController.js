import * as cartsServices from '../../services/cartsServices/index.js'

const getProductsCartController = async (req, res) => {
    try {
        const {carritoId} = req.params
        const productsCart = await cartsServices.getProductsCartService(carritoId)
        // if(productsCart === false){
        //     res.send({status: "error", error: `el ID: ${carritoId} no es valido, por favor ingrese un numero mayor a cero`})
        // }else if(productsCart == undefined){
        //     res.send({status: "error", error: `el carrito con ID: ${carritoId} no existe`})
        // }else{
            res.send({status: "OK", data: productsCart})
        // }
    } catch (error) {
        if(
            error.msg === "the cart's id is malformed, please enter an integer" || 
            error.msg === "the cart's id is not register"
        ){
            res.status(400).send({status: "failed", data: {error: `${error.msg}: ${error.data}`}})
        }
    }
}

export {getProductsCartController}