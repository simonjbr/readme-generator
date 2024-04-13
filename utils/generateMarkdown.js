// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

	// create license badge
	const licenseBadge = renderLicenseBadge(data.license);

	// create license link
	const licenseLink = renderLicenseLink(data.license);

	// create license section
	const licenseSection = renderLicenseSection(data.license);

	return `
# ${data.title}
${licenseBadge}${licenseLink}

## Description
${data.description}

## Table of Contents
- [${data.title}](#datatitle)
	- [Description](#description)
	- [Table of Contents](#table-of-contents)
	- [Installation](#installation)
	- [Usage](#usage)
	- [License](#license)
	- [How to Contribute ](#how-to-contribute-)
	- [Tests](#tests)
	- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseSection}

## How to Contribute <a id="contribute"></a>
${contribution}

## Tests
${data.tests}

## Questions
Find my GitHub profile at: [https://github.com/${data.github}](https://github.com/${data.github})

Please direct any questions to my email: ${data.email}
`;
}

module.exports = generateMarkdown;
