import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./components/CustomCard";
import { MovieList } from "./components/MovieList";
import { SearchForm } from "./components/SearchForm";
import { fetchMovieInfo } from "./helpers/axiosHelper";

function App() {
  const [movie, setMovie] = useState({});
  const [error, showError] = useState("");

  const [movieList, setMovieList] = useState([]);

  const handleOnSubmit = async (str) => {
    // e.preventDefault();
    // console.log(str);

    const result = await fetchMovieInfo(str);
    // console.log(result);

    if (result.Response === "True") {
      setMovie(result);
      showError("");
    } else {
      setMovie({});
      showError(result.Error);
    }

    // setMovie(result);

    // result.Response === "False" ? showError(result.Error) : showError("");
  };

  // console.log(movie);

  const movieSelect = (movie) => {
    // console.log(movie);
    setMovieList([...movieList, movie]);
    setMovie({});
  };

  const deleteMovie = (imdbID) => {
    if (window.confirm("Are you sure?")) {
      const tempArg = movieList.filter((item) => item.imdbID !== imdbID);
      setMovieList(tempArg);
    }

    const tempMovieList = movieList.filter((item) => item.imdbID !== imdbID);
    setMovieList(tempMovieList);
  };

  return (
    <div className="wrapper">
      <Container>
        {/* form */}
        <SearchForm handleOnSubmit={handleOnSubmit} />

        <div className="mt-4 d-flex justify-content-center">
          {/* card view search */}
          {movie?.imdbID && (
            <CustomCard movie={movie} inSearchForm={true} func={movieSelect} />
          )}
          {error && <Alert variant="danger">{error}</Alert>}
        </div>
        {/* 
        {movie?.Response === "True" ? (
       <CustomCard movie={movie} />
        ) : (
          <Alert variant="danger">No movie found</Alert>
        )} */}

        <hr />

        {/* movie list  */}

        <MovieList movieList={movieList} deleteMovie={deleteMovie} />
      </Container>
    </div>
  );
}

export default App;
