import { Container, Row, Col, Card } from "react-bootstrap";
import contactpage from '../image/contactpage.jpg';
import contcall from '../image/contcall.jpeg'
import './ContactPage.scss'
import Contact from "./Contact";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // useLocation for React Router v6
import ContactForm from "./ContactForm ";
import './ContactForm.scss'



function Contactpage() {
    const location = useLocation(); // Get the current location object

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component renders or location changes
    }, [location]);
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
                            <Card.Title className="titel" >With  phone Number</Card.Title>
                            <Card.Text>
                                <p>+91  9626295154</p>
                                <p>044 -2526237</p>
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
                            <Card.Title className="titel" >Loction</Card.Title>
                            <Card.Text>
                                <p>5- secund street<br></br>
                                Revathi   medical center-Ltd  <br></br>
                                Tirupur pin 641602</p>
                               
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
                       </div>
                       <ContactForm/>
                       
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