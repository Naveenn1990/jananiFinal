import React, { useState } from "react";
import { Dropdown, Navbar } from "react-bootstrap";
import { RxDashboard } from "react-icons/rx";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faArrowUpShortWide, faBarcode, faBed, faBook, faCalendarDays, faChartBar, faClipboard, faContactBook, faDownload, faFileInvoice, faFileInvoiceDollar, faFlaskVial, faGear, faHospitalUser, faHouse, faHouseFlag, faList, faListCheck, faNotesMedical, faPenToSquare, faPlus, faPowerOff, faPrint, faRightFromBracket, faUpload, faUserCircle, faUserDoctor, faUserNurse, faVialVirus } from "@fortawesome/free-solid-svg-icons";

export default function LabSidebar() {

    // const [DoctorM, setDoctorM] = useState(false);
    // const [PatientM, setPatientM] = useState(false);
    const [LabM, setLabM] = useState(false);
    // const [SerM, setSerM] = useState(false);
    const [PharM, setPharM] = useState(false);
    // const [HosM, setHosM] = useState(false);

    // const [SelectedItem, setSelectedItem] = useState(1);
   

    return (
        <div className="sidebar">


            <Navbar.Brand ><img style={{ width: '40px', height: '40px', marginLeft: '40px' }} className='logo me-2 ' src="./img/logo.jpg" alt="Logo" /> <span className="fw-bold fs-4" style={{ color: 'rgb(32 139 140)' }}>JANANI</span></Navbar.Brand>

            {/* <a
                href="#"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            > */}
            <div className=" text-center m-3 ms-4">
                <img
                    src="./img/admin-doctors-list-4.jpg"
                    alt=""
                    style={{ width: "70px", height: "70px", borderRadius: '30%' }}
                />
                <p className="fs-4 fw-bold" style={{ color: 'rgb(32 139 140)' }}>Sheetal</p>
                <p style={{ fontSize: '16px', fontWeight: 'bold', color: 'rgb(32 139 140)' }}>Lab</p>
                <p style={{ fontSize: '12px', fontWeight: 'bold', color: 'rgb(32 139 140)' }}>ID : #SH84546</p>
            </div>
            {/* </a> */}

            <h6
                className="sidebarItem"
                onClick={() => window.location.assign("/labdashboard")}
            >
                {" "}
                <FontAwesomeIcon
                    icon={faHouse}
                    style={{ color: "", marginRight: "7px" }}
                />

            DashBoard
            </h6>

            <h6
                className="sidebarItem"
                onClick={() => window.location.assign("/labaccession")}
            >
                {" "}
                <FontAwesomeIcon
                    icon={faFlaskVial}
                    style={{ color: "", marginRight: "7px" }}
                />

            Accession
            </h6>

            <h6
                className="sidebarItem"
                onClick={() => window.location.assign("/labtest")}
            >
                {" "}
                <FontAwesomeIcon
                    icon={faFlaskVial}
                    style={{ color: "", marginRight: "5px" }}
                />
               Lab Test
            </h6>

            <h6
                className="sidebarItem"
                onClick={() => window.location.assign("labpatientprofile")}
            >
                {" "}
                <FontAwesomeIcon
                    icon={faAddressCard}
                    style={{ color: "", marginRight: "5px" }}
                />
                Profile
            </h6>


            <h6
                className="sidebarItem"
                onClick={() => window.location.assign("/laborder")}
            >
                {" "}
                <FontAwesomeIcon
                    icon={faArrowUpShortWide}
                    style={{ color: "", marginRight: "5px" }}
                />
                Order
            </h6>

            {/* <h6
                className="sidebarItem"
                onClick={() => window.location.assign("/laborderrequest")}
            >
                {" "}
                <FontAwesomeIcon
                    icon={faUserDoctor}
                    style={{ color: "", marginRight: "5px" }}
                />
                Order Request
            </h6> */}

            <h6
                className="sidebarItem"
                onClick={() => window.location.assign("/labhomecollection")}
            >
                {" "}
                <FontAwesomeIcon
                    icon={faVialVirus}
                    style={{ color: "", marginRight: "5px" }}
                />
                Home Collection
            </h6>

            <h6
                className="sidebarItem"
                onClick={() => window.location.assign("/laboutsource")}
            >
                {" "}
                <FontAwesomeIcon
                    icon={faDownload}
                    style={{ color: "", marginRight: "5px" }}
                />
                Outsource Management 
            </h6>

            <h6
                className="sidebarItem"
                onClick={() => window.location.assign("/labrefoutmanagement")}
            >
                {" "}
                <FontAwesomeIcon
                    icon={faUpload}
                    style={{ color: "", marginRight: "5px" }}
                />
                RefOut Management
            </h6>

            {/* <h6
                className="sidebarItem"
                onClick={() => window.location.assign("/labqualitycontrol")}
            >
                {" "}
                <FontAwesomeIcon
                    icon={faFileInvoiceDollar}
                    style={{ color: "", marginRight: "5px" }}
                />
                Quality Control
            </h6> */}

            <h6
                className="sidebarItem"
                onClick={() => window.location.assign("/labgeneratebarcode")}
            >
                {" "}
                <FontAwesomeIcon
                    icon={faBarcode}
                    style={{ color: "", marginRight: "5px" }}
                />
                Generate Barcode
            </h6>

            <h6
                className="sidebarItem"
                onClick={() => window.location.assign("/labprintwork")}
            >
                {" "}
                <FontAwesomeIcon
                    icon={faPrint}
                    style={{ color: "", marginRight: "5px" }}
                />
                Print Worklist
            </h6>

            <h6
                className="sidebarItem"
                onClick={() => window.location.assign("/labcampmanagement")}
            >
                {" "}
                <FontAwesomeIcon
                    icon={faHouseFlag}
                    style={{ color: "", marginRight: "5px" }}
                />
                Camp Management
            </h6>


            <h6
                className="sidebarItem"
                onClick={() => window.location.assign("#")}
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
