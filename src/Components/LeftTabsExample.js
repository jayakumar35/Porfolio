import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Skills from './Skills';
import './LeftTabsExample.scss'


function LeftTabsExample() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <Nav   variant="underline" className="flex-rows  px-5  fs-md-0  px-md-1">
                        <Nav.Item>
                            <Nav.Link style={{color:"#111",}} className='ps-lg-3' eventKey="first">Main skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  style={{color:"#111"}}  className='ps-lg-3' eventKey="second">Skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  style={{color:"#111"}}  className='ps-lg-3' eventKey="Three">Education & Certification</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  style={{color:"#111"}}  className='ps-lg-3' eventKey="four">Experience</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={12} md={12} lg={12}className=' my-md-1 ' >
                    <Tab.Content className=" tab-content " >
                        <Tab.Pane eventKey="first">
                            <div className=' div-pone '>
                                <h4 >Web and user interface design - Development</h4>
                                <p>Websites, web experiences, ...</p>
                            </div>
                            <div className='div-pone '>
                                <h4>Interaction desing -Animation</h4>
                                <p>i like to move it move it, ...</p>
                            </div>
                            <div className='div-pone '>
                                <h4>Mobile App -Development</h4>
                                <p>Deilght the user and make it work, ...</p>
                            </div>

                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Skills />
                        </Tab.Pane>
                        <Tab.Pane eventKey="Three">
                            <div className='div-pone '>
                                <h4>BSc in CSE - Sri Venktashwara Arts and Sciences College.</h4>
                                <p>presant, ...</p>
                            </div>
                           
                            <div className='div-pone '>
                                <h4>Edex IT Solution - Full stact developer</h4>
                                <p>presant, ...</p>
                            </div>
                            <div className='div-pone '>
                                <h4>Diploma in  Mechanical Engineering</h4>
                                <p>2015-2018, ...</p>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="four">
                            <div className='div-pone '>
                                <h4>Sr.front-end developer -Edex</h4>
                                <p>March-24, ...</p>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default LeftTabsExample;