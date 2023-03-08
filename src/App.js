import logo from './logo.svg';
//import "~bootstrap/scss/bootstrap";
import './App.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import mainImg from './bg.png';

function App() {
  return (
    <div className="App">
      <div>
      <Navbar bg="dark" variant="dark" >
        <Container>
        <Navbar.Brand href="#home">Service</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </div>
    
    <div className="main-bg" style={{backgroundImage : 'url('+ mainImg +')'}}></div>

    <Container>
      <Row>
        <Col sm={8}>
          <img src="/wish.jpeg" width="80%" />
          <h4>상품명</h4>
          <p>상품정보</p>
          </Col>
        <Col sm={4}>
          <img src="/sambada.jpeg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
        </Col>
        
      </Row>
      <Row>
        <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p></Col>
        <Col sm>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
        <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
