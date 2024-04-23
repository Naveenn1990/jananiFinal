import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCogs,
  faTable,
  faList,
  faUser,
  faHouse,
  faBook,
  faCalendarCheck,
  faCommentMedical,
  faFileInvoice,
  faFileMedical,
  faGears,
  faNotesMedical,
  faPowerOff,
  faHospitalUser,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { Dropdown } from "react-bootstrap";
import { RxDashboard } from "react-icons/rx";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { faBell, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function PatientsSidebar() {

  const navigate = useNavigate()
  const [DoctorM, setDoctorM] = useState(false);
  //  const [PatientM, setPatientM] = useState(false);
  //  const [LabM, setLabM] = useState(false);
  //  const [SerM, setSerM] = useState(false);
  //  const [PharM, setPharM] = useState(false);
  //  const [HosM, setHosM] = useState(false);
  //  const [SelectedItem, setSelectedItem] = useState(1);
  //  const [sideshow, setsideshow] = useState(false)

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
        <div className="mobile-res">
          <div className="Patient-sidebar-page">
            {/* <div className="content">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://codepen.io/mejdej93/pen/eYYJGjd"
                      >
                        original Pen
                      </a>
                    </div> */}

            <div
              className={`Patient-sidebar  ${
                acc ? "Patient-sidebar--open" : ""
              }`}
            >
              {/* <div className="trigger" >
                        <FontAwesomeIcon icon={acc ? faTimes : faBars} />
                      </div> */}

              <div
                className="Patient-sidebar-position patient-sidebarItem"
                onClick={() => window.location.assign("/patientdashboard")}
              >
                <FontAwesomeIcon icon={faHouse} />
                <span>Dashboard</span>
              </div>

              <div
                className="Patient-sidebar-position patient-sidebarItem"
                onClick={() => window.location.assign("/bookappointment")}
              >
                <FontAwesomeIcon icon={faHospitalUser} />
                <span className="">Book Appointment</span>
              </div>

              <div
                className="Patient-sidebar-position patient-sidebarItem"
                onClick={() => window.location.assign("/todayappointment")}
              >
                <FontAwesomeIcon icon={faTable} />
                <span>Todays Appointment</span>
              </div>

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

              <div
                className="Patient-sidebar-position patient-sidebarItem"
                onClick={() => window.location.assign("/yourappointment")}
              >
                <FontAwesomeIcon icon={faCalendarCheck} />
                <span>Your Appointments</span>
              </div>

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
                onClick={() => window.location.assign("/patientsettings")}
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

      {/*  */}

      <>
        {/* <div className="badge-side" style={{ background: "#208b8c" }}>
                 {
                     sideshow ? (<><FontAwesomeIcon style={{ marginLeft: "40px", marginTop: "15px", cursor: "pointer" }}
                         icon={faXmark} onClick={() => { setsideshow(!sideshow) }} /></>) : (<>
                             <FontAwesomeIcon icon={faBars} style={{ marginLeft: "40px", marginTop: "15px", cursor: "pointer" }}
                                 onClick={() => { setsideshow(!sideshow) }} />
                         </>)
                 }

             </div> */}
        {/* {
                 sideshow ? (<> */}
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
          onClick={()=>navigate("/patientprofile")}
            className="side-profile-name text-center"
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              // fontFamily: "cursive",
              marginTop: "10px",
              color: "rgb(32 139 140)",
              cursor:"pointer"
            }}
          >
            {patientDetails.Firstname} {patientDetails.Lastname}
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
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/bookappointment")}
            >
              Book Appointment
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/todayappointment")}
            >
              Todays Appointment
            </h6>
          </div>

          <h6
            className="sidebarItem"
            onClick={() => window.location.assign("/prescription")}
          >
            {" "}
            <FontAwesomeIcon
              icon={faFileMedical}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Prescription
          </h6>

          <h6
            className="sidebarItem"
            onClick={() => window.location.assign("/patientmedicalrecord")}
          >
            {" "}
            <FontAwesomeIcon
              icon={faNotesMedical}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Medical Record
          </h6>

          <h6
            className="sidebarItem"
            onClick={() => window.location.assign("/yourappointment")}
          >
            {" "}
            <FontAwesomeIcon
              icon={faCalendarCheck}
              style={{ marginRight: "5px", fontSize: "15px" }}
            />
            Your Appointments
          </h6>

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
            onClick={() => window.location.assign("/patientsettings")}
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
            onClick={() => window.location.assign("/")}
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

// import React, { useState } from "react";
// import { Dropdown } from "react-bootstrap";
// import { RxDashboard } from "react-icons/rx";
// import { MdAdminPanelSettings } from "react-icons/md";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faBell, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";

