import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

export const SearchForm = ({ handleOnSubmit }) => {
  // case study
  // 1. created state in form search
  // 2. created handleOnChange function
  // 3. created formSubmit function
  // 4. passed handleOnSubmit function from App.js to SearchForm.js
  // 5. passed handleOnSubmit function from SearchForm.js to formSubmit function

  const [str, setStr] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(str);
  };

  return (
    <>
      <div className="mt-5 text-center">
        <h1>Movie List App</h1>
        <Form onSubmit={formSubmit}>
          <Row className="d-flex justify-content-center">
            <Col lg={10} sm={6}>
              {" "}
              <Form.Control
                placeholder="Search Movie Name ..."
                onChange={handleOnChange}
                required
              />
            </Col>
            <Col lg={2} sm={6}>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};
