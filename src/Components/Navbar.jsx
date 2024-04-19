import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineArrowRight } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,  } from 'react-router-dom';

function NavScroll() {


    // Get Hospital Department
    const [GetDepartmentData, setGetDepartmentData] = useState([]);
    const GetDepartment = async () => {
        try {
            const res = await axios.get(
                "http://localhost:8521/api/admin/getDepartment"
            );
            if (res.status === 200) {
                setGetDepartmentData(res.data.success);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetDepartment()
    }, [])

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary p-0">
                <Container fluid>
                    <Navbar.Brand><img className='logo ' src="./img/logo.jpg" alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 "
                            navbarScroll
                        >
                            <Nav.Link className='navigation-all' href="/home">HOME</Nav.Link>
                            <div className="dropdown">
                                <a href="/doctors"><button style={{ background: 'none' }} className="dropbtn navigation-all">DOCTORS</button></a>
                                {/* <div className="dropdown-content">
                                    <div className="dropdown-1">
                                        {Doctors?.map((item) => (
                                            <>
                                                <Link to="/cardiology" >
                                                    <button className="dropbtn-1 ">{item?.Department}</button>
                                                    <FontAwesomeIcon icon={faAngleRight} />
                                                </Link>
                                            </>
                                        ))}
                                    </div>
                                </div> */}
                            </div>

                            <div className="dropdown">
                                <a href="/departments"><button style={{ background: 'none' }} className="dropbtn navigation-all">DEPARTMENTS <FontAwesomeIcon icon={faAngleDown} fade style={{ color: "#000", }} /></button></a>
                                <div className="dropdown-content">
                                    {GetDepartmentData?.map((item) => (<>
                                        <Link onClick={window.scrollBy(0, -50)} state={{ item: item }} to="/Department_Details">{item?.DepartmentName}</Link>
                                    </>))}
                                </div>
                            </div>

                            <Nav.Link className='navigation-all' href="/gallery">GALLERY</Nav.Link>
                            <Nav.Link className='navigation-all' href="/service">SERVICES</Nav.Link>
                            <Nav.Link className='navigation-all' href="/pharmacy">PHARMACY</Nav.Link>
                            <Nav.Link className='navigation-all' href="/diagnostic">LAB</Nav.Link>
                            <Nav.Link className='navigation-all' href="/contact" >CONTACT</Nav.Link>
                            <Nav.Link className='navigation-all' href="/patientPortal" >PATIENT PORTAL</Nav.Link>
                            <Nav.Link className='navigation-all' href="/Blog_Details">BLOG</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>


        </>

    );
}

export default NavScroll;







