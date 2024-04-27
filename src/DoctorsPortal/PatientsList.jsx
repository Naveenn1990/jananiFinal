import {
  faFilePdf,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Modal, ProgressBar, Table } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaClipboardUser, FaUserTag } from "react-icons/fa";

export const PatientsList = () => {
  const doctorData = JSON.parse(sessionStorage.getItem("DoctorDetails"));

  const [show, setShow] = useState();
  const ReadMoreClose = () => setShow(false);
  const ReadMoreShow = () => setShow(true);

  const [show1, setShow1] = useState();
  const medHistoryClose1 = () => setShow1(false);
  const medHistoryShow1 = () => setShow1(true);

  const [show2, setShow2] = useState();
  const medHistoryClose2 = () => setShow2(false);
  const medHistoryShow2 = () => setShow2(true);

  const [Topic, setTopic] = useState("");
  const [description, setdescription] = useState("");
  const [docs, setdocs] = useState("");

  const [patientlist, setpatientlist] = useState([]);
  const [selectedPatient, setselectedPatient] = useState({});
  const [FilterPatientType, setFilterPatientType] = useState("OPD");

  const getpatientlist = () => {
    axios
      .get("http://localhost:8521/api/user/getPatientList")
      .then(function (response) {
        // handle success
        setpatientlist(response.data.UsersInfo);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const getDocReqFromOPDtoIPD = async () => {
    try {
      const config = {
        url: "/user/getDocReqFromOPDtoIPD",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          requestedDoc: doctorData?._id,
          patientid: selectedPatient,
        },
      };
      const res = await axios(config);
      if (res.status === 200) {
        medHistoryClose2();

        alert(res.data.success);
      }
    } catch (error) {
      console.log(error);
      alert("something went wrong!");
    }
  };

  const [chosenPatient, setchosenPatient] = useState("");
  const addMedicalHistory = async () => {
    const obj = {
      topic: Topic,
      description: description,
      docs: docs,
      addedByDoctor: doctorData?._id,
      patientid: chosenPatient,
    };
    try {
      const config = {
        url: "/user/PatientHistory",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "multipart/form-data" },
        data: obj,
      };
      const res = await axios(config);
      if (res.status === 200) {
        medHistoryClose1();
        setTopic("");
        setdescription("");
        setdocs("");
        alert(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      return alert("SOmethign went wrong!!! Please try again...");
    }
  };

  useEffect(() => {
    getpatientlist();
  }, []);

  console.log("patientlist: ", patientlist);

  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mb-4">
        Patients
      </h4>
      <Button
        style={{ backgroundColor: "#20958C", margin: "10px" }}
        onClick={() => setFilterPatientType("OPD")}
      >
        OPD
      </Button>{" "}
      <Button
        style={{ backgroundColor: "#20958C", margin: "10px" }}
        onClick={() => setFilterPatientType("IPD")}
      >
        IPD
      </Button>
      <Container className="p-4">
        <div className="row mb-4">
          {patientlist
            ?.filter((val) => val?.registrationType === FilterPatientType)
            ?.map((item) => {
              return (
                <div className="col-lg-4 mb-3">
                  <Card
                    style={{
                      width: "20rem",
                      boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Card.Header>
                      <div className="d-flex gap-3 align-items-center ">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div style={{ marginRight: "10px" }}>
                            <FaUserTag
                              style={{
                                fontSize: "50px",
                                borderRadius: "50%",
                                margin: "4px",
                              }}
                            />
                            <span
                              className="fw-bold"
                              style={{ color: "rgb(32, 139, 140)" }}
                            >
                              {item?.Firstname}{" "}
                            </span>
                          </div>
                          <div style={{ marginLeft: "62px" }}>
                            <button
                              title="medical History"
                              className="table-details-btn"
                              onClick={() => {
                                setchosenPatient(item._id);
                                medHistoryShow1();
                              }}
                            >
                              Details+
                            </button>
                          </div>
                        </div>
                        <div>
                          {/* <span className='ms-auto fw-bold'>10:00 - 10:30 AM</span> */}
                        </div>
                      </div>
                      <p>Patient Id : {item?.PatientId} </p>
                    </Card.Header>

                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <p>
                          {" "}
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            className="me-3 "
                          />
                          {item?.Address1}{" "}
                        </p>
                        <p>
                          {" "}
                          <FontAwesomeIcon icon={faPhoneVolume} /> +
                          {item?.PhoneNumber}
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {/* <p>Blood Group: O+</p> */}
                        <p className="d-flex justify-content-between">
                          <span>
                            Reports:{" "}
                            <FontAwesomeIcon
                              icon={faFilePdf}
                              className="text-danger"
                            />
                          </span>
                          {item.registrationType === "OPD" ? (
                            <span>
                              <Button
                                onClick={() => {
                                  setselectedPatient(item);
                                  medHistoryShow2();
                                }}
                              >
                                Admit to IPD
                              </Button>
                            </span>
                          ) : (
                            <></>
                          )}
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item className="text-center">
                        <button
                          onClick={ReadMoreShow}
                          className="table-details-btn"
                        >
                          Read More
                        </button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              );
            })}
        </div>
      </Container>
      {/* Read More Modal */}
      <Modal size="lg" show={show} onHide={ReadMoreClose}>
        <Modal.Header className="all-bg-green text-light">
          <Modal.Title>Patient Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="all-bg-green ">
          <div className="row" style={{ color: "white" }}>
            <div className="col-lg-4">
              <img src="./img/department-img-1.jpg" style={{ width: "100%" }} />
              <div style={{ border: "1px solid lightgrey" }}>
                <h6
                  style={{
                    textAlign: "center",
                    padding: "4% 0%",
                    backgroundColor: "lightblue",
                  }}
                >
                  ABOUT PATIENT
                </h6>

                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>NAME</b> : John
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>EmailID</b> : John@gmail.com
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Mobile</b> : 9563256325
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Occupation</b> : Engineer
                </h6>
              </div>
            </div>
            <div className="col-lg-8">
              <div style={{ border: "1px solid lightgrey", padding: "2%" }}>
                <span style={{ fontSize: "14px", textAlign: "justify" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </span>
                <hr></hr>
                <h6>General Report</h6>
                <hr></hr>
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  Heart Beat
                </span>
                <ProgressBar
                  variant="success"
                  style={{ height: "6px" }}
                  now={40}
                />

                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  Blood Pressure
                </span>
                <ProgressBar
                  variant="info"
                  style={{ height: "6px" }}
                  now={60}
                />

                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  Sugar
                </span>
                <ProgressBar
                  variant="warning"
                  style={{ height: "6px" }}
                  now={60}
                />

                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  Haemoglobin
                </span>
                <ProgressBar
                  variant="danger"
                  style={{ height: "6px" }}
                  now={60}
                />
              </div>
            </div>
          </div>
          <h6 style={{ marginTop: "4%", color: "white" }}>
            Past Visit History
          </h6>
          <Table
            className="table-bordered border-secondary"
            responsive="md"
            style={{ marginTop: "1%", backgroundColor: "#F2EFFB" }}
          >
            <thead>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                <th className="fw-bold">Date</th>
                <th className="fw-bold">Refer Doctor</th>
                <th className="fw-bold">Department</th>
                <th className="fw-bold">Report</th>
                <th className="fw-bold">Earning</th>
              </tr>
            </thead>
            <tbody style={{}}>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                <td>06/10/1987</td>

                <td>Dr.Devid</td>
                <td>Cardiology</td>
                <td>
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    style={{ color: "#e0271a" }}
                  />
                </td>
                <td>
                  $500
                  {/* {" "}
                                    <div
                                        style={{
                                            display: "flex",
                                            textAlign: "center",
                                            justifyContent: "space-evenly",
                                        }}
                                    >
                                        <MdEdit style={{ color: "#20958c", marginRight: "1%" }} />
                                        <AiFillDelete style={{ color: "red" }} />
                                    </div> */}
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        {/* <Modal.Footer>
          <div style={{ display: "flex" }}>
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                marginRight: "20px",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow(false);
              }}
            >
              CANCEL
            </button>

            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow(false);
                alert("Doctor Added");
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer> */}
      </Modal>
      <Modal size="lg" show={show1} onHide={medHistoryClose1}>
        <Modal.Header className="all-bg-green text-light">
          <Modal.Title>Patient Medical Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="all-bg-green ">
          <div className="row" style={{ color: "white" }}>
            <div
              style={{
                display: "flex",
                // justifyContent: "space-around",
                padding: "10px",
              }}
            >
              <label className="col-md-6">Topic</label>
              <input
                className="col-md-6"
                type="text"
                style={{ borderRadius: "10px" }}
                onChange={(e) => {
                  setTopic(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px",
              }}
            >
              <label className="col-md-6">Description</label>
              <textarea
                className="col-md-6"
                cols={30}
                rows={5}
                style={{ borderRadius: "10px" }}
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              ></textarea>
            </div>
            <div
              style={{
                display: "flex",

                padding: "10px",
              }}
            >
              <label className="col-md-6">Documents (optional)</label>
              <input
                className="col-md-6"
                type="file"
                style={{ border: "2px solid blue", borderRadius: "10px" }}
                onChange={(e) => setdocs(e.target.files)}
                multiple
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={medHistoryClose1} className="btn btn-danger">
            Close
          </button>
          <button onClick={addMedicalHistory} className="table-details-btn">
            Add Medical details
          </button>
        </Modal.Footer>
      </Modal>
      <Modal size="lg" show={show2} onHide={medHistoryClose2}>
        <Modal.Header className="all-bg-green text-light">
          <Modal.Title>OPD to IPD</Modal.Title>
        </Modal.Header>
        <Modal.Body className="all-bg-green ">
          <div style={{ color: "white" }}>
            <label>Reason</label>
            <textarea></textarea>
          </div>
          <div className="row" style={{ color: "white" }}>
            Are you sure, you want to admit this patient to the IPD?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={medHistoryClose2} className="btn btn-danger">
            Close
          </button>
          <button onClick={getDocReqFromOPDtoIPD} className="table-details-btn">
            Done
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
