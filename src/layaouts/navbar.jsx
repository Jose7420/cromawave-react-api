
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';
import logo from '../img/CromaWaveSinFondo.png';



import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Footer } from '../components/footer/Footer';

const NavBarExample = () => {
    return (
        <>
            <Navbar expand="lg" className="navBg navLetra fixed-top " variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt="imagen del logo" className='tamannoLogo'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav " />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/producto">Producto</Nav.Link>
                            <Nav.Link as={Link} to="/user">Usuarios</Nav.Link>
                            <Nav.Link as={Link} to="/register">Registarse</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            
                            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container-fluid contenido-principal">
                <div className="row">
                    <div className="col-12">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            {/* <section>
                <Outlet></Outlet>
            </section> */}


            {/* <Navbar className="bg-body-tertiary justify-content-between">
                <Form inline>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Form>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Navbar> */}
           
             
           <Footer></Footer>
          
            
        </>
    );
}


export default NavBarExample;