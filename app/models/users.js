class User{
    constructor(id, username, name, bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }
    getUsername(){
        return `Username: ${this.username}`
    }
    getBio(){
        return `Bio: ${this.bio}`
    }
    getDateCreated(){
        return `Datecreated: ${this.dateCreated}`
    }
    getLastUpdated(){
        return `LastUpdated: ${this.lastUpdated}`
    }

    set setUsername(username){
        return this.username = username
    }
    set setBio(bio){
        return this.bio = bio //Declara que el contenido que recibe sera el nuevo valor
    }
}

module.exports = User