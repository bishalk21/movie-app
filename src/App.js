import "./App.css";
import React, { useState } from "react";
// import Button from "react-bootstrap/Button"; // passing /Button will render for button
// import { Button } from "react-bootstrap"; // all react bootstrap wil reload
import { Container, Alert } from "react-bootstrap";
import { SearchForm } from "./components/SearchForm";
import { CustomCard } from "./components/CustomCard";
import { MovieList } from "./components/MovieList";
import { fetchMovies } from "./helpers/axioshelper";

function App() {
  // create state to store the data
  const [movies, setMovies] = useState({});

  //if we don't have searched any movie
  const [showError, setShowError] = useState("");

  // state for happy and romantic movie list select
  const [movieList, setMovieList] = useState([]);

  const handleOnSubmit = async (str) => {
    // console.log(str);
    const result = await fetchMovies(str);
    // console.log(result);
    // setMovies(result);
    // if we don't have any movie then we show error message
    if (result.Response === "True") {
      setMovies(result);
      setShowError("");
    } else {
      setMovies({});
      setShowError(result.Error);
    }

    // using ternary
    // result.Response === "False" ? setShowError(result.Error) : setShowError("");
  };
  // console.log(movies);

  const handleOnMovieSelect = (movies) => {
    // console.log(movie);
    // spread operator to add the already avaulable movies
    setMovieList([...movieList, movies]);
    setMovies({});
  };

  // function for deleteing button
  const handleOnDelete = (imdbID) => {
    //CONFIRM
    if (window.confirm) {
      alert("Are you sure you want to delete this movie?");
    }
    // filter the movie based on the id
    const filteredList = movieList.filter((item) => item.imdbID !== imdbID);
    // update the movieList state
    setMovieList(filteredList);
  };

  return (
    <>
      <div className="wrapper">
        <Container>
          {/* form */}
          <SearchForm handleOnSubmit={handleOnSubmit} />

          {/* movie card */}
          <div className="d-flex mt-4 justify-content-center">
            <div>
              {/* condition to show the movie card - show only if movie have imdbID */}
              {movies.imdbID && (
                <CustomCard
                  movies={movies}
                  func={handleOnMovieSelect}
                  inSearchForm={true}
                />
              )}

              {/* condition to show the error message if no movie */}
              {showError && <Alert variant="danger">No Movie Found</Alert>}
            </div>
          </div>

          <hr />
          <MovieList movieList={movieList} handleOnDelete={handleOnDelete} />
        </Container>
      </div>
    </>
  );
}

export default App;
