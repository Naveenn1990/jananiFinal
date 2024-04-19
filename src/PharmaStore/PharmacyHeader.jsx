import { faBars, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'

export const PharmacyHeader = () => {
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
              <FontAwesomeIcon icon={faBell} style={{ width: '30px', height: '30px', marginRight: '12px', marginTop: '20px' }} />

              <a href="#" className="  fs-4" >
                <FontAwesomeIcon icon={faUser} style={{ padding: '12px', borderRadius: '5px', backgroundColor: 'rgb(32 139 140)', color: 'white', marginRight: '10px', marginTop: '15px' }} />
              </a>

              {/* <div className="dropdown">
                <div className="dropdown-content">
                  <a href="/adminsettings">Account</a>
                  <a href="/adminsettings">Settings</a>
                  <a href="#">Logout</a>

                </div>
              </div> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar></div>
  )
}
