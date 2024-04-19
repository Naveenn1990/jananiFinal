import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { BiLogoFacebook, BiLogoTwitter, BiLogoGooglePlus, BiLogoInstagram, BiLogoLinkedin, BiLogoPinterest, BiLogoYoutube, } from 'react-icons/bi';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faHeart
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from 'react-bootstrap';

export const HeaderDiagnostic = () => {
    return (
        <div>



            <Navbar className='text-light navbar-height all-bg-green'  data-bs-theme="dark">
                <Container >
                    <Nav.Link href="/contact" className='lab-pharma-contact'>Contact: 1-8700-900 Emergency: 1-8700-900</Nav.Link>



                    <Nav className="ms-auto fs-5  ">
                        <Nav.Link className='text-light nav-icons' href="#facebook"><BiLogoFacebook /></Nav.Link>
                        <Nav.Link className='text-light nav-icons' href="#twitter"><BiLogoTwitter /></Nav.Link>
                        <Nav.Link className='text-light nav-icons' href="#google"><BiLogoGooglePlus /></Nav.Link>
                        <Nav.Link className='text-light nav-icons' href="#instagram"><BiLogoInstagram /></Nav.Link>
                        <Nav.Link className='text-light nav-icons' href="#Linkedin"><BiLogoLinkedin /></Nav.Link>
                        <Nav.Link className='text-light nav-icons' href="#pinterest"><BiLogoPinterest /></Nav.Link>
                        <Nav.Link className='text-light nav-icons' href="#youtube"><BiLogoYoutube /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="/"><img className='logo ' src="./img/logo.jpg" alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="d-flex align-items-center gap-2 ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Form className="d-flex search-width">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    style={{width:"500px" , borderRadius:"30px"}}
                                    // style={{marginLeft:"-200px"}}
                                    aria-label="Search"
                                />
                             <a href="#"><Button className='red-btn-7 search-btn'></Button></a>
                            </Form>

                            <Dropdown>
                                <Dropdown.Toggle className='all-bg-green' id="dropdown-basic">
                                    Shruti
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/diagnostictrackorder">My Order</Dropdown.Item>
                                    <Dropdown.Item href="/diagnosticmyprofile">Profile</Dropdown.Item>
                                    <Dropdown.Item href="/diagnostic">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Nav.Link className='pharmacy-navigation' href="/logindiagnostic">SIGN IN </Nav.Link>
                            <Nav.Link className='pharmacy-navigation' href="/registerdiagnostic">SIGN UP</Nav.Link>
                            <Nav.Link className='pharmacy-navigation-icon' href="/diagnosticcart"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
                            <Nav.Link className='pharmacy-navigation-icon' href="/diagnosticwishlist"><FontAwesomeIcon icon={faHeart} /></Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
