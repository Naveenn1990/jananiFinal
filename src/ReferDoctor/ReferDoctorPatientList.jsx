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
import { Link } from "react-router-dom";
import axios from "axios";
import { Pagination, Stack } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export const ReferDoctorPatientList = () => {
  const ReferralDocDetails = JSON.parse(
    sessionStorage.getItem("RDoctorDetails")
  );

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

  const [RefPatientList, setRefPatientList] = useState([]);
  const getRefPatientList = () => {
    axios
      .get(
        `http://localhost:8521/api/Clinic/getRefPatientList/${ReferralDocDetails?._id}`
      )
      .then(function (response) {
        setRefPatientList(response.data.UsersInfo);
        setPagination(response.data.UsersInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log("RefPatientList",RefPatientList);

  // Get Near By Lab List
  const [clinicalLabs, setclinicalLabs] = useState([]);
  const getClinicalLabsList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/ClinicLab/getClinicLabList"
      );
      if (res.status === 200) {
        setclinicalLabs(res.data.ClinicalLabsInfo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [TestCategoryList, setTestCategoryList] = useState([]);
  const getTestCategory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/ClinicLab/gettestcategory"
      );
      setTestCategoryList(res.data.getdata);
    } catch (error) {
      console.log(error);
    }
  };
  //Search
  const [SearchItem, setSearchItem] = useState("");

  const [pagination, setPagination] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(pagination?.length / usersPerPage);
  const changePage = (selected) => {
    setPageNumber(selected);
  };
  const [ViewData, setViewData] = useState("");
  const DeleteLabPatient = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8521/api/Clinic/deletePatientDetails/${ViewData?._id}`
      );
      if (res.status === 200) {
        alert(res.data.success);
        getRefPatientList();
        deleteBtnClose();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  //Edit Patient Details
  const [patientfirstname, setpatientfirstname] = useState("");
  const [patientlastname, setpatientlastname] = useState("");
  const [gender, setgender] = useState("");
  const [DOB, setDOB] = useState("");
  const [Age, setAge] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState();
  const [maritalStatus, setmaritalStatus] = useState("");
  const [Address, setAddress] = useState();
  const [bloodgroup, setbloodgroup] = useState();
  const [Document, setDocument] = useState();
  const [InjuryCondition, setInjuryCondition] = useState();
  const [DateofAppointment, setDateofAppointment] = useState("");

  useEffect(() => {
    setpatientfirstname(ViewData?.Firstname || "");
    setpatientlastname(ViewData?.Lastname || "");
    setgender(ViewData?.Gender || "");
    setmobileno(ViewData?.PhoneNumber || "");
    setemail(ViewData?.Email || "");
    setDOB(ViewData?.DOB || "");
    setAge(ViewData?.age || "");
    setmaritalStatus(ViewData?.MaritalStatus || "");
    setbloodgroup(ViewData?.BloodGroup || "");
    setAddress(ViewData?.Address1 || "");
    setDateofAppointment(ViewData?.appointmentdate || "");
    setInjuryCondition(ViewData?.InjuryCondition || "");
    setDocument(ViewData?.oldprescriptionDoc || "");
  }, [ViewData]);

  const EditPatientlabDetail = async () => {
    const formdata = new FormData();
    try {
      formdata.set("Firstname", patientfirstname);
      formdata.set("Lastname", patientlastname);
      formdata.set("Gender", gender);
      formdata.set("PhoneNumber", mobileno);
      formdata.set("Email", email);
      formdata.set("DOB", DOB);
      formdata.set("age", Age);
      formdata.set("Address1", Address);
      formdata.set("BloodGroup", bloodgroup);
      formdata.set("MaritalStatus", maritalStatus);
      formdata.set("appointmentdate", DateofAppointment);
      formdata.set("InjuryCondition", InjuryCondition);
      formdata.set("oldprescriptionDoc", Document);
      const config = {
        url: "/Clinic/editPatientDetails/" + ViewData?._id,
        method: "post",
        baseURL: "http://localhost:8521/api",
        data: formdata,
      };
      console.log("config", config);
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose();
        getRefPatientList();
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [SelectPincode, setSelectPincode] = useState("");
  const [SelectLab, setSelectLab] = useState("");
  const [SelectTest, setSelectTest] = useState("");

  const ReferlabTest = async () => {
    if(!SelectPincode){
     return alert("Please Select the pincode")
    }
    if(!SelectLab){
      return alert("Please Select the Lab")
    }
     if(!SelectTest){
      return alert("Please Select the Lab Test")
    }
    try {
      const config = {
        url: "/referlabtest/" + ViewData?._id,
        method: "put",
        baseURL: "http://localhost:8521/api/Clinic",
        data: {
          testid: SelectTest,
          labid:SelectLab,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose3();
        getRefPatientList();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getRefPatientList();
    getClinicalLabsList();
    getTestCategory();
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

            {/* <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FontAwesomeIcon icon={faFilter} /> Filtered By
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                <Dropdown.Item href="#">Last 1 Month</Dropdown.Item>
                <Dropdown.Item href="#">Last 6 Month</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            <Link to={"/referaddpatient"}>
              <Button className="green-btn-9"></Button>
            </Link>
          </div>
        </div>
        <Table bordered>
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold">Name</th>
              <th className="fw-bold">Gender</th>
              <th className="fw-bold">Address</th>
              <th className="fw-bold">Mobile</th>
              <th className="fw-bold">DOB</th>
              <th className="fw-bold">Blood Group </th>
              <th className="fw-bold">Diesease </th>
              <th>Refer</th>
              <th className="fw-bold">Actions </th>
            </tr>
          </thead>

          <tbody>
            {RefPatientList?.slice(
              pagesVisited,
              pagesVisited + usersPerPage
            )?.map((item) => {
              if (
                SearchItem === "" ||
                Object.values(item).some((value) =>
                  String(value).toLowerCase().includes(SearchItem.toLowerCase())
                )
              )
                return (
                  <tr className="admin-table-row">
                    <td>{`${item?.Firstname} ${item?.Lastname}`}</td>
                    <td>{item?.Gender}</td>
                    <td>{item?.Address1}</td>
                    <td>{item?.PhoneNumber}</td>
                    <td>
                      <p>{item?.DOB}</p>
                      <p>Age : {item?.age}</p>
                    </td>
                    <td>{item?.BloodGroup}</td>

                    <td>
                      <div
                        className="Diseases-btn"
                        style={{ color: "green", border: "1px solid green" }}
                      >
                        {item?.InjuryCondition}
                      </div>
                    </td>

                    <td>
                      {item?.isRefer === true ?(<>
                         <Button
                         className="mb-2"
                         onClick={() => {
                           handleShow3();
                           setViewData(item);
                         }}
                       >
                         Refer
                       </Button>
                       <Button
                       
                       onClick={()=>{
                         setViewData(item);
                         handleShow4();
                       }}
                       >View list</Button>
                      </>):(<>
                        <Button
                         onClick={() => {
                           handleShow3();
                           setViewData(item);
                         }}
                       >
                         Refer
                       </Button>
                      </>                        
                      )}
                     
                    </td>
                    <td>
                      <div className="d-flex gap-3 ">
                        <CiEdit
                          style={{
                            color: "green",
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            handleShow();
                            setViewData(item);
                          }}
                        />
                        <MdDelete
                          onClick={() => {
                            deleteBtnShow();
                            setViewData(item);
                          }}
                          style={{
                            color: "red",
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                );
            })}
          </tbody>
        </Table>

        <div
          className="my-3 d-flex justify-end"
          style={{ justifyContent: "end" }}
        >
          <Stack spacing={2}>
            <Pagination
              count={pageCount}
              onChange={(event, value) => {
                changePage(value - 1);
              }}
              color="primary"
            />
          </Stack>
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
          <Modal.Title> Edit Patient Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-2 ">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">First Name* </FormLabel>
              <FloatingLabel controlId="floatingEmail" label="First Name">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setpatientfirstname(e.target.value)}
                  value={patientfirstname}
                />
              </FloatingLabel>
            </div>

            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Last Name* </FormLabel>
              <FloatingLabel controlId="floatingName" label="Last Name">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => setpatientlastname(e.target.value)}
                  value={patientlastname}
                />
              </FloatingLabel>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Gender* </FormLabel>
              <Form.Select
                onChange={(e) => setgender(e.target.value)}
                value={gender}
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
              <FloatingLabel controlId="floatingNumber" label="Phone Number">
                <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  onChange={(e) => setmobileno(e.target.value)}
                  value={mobileno}
                />
              </FloatingLabel>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Email* </FormLabel>
              <FloatingLabel controlId="floatingEmail" label="Email">
                <Form.Control
                  type="Email"
                  placeholder="Email"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
              </FloatingLabel>
            </div>

            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Birth Date* </FormLabel>
              <FloatingLabel label="">
                <Form.Control
                  type="date"
                  onChange={(e) => setDOB(e.target.value)}
                  value={DOB}
                />
              </FloatingLabel>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Age* </FormLabel>
              <FloatingLabel controlId="floatingAge" label="Age">
                <Form.Control
                  type="number"
                  placeholder="Age"
                  onChange={(e) => setAge(e.target.value)}
                  value={Age}
                />
              </FloatingLabel>
            </div>
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Marital* </FormLabel>
              <Form.Select
                onChange={(e) => setmaritalStatus(e.target.value)}
                value={maritalStatus}
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
                onChange={(e) => setbloodgroup(e.target.value)}
                value={bloodgroup}
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
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">
                Appointment Date*{" "}
              </FormLabel>
              <FloatingLabel label="">
                <Form.Control
                  type="date"
                  onChange={(e) => setDateofAppointment(e.target.value)}
                  value={DateofAppointment}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className="row mb-3">
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setAddress(e.target.value)}
                value={Address}
              />
            </Form.Group>
          </div>

          <div className="row mb-3">
            <FormLabel className="fw-bold text-dark">
              Injury/Contion*{" "}
            </FormLabel>
            <FloatingLabel className="mb-5" label="Injury/Contion">
              <Form.Control
                type="text"
                placeholder="Injury/Contion"
                onChange={(e) => setInjuryCondition(e.target.value)}
                value={InjuryCondition}
              />
            </FloatingLabel>
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">
                Old Prescription*{" "}
              </FormLabel>

              <Form.Control
                type="file"
                onChange={(e) => setDocument(e.target.files[0])}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button onClick={EditPatientlabDetail} variant="success">
            <FontAwesomeIcon icon={faCheck} className="fs-5 me-2" />
            Update
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

          <Button onClick={DeleteLabPatient} variant="danger">
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
              <img
                alt=""
                src="./img/department-img-1.jpg"
                style={{ width: "100%" }}
              />
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

      <Modal size="md" show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Refer For Lab Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Please Select Pincode</Form.Label>
              <Form.Select onChange={(e) => setSelectPincode(e.target.value)}>
                <option>select Pincode</option>
                {clinicalLabs?.map((item) => {
                  return <option value={item?.zipcode}>{item?.zipcode}</option>;
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Please Select Lab</Form.Label>
              <Form.Select onChange={(e) => setSelectLab(e.target.value)}>
                <option>select Lab</option>
                {clinicalLabs
                  ?.filter((ele) => ele.zipcode === SelectPincode)
                  ?.map((item) => {
                    return (
                      <option value={item?._id}>{item?.ClinicLabName}</option>
                    );
                  })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Select Test</Form.Label>
              <Form.Select onChange={(e) => setSelectTest(e.target.value)}>
                <option>select Test</option>
                {TestCategoryList?.filter(
                  (ele) => ele.LabId === SelectLab
                )?.map((item) => {
                  return <option value={item?._id}>{item?.testcatname}</option>;
                })}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
          <Button variant="primary" onClick={ReferlabTest}>
            Refer
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal size="md" show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
          <Modal.Title>Lab Test List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{backgroundColor:"white",padding:"10px"}}>
            <Table bordered>
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>Test Name</th>
                  <th>Refer lab</th>
                  <th>Report</th>
                </tr>
              </thead>
              <tbody>
                {ViewData?.Labtests?.map((item,i)=>{
                  return(
                    <tr>
                    <td>{i+1}</td>
                    <td>{item?.testid?.testcatname}</td>
                    <td>{item?.labid?.ClinicLabName}</td>
                    <td>
                    <>
                              <span>
                                <a
                                  href={`http://localhost:8521/Doctor/${item?.testReport}`}
                                  target="blank_"
                                >
                                  View Doc
                                </a>
                                <img
                                  src="./img/new.gif"
                                  style={{ width: "40px", height: "30px" }}
                                  alt=""
                                />
                              </span>
                            </>
                    </td>
                  </tr>
                  )
                })}
               
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
