import { faBars, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Container, Nav, Navbar, Form } from 'react-bootstrap'

export const LabHeader = () => {
    return (
        <div>
            <Navbar expand="lg"  >
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    {/* <FontAwesomeIcon icon={faBars} /> */}
                    <Navbar.Collapse id="navbarScroll">

                        <Form className="d-flex m-auto  ">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                style={{ width: "600px", borderRadius: "30px" }}
                                // style={{marginLeft:"-200px"}}
                                aria-label="Search"
                            />
                            <a href="#"><Button className='red-btn-7'></Button></a>
                        </Form>

                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            navbarScroll

                        >
                            <FontAwesomeIcon icon={faBell} className='notification-icon' />
                            <div className="dropdown">

                                <button className="dropbtn navigation-all fs-6" >Sheetal
                                    <img style={{ width: '40px ', marginLeft: '10px', height: '40px', borderRadius: '50%' }} src="./img/admin-doctors-list-4.jpg" alt="img" />
                                </button>

                                <div className="dropdown-content">
                                    {/* <a href="#">Account</a>
                                    <a href="#">Settings</a> */}
                                    <a href="/loginforeveryone">Logout</a>

                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar></div>
    )
}
