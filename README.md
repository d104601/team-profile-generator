# Team Profile Generator

## License 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Team Profile Generator with command line interface for developers using node.js. After collection of information, HTML file with profile data will be generated. Please see "./dist/index.html" for generated sample.

## Installation 
Download all files in the repository. This application requires "Node.js", "inquirer" package to run, and "Jest" package for testing. To install inquirer, please enter following in same directory:
```
npm install inquirer
```
To install Jest, please enter following in same directory:
```
npm install jest
```

## Usage 
Type following in command line to run the application:
```
node index.js
```

Type following in command line to test the application:
```
npm test
```


## Demonstration
![sample](https://github.com/d104601/team-profile-generator/blob/main/demo.gif)

## Generated Sample
![sample](https://github.com/d104601/team-profile-generator/blob/main/screenshot.jpg)

## Test
![sample](https://github.com/d104601/team-profile-generator/blob/main/test.jpg)
Test is applied to all .js files in "lib" as following criteria:
### Employee.js
* getName() should return constructed 'name'
* getId() should return constructed 'id'
* getEmail() should return constructed 'id'
* getRole() should return 'Employee'
### Manager.js
* getRole() should return 'Manager'.
* getOffice() should return constructed 'officeNumber'
### Engineer.js
* getRole() should return 'Engineer'
* getGithub() should return constructed 'github'
### Intern.js
* getRole() should return 'Intern'.
* getSchool() should return constructed 'school'