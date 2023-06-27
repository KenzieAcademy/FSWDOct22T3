import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Auth&Auth
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
