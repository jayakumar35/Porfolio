import React from "react";
import './About.scss';
import About1image from '../image/about1.JPG'
import Githupimage from '../image/github.png'
import Linkedinimage from '../image/linkedin.png'
import Instagramimage from '../image/instagram.png'
import Xtwitterimage from '../image/twitter.png'
import Youtubeimage from '../image/youtube-white-logo.png'
import Facebookimage from '../image/facebook.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import { Link } from "react-router-dom";


function About() {
  return (
    <Container id="About" className="about-container" fluid>
      

      <Row >
        <Col sm={12} md={12} lg={6}>
          <div className="About-img">
            <img src={About1image} />
          </div>

        </Col>
        <Col sm={12} md={12} lg={6}>
          <div className="about-datails">
          <h1 >About Me</h1>
            <p><b>Hello! I'm Jayakumar</b> web designer from TamilNadu,Tiruvannamala i have rich experience in web site desing and building
              also i am good at wordpress i love to talk with you about our unique</p>
            <button class="btncv"><a className="rebtn" href="src/jayakumar resume.pdf">Resume</a></button>
            <Link to="/ContactPage"><button class="btncv mx-3"><a href=""></a>Contact Me</button></Link>
            <div class="details">
              <p><b>Age</b>    - 26</p>
              <p><b>Birth</b>  - 03/may/1998</p>
              <p><b>Email</b>  - jayakumar53c@gmail.com</p>
              <p><b>City</b>   - Tiruvannamalai</p>
              <p><b>Country</b> - India</p>
            </div>
            <div class="social-media">
              <a href="https://github.com/jayakumar35"><img src={Githupimage} /></a>
              <a href="https://www.linkedin.com/in/jayakumar3598/"><img src={Linkedinimage} /></a>
              <a href="https://www.instagram.com/j_a_y_a_k_u_m_a_r_53/"><img src={Instagramimage} /></a>
              <a href="https://x.com/jayakumar3598"><img src={Xtwitterimage} /></a>
              <a href="https://www.youtube.com/@Jksquad53"><img src={Youtubeimage} /></a>
              <a href="https://www.facebook.com/profile.php?id=100012086977710"><img src={Facebookimage} /></a>
            </div>
      



          </div>
        </Col>
      </Row>
    </Container>

  )
}
export default About;