import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { CustomCard } from "./CustomCard";
import { CustomList } from "./CustomList";

export const MovieList = ({ movieList, deleteMovie }) => {
  const [displayList, setDisplayList] = useState(movieList);
  const [view, setView] = useState("grid");

  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const filterMovie = (mood) => {
    if (mood === "all") {
      return setDisplayList(movieList);
    }

    const tempArg = movieList.filter((item) => item.mood === mood);
    setDisplayList(tempArg);
  };

  return (
    <>
      <Row>
        <Col className="d-flex justify-content-between">
          {" "}
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => filterMovie("all")}>
              All
            </Button>
            <Button variant="primary" onClick={() => filterMovie("happy")}>
              Happy
            </Button>
            <Button variant="danger" onClick={() => filterMovie("romantic")}>
              Romantic
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example">
            <Button variant="dark" onClick={() => setView("grid")}>
              Grid
            </Button>
            <Button variant="secondary" onClick={() => setView("list")}>
              List
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>{displayList.length} movies found</Col>
      </Row>

      {/* movie list */}
      <Row className="mt-5">
        <Col className="d-flex justify-content-between flex-wrap">
          {displayList.map((item, i) =>
            view === "grid" ? (
              <CustomCard key={i} movie={item} func={deleteMovie} />
            ) : (
              <CustomList key={i} movie={item} func={deleteMovie} />
            )
          )}
        </Col>
      </Row>
    </>
  );
};
