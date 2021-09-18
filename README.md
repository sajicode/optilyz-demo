# Optilyz Front-End Challenge

## Live Version [optilyz](https://optilyz-demo.herokuapp.com/)

## Libraries
- React
- Font Awesome
- Styled Components

## State Management
- React Context

## API
- [OMDB](http://www.omdbapi.com/) API

**Notes**
- The requests to the OMDB API were routed via the server in order to secure the API key.
- A default list of movies is returned on page load. A random title is chosen from a list of titles.
- The search button is disabled if there is no entry in the input field.
- CSS grids were utilized to display the movie posters. This helped with responsiveness automatically.
- A loader component is displayed while data is being fetched from the server.
- Default images are also utilised while images are loading or in the absence of a movie poster.

## Local Setup
- Run `yarn install` or `npm install` to install the required packages
### Development mode
- Run `yarn start:dev` or `npm run start:dev` in your terminal to start the client server
- Run `yarn start` or `npm start` to run the backend server

### Production mode
- Run `yarn build` or `npm run build` to build the client folder.
- Set `NODE_ENV` in your `.env` file to `production` e.g `NODE_ENV=production`
- Run `yarn start` or `npm start` to run the production build

