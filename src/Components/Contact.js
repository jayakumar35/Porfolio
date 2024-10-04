import React from "react";
import './Contact.scss';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';  // Import Link for navigation

function Contact() {
  return (
    <Container className="contact-container" fluid>
      <h1 className="text-center" id="Contact">Contact</h1>
      <Row>
        <Col sm={12} md={12} lg={6} className="contact">
          <h3 className="cont-h3">READY TO THIS</h3>
          <h1 className="cont-h1">Let's get<br></br>to work</h1>

          {/* Use Link to navigate to the ContactPage */}
          <Link to="/contactpage">
            <button className="cont-btn">CONTACT US</button>
          </Link>

        </Col>
        <Col sm={12} md={12} lg={6} className="foodter">
          <div className="foodlist">
            <ul type="none" className="list1">
              <li><b><u>Quick Line</u></b></li>
              <li>Work</li>
              <li>About</li>
              <li>Let's Talk</li>
            </ul>
            <ul type="none" className="list2">
              <li><b><u>Say Hello</u></b></li>
              <li><a href="mailto:admin@devjai.com">admin@devjai.com</a></li>
              <li><a href="mailto:hr@example.com">hr@example.com</a></li>
              <li>Let's Talk</li>
              <div className="conticon">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-x-twitter"></i>
              </div>
            </ul>
          </div>
          <p>Copyright © 2024 Rainbow-Themes. All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
