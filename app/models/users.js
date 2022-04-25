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
        return this.username = "Fernandito"
    }
    set setBio(bio){
        return this.bio = "NewBio"
    }
}

module.exports = User