const User = require('../../app/models/users')

describe("Unit Test for User class", () => {
    test('1) Create an user object', () => {
      //Codigo que necesitemos
      //Instanciar un objeto Spiderman con esta informacion
      const usuario = new User("gambii007","gambito","fernando","bio")
      //Validadores para que corra segun lo que queremos
      expect(usuario.id).toBe("gambii007")
      expect(usuario.username).toBe("gambito")
      expect(usuario.name).toBe("fernando")
      expect(usuario.bio).toBe("bio")
      expect(usuario.dateCreated).not.toBeUndefined()
      expect(usuario.lastUpdated).not.toBeUndefined()
    });
    test('2) Test Getts', () =>{
        const usuario = new User("gambii007","gambito","fernando","bio")

        expect(usuario.getUsername()).toBe("Username: gambito")
        expect(usuario.getBio()).toBe("Bio: bio")
        expect(usuario.getDateCreated()).not.toBeUndefined()
        expect(usuario.getLastUpdated()).not.toBeUndefined()
    });
    test('3) Add Setters', () =>{
        const usuario = new User("gambito","bio")

        usuario.setUsername = "Fernandito"
        expect(usuario.getUsername()).toBe("Username: Fernandito")
        usuario.setBio = "NewBio"
        expect(usuario.getBio()).toBe("Bio: NewBio")
    })
})