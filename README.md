# readme-generator

[![License: MIT](https://shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The readme-generator is an application that makes creating a high quality and professional readme quick and easy with the use of the Inquirer command line interface.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

In order to run the application the user must have [node.js](https://nodejs.org/en/download/current) installed. Then the user must install dependencies (Inquirer@8.2.4) by running `npm i` on the command line in the root directory of the repository.

## Usage

To start the application the user must run `npm start`.

The user will then be prompted to enter the following information:
- `Project Title`
- A `Description` section
- `Installation Instructions`
- `Usage Information`
- `Contribution Guidelines`
- `Test Instructions`
- Pick a `License` option from the list provided
- Their `GitHub Username`
- And, their `Email Address`

Following this, the data will be injected in to a template and written to the file `/output/README.md`.

Find the video walkthrough here:
[Video Walkthrough]()

## Credits

[simonjbr](https://github.com/simonjbr)

Starter code provided by [edX Bootcamps](https://www.edx.org/boot-camps)

[Node.js](https://nodejs.org/en)

[Inquirer](https://www.npmjs.com/package/inquirer)

## License

Please refer to [MIT license](./LICENSE) information in the repository.