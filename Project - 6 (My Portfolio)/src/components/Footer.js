import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo1.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.png';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer p-5 m-3">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/aditya-mishra-bb787b1b6/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Aditya234892"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
