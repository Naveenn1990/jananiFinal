import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";

function ReferalPatientList() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [LabPatientList, setLabPatientList] = useState([]);
  const getlabregisterpatient = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/ClinicLab/allreferalpatients"
      );
      setLabPatientList(res.data.patientList);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("LabPatientList", LabPatientList);
  const [SearchItem, setSearchItem] = useState("");
  const [PatientDetails, setPatientDetails] = useState("")

  useEffect(() => {
    getlabregisterpatient();
  }, []);
  return (
    <div>
      <hr />
      <div className="container">
        <div className="col-lg-8  d-flex gap-2 mb-3">
          <Form className="">
            <Form.Control
              style={{ width: "400px" }}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </Form>
        </div>

        <Table bordered>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Lab Name</th>
              <th>Test Name</th>
              <th>Patient Name</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Age</th>
              <th>Blood Group </th>
              <th>Diesease </th>
              <th>Approve </th>
            </tr>
          </thead>
          <tbody>
            {LabPatientList?.filter((ele) => ele?.isRefer === true)?.map(
              (item, i) => {
                if (
                  SearchItem === "" ||
                  Object.values(item).some((value) =>
                    String(value)
                      .toLowerCase()
                      .includes(SearchItem.toLowerCase())
                  )
                )
                  return (
                    <tr className="admin-table-row">
                      <td>{i + 1} </td>
                      <td>
                        <p style={{ color: "red", fontWeight: "800" }}>
                          {item?.LabId?.ClinicLabName}
                        </p>{" "}
                      </td>
                      <td>
                        <p style={{ color: "red", fontWeight: "800" }}>
                          {item?.labtestid?.testName}
                        </p>{" "}
                      </td>
                      <td>{`${item?.LabPatientsFname} ${item?.LabPatientsLname}`}</td>
                      <td>{item?.Gender}</td>
                      <td>{item?.Address}</td>
                      <td>{item?.PhoneNumber}</td>
                      <td>{item?.Age}</td>
                      <td>{item?.BloodGroup}</td>
                      <td>
                        <div
                          className="Diseases-btn"
                          style={{ color: "red", border: "1px solid green" }}
                        >
                          {item?.InjuryCondition}
                        </div>
                      </td>
                      <td>
                        <div>
                          <Button
                            variant="success"
                            onClick={() => {
                              handleShow();
                              setPatientDetails(item);
                            }}
                          >
                            {/* <FontAwesomeIcon
                            icon={faCheck}
                            className="fs-5 me-2"
                          /> */}
                            Approve
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
              }
            )}
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Approve Lab Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{ textAlign: "center", padding: "20px" }}>
            <p style={{ fontSize: "18px", color: "#333" }}>
              Are you sure you want to approve fo Lab Test &nbsp;
              <b style={{ color: "red" }}>
                {`${PatientDetails?.LabPatientsFname} ${PatientDetails?.LabPatientsLname}`}
              </b>&nbsp;
              ?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">
            <FontAwesomeIcon icon={faCheck} className="fs-5 me-2" />
            Approve
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ReferalPatientList;