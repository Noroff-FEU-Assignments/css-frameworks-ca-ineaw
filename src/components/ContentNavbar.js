import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";




function ContentNavbar() {
    return (
        <>
        <Navbar bg="light" expand="lg" fixed="top">
     <Container>
    <Navbar.Brand href="#">The YAY Company</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">News</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
      </Nav>
      <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Go</Button>
    </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
 </>
    ) 
}

    export default ContentNavbar;