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
    test('2) Get all user data in a list', () =>{
        const user = UserService.create(1, "gambito","fernando")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("gambito")
        expect(userInfoInList[2]).toBe("fernando")
        expect(userInfoInList[3]).toBe("Sin bio")
    });
    test('3) Update Username', () =>{
      const user = UserService.create(1, "gambito", "fernando")
      UserService.updateUserUsername(user, "gambii007")
      expect(user.username).toBe("gambii007")
    })
})