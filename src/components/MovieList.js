import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Button, ButtonGroup } from "react-bootstrap";
import { CustomCard } from "./CustomCard";
import { CustomList } from "./CustomList";

export const MovieList = ({ movieList, handleOnDelete }) => {
  // state to hold movise
  const [displayList, setDisplayList] = useState(movieList);

  // for view state
  const [view, setView] = useState("grid");

  // by the time movieList re-renders and the movie is available
  // in the movieList state, the displayList state is already set

  // to the movieList state. So, we need to use useEffect to
  //  update the displayList state when the movieList state changes.
  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);
  // dependencies in useEffect helps to control and execute callback fn only if the dependencies have changed between renderings

  const filterMovie = (mood) => {
    // filter the movieList based on mood
    // all
    if (mood === "all") {
      return setDisplayList(movieList);
    }

    // happy or romantic
    const filteredList = movieList.filter((item) => item.mood === mood);
    // update the displayList state
    setDisplayList(filteredList);
  };

  return (
    <>
      <Row>
        <Col className="d-flex justify-content-between">
          {" "}
          <ButtonGroup aria-label="Basic example">
            <Button onClick={() => filterMovie("all")} variant="secondary">
              All
            </Button>
            <Button onClick={() => filterMovie("happy")} variant="primary">
              Happy
            </Button>
            <Button onClick={() => filterMovie("romantic")} variant="danger">
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

      <Row className="mt-3 text-center">
        <Col>{displayList.length} movies found</Col>
      </Row>

      <Row className="mt-5">
        <Col className="d-flex align-items-center justify-content-center flex-wrap">
          {displayList.map((item, i) => {
            return view === "grid" ? (
              <CustomCard movies={item} key={i} func={handleOnDelete} />
            ) : (
              <CustomList movies={item} key={i} func={handleOnDelete} />
            );
          })}
        </Col>
      </Row>
    </>
  );
};
