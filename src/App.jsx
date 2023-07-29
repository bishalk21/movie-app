import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import { fetchData } from "./helpers/axiosHelper";
import DisplayMovie from "./components/DisplayMovie";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState({});
  const [showError, setShowError] = useState("");
  const [moviesType, setMovieType] = useState([]);

  const handleOnSubmit = async (str) => {
    const result = await fetchData(str);
    console.log(result);

    // result.Response === "True" ? setMovies(result) : setMovies({});

    if (result.Response === "True") {
      // update state with fetched data here...
      setMovies(result);
      setShowError("");
    } else {
      setMovies({});
      setShowError(result.Error);
    }
  };

  const handleOnSelectMovies = (movies) => {
    setMovieType([...moviesType, movies]);
    setMovies({});
  };

  const handleOnDelete = (imdbID) => {
    if (window.confirm) {
      alert("Are you sure you want to delete this movie?");
    }

    const filteredMovieList = moviesType.filter(
      (item) => item.imdbID !== imdbID
    );
    setMovieType(filteredMovieList);
  };

  return (
    <>
      <div className="p-10 text-center flex justify-center flex-col">
        <h1 className="mb-4 font-sans font-bold">Movie App</h1>
        {/* search form & btn */}
        <SearchForm handleOnSubmit={handleOnSubmit} />

        {/* * movie display card */}
        <div className="flex justify-center mt-8">
          {movies.imdbID && (
            <DisplayMovie
              handleOnSelectMovies={handleOnSelectMovies}
              inSearchForm={true}
              movies={movies}
            />
          )}
          {showError && (
            <div
              className="bg-red-100 w-4/5 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Holy smokes!</strong>
              <span className="block sm:inline">No Movie Found.</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
        </div>

        <hr />
        {/* * movies list */}
        <MovieList moviesType={moviesType} handleOnDelete={handleOnDelete} />
      </div>
    </>
  );
}

export default App;
