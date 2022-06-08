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

let html = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"/>
        <title>My Team</title>
    </head>
    <body>
        <header class="hero is-primary">
            <h1 class="title is-1 has-text-centered p-4">My Team</h1>
        </header>
        <main class="container">
            <section id="cardContainer" class="columns is-multiline is-centered">
`;

const baseQuestions = [
    // member's name
    {
        type: "input",
        name: "name",
        message: "Team member's name: "
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
    inquirer.prompt([
        {
            type: "list",
            name: "title",
            message: "Title of member:",
            choices: ["Engineer", "Intern"]
        }
    ]).then((answer) => {
        inquirer.prompt(baseQuestions).then((answers) => {
            name = answers.name;
            id = answers.id;
            email = answers.email;

            if(answer.title == "Engineer") {
                createEngineer();
            }
            else {
                createIntern(); 
            }
        });
    });
   
}

// function to ask engineer's question and create its html card
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

        employee = new Engineer(name, id, email, other);

        html += `
<div class="column is-multiline is-one-third">
    <div class="card">
        <div class="card-content">
            <p class="title is-4">${employee.getName()}</p>
            <p class="subtitle is-6">${employee.getRole()}</p>
            <ul>
                <li>ID: ${employee.getId()}</li>
                <li>Email: <a class="email" href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li><a href="https://github.com/${employee.getGithub}">Github</a></li>
            </ul>
        </div>
    </div>
</div>
        `;

        console.log("Engineer Card is created.");

        askForMore();
    });
}

// function to ask intern's question and create its html card
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

        employee = new Intern(name, id, email, other);

        html += `
<div class="column is-multiline is-one-third">
    <div class="card">
        <div class="card-content">
            <p class="title is-4">${employee.getName()}</p>
            <p class="subtitle is-6">${employee.getRole()}</p>
            <ul>
                <li>ID: ${employee.getId()}</li>
                <li>Email: <a class="email" href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li>School: ${employee.getSchool()}</li>
            </ul>
        </div>
    </div>
</div>
        `;

        console.log("Intern Card is created.");
        
        askForMore();        
    });
}

// function to ask if user want to add more employee
function askForMore() {
    inquirer.prompt(moreEmployee).then((answer => {
        if(answer.moreMember) {
            addEmployee();
        }
        else {
            generateFile();
        }
    })); 
}

// function to generate html file with created String.
function generateFile(){
    html += `
    </section>
            </main>
        </body>
        </html>`;
    
    fs.writeFile("./dist/index.html", html, (err) => {
        if(err)
        {
            throw err;
        }
        console.log("Profile file is generated successfully.");
    });
}

function init() {
    //ask for manager info first
    inquirer.prompt(baseQuestions).then((answers) => {
        name = answers.name;
        id = answers.id;
        email = answers.email;
        
        inquirer.prompt(otherQuestion).then((answer) => {
            other = answer.office;

            employee = new Manager(name, id, email, other);

            html += `
<div class="column is-multiline is-one-third">
    <div class="card">
        <div class="card-content">
            <p class="title is-4">${employee.getName()}</p>
            <p class="subtitle is-6">${employee.getRole()}</p>
            <ul>
                <li>ID: ${employee.getId()}</li>
                <li>Email: <a class="email" href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li>Office Number: ${employee.getOffice()}</li>
            </ul>
        </div>
    </div>
</div>
            `;
            console.log("Manager Card is created.");
            askForMore();
        });
    });    
}

init();