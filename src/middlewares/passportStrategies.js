import { Strategy } from 'passport-local'

// import {autenticar} from '../api/authApi.js'
// import { usersDAO } from '../DAO/usersDAO.js'

import { userServices } from '../services/usersServices/factoryUser.js'

// import { ensureUniqueName } from '../api/user.js'
// import { crearUsuario } from '../models/user.js'

export const registroLocal = new Strategy({
    passReqToCallback: true,
},
    async(req,username,password,done)=> {
        try {
            // await ensureUniqueName(username)
            // const usuario = crearUsuario(req.body)
            // await usersDAO.save((usuario))

            const usuario = await userServices.registerUser(req.body)

            console.log(usuario);
            done(null, usuario)
        } catch (error) {
            done(null, false,error)
        }
    }
)

export const loginLocal = new Strategy(
    async (username, password, done)=> {
        try {
            const usuario = await userServices.autenticarUsuario(username, password)
            done(null, usuario)
        } catch (error) {
            console.log("err desde passport strategies", error);
            done(null, false, error)
        }
    }
)