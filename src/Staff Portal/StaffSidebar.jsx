import React, { useEffect, useState } from "react";
import { Dropdown, Navbar } from "react-bootstrap";
import { RxDashboard } from "react-icons/rx";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBook,
  faCalendarDays,
  faChartBar,
  faClipboard,
  faContactBook,
  faFileInvoice,
  faFileInvoiceDollar,
  faGear,
  faHospitalUser,
  faHouse,
  faList,
  faListCheck,
  faNotesMedical,
  faPenToSquare,
  faPlus,
  faPowerOff,
  faUserCircle,
  faUserDoctor,
  faUserNurse,
  faVialVirus,
  faClipboardUser,
} from "@fortawesome/free-solid-svg-icons";

export default function StaffSidebar() {
  // const [DoctorM, setDoctorM] = useState(false);
  // const [PatientM, setPatientM] = useState(false);
  const [LabM, setLabM] = useState(false);
  // const [SerM, setSerM] = useState(false);
  const [PharM, setPharM] = useState(false);
  // const [HosM, setHosM] = useState(false);

  // const [SelectedItem, setSelectedItem] = useState(1);
  let staffDetails = JSON.parse(sessionStorage.getItem("StaffDetails"));
  useEffect(() => {
    staffDetails = JSON.parse(sessionStorage.getItem("StaffDetails"));
    if (!staffDetails) {
      window.location.assign("/loginforeveryone");
    }
    // staffById(staffDetails?._id);
  }, []);
  return (
    <div className="sidebar">
      <Navbar.Brand>
        <img
          style={{ width: "40px", height: "40px", marginLeft: "40px" }}
          className="logo me-2 "
          src="./img/logo.jpg"
          alt="Logo"
        />{" "}
        <span className="fw-bold fs-4" style={{ color: "rgb(32 139 140)" }}>
          JANANI
        </span>
      </Navbar.Brand>

      {/* <a
                href="#"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            > */}
      <div className=" text-center m-3 ms-4">
        <img
          src={`http://localhost:8521/Staff/${staffDetails?.ProfileImg}`}
          alt=""
          style={{ width: "70px", height: "70px", borderRadius: "30%" }}
        />
        <p className="fs-4 fw-bold" style={{ color: "rgb(32 139 140)" }}>
          {staffDetails?.fname} {staffDetails?.lname}
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "rgb(32 139 140)",
          }}
        >
          Staff
        </p>
        <p
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "rgb(32 139 140)",
          }}
        >
          ID : {staffDetails?.staffId}
        </p>
      </div>
      {/* </a> */}

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/staffdashboard")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faHouse}
          style={{ color: "", marginRight: "7px" }}
        />
        Staff Dashboard
      </h6>

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/staffattendance")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faClipboardUser}
          style={{ color: "#4f4f4f", marginRight: "7px" }}
        />
        Attendance
      </h6>

      <h6 className="sidebarItem" onClick={() => setLabM(!LabM)}>
        <FontAwesomeIcon
          icon={faHospitalUser}
          style={{ marginRight: "5px", fontSize: "15px" }}
        />
        Admin Patient {LabM ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </h6>

      <div
        style={{
          display: LabM ? "block" : "none",
          backgroundColor: "#d0f7f4",
        }}
      >
        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/staffoutpatientform")}
        >
          <FontAwesomeIcon
            icon={faNotesMedical}
            style={{ marginRight: "5px", fontSize: "15px" }}
          />
          Out Patient Form
        </h6>

        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("staffoutpatientlist")}
        >
          <FontAwesomeIcon
            icon={faListCheck}
            style={{ marginRight: "5px", fontSize: "15px" }}
          />
          Out Patient List
        </h6>

        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/staffinpatientform")}
        >
          <FontAwesomeIcon
            icon={faNotesMedical}
            style={{ marginRight: "5px", fontSize: "15px" }}
          />
          In Patient Form
        </h6>

        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("staffinpatientlist")}
        >
          <FontAwesomeIcon
            icon={faListCheck}
            style={{ marginRight: "5px", fontSize: "15px" }}
          />
          In Patient List
        </h6>
      </div>

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/staffbedmanagement")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faBed}
          style={{ color: "", marginRight: "5px" }}
        />
        Bed Management
      </h6>

      {/* <h6
                className="sidebarItem"
                onClick={() => window.location.assign("#")}
            >
                {" "}
                <FontAwesomeIcon
                    icon={faGear}
                    style={{ color: "", marginRight: "5px" }}
                />
                Patient Management
            </h6> */}

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/staffdoctormanagement")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faUserNurse}
          style={{ color: "", marginRight: "5px" }}
        />
        Doctor's Management
      </h6>

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/staffdoctorappointment")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faUserDoctor}
          style={{ color: "", marginRight: "5px" }}
        />
        Doctor.s Appointment
      </h6>

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/staffrecordmanagement")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faFileInvoice}
          style={{ color: "", marginRight: "5px" }}
        />
        Record Management
      </h6>

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/staffquickbill")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faFileInvoiceDollar}
          style={{ color: "", marginRight: "5px" }}
        />
        Billing
      </h6>

      <h6 className="sidebarItem" onClick={() => window.location.assign("#")}>
        {" "}
        <FontAwesomeIcon
          icon={faPowerOff}
          style={{ color: "", marginRight: "5px" }}
        />
        Logout
      </h6>
    </div>
  );
}