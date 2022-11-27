import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const SearchForm = ({ handleOnSubmit }) => {
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
    <div className="mt-5 text-center">
      <h1>My Movie List</h1>
      <Form className="mt-3 text-center" onSubmit={formSubmit}>
        <Row>
          <Col>
            <Form.Control placeholder="Search" onChange={handleOnChange} />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
