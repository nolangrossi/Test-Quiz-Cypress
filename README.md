# Test-Quiz-Cypress

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

    a tech quiz application built using the MERN stack that allows users to take a quiz of ten random questions and view their final score.

## Table of Contents

* [Description](#description)
* [Dependencies](#dependencies)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)

## Dependencies

  This project relies on the following dependencies:

* **Express**: Used as the core web server to handle API requests from the React client, routing GraphQL queries, and managing middleware for authentication and authorization.
* **Mongoose**: Defines the data models (schemas) for User and Book collections in MongoDB, facilitating data validation and interaction with the database for user authentication, book management, and data retrieval via GraphQL.
* **Dotenv**: Loads environment variables from a .env file to securely manage sensitive information, such as database connection strings and JWT secrets, ensuring they are not exposed in the codebase.
* **MongoDB**: Stores all persistent data, including user accounts, book information, and any other application-specific data models defined using Mongoose.
* **React**: Builds the interactive client-side application, consuming the GraphQL API to display and manage book and user data, and providing a dynamic user experience.
* **Cypress**: for component and end-to-end testing.

## Installation

**Prerequisites:**

* Node.js and npm (or yarn) installed.
* MongoDB installed.

**Steps:**

1. Clone this repository
2. `cd` into the project folder
3. Install the dependencies by runnning `npm install` in the command line
4. `npm run build` to build the application
5. `npm run seed` to seed the database
6. `npm run start:dev` to test the application locally
7. `npm run cypress` to open cypress and initiate the tests or `npm run test` to initiate tests in a headless browser

## Usage

[Video Walkthrough](https://drive.google.com/file/d/1sU8dv5VV3QrfnZyiCnwIGNXLo0j8Ysfc/view?usp=sharing)


## License

  This project is licensed under MIT. For more information, see (<https://opensource.org/licenses/MIT>)

## Questions

  **GitHub**: [nolangrossi](https://github.com/nolangrossi)

  If you have any questions, please contact me at: <nolangrossi6@gmail.com>
