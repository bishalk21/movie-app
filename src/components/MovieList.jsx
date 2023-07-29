import React, { useEffect, useState } from "react";
import DisplayMovie from "./DisplayMovie";
import ListDisplayMovie from "./ListDisplayMovie";

const MovieList = ({ moviesType, handleOnDelete }) => {
  const [displayMovies, setDisplayMovies] = useState(moviesType);
  console.log(moviesType);

  // for view state
  const [view, setView] = useState("grid");

  useEffect(() => {
    // fetch data here and update state with new array of displayable movies
    setDisplayMovies(moviesType);
  }, [moviesType]);

  const filterMovies = (mood) => {
    if (mood === "all") {
      return setDisplayMovies(moviesType);
    }

    const filteredMovies = moviesType.filter((movie) => movie.mood === mood);
    setDisplayMovies(filteredMovies);
  };

  return (
    <>
      <div className="flex flex-col p-4">
        {/* buttons */}
        <div className="flex justify-between">
          <div className="max-w-lg mx-auto">
            <div className="inline-flex shadow-sm rounded-md mb-5" role="group">
              <button
                onClick={() => filterMovies("all")}
                type="button"
                className="rounded-l-lg border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              >
                All
              </button>
              <button
                onClick={() => filterMovies("happy")}
                type="button"
                className="border-t border-b border-green-200 bg-green-400 text-sm font-medium px-4 py-2 text-gray-900 hover:bg-green-300 hover:text-black focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              >
                Happy
              </button>
              <button
                onClick={() => filterMovies("romantic")}
                type="button"
                className="rounded-r-md border border-red-200 bg-pink-400 text-sm font-medium px-4 py-2 text-gray-900 hover:bg-red-300 hover:text-black focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              >
                Romantic
              </button>
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="inline-flex shadow-sm rounded-md mb-5" role="group">
              <button
                onClick={() => setView("grid")}
                type="button"
                className="border-t border-b border-gray-200 bg-gray-400 text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-300 hover:text-black focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              >
                Grid
              </button>
              <button
                onClick={() => setView("list")}
                type="button"
                className="rounded-r-md border border-gray-200 bg-blue-300 text-sm font-medium px-4 py-2 text-gray-900 hover:bg-blue-100 hover:text-black focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              >
                List
              </button>
            </div>
          </div>
        </div>
        {/* length */}
        <div className="mt-8 text-center">
          {displayMovies.length} Movies found
        </div>

        {/* movies list */}
        <div className="mt-6">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {displayMovies.map((item) =>
              view === "grid" ? (
                <DisplayMovie
                  movies={item}
                  key={item.imdbID}
                  handleOnSelectMovies={handleOnDelete}
                />
              ) : (
                <ListDisplayMovie
                  movies={item}
                  key={item.imdbID}
                  handleOnSelectMovies={handleOnDelete}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
