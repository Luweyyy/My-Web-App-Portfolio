import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavbarComponent = ()=> {
  return(
    
    <Navbar expand="lg" className="bg-body-tertiary, navbar-secondary">
      <Container>
      <Navbar.Brand href="/ " className='fw-bold'>Owi  .</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto, navbar-light, fw-bold">
            <Nav.Link href="/ ">Home</Nav.Link>
            <Nav.Link href="/work">Work</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

  )
}
export default NavbarComponent;