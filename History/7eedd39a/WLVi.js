import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-ody-tertiary" bg="primary" variant="dark" >
            <Container >
                {/* <Navbar.Brand href="/" >Navbar scroll</Navbar.Brand>
                 */}
                <Navbar.Brand>
                    <Link className='text-white text-decoration-none' to="/">
                        Note Zipper
                    </Link>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav className="m-auto">
                        <Form className="m-auto">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                    </Nav>

                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link >
                            <Link className="text-white text-decoration-none" to="/mynotes">My Notes</Link>
                        </Nav.Link>
                        <NavDropdown title="Sahith" id="navbarScrollingDropdown">
                            {/* <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item> */}
                            <NavDropdown.Item >
                                <Link className="text-decoration-none text-black" to="myprofile">My Profile</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                <Link className="text-decoration-none text-black" >Logout</Link>
                                
                            </NavDropdown.Item>

                        </NavDropdown>

                        {/* <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link> */}

                    </Nav>
                    {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;