import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";





function ContentFooter() {
    return (
        <>
        <footer className="footer">

        <Container>
<Row>
  <Col xs={12} md={4}>
  <i class="fab fa-vimeo-v"></i>
  <i class="fab fa-youtube"></i>
  </Col>
  <Col xs={6} md={4} className="email">
    hello@yay.com
      </Col>
      <Col xs={6} md={4}>
   <p className="copyright">Copyright 2020</p>
  </Col>
</Row>
</Container>
</footer>

 </>
    ) 
}

    export default ContentFooter;