import React, { useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faC,
  faD,
  faM,
  faH,
  faL,
  faArrowUp,
  faArrowDown,
  faMinus,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import {
  BsFillPeopleFill,
  BsFillCalendar2CheckFill,
  BsFileEarmarkPdf,
} from "react-icons/bs";
import { BiCut, BiLogoInternetExplorer } from "react-icons/bi";
import { Modal, ProgressBar } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import moment from "moment";

export const DoctorDashboard = () => {
  const [show, setShow] = useState();

  const ReadMoreClose = () => setShow(false);
  const ReadMoreShow = () => setShow(true);

  const [patientlist, setpatientlist] = useState([]);

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

  useEffect(() => {
    getpatientlist();
  }, []);

  const [AppointmentList, setAppointmentList] = useState([]);

  const getAppointmentList = () => {
    axios
      .get("http://localhost:8521/api/user/getlist")
      .then(function (response) {
        // handle success
        setAppointmentList(response.data.Info);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getAppointmentList();
  }, []);

  const [Doctors, setDoctors] = useState([]);

  const getDoctors = () => {
    axios
      .get("http://localhost:8521/api/Doctor/getDoctorsList")
      .then(function (response) {
        // handle success
        setDoctors(response.data.DoctorsInfo);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getDoctors();
  }, []);

  const today = moment().format("dddd"); // "dddd" format gives the full weekday name
  console.log(today);

  const TodayAppointmet = AppointmentList?.filter(
    (appoint) => appoint.Dateofappointment === moment().format("YYYY-MM-DD")
  );
  console.log("AppointmentList", AppointmentList);
  return (
    <div>
      <Container fluid className="mt-5">
        <div className="row gap-2 align-items-center justify-content-center">
          <div
            className="col-lg-2 text-light p-3  "
            style={{
              backgroundColor: "rgb(10 167 7)",
              width: "250px",
              borderRadius: "10px",
            }}
          >
            <h6 className="fs-4 fw-bold">Todays Patients</h6>
            <BsFillPeopleFill className="me-5 float-start fs-2 mt-2" />
            <span className="fs-2 fw-bold ms-5 ">{patientlist?.length}</span>
            <p>18% Higher Then Last Month</p>
          </div>
          <div
            className="col-lg-2 text-light p-3"
            style={{
              backgroundColor: "rgb(159 154 18",
              width: "250px",
              borderRadius: "10px",
            }}
          >
            <h6 className="fs-4 fw-bold">Appointments</h6>
            <BsFillCalendar2CheckFill className="me-5 float-start fs-2 mt-2" />
            <span className="fs-2 fw-bold ms-5 ">
              {AppointmentList?.length}
            </span>
            <p>21% Higher Then Last Month</p>
          </div>

          <div
            className="col-lg-2 text-light p-3"
            style={{
              backgroundColor: "rgb(171 42 21)",
              width: "250px",
              borderRadius: "10px",
            }}
          >
            <h6 className="fs-4 fw-bold"> Todays Operations</h6>
            <BiCut className="me-5 float-start fs-2 mt-2" />
            <span className="fs-2 fw-bold ms-5 "> 0</span>
            <p>10% Higher Then Last Month</p>
          </div>

          <div
            className="col-lg-2 text-light p-3"
            style={{
              backgroundColor: "rgb(49 139 217)",
              width: "261px",
              borderRadius: "10px",
            }}
          >
            <h6 className="fs-4 fw-bold text-light">Online Appointment</h6>
            <BiLogoInternetExplorer className="me-5 float-start fs-2 mt-2" />
            <span className="fs-2 fw-bold ms-5 ">
              {" "}
              {AppointmentList?.length}
            </span>
            <p>37% Higher Then Last Month</p>
          </div>
        </div>

        <Container className="margin-top">
          <div className="row ">
            <div className="col-lg-6">
              <h3 className="fw-bold">Todays Appointment</h3>
              {TodayAppointmet?.length > 0 ? (
                <Table responsive className="table table-borderless">
                  <thead>
                    <tr className="admin-table-head">
                      <th className="fw-bold">PatientId</th>
                      <th className="fw-bold">Patient</th>
                      <th className="fw-bold">Gender</th>
                      {/* <th className="fw-bold">Last Visit Doc</th> */}
                      <th className="fw-bold">Diseases</th>
                      <th className="fw-bold">Report</th>
                      <th className="fw-bold">Details </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TodayAppointmet?.map((item) => {
                      return (
                        <tr className="admin-table-row">
                          <td className=" me-2">
                            {item?.PatientId ? item?.PatientId : "-"}
                          </td>
                          <td>
                            {item?.Firstname} {item?.Lastname}
                          </td>
                          <td>{item?.Gender}</td>
                          {/* <td>12/05/2016 </td> */}
                          <td>
                            <div
                              className="Diseases-btn"
                              style={{ color: "red", border: "1px solid red" }}
                            >
                              {item?.medicalReason}
                            </div>
                          </td>
                          <td>
                            <a href="#">
                              {" "}
                              <i className="fs-5 text-danger">
                                <BsFileEarmarkPdf />
                              </i>
                            </a>
                          </td>
                          <td>
                            <button
                              onClick={ReadMoreShow}
                              className="table-details-btn"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                      );
                    })}

                    {/* <tr className="admin-table-row">
                    <td className="table-img">
                      <img
                        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                        src="./img/Our-doctors-img-1.jpg"
                        alt=""
                      />
                    </td>
                    <td>Sarah Smith</td>
                    <td>Female</td>
                    <td>12/05/2016 </td>
                    <td>
                      <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Cholera</div>
                    </td>
                    <td>
                      <a href="#"> <i className="fs-5 text-danger" ><BsFileEarmarkPdf /></i></a>
                    </td>
                    <td>
                      <button onClick={ReadMoreShow} className="table-details-btn">
                        Details
                      </button>
                    </td>
                  </tr>

                  <tr className="admin-table-row">
                    <td className="table-img">
                      <img
                        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                        src="./img/Our-doctors-img-1.jpg"
                        alt=""
                      />
                    </td>
                    <td>Airi Satou</td>
                    <td>Male</td>
                    <td>12/05/2016 </td>
                    <td>
                      <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Jaundice</div>
                    </td>
                    <td>
                      <a href="#"> <i className="fs-5 text-danger" ><BsFileEarmarkPdf /></i></a>
                    </td>
                    <td>
                      <button onClick={ReadMoreShow} className="table-details-btn">
                        Details
                      </button>
                    </td>
                  </tr>

                  <tr className="admin-table-row">
                    <td className="table-img">
                      <img
                        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                        src="./img/Our-doctors-img-1.jpg"
                        alt=""
                      />
                    </td>
                    <td>Angelica Ramos</td>
                    <td>Female</td>
                    <td>12/05/2016 </td>
                    <td>
                      <div className="Diseases-btn" style={{ color: 'blue', border: '1px solid blue' }}>Typhod</div>
                    </td>
                    <td>
                      <a href="#"> <i className="fs-5 text-danger" ><BsFileEarmarkPdf /></i></a>
                    </td>
                    <td>
                      <button onClick={ReadMoreShow} className="table-details-btn">
                        Details
                      </button>
                    </td>
                  </tr>

                  <tr className="admin-table-row">
                    <td className="table-img">
                      <img
                        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                        src="./img/Our-doctors-img-1.jpg"
                        alt=""
                      />
                    </td>
                    <td>Ashton Cox</td>
                    <td>Female</td>
                    <td>12/05/2016 </td>
                    <td>
                      <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Maleria</div>
                    </td>
                    <td>
                      <a href="#"> <i className="fs-5 text-danger" ><BsFileEarmarkPdf /></i></a>
                    </td>
                    <td>
                      <button onClick={ReadMoreShow} className="table-details-btn">
                        Details
                      </button>
                    </td>
                  </tr>

                  <tr className="admin-table-row">
                    <td className="table-img">
                      <img
                        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                        src="./img/Our-doctors-img-1.jpg"
                        alt=""
                      />
                    </td>
                    <td>Cara Stevens</td>
                    <td>Male</td>
                    <td>12/05/2016 </td>
                    <td>
                      <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Infection</div>
                    </td>
                    <td>
                      <a href="#"> <i className="fs-5 text-danger" ><BsFileEarmarkPdf /></i></a>
                    </td>
                    <td>
                      <button onClick={ReadMoreShow} className="table-details-btn">
                        Details
                      </button>
                    </td>
                  </tr> */}
                  </tbody>
                </Table>
              ) : (
                <p style={{ marginTop: "20px" }}>
                  There is no Booking's for Today
                </p>
              )}
            </div>

            <div
              className="col-lg-6"
              style={{ overflow: "hidden ", overflowY: "scroll" }}
            >
              <h5 className="fw-bold mb-4">Doctors List</h5>
              <Table responsive className="table table-borderless">
                <thead>
                  <tr className="admin-table-head">
                    <th className="fw-bold">Profile</th>
                    <th className="fw-bold">Doctors name</th>
                    <th className="fw-bold">Contact Number</th>
                  </tr>
                </thead>

                <tbody>
                  {Doctors?.map((item) => {
                    return (
                      <tr className="admin-table-row">
                        <td className=" me-2">
                          <img
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "5px",
                            }}
                            src={`http://localhost:8521/Doctor/${item?.ProfileImg}`}
                            // src=""
                            alt=""
                          />
                        </td>
                        <td>
                          <a href="#">
                            {item?.Firstname}&nbsp;
                            {item?.Lastname}
                          </a>{" "}
                          ({item?.Education})
                        </td>
                        <td>
                          {/* {(item?.mondayweekoff && today == "Monday") ||
                          (item?.tuesdayweekoff && today == "Tuesday") ||
                          (item?.wednesdayweekoff && today == "Wednesday") ||
                          (item?.thrusdayweekoff && today == "Thursday") ||
                          (item?.fridayweekoff && today == "Friday") ||
                          (item?.saturdayweekoff && today == "Saturday") ||
                          (item?.sundayweekoff && today == "Sunday") ? (
                            <button className="btn btn-outline-danger">
                              Absend
                            </button>
                          ) : (
                            <button className="btn btn-outline-success">
                              Availible
                            </button>
                          )} */}
                          {item?.PhoneNumber}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </Container>

        <Container className="mt-5">
          <div className="row">
            {/* <div className="col-lg-6" style={{ overflow: 'hidden ', overflowY: 'scroll' }}>
              <h5 className="fw-bold mb-4">Todo List</h5>
              <ul style={{ fontSize: '16px' }}>

                <li className="row mb-3 ">
                  <div className="row col ">

                    <div className="col-3"><input type="checkbox" /></div>

                    <div className="fw-bold col-6"> <p>Request for festivle holiday</p></div>

                    <div className=" col-3 text-end text-danger " >
                      <FontAwesomeIcon icon={faArrowUp} /> High
                    </div>

                  </div>
                </li>

                <li className="row mb-3 ">
                  <div className="row col ">

                    <div className="col-3"><input type="checkbox" /></div>

                    <div className="fw-bold col-6"> <p>Order new medicine stock</p></div>

                    <div className=" col-3 text-end text-success " >
                      <FontAwesomeIcon icon={faArrowDown} /> Low
                    </div>

                  </div>
                </li>

                <li className="row mb-3 ">
                  <div className="row col ">

                    <div className="col-3"><input type="checkbox" /></div>

                    <div className="fw-bold col-6"> <p>Check patient report</p></div>

                    <div className=" col-3 text-end text-danger " >
                      <FontAwesomeIcon icon={faArrowUp} /> High
                    </div>

                  </div>
                </li>


                <li className="row mb-3 ">
                  <div className="row col ">

                    <div className="col-3"><input type="checkbox" /></div>

                    <div className="fw-bold col-6"> <p>Conference in london</p></div>

                    <div className=" col-3 text-end text-danger " >
                      <FontAwesomeIcon icon={faArrowUp} /> High
                    </div>

                  </div>
                </li>

                <li className="row mb-3 ">
                  <div className="row col ">

                    <div className="col-3"><input type="checkbox" /></div>

                    <div className="fw-bold col-6"> <p>Remind for lunch in hotel</p></div>
                    <div className=" col-3 text-end text-warning " >
                      <FontAwesomeIcon icon={faMinus} /> Normal
                    </div>

                  </div>
                </li>

                <li className="row mb-3 ">
                  <div className="row col ">

                    <div className="col-3"><input type="checkbox" /></div>

                    <div className="fw-bold col-6"> <p>Announcement for</p></div>
                    <div className=" col-3 text-end text-warning " >
                      <FontAwesomeIcon icon={faMinus} /> Normal
                    </div>

                  </div>
                </li>

                <li className="row mb-3 ">
                  <div className="row col ">

                    <div className="col-3"><input type="checkbox" /></div>

                    <div className="fw-bold col-6"> <p>call bus driver</p></div>
                    <div className=" col-3 text-end text-danger " >
                      <FontAwesomeIcon icon={faMinus} /> High
                    </div>

                  </div>

                </li>
                <li className="row mb-3 ">
                  <div className="row col ">

                    <div className="col-3"><input type="checkbox" /></div>

                    <div className="fw-bold col-6"> <p>Web service data load issue</p></div>
                    <div className=" col-3 text-end text-danger " >
                      <FontAwesomeIcon icon={faMinus} /> High
                    </div>

                  </div>
                </li>

                <li className="row mb-3 ">
                  <div className="row col ">

                    <div className="col-3"><input type="checkbox" /></div>

                    <div className="fw-bold col-6"> <p>Java compile error</p></div>
                    <div className=" col-3 text-end text-success " >
                      <FontAwesomeIcon icon={faMinus} /> Low
                    </div>

                  </div>
                </li>

                <li className="row mb-3 ">
                  <div className="row col ">

                    <div className="col-3"><input type="checkbox" /></div>

                    <div className="fw-bold col-6"> <p>Integrate project with spring boot</p></div>
                    <div className=" col-3 text-end text-danger " >
                      <FontAwesomeIcon icon={faMinus} /> High
                    </div>

                  </div>
                </li>

              </ul>
            </div> */}
          </div>
        </Container>
      </Container>

      <Modal size="lg" show={show} onHide={ReadMoreClose}>
        <Modal.Header className="all-bg-green text-light">
          <Modal.Title>Patient Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="all-bg-green">
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
    </div>
  );
};
