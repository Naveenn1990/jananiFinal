import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";
import {
  BsCheckCircle,
  BsTrash3,
  BsArrowDownCircle,
  BsFileEarmarkZip,
} from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { PiFileTextLight } from "react-icons/pi";
import {
  AiFillFilePdf,
  AiOutlineFilePdf,
  AiOutlineFileWord,
  AiOutlineFileImage,
} from "react-icons/ai";
import { FaTablets, FaCapsules, FaSyringe, FaPills } from "react-icons/fa";
import axios from "axios";

function PatientDashboard() {
  const [acc, setacc] = useState(true);
  const [acc1, setacc1] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("PatientUser"));
  console.log(user);
  const [upcomapp, setUpcomapp] = useState(true);
  const [pastapp, setPastapp] = useState(false);

  console.log(user?.Firstname);

  const [AppointmentList, setAppointmentList] = useState([]);

  const getAppointmentList = () => {
    axios
      .get("http://localhost:8521/api/user/getlist")
      .then(function (response) {
        // handle success
        const data = response.data.Info?.filter(
          (item) => item?.PatientId == user?._id
        );
        setAppointmentList(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getAppointmentList();
  }, []);

  console.log(AppointmentList, "jkjkj");

  return (
    <>
      <div style={{ backgroundColor: "#F0F3FB" }}>
        <div className="container pt-3">
          <div className="h-100 rounded shadow-sm bg-white mb-3">
            <div className="row justify-content-between align-items-center ">
              <div className="col-md-4 mb-3 ">
                <img
                  className="img-fluid"
                  src="./img/patient-dashboard-img.png"
                  alt="welcome"
                />
              </div>
              <div className="col-md-8 ">
                <div
                  className="text-start lh-base p-2 "
                  style={{ textAlign: "justify" }}
                >
                  <p>Welcome back</p>
                  <h2 style={{ color: "#2196F3" }}>{user?.Firstname}</h2>
                  <p>
                    We would like to take this opportunity to welcome you to our
                    practice and to thank you for choosing our physicians to
                    participate in your healthcare. We look forward to providing
                    you with personalized, comprehensive health care focusing on
                    wellness and prevention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* blood heart code from here */}
        <div className="container mb-5">
          <div className="row">
            {/* <div className='col-lg-3 col-md-6 mb-4'>
                            <div className="card p-4 border-0  ">
                                <img src='./img/patient-dashboard-img-5.png' width='50px' className='mb-3 img-fluid' alt='' />
                                <div className="card-body text-end">
                                    <h5 className="card-title mb-2">Blood </h5>
                                    <h4 className="card-subtitle mb-2" style={{ color: "#4caf50" }}>110/70</h4>
                                    <p className="card-text"><BiTrendingUp style={{ color: '#4caf50', fontSize: '30px' }} />10% Higher Then Last Month</p>

                                </div>
                            </div>
                        </div> */}

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card p-4 border-0">
                <img
                  src="./img/patient-dashboard-img-2.png"
                  width="50px"
                  className="mb-3"
                  alt=""
                />
                <div className="card-body text-end">
                  <h5 className="card-title mb-2">Blood Pressure</h5>
                  <h4
                    className="card-subtitle mb-2"
                    style={{ color: "#4caf50" }}
                  >
                    {AppointmentList[0]?.bp}
                  </h4>
                  <p className="card-text">
                    {/* <BiTrendingDown
                      style={{ color: "#FD801B", fontSize: "30px" }}
                    /> */}
                    {/* 07% Less Then Last Month */}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card p-4 border-0">
                <img
                  src="./img/patient-dashboard-img-3.png"
                  width="50px"
                  className="mb-3"
                  alt=""
                />
                <div className="card-body text-end">
                  <h5 className="card-title mb-2">Glucose Level</h5>
                  <h4
                    className="card-subtitle mb-2"
                    style={{ color: "#4caf50" }}
                  >
                    {AppointmentList[0]?.suger}
                  </h4>
                  <p className="card-text">
                    {/* <BiTrendingUp
                      style={{ color: "#4caf50", fontSize: "30px" }}
                    /> */}
                    {/* 112% Higher Then Last Month */}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card p-4 border-0">
                <img
                  src="./img/patient-dashboard-img-4.png"
                  width="50px"
                  className="mb-3"
                  alt=""
                />
                <div className="card-body text-end">
                  <h5 className="card-title mb-2">Pulse Rate</h5>
                  <h4
                    className="card-subtitle mb-2"
                    style={{ color: "#4caf50" }}
                  >
                    {AppointmentList[0]?.pulserate}
                  </h4>
                  <p className="card-text">
                    {/* <BiTrendingDown
                      style={{ color: "#FD801B", fontSize: "30px" }}
                    /> */}
                    {/* 22% Less Then Last Month */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Rating heart rate and performance rate code from here */}
        {/* <div className='mb-5'>
                    <div className='container bg-white rounded overflow-hidden'>
                        <div className="d-flex justify-content-around abdhba_0">
                            <Button
                                className={`a-ele  ${acc ? "active-0 " : ""}`}
                                onClick={() => {
                                    setUpcomapp(true);
                                    setPastapp(false);
                                    setacc(true)
                                    setacc1(false)
                                }}

                            >
                                Upcoming Appointment
                            </Button>


                            <Button
                                className={`a-ele  ${acc1 ? "active-0 " : ""}`}

                                onClick={() => {
                                    setUpcomapp(false);
                                    setPastapp(true);
                                    setacc(false)
                                    setacc1(true)
                                }}
                            >
                                Past appointment
                            </Button>
                        </div>

                        {upcomapp ? (
                            <>

                                <Table responsive style={{width:'1200px'}}>

                                    <thead>
                                        <tr className="admin-table-head" >
                                            <th className="fw-bold">image</th>
                                            <th className="fw-bold">Patient Name</th>
                                            <th className="fw-bold">Date & Time</th>
                                            <th className="fw-bold">Treatement</th>
                                            <th className="fw-bold">Contact</th>
                                            <th className="fw-bold">Status</th>
                                            <th className="fw-bold">Location</th>
                                            <th className="fw-bold">Actions </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="admin-table-row" >

                                            <td><img src='./img/admin-doctors-list-1.jpg' alt='' className='rounded-circle bg-white shadow-sm p-1' width='40px' height='40px' /></td>


                                            <td className=" ">
                                                Sarah Smith
                                            </td>

                                            <td>12 June 12:30 PM</td>
                                            <td>CT SCAN</td>
                                            <td>+12121501</td>

                                            <td>
                                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Confirm</div>
                                            </td>

                                            <td>Singapoor Layout <br /> Banglore</td>

                                            <td>
                                                <div className="d-flex gap-2">
                                                    <button className="me-2 fs-5" style={{ border: 'none', color: 'Orange' }}>
                                                        <BsCheckCircle style={{ color: '#4caf50', fontSize: '25px' }} />
                                                    </button>

                                                    <button className="fs-5" style={{ border: 'none', color: 'red' }} >
                                                        <ImCancelCircle style={{ color: '#FD801B', fontSize: '25px' }} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="admin-table-row" >

                                            <td><img src='./img/admin-doctors-list-2.jpg' alt='' className='rounded-circle bg-white shadow-sm p-1' width='40px' height='40px' /></td>


                                            <td className=" ">
                                                Sarah Smith
                                            </td>

                                            <td>12 June 12:30 PM</td>
                                            <td>CT SCAN</td>
                                            <td>+12121501</td>

                                            <td>
                                                <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Canceled</div>
                                            </td>

                                            <td>Singapoor Layout <br /> Banglore</td>

                                            <td>
                                                <div className="d-flex gap-2">
                                                    <button className="me-2 fs-5" style={{ border: 'none', color: 'Orange' }}>
                                                        <BsCheckCircle style={{ color: '#4caf50', fontSize: '25px' }} />
                                                    </button>

                                                    <button className="fs-5" style={{ border: 'none', color: 'red' }} >
                                                        <ImCancelCircle style={{ color: '#FD801B', fontSize: '25px' }} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="admin-table-row" >

                                            <td><img src='./img/admin-doctors-list-3.jpg' alt='' className='rounded-circle bg-white shadow-sm p-1' width='40px' height='40px' /></td>


                                            <td className=" ">
                                                Sarah Smith
                                            </td>

                                            <td>12 June 12:30 PM</td>
                                            <td>CT SCAN</td>
                                            <td>+12121501</td>

                                            <td>
                                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Confirm</div>
                                            </td>

                                            <td>Singapoor Layout <br /> Banglore</td>

                                            <td>
                                                <div className="d-flex gap-2">
                                                    <button className="me-2 fs-5" style={{ border: 'none', color: 'Orange' }}>
                                                        <BsCheckCircle style={{ color: '#4caf50', fontSize: '25px' }} />
                                                    </button>

                                                    <button className="fs-5" style={{ border: 'none', color: 'red' }} >
                                                        <ImCancelCircle style={{ color: '#FD801B', fontSize: '25px' }} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="admin-table-row" >

                                            <td><img src='./img/admin-doctors-list-4.jpg' alt='' className='rounded-circle bg-white shadow-sm p-1' width='40px' height='40px' /></td>


                                            <td className=" ">
                                                Sarah Smith
                                            </td>

                                            <td>12 June 12:30 PM</td>
                                            <td>CT SCAN</td>
                                            <td>+12121501</td>

                                            <td>
                                                <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Canceled</div>
                                            </td>

                                            <td>Singapoor Layout <br /> Banglore</td>

                                            <td>
                                                <div className="d-flex gap-2">
                                                    <button className="me-2 fs-5" style={{ border: 'none', color: 'Orange' }}>
                                                        <BsCheckCircle style={{ color: '#4caf50', fontSize: '25px' }} />
                                                    </button>

                                                    <button className="fs-5" style={{ border: 'none', color: 'red' }} >
                                                        <ImCancelCircle style={{ color: '#FD801B', fontSize: '25px' }} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="admin-table-row" >

                                            <td><img src='./img/admin-doctors-list-5.jpg' alt='' className='rounded-circle bg-white shadow-sm p-1' width='40px' height='40px' /></td>


                                            <td className=" ">
                                                Sarah Smith
                                            </td>

                                            <td>12 June 12:30 PM</td>
                                            <td>CT SCAN</td>
                                            <td>+12121501</td>

                                            <td>
                                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Confirm</div>
                                            </td>

                                            <td>Singapoor Layout <br /> Banglore</td>

                                            <td>
                                                <div className="d-flex gap-2">
                                                    <button className="me-2 fs-5" style={{ border: 'none', color: 'Orange' }}>
                                                        <BsCheckCircle style={{ color: '#4caf50', fontSize: '25px' }} />
                                                    </button>

                                                    <button className="fs-5" style={{ border: 'none', color: 'red' }} >
                                                        <ImCancelCircle style={{ color: '#FD801B', fontSize: '25px' }} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="admin-table-row" >

                                            <td><img src='./img/admin-doctors-list-6.jpg' alt='' className='rounded-circle bg-white shadow-sm p-1' width='40px' height='40px' /></td>


                                            <td className=" ">
                                                Sarah Smith
                                            </td>

                                            <td>12 June 12:30 PM</td>
                                            <td>CT SCAN</td>
                                            <td>+12121501</td>

                                            <td>
                                                <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Canceled</div>
                                            </td>

                                            <td>Singapoor Layout <br /> Banglore</td>

                                            <td>
                                                <div className="d-flex gap-2">
                                                    <button className="me-2 fs-5" style={{ border: 'none', color: 'Orange' }}>
                                                        <BsCheckCircle style={{ color: '#4caf50', fontSize: '25px' }} />
                                                    </button>

                                                    <button className="fs-5" style={{ border: 'none', color: 'red' }} >
                                                        <ImCancelCircle style={{ color: '#FD801B', fontSize: '25px' }} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </Table>

                            </>
                        ) : (
                            <>
                                {pastapp ? (
                                    <>

                                        <Table responsive>

                                            <thead>
                                                <tr className="admin-table-head" >
                                                    <th className="fw-bold">image</th>
                                                    <th className="fw-bold">Patient Name</th>
                                                    <th className="fw-bold">Date & Time</th>
                                                    <th className="fw-bold">Treatement</th>
                                                    <th className="fw-bold">Contact</th>
                                                    <th className="fw-bold">Status</th>
                                                    <th className="fw-bold">Location</th>
                                                    <th className="fw-bold">Actions </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="admin-table-row" >

                                                    <td><img src='./img/admin-doctors-list-6.jpg' alt='' className='rounded-circle bg-white shadow-sm p-1' width='40px' height='40px' /></td>


                                                    <td className=" ">
                                                        Sarah Smith
                                                    </td>

                                                    <td>12 June 12:30 PM</td>
                                                    <td>CT SCAN</td>
                                                    <td>+12121501</td>

                                                    <td>
                                                        <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Confirm</div>
                                                    </td>

                                                    <td>Singapoor Layout <br /> Banglore</td>

                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <button className="me-2 fs-5" style={{ border: 'none', color: 'Orange' }}>
                                                                <BsCheckCircle style={{ color: '#4caf50', fontSize: '25px' }} />
                                                            </button>

                                                            <button className="fs-5" style={{ border: 'none', color: 'red' }} >
                                                                <ImCancelCircle style={{ color: '#FD801B', fontSize: '25px' }} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="admin-table-row" >

                                                    <td><img src='./img/admin-doctors-list-5.jpg' alt='' className='rounded-circle bg-white shadow-sm p-1' width='40px' height='40px' /></td>


                                                    <td className=" ">
                                                        Sarah Smith
                                                    </td>

                                                    <td>12 June 12:30 PM</td>
                                                    <td>CT SCAN</td>
                                                    <td>+12121501</td>

                                                    <td>
                                                        <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Canceled</div>
                                                    </td>

                                                    <td>Singapoor Layout <br /> Banglore</td>

                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <button className="me-2 fs-5" style={{ border: 'none', color: 'Orange' }}>
                                                                <BsCheckCircle style={{ color: '#4caf50', fontSize: '25px' }} />
                                                            </button>

                                                            <button className="fs-5" style={{ border: 'none', color: 'red' }} >
                                                                <ImCancelCircle style={{ color: '#FD801B', fontSize: '25px' }} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="admin-table-row" >

                                                    <td><img src='./img/admin-doctors-list-4.jpg' alt='' className='rounded-circle bg-white shadow-sm p-1' width='40px' height='40px' /></td>


                                                    <td className=" ">
                                                        Sarah Smith
                                                    </td>

                                                    <td>12 June 12:30 PM</td>
                                                    <td>CT SCAN</td>
                                                    <td>+12121501</td>

                                                    <td>
                                                        <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Confirm</div>
                                                    </td>

                                                    <td>Singapoor Layout <br /> Banglore</td>

                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <button className="me-2 fs-5" style={{ border: 'none', color: 'Orange' }}>
                                                                <BsCheckCircle style={{ color: '#4caf50', fontSize: '25px' }} />
                                                            </button>

                                                            <button className="fs-5" style={{ border: 'none', color: 'red' }} >
                                                                <ImCancelCircle style={{ color: '#FD801B', fontSize: '25px' }} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="admin-table-row" >

                                                    <td><img src='./img/admin-doctors-list-3.jpg' alt='' className='rounded-circle bg-white shadow-sm p-1' width='40px' height='40px' /></td>


                                                    <td className=" ">
                                                        Sarah Smith
                                                    </td>

                                                    <td>12 June 12:30 PM</td>
                                                    <td>CT SCAN</td>
                                                    <td>+12121501</td>

                                                    <td>
                                                        <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Canceled</div>
                                                    </td>

                                                    <td>Singapoor Layout <br /> Banglore</td>

                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <button className="me-2 fs-5" style={{ border: 'none', color: 'Orange' }}>
                                                                <BsCheckCircle style={{ color: '#4caf50', fontSize: '25px' }} />
                                                            </button>

                                                            <button className="fs-5" style={{ border: 'none', color: 'red' }} >
                                                                <ImCancelCircle style={{ color: '#FD801B', fontSize: '25px' }} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr className="admin-table-row" >

                                                    <td><img src='./img/admin-doctors-list-2.jpg' alt='' className='rounded-circle bg-white shadow-sm p-1' width='40px' height='40px' /></td>


                                                    <td className=" ">
                                                        Sarah Smith
                                                    </td>

                                                    <td>12 June 12:30 PM</td>
                                                    <td>CT SCAN</td>
                                                    <td>+12121501</td>

                                                    <td>
                                                        <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Confirm</div>
                                                    </td>

                                                    <td>Singapoor Layout <br /> Banglore</td>

                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <button className="me-2 fs-5" style={{ border: 'none', color: 'Orange' }}>
                                                                <BsCheckCircle style={{ color: '#4caf50', fontSize: '25px' }} />
                                                            </button>

                                                            <button className="fs-5" style={{ border: 'none', color: 'red' }} >
                                                                <ImCancelCircle style={{ color: '#FD801B', fontSize: '25px' }} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="admin-table-row" >

                                                    <td><img src='./img/admin-doctors-list-1.jpg' alt='' className='rounded-circle bg-white shadow-sm p-1' width='40px' height='40px' /></td>


                                                    <td className=" ">
                                                        Sarah Smith
                                                    </td>

                                                    <td>12 June 12:30 PM</td>
                                                    <td>CT SCAN</td>
                                                    <td>+12121501</td>

                                                    <td>
                                                        <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Canceled</div>
                                                    </td>

                                                    <td>Singapoor Layout <br /> Banglore</td>

                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <button className="me-2 fs-5" style={{ border: 'none', color: 'Orange' }}>
                                                                <BsCheckCircle style={{ color: '#4caf50', fontSize: '25px' }} />
                                                            </button>

                                                            <button className="fs-5" style={{ border: 'none', color: 'red' }} >
                                                                <ImCancelCircle style={{ color: '#FD801B', fontSize: '25px' }} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </Table>

                                    </>
                                ) : (
                                    <>

                                    </>
                                )}
                            </>
                        )}


                    </div>



                </div> */}

        {/* medication and report document coding start from here */}

        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div class="card border-0 px-3">
                <div class="card-body p-0">
                  <h5 class="card-title text-start mb-3">Medications</h5>
                  {AppointmentList[0]?.medicineInfo.map((val) => {
                    return (
                      <div className="d-flex justify-content-between">
                        <p class="card-text">
                          <FaTablets
                            className=" fs-5 me-2"
                            style={{ color: "#4CAF50" }}
                          />
                          {val.medicineName}
                        </p>
                        <span style={{ width: "58px" }}>
                          {val.morningDose}-{val.noonDose}-{val.eveDose}-
                          {val.nightDose}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div class="card border-0">
                <div class="card-body">
                  <h5 class="card-title mb-3">Reports/Documents</h5>
                  {AppointmentList[0]?.investigationList.map((val) => {
                    return (
                      <div className="border rounded d-flex justify-content-between p-2 mb-3">
                        <div>
                          <AiOutlineFilePdf
                            className="me-1 fs-4"
                            style={{ color: "#F66043" }}
                          />
                          <a
                            href={`http://localhost:8521/Patient/${val.investigationIncludeInReport}`}
                            target="blank_"
                          >
                            {" "}
                            <span>{val.investigationName}</span>
                          </a>
                        </div>
                        <div className="d-flex gap-2"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientDashboard;
