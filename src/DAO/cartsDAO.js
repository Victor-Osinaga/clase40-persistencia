import CartsMONGO from '../container/CartsMONGO.js'
import cartSchema from '../models/cartSchema.js'

const cartsDAO = new CartsMONGO('carts', cartSchema)

export {
    cartsDAO
}

// const cartsExtend = class cartsDAO extends CartsMONGO{}
// export const cartDAO = new cartsExtend('carts', cartSchema)