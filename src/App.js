import logo from './logo.svg';
//import "~bootstrap/scss/bootstrap";
import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
      <Navbar bg="dark" variant="dark" >
        <Container>
        <Navbar.Brand href="#home">Service</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </div>
    </div>
  );
}

export default App;
