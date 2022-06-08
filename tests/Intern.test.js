const Intern = require("../lib/Intern");

test("getRole() should return 'Intern'.", () => {
    const intern = new Intern("test", 1, "test@gmail.com", "Test School");

    expect(intern.getRole()).toEqual("Intern");
});

test("getSchool() should return constructed 'school'", () => {
    const school = "Test School";
    const intern = new Intern("test", 1, "test@gmail.com", school);

    expect(intern.getSchool()).toEqual(school);
});