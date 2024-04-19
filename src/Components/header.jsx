import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiLogoFacebook, BiLogoTwitter, BiLogoGooglePlus, BiLogoInstagram, BiLogoLinkedin, BiLogoPinterest, BiLogoYoutube, } from 'react-icons/bi';
import { AiOutlineArrowRight } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import NavScroll from './Navbar';


export const Header = () => {


  return (

    <div>

      <Navbar className='text-light navbar-height all-bg-green'  data-bs-theme="dark">
        <Container >
          <Nav.Link href="#home" className='home-contact-number'>Contact: 1-8700-900 </Nav.Link>



          <Nav className="ms-auto fs-5  ">
            <Nav.Link className='text-light nav-icons' href="#facebook"><BiLogoFacebook /></Nav.Link>
            <Nav.Link className='text-light nav-icons' href="#twitter"><BiLogoTwitter /></Nav.Link>
            <Nav.Link className='text-light nav-icons' href="#google"><BiLogoGooglePlus /></Nav.Link>
            <Nav.Link className='text-light nav-icons' href="#instagram"><BiLogoInstagram /></Nav.Link>
            <Nav.Link className='text-light nav-icons' href="#Linkedin"><BiLogoLinkedin /></Nav.Link>
            <Nav.Link className='text-light nav-icons' href="#pinterest"><BiLogoPinterest /></Nav.Link>
            <Nav.Link className='text-light nav-icons' href="#youtube"><BiLogoYoutube /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <NavScroll />

      {/* <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
        <Navbar.Brand href="#"><img className='logo ' src="./img/logo.jpg" alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
               <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className='red-btn-1'></Button>
            </Form>
            
              <Nav.Link className='navigation-all' href="/">HOME</Nav.Link>
              <div className="dropdown">
                 <a href="/doctors"><button className="dropbtn navigation-all">DOCTORS <FontAwesomeIcon icon={faAngleDown} fade style={{color: "#000",}} /></button></a>
                  <div className="dropdown-content">


                     <div className="dropdown-1">
                         <a href="/cardiology"><button className="dropbtn-1">CARDIOLOGY <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: "35px" }} /></button></a>
                         <div className="dropdown-content-1">
                          <a href="/drNamee">Dr name 1</a>
                         <a href="/drName2">Dr name 2</a>
                          <a href="/drName3">Dr name 3</a>
                           <a href="/drName4">Dr name 4</a>
                         </div>
                    </div>

                      <div className="dropdown-1">
                       <a href="/dental"><button className="dropbtn-1">DENTAL <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: "69px" }} /></button></a>
                        <div className="dropdown-content-1">
                       <a href="/drNamee">Dr name 1</a>
                           <a href="/drName2">Dr name 2</a>
                          <a href="/drName3">Dr name 3</a>
                         <a href="/drName4">Dr name 4</a>
                        </div>
                      </div>

                       <div className="dropdown-1">
                        <a href="/neurologist"><button className="dropbtn-1">NEUROLOGIST <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: "28px" }} /></button></a>
                       <div className="dropdown-content-1">
                       <a href="/drNamee">Dr name 1</a>
                           <a href="/drName2">Dr name 2</a>
                           <a href="/drName3">Dr name 3</a>
                          <a href="/drName4">Dr name 4</a>
                        </div>
                      </div>

                      <div className="dropdown-1">
                        <a href="/pediatric"><button className="dropbtn-1">PEDIATRIC <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: "53px" }} /></button></a>
                        <div className="dropdown-content-1">
                        <a href="/drNamee">Dr name 1</a>
                          <a href="/drName2">Dr name 2</a>
                          <a href="/drName3">Dr name 3</a>

                        </div>
                      </div>


                      <div className="dropdown-1">
                        <a href="/traumatology"><button className="dropbtn-1">TRAUMTOLOGY <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: "23px" }} /></button></a>
                        <div className="dropdown-content-1">
                        <a href="/drNamee">Dr name 1</a>
                          <a href="/drName2">Dr name 2</a>
                        <a href="/drName3">Dr name 3</a>
                       </div>
                      </div>

                      <div className="dropdown-1">
                        <a href="/xray"><button className="dropbtn-1">XRAY <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: "83px" }} /></button></a>
                        <div className="dropdown-content-1">
                        <a href="/drNamee">Dr name 1</a>
                          <a href="/drName2">Dr name 2</a>
                          <a href="/drName3">Dr name 3</a>
                        </div>
                      </div>
                    </div>
                  </div>
              




                  <div className="dropdown">
                    <a href="/departments"><button className="dropbtn navigation-all">DEPARTMENTS <FontAwesomeIcon icon={faAngleDown} fade style={{color: "#000",}} /></button></a>
                    <div className="dropdown-content">
                      <a href="/cardiology">CARDIOLOGY</a>
                      <a href="/dental">DENTAL</a>
                      <a href="/neurologist">NEUROLOGIST</a>
                      <a href="/pediatric">PEDIATRIC</a>
                      <a href="/urology">UROLOGY</a>
                      <a href="/traumatology">TRAUMATOLOGY</a>
                      <a href="/xray">XRAY</a>
                    </div>
                  </div>


                  <Nav.Link className='navigation-all' href="/gallery">GALLERY</Nav.Link>
                  <Nav.Link className='navigation-all' href="/service">SERVICES</Nav.Link>
                  <Nav.Link className='navigation-all' href="/event">EVENTS</Nav.Link>
                  <Nav.Link className='navigation-all' href="/eventBlog">BLOG</Nav.Link>
               
                 <div class="dropdown">
                    <button class="dropbtn navigation-all">PAGE</button>
                    <div class="dropdown-content">
                      <a href="/eventBlog">Blog</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>

                  <Nav.Link className='navigation-all' href="/pharmacy">PHARMACY</Nav.Link>
                  <Nav.Link className='navigation-all' href="/diagnostic">LAB</Nav.Link>
                  <Nav.Link className='navigation-all' href="/contact" >CONTACT</Nav.Link>
                  <Nav.Link className='navigation-all' href="/patientPortal" >PATIENT PORTAL</Nav.Link>
                  <Nav.Link className='navigation-all' href="/doctorsdashboard" >DOCTOR PORTAL</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

    </div>


































    // <div>

    // <Navbar className='text-light navbar-height' style={{ backgroundColor: "rgb(32 139 140)" }} data-bs-theme="dark">
    //   <Container >
    //     <Nav.Link href="#home">Contact: 1-8700-900 Emergency: 1-8700-900</Nav.Link>



    //     <Nav className="ms-auto fs-5  ">
    //       <Nav.Link className='text-light nav-icons' href="#facebook"><BiLogoFacebook /></Nav.Link>
    //       <Nav.Link className='text-light nav-icons' href="#twitter"><BiLogoTwitter /></Nav.Link>
    //       <Nav.Link className='text-light nav-icons' href="#google"><BiLogoGooglePlus /></Nav.Link>
    //       <Nav.Link className='text-light nav-icons' href="#instagram"><BiLogoInstagram /></Nav.Link>
    //       <Nav.Link className='text-light nav-icons' href="#Linkedin"><BiLogoLinkedin /></Nav.Link>
    //       <Nav.Link className='text-light nav-icons' href="#pinterest"><BiLogoPinterest /></Nav.Link>
    //       <Nav.Link className='text-light nav-icons' href="#youtube"><BiLogoYoutube /></Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>


    //   <Navbar expand="lg" className="bg-body-tertiary">
    //     <Container fluid >
    //       <div className='row align-items-center '>
    //         <div className='col-2'>
    //           <Navbar.Brand href="#"><img className='logo ' src="./img/logo.jpg" alt="Logo" /></Navbar.Brand>
    //         </div>

    //         <div className='col-4 ms-auto '>
    //           <Navbar.Toggle aria-controls="navbarScroll" />

    // <Form className="d-flex ">
    //   <Form.Control
    //     type="search"
    //     placeholder="Search"
    //     className="me-2"
    //     aria-label="Search"
    //   />
    //   <Button className='red-btn-1' ></Button>
    // </Form>
    //         </div>
    //         <div className='col-4'>
    //           <Navbar.Collapse id="navbarScroll">
    //             <Nav
    //               className=" navbar-navigations"
    //               style={{ maxHeight: '100px' }}
    //               navbarScroll
    //             >
    //               <Nav.Link href="/">HOME</Nav.Link>

    //               <div className="dropdown">
    //                 <a href="/doctors"><button className="dropbtn">DOCTORS <FontAwesomeIcon icon={faAngleDown} fade style={{color: "#000",}} /></button></a>
    //                 <div className="dropdown-content">


    //                   <div className="dropdown-1">
    //                     <a href="/cardiology"><button className="dropbtn-1">CARDIOLOGY <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: "35px" }} /></button></a>
    //                     <div className="dropdown-content-1">
    //                       <a href="/drNamee">Dr name 1</a>
    //                       <a href="/drName2">Dr name 2</a>
    //                       <a href="/drName3">Dr name 3</a>
    //                       <a href="/drName4">Dr name 4</a>
    //                     </div>
    //                   </div>

    //                   <div className="dropdown-1">
    //                     <a href="/dental"><button className="dropbtn-1">DENTAL <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: "68px" }} /></button></a>
    //                     <div className="dropdown-content-1">
    //                     <a href="/drNamee">Dr name 1</a>
    //                       <a href="/drName2">Dr name 2</a>
    //                       <a href="/drName3">Dr name 3</a>
    //                       <a href="/drName4">Dr name 4</a>
    //                     </div>
    //                   </div>

    //                   <div className="dropdown-1">
    //                     <a href="/neurologist"><button className="dropbtn-1">NEUROLOGIST <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: "25px" }} /></button></a>
    //                     <div className="dropdown-content-1">
    //                     <a href="/drNamee">Dr name 1</a>
    //                       <a href="/drName2">Dr name 2</a>
    //                       <a href="/drName3">Dr name 3</a>
    //                       <a href="/drName4">Dr name 4</a>
    //                     </div>
    //                   </div>

    //                   <div className="dropdown-1">
    //                     <a href="/pediatric"><button className="dropbtn-1">PEDIATRIC <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: "50px" }} /></button></a>
    //                     <div className="dropdown-content-1">
    //                     <a href="/drNamee">Dr name 1</a>
    //                       <a href="/drName2">Dr name 2</a>
    //                       <a href="/drName3">Dr name 3</a>

    //                     </div>
    //                   </div>


    //                   <div className="dropdown-1">
    //                     <a href="/traumatology"><button className="dropbtn-1">TRAUMTOLOGY <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: "20px" }} /></button></a>
    //                     <div className="dropdown-content-1">
    //                     <a href="/drNamee">Dr name 1</a>
    //                       <a href="/drName2">Dr name 2</a>
    //                       <a href="/drName3">Dr name 3</a>
    //                     </div>
    //                   </div>

    //                   <div className="dropdown-1">
    //                     <a href="/xray"><button className="dropbtn-1">XRAY <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: "80px" }} /></button></a>
    //                     <div className="dropdown-content-1">
    //                     <a href="/drNamee">Dr name 1</a>
    //                       <a href="/drName2">Dr name 2</a>
    //                       <a href="/drName3">Dr name 3</a>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>



    // <div className="dropdown">
    //   <a href="/departments"><button className="dropbtn">DEPARTMENTS</button></a>
    //   <div className="dropdown-content">
    //     <a href="/cardiology">CARDIOLOGY</a>
    //     <a href="/dental">DENTAL</a>
    //     <a href="/neurologist">NEUROLOGIST</a>
    //     <a href="/pediatric">PEDIATRIC</a>
    //     <a href="/urology">UROLOGY</a>
    //     <a href="/traumatology">TRAUMATOLOGY</a>
    //     <a href="/xray">XRAY</a>
    //   </div>
    // </div>


    // <Nav.Link href="/gallery">GALLERY</Nav.Link>
    // <Nav.Link href="/service">SERVICES</Nav.Link>
    // <Nav.Link href="/event">EVENTS</Nav.Link>

    // <div class="dropdown">
    //   <button class="dropbtn">PAGE</button>
    //   <div class="dropdown-content">
    //     <a href="/eventBlog">Blog</a>
    //     {/* <a href="#">Link 2</a>
    //     <a href="#">Link 3</a> */}
    //   </div>
    // </div>

    // <Nav.Link href="/contact" >CONTACT</Nav.Link>
    // <Nav.Link href="/contact" >LOGIN</Nav.Link>
    //             </Nav>
    //           </Navbar.Collapse>
    //         </div>
    //       </div>
    //     </Container>
    //   </Navbar>


    // </div>
  )
}
