import React from "react";
import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { BiLogOutCircle } from "react-icons/bi";
// import { BsFillChatDotsFill, BsWhatsapp } from "react-icons/bs";
// import { GrContact } from "react-icons/gr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

function PatienHeader() {
  const user = JSON.parse(sessionStorage.getItem("PatientUser"));

  return (
    <>

    <div>
      <Navbar expand="lg"  >
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {/* <FontAwesomeIcon icon={faBars} /> */}
          <Navbar.Collapse  id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              navbarScroll
              
            >
              <FontAwesomeIcon icon={faBell} style={{width:'30px', height:'30px', marginRight:'12px' , marginTop:'12px'}} />
              <div className="dropdown">
                <a href="#" ><button className="dropbtn navigation-all fs-6" >{user?.Firstname} <img style={{ width: '40px ', marginLeft: '10px', height: '40px', borderRadius: '50%' }} src="./img/testimonial-img-1.webp" alt="img" /></button></a>
                <div className="dropdown-content">
                  <a href="/patientsettings">Account</a>
                  <a href="/patientsettings">Settings</a>
                  <a href="/">Logout</a>

                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar></div>




   
    </>
  );
}

export default PatienHeader;


















// <div
// className="header"
// style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
// >
// <Navbar expand="lg">
//   <Container fluid>
//     <Navbar.Brand href="#">
//       {/* <p className=""></p> */}
//       <h3 style={
//         {
//           color: "rgb(6 160 150)",
//           fontWeight: "600",
//           fontSize: "29px",

//         }}></h3>
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls="navbarScroll" />
//     <Navbar.Collapse id="navbarScroll">
//       <Nav
//         className="ms-auto my-2 my-lg-0"

//         navbarScroll
//       >

//         {/* <div className=" d-flex align-items-center justify-content-center" >
//           <div class="dropdown ">
//             <FontAwesomeIcon icon={faUser}  style={{fontSize:"20px"}}/>

//             <ul class="dropdown-menu">
//               <li><a class="dropdown-item" href="/profile">Profile</a></li>
//               <li><a class="dropdown-item" href="/dashboard"> Logout</a></li>

//             </ul>
//           </div>
//           <div className="m-3" style={{ fontSize: "17px", fontWeight: "600", color: "rgb(6 160 150)" }}>
//             Damon Salvatore{" "}
//             <div
//               className="d-block"
//               style={{ fontSize: "14px", fontWeight: "600" }}
//             >
//               ID:38572147
//             </div>
//           </div>
//         </div> */}
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
// </div>