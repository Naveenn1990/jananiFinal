import React, { useEffect, useState } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneVolume,
    faEnvelope,
    faAnglesRight
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import { Breadcrumbs, Typography } from "@mui/material";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';



const DoctorDetails = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

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

    const location = useLocation()
    const { item } = location.state
    console.log("itemmmm", item);

    useEffect(() => {
        window.scrollTo(0, 0)
        getDoctors()
    }, [])

    return (
        <div>

            <div style={{ backgroundImage: "url(./img/all-department-img.jpg)", width: "100%", height: "150px", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                <Container>
                    <h1 className='text-dark pt-5 fw-light'>Doctors</h1>
                </Container>
            </div>

            <Container className='mt-5'>
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

                        <Link
                            underline="hover"
                            className="d-flex gap-1 breadcrumb-hover"
                            color="inherit"
                            to="/doctors"
                        >
                            Doctors
                        </Link>

                        <Typography
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="text.primary"
                        >
                            {item?.Firstname} {item?.Lastname}
                        </Typography>
                    </Breadcrumbs>
                </div>

                <div>
                    <div className='row mb-2 align-items-center'>
                        <div className='col-md-6 col-lg-4'>
                            <img
                                className='img-fluid mb-3 mt-2'
                                style={{ width: "100%", height: "250px", borderRadius: '10px' }}
                                src={`http://localhost:8521/Doctor/${item?.ProfileImg}`}
                                alt="department-img"
                            />
                        </div>
                        <div className='col-md-6 col-lg-5 mb-4'>
                            <h3 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)" }} >Dr.{item?.Firstname} {item?.Lastname}</h3>
                            <p className='fw-semibold'>{item?.Department}</p>
                            <p style={{ textAlign: 'justify' }} className='mb-3'>{item?.Description}</p>
                            <a href='/schedules'><Button className='red-btn-8'></Button>{' '} </a>
                        </div>

                        {/* <div className='col-md-12 col-lg-3 '>
                            <h5 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)" }}>Other Doctors</h5>
                            <ul>
                                <a style={{ listStyle: "none", color: "black" }} href="/drNamee"> <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Dr name 1</li></a>
                                <a style={{ listStyle: "none", color: "black" }} href="/drName2">  <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Dr name 2</li></a>
                                <a style={{ listStyle: "none", color: "black" }} href="/drName3">  <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Dr name 3</li></a>
                                <a style={{ listStyle: "none", color: "black" }} href="/drName4">  <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Dr name 4</li></a>
                            </ul>
                        </div> */}
                    </div>

                    <div className='mb-4'>
                        <h5 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)" }}>Contact Details</h5>
                        <a className='text-dark' href="/contact"> <FontAwesomeIcon icon={faEnvelope} beatFade className='me-2' />{item?.Email}</a> <br />
                        <a className='text-dark' href="/contact"> <FontAwesomeIcon icon={faPhoneVolume} beatFade className='me-2' />{item?.PhoneNumber}</a> <br />
                    </div>

                    <div>
                        <h3 className='fw-bold mb-2 text-center' style={{ color: "rgb(32 139 140)" }}> Other Doctors </h3>
                        <Slider {...settings}>
                            {Doctors?.map((item, i) => (
                                <>
                                    <div key={i}>
                                        <Card className='m-auto' style={{ width: '16rem', }}>
                                            <Card.Img variant="top" />
                                            <Link onClick={window.scrollTo(0, 0)} state={{ item: item }} to="/Doctor_Details"><img style={{ width: "100%", height: "200px" }} src={`http://localhost:8521/Doctor/${item?.ProfileImg}`} alt="Doctor-img" /></Link>
                                            <Card.Body>
                                                <Card.Title>
                                                    <Link onClick={window.scrollTo(0, 0)} state={{ item: item }} className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} to='/Doctor_Details'>Dr.{item?.Firstname} {item?.Lastname}</Link>
                                                </Card.Title>
                                                <p className='fw-bold'>"{item?.Department}"</p>
                                                <Card.Text>
                                                    <div>
                                                        {item?.Description?.slice(0, 75)}
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </>
                            ))}

                        </Slider>
                    </div>



                </div>

            </Container>

        </div>
    )
}

export default DoctorDetails