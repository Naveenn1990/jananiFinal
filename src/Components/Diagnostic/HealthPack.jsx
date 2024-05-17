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
import axios from "axios";

function HealthPack() {
  const location = useLocation();
  const labUserDetails = sessionStorage.getItem("labUser");
  const { healthpkgdata } = location.state;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("healthpkgdata: ", healthpkgdata);
  const [patientname, setpatientname] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [email, setemail] = useState("");
  const [testDate, settestDate] = useState("");
  const [causeid, setcauseid] = useState("");
  const [Labtests, setLabtests] = useState([]);
  const bookLabTest = async () => {
    let obj;
    if (
      labUserDetails &&
      JSON.parse(labUserDetails)?.registrationType === "IPD"
    ) {
      obj = {
        causeid: causeid,
        patientid: JSON.parse(labUserDetails)?._id,
        patientname: patientname,
        Phoneno: Phoneno,
        email: email,
        testDate: testDate,
        healthPkgid: healthpkgdata,
        // Labtests: selectedOptions,
      };
    } else if (
      labUserDetails &&
      JSON.parse(labUserDetails)?.registrationType === "OPD"
    ) {
      obj = {
        patientid: JSON.parse(labUserDetails)?._id,
        patientname: patientname,
        Phoneno: Phoneno,
        email: email,
        testDate: testDate,
        healthPkgid: healthpkgdata,
        // Labtests: selectedOptions,
      };
    } else if (!labUserDetails) {
      obj = {
        patientname: patientname,
        Phoneno: Phoneno,
        email: email,
        testDate: testDate,
        healthPkgid: healthpkgdata,
        // Labtests: selectedOptions,
      };
    }
    try {
      const config = {
        url: "/user/bookHospitalLabTest",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: obj,
      };
      let res = await axios(config);
      if (res.status === 200 || res.status === 201) {
        alert("Lab test booked");
        // thankyouShow();
      }
    } catch (error) {
      console.log(error);
      return alert(error.response.data.error);
    }
  };

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
      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "white", fontWeight: "bold" }}>
            Book Your Test
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <FloatingLabel
              className="col-md-6 p-2"
              controlId="floatingName"
              label="Name"
            >
              <Form.Control
                type="text"
                value={patientname}
                placeholder="Name"
                onChange={(e) => setpatientname(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              className="  col-md-6 p-2"
              controlId="floatingMobile"
              label="Mobile"
            >
              <Form.Control
                type="number"
                value={Phoneno}
                placeholder="Mobile"
                onChange={(e) => setPhoneno(e.target.value)}
              />
            </FloatingLabel>
          </Row>
          <Row>
            <FloatingLabel
              className="col-md-6 p-2"
              controlId="floatingEmail"
              label="Email"
            >
              <Form.Control
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              className="col-md-6 "
              controlId="floatingEmail"
              label="Date"
            >
              <Form.Control
                type="date"
                placeholder=""
                value={testDate}
                onChange={(e) => settestDate(e.target.value)}
              />
            </FloatingLabel>

            {/* <FloatingLabel className="col-md-6 p-1" controlId="floatingName">
              <Select
                // defaultValue={[colourOptions[2], colourOptions[3]]}
                isMulti
                name="colors"
                options={HospitalLabList}
                className="basic-multi-select"
                classNamePrefix="select"
                value={Labtests}
                onChange={AddLabTest}
              />
            </FloatingLabel> */}
          </Row>
          <Row className="d-flex mt-2 justify-content-center mb-3">
            {labUserDetails &&
            JSON.parse(labUserDetails)?.registrationType === "IPD" ? (
              <FloatingLabel
                className="col-md-6 p-2"
                controlId="floatingCause"
                label="Cause"
              >
                <Form.Select
                  type="text"
                  value={causeid}
                  placeholder="Cause"
                  onChange={(e) => setcauseid(e.target.value)}
                >
                  <option>Open this select menu</option>
                  {JSON.parse(labUserDetails)?.cause?.map((itemdata) => {
                    return (
                      <option value={itemdata?._id}>
                        {itemdata?.CauseName}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
            ) : (
              <></>
            )}
          </Row>

          <Button
            onClick={bookLabTest}
            onHide={handleClose}
            className="col-md-12"
            style={{ backgroundColor: "white", color: "#20958C" }}
          >
            Submit
          </Button>
        </Modal.Body>
      </Modal>
      {/* <Report /> */}
      <Footer />
    </div>
  );
}

export default HealthPack;
