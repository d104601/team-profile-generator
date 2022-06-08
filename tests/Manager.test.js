const Manager = require("../lib/Manager");

test("getRole() should return 'Manager'.", () => {
    const manager = new Manager("test", 1, "test@gmail.com", 123);

    expect(manager.getRole()).toEqual("Manager");
});

test("getOffice() should return constructed 'officeNumber'", () => {
    const office = "123";
    const manager = new Manager("test", 1, "test@gmail.com", office);

    expect(manager.getOffice()).toEqual(office);
});