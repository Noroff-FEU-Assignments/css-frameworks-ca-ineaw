import React from "react";
import Pagination from "react-bootstrap/Pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ContentFooter from "./ContentFooter";




function News() {
    return (
        <>
<Container>
<h1>News</h1>
<Pagination>
  <Pagination.Item active>{1}</Pagination.Item>
  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Item>{4}</Pagination.Item>
</Pagination>  
</Container>

<Container>
  <Row>
    <Col xs={12} md={3}>  
    <Card>
  <Card.Img variant="top" src="images/news-1.jpg" />
  <Card.Body>
  <Card.Title>Nunc porttitor vel</Card.Title>
    <Card.Text>
    Nunc malesuada eget est fringilla dapibus.
    </Card.Text>
    <div className="d-grid gap-2">
    <Button variant="accordion-button" size="lg">
   MORE    
  </Button>
  </div>
    </Card.Body>
</Card>
</Col> 
<Col xs={12} md={3}>  
    <Card>
  <Card.Img variant="top" src="images/news-1.jpg" />
  <Card.Body>
  <Card.Title>Nunc porttitor vel</Card.Title>
    <Card.Text>
    Nunc malesuada eget est fringilla dapibus.
    </Card.Text>
    <div className="d-grid gap-2">
    <Button variant="primary" size="lg">
    MORE
  </Button>
  </div>
    </Card.Body>
</Card>
</Col>   
<Col xs={12} md={3}>  
    <Card>
  <Card.Img variant="top" src="images/news-1.jpg" />
  <Card.Body>
  <Card.Title>Nunc porttitor vel</Card.Title>
    <Card.Text>
    Nunc malesuada eget est fringilla dapibus.
    </Card.Text>
    <div className="d-grid gap-2">
    <Button variant="primary" size="lg">
    MORE
  </Button>
  </div>
    </Card.Body>
</Card>
</Col>   
<Col xs={12} md={3}>  
    <Card>
  <Card.Img variant="top" src="images/news-1.jpg" />
  <Card.Body>
  <Card.Title>Nunc porttitor vel</Card.Title>
    <Card.Text>
    Nunc malesuada eget est fringilla dapibus.
    </Card.Text>
    <div className="d-grid gap-2">
    <Button variant="primary" size="lg">
    MORE
  </Button>
  </div>
    </Card.Body>
</Card>
</Col>   
<Col xs={12} md={3}>  
    <Card>
  <Card.Img variant="top" src="images/news-1.jpg" />
  <Card.Body>
  <Card.Title>Nunc porttitor vel</Card.Title>
    <Card.Text>
    Nunc malesuada eget est fringilla dapibus.
    </Card.Text>
    <div className="d-grid gap-2">
    <Button variant="primary" size="lg">
    MORE
  </Button>
  </div>
    </Card.Body>
</Card>
</Col>   
<Col xs={12} md={3}>  
    <Card>
  <Card.Img variant="top" src="images/news-1.jpg" />
  <Card.Body>
  <Card.Title>Nunc porttitor vel</Card.Title>
    <Card.Text>
    Nunc malesuada eget est fringilla dapibus.
    </Card.Text>
    <div className="d-grid gap-2">
    <Button variant="primary" size="lg">
    MORE
  </Button>
  </div>
    </Card.Body>
</Card>
</Col>   
<Col xs={12} md={3}>  
    <Card>
  <Card.Img variant="top" src="images/news-1.jpg" />
  <Card.Body>
  <Card.Title>Nunc porttitor vel</Card.Title>
    <Card.Text>
    Nunc malesuada eget est fringilla dapibus.
    </Card.Text>
    <div className="d-grid gap-2">
    <Button variant="primary" size="lg">
    MORE
  </Button>
  </div>
    </Card.Body>
</Card>
</Col>   
<Col xs={12} md={3}>  
    <Card>
  <Card.Img variant="top" src="images/news-1.jpg" />
  <Card.Body>
  <Card.Title>Nunc porttitor vel</Card.Title>
    <Card.Text>
    Nunc malesuada eget est fringilla dapibus.
    </Card.Text>
    <div className="d-grid gap-2">
    <Button variant="primary" size="lg">
    MORE 
  </Button>
  </div>
    </Card.Body>
</Card>
</Col>   
  </Row>
  </Container>
  <Container>
  <Pagination>
  <Pagination.Item active>{1}</Pagination.Item>
  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Item>{4}</Pagination.Item>
</Pagination>      
</Container>
<ContentFooter />

  </>
        
    );
}

export default News;