// import { faBook, faCalendarCheck, faCommentMedical, faFileInvoice, faFileMedical, faGears, faHouse, faNotesMedical, faPowerOff } from "@fortawesome/free-solid-svg-icons";

// export default function PatientsSidebar() {
//     const [DoctorM, setDoctorM] = useState(false);
//     const [PatientM, setPatientM] = useState(false);
//     const [LabM, setLabM] = useState(false);
//     const [SerM, setSerM] = useState(false);
//     const [PharM, setPharM] = useState(false);
//     const [HosM, setHosM] = useState(false);

//     const [SelectedItem, setSelectedItem] = useState(1);
//     const [sideshow, setsideshow] = useState(false)

//     return (

//         <>
//             <div className="badge-side" style={{ background: "#208b8c" }}>
//                 {
//                     sideshow ? (<><FontAwesomeIcon style={{ marginLeft: "40px", marginTop: "15px", cursor: "pointer" }}
//                         icon={faXmark} onClick={() => { setsideshow(!sideshow) }} /></>) : (<>
//                             <FontAwesomeIcon icon={faBars} style={{ marginLeft: "40px", marginTop: "15px", cursor: "pointer" }}
//                                 onClick={() => { setsideshow(!sideshow) }} />
//                         </>)
//                 }

//             </div>
//             {
//                 sideshow ? (<>
//                     <div className="sidebar-0">

//                         <img
//                             className="d-flex m-auto"
//                             src="./img/testimonial-img-1.webp"
//                             alt=""
//                             style={{ width: "80px", height: "80px", borderRadius: '30px', marginTop: '25px' }}
//                         />

//                         <p
//                             className="side-profile-name text-center"
//                             style={{
//                                 fontSize: "25px",
//                                 fontWeight: "bold",
//                                 // fontFamily: "cursive",
//                                 marginTop: "10px",
//                                 color: 'rgb(32 139 140)',

//                             }}
//                         >
//                             Cara Steven
//                         </p>

// <hr />
//                         <h6
//                             className="sidebarItem"
//                             // style={{ backgroundColor: SelectedItem == 1 ? "#20958c" : "white" }}
//                             onClick={() => window.location.assign("/patientdashboard")}
//                         >
//                             <FontAwesomeIcon icon={faHouse} style={{ marginRight: '5px', fontSize: '15px' }} />
//                             Dashboard
//                         </h6>

//                         <h6 className="sidebarItem" onClick={() => setDoctorM(!DoctorM)}>
//                             <FontAwesomeIcon icon={faBook} style={{ marginRight: '5px', fontSize: '15px' }} />
//                             Appointment {DoctorM ? <IoIosArrowUp /> : <IoIosArrowDown />}
//                         </h6>
//                         <div
//                             style={{
//                                 display: DoctorM ? "block" : "none",
//                                 backgroundColor: "#d0f7f4",
//                             }}
//                         >
//                             <h6
//                                 className="sidebarItem1"
//                                 onClick={() => window.location.assign("/bookappointment")}
//                             >
//                                 Book Appointment
//                             </h6>
//                             <h6
//                                 className="sidebarItem1"
//                                 onClick={() => window.location.assign("/todayappointment")}
//                             >
//                                 Todays Appointment
//                             </h6>

//                         </div>

//                         <h6
//                             className="sidebarItem"
//                             onClick={() => window.location.assign("/prescription")}
//                         >
//                             {" "}
//                             <FontAwesomeIcon icon={faFileMedical} style={{ marginRight: '5px', fontSize: '15px' }} />
//                             Prescription
//                         </h6>

//                         <h6
//                             className="sidebarItem"
//                             onClick={() => window.location.assign("/patientmedicalrecord")}
//                         >
//                             {" "}
//                             <FontAwesomeIcon icon={faNotesMedical} style={{ marginRight: '5px', fontSize: '15px' }} />
//                             Medical Record
//                         </h6>

//                         <h6
//                             className="sidebarItem"
//                             onClick={() => window.location.assign("/yourappointment")}
//                         >
//                             {" "}
//                             <FontAwesomeIcon icon={faCalendarCheck} style={{ marginRight: '5px', fontSize: '15px' }} />
//                             Your Appointments
//                         </h6>

//                         <h6
//                             className="sidebarItem"
//                             onClick={() => window.location.assign("/patientbilling")}
//                         >
//                             {" "}
//                             <FontAwesomeIcon icon={faFileInvoice} style={{ marginRight: '5px', fontSize: '15px' }} />
//                             Billing
//                         </h6>

//                         <h6
//                             className="sidebarItem"
//                             onClick={() => window.location.assign("/patientchat")}
//                         >
//                             {" "}
//                             <FontAwesomeIcon icon={faCommentMedical} style={{ marginRight: '5px', fontSize: '15px' }} />
//                             Chat
//                         </h6>
//                         <h6
//                             className="sidebarItem"
//                             onClick={() => window.location.assign("/patientsettings")}
//                         >
//                             {" "}
//                             <FontAwesomeIcon icon={faGears} style={{ marginRight: '5px', fontSize: '15px' }} />

