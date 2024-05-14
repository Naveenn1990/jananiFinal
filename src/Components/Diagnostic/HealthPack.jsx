import React from "react";
import { useState } from "react";
import {
  Container,
  Modal,
  FloatingLabel,
  Button,
  Form,
  Row,
} from "react-bootstrap";
import Report from "./Report";
import { Footer } from "../footer";
import { useLocation } from "react-router-dom";

function HealthPack() {
  const location = useLocation();
  const { healthpkgdata } = location.state;
  const [show, setShow] = useState(false);
  console.log("healthpkgdata: ", healthpkgdata);
  return (
    <div>
      <div
        className="head-back-img"
        style={{
          backgroundImage: "url(./img/all-department-img.jpg)",
          width: "100%",
          height: "200px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <h1 className="text-dark pt-5  fw-light back-img-head">
            {" "}
            Health Packages
          </h1>
        </Container>
      </div>
      <Container>
        <h3>{healthpkgdata?.healthpkgName}</h3>
        <div className="healthpack-content">
          <div className="health-image">
            <img
              src={`http://localhost:8521/HospitalLabHealthPkg/${healthpkgdata?.healthpkgImg}`}
              style={{ height: "200px", width: "200px" }}
              alt=""
            />
          </div>
          <div className="health-list">
            <ul type="circle">
              {healthpkgdata?.testList?.map((testdata) => {
                return <li>{testdata?.testid?.testName}</li>;
              })}
            </ul>
            <div className="health-button">
              <button
                className="mt-2 "
                style={{
                  backgroundColor: "rgb(32 139 140)",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                  marginLeft: "5px",
                }}
                onClick={() => setShow(true)}
              >
                Book Now{" "}
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* =============Modal  */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#208b8c", fontWeight: "bold" }}>
            Book Now
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <FloatingLabel
              className="col-md-12 p-2"
              controlId="floatingName"
              label="Name"
            >
              <Form.Control type="text" placeholder="Name" />
            </FloatingLabel>

            <FloatingLabel
              className="  col-md-12 p-2"
              controlId="floatingMobile"
              label="Mobile"
            >
              <Form.Control type="number" placeholder="Mobile" />
            </FloatingLabel>
          </Row>
          <Row>
            <FloatingLabel
              className="col-md-12 p-2"
              controlId="floatingEmail"
              label="Email"
            >
              <Form.Control type="email" placeholder="Email" />
            </FloatingLabel>

            <FloatingLabel
              className="col-md-12 p-2"
              controlId="floatingEmail"
              label=""
            >
              <Form.Control type="date" placeholder="" />
            </FloatingLabel>
          </Row>
          <Button className="all-bg-green col-md-12">Submit</Button>
        </Modal.Body>
      </Modal>
      {/* <Report /> */}
      <Footer />
    </div>
  );
}

export default HealthPack;
