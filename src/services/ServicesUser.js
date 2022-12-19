import bcryptjs from 'bcryptjs'

import { User } from './User.js'
import {randomUUID} from 'crypto'

class ServicesUser {
    constructor(repository){
        this.userRepository = repository
    }

    async registerUser (data){
        const registered = await this.userRepository.repoGetUserByUsername(data.username)

        // si no encuentra ese dato mongoose devuelve null (username: username)
        if(registered != null) throw new Error('mail no disponible')

        data.password = await bcryptjs.hash(data.password, 8)

        const userNoDto = new User({
            id: randomUUID(),
            ...data
        })

        const userDto = userNoDto.convertToDTO()
        
        await this.userRepository.repoSave(userDto)

        return userDto
    }

    async autenticarUsuario(username, password){
        // realizar error de autenticacion
        let userNoDto = await this.userRepository.repoGetUserByUsername(username)
        try {
            if(userNoDto == null){
                // throw new Error(`error autenticacion con: ${username}`)
                throw {msg: `error autenticacion con:`, data: `${username}`}
            }
            if(await bcryptjs.compare(password, userNoDto.getPassword())){
                const userDto = userNoDto.convertToDTO()
                return userDto
            }else{
                // throw new Error('error autenticacion con: password')
                throw {msg: `error autenticacion con:`, data: `password`}
            }
        } catch (error) {
            // console.log(`inf err: ${error}`);
            throw error
        }
        

        
    }

    async getByUsername(username){
        const userNoDto = await this.userRepository.repoGetUserByUsername(username)

        const userDto = userNoDto.convertToDTO()
        return userDto
    }

    async getById(id){
        const userNoDto = await this.userRepository.repoGetUserById(id)

        const userDto = userNoDto.convertToDTO()
        return userDto
    }
}

export {
    ServicesUser,
}