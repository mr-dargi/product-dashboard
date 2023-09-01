import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const NavBar = () => {
  const cartProducts = useSelector(state => state.cart);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">Products</Nav.Link>
          </Nav>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={Link} to="/cart">My Bag { cartProducts.length } </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default NavBar;