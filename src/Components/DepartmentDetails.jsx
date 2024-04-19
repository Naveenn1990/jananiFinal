import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneVolume,
    faEnvelope,
    faAnglesRight
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import Aos from 'aos';
import { Breadcrumbs, Typography } from "@mui/material";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, } from 'react-router-dom';
import axios from 'axios';
import parse from "html-react-parser";

export const DepartmentDetails = () => {

    const location = useLocation()
    const { item } = location.state
    console.log("itemmmm", item);

    useEffect(() => {
        window.scrollTo(0, 0)
        Aos.init({ duration: 2500 })
        GetDepartment()
    }, [])


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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

    return (
        <div>


            <div className=' head-back-img' style={{ backgroundImage: "url(./img/all-department-img.jpg)", width: "100%", height: "150px", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>

                <Container>
                    <h1 className='text-dark pt-5 fw-light back-img-head'>Departments</h1>
                </Container>
            </div>



            <Container className='mt-5'>
                <div className="mb-4">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            className="d-flex gap-1 breadcrumb-hover"
                            color="inherit"
                            to="/home"
                        >
                            <FontAwesomeIcon icon={faHouse}
                                style={{ fontSize: '14px', marginTop: '3px' }} />
                            Home
                        </Link>

                        <Link
                            underline="hover"
                            className="d-flex gap-1 breadcrumb-hover"
                            color="inherit"
                            to="/departments"
                        >
                            Departments
                        </Link>

                        <Typography
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="text.primary"
                        >
                            {item?.DepartmentName}
                        </Typography>
                    </Breadcrumbs>
                </div>

                <div data-aos="fade-right" className='row  mb-2'>
                    <div className='col-lg-4'>
                        <img className='img-fluid m-auto mb-3 mt-2' style={{ width: "100%", height: "300px", borderRadius: '10px' }} src={`http://localhost:8521/HospitalDepartment/${item?.DepartmentImg}`} alt="department-img" />
                    </div>
                    <div className='col-lg-6 mb-3'>
                        <h3 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)" }} >{item?.DepartmentName}</h3>
                        <p style={{ textAlign: 'justify' }}>{parse(`<div>${item?.Description}</div>`)}</p>
                    </div>
                    {/* <div className='col-lg-4 ms-auto'>
                        <h5 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)" }}>Other Deaprtments</h5>
                        <ul>
                            <a style={{ listStyle: "none", color: "black" }} href="/urology"> <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Urology</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/cardiology">  <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Cardiology</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/dental">  <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Dental</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/neurologist"> <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Neurologist</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/pediatric">  <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Pediatric</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/traumatology">  <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Traumatology</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/xray"> <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />X-ray</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/pulmonary"> <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Pulmonary</li></a>
                        </ul>
                    </div> */}
                </div>

                <div className='mb-4'>
                    <h5 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)" }}>Contact Details</h5>
                    <a className='text-dark' href="/contact"> <FontAwesomeIcon icon={faEnvelope} beatFade className='me-2' />{item?.Email}</a> <br />
                    <a className='text-dark' href="/contact"> <FontAwesomeIcon icon={faPhoneVolume} beatFade className='me-2' />{item?.Number}</a> <br />
                </div>

                <div>
                    <h3 className='fw-bold mb-2 text-center' style={{ color: "rgb(32 139 140)" }}> Other Derpartments </h3>
                    <Slider {...settings}>
                        {GetDepartmentData?.map((item) => (
                            <>
                                <div>
                                    <Card data-aos="fade-up" data-aos-duration="1500" className='m-auto' style={{ width: '15rem', }}>
                                        <Card.Img variant="top" />
                                        <Link onClick={window.scrollTo(0, 0)} state={{ item: item }} to="/Department_Details"><img style={{ width: "100%", height: "180px" }} src={`http://localhost:8521/HospitalDepartment/${item?.DepartmentImg}`} alt="Doctor-img" /></Link>
                                        <Card.Body>
                                            <Card.Title> <Link onClick={window.scrollTo(0, 0)} state={{ item: item }} className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} to="/Department_Details">{item?.DepartmentName}</Link></Card.Title>
                                            <Card.Text>
                                                <div>
                                                    {parse(`<div>${item?.Description?.slice(0, 75)}</div>`)}
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </>
                        ))}
                    </Slider>
                </div>

            </Container>

        </div>
    )
}
