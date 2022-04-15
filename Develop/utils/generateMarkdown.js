const fs = require('fs');

function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
    }
  }


function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'Apache') {
    return `http://www.apache.org/licenses/LICENSE-2.0`
  }
  if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
}

function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## License
This project is covered under the ${license} license.  To learn more, click the link to your chosen license's information page`
  }
}

// function to gererate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
Questions about this project?
Email: ${data.email}
GitHub: https://github.com/${data.github}
`;
}


module.exports = generateMarkdown;




