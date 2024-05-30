import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faTable,
  faHouse,
  faBook,
  faCommentMedical,
  faFileInvoice,
  faFileMedical,
  faNotesMedical,
  faPowerOff,
  faHospitalUser,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

export default function PatientsSidebar() {
  const [DoctorM, setDoctorM] = useState(false);
  let patientDetails = JSON.parse(sessionStorage.getItem("PatientUser"));

  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => setIsOpen(!isOpen);

  const [acc, setacc] = useState(false);
  const handleTrigger1 = () => setacc(!acc);

  useEffect(() => {
    patientDetails = JSON.parse(sessionStorage.getItem("PatientUser"));
    if (!patientDetails) {
      return alert("Login required!!! please login first...");
    }
  }, []);

  return (
    <div>
      {/* mobile sidebar */}
      {acc ? (
        <div className="trigger mobile-res">
          <FontAwesomeIcon icon={faTimes} onClick={handleTrigger1} />
        </div>
      ) : (
        <div className="trigger mobile-res">
          <FontAwesomeIcon onClick={handleTrigger1} icon={faBars} />
        </div>
      )}
      {acc ? (
        <div className="mobile-res" style={{ overflowX: "scroll" }}>
          <div className="Patient-sidebar-page">
            <div
              className={`Patient-sidebar  ${
                acc ? "Patient-sidebar--open" : ""
              }`}
            >
              <div
                className="Patient-sidebar-position patient-sidebarItem"
                onClick={() => window.location.assign("/patientdashboard")}
              >
                <FontAwesomeIcon icon={faHouse} />
                <span>Dashboard</span>
              </div>
              <Link to={"/bookappointment"}>
                <div
                  className="Patient-sidebar-position patient-sidebarItem"
                  // onClick={() => window.location.assign("/bookappointment")}
                >
                  <FontAwesomeIcon icon={faHospitalUser} />
                  <span className="">Book Appointment</span>
                </div>
              </Link>

              <Link to={"/yourappointment"}>
                <div
                  className="Patient-sidebar-position patient-sidebarItem"
                  // onClick={() => window.location.assign("/yourappointment")}
                >
                  <FontAwesomeIcon icon={faTable} />
                  <span>Your Appointment</span>
                </div>
              </Link>

              <div
                className="Patient-sidebar-position patient-sidebarItem"
                onClick={() => window.location.assign("/prescription")}
              >
                <FontAwesomeIcon icon={faFileMedical} />
                <span>Prescription</span>
              </div>

              <div
                className="Patient-sidebar-position patient-sidebarItem"
                onClick={() => window.location.assign("/patientmedicalrecord")}
              >
                <FontAwesomeIcon icon={faNotesMedical} />
                <span>Medical Record</span>
              </div>

              {/* <div
                className="Patient-sidebar-position patient-sidebarItem"
                onClick={() => window.location.assign("/yourappointment")}
              >
                <FontAwesomeIcon icon={faCalendarCheck} />
                <span>Your Appointments</span>
              </div> */}

              <div
                className="Patient-sidebar-position patient-sidebarItem"
                onClick={() => window.location.assign("/patientbilling")}
              >
                <FontAwesomeIcon icon={faFileInvoice} />
                <span>Billings</span>
              </div>
              <div
                className="Patient-sidebar-position patient-sidebarItem"
                onClick={() => window.location.assign("/patientchat")}
              >
                <FontAwesomeIcon icon={faCommentMedical} />
                <span>Chat</span>
              </div>

              <div
                className="Patient-sidebar-position patient-sidebarItem"
                onClick={() => window.location.assign("/patientprofile")}
                // onClick={() => window.location.assign("/patientsettings")}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
                <span>Settings</span>
              </div>

              <div
                className="Patient-sidebar-position patient-sidebarItem"
                onClick={() => window.location.assign("/")}
              >
                <FontAwesomeIcon icon={faPowerOff} />
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <>
        <div className="sidebar patient-mobile">
          <img
            className="d-flex m-auto"
            // src="./img/testimonial-img-1.webp"
            src={`http://localhost:8521/PatientREG/${patientDetails?.profilepic}`}
            alt=""
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "30px",
              marginTop: "25px",
            }}
          />

          <p
            className="side-profile-name text-center"
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              // fontFamily: "cursive",
              marginTop: "10px",
              color: "rgb(32 139 140)",
            }}
          >
            {patientDetails?.Firstname} {patientDetails?.Lastname} (
            {patientDetails?.registrationType})
          </p>

          <hr />
          <h6
            className="sidebarItem"
            // style={{ backgroundColor: SelectedItem == 1 ? "#20958c" : "white" }}
            onClick={() => window.location.assign("/patientdashboard")}
          >
            <FontAwesomeIcon
              icon={faHouse}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Dashboard
          </h6>

          <h6 className="sidebarItem" onClick={() => setDoctorM(!DoctorM)}>
            <FontAwesomeIcon
              icon={faBook}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Appointment {DoctorM ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h6>
          <div
            style={{
              display: DoctorM ? "block" : "none",
              backgroundColor: "#d0f7f4",
            }}
          >
            <Link to={"/bookappointment"}>
              <h6
                className="sidebarItem1"
                // onClick={() => window.location.assign("/bookappointment")}
              >
                Book Appointment
              </h6>
            </Link>

            {/* <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/todayappointment")}
            >
              Todays Appointment
            </h6> */}
            <Link to={"/yourappointment"}>
              <h6
                className="sidebarItem1"
                // onClick={() => window.location.assign("/yourappointment")}
              >
                Your Appointment
              </h6>
            </Link>
          </div>
          <Link to={"/prescription"}>
            <h6
              className="sidebarItem"
              // onClick={() => window.location.assign("/prescription")}
            >
              {" "}
              <FontAwesomeIcon
                icon={faFileMedical}
                style={{ marginRight: "5px", fontSize: "15px" }}
              />
              Prescription
            </h6>
          </Link>

          <Link to={"/patientmedicalrecord"}>
            <h6
              className="sidebarItem"
              // onClick={() => window.location.assign("/patientmedicalrecord")}
            >
              {" "}
              <FontAwesomeIcon
                icon={faNotesMedical}
                style={{ marginRight: "5px", fontSize: "15px" }}
              />
              Past medical Observation
            </h6>
          </Link>

          {/* <h6
            className="sidebarItem"
            onClick={() => window.location.assign("/yourappointment")}
          >
            {" "}
            <FontAwesomeIcon
              icon={faCalendarCheck}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Your Appointments
          </h6> */}

          <h6
            className="sidebarItem"
            onClick={() => window.location.assign("/patientbilling")}
          >
            {" "}
            <FontAwesomeIcon
              icon={faFileInvoice}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Billing
          </h6>

          <h6
            className="sidebarItem"
            onClick={() => window.location.assign("/reportslist")}
          >
            {" "}
            <FontAwesomeIcon
              icon={faFileInvoice}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Report
          </h6>

          {/* <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/patientAdmisssionForm")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faFileInvoice}
          style={{ color: "",marginRight: "5px"}}
        />
        Admission Form(IPD)
      </h6> */}
          {patientDetails?.registrationType === "IPD" ? (
            <Link to={"/patientConsentForms"}>
              <h6 className="sidebarItem">
                {" "}
                <FontAwesomeIcon
                  icon={faFileInvoice}
                  style={{ marginRight: "5px", fontSize: "15px" }}
                />
                Consent Forms
              </h6>
            </Link>
          ) : (
            ""
          )}

          <h6
            className="sidebarItem"
            onClick={() => window.location.assign("/patientchat")}
          >
            {" "}
            <FontAwesomeIcon
              icon={faCommentMedical}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Chat
          </h6>
          <h6
            className="sidebarItem"
            // onClick={() => window.location.assign("/patientsettings")}
            onClick={() => window.location.assign("/patientprofile")}
          >
            {" "}
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Settings
          </h6>

          <h6
            className="sidebarItem"
            onClick={() => window.location.assign("/home")}
          >
            {" "}
            <FontAwesomeIcon
              icon={faPowerOff}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Logout
          </h6>
        </div>
      </>
    </div>
  );
}
