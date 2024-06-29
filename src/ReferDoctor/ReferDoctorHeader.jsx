import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Nav, Navbar, Form } from "react-bootstrap";

export const ReferDoctorsHeader = () => {
  const ReferralDocDetails = JSON.parse(
    sessionStorage.getItem("RDoctorDetails")
  );
  console.log("ReferralDocDetails", ReferralDocDetails);
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {/* <FontAwesomeIcon icon={faBars} /> */}
          <Navbar.Collapse id="navbarScroll">
            {/* <Form className="d-flex m-auto  ">
              <Form.Control
                type="search"
                placeholder="Search"
                style={{ width: "600px", borderRadius: "30px" }}
               
                aria-label="Search"
              />
              <a href="#"><Button className='red-btn-7'></Button></a>
            </Form> */}
            <h2 className="referral-lab-panel">Referral Clinic Panel</h2>
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <FontAwesomeIcon icon={faBell} className="notification-icon" />
              <div className="dropdown">
                <button className="dropbtn navigation-all fs-6">
                  {`${ReferralDocDetails?.Firstname} ${ReferralDocDetails?.Lastname}`}
                  <img
                    style={{
                      width: "40px ",
                      marginLeft: "10px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src={`http://localhost:8521/Clinic/${ReferralDocDetails?.ProfileImg}`}
                    alt="img"
                  />
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
