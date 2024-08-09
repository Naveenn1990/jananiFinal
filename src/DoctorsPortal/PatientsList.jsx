import {
  faFilePdf,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaUserTag } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

export const PatientsList = () => {
  const doctorData = JSON.parse(sessionStorage.getItem("DoctorDetails"));
  const navigate = useNavigate();
  const [show, setShow] = useState();
  const ReadMoreClose = () => setShow(false);
  const ReadMoreShow = () => setShow(true);
  const [ShowPatientData, setShowPatientData] = useState("");

  const [pmoShow, setpmoShow] = useState(false);
  const [show1, setShow1] = useState();
  const medHistoryClose1 = () => setShow1(false);
  const medHistoryShow1 = () => setShow1(true);

  const [show2, setShow2] = useState();
  const medHistoryClose2 = () => setShow2(false);
  const medHistoryShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const [selectedPatient_Surgery, setselectedPatient_Surgery] = useState({});
  const [showSurgery, setShowSurgery] = useState(false);
  const handleCloseSurgery = () => setShowSurgery(false);
  const handleShowSurgery = (item) => {
    setShowSurgery(true);
    setselectedPatient_Surgery(item);
  };
  const [selectedCauseid_Surgery, setselectedCauseid_Surgery] = useState();
  const [SurgeryDoctor, setSurgeryDoctor] = useState([]);
  const [SelectedDoctor, setSelectedDoctor] = useState();

  const [GetDepartmentData, setGetDepartmentData] = useState([]);
  const [SelectedDepartment, setSelectedDepartment] = useState();

  const [surgery, setsurgery] = useState([]);
  const [Selectedsurgery, setSelectedsurgery] = useState();

  const [ReasonForSurgery, setReasonForSurgery] = useState();

  useEffect(() => {
    GetDepartment();
    Getsurgery();
  }, []);

  useEffect(() => {
    if (SelectedDepartment) {
      getDoctors();
    }
  }, [SelectedDepartment]);

  const Getsurgery = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/admin/Getsurgery");
      if (res.status === 200) {
        setsurgery(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDoctors = () => {
    axios
      .get("http://localhost:8521/api/Doctor/getDoctorsList")
      .then(function (response) {
        // handle success
        console.log("doctors", response.data.DoctorsInfo);

        setSurgeryDoctor(
          response.data.DoctorsInfo?.filter(
            (data) =>
              data.DoctorType === "Surgery" &&
              data.Department === SelectedDepartment
          )
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const GetDepartment = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getDepartment"
      );
      if (res.status === 200) {
        setGetDepartmentData(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ReferSurgery = async (e) => {
    e.preventDefault();
    if (
      !selectedCauseid_Surgery ||
      !SelectedDepartment ||
      !SelectedDoctor ||
      !Selectedsurgery ||
      !ReasonForSurgery
    ) {
      alert("Please fill all the fields");
    } else {
      try {
        const abcd = selectedCauseid_Surgery?.split("-");
        const ssurgery = Selectedsurgery?.split("-");
        const doct = SelectedDoctor?.split("-");
        const config = {
          url: "/AddSurgeryPatients",
          baseURL: "http://localhost:8521/api/admin",
          method: "post",
          headers: { "content-type": "application/json" },
          data: {
            PatientId: selectedPatient_Surgery?._id,
            PatientName:
              selectedPatient_Surgery?.Firstname +
              " " +
              selectedPatient_Surgery?.Lastname,
            CauseId: abcd[0],
            CauseName: abcd[1],
            SurgeryId: ssurgery[0],
            SurgeryName: ssurgery[1],
            DepartmentName: SelectedDepartment,
            DoctorID: doct[0],
            DoctorName: doct[1],
            ReasonForSurgery: ReasonForSurgery,
            ReferedDoctorId: doctorData?._id,
            ReferedDoctorName:
              doctorData?.Firstname + " " + doctorData?.Lastname,
          },
        };
        axios(config).then((res) => {
          if (res.status === 200) {
            alert(res.data.success);
            Getsurgery();
            window.location.reload();
          }
        });
      } catch (error) {
        console.log(error);
        alert(error.response.data.error);
      }
    }
  };

  const createPDF = async () => {
    const input = document.getElementById("pdf");
    const options = { scrollY: -window.scrollY };
    const canvas = await html2canvas(input, options);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", [canvas.width, canvas.height]);
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("Prescription.pdf");
  };
  const doctor = JSON.parse(sessionStorage.getItem("DoctorDetails"));
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

  const [SelectTime, setSelectTime] = useState("");

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

  const [reasonForRecommendationOfIPD, setreasonForRecommendationOfIPD] =
    useState("");
  const getDocReqFromOPDtoIPD = async () => {
    if (!selectedPatient || !doctorData?._id) {
      return alert("Something went wrong! Please refresh and try again!");
    }
    if (!reasonForRecommendationOfIPD) {
      return alert("Please add reason for recommendation.");
    }
    try {
      const config = {
        url: "/user/getDocReqFromOPDtoIPD",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          requestedDoc: doctorData?._id,
          patientid: selectedPatient,
          reasonForRecommendationOfIPD,
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
    if (!Topic) {
      return alert("Please add the topic, It is a required field!");
    }
    if (!description) {
      return alert("Please add the description, It is a required field!");
    }
    if (!doctorData?._id || !chosenPatient) {
      return alert(
        "Something went wrong! Please refresh the page and try again!"
      );
    }
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
        getpatientlist();
        historyList();
        alert(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      return alert("SOmethign went wrong!!! Please try again...");
    }
  };

  useEffect(() => {
    getpatientlist();
    getAppointmentList();
  }, []);

  const [patientHistoryList, setpatientHistoryList] = useState([]);
  async function historyList() {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/user/HistoryListOfAllPatients"
      );
      if (res.status === 200) {
        setpatientHistoryList(res.data.historylist);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    historyList();
  }, []);

  const [filteredPatients, setFilteredPatients] = useState([]);

  useEffect(() => {
    if (FilterPatientType === "OPD") {
      setFilteredPatients([
        ...patientlist?.filter(
          (val) =>
            val?.registrationType === FilterPatientType &&
            val.consultationBillDetails[0]?.Doctor?._id?.toString() ===
              doctor?._id?.toString()
        ),
      ]);
    }
    if (FilterPatientType === "IPD") {
      setFilteredPatients([
        ...patientlist?.filter(
          (val) =>
            val?.registrationType === FilterPatientType &&
            val?.assigndocts.some(
              (data) =>
                data?.doctorsId?._id?.toString() === doctor?._id?.toString()
            )
        ),
      ]);
    }
  }, [patientlist, FilterPatientType]);

  const [selectedcauseid, setselectedcauseid] = useState("");
  const [Patientcauseid, setPatientcauseid] = useState("");

  // console.log("patientlist: ", patientlist);
  // console.log("selectedcauseid43493:", selectedcauseid);
  // console.log("filteredPatients: ", filteredPatients);
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
      <hr />
      <Container className="p-2">
        {FilterPatientType === "OPD" ? (
          <h3
            className="text-center"
            style={{
              fontFamily: "Arial, sans-serif",
              color: "#333",
              textTransform: "uppercase",
              letterSpacing: "1px",
              margin: "20px 0",
            }}
          >
            <b>Out Patient's</b>
          </h3>
        ) : (
          <h3
            className="text-center"
            style={{
              fontFamily: "Arial, sans-serif",
              color: "#333",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            <b>In Patient's</b>
          </h3>
        )}
        <hr />
        <div className="row mb-4">
          {filteredPatients?.map((item) => {
            return (
              <div className="col-lg-4 mb-3">
                <Card
                  style={{
                    width: "20rem",
                    boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Card.Header>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="d-flex gap-3">
                        <div>
                          {item?.profilepic ? (
                            <img
                              alt=""
                              src={`http://localhost:8521/PatientREG/${item?.profilepic}`}
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                margin: "4px",
                              }}
                            />
                          ) : (
                            <FaUserTag
                              style={{
                                fontSize: "50px",
                                borderRadius: "50%",
                                margin: "4px",
                              }}
                            />
                          )}
                        </div>
                        <div>
                          <div>
                            <b>Name : </b>
                            <span
                              className="fw-bold"
                              style={{ color: "rgb(32, 139, 140)" }}
                            >
                              {item?.Firstname} {item?.Lastname}
                            </span>
                          </div>
                          <div>
                            <b>Patient Id : </b>
                            <span
                              className="fw-bold"
                              style={{ color: "rgb(32, 139, 140)" }}
                            >
                              {item?.PatientId}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Header>

                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <div className=" align-items-center justify-content-between">
                        <div className="text-center">
                          <b>Patient Medical Details : </b>
                        </div>
                        <div className="d-flex justify-content-evenly mt-2">
                          <button
                            title="past medical observation"
                            className="table-details-btn "
                            onClick={() => {
                              setchosenPatient(item._id);
                              medHistoryShow1();
                            }}
                            style={{ width: "65px" }}
                          >
                            PMO
                            <span
                              style={{
                                marginLeft: "2px",
                                fontSize: "15px",
                              }}
                            >
                              +
                            </span>
                          </button>
                          <button
                            title="past medical observation"
                            className="table-details-btn"
                            onClick={() => {
                              setchosenPatient(item._id);
                              setpmoShow(true);
                            }}
                            style={{ width: "65px" }}
                          >
                            PMO
                            <GrView
                              style={{ marginLeft: "2px", fontSize: "11px" }}
                            />
                          </button>
                        </div>
                      </div>

                      <div className=" align-items-center justify-content-between mt-2">
                        <div className="text-center">
                          {" "}
                          <b>Daily Doctor Reports : </b>
                        </div>
                        <div className="d-flex justify-content-evenly mt-2">
                          {FilterPatientType === "IPD" ? (
                            <button
                              title="Daily Doctor report"
                              className="table-details-btn"
                              onClick={() => {
                                handleShow3();
                                setselectedcauseid(item);
                              }}
                              style={{ width: "65px" }}
                            >
                              DDR{" "}
                              <span
                                style={{
                                  marginLeft: "2px",
                                  fontSize: "15px",
                                }}
                              >
                                +
                              </span>
                            </button>
                          ) : (
                            <></>
                          )}

                          {FilterPatientType === "IPD" ? (
                            <button
                              title="Daily Doctor report"
                              className="table-details-btn "
                              onClick={() => {
                                handleShow5();
                                setselectedcauseid(item);
                              }}
                            >
                              DDR{" "}
                              <GrView
                                style={{ marginLeft: "2px", fontSize: "11px" }}
                              />
                            </button>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                      {FilterPatientType === "OPD" ? (
                        <div>
                          <div className="text-center">
                            {" "}
                            <b>Prescription : </b>
                          </div>
                          <div className="mt-2">
                            <button
                              title="Daily Doctor report"
                              className="table-details-btn mb-2"
                              onClick={() => {
                                handleShow6();
                                setselectedcauseid(item);
                              }}
                            >
                              Prescription
                            </button>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                      {FilterPatientType === "IPD" ? (
                        <div
                          className=" justify-content-between mt-2"
                          style={{ display: "flex" }}
                        >
                          <div>
                            <b>Other Reports</b>
                            <div>
                              <button
                                title="Daily Doctor report"
                                className="table-details-btn"
                                // onClick={() => {
                                //   setchosenPatient(item._id);
                                //   medHistoryShow1();
                                // }}
                              >
                                Other Reports
                              </button>
                            </div>
                          </div>
                          <div>
                            <b>Refer for Surgery</b>
                            <div>
                              <button
                                title="Daily Doctor report"
                                className="table-details-btn"
                                onClick={() => {
                                  handleShowSurgery(item);
                                }}
                              >
                                Refer +
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {/* <p>Blood Group: O+</p> */}
                      <p className="d-flex justify-content-between">
                        {/* <span>
                          Reports:{" "}
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="text-danger"
                          />
                        </span> */}
                        {item.registrationType === "OPD" ? (
                          <span>
                            <Button
                              onClick={() => {
                                setselectedPatient(item?._id);
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
                        onClick={() => {
                          ReadMoreShow();
                          setShowPatientData(item);
                        }}
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
      <Modal show={show} onHide={ReadMoreClose}>
        <Modal.Header className="all-bg-green text-light" closeButton>
          <Modal.Title>Patient Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="all-bg-green ">
          <div className="row" style={{ color: "white" }}>
            <div className="">
              <img
                alt=""
                // src="./img/department-img-1.jpg"
                src={`http://localhost:8521/PatientREG/${ShowPatientData?.profilepic}`}
                style={{ width: "100%", height: "300px" }}
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
                  <b>NAME</b> :{" "}
                  {`${ShowPatientData?.Firstname} ${ShowPatientData?.Lastname}`}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>EmailID</b> : {ShowPatientData?.Email}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Mobile</b> : {ShowPatientData?.PhoneNumber}
                </h6>
                {/* <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Occupation</b> : Engineer
                </h6> */}
              </div>
            </div>
            {/* <div className="col-lg-8">
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
            </div> */}
          </div>
          {/* <h6 style={{ marginTop: "4%", color: "white" }}>
            Past Visit History
          </h6> */}
          {/* <Table
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
                 
                </td>
              </tr>
            </tbody>
          </Table> */}
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
      <Modal size="md" show={show1} onHide={medHistoryClose1}>
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
              <label className="col-md-4">Topic</label>
              <input
                className="col-md-8"
                type="text"
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
              <label className="col-md-4">Description</label>
              <textarea
                className="col-md-8"
                cols={30}
                rows={5}
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
              <label className="col-md-4">Documents (optional)</label>
              <input
                className="col-md-8"
                type="file"
                onChange={(e) => setdocs(e.target.files)}
                multiple
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={addMedicalHistory} variant="primary">
            Add Medical details
          </Button>
          <button onClick={medHistoryClose1} className="btn btn-danger">
            Close
          </button>
        </Modal.Footer>
      </Modal>
      <Modal size="lg" show={pmoShow} onHide={() => setpmoShow(false)}>
        <Modal.Header className="all-bg-green text-light">
          <Modal.Title>Medical Records</Modal.Title>
        </Modal.Header>
        <Modal.Body className="all-bg-green ">
          <div>
            {patientHistoryList
              ?.find(
                (data) => data?._id?.toString() === chosenPatient?.toString()
              )
              ?.medicalHistory?.map((item) => {
                return (
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "10px",
                      padding: "10px",
                    }}
                  >
                    <section>
                      <p className="icon">
                        <img
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                          src={`http://localhost:8521/Doctor/${item?.addedByDoctor?.ProfileImg}`}
                          alt=""
                        />
                      </p>
                      <div className="details">
                        <p>{item?.topic}</p>
                        <p>{item?.description}</p>
                        {item?.docs?.length ? (
                          item?.docs?.map((val, i) => {
                            return (
                              <p>
                                <a
                                  href={`http://localhost:8521/PatientREG/${val}`}
                                  target="blank_"
                                >
                                  View Document
                                </a>
                              </p>
                            );
                          })
                        ) : (
                          <></>
                        )}

                        <div
                          className="text-end fw-bold"
                          style={{ fontSize: "12px" }}
                        >
                          <span>
                            {moment(item?.currDate).format("DD/MM/YYYY")}
                          </span>{" "}
                          <br />
                          <span>{item?.currTime}</span>
                        </div>
                      </div>
                    </section>
                  </div>
                );
              })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setpmoShow(false)} className="btn btn-danger">
            Close
          </button>
        </Modal.Footer>
      </Modal>
      <Modal size="md" show={show2} onHide={medHistoryClose2}>
        <Modal.Header className="all-bg-green text-light">
          <Modal.Title>OPD to IPD</Modal.Title>
        </Modal.Header>
        <Modal.Body className="all-bg-green p-4">
          <div style={{ margin: "10px" }}>
            <label style={{ color: "white" }}>
              <b>Reason for admitting the patient to IPD: </b>
            </label>
            <textarea
              style={{ width: "100%" }}
              // cols={50}
              rows={5}
              placeholder="Reason..."
              onChange={(e) => setreasonForRecommendationOfIPD(e.target.value)}
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={medHistoryClose2} className="btn btn-danger">
            Close
          </button>
          <button onClick={getDocReqFromOPDtoIPD} className="btn btn-primary">
            Done
          </button>
        </Modal.Footer>
      </Modal>
      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Select Cause</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select
            onChange={(e) => setPatientcauseid(e.target.value)}
            aria-label="Default select example"
          >
            <option>select cause</option>
            {selectedcauseid?.cause?.map((item) => {
              return <option value={item?._id}>{item?.CauseName}</option>;
            })}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
          {selectedcauseid?.cause?.length > 0 ? (
            <Button
              variant="primary"
              onClick={() =>
                navigate(`/doctorforms`, {
                  state: { item: selectedcauseid, causeId: Patientcauseid },
                })
              }
            >
              Submit
            </Button>
          ) : (
            ""
          )}
        </Modal.Footer>
      </Modal>
      <Modal show={show5} onHide={handleClose5}>
        <Modal.Header closeButton>
          <Modal.Title>Select Cause</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select
            onChange={(e) => setPatientcauseid(e.target.value)}
            aria-label="Default select example"
          >
            <option>select cause</option>
            {selectedcauseid?.cause?.map((item) => {
              return <option value={item?._id}>{item?.CauseName}</option>;
            })}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
          {selectedcauseid?.cause?.length > 0 ? (
            <Button
              variant="primary"
              onClick={() =>
                navigate(`/doctorsviewforms`, {
                  state: { item: selectedcauseid, causeId: Patientcauseid },
                })
              }
            >
              Submit
            </Button>
          ) : (
            ""
          )}
        </Modal.Footer>
      </Modal>
      <Modal show={show6} onHide={handleClose6}>
        <Modal.Header closeButton>
          <Modal.Title>Select Appointment Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select
            onChange={(e) => setSelectTime(e.target.value)}
            aria-label="Default select example"
          >
            <option>select date</option>
            {AppointmentList?.filter(
              (ele) => ele?.PatientId === selectedcauseid?._id
            )?.map((item) => {
              return (
                <option value={JSON.stringify(item)}>
                  {item?.Dateofappointment}
                </option>
              );
            })}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
          {selectedcauseid?.cause?.length > 0 ? (
            <Button
              variant="primary"
              onClick={() =>
                navigate(`/patientcasestudy`, {
                  state: { item: JSON.parse(SelectTime) },
                })
              }
            >
              Submit
            </Button>
          ) : (
            ""
          )}
        </Modal.Footer>
      </Modal>
      <Modal show={showSurgery} onHide={handleCloseSurgery}>
        <Modal.Header closeButton>
          <Modal.Title>
            Refer For Surgery - {selectedPatient_Surgery?.Firstname}&nbsp;
            {selectedPatient_Surgery?.Lastname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label style={{ color: "white" }}>Select Cause</label>
          <Form.Select
            onChange={(e) => setselectedCauseid_Surgery(e.target.value)}
            aria-label="Default select example"
          >
            <option>select Cause</option>
            {selectedPatient_Surgery?.cause?.map((item) => {
              return (
                <option value={`${item?._id}-${item?.CauseName}`}>
                  {item?.CauseName}
                </option>
              );
            })}
          </Form.Select>

          <label style={{ color: "white" }}>Select Surgery</label>
          <Form.Select
            onChange={(e) => setSelectedsurgery(e.target.value)}
            aria-label="Default select example"
          >
            <option>select Surgery</option>
            {surgery?.map((item) => {
              return (
                <option value={`${item?._id}-${item?.SurgeryName}`}>
                  {item?.SurgeryName}
                </option>
              );
            })}
          </Form.Select>

          <label style={{ color: "white" }}>Select Department</label>
          <Form.Select
            onChange={(e) => setSelectedDepartment(e.target.value)}
            aria-label="Default select example"
          >
            <option>select Department</option>
            {GetDepartmentData?.map((item) => {
              return (
                <option value={item?.DepartmentName}>
                  {item?.DepartmentName}
                </option>
              );
            })}
          </Form.Select>

          <label style={{ color: "white" }}>Select Doctor's</label>
          <Form.Select
            onChange={(e) => setSelectedDoctor(e.target.value)}
            aria-label="Default select example"
          >
            <option>select Doctor</option>
            {SurgeryDoctor?.map((item) => {
              return (
                <option
                  value={`${item?._id}-${
                    item?.Firstname + "" + item?.Lastname
                  }`}
                >
                  {item?.Firstname}&nbsp;{item?.Lastname} - {item?.DoctorId}
                </option>
              );
            })}
          </Form.Select>
          <label style={{ color: "white" }}>Reason for Surgery</label>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              onChange={(e) => setReasonForSurgery(e.target.value)}
              className="vi_0"
              style={{ height: "100px" }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSurgery}>
            Close
          </Button>

          <Button variant="primary" onClick={(e) => ReferSurgery(e)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
