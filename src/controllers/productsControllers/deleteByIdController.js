import * as productsServices from '../../services/productsServices/index.js'

const deleteByIdController = async (req, res) => {
    try {
        const deletedProduct = await productsServices.deleteByIdService(req.params.id)
        res.send({ staus: 'OK', data: deletedProduct })
    } catch (error) {
        if(error.msg == "the product's id is not register"){
            res.status(400).send({status: "failed", data: {error: `${error.msg}: ${error.data}`}})
        }else if(error.msg == "the product id is malformed, please enter an integer"){
            res.status(400).send({status: "failed", data: {error: `${error.msg}: ${error.data}`}})
        }
    }
}

export {deleteByIdController}