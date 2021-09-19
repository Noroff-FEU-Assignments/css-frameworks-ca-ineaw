import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import ContentAccordion from "./ContentAccordion";
import ContentTabs from "./ContentTabs";
import ContentCarousel from "./ContentCarousel";
import ContentFooter from "./ContentFooter";



function Home() {
    return (
        <>
<ContentCarousel />
<Container>
    <h1>We do YAY things</h1>
        <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
 </Container>
 <Container>
<Col md={12}>
        <ContentAccordion />
            <div className="d-none d-md-block">
         <ContentTabs />
            </div>
        </Col>
        </Container>
       <ContentFooter />

        </>
    );
}

export default Home;