import {
  faCancel,
  faCheck,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FloatingLabel,
  Form,
  FormLabel,
  Modal,
  ProgressBar,
  Table,
} from "react-bootstrap";
import { MdDelete, MdEdit } from "react-icons/md";
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

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [LabPatientList, setLabPatientList] = useState([]);
  const getlabregisterpatient = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8521/api/ClinicLab/getLabPatientList/${ReferalLAB?._id}`
      );
      setLabPatientList(res.data.patientList);
      setPagination(res.data.patientList);
    } catch (error) {
      console.log(error);
    }
  };

  const [SearchItem, setSearchItem] = useState("");
  // Pagination
  const [pagination, setPagination] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(pagination?.length / usersPerPage);
  const changePage = ( selected ) => {
      setPageNumber(selected);
  };
  const [LabPatientId, setLabPatientId] = useState("");
  const DeleteLabpatient = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8521/api/ClinicLab/deletelappatient/${LabPatientId?._id}`
      );
      if (res.status === 200) {
        getlabregisterpatient();
        deleteBtnClose();
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
  const [HospitalLabList, setHospitalLabList] = useState([]);
  const HospitallabList = () => {
    axios
      .get("http://localhost:8521/api/admin/getHospitalLabTestlist")
      .then(function (response) {
        if (response.status === 200) {
          const data = response.data.HospitalLabTests;
          setHospitalLabList(data);
        }
      })
      .catch(function (error) {
        console.log(error);
        setHospitalLabList([]);
      });
  };


  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [gender, setgender] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [email, setemail] = useState("");
  const [dob, setdob] = useState("");
  const [age, setage] = useState("");
  const [maritalStatus, setmaritalStatus] = useState("");
  const [bloodgroup, setbloodgroup] = useState("");
  const [Address, setAddress] = useState("");
  const [DateofAppointment, setDateofAppointment] = useState("");
  const [Injury, setInjury] = useState("");
  const [OldPrescription, setOldPrescription] = useState("");
  const [Selecttest, setSelecttest] = useState("");
  const formdata = new FormData();
  const EditReferalLabPatient = async () => {
    try {
      formdata.set("LabPatientsFname", firstname);
      formdata.set("LabPatientsLname", lastname);
      formdata.set("Gender", gender);
      formdata.set("PhoneNumber", Phoneno);
      formdata.set("Email", email);
      formdata.set("Dob", dob);
      formdata.set("Age", age);
      formdata.set("marritalStatus", maritalStatus);
      formdata.set("BloodGroup", bloodgroup);
      formdata.set("Address", Address);
      formdata.set("AppointmentDate", DateofAppointment);
      formdata.set("InjuryCondition", Injury);
      formdata.set("OldPrescription", OldPrescription);
      formdata.set("LabId", ReferalLAB?._id);
      formdata.set("labtestid", Selecttest);
      const config = {
        url: "/editreferallabpatient/" + LabPatientId?._id,
        method: "put",
        baseURL: "http://localhost:8521/api/ClinicLab/",
        headers: { "Content-Type": "multipart/form-data" },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose();
        getlabregisterpatient();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const ReferToPatient = async () => {
    try {
      const config = {
        url: "/refepatient/" + LabPatientId?._id,
        method: "put",
        baseURL: "http://localhost:8521/api/ClinicLab/",
        headers: { "Content-Type": "application/json" },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose3();
        getlabregisterpatient();
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getlabregisterpatient();
    HospitallabList();
  }, []);
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
                onChange={(e) => setSearchItem(e.target.value)}
              />
            </Form>
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
                <th>Test List </th>
                <th>Actions </th>
                <th>Refer-Status </th>
              </tr>
            </thead>
            <tbody>
              {LabPatientList?.slice(pagesVisited, pagesVisited + usersPerPage)?.map((item, i) => {
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
                        <Button
                          onClick={() => {
                            setLabPatientId(item);
                            handleShow4();
                          }}
                        >
                          Test List
                        </Button>
                      </td>
                      <td>
                        {item?.isRefer === false ? (
                          <div className="d-flex gap-4">
                            <MdEdit
                              style={{
                                color: "green",
                                fontSize: "18px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                handleShow();
                                setLabPatientId(item);
                              }}
                            />
                            <MdDelete
                              style={{
                                color: "red",
                                fontSize: "18px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteBtnShow();
                                setLabPatientId(item);
                              }}
                            />
                          </div>
                        ) : (
                          <p>Can't Do Anything</p>
                        )}
                      </td>
                      <td>
                        {item?.isRefer === false ? (
                          <Button
                            onClick={() => {
                              handleShow3();
                              setLabPatientId(item);
                            }}
                          >
                            {" "}
                            Refer{" "}
                          </Button>
                        ) : (
                          <p>Refered</p>
                        )}
                      </td>
                    </tr>
                  );
              })}
            </tbody>
          </Table>
          <div style={{justifyContent:"end"}} className="my-3 d-flex justify-end">
                        <Stack spacing={2}>
                            <Pagination
                                count={pageCount}
                                onChange={(event, value)=>{
                                    changePage(value-1)
                                  }}
                                color="primary"                          
                            />
                        </Stack>
                    </div>
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
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "24px",
                }}
                src="./img/dummyprofile.png"
                alt=""
              />
              <h4 className="fw-bold " style={{ color: "white" }}>
                Edit Patient Detail
              </h4>
            </div>
            <div>
              {`${LabPatientId?.LabPatientsFname} 
            ${LabPatientId?.LabPatientsLname}`}
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
                label={LabPatientId?.LabPatientsFname}
              >
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setfirstname(e.target.value)}
                />
              </FloatingLabel>
            </div>

            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Last Name* </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingName"
                label={LabPatientId?.LabPatientsLname}
              >
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => setlastname(e.target.value)}
                />
              </FloatingLabel>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Gender* </FormLabel>
              <Form.Select
                style={{ width: "300px" }}
                aria-label="Default select example"
                onChange={(e) => setgender(e.target.value)}
              >
                <option>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
            </div>

            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">
                Mobile Number*{" "}
              </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingNumber"
                label={LabPatientId?.PhoneNumber}
              >
                <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  onChange={(e) => setPhoneno(e.target.value)}
                />
              </FloatingLabel>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Email* </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingEmail"
                label={LabPatientId?.Email}
              >
                <Form.Control
                  type="Email"
                  placeholder="Email"
                  onChange={(e) => setemail(e.target.value)}
                />
              </FloatingLabel>
            </div>

            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Birth Date* </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingEmail"
                label=""
              >
                <Form.Control
                  type="date"
                  placeholder=""
                  onChange={(e) => setdob(e.target.value)}
                />
              </FloatingLabel>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Age* </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingAge"
                label={LabPatientId?.Age}
              >
                <Form.Control
                  type="number"
                  placeholder="Age"
                  onChange={(e) => setage(e.target.value)}
                />
              </FloatingLabel>
            </div>
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Marital* </FormLabel>
              <Form.Select
                style={{ width: "300px" }}
                onChange={(e) => setmaritalStatus(e.target.value)}
              >
                <option>Marital Status </option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </Form.Select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Blood Group* </FormLabel>
              <Form.Select
                style={{ width: "300px" }}
                onChange={(e) => setbloodgroup(e.target.value)}
              >
                <option>Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </Form.Select>
            </div>
          </div>
          <div className="container">
            <div className="row mb-3">
              <FormLabel className="fw-bold text-dark">Address</FormLabel>
              <textarea
                onChange={(e) => setAddress(e.target.value)}
                class="form-control"
                placeholder={LabPatientId?.Address}
              />
            </div>
          </div>

          <div className="container">
            <div className="row mb-3">
              <div className="col-lg-6">
                <FormLabel className="fw-bold text-dark">
                  Date Of Appointment
                </FormLabel>
                <Form.Control
                  style={{ width: "300px" }}
                  type="date"
                  onChange={(e) => setDateofAppointment(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className="col-lg-6">
                <FormLabel className="fw-bold text-dark">Lab Test</FormLabel>
                <Form.Select onChange={(e) => setSelecttest(e.target.value)}>
                  <option>Select Test</option>
                  {HospitalLabList?.map((item) => {
                    return <option value={item?._id}>{item?.testName}</option>;
                  })}
                </Form.Select>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <FormLabel className="fw-bold text-dark">
                Injury/Contion
              </FormLabel>
              <textarea
                onChange={(e) => setInjury(e.target.value)}
                class="form-control"
                placeholder={LabPatientId?.InjuryCondition}
              />
            </div>
          </div>
          <div className="container">
            <div className="row mb-3">
              <FormLabel className="fw-bold text-dark">
                Choose Old Prescription
              </FormLabel>
              <Form.Control
                onChange={(e) => setOldPrescription(e.target.value)}
                type="file"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          {/* <Button  variant="danger"><FontAwesomeIcon icon={faCancel} className='fs-5 me-2' />Reject</Button> */}
          <Button variant="success" onClick={() => EditReferalLabPatient()}>
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
          <Modal.Title></Modal.Title>
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
          <Button variant="success" onClick={deleteBtnClose}>
            Cancle
          </Button>
          <Button variant="danger" onClick={DeleteLabpatient}>
            <FontAwesomeIcon icon={faCancel} className=" me-2" />
            Delete
          </Button>
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

      <Modal
        show={show3}
        onHide={handleClose3}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> REFERRAL HOSPITAL LAB</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: "center", padding: "20px" }}>
            <p style={{ fontSize: "18px", color: "#333" }}>
              Are you sure you want to refer
              <b style={{ color: "red" }}>
                {`${LabPatientId?.LabPatientsFname} ${LabPatientId?.LabPatientsLname}`}
              </b>
              ?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose3}>
            Cancle
          </Button>
          <Button variant="success" onClick={ReferToPatient}>
            <FontAwesomeIcon icon={faCheck} className=" me-2" />
            Refer
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show4}
        onHide={handleClose4}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> LAB TEST LIST</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "white" }}>
          <Table bordered>
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Test Name</th>
              </tr>
            </thead>
            <tbody>
              {LabPatientId?.Labtests?.map((item, i) => {
                return (
                  <tr>
                    <td>{i+1}</td>
                    <td>{item?.testName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose4}>
            Cancle
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
