import React, { useEffect, useState } from "react";
import "./Adminpanel.css";
import { FaBriefcaseMedical, FaRupeeSign } from "react-icons/fa";
import { GiCutPalm } from "react-icons/gi";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import Select from "react-select";

import { BiHandicap, BiMessageRoundedEdit } from "react-icons/bi";
import { Modal, Table } from "react-bootstrap";

import CanvasJSReact from "@canvasjs/react-charts";
import PageLoader from "./Pageloader";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Dashboard() {
  let adminDetails = sessionStorage.getItem("adminDetails");
  let subadminDetails = sessionStorage.getItem("Subadmin");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const options = {
    // theme: "dark2",
    animationEnabled: true,
    exportFileName: "Patients age",
    exportEnabled: true,
    title: {
      text: "Top Categories of New Year's Resolution",
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}</strong>",
        indexLabel: "{y}",
        indexLabelPlacement: "inside",
        dataPoints: [
          { y: 32, label: "Health" },
          { y: 22, label: "Finance" },
          { y: 15, label: "Education" },
          { y: 19, label: "Career" },
          { y: 5, label: "Family" },
          { y: 7, label: "Real Estate" },
        ],
      },
    ],
  };

  const MobileNumber = [
    { label: "9595959595", value: "9595959595" },
    { label: "9595959591", value: "9595959591" },
    { label: "9595959592", value: "9595959592" },
    { label: "9595959593", value: "9595959593" },
  ];

  const [MNumber, setMNumber] = useState();

  const handleSelect = (data) => {
    setMNumber(data.value);
  };

  useEffect(() => {
    adminDetails = sessionStorage.getItem("adminDetails");
    subadminDetails = sessionStorage.getItem("Subadmin");
    if (!adminDetails && !subadminDetails) {
      alert("Login details are required!!!");
      window.location.assign("/");
    }
  }, []);

  return (
    <div style={{ padding: "1%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Dashboard
        </h6>
        <div class="btn-group pull-right">
          <button
            class="btn deepPink-bgcolor btn-circle btn-outline dropdown-toggle"
            data-bs-toggle="dropdown"
            style={{
              backgroundColor: "#20958c",
              color: "white",
              padding: "0px 10px",
              height: "30px",
              fontSize: "14px",
            }}
          >
            Filter
            {/* <i class="fa fa-angle-down"></i> */}
          </button>
          <ul
            class="dropdown-menu pull-right"
            style={{
              textAlign: "left",
              padding: "14%",
              fontSize: "14px",
              fontWeight: "600",
              color: "#20958c",
            }}
          >
            <li>
              <a
                href="javascript:;"
                style={{ textDecoration: "none", color: "#20958c" }}
              >
                Last Week
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                style={{ textDecoration: "none", color: "#20958c" }}
              >
                Last 15-days
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                style={{ textDecoration: "none", color: "#20958c" }}
              >
                Last 6 months
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit Patient List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <input
                placeholder="Patient Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
              ></input>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="Assigned doctor"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
              ></input>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="Date od Admit"
                type="date"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
              ></input>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="Diseases"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
              ></input>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="Room No"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
              ></input>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: "flex" }}>
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                marginRight: "20px",
                border: "1px solid white",
                padding: "4px 10px",
              }}
              onClick={() => setShow(false)}
            >
              CANCEL
            </button>

            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "4px",
                border: "1px solid white",
                fontWeight: "600",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow(false);
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      <div className="row">
        <div className="col-lg-3" id="box1">
          <div className="dashboardcard">
            <div className="row">
              <div className="col-lg-4">
                <FaBriefcaseMedical
                  style={{ fontSize: "50px", color: "#20958c" }}
                />
              </div>
              <div className="col-lg-8">
                <h6 style={{ fontSize: "15px", fontWeight: "600" }}>
                  Appointments
                </h6>
                <h6
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#20958c",
                  }}
                >
                  210
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3" id="box2">
          <div className="dashboardcard">
            <div className="row">
              <div className="col-lg-4">
                <BiHandicap style={{ fontSize: "50px", color: "#20958c" }} />
              </div>
              <div className="col-lg-8">
                <h6 style={{ fontSize: "15px", fontWeight: "600" }}>
                  New Patients
                </h6>
                <h6
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#20958c",
                  }}
                >
                  120
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3" id="box3">
          <div className="dashboardcard">
            <div className="row">
              <div className="col-lg-4">
                <GiCutPalm style={{ fontSize: "50px", color: "#20958c" }} />
              </div>
              <div className="col-lg-8">
                <h6 style={{ fontSize: "15px", fontWeight: "600" }}>
                  Operations
                </h6>
                <h6
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#20958c",
                  }}
                >
                  52
                </h6>
              </div>
            </div>
          </div>
        </div>
        {subadminDetails ? (
          <></>
        ) : (
          <div className="col-lg-3" id="box4">
            <div className="dashboardcard">
              <div className="row">
                <div className="col-lg-4">
                  <FaRupeeSign style={{ fontSize: "50px", color: "#20958c" }} />
                </div>
                <div className="col-lg-8">
                  <h6 style={{ fontSize: "15px", fontWeight: "600" }}>
                    Hospital Earn..
                  </h6>
                  <h6
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      color: "#20958c",
                    }}
                  >
                    25,000
                  </h6>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div className="row">
        <div className="col-lg-4">
          <CanvasJSChart
            options={options}
          />
        </div>

        <div className="col-lg-4">
          <CanvasJSChart
            options={options}
          />
        </div>

        <div className="col-lg-4">
          <CanvasJSChart
            options={options}
          />
        </div>
      </div> */}

      <div className="row" style={{ marginTop: "4%" }}>
        <div className="col-lg-8" style={{}}>
          <div
            style={{
              padding: "2%",
              margin: "1%",
              // border: "1px solid grey",
              borderRadius: "10px",
              boxShadow: "2px 3px 12px 3px rgba(32,149,140,0.32)",
            }}
          >
            <h6 style={{ fontWeight: "600" }}>BOOKED APPOINTMENT</h6>

            <div className="row">
              <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="btn-group">
                  <a
                    // href="/admin/AddPatient"
                    id="addRow"
                    class="btn btn-info btn-circle"
                    style={{ backgroundColor: "orange", color: "white" }}
                    onClick={() => setShow2(true)}
                  >
                    Add New <i class="fa fa-plus"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="btn-group pull-right">
                  <button
                    class="btn deepPink-bgcolor btn-circle btn-outline dropdown-toggle"
                    data-bs-toggle="dropdown"
                    style={{ backgroundColor: "#20958c", color: "white" }}
                  >
                    Tools
                    {/* <i class="fa fa-angle-down"></i> */}
                  </button>
                  <ul
                    class="dropdown-menu pull-right"
                    style={{
                      textAlign: "left",
                      padding: "14%",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#20958c",
                    }}
                  >
                    <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                      >
                        <i class="fa fa-print"></i> Print{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                      >
                        <i class="fa fa-file-pdf-o"></i> Save as PDF{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                      >
                        <i class="fa fa-file-excel-o"></i> Export to Excel{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <hr></hr> */}
            <Table responsive="md" style={{ marginTop: "1%" }}>
              <thead>
                <tr style={{ fontSize: "15px" }}>
                  <th>Sl.No</th>
                  <th>Patient Name</th>
                  <th>Assigned Doctor</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>1</td>
                  <td>John</td>
                  <td>Dr.Arun</td>
                  <td>11/07/2023</td>
                  <td>10:30</td>
                  <td>
                    <button
                      style={{
                        fontSize: "12px",
                        border: "none",
                        backgroundColor: "orange",
                        color: "white",
                        fontWeight: "600",
                        borderRadius: "4px",
                      }}
                    >
                      ACTION
                    </button>
                  </td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>2</td>
                  <td>John</td>
                  <td>Dr.Arun</td>
                  <td>11/07/2023</td>
                  <td>10:30</td>
                  <td>
                    <button
                      style={{
                        fontSize: "12px",
                        border: "none",
                        backgroundColor: "orange",
                        color: "white",
                        fontWeight: "600",
                        borderRadius: "4px",
                      }}
                    >
                      ACTION
                    </button>
                  </td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>3</td>
                  <td>John</td>
                  <td>Dr.Arun</td>
                  <td>11/07/2023</td>
                  <td>10:30</td>
                  <td>
                    <button
                      style={{
                        fontSize: "12px",
                        border: "none",
                        backgroundColor: "orange",
                        color: "white",
                        fontWeight: "600",
                        borderRadius: "4px",
                      }}
                    >
                      ACTION
                    </button>
                  </td>
                </tr>

                <tr style={{ fontSize: "15px" }}>
                  <td>4</td>
                  <td>John</td>
                  <td>Dr.Arun</td>
                  <td>11/07/2023</td>
                  <td>10:30</td>
                  <td>
                    <button
                      style={{
                        fontSize: "12px",
                        border: "none",
                        backgroundColor: "orange",
                        color: "white",
                        fontWeight: "600",
                        borderRadius: "4px",
                      }}
                    >
                      ACTION
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            style={{
              padding: "4%",
              margin: "1%",
              // border: "1px solid grey",
              borderRadius: "10px",
              boxShadow: "2px 3px 12px 3px rgba(32,149,140,0.32)",
            }}
          >
            <h6 style={{ fontWeight: "600" }}>DOCTORS LIST</h6>
            <hr></hr>
            <div className="row" style={{ paddingBottom: "1%" }}>
              <div className="col-lg-3">
                <img
                  src="Images/doctor1.jpg"
                  style={{ width: "100%", height: "45px", borderRadius: "50%" }}
                />
              </div>
              <div className="col-lg-9" style={{ fontSize: "14px" }}>
                <span>Dr.Arun</span> <span>-(MBBS,MD)</span>
                <br></br>
                <span style={{ color: "green", fontWeight: "600" }}>
                  Available
                </span>
              </div>
            </div>

            <div className="row" style={{ paddingBottom: "1%" }}>
              <div className="col-lg-3">
                <img
                  src="Images/doctor1.jpg"
                  style={{ width: "100%", height: "45px", borderRadius: "50%" }}
                />
              </div>
              <div className="col-lg-9" style={{ fontSize: "14px" }}>
                <span>Dr.Arun</span> <span>-(MBBS,MD)</span>
                <br></br>
                <span style={{ color: "red", fontWeight: "600" }}>
                  Not Available
                </span>
              </div>
            </div>

            <div className="row" style={{ paddingBottom: "1%" }}>
              <div className="col-lg-3">
                <img
                  src="Images/doctor1.jpg"
                  style={{ width: "100%", height: "45px", borderRadius: "50%" }}
                />
              </div>
              <div className="col-lg-9" style={{ fontSize: "14px" }}>
                <span>Dr.Arun</span> <span>-(MBBS,MD)</span>
                <br></br>
                <span style={{ color: "#20958c", fontWeight: "600" }}>
                  On Leave
                </span>
              </div>
            </div>
            <h5
              style={{
                color: "grey",
                border: "none",
                backgroundColor: "white",
                textAlign: "center",
                borderTop: "1px solid grey",
                paddingTop: "3%",
                marginTop: "3%",
              }}
              onClick={() => window.location.assign("/admin/Hospitaldoctors")}
            >
              view all
            </h5>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div
            style={{
              padding: "2%",
              margin: "1%",
              // border: "1px solid grey",
              borderRadius: "10px",
              boxShadow: "2px 3px 12px 3px rgba(32,149,140,0.32)",
            }}
          >
            <h6 style={{ fontWeight: "600" }}>ADMIT PATIENT LIST</h6>
            {/* <hr></hr> */}
            <Table responsive="md" style={{ marginTop: "1%" }}>
              <thead>
                <tr style={{ fontSize: "15px" }}>
                  <th>No</th>
                  <th>Name</th>
                  <th>Assigned Doctor</th>
                  <th>Date of Admit</th>
                  <th>Diseases</th>
                  <th>Room No</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>1</td>
                  <td>John</td>
                  <td>Dr.Arun</td>
                  <td>11/07/2023</td>
                  <td>MALARIA</td>

                  <td>30</td>
                  <td style={{ display: "flex" }}>
                    <MdEdit
                      style={{ color: "#20958c", marginRight: "1%" }}
                      onClick={() => setShow(true)}
                    />
                    <AiFillDelete style={{ color: "red" }} />
                  </td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>2</td>
                  <td>John</td>
                  <td>Dr.Arun</td>
                  <td>11/07/2023</td>
                  <td>MALARIA</td>

                  <td>30</td>
                  <td style={{ display: "flex" }}>
                    <MdEdit
                      style={{ color: "#20958c", marginRight: "1%" }}
                      onClick={() => setShow(true)}
                    />
                    <AiFillDelete style={{ color: "red" }} />
                  </td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>3</td>
                  <td>John</td>
                  <td>Dr.Arun</td>
                  <td>11/07/2023</td>
                  <td>MALARIA</td>

                  <td>30</td>
                  <td style={{ display: "flex" }}>
                    <MdEdit
                      style={{ color: "#20958c", marginRight: "1%" }}
                      onClick={() => setShow(true)}
                    />
                    <AiFillDelete style={{ color: "red" }} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <Modal size="lg" show={show2} onHide={handleClose2}>
        <Modal.Header>
          <Modal.Title>Book Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <h6>Old Patient ?</h6>
            <div className="row"></div>
          </div>
          <h6 style={{ color: "white", margin: "0% 2% 2% 2%" }}>
            Personal Information
          </h6>
          <div
            className="row"
            style={{
              border: "1px solid white",
              padding: "2% 0%",
              margin: "0% 1%",
              borderRadius: "0px",
            }}
          >
            <div className="col-lg-6">
              <Select
                options={MobileNumber}
                placeholder="Contact number "
                value={MNumber}
                onChange={handleSelect}
                isSearchable={true}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                // isMulti
              />
            </div>
            <div className="col-lg-6">
              <input
                placeholder="First Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Last Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  marginTop: "4%",
                  backgroundColor: "#ebebeb",
                }}
              ></input>
            </div>
            <div className="col-lg-6">
              <input
                placeholder="Email"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  marginTop: "4%",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
              ></input>
            </div>

            <div className="col-lg-6">
              <select
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  marginTop: "4%",
                  backgroundColor: "#ebebeb",
                }}
              >
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-5">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Date of Birth :
                  </h6>
                </div>
                <div className="col-lg-7">
                  {" "}
                  <input
                    type="date"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                  ></input>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <textarea
                placeholder="Address"
                cols={4}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
              ></textarea>
            </div>
          </div>

          <h6 style={{ color: "white", margin: "2%" }}>Appointment Details</h6>
          <div
            className="row"
            style={{
              border: "1px solid white",
              padding: "2% 0%",
              margin: "0% 1%",
              borderRadius: "0px",
            }}
          >
            <div className="col-lg-6">
              <select
                placeholder="Consulting Doctor"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
              >
                <option>Select Department</option>
                <option>Department-1</option>
                <option>Department-2</option>
              </select>
            </div>
            <div className="col-lg-6">
              <select
                placeholder="Consulting Doctor"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
              >
                <option>Select Consulting Doctor</option>
                <option>Doctor-1</option>
                <option>Doctor-2</option>
              </select>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-6">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Date of Appointment :
                  </h6>
                </div>
                <div className="col-lg-6">
                  {" "}
                  <input
                    type="date"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                  ></input>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-6">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Appointment From :
                  </h6>
                </div>
                <div className="col-lg-6">
                  {" "}
                  <input
                    type="time"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                  ></input>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-6">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Appointment To :
                  </h6>
                </div>
                <div className="col-lg-6">
                  {" "}
                  <input
                    type="time"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                  ></input>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Injury/Condition"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "2%",
                }}
              ></input>
            </div>

            <div className="col-lg-12">
              <textarea
                placeholder="Note"
                cols={4}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
              ></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: "flex" }}>
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                marginRight: "20px",
                border: "1px solid white",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow2(false);
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
                border: "1px solid white",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow2(false);
                alert("Appointment Added");
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
