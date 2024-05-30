import React, { useEffect } from "react";
import { Container, Navbar, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  faCalendarDays,
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
  faBandage,
  faCheck,
  faCancel,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AppointmentList = () => {
  const doctor = JSON.parse(sessionStorage.getItem("DoctorDetails"));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [AppointmentList, setAppointmentList] = useState([]);
  const getAppointmentList = () => {
    axios
      .get("http://localhost:8521/api/user/getlist")
      .then(function (response) {
        const data = response.data.Info.filter(
          (item) => item?.ConsultantDoctor?._id == doctor?._id
        );
        setAppointmentList(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getAppointmentList();
  }, []);

  const CaseStudy = (Id) => {
    sessionStorage.setItem("CaseStudy", Id);
    window.location.assign("/doctorscasestudy");
  };

  const [DateFilter, setDateFilter] = useState("")

  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#dae1f3" }}>
        <Container fluid>
          <Navbar.Brand className="fw-bold" href="#">
            Appointment
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex gap-5">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
              </Form>
              <div className="d-flex gap-3">
                <label style={{width:"63%"}}>Select Date : </label>
                <Form.Control
                  type="date"
                  className="me-2"                 
                />
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mb-5">
        <Table responsive className="table">
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold">Patient Name</th>
              <th className="fw-bold">Date & Time</th>
              <th className="fw-bold">Email</th>
              <th className="fw-bold">Mobile</th>
              <th className="fw-bold">Disease</th>
              <th className="fw-bold">Actions </th>
            </tr>
          </thead>
          <tbody>
            {AppointmentList?.map((item) => {
              return (
                <tr className="admin-table-row">
                  <td>
                    {item?.Firstname}&nbsp;{item?.Lastname}
                  </td>
                  <td>
                    {item?.Dateofappointment} <br /> {item?.Time}{" "}
                  </td>
                  <td>{item?.Email}</td>

                  <td>{item?.PhoneNumber}</td>
                  <td>
                    <div
                      className="Diseases-btn"
                      style={{ color: "red", border: "1px solid red" }}
                    >
                      {item?.Condition}
                    </div>
                  </td>

                  <td>
                    <button
                      className="table-details-btn"
                      onClick={() => CaseStudy(item?._id)}
                    >
                      Case Study
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center gap-3 mb-3">
              <img
                style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                src="./img/Our-doctors-img-1.jpg"
                alt=""
              />
              <h4 className="fw-bold">Jhon Deo</h4>
            </div>
            <div
              className="Diseases-btn"
              style={{ color: "green", border: "1px solid green" }}
            >
              Patient
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=" mb-3 fs-5">
            <FontAwesomeIcon icon={faCalendarDays} className="me-2" />
            February 25, 2018 19:52
          </div>

          <div className=" mb-3 fs-5">
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            test@email.com
          </div>

          <div className=" mb-3 fs-5">
            <FontAwesomeIcon icon={faPhoneVolume} className="me-2" />
            123456789
          </div>

          <div className=" mb-3 fs-5">
            <FontAwesomeIcon icon={faLocationDot} className="me-2" />
            God creature is sixth was abundantly and sea gathered
          </div>

          <div className=" mb-3 fs-5">
            <FontAwesomeIcon icon={faBandage} className="me-2" />
            <span
              className="Diseases-btn"
              style={{ color: "red", border: "1px solid red" }}
            >
              Infection
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger">
            <FontAwesomeIcon icon={faCancel} className="fs-5 me-2" />
            Reject
          </Button>
          <Button variant="success">
            <FontAwesomeIcon icon={faCheck} className="fs-5 me-2" />
            Approve
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
