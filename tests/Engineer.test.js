const Engineer = require("../lib/Engineer");

test("getRole() should return 'Engineer'.", () => {
    const engineer = new Engineer("test", 1, "test@gmail.com", 123);

    expect(engineer.getRole()).toEqual("Engineer");
});

test("getGithub() should return constructed 'github'", () => {
    const github = "d104601";
    const engineer = new Engineer("test", 1, "test@gmail.com", github);

    expect(engineer.getGithub()).toEqual(github);
});