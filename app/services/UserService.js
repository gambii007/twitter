const User = require('./../../app/models/users.js')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
    static getInfo(user){
        return Object.values(user)
    }
    static updateUserUsername(user, name){
        user.setUsername = name
    }
    static getAllUsernames(users){        
        const userUsernames = users.map( user => user.username)
        return userUsernames
    }
}

module.exports = UserService