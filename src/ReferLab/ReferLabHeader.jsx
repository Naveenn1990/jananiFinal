import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {  Container, Nav, Navbar, Form } from 'react-bootstrap'

export const ReferLabHeader = () => {
  const ReferalLAB = JSON.parse(sessionStorage.getItem("RLabDetails"));
  return (
    <div>
      <Navbar expand="lg"  >
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex m-auto  ">
              <Form.Control
                type="search"
                placeholder="Search"
                style={{ width: "600px", borderRadius: "30px" }}
                aria-label="Search"
              />
            </Form>

            <Nav
              className="ms-auto my-2 my-lg-0"
              navbarScroll
            >
              <FontAwesomeIcon icon={faBell} className='notification-icon' />
              <div className="dropdown">

                <button className="dropbtn navigation-all fs-6" >
                  {ReferalLAB?.Firstname}
                  <img 
                  style={{ 
                    width: '40px ', 
                    marginLeft: '10px', 
                    height: '40px', 
                    borderRadius: '50%' 
                    }} 
                    src={`http://localhost:8521/ClinicLab/${ReferalLAB?.ProfileImg}`}
                    alt="img" />
                </button>

                {/* <div className="dropdown-content">
                  <a href="/referlabsettings">Account</a>
                  <a href="/referlabsettings">Settings</a>
                  <a href="/loginforeveryone">Logout</a>

                </div> */}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar></div>
  )
}
