import * as productsControllers from '../productsControllers/index.js'

const getUserHome = async(req,res) => {
    try {
        // const allProductos = await productsControllers.getAllProductsController();
        res.render('userHome', { name: req.user.username/*, allProductos */}) 
    } catch (error) {
        console.log(error);
    }
}

export {
    getUserHome
}