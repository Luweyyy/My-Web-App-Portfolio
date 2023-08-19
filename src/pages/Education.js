import React from 'react';
import {Accordion, Container} from 'react-bootstrap';


const Education = () => {
  return (
    <Container>
      <h2 className='display-6 fw-bold' style={{textAlign: "center"}}>My Education</h2>
      <Container>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Pangasinan School of Arts and Trades</Accordion.Header>
        <Accordion.Body>
          Highschool - Technical Vocational Education - Drafting Technology | 2015-2018
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>PHINMA-Uiversity of Pangasinan</Accordion.Header>
        <Accordion.Body>
          Senior Highschool - Science, Technology, Engineering and Mathematics | 2019-2021
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className='fw-bold'>PHINMA-Uiversity of Pangasinan</Accordion.Header>
        <Accordion.Body>
          College - Bachelor of Science in Information Technology | in process.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Container>
    </Container>
  );
};

export default Education;
