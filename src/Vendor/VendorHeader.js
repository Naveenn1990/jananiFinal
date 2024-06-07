import { faBars, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Nav, Navbar, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const VendorHeader = () => {
  const VendorDetails = JSON.parse(sessionStorage.getItem("VendorDetails"));
  console.log("VendorDetailsforHeader",VendorDetails);
  return (
    <div>
      <Navbar expand="lg">
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
              <a href="#">
                <Button className="red-btn-7"></Button>
              </a>
            </Form>

            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <FontAwesomeIcon icon={faBell} className="notification-icon" />
              <div className="dropdown">
                <button className="dropbtn navigation-all fs-6">
                {`${VendorDetails?.fname}`}
                  <img
                    style={{
                      width: "40px ",
                      marginLeft: "10px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    // src="./img/admin-doctors-list-3.jpg"
                    src={`http://localhost:8521/Vendor/${VendorDetails?.profilePic}`}
                    alt="img"
                  />
                </button>

                {/* <div className="dropdown-content">
                  <Link to="/referlabsettings">Settings</Link>                
                 
                </div> */}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
