import {productsDAO} from '../../DAO/productsDAO.js';

const createProductService = async (data) => {
    try {
        if(Object.entries(data).length === 0){
            throw {msg: "the request's body is empty"}
        }else if(
            !data.name || !data.description || 
            !data.photo || !data.price || 
            !data.stock
        ){
            let camposRequeridos = ["name", "description", "photo", "price", "stock"]
            let keysData = Object.keys(data) 
            var camposFaltantes = camposRequeridos.filter(el => !keysData.includes(el));
            throw {msg:`the request's data is missing`, data: `${camposFaltantes}`}
        }

        // id: {type: Number},
        // name: {type: String, required: true/*, max: 10*/},
        // description: {type: String, required: true},
        // photo: {type: String, required: true},
        // price: {type: Number, required: true},
        // code: {type: String, required: true},
        // stock: {type: Number, required: true},
        // timestamp: {type: String, required: true},

        function objToSave(i){
            return {
                id: i,
                name: data.name.toLowerCase(),
                description: data.description.toLowerCase(),
                photo: data.photo,
                price: Number(data.price),
                code: Date.now(),
                stock: parseInt(data.stock),
                timestamp: new Date().toLocaleString('en-US', {timeZone: 'UTC'})
            }
        }
        let newId;
        const allProducts = await productsDAO.getAll()

        if(allProducts.length == 0){
            newId = 1
            const newProduct = objToSave(newId)
            const createdProduct = await productsDAO.createProduct(newProduct);
            return createdProduct
        }

        const alreadyProductName = allProducts.find(e=>e.name == data.name.toLowerCase())
        if(alreadyProductName){
            throw {msg: "the product's name is already register", data: `${data.name}`}
        }else{
            newId = await allProducts[allProducts.length - 1].id + 1
            const newProduct = objToSave(newId)
            const createdProduct = await productsDAO.createProduct(newProduct);
            return createdProduct
        }
    } catch (error) {
        console.log("info error", error);
        throw error
    }
}

export {createProductService}