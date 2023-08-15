// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "MIT") {
    badgeUrl = "https://img.shields.io/badge/License-MIT-yellow.svg";
  }

  return `[![License Badge](${badgeUrl})](${renderLicenseLink(license)})`;
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  }
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === "none") {
    return "";
  } else {
    return `
    ### licensing
    This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
    ${renderLicenseBadge(license)}`;
  }
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  For questions or concerns, you can reach out to ${data.email}.
  Github: [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
