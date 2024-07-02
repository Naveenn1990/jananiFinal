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

export default function ReferLabSidebar() {
  const ReferalLAB = JSON.parse(sessionStorage.getItem("RLabDetails"));
  const [LabM, setLabM] = useState(false);
  const [PharM, setPharM] = useState(false);
  const [ReferalPatient, setReferalPatient] = useState(false);

  const logout = () => {
    sessionStorage.removeItem("RLabDetails");
    window.location.assign("/loginforeveryone");
  };
  if (!ReferalLAB) {
    window.location.assign("/home");
    alert("please Login");
  }
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
      <div className=" text-center m-3 ms-4">
        <img
          src={`http://localhost:8521/ClinicLab/${ReferalLAB?.ProfileImg}`}
          alt="profile pic"
          style={{ width: "70px", height: "70px", borderRadius: "30%" }}
        />
        <p className="fs-4 fw-bold" style={{ color: "rgb(32 139 140)" }}>
          {`${ReferalLAB?.Firstname} ${ReferalLAB?.Lastname}`}
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "rgb(32 139 140)",
          }}
        >
          Refer Lab
        </p>
        <p
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "rgb(32 139 140)",
          }}
        >
          ID : {ReferalLAB?.ClinicLabId}
        </p>
      </div>
      {/* </a> */}

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/referlabdashboard")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faHouse}
          style={{ color: "", marginRight: "7px" }}
        />
        Lab Dashboard
      </h6>

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
        <Link to={"/referlabtest"}>
          <h6
            className="sidebarItem1"
          >
            <FontAwesomeIcon
              icon={faMicroscope}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Lab Test
          </h6>
        </Link>

        {/* <Link to={"/referlabtestlist"}>
          <h6
            className="sidebarItem1"
          >
            <FontAwesomeIcon
              icon={faClipboardList}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Lab Test List
          </h6>
        </Link> */}

        {/* <Link to={"/referlabtestreport"}>
          <h6
            className="sidebarItem1"
          >
            <FontAwesomeIcon
              icon={faFilePdf}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Lab Test Report
          </h6>
        </Link> */}
      </div>

      <h6 className="sidebarItem" onClick={() => setPharM(!PharM)}>
        <FontAwesomeIcon
          icon={faFileInvoice}
          style={{ marginRight: "5px", fontSize: "15px" }}
        />
        Patients {PharM ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </h6>

      <div
        style={{
          display: PharM ? "block" : "none",
          backgroundColor: "#d0f7f4",
        }}
      >
        <Link to="/referlabaddpatient">
          <h6
            className="sidebarItem1"
            //   onClick={() => window.location.assign("/referlabaddpatient")}
          >
            <FontAwesomeIcon
              icon={faPlus}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Add Patient
          </h6>
        </Link>

        <Link to="/referlabpatientlist">
          <h6
            className="sidebarItem1"
            //   onClick={() => window.location.assign("/referlabpatientlist")}
          >
            <FontAwesomeIcon
              icon={faList}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Patients List
          </h6>
        </Link>
      </div>

      <h6 className="sidebarItem" onClick={() => setReferalPatient(!ReferalPatient)}>
        <FontAwesomeIcon
          icon={faFileInvoice}
          style={{ marginRight: "5px", fontSize: "15px" }}
        />
       Referal Patients {ReferalPatient ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </h6>

      <div
        style={{
          display: ReferalPatient ? "block" : "none",
          backgroundColor: "#d0f7f4",
        }}
      >
        <Link to="/doctorfeferpatientlist">
          <h6
            className="sidebarItem1"
          >
            <FontAwesomeIcon
              icon={faPlus}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Patient List
          </h6>
        </Link>

     
      </div>

      {/* <h6 className="sidebarItem" onClick={() => setLabM(!LabM)}>
                <FontAwesomeIcon icon={faVialVirus} style={{ marginRight: '5px', fontSize: '15px' }} />
                Lab {LabM ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h6> */}

      {/* <div
                style={{
                    display: LabM ? "block" : "none",
                    backgroundColor: "#d0f7f4",
                }}
            >
                <h6
                    className="sidebarItem1"
                    onClick={() => window.location.assign("/referlabtest")}
                >
                    <FontAwesomeIcon icon={faPenToSquare} style={{ marginRight: '5px', fontSize: '15px' }} />
                     Lab Test
                </h6>

                <h6
                    className="sidebarItem1"
                    onClick={() => window.location.assign("/referlabtestlist")}
                >
                    <FontAwesomeIcon icon={faPenToSquare} style={{ marginRight: '5px', fontSize: '15px' }} />
                    Lab Test List
                </h6>

                <h6
                    className="sidebarItem1"
                    onClick={() => window.location.assign("/referlabtestreport")}
                >
                    <FontAwesomeIcon icon={faPenToSquare} style={{ marginRight: '5px', fontSize: '15px' }} />
                    Lab Test Report
                </h6>
            </div> */}
           
      <Link to={"/referlabsettings"}>
        <h6
          className="sidebarItem"
          // onClick={() => window.location.assign("/referlabsettings")}
        >
          {" "}
          <FontAwesomeIcon
            icon={faGear}
            style={{ color: "", marginRight: "5px" }}
          />
          Settings
        </h6>
      </Link>

      {/* <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/referlabchat")}
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
        onClick={() => window.location.assign("/referlabcalender")}
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
        onClick={() => window.location.assign("/referlabcontact")}
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
