import React from "react";

const ListDisplayMovie = ({
  movies = {},
  inSearchForm,
  handleOnSelectMovies,
}) => {
  const { Poster, Title, Plot, imdbRating, Actors, Runtime } = movies;

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-52 lg:h-48 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-start overflow-hidden"
        title={Title}
      >
        <img className="w-full rounded-sm mr-4" src={Poster} alt={Title} />
      </div>
      <div className="border-r max-h-fit border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-3">
          <p className="text-sm text-gray-600 flex items-center">
            <i className="fa-solid fa-star-half-stroke"></i>
            {"  "} {imdbRating}
          </p>
          <div className="text-gray-900 text-start font-bold text-xl mb-2">
            {Title}
          </div>
          <p className="text-gray-700 text-base text-start">{Plot}</p>
        </div>
        <div className="flex flex-col">
          <div className="text-sm items-center flex flex-row">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={Poster}
              alt="Avatar of Jonathan Reinink"
            ></img>
            <p className="text-gray-900 leading-none">{Actors}</p>
          </div>
          <p className="text-gray-600 text-end">
            <i className="fa-solid fa-clock"></i> {Runtime}
          </p>
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
          <button
            onClick={() => handleOnSelectMovies(movies.imdbID)}
            className="p-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ListDisplayMovie;
