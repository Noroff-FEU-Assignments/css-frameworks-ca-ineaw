import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";


import ContentFooter from "./ContentFooter";


function Contact() {
    return (
        <>
<Container>
<h1>Submit your details</h1>
<Row>
<Col sm={6}>
<Form className="contact__form">
  <Row className="mb-3">
  <Form.Group>
  <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
  </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" />
    </Form.Group>
    <Form.Label htmlFor="basic-url">Website</Form.Label>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">
      https://
    </InputGroup.Text>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>   
   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
     <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
  </Form.Group>
  <Button variant="primary" type="submit" disabled>
    Submit
  </Button>
  </Row>
</Form>
</Col> 
<Col sm={6}>
  <p><i class="fas fa-envelope"></i> hello@yay.com</p>
  <p><i class="fas fa-phone"></i> 123 456 7890</p>
  <p className="contact__address"><i class="fas fa-map-marker-alt"></i> 123 Some Street
Somewhere
Some City
10000</p>
</Col>
 </Row>
</Container>
<ContentFooter />
        </>
    );
}

export default Contact;