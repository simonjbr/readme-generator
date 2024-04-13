// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

	// debug log
	console.log('license:', license);

	// switch-case for selected license
	switch (license) {
		case 'GNU General Public License v3.0':
			return '[![License: GPL](https://shields.io/badge/License-GPLv3-blue.svg)]';
		case 'MIT':
			return '[![License: MIT](https://shields.io/badge/License-MIT-yellow.svg)]';
		case 'Open Software License 3.0':
			return '[![License: OSL 3.0](https://shields.io/badge/License-OSL_3.0-lightgreen.svg)]';
		case 'The Unlicense':
			return '[![License: Unlicense](https://shields.io/badge/License-Unlicense-blue.svg)]';
		case 'ISC':
			return '[![License: ISC](https://shields.io/badge/License-ISC-blue.svg)]';
		case 'Do What The F*ck You Want To Public License':
			return '[![License: WTFPL](https://shields.io/badge/License-WTFPL-brightgreen.svg)]';
		case '':
			return '';
		default:
			console.log('Error: Invalid license');
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

	// switch-case for selected license
	switch (license) {
		case 'GNU General Public License v3.0':
			return '(https://www.gnu.org/licenses/gpl-3.0)';
		case 'MIT':
			return '(https://opensource.org/licenses/MIT)';
		case 'Open Software License 3.0':
			return '(https://opensource.org/license/osl-3-0-php)';
		case 'The Unlicense':
			return '(http://unlicense.org/)';
		case 'ISC':
			return '(https://opensource.org/licenses/ISC)';
		case 'Do What The F*ck You Want To Public License':
			return '(http://www.wtfpl.net/about/)';
		case '':
			return '';
		default:
			console.log('Error: Invalid license');
	}
}

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

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute ](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseSection}

## How to Contribute <a id="contribute"></a>
${data.contribution}

## Tests
${data.tests}

## Questions
Find my GitHub profile at: [https://github.com/${data.github}](https://github.com/${data.github})

Please direct any questions to my email: ${data.email}
`;
}

module.exports = generateMarkdown;
