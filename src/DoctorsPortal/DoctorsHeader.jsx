import { faBars, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";

export const DoctorsHeader = () => {
  let doctorDetails = JSON.parse(sessionStorage.getItem("DoctorDetails"));
  useEffect(() => {
    doctorDetails = JSON.parse(sessionStorage.getItem("DoctorDetails"));
    if (!doctorDetails) {
      alert("Please register first!!!");
      return;
    }
  }, []);
  return (
    <div>
      <Navbar expand="lg">
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
              <a href="#">
                <Button className="red-btn-7"></Button>
              </a>
            </Form>

            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <FontAwesomeIcon
                icon={faBell}
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "12px",
                  marginTop: "12px",
                }}
              />
              <div className="dropdown">
                <a href="#">
                  <button className="dropbtn navigation-all fs-6">
                    {doctorDetails.Firstname}
                    {doctorDetails.Lastname}{" "}
                    <img
                      style={{
                        width: "40px ",
                        marginLeft: "10px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                      src={`http://localhost:8521/Doctor/${doctorDetails.ProfileImg}`}
                      alt="img"
                    />
                  </button>
                </a>
                <div className="dropdown-content">
                  <a href="/adminsettings">Account</a>
                  <a href="/adminsettings">Settings</a>
                  <a href="#">Logout</a>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
