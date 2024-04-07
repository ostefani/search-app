# Search app

This is a code example, not a real world application.
Search cities application, adds cities to a list, it doesn't save the list in DB.
Created using JavaScript and PostgreSQL.

## Demo is available here (it was previously deployed on DO an now it's not avalable)

[Demo](http://http://64.226.104.96:3001/)

## Tech Stack

-   [Node.js](https://nodejs.org/en/) JavaScript runtime
-   [Express](https://expressjs.com/) web framework for Node.js
-   [Elephantsql](https://elephantsql.com) PostgreSQL as a Service
-   [React](https://reactjs.org/) a JavaScript library for building user interfaces
-   [Styled Components](https://www.styled-components.com/) CSS-in-JS

## Tools Used

-   [Webpack](https://webpack.js.org/) module bundler
-   [ESLint](http://eslint.org/) linter with [Airbnb's config]
-   [Babel.js](https://babeljs.io/) compiler

In order to start the app you need to create an .env file.

## Create a `.env` file

You can find a `.env.example` file in the root directory as a starting point. You can copy the content of this file to `.env` and add your own values.

```bash
nano .env
```

## Start the app in dev mode

```
npm run dev:server
```

```
npm run dev:client
```
