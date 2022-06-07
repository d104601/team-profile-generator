const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

let employee;
let name;
let id;
let email;
let other;
let html = "";

const baseQuestions = [
    // member's name
    {
        type: "input",
        name: "name",
        message: "Team members name: "
    },

    // member's id
    {
        type: "input",
        name: "id",
        message: "ID number: "
    },

    // email address
    {
        type: "input",
        name: "email",
        message: "Email address: "
    }
]

// additional question by employee title. Default question is for Manager.
let otherQuestion = [
    {
        type: "input",
        name: "office",
        message: "Office number: "
    }
]

// question to generate additional employee
const moreEmployee = [
    {
        type: "confirm",
        name: "moreMember",
        message: "Do you want to add more team member?"
    }
]

function addEmployee() {
    inquirer.prompt(baseQuestions).then((answers) => {
        name = answers.name;
        id = answers.id;
        email = answers.email;
    });

    inquirer.prompt([
        {
            type: "list",
            name: "title",
            message: "Title of member:",
            choices: ["Engineer", "Intern"]
        }
    ]).then((answer) => {
        if(answer.title == "Engineer") {
            createEngineer();
        }
        else {
            createIntern();
        }
    });

    inquirer.prompt(moreEmployee).then((answer => {
        if(answer.moreMember)
        {
            addEmployee();
        }
    }));    
}

function createEngineer() {
    otherQuestion = [
        {
            type: "input",
            name: "github",
            message: "Github account: "
        }
    ]

    inquirer.prompt(otherQuestion).then((answer) => {
        other = answer.github;
    });

    employee = new Engineer(name, id, email, other);
}

function createIntern() {
    otherQuestion = [
        {
            type: "input",
            name: "school",
            message: "Name of school: "
        }
    ]

    inquirer.prompt(otherQuestion).then((answer) => {
        other = answer.school;
    });

    employee = new Intern(name, id, email, other);
}

function init() {
    //ask for manager info first
    inquirer.prompt(baseQuestions).then((answers) => {
        name = answers.name;
        id = answers.id;
        email = answers.email;
    });
    inquirer.prompt(otherQuestion).then((answer) => {
        other = answer.office;
    });

    employee = new Manager(name, id, email, other);

    // ToDo: add feature for generating card with given class

    inquirer.prompt(moreEmployee).then((answer => {
        if(answer.moreMember)
        {
            addEmployee();
        }
    }));



}

init();