import React from "react";

const DisplayMovie = ({ movies = {}, inSearchForm, handleOnSelectMovies }) => {
  const { Poster, Title, Plot, imdbRating, Runtime } = movies;

  return (
    <div className="max-w-[300px] max-h-max text-start rounded overflow-hidden shadow-lg">
      <img className="w-full max-h-72" src={Poster} alt={Title} />
      <div className="px-6 py-4">
        <div className="font-bold text-base mb-2">{Title}</div>
        <p className="text-gray-700 text-sm max-h-10 overflow-hidden overflow-y-scroll">
          {Plot}
        </p>
      </div>
      <div className="px-6 pt-2 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <i className="fa-solid fa-star-half-stroke"></i> {imdbRating}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <i className="fa-solid fa-clock"></i> {Runtime}
        </span>
      </div>

      {inSearchForm ? (
        <div className="flex justify-between mt-1 pt-0 p-2">
          <button
            onClick={() => handleOnSelectMovies({ ...movies, mood: "happy" })}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Happy
          </button>
          <button
            onClick={() =>
              handleOnSelectMovies({ ...movies, mood: "romantic" })
            }
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
          >
            Romantic
          </button>
        </div>
      ) : (
        <div className="flex p-2">
          <button
            onClick={() => handleOnSelectMovies(movies.imdbID)}
            className="min-w-full p-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default DisplayMovie;
