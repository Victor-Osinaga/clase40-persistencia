class User {
    #id
    #username
    #password
    constructor({id, username, password}){
        this.setId(id)
        this.setUsername(username)
        this.setPassword(password)
    }

    // getter y setter ID
    setId(id){
        this.#id = id
    }
    getId(){return this.#id}

    // getter y setter USERNAME
    setUsername(username){
        this.#username = username
    }
    getUsername(){return this.#username}
    
    // getter y setter PASSWORD
    setPassword(password){
        if(!password) throw new Error('password requerida')
        this.#password = password
    }
    getPassword(){return this.#password}
    
    // DTO
    convertToDTO(){
        return Object.freeze({
            id: this.#id,
            username: this.#username,
            password: this.#password,
        })
    }
}

export {User}