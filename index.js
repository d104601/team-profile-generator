const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

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
let additional = [
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

// 수정 필요
function EngineerQuestion() {
    inquirer.prompt(
        {
            type: "input",
            name: "github",
            message: "Github account: "
        }
    )
    .then((answer) =>{
        return answer.github;
    });
}

// 수정 필요
function InternQuestion() {
    inquirer.prompt(
        {
            type: "input",
            name: "school",
            message: "Name of school: "
        }
    )
    .then((answer) =>{
        return answer.school;
    });
}



function init() {

}

init();