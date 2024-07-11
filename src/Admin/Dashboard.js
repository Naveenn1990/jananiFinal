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
import axios from "axios";
// import PageLoader from "./Pageloader";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Dashboard() {
  let adminDetails = sessionStorage.getItem("adminDetails");

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

    if (!adminDetails) {
      alert("Login details are required!!!");
      window.location.assign("/");
    }
  }, []);

  //======================================================================

  // =====================get hospital doctor=====================
  const [data, setdata] = useState([]);
  const getDoctors = () => {
    axios
      .get("http://localhost:8521/api/Doctor/getDoctorsList")
      .then(function (response) {
        setdata(
          response.data.DoctorsInfo?.filter(
            (data) => data.DoctorType === "hospital"
          )
        );
      })
      .catch(function (error) {
        console.log(error);
        alert(error.response.data.error);
      });
  };

  // =====================get Clinical doctor=====================
  const [ClinicDoctors, setClinicDoctors] = useState([]);
  const getClinicDoctors = () => {
    axios
      .get("http://localhost:8521/api/Clinic/getClinicList")
      .then(function (response) {
        setClinicDoctors(response.data.ClinicalDoctorsInfo);
      })
      .catch(function (error) {
        console.log(error);
        setClinicDoctors([]);
      });
  };

  // =====================IPD patient count=====================
  const [IPDCount, setIPDCount] = useState();
  const getipdpatientsCount = () => {
    axios
      .get("http://localhost:8521/api/user/getIPDCount")
      .then(function (response) {
        setIPDCount(response.data.ipdCount);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // =====================OPD patient count=====================
  const [OPDCount, setOPDCount] = useState();
  const getopdpatientsCount = () => {
    axios
      .get("http://localhost:8521/api/user/getOPDCount")
      .then(function (response) {
        setOPDCount(response.data.opdCount);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getDoctors();
    getClinicDoctors();
    getipdpatientsCount();
    getopdpatientsCount();
  }, []);

  return (
    <div style={{ padding: "1%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Dashboard
        </h6>
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
                  Hospital Doctors
                </h6>
                <h6
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#20958c",
                  }}
                >
                  {data?.length}
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
                  Clinical Doctors
                </h6>
                <h6
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#20958c",
                  }}
                >
                  {ClinicDoctors?.length}
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
                <h6 style={{ fontSize: "15px", fontWeight: "600" }}>OPD</h6>
                <h6
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#20958c",
                  }}
                >
                  {OPDCount}
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
                <h6 style={{ fontSize: "15px", fontWeight: "600" }}>IPD</h6>
                <h6
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#20958c",
                  }}
                >
                  {IPDCount}
                </h6>
              </div>
            </div>
          </div>
        </div>
        {/* {JSON.parse(adminDetails)?.type === "SUBADMIN" ? (
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
        )} */}
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
        <div className="col-lg-12" style={{}}>
          <div
            style={{
              padding: "2%",
              margin: "1%",
              // border: "1px solid grey",
              borderRadius: "10px",
              boxShadow: "2px 3px 12px 3px rgba(32,149,140,0.32)",
            }}
          >
            <h6 style={{ fontWeight: "600" }}>Doctor list</h6>

            {/* <hr></hr> */}
            <Table responsive="md" style={{ marginTop: "1%" }}>
              <thead>
                <tr style={{ fontSize: "15px" }}>
                  <th>Sl.No</th>
                  <th>Doctor</th>
                  <th>Email-Id</th>
                  <th>Department</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((doctorDetails, i) => {
                  return (
                    <tr style={{ fontSize: "15px" }}>
                      <td>{i + 1}.</td>
                      <td>
                        <img
                          alt=""
                          src={`http://localhost:8521/Doctor/${doctorDetails?.ProfileImg}`}
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                        {doctorDetails?.Firstname} {doctorDetails?.Lastname}
                      </td>
                      <td>{doctorDetails?.Email}</td>
                      <td>{doctorDetails?.Department}</td>
                      <td>{doctorDetails?.PhoneNumber}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
