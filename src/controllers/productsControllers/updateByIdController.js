import * as productsServices from '../../services/productsServices/index.js'

const updateByIdController = async (req, res)=> {
    try {
        const productUpdated = await productsServices.updateByIdService(req.params.id, req.body);
        res.send({ staus: 'OK', data: productUpdated })
    } catch (error) {
        console.log(error);
        if(error.msg == "the request's body is empty"){
            res.status(400).send({status: "failed", data: {error: `${error.msg}`}})
        }else if(error.msg == "the product's id is malformed, please enter an integer"){
            res.status(400).send({status: "failed", data: {error: `${error.msg}: ${error.data}`}})
        }else if(error.msg == "the product's id is not register"){
            res.status(400).send({status: "failed", data: {error: `${error.msg}: ${error.data}`}})
        }else if(error.msg == "the product's name is already register"){
            res.status(400).send({status: "failed", data: {error: `${error.msg}: ${error.data}`}})
        }
    }
}

export {updateByIdController}