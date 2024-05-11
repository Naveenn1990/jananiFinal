import React, { useEffect, useState } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import { Container, Form } from 'react-bootstrap';
import Aos from 'aos';
import { Breadcrumbs, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';


export const Doctors = () => {
const navigate = useNavigate();
    const [SelectedDepartment, setSelectedDepartment] = useState()

    useEffect(() => {
        Aos.init({ duration: 2500 })
        getDoctors()
    }, [])

    // Get Doctors
    const [Doctors, setDoctors] = useState([]);
    
    const getDoctors = () => {
        axios
            .get("http://localhost:8521/api/Doctor/getDoctorsList")
            .then(function (response) {
                // handle success
                setDoctors(
                    response.data.DoctorsInfo?.filter(
                        (data) => data.DoctorType === "hospital"
                    )
                );
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setDoctors(error.response.data.DoctorsInfo);
            });
    };


    return (
        <div>

            <div className='head-back-img' style={{ backgroundImage: "url(./img/all-department-img.jpg)", width: "100%", height: "150px", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>

                <Container>
                    <h1 data-aos='fade-right' data-aos-duration='3000' className='text-dark pt-5 fw-light back-img-head'>Doctors</h1>
                </Container>
            </div>


            <Container className='mt-5'>
            <div className='d-flex justify-content-between'>
                <div className="mb-4">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            className="d-flex gap-1 breadcrumb-hover"
                            color="inherit"
                            to="/"
                        >
                            <FontAwesomeIcon icon={faHouse}
                                style={{ fontSize: '14px', marginTop: '3px' }} />
                            Home
                        </Link>
                        <Typography
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="text.primary"
                        >
                            Doctors
                        </Typography>
                    </Breadcrumbs>
                </div>
                <div>
                <button
                       style={{
                        padding: "6px",
                        border: "none",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "5px",
                        width:"6rem",
                      }}
                        onClick={()=>{navigate("/loginforeveryone")}}
                      >
                        Login
                      </button>
                </div>
                

                </div>

                <div className='text-center mb-2'>
                    <h4 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)" }}>OUR DOCTORS</h4>
                    <p className='fw-light'>Our doctors are specialized in their field and have more than 10 years of experiences.</p>
                </div>

                <div className='d-flex justify-content-end mb-4' >
                    <div className='d-flex gap-2 align-items-center'>
                        <label style={{ color: "rgb(32 139 140)", fontSize: '14px' }}>SELECT DEPARTMENT :</label>
                        <Form.Select onChange={(e) => setSelectedDepartment(e.target.value)} size="md" style={{ width: '200px', maxHeight: '300px', overflow: 'hidden', overflowY: 'scroll' }}>
                            <option value="">Select Department</option>
                            {Doctors?.map((item) => (
                                <>
                                    <option value={item?.Department}>{item?.Department}</option>
                                </>
                            ))}
                        </Form.Select>
                    </div>
                </div>

                <div className='row' >
                    {(SelectedDepartment ? Doctors?.filter((ele) => ele.Department === SelectedDepartment) : Doctors)?.map((item) => {
                        return (<>
                            <Card data-aos="fade-up" data-aos-duration="1500" className='col-sm-12 col-md-6 col-lg-3 m-auto p-0 mb-3' style={{ maxWidth: '17rem' }}>
                                <Card.Img variant="top" />
                                <Link state={{ item: item }} to="/Doctor_Details"><img style={{ width: "100%", height: "200px" }} src={`http://localhost:8521/Doctor/${item?.ProfileImg}`} alt="Doctor-img" /></Link>
                                <Card.Body>
                                    <Card.Title>
                                        <Link state={{ item: item }} className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} to='/Doctor_Details'>Dr.{item?.Firstname} {item?.Lastname}</Link>
                                    </Card.Title>
                                    <p className='fw-bold'>"{item?.Department}"</p>
                                    <Card.Text>
                                        <div>
                                            {item?.Description?.slice(0, 75)}
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </>)
                    })}
                </div>
            </Container>
        </div>
    )
}
