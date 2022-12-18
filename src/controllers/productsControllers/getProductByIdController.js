import * as productsServices from '../../services/productsServices/index.js'

const getProductByIdController = async (req, res)=> {
    try {
        const productById = await productsServices.getProductByIdService(req.params.id);
        if (productById){
            res.send({ staus: 'OK', data: productById })
        }else{
            res.send({ staus: 'OK', data: `El producto con el id ${req.params.id} no existe` })
        }
    } catch (error) {
        if(error.msg == "the product's id is malformed, please enter an integer"){
            res.status(400).send({status: "failed", data: {error: `${error.msg}: ${error.data}`}})
        }else if(error.msg == "the product's id is not register"){
            res.status(400).send({status: "failed", data: {error: `${error.msg}: ${error.data}`}})
        }
    }
}

export {getProductByIdController}