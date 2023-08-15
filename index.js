// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');
const { clear } = require('console');

// TODO: Create an array of questions for user input
const questions = [
    //project title
    {
        type: 'Input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please enter your project title')
                return false;
            }
        }
    },
    //project description
    {
        type: 'Input',
        name: 'description',
        message: 'Describe your project',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please describe your project')
                return false;
            }
        }
    },
    //email address
    {
        type: 'Input',
        name: 'email',
        message: 'What is your email address?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please enter your email address')
                return false;
            }
        }
    },
    //github user name
    {
        type: 'Input',
        name: 'github',
        message: 'What is your github username?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please enter your github username')
                return false;
            }
        }
    },
    //installation instructions
    {
        type: 'Input',
        name: 'installation',
        message: 'Provide installation instructions.',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('You must enter installation instructions')
                return false;
            }
        }
    },
    //product usage
    {
        type: 'Input',
        name: 'usage',
        message: 'how can your project be used?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please enter how to use your project')
                return false;
            }
        }
    },
    //license info
    {
        type: 'list',
        name: 'license',
        message: 'what license are you using for your project?',
        choices: [
            'Apache 2.0',
            'MIT',
            'GPL 3.0',
            'None'
        ],
    },
    //contribution
    {
        type: 'input',
        name: 'contribution',
        message: 'provide instructions on how users can contribute to your project',
        validate: contribution => {
            if (contribution) {
                return true;
            } else {
                console.log('please provide instruction on how to contribute to this project');
                return false;
            }
        }
    },
    //project tests
    {
        type: 'input',
        name: 'tests',
        message: 'provide instructions on how users can test your project',
        validate: tests => {
            if (tests) {
                return true;
            } else {
                console.log('please provide instructions on how to test your project');
                return false;
            }
        }
    },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;

        console.log("Readme.md Created!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(readmeData => {
        writeToFile("./dist/readme.md", generateMarkdown(readmeData))
    });
};

// Function call to initialize app
init();
