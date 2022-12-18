import UsersMONGO from '../container/UsersMONGO.js'
import userSchema from '../models/userSchema.js'

const usersDAO = new UsersMONGO('users', userSchema)

export {
    usersDAO
}

// const usersExtend = class usersDAO extends UsersMONGO{}
// export const usersDAO = new usersExtend('users', userSchema)