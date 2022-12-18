import ProductsMONGO from '../container/ProductsMONGO.js'
import productSchema from '../models/productSchema.js'

const productsDAO = new ProductsMONGO('products', productSchema)

export {
    productsDAO,
}

// const productExtend = class productsDAO extends ProductsMONGO{}
// export const productsDAO = new productExtend('products', productSchema)