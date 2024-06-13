import {
  faAngleLeft,
  faAngleRight,
  faCancel,
  faCheck,
  faEllipsis,
  faFilePdf,
  faFilter,
  faPenToSquare,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  FloatingLabel,
  Form,
  FormLabel,
  Modal,
  ProgressBar,
  Table,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ReferLabPatientList = () => {
  const ReferalLAB = JSON.parse(sessionStorage.getItem("RLabDetails"));
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const deleteBtnClose = () => setShow1(false);
  const deleteBtnShow = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const ViewProfileClose = () => setShow2(false);
  const ViewProfileShow = () => setShow2(true);

  const [LabPatientList, setLabPatientList] = useState([]);
  const getlabregisterpatient = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8521/api/ClinicLab/getLabPatientList/${ReferalLAB?._id}`
      );
      setLabPatientList(res.data.patientList);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getlabregisterpatient();
  }, []);
  console.log("LabPatientList", LabPatientList);
  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mb-4">
        Patient List
      </h4>

      <Container>
        <div className="row">
          <div className="col-lg-8  d-flex gap-2">
            <Form className="">
              <Form.Control
                style={{ width: "400px" }}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              {/* <Button variant="outline-primary">Search</Button> */}
            </Form>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FontAwesomeIcon icon={faFilter} /> Filtered By
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                <Dropdown.Item href="#">Last 1 Month</Dropdown.Item>
                <Dropdown.Item href="#">Last 6 Month</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Button
              className="green-btn-9"
              onClick={() => navigate("/referlabaddpatient")}
            ></Button>
          </div>

          <Table bordered>
            <thead>
              <tr className="admin-table-head">
                <th>Sl.No</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Mobile</th>
                <th>Age</th>
                <th>Blood Group </th>
                <th>Diesease </th>
                <th>Actions </th>
              </tr>
            </thead>

            <tbody>
              {LabPatientList?.map((item, i) => {
                return (
                  <tr className="admin-table-row">
                    <td>{i + 1} </td>
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
                      <Dropdown>
                        <Dropdown.Toggle
                          className="medicine-list"
                          id="dropdown-basic"
                        >
                          <FontAwesomeIcon
                            icon={faEllipsis}
                            className="fs-3 "
                          />
                        </Dropdown.Toggle>
                        {/* <Dropdown.Menu>
                          <Dropdown.Item
                            className="medicine-list-dropdown"
                            onClick={ViewProfileShow}
                          >
                            <FontAwesomeIcon icon={faUser} className="me-2" />
                            View Profile
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="medicine-list-dropdown"
                            onClick={handleShow}
                          >
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              className="me-2"
                            />
                            Edit Selected
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="medicine-list-dropdown"
                            onClick={deleteBtnShow}
                          >
                            <FontAwesomeIcon icon={faTrash} className="me-2" />
                            Remove Selected
                          </Dropdown.Item>
                        </Dropdown.Menu> */}
                      </Dropdown>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>

      {/* EDIT MEDICINE */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center gap-3 mb-3">
              <img
                style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                src="./img/Our-doctors-img-1.jpg"
                alt=""
              />
              <h4 className="fw-bold " style={{ color: "rgb(32, 139, 140)" }}>
                Edit Patient Detail
              </h4>
            </div>
            <div
              className="Diseases-btn"
              style={{
                color: "green",
                border: "1px solid green",
                width: "100px",
              }}
            >
              Rajesh
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-2 ">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">First Name* </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingEmail"
                label="First Name"
              >
                <Form.Control type="text" placeholder="First Name" />
              </FloatingLabel>
            </div>

            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Last Name* </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingName"
                label="Last Name"
              >
                <Form.Control type="text" placeholder="Last Name" />
              </FloatingLabel>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Gender* </FormLabel>
              <Form.Select
                style={{ width: "300px" }}
                aria-label="Default select example"
              >
                <option>Select gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </Form.Select>
            </div>

            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">
                Mobile Number*{" "}
              </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingNumber"
                label="Phone Number"
              >
                <Form.Control type="number" placeholder="Phone Number" />
              </FloatingLabel>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Email* </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingEmail"
                label="Email"
              >
                <Form.Control type="Email" placeholder="Email" />
              </FloatingLabel>
            </div>

            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Birth Date* </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingEmail"
                label=""
              >
                <Form.Control type="date" placeholder="" />
              </FloatingLabel>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Age* </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingAge"
                label="Age"
              >
                <Form.Control type="number" placeholder="Age" />
              </FloatingLabel>
            </div>

            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">
                Blood Presure*{" "}
              </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingEmail"
                label="Blood Presure"
              >
                <Form.Control type="text" placeholder="Blood Presure" />
              </FloatingLabel>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Marital* </FormLabel>
              <Form.Select
                style={{ width: "300px" }}
                aria-label="Default select example"
              >
                <option>Marital Status </option>
                <option value="1">Single</option>
                <option value="2">Married</option>
              </Form.Select>
            </div>

            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Blood Group* </FormLabel>
              <Form.Select
                style={{ width: "300px" }}
                aria-label="Default select example"
              >
                <option>Blood Group</option>
                <option value="1">A+</option>
                <option value="2">A-</option>
                <option value="3">B+</option>
                <option value="3">B-</option>
                <option value="3">AB+</option>
                <option value="3">AB-</option>
                <option value="3">O+</option>
                <option value="3">O-</option>
              </Form.Select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">
                Injury/Contion*{" "}
              </FormLabel>
              <FloatingLabel className="mb-5" label="Injury/Contion">
                <Form.Control
                  style={{ width: "300px" }}
                  type="text"
                  placeholder="Injury/Contion"
                />
              </FloatingLabel>
            </div>

            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Sugar Level* </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingEmail"
                label="Sugar Level"
              >
                <Form.Control type="text" placeholder="Sugar Level" />
              </FloatingLabel>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          {/* <Button  variant="danger"><FontAwesomeIcon icon={faCancel} className='fs-5 me-2' />Reject</Button> */}
          <Button variant="success">
            <FontAwesomeIcon icon={faCheck} className="fs-5 me-2" />
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}

      <Modal
        show={show1}
        onHide={deleteBtnClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {/* <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Friend</div> */}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="text-center">
            <img
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              src="./img/delete-btn.png"
              alt=""
            />
            <h4 className="fw-bold text-dark mb-2">Are You Sure</h4>
            <p>This event data will be removed permanently</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger">
            <FontAwesomeIcon icon={faCancel} className=" me-2" />
            Delet
          </Button>
          <Button variant="success" onClick={deleteBtnClose}>
            Cancle
          </Button>

          {/* <Button variant="success"><FontAwesomeIcon icon={faCheck} className='fs-5 me-2' />Save</Button> */}
        </Modal.Footer>
      </Modal>

      {/* VIEW PEOFILE MODAL */}

      <Modal size="lg" show={show2} onHide={ViewProfileClose}>
        <Modal.Header
          style={{ backgroundColor: "rgb(32 139 140)", color: "white" }}
        >
          <Modal.Title>Patient Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "rgb(32 139 140)" }}>
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
                <td>$500</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
};
