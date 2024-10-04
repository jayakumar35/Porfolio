import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import './Ourworkpage.scss';
import Ourimage from '../image/frent.jpg';
import Weatherimage from '../image/project/Weather.jpg'
import Bmiimage from '../image/project/Bmi.jpg'
import Todoimage from '../image/project/Todolist.jpg'
import Contact from "./Contact";



function Ourworkpage() {
    return (

        <Container fluid >
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <div className="ourworkpage">
                        <div className="our-img">
                            <img src={Ourimage} fluid />
                        </div>
                        <h2>W E L C O M E</h2>
                        <h1>OurWork</h1>
                        <h4> Contrary to popular belief, Lorem Ipsum is not simply random text.</h4>

                    </div>
                </Col>
            </Row>
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

            </Row>
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

            </Row>
            <Contact />
        </Container>

    );
}
export default Ourworkpage;
