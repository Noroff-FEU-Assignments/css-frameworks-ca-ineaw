import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
 
import "./sass/style.scss";
import Home from "./components/Home";
import News from "./components/News";
import Contact from "./components/Contact";




function App() {
    return (
      <Router>
        <div>
        <Navbar bg="light" expand="lg" fixed="top">
     <Container>
    <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/News">News</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
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
          {/* <ul>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/News">News</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul> */}
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/News">
              <News />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;