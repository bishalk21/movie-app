import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ movie = {}, func, inSearchForm }) => {
  const { Title, Poster, imdbRating } = movie;
  //   console.log(movie);
  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>Rating: {imdbRating}</Card.Text>
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