//                             Settings
//                         </h6>

//                         <h6
//                             className="sidebarItem"
//                             onClick={() => window.location.assign("/")}
//                         >
//                             {" "}
//                             <FontAwesomeIcon icon={faPowerOff} style={{ marginRight: '5px', fontSize: '15px' }} />
//                             Logout
//                         </h6>

//                     </div>
//                 </>) : (
//                     <></>
//                 )
//             }

//             <div className="sidebar mobile_side">

//                 <img
//                     className="d-flex m-auto"
//                     src="./img/testimonial-img-1.webp"
//                     alt=""
//                     style={{ width: "80px", height: "80px", borderRadius: '30px', marginTop: '25px' }}
//                 />

//                 <p
//                     className="side-profile-name text-center"
//                     style={{
//                         fontSize: "25px",
//                         fontWeight: "bold",
//                         // fontFamily: "cursive",
//                         marginTop: "10px",
//                         color: 'rgb(32 139 140)',

//                     }}
//                 >
//                     Cara Steven
//                 </p>

//                 <hr />

//                 <h6
//                     className="sidebarItem"
//                     // style={{ backgroundColor: SelectedItem == 1 ? "#20958c" : "white" }}
//                     onClick={() => window.location.assign("/patientdashboard")}
//                 >
//                     <FontAwesomeIcon icon={faHouse} style={{ marginRight: '5px', fontSize: '15px' }} />
//                     Dashboard
//                 </h6>

//                 <h6 className="sidebarItem" onClick={() => setDoctorM(!DoctorM)}>
//                     <FontAwesomeIcon icon={faBook} style={{ marginRight: '5px', fontSize: '15px' }} />
//                     Appointment {DoctorM ? <IoIosArrowUp /> : <IoIosArrowDown />}
//                 </h6>
//                 <div
//                     style={{
//                         display: DoctorM ? "block" : "none",
//                         backgroundColor: "#d0f7f4",
//                     }}
//                 >
//                     <h6
//                         className="sidebarItem1"
//                         onClick={() => window.location.assign("/bookappointment")}
//                     >
//                         Book Appointment
//                     </h6>
//                     <h6
//                         className="sidebarItem1"
//                         onClick={() => window.location.assign("/todayappointment")}
//                     >
//                         Todays Appointment
//                     </h6>

//                 </div>

//                 <h6
//                     className="sidebarItem"
//                     onClick={() => window.location.assign("/prescription")}
//                 >
//                     {" "}
//                     <FontAwesomeIcon icon={faFileMedical} style={{ marginRight: '5px', fontSize: '15px' }} />
//                     Prescription
//                 </h6>

//                 <h6
//                     className="sidebarItem"
//                     onClick={() => window.location.assign("/patientmedicalrecord")}
//                 >
//                     {" "}
//                     <FontAwesomeIcon icon={faNotesMedical} style={{ marginRight: '5px', fontSize: '15px' }} />
//                     Medical Record
//                 </h6>

//                 <h6
//                     className="sidebarItem"
//                     onClick={() => window.location.assign("/yourappointment")}
//                 >
//                     {" "}
//                     <FontAwesomeIcon icon={faCalendarCheck} style={{ marginRight: '5px', fontSize: '15px' }} />
//                     Your Appointments
//                 </h6>

//                 <h6
//                     className="sidebarItem"
//                     onClick={() => window.location.assign("/patientbilling")}
//                 >
//                     {" "}
//                     <FontAwesomeIcon icon={faFileInvoice} style={{ marginRight: '5px', fontSize: '15px' }} />
//                     Billing
//                 </h6>

//                 <h6
//                     className="sidebarItem"
//                     onClick={() => window.location.assign("/patientchat")}
//                 >
//                     {" "}
//                     <FontAwesomeIcon icon={faCommentMedical} style={{ marginRight: '5px', fontSize: '15px' }} />
//                     Chat
//                 </h6>
//                 <h6
//                     className="sidebarItem"
//                     onClick={() => window.location.assign("/patientsettings")}
//                 >
//                     {" "}
//                     <FontAwesomeIcon icon={faGears} style={{ marginRight: '5px', fontSize: '15px' }} />

//                     Settings
//                 </h6>

//                 <h6
//                     className="sidebarItem"
//                     onClick={() => window.location.assign("/")}
//                 >
//                     {" "}
//                     <FontAwesomeIcon icon={faPowerOff} style={{ marginRight: '5px', fontSize: '15px' }} />
//                     Logout
//                 </h6>

//             </div>
//         </>
//     );
// }
