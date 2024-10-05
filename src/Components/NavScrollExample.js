import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavScrollExample.scss'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="  Navbar">
      <Container fluid>
        <Navbar.Brand className='Brand'  href="#">J A Y A K U M A R</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navlist my- my-lg-0 ms-auto ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  className='mx-4 ' href="#Home">Home</Nav.Link>
            <Nav.Link  className='mx-4' href="#About">About</Nav.Link>
            <Nav.Link  className='mx-4' href="#Project">Project</Nav.Link>
            <Nav.Link  className='mx-4' href="#Contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;