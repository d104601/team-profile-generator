const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
    describe("constructor", ()  =>{
        it("can set office number when the class is constructed", () => {
            const office = "123";
            const output = "123";
            const manager = new Manager("test", 1, "test@gmail.com", office);

            expect(manager.officeNumber).toEqual(output);
        })
    })
});