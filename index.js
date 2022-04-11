// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const promptUser = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
    ]);
};

promptUser().then(answers => console.log(answers));

/*inquirer
    .prompt([

    ])
    .then(answers => {

    });*/


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


//inquirer.prompt(questions) -> promise