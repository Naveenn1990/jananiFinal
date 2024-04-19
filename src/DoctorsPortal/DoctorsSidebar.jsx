import React, { useEffect, useState } from "react";
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
  faContactBook,
  faHouse,
  faNotesMedical,
  faPowerOff,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function DoctorsSidebar() {
  let doctorDetails = JSON.parse(sessionStorage.getItem("DoctorDetails"));
  // const [DoctorM, setDoctorM] = useState(false);
  // const [PatientM, setPatientM] = useState(false);
  // const [LabM, setLabM] = useState(false);
  // const [SerM, setSerM] = useState(false);
  // const [PharM, setPharM] = useState(false);
  // const [HosM, setHosM] = useState(false);

  // const [SelectedItem, setSelectedItem] = useState(1);

  useEffect(() => {
    doctorDetails = JSON.parse(sessionStorage.getItem("DoctorDetails"));
    if (!doctorDetails) {
      alert("Please register first!!!");
      return;
    }
  }, []);

  return (
    <div className="sidebar">
      <Navbar.Brand href="#">
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

      <a
        href="#"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <div className=" text-center m-3 ms-5">
          <img
            src={`http://localhost:8521/Doctor/${doctorDetails.ProfileImg}`}
            alt=""
            style={{ width: "70px", height: "70px" }}
          />
          <p className="fs-4 fw-bold" style={{ color: "rgb(32 139 140)" }}>
            {doctorDetails.Firstname}
            {doctorDetails.Lastname}
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "rgb(32 139 140)",
            }}
          >
            {" "}
            Doctor
          </p>
        </div>
      </a>

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/doctorsdashboard")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faHouse}
          style={{ color: "", marginRight: "7px" }}
        />
        Doctors Dashboard
      </h6>

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/doctorsappointment")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faNotesMedical}
          style={{ color: "", marginRight: "5px" }}
        />
        View Appointments
      </h6>

      {/* <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/doctorslist")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faBook}
          style={{ color: "", marginRight: "5px" }}
        />
        Doctors
      </h6> */}

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/patientslist")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faClipboard}
          style={{ color: "", marginRight: "5px" }}
        />
        Patients
      </h6>

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/doctorssettings")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faUserCircle}
          style={{ color: "", marginRight: "5px" }}
        />
        Settings
      </h6>

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/doctorschat")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faChartBar}
          style={{ color: "", marginRight: "5px" }}
        />
        Chat
      </h6>

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/doctorscalender")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faCalendarDays}
          style={{ color: "", marginRight: "5px" }}
        />
        Calendar
      </h6>

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/doctorscontact")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faContactBook}
          style={{ color: "", marginRight: "5px" }}
        />
        Contacts
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

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHouse,
//   faNotesMedical,
//   faBook,
//   faClipboard,
//   faCalendarDays,
//   faChartBar,
//   faUserCircle,
//   faTasks,
//   faContactBook,
//   faPowerOff,
// } from "@fortawesome/free-solid-svg-icons";
// import { Container, Navbar } from "react-bootstrap";

// const DoctorsSidebar = () => {

//   return (
//     <div>
//       <div>
//         <div
//           className="  d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
//           style={{ width: "280px" }}
//         >

//           <Navbar.Brand href="#"><img style={{width:'40px', height:'40px'}} className='logo me-2 ' src="./img/logo.jpg" alt="Logo" /> <span className="fw-bold fs-4" style={{color:'rgb(32 139 140)'}}>JANANI</span></Navbar.Brand>

//           <a
//             href="#"
//             className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
//           >
//             <div className=" text-center m-3">
//               <img
//                 src="./img/Our-doctors-img-1.jpg"
//                 alt=""
//                 style={{ width: "70px", height: "70px" }}
//               />
//               <p className="fs-4 fw-bold" style={{color:'rgb(32 139 140)'}}>Sarah Smith</p>
//             </div>
//           </a>
//           <hr />
//           <ul className="nav nav-pills flex-column mb-auto">
//             <li className="nav-item">
//               <a
//                 href="/doctorsdashboard"
//                 className="nav-link link-body-emphasis "
//                 aria-current="page"
//               >
//                 <FontAwesomeIcon
//                   icon={faHouse}
//                   style={{ color: "#803c3c", marginRight: "5px" }}
//                 />
//                 Doctors Dashboard
//               </a>
//             </li>
//             <li>
//               <a href="/doctorsappointment" className="nav-link link-body-emphasis">
//                 <FontAwesomeIcon
//                   icon={faNotesMedical}
//                   style={{ color: "#803c3c", marginRight: "5px" }}
//                 />
//                 View Appointments
//               </a>
//             </li>
//             <li>
//               <a href="/doctorslist" className="nav-link link-body-emphasis">
//                 <FontAwesomeIcon
//                   icon={faBook}
//                   style={{ color: "#803c3c", marginRight: "5px" }}
//                 />
//                 Doctors
//               </a>
//             </li>
//             <li>
//               <a href="/patientslist" className="nav-link link-body-emphasis">
//                 <FontAwesomeIcon
//                   icon={faClipboard}
//                   style={{ color: "#803c3c", marginRight: "5px" }}
//                 />
//                 Patients
//               </a>
//             </li>

//             <li>
//               <a
//                 href="/doctorssettings"
//                 className="nav-link link-body-emphasis"
//               >
//                 <FontAwesomeIcon
//                   icon={faUserCircle}
//                   style={{ color: "#803c3c", marginRight: "5px" }}
//                 />
//                 Settings
//               </a>
//             </li>

//             <li>
//               <a
//                 href="/doctorschat"
//                 className="nav-link link-body-emphasis"
//               >
//                 <FontAwesomeIcon
//                   icon={faChartBar}
//                   style={{ color: "#803c3c", marginRight: "5px" }}
//                 />
//                 Chat
//               </a>
//             </li>

//             <li>
//               <a
//                 href="/doctorscalender"
//                 className="nav-link link-body-emphasis"
//               >
//                 <FontAwesomeIcon
//                   icon={faCalendarDays}
//                   style={{ color: "#803c3c", marginRight: "5px" }}
//                 />
//                 Calendar
//               </a>
//             </li>

//             <li>
//               <a
//                 href="/doctorscontact"
//                 className="nav-link link-body-emphasis"
//               >
//                 <FontAwesomeIcon
//                   icon={faContactBook}
//                   style={{ color: "#803c3c", marginRight: "5px" }}
//                 />
//                 Contacts
//               </a>
//             </li>

//             <li>
//               <a
//                 href="/"
//                 className="nav-link link-body-emphasis"
//               >
//                 <FontAwesomeIcon
//                   icon={faPowerOff}
//                   style={{ color: "#803c3c", marginRight: "5px" }}
//                 />
//                 Logout
//               </a>
//             </li>

//           </ul>
//           <hr />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorsSidebar;
