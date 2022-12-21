import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CustomCard = ({ movies = {}, func, inSearchForm }) => {
  const { Title, imdbRating, Plot } = movies;
  //   console.log(movies);
  return (
    <>
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Img variant="top" src={movies.Poster} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Text style={{ height: "80px", overflowY: "scroll" }}>
            {Plot}
          </Card.Text>
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
