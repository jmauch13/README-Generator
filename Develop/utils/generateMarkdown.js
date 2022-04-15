// function to gererate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![badge](https://img.shields.io/license-${data.license}-brightgreen)<br />

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

## License
This project is licensed under ${data.license}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
If you have any questions about this project, please contact me at ${data.email}.
You can find me on Github at https://github.com/${data.github}.
`;
}


module.exports = generateMarkdown;




