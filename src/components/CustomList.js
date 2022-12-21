import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CustomList = ({ movies = {}, func, inSearchForm }) => {
  const { Title, imdbRating, Plot } = movies;
  //   console.log(movies);
  return (
    <>
      <Card
        style={{ width: "100%" }}
        className="mt-3 d-flex flex-row justify-content-between"
      >
        <Card.Img
          variant="top"
          src={movies.Poster}
          style={{ width: "180px" }}
        />
        <Card.Body className="pt-5">
          <Card.Title>{Title}</Card.Title>
          <Card.Text>{Plot}</Card.Text>
          <Card.Text>Rating: {imdbRating}</Card.Text>

          {/* if we are in search form then show the button */}
          {inSearchForm ? (
            <div className="d-flex justify-content-between mt-3">
              <Button
                variant="primary"
                onClick={() => func({ ...movies, mood: "happy" })}
              >
                {/* anonymous function to load on button clicked not on loadin time */}
                Happy
              </Button>
              <Button
                variant="danger"
                onClick={() => func({ ...movies, mood: "romantic" })}
              >
                Romantic
              </Button>
            </div>
          ) : (
            <div className="d-grid gap-2">
              <Button
                variant="danger"
                size="lg"
                onClick={() => func(movies.imdbID)}
              >
                Delete Movie
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
};
