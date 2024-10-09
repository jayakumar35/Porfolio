import { Container, Row, Col } from "react-bootstrap"
import './Frent.scss'
import NavScrollExample from "./NavScrollExample";
import icon1 from "../image/icon-01.png"
import icon2 from '../image/icon-02.png'
import icon3 from '../image/icon-03.png'
import Skills from "./Skills";





function Frent() {
    return (
        <Container style={{maxWidth: '1550px'}}  className="frent-container ">
            <Row className="frent-row">
                <Col sm={12} md={12} lg={12} className="frent-Col">
                    <NavScrollExample />
                    <div className="page">
                        <h1 className="frent-h1">Full Stack <br></br> DEVELOPER</h1>
                    </div>
                  
                </Col>
                <Col sm={12} md={12} lg={12}>
                    <Skills/>
                    <div className="home-card ">
                        <div className="card">
                            <img src={icon1} alt="icon" />
                            <h3>Website Development</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                        <div className="card">
                            <img src={icon2} alt="icon" />
                            <h3>Mobile App Development</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                        <div className="card">
                            <img src={icon3} alt="icon" />
                            <h3>Marketing & Reporting</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                    </div>


                </Col>


            </Row>
        </Container>
    )
}
export default Frent;
