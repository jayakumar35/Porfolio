import React from "react";
import './Project.scss';

import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

import Weatherimage from '../image/project/Weather.jpg'
import Bmiimage from '../image/project/Bmi.jpg'
import Todoimage from '../image/project/Todolist.jpg'

import { Link } from "react-router-dom";



function Project() {
    return (

        <Container fluid>
            <h1 className="pro-h1" id="Project">Our Work</h1>
            <Row>
                <Col sm={6} md={6} lg={4} className="">
                    <div className="project-card d-flex">

                        <Card style={{ width: '22rem', height: '70vh' }} className="box">
                            <Card.Img variant="top" src={Weatherimage} fluid className="box-img" />
                            <Card.Body className="card-body">
                                <Card.Text className="overlay">
                                    <Card.Title className="h3">Weather</Card.Title>
                                    <a href="">Check Live<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                                    <p>Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col sm={6} md={6} lg={4} className="">
                    <div className="project-card d-flex">

                        <Card style={{ width: '22rem', height: '70vh' }} className="box">
                            <Card.Img variant="top" src={Bmiimage} fluid className="box-img" />
                            <Card.Body className="card-body">
                                <Card.Text className="overlay">
                                    <Card.Title className="h3">Bmi Calcution</Card.Title>
                                    <a href="">Ckeck Live<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                                    <p>Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col sm={6} md={6} lg={4} className="">
                    <div className="project-card d-flex">

                        <Card style={{ width: '22rem', height: '70vh' }} className="box">
                            <Card.Img variant="top" src={Todoimage} fluid className="box-img" />
                            <Card.Body className="card-body">
                                <Card.Text className="overlay">
                                    <Card.Title className="h3">TodoList</Card.Title>
                                    <a href="">Ckeck Live<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                                    <p>Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>

                <Link to={'/OurWorkPage'}><button className="morework">More Work</button></Link>

            </Row>
        </Container>
    );
}
export default Project;