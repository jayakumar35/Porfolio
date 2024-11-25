import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavScrollExample.scss'
import { Link } from 'react-router-dom';
import jklogo from '../image/jk.png'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="  Navbar">
      <Container fluid>
        <img src={jklogo} alt='#' />
        <Navbar.Brand className='Brand' href="#">J A Y A K U M A R</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navlist  my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='navlink' href="#Home">Home</Nav.Link>
            <Nav.Link className='navlink' href="#About">About</Nav.Link>
            <Nav.Link className='navlink' href="#Project">Project</Nav.Link>
            <Nav.Link className='navlink' href="#Contact">Contact</Nav.Link>

          </Nav>

        </Navbar.Collapse>
      
        <Link to="/contactpage">
          <button className="cont-btn">CONTACT US</button>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;