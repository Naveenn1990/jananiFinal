import React, { useState } from "react";
import { Dropdown, Navbar } from "react-bootstrap";
import { RxDashboard } from "react-icons/rx";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCalendarDays,
  faChartBar,
  faClipboard,
  faClipboardList,
  faContactBook,
  faFileInvoice,
  faFilePdf,
  faGear,
  faHouse,
  faList,
  faMicroscope,
  faNotesMedical,
  faPenToSquare,
  faPlus,
  faPowerOff,
  faUserCircle,
  faVialVirus,
} from "@fortawesome/free-solid-svg-icons";

export default function VendorSidebar() {
  // const [DoctorM, setDoctorM] = useState(false);
  // const [PatientM, setPatientM] = useState(false);
  const [LabM, setLabM] = useState(false);
  // const [SerM, setSerM] = useState(false);
  const [PharM, setPharM] = useState(false);
  // const [HosM, setHosM] = useState(false);

  // const [SelectedItem, setSelectedItem] = useState(1);

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
          src="./img/admin-doctors-list-3.jpg"
          alt=""
          style={{ width: "70px", height: "70px", borderRadius: "30%" }}
        />
        <p className="fs-4 fw-bold" style={{ color: "rgb(32 139 140)" }}>
          Ganesh
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "rgb(32 139 140)",
          }}
        >
          Vendor
        </p>
        <p
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "rgb(32 139 140)",
          }}
        >
          ID : #gk52446
        </p>
      </div>
      {/* </a> */}
      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/vendordashboard")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faHouse}
          style={{ color: "", marginRight: "7px" }}
        />
        Vendor Dashboard
      </h6>
      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/VendorAddProducts")}
      >
        <FontAwesomeIcon
          icon={faFileInvoice}
          style={{ marginRight: "5px", fontSize: "15px" }}
        />
        Add Products
      </h6>
      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/vendorOrders")}
      >
        <FontAwesomeIcon
          icon={faFileInvoice}
          style={{ marginRight: "5px", fontSize: "15px" }}
        />
        Orders
      </h6>
      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/vendorsettings")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faGear}
          style={{ color: "", marginRight: "5px" }}
        />
        Settings
      </h6>

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/loginforeveryone")}
      >
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
