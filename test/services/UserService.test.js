const UserService = require('./../../app/services/UserService')

describe("Unit Test for User Service", () => {
    test('1) Create new user using UserService', () => {
      //Codigo que necesitemos
      const user = UserService.create(1,"gambito","fernando")
      //Validadores para que corra segun lo que queremos
      expect(user.id).toBe(1)
      expect(user.username).toBe("gambito")
      expect(user.name).toBe("fernando")
      expect(user.name).not.toBeUndefined()
    });
})