import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomList = ({ movie = {}, func, inSearchForm }) => {
  const { Title, Poster, imdbRating, Plot } = movie;
  //   console.log(movie);
  return (
    <Card
      style={{ width: "100%" }}
      className="mt-3 d-flex flex-row justify-content-between"
    >
      <div style={{ width: "200px" }}>
        <Card.Img variant="top" src={movie.Poster} style={{ width: "200px" }} />
      </div>

      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>Rating: {imdbRating}</Card.Text>
        <div>{Plot}</div>

        {inSearchForm ? (
          <div className="d-flex justify-content-between mt-2">
            <Button
              onClick={() => func({ ...movie, mood: "happy" })}
              variant="primary"
            >
              Happy
            </Button>
            <Button
              onClick={() => func({ ...movie, mood: "romantic" })}
              variant="danger"
            >
              Romantic
            </Button>
          </div>
        ) : (
          <div className="d-grid gap-2 ">
            <Button
              variant="danger"
              size="lg"
              onClick={() => func(movie.imdbID)}
            >
              Delete
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
