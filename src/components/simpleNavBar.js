import {Navbar, Nav, Container} from "react-bootstrap"; 

const SimpleNavBar = () => (
  <div >
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
      <Navbar.Brand href="/">MVYA</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/features">Features</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  </div>
    
    
  ); 


export default SimpleNavBar; 