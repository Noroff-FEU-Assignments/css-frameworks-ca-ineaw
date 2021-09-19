import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";





function ContentTabs() {
    return (
        <>
<Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="first" title="First">
      <Row>
  <Col md={4}>
      <Image src="images/tab-1.jpg" thumbnail/>
      </Col>
      <Col md={8}>
  <Figure.Caption>
  Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. 
  </Figure.Caption>
  <div className="icons__tab">
  <p>SHARE</p>
  <ul>
    <li> 
        <i class="fab fa-facebook-f"></i>
    </li>
    <li>  
        <i class="fab fa-twitter"></i>
    </li>
</ul>
</div>
</Col>
</Row>
  </Tab>
  <Tab eventKey="second" title="Second">
  <Row>
  <Col md={4}>
      <Image src="images/tab-2.jpg" thumbnail/>
      </Col>
      <Col md={8}>
  <Figure.Caption>
  Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. 
  </Figure.Caption>
  <div className="icons__tab">
  <p>SHARE</p>
  <ul>
    <li> 
        <i class="fab fa-facebook-f"></i>
    </li>
    <li>  
        <i class="fab fa-twitter"></i>
    </li>
</ul>
</div>
</Col>
</Row>
  </Tab>
  <Tab eventKey="third" title="Third">
  <Row>
  <Col md={4}>
      <Image src="images/tab-3.jpg" thumbnail/>
      </Col>
      <Col md={8}>
  <Figure.Caption>
  Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. 
  </Figure.Caption>
  <div className="icons__tab">
  <p>SHARE</p>
  <ul>
    <li> 
        <i class="fab fa-facebook-f"></i>
    </li>
    <li>  
        <i class="fab fa-twitter"></i>
    </li>
</ul>
</div>
</Col>
</Row>
  </Tab>
</Tabs> 
 </>
    ) 
}

    export default ContentTabs;