import {Container,Row,Col} from "react-bootstrap"
import './Frent.scss'
import NavScrollExample from "./NavScrollExample";
import icon1 from "../image/icon-01.png"
import icon2 from '../image/icon-02.png'
import icon3 from '../image/icon-03.png'
import { Link } from 'react-router-dom';  // Import Link for navigation





function Frent(){
    return(
        <Container className="frent-container " fluid>
            <Row className="frent-row">
                <Col sm={12} md={12} lg={12} className="frent-Col">
                <NavScrollExample/>
                <div className="page">
                    <h1 className="frent-h1">Full Stack <br></br> DEVELOPER</h1>
                    </div>
                              {/* Use Link to navigate to the ContactPage */}
          <Link to="/contactpage">
            <button className="cont-btn">CONTACT US</button>
          </Link>

                    <div className="home-cord d-flex">
                        <div className="cord">
                        <img src={icon1}/>
                        <h3>Website Development</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                        <div className="cord">
                        <img src={icon2}/>                        <h3>Business Stratagy</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                        <div className="cord">
                        <img src={icon3}/>                     
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
