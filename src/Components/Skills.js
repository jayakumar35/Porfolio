import React from "react";
import './Skills.css';
import Htmlimage from '../image/html.png'
import Cssimage from '../image/css-3.png'
import Jsimage from '../image/js.png'
import Reactimage from '../image/react.png'
import Cimage from '../image/c-programming-569564.webp'
import Javaimage from '../image/java.png'
import Springimage from '../image/springboot.png'
import Mysqlimage from '../image/mysql.png'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function Skills() {
  return (
    <Container>
      <Row>
        <Col>
          <div id="Skills" className="skills-container">
          
            <div className="skills-img">
              <img src={Htmlimage} alt="skills" />
              <img src={Cssimage} alt="skills" />
              <img src={Jsimage}  alt="skills" />
              <img src={Reactimage}  alt="skills" />
              <img src={Cimage}  alt="skills" />
              <img src={Javaimage}  alt="skills" />
              <img src={Springimage}  alt="skills"/>
              <img src={Mysqlimage} alt="skills" />
            </div>
          </div>

        </Col>
      </Row>
    </Container>



  );
}
export default Skills;