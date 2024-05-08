import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import './Header.css'
import logo from '../../assets/Wordmark.png'
import {Link} from 'react-scroll';


const Header = () => {
  return (
    <div className='container-fluid fixed-top'>
      <div className="container">
      <Navbar expand="lg" className="bg-white">
      <Container fluid>
        <Navbar.Brand href="home">
          <img src={logo} alt="" className='img-fluid' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='ms-auto'>
            <Nav.Link  to="search" spy={true} smooth={true} offset={0} duration={500} as={Link}>Home</Nav.Link>
            <Nav.Link to="flightdeals" spy={true} smooth={true} offset={-100} duration={500} as={Link}>Flight Deals</Nav.Link>
            <Nav.Link to="explore" spy={true} smooth={true} offset={-100} duration={500} as={Link}>Explore</Nav.Link>
            <Nav.Link to="testimonial" spy={true} smooth={true} offset={-50} duration={500} as={Link}>Testimonial</Nav.Link>
            <Nav.Link to="footer" spy={true} smooth={true} offset={-100} duration={500} as={Link}>Footer</Nav.Link>
          </Nav>
          <Form className="d-flex ms-auto">
            <button className='primary-btn'>Sign in</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </div>
  )
}

export default Header