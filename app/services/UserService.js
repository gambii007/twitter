const User = require('./../../app/models/users.js')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
    static getInfo(user){
        return Object.values(user)
    }
}

module.exports = UserService