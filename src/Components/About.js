import React from "react";
import './About.scss';
import Aboutimage from '../image/about1.JPG'
import Githupimage from '../image/github.png'
import Linkedinimage from '../image/linkedin.png'
import Instagramimage from '../image/instagram.png'
import Xtwitterimage from '../image/twitter.png'
import Youtubeimage from '../image/youtube-white-logo.png'
import Facebookimage from '../image/facebook.png'
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
            <p><b>Hello! I'm Jayakumar</b> web designer from TamilNadu,Tiruvannamala i have rich experience in web site desing and building
              also i am good at wordpress i love to talk with you about our unique</p>


            <div class="social-media">
              <a href="https://github.com/jayakumar35"><img src={Githupimage} alt="githup" /></a>
              <a href="https://www.linkedin.com/in/jayakumar3598/"><img src={Linkedinimage} alt="linkedin" /></a>
              <a href="https://www.instagram.com/j_a_y_a_k_u_m_a_r_53/"><img src={Instagramimage} alt="instagram" /></a>
              <a href="https://x.com/jayakumar3598"><img src={Xtwitterimage} alt="x" /></a>
              <a href="https://www.youtube.com/@Jksquad53"><img src={Youtubeimage} alt="youtube" /></a>
              <a href="https://www.facebook.com/profile.php?id=100012086977710"><img src={Facebookimage} alt="facebook" /></a>
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