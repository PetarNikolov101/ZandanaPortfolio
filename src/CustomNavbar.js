import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

export default function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg" className="navbar">
      <Navbar.Brand href="#">
        <img className="logo" src="zandana_bejzh.png" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#About">ABOUT</Nav.Link>
          <Nav.Link href="#Events">EVENTS</Nav.Link>
          <Nav.Link href="#Games">GAMES</Nav.Link>
          <Nav.Link href="#Contact">CONTACT</Nav.Link>
        </Nav>
        <Button className="btn btn-secondary lang-btn">MK</Button>
        <Button className="btn btn-secondary lang-btn">EN</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}