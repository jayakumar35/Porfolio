import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import contactpage from '../image/contactpage.jpg';
import contcall from '../image/contcall.jpeg'
import './ContactPage.scss'
import Contact from "./Contact";


function Contactpage() {
    return (
        <Container fluid >
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <div className="contactpage">
                        <div className="cont-img">
                            <img src={contactpage} alt="Contactpage" fluid />
                        </div>
                        <h2>W E L C O M E</h2>
                        <h1>Contact With Us</h1>
                        <h4> Contrary to popular belief, Lorem Ipsum is not simply random text.</h4>

                    </div>
                </Col>
            </Row>
            <Row className="contbox ">
            <Col sm={4} md={6} lg={4}>
                    <Card style={{ width: '23rem', height: '28vh' }} className="card">
                        <Card.Body>
                            <Card.Title className="titel" >Email Address</Card.Title>
                            <Card.Text>
                                <p>jayakumar53c@gmail.com</p>
                                <p>admindevjai@gmail.com</p>
                            </Card.Text>
                            <i class="fa-solid fa-headphones"></i>
                        </Card.Body>
                    </Card>

                </Col>             
                   <Col sm={4} md={6} lg={4}>
                    <Card style={{ width: '23rem', height: '28vh' }} className="card">
                        <Card.Body>
                            <Card.Title className="titel" >Email Address</Card.Title>
                            <Card.Text>
                                <p>jayakumar53c@gmail.com</p>
                                <p>admindevjai@gmail.com</p>
                            </Card.Text>
                            <i class="fa-regular fa-envelope"></i>                       </Card.Body>
                    </Card>

                </Col>
                <Col sm={4} md={6} lg={4}>
                    <Card style={{ width: '23rem', height: '28vh' }} className="card">
                        <Card.Body>
                            <Card.Title className="titel" >Email Address</Card.Title>
                            <Card.Text>
                                <p>jayakumar53c@gmail.com</p>
                                <p>admindevjai@gmail.com</p>
                            </Card.Text>
                            <i class="fa-solid fa-location-dot"></i>
                        </Card.Body>
                    </Card>

                </Col>            </Row>
            <Row className="contactform-row">
                <Col sm={6} md={6} lg={6}>
                    <div className="contactform">
                        <h2>Contact Us.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control className="input" type="email" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control className="input" type="email" placeholder="Your Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control className="input" type="email" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control className="input" type="email" placeholder="Subject" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control className="message" as="textarea" rows={3} placeholder="Your Message" />
                            </Form.Group>
                            <Button>SUBMIT NOW</Button>
                        </Form>
                    </div>
                </Col>
                <Col sm={6} md={6} lg={6} className="contactform-img">
                    <img src={contcall}  alt="Contact call"fluid />

                </Col>
            </Row>
            <Row>
                <Col>
                  <Contact/>
                </Col>
            </Row>

       </Container>
    )
}
export default Contactpage;