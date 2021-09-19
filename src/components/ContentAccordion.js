import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";


function ContentAccordion() {
    return (
        <>
        <Accordion defaultActiveKey="0" className="d-md-none">
  <Accordion.Item eventKey="0">
    <Accordion.Header>First</Accordion.Header>
    <Accordion.Body>
    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.   
    <Image src="images/tab-1.jpg" thumbnail/>
    <div className="icons__acc">
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
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Second</Accordion.Header>
    <Accordion.Body>
    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.   
    <Image src="images/tab-2.jpg" thumbnail/>
    <div className="icons__acc">
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
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Third</Accordion.Header>
    <Accordion.Body>
    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.   
    <Image src="images/tab-3.jpg" thumbnail/>
    <div className="icons__acc">
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
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </>
    ) }

    export default ContentAccordion;