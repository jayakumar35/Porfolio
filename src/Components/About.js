import React from "react";
import './About.scss';
import Aboutimage from '../image/profile.jpg'
import Githupimage from '../image/github.png'
import Linkedinimage from '../image/linkedin.png'
import resume from '../image/cv.pdf'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftTabsExample from "./LeftTabsExample";

function About() {
  return (
    <Container style={{ maxWidth: '1550px' }} id="About" className="about-container">
      <Row >
        <Col sm={12} md={6} lg={6}>
          <div className="About-img">
            <img src={Aboutimage} fluid alt="About" />
          </div>

        </Col>
        <Col sm={12} md={6} lg={6}>
          <div className="about-datails">
            <h1 >About Me</h1>
            <p><b>Hello! I'm Jayakumar</b> web designer  i have rich experience in web site desing and building
              also i am good at wordpress i love to talk with you about our unique</p>

             <a download href={resume} > <button className="cv-button"  >Resume</button></a>


            <div class="social-media">
              <a href="https://github.com/jayakumar35"><img src={Githupimage} alt="githup" /></a>
              <a href="https://www.linkedin.com/in/jayakumar3598/"><img src={Linkedinimage} alt="linkedin" /></a>
            </div>
            <div className="controlled">
              <LeftTabsExample />
            </div>
          </div>
        </Col>
      </Row>
    </Container>

  )
}
export default About;