import { Container, Row, Col } from "react-bootstrap"
import './Frent.scss'
import NavScrollExample from "./NavScrollExample";
import homeimg from "../image/About.jpg"





function Frent() {
    return (
        <Container style={{maxWidth: '1550px'}}  className="frent-container ">
            <Row className="frent-row">
            <NavScrollExample />
                <Col sm={12} md={6} lg={8} className="frent-Col">
                  
                    <div className="page">
                    <h2>FREELANCE <span className="span">FULL STOCK DEVELOPER</span></h2>
                    <h1>Hello, i'm <span>Jayakumar</span> Welcome to my World</h1>
                    </div>
                  
                </Col>
                <Col sm={12} md={6} lg={3}>
                   <img src={homeimg} alt="home"/>
                   
                  

                </Col>


            </Row>
        </Container>
    )
}
export default Frent;
