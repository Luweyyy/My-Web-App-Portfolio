import { Image } from "react-bootstrap";

const Footer = ()=> {
  return(
    <div className="position-absolute start-0 end-0 bottom-0 fs-6 bg-secondary text-white px-5 py-1 " >
        <div class='d-flex justify-content-center align-items-center'>
        <Image src="/up_logo.png"  width={50}/>
        <Image src="/univ_logo.png" width={50}/>
        </div>
        <h3 className="fs-6" style={{textAlign: "center"}}>PHINMA University of Pangasinan</h3>
        <h3 className="fs-6" style={{textAlign: "center"}}>Colllege of Information Technology</h3>
    </div>
  );
}

export default Footer;