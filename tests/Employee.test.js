const Employee = require("../lib/Employee");

test("getName() should return constructed 'name'", () => {
    const name = "John Dow";
    const employee = new Employee(name, 123, "test@gmail.com");

    expect(employee.getName()).toEqual(name);
});

test("getId() should return constructed 'id'", () => {
    const id = "123";
    const employee = new Employee("test", id, "test@gmail.com");

    expect(employee.getId()).toEqual(id);
});

test("getEmail() should return constructed 'id'", () => {
    const email = "test@gmail.com";
    const employee = new Employee("test", 123, email);

    expect(employee.getEmail()).toEqual(email);
});

test("getRole() should return 'Employee'.", () => {
    const employee = new Employee("test", 1, "test@gmail.com");

    expect(employee.getRole()).toEqual("Employee");
});