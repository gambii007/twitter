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
})