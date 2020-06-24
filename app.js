const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const managerBio = [
    {
        type: "input",
        name: "manager-name",
        message: "What is your manger name?",
    }, {
        type: "input",
        name: "manager-id",
        message: "What is your manager id number?"
    }, {
        type: "input",
        name: "manager-email",
        message: "What is your manager email?"
    }, {
        type: "input",
        name: "office-number",
        message: "What is your manager office number?"
    }
];

const engineerBio = [
    {
        type: "input",
        name: "engineer-name",
        message: "What is your engineer name?",
    }, {
        type: "input",
        name: "engineer-id",
        message: "What is your engineer id number?"
    }, {
        type: "input",
        name: "engineer-email",
        message: "What is your engineer email?"
    }, {
        type: "input",
        name: "github-name",
        message: "What is your engineer GitHub username?"
    }
]

const internBio = [
    {
        type: "input",
        name: "intern-name",
        message: "What is your intern name?",
    }, {
        type: "input",
        name: "intern-id",
        message: "What is your intern id number?"
    }, {
        type: "input",
        name: "intern-email",
        message: "What is your intern email?"
    }, {
        type: "input",
        name: "school-name",
        message: "What school does your intern attend?"
    }
]

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
