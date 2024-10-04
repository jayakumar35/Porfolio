import React from "react";
import './Skills.css';
import Htmlimage from '../image/html.png'
import Cssimage from '../image/css-3.png'
import Jsimage from '../image/js.png'
import Bootstrapimage from '../image/bootstrap.png'
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
            <h1>Skills</h1>
            <div className="skills-img">
              <img src={Htmlimage} />
              <img src={Cssimage} />
              <img src={Jsimage} />
              <img src={Reactimage} />
              <img src={Cimage} />
              <img src={Javaimage} />
              <img src={Springimage} />
              <img src={Mysqlimage} />
            </div>
          </div>

        </Col>
      </Row>
    </Container>



  );
}
export default Skills;