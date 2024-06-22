import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChartBar,
  faClipboardList,
  faContactBook,
  faFileInvoice,
  faFilePdf,
  faGear,
  faHouse,
  faList,
  faMicroscope,
  faPlus,
  faPowerOff,
  faVialVirus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ReferDoctorsSidebar() {
  const ReferralDocDetails = JSON.parse(
    sessionStorage.getItem("RDoctorDetails")
  );
  console.log("ReferralDocDetails", ReferralDocDetails);
  const [LabM, setLabM] = useState(false);
  const [PharM, setPharM] = useState(false);
  const [RefHospital, setRefHospital] = useState(false);

  const logout = () => {
    sessionStorage.removeItem("RDoctorDetails");
    window.location.assign("/loginforeveryone");
  };

  if (!ReferralDocDetails) {
    alert("Plaese Login..");
    window.location.assign("/home");
  }
  return (
    <div className="sidebar">
      <Navbar.Brand>
        <img
          style={{
            width: "40px",
            height: "40px",
            marginLeft: "40px",
          }}
          className="logo me-2 "
          src="./img/logo.jpg"
          alt="Logo"
        />{" "}
        <span className="fw-bold fs-4" style={{ color: "rgb(32 139 140)" }}>
          JANANI
        </span>
      </Navbar.Brand>
      <div className=" text-center m-3 ms-5">
        <img
          src={`http://localhost:8521/Clinic/${ReferralDocDetails?.ProfileImg}`}
          alt=""
          style={{ width: "70px", height: "70px", borderRadius: "30%" }}
        />
        <p className="fs-4 fw-bold" style={{ color: "rgb(32 139 140)" }}>
          {`${ReferralDocDetails?.Firstname} ${ReferralDocDetails?.Lastname}`}
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "rgb(32 139 140)",
          }}
        >
          Refer Doctor
        </p>
        <p
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "rgb(32 139 140)",
          }}
        >
          ID : {ReferralDocDetails?.ClinicDocId}
        </p>
      </div>

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/referdoctordashboard")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faHouse}
          style={{ color: "", marginRight: "7px" }}
        />
        Doctors Dashboard
      </h6>

      <h6 className="sidebarItem" onClick={() => setPharM(!PharM)}>
        <FontAwesomeIcon
          icon={faFileInvoice}
          style={{ marginRight: "5px", fontSize: "15px" }}
        />
        Referral Lab {PharM ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </h6>

      <div
        style={{
          display: PharM ? "block" : "none",
          backgroundColor: "#d0f7f4",
        }}
      >
        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/referaddpatient")}
        >
          <FontAwesomeIcon
            icon={faPlus}
            style={{ marginRight: "5px", fontSize: "15px" }}
          />
          Add Patient
        </h6>

        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/referdoctorpatientlist")}
        >
          <FontAwesomeIcon
            icon={faList}
            style={{ marginRight: "5px", fontSize: "15px" }}
          />
          Patients List
        </h6>
      </div>

      <h6 className="sidebarItem" onClick={() => setRefHospital(!RefHospital)}>
        <FontAwesomeIcon
          icon={faFileInvoice}
          style={{ marginRight: "5px", fontSize: "15px" }}
        />
        Referral Hospital {RefHospital ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </h6>

      <div
        style={{
          display: RefHospital ? "block" : "none",
          backgroundColor: "#d0f7f4",
        }}
      >
        <Link to={"/addpatientrefhospital"}>
          <h6
            className="sidebarItem1"
            // onClick={() => window.location.assign("/addpatientrefhospital")}
          >
            <FontAwesomeIcon
              icon={faPlus}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Add Patient
          </h6>
        </Link>

        <Link to={"/referhospitalpatientlist"}>
          <h6
            className="sidebarItem1"
            // onClick={() => window.location.assign("/referhospitalpatientlist")}
          >
            <FontAwesomeIcon
              icon={faList}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Patients List
          </h6>
        </Link>
      </div>

      <h6 className="sidebarItem" onClick={() => setLabM(!LabM)}>
        <FontAwesomeIcon
          icon={faVialVirus}
          style={{ marginRight: "5px", fontSize: "15px" }}
        />
        Lab {LabM ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </h6>

      <div
        style={{
          display: LabM ? "block" : "none",
          backgroundColor: "#d0f7f4",
        }}
      >
        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/referdoctorlabtest")}
        >
          <FontAwesomeIcon
            icon={faMicroscope}
            style={{ marginRight: "5px", fontSize: "15px" }}
          />
          Lab Test
        </h6>

        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/referdoctorlabtestlist")}
        >
          <FontAwesomeIcon
            icon={faClipboardList}
            style={{ marginRight: "5px", fontSize: "15px" }}
          />
          Lab Test List
        </h6>

        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/referdoctorlabtestreport")}
        >
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ marginRight: "5px", fontSize: "15px" }}
          />
          Lab Test Report
        </h6>
      </div>

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/refersettings")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faGear}
          style={{ color: "", marginRight: "5px" }}
        />
        Settings
      </h6>

      {/* <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/referdoctorschat")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faChartBar}
          style={{ color: "", marginRight: "5px" }}
        />
        Chat
      </h6> */}

      {/* <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/referdoctorscalender")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faCalendarDays}
          style={{ color: "", marginRight: "5px" }}
        />
        Calendar
      </h6> */}

      {/* <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/referdoctorscontact")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faContactBook}
          style={{ color: "", marginRight: "5px" }}
        />
        Contacts
      </h6> */}

      <h6 className="sidebarItem" onClick={() => logout()}>
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
