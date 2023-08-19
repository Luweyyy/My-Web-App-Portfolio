import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Nav } from 'react-bootstrap';



const Home = () => {
  return (
    
    <div className=' justify-content-center align-items-center' >
    
        <div className=' justify-content-center align-items-center'style={{textAlign: "center"}}>
          <Image src='/profile.png' width={250}/>  
          <h3 className='fs-3 fw-bold'>Marc Louie T. Pulicay</h3>
          <p className='fs-5 fw-bold'>Web Develover</p>
        </div>

          <div className='d-flex align-items-center gap-3 justify-content-center '>
            <Nav.Link href='/work'>
              <Button className='btn-lg' variant='dark'>View Work</Button>
              
            </Nav.Link>
            <SocialLinks />
          </div>

      
    </div>
  );
};

export default Home;
