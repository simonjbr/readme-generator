// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		message: 'What is your Project Title?',
		name: 'title',
	},
	{
		type: 'input',
		message: 'What is your Project Description?',
		name: 'description',
	},
	{
		type: 'input',
		message: 'What are the Installation Instructions?',
		name: 'installation',
	},
	{
		type: 'input',
		message: 'What is the Usage Information?',
		name: 'usage',
	},
	{
		type: 'input',
		message: 'What are the Contribution Guidelines?',
		name: 'contribution',
	},
	{
		type: 'input',
		message: 'What are the Test Instructions?',
		name: 'tests',
	},
	{
		type: 'list',
		message: 'Which License will you be using?',
		name: 'license',
		choices: [
			"GNU General Public License family",
			"MIT",
			"Open Software License 3.0",
			"The Unlicense",
			"ISC",
			"Do What The F*ck You Want To Public License",
			"Creative Commons license family"
		],
	},
	{
		type: 'input',
		message: 'What is your GitHub Username?',
		name: 'github',
	},
	{
		type: 'input',
		message: 'What is your Email Address?',
		name: 'email',
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

	fs.writeFile(fileName, generateMarkdown(data), (error) => console.error(error));
}

// TODO: Create a function to initialize app
function init() {

	// inquirer command line interface
	// prompt for relevent info
	// write responses to output readme
	inquirer
		.prompt(questions)
		.then((res) => {

			// debug log
			console.log(res);
			writeToFile('./output/README.md', res);
		});
}

// Function call to initialize app
init();
