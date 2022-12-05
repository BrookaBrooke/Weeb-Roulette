import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NavBar() {
  return (
    <div>
      <h1>weeb roulette banner</h1>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <h2>Username</h2>
    </div>
  );
}
export default NavBar;
