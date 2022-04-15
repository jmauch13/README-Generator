// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your username.');
                    return false;
                }
                }
            },
        
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email.');
                    return false;
                }
                }
            },
        
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project.');
                    return false;
                }
                }
            },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please write a description of your project.');
                    return false;
                }
                }
            },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose which type of license your project has',
            choices: ['MIT', 'Apache', 'GPL', 'None'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please choose a license option.');
                    return false;
                }
                }
            },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project?',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter steps required to install your project');
                    return false;
                }
                }
            },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter how this app is used');
                    return false;
                }   
                }
            },
        {
            type: 'input',
            name: 'test',
            message: 'What command would you like to use to run tests?',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to this app?'
        }
    ]);
};

// function to write README file
const writeFile = data =>{
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your README is ready!')
        }
    })
};

// function to initialize program
questions()
// retrieve answers
.then(answers => {
    return generateMarkdown(answers);
})
// display data on page
.then(data => {
    return writeFile(data);
})
//catch errors
.catch(err => {
    console.log(err)
})
