import { FaGithub, FaFacebook, FaInstagram,FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://github.com/Luweyyy">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/marc-louie-pulicay-7600a2253">
        <FaLinkedin />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/profile.php?id=100080349514381">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/lu.weyyy">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;