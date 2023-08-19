import React from 'react';
import { Carousel, Image, Container,  Row, Col } from 'react-bootstrap';
import { GrWorkshop } from "react-icons/gr";


const Work = () => {
  return (
    <Container>
      <Row>
      <Col>
        <h2 className='display-1 fw-bold'>
          <GrWorkshop/>
           My Works
        </h2>
        <p>Here are some of the projects: </p>
        <ul>
          <li>
            <h4>Quote'tation</h4>
            <p>Quote'tation is a quote generator app that can inspire and motivate you and it can also bring light ang understand the reader's soul.</p>
          </li>
          <li>
            <h4>UPdates</h4>
            <p>UPdates is a website that update students what is happening inside the campus.</p>
          </li>
        </ul>
      </Col>
      <Col>
      <Carousel >
        <Carousel.Item>
          <Image src="project.jpg" width={550} height={293}/>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="projectsec.png" width={550}/>
        </Carousel.Item>
      </Carousel>
      </Col>
    </Row>
    </Container>
  );
};

export default Work;
