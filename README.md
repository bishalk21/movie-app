# Movie App

Live: https://movie-app-bishalk21.vercel.app/

This is a simple movie app that uses the [OMDb API](http://www.omdbapi.com/) to search for movies and display their details.

From this project, I have learned the following:

- axios
- react-router-dom
- tailwind css
- props, and props drilling and props updating
- state and state lifting
- react hooks - useState, useEffect
- react components

Tasks performed between the components of this Movie app:

1. Created main component `App.js` and others `SearchForm.js` for movie search, `CustomCard.js` for movie card and `MovieList.js` for movie list.
2. Created initial state for search value as string in `SearchForm.js`.
3. Created a function to fetch movie data from API in `App.js` and update the initial movie state {};
4. Passed the function to the `searchForm.js` as props to receive the searched value.
5. Created a function to update the initial state of the movie in `App.js` and passed it to `CustomCard.js` as props.
6. created mood as flat for selecting happy and romantic options in `CustomCard.js` and updated the property of movie, and movies are filtered in `movieList.js` or according to the mood button clicked.
7. Created delete button function on `App.js` which works by deleting the movie bt checking the imdbID of the movie.
8. Passed the function to the `movieList.js` and then to the `CustomCard.js` as props and finally invokeed in the delete button.

## How to use this app

- Clone this repo
- Run `npm install` to install all the dependencies
- Run `npm start` to start the app
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

NOTE: ** Whenever using async/await, check where we are recieving the final data. **

Right place to find state

While learning:

<img src="./learning.png">
