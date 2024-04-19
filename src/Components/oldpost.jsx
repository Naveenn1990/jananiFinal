import React, { useEffect, useState } from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from "react-grid-carousel";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Oldpost = () => {
    return (
        <>


            <div style={{ backgroundImage: "url(./img/all-department-img.jpg)", width: "100%", height: "150px", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>

                <Container>
                    <h1 className='text-dark pt-5 fw-light'>Gallery</h1>
                </Container>
            </div>


            <Container className="mt-5">
            <div>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            className="d-flex gap-1 breadcrumb-hover"
                            color="inherit"
                            href="/"
                        >
                         <FontAwesomeIcon icon={faHouse}
                          style={{fontSize:'14px', marginTop:'3px'}} />
                            Home
                        </Link>
                        <Typography
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="text.primary"
                        >
                            Gallery
                        </Typography>
                    </Breadcrumbs>
                </div>


                <div className="container mt-4">
               
                <Carousel cols={4} rows={1} gap={10} loop>
                        <Carousel.Item data-aos='fade-up' data-aos-duration='1500'>
                            <Card data-aos='fade-up' data-aos-duration='1500' className="col-3" style={{ width: '14rem', }}>
                                <Card.Img variant="top" />
                                <img style={{ width: "100%", height: "180px" }} src="./img/department-img-1.jpg" alt="Doctor-img" />
                                <Card.Body>
                                    <p className='fw-semibold m-0'>Inpatient Room</p>
                                    <p className='fw-light' style={{ fontStyle: "italic" }} >Facility</p>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card data-aos='fade-up' data-aos-duration='2000' className="col-3" style={{ width: '14rem', }}>
                                <Card.Img variant="top" />
                                <img style={{ width: "100%", height: "180px" }} src="./img/department-img-2.jpg" alt="Doctor-img" />
                                <Card.Body>
                                    <p className='fw-semibold m-0'>Inpatient Room</p>
                                    <p className='fw-light' style={{ fontStyle: "italic" }} >Facility</p>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card data-aos='fade-up' data-aos-duration='2500' className="col-3" style={{ width: '14rem', }}>
                                <Card.Img variant="top" />
                                <img style={{ width: "100%", height: "180px" }} src="./img/department-img-3.jpg" alt="Doctor-img" />
                                <Card.Body>
                                    <p className='fw-semibold m-0'>Inpatient Room</p>
                                    <p className='fw-light' style={{ fontStyle: "italic" }} >Facility</p>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card data-aos='fade-up' data-aos-duration='3000' className="col-3" style={{ width: '14rem', }}>
                                <Card.Img variant="top" />
                                <img style={{ width: "100%", height: "180px" }} src="./img/department-img-4.jpg" alt="Doctor-img" />
                                <Card.Body>
                                    <p className='fw-semibold m-0'>Inpatient Room</p>
                                    <p className='fw-light' style={{ fontStyle: "italic" }} >Facility</p>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item data-aos='fade-up' data-aos-duration='1500'>
                            <Card data-aos='fade-up' data-aos-duration='1500' className="col-3" style={{ width: '14rem', }}>
                                <Card.Img variant="top" />
                                <img style={{ width: "100%", height: "180px" }} src="./img/department-img-5.jpg" alt="Doctor-img" />
                                <Card.Body>
                                    <p className='fw-semibold m-0'>Inpatient Room</p>
                                    <p className='fw-light' style={{ fontStyle: "italic" }} >Facility</p>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card data-aos='fade-up' data-aos-duration='2000' className="col-3" style={{ width: '14rem', }}>
                                <Card.Img variant="top" />
                                <img style={{ width: "100%", height: "180px" }} src="./img/department-img-6.jpg" alt="Doctor-img" />
                                <Card.Body>
                                    <p className='fw-semibold m-0'>Inpatient Room</p>
                                    <p className='fw-light' style={{ fontStyle: "italic" }} >Facility</p>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card data-aos='fade-up' data-aos-duration='2500' className="col-3" style={{ width: '14rem', }}>
                                <Card.Img variant="top" />
                                <img style={{ width: "100%", height: "180px" }} src="./img/department-img-7.jpg" alt="Doctor-img" />
                                <Card.Body>
                                    <p className='fw-semibold m-0'>Inpatient Room</p>
                                    <p className='fw-light' style={{ fontStyle: "italic" }} >Facility</p>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card data-aos='fade-up' data-aos-duration='3000' className="col-3" style={{ width: '14rem', }}>
                                <Card.Img variant="top" />
                                <img style={{ width: "100%", height: "180px" }} src="./img/department-img-8.jpg" alt="Doctor-img" />
                                <Card.Body>
                                    <p className='fw-semibold m-0'>Inpatient Room</p>
                                    <p className='fw-light' style={{ fontStyle: "italic" }} >Facility</p>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>

                    </Carousel>


                    {/* <div className="mb-5 row gap-2 align-items-center justify-content-center">  
                    <Card className="col-3" style={{ width: '14rem', }}>
                            <Card.Img variant="top" />
                            <img style={{ width: "100%", height: "180px" }} src="./img/department-img-1.jpg" alt="Doctor-img" />
                            <Card.Body>
                                <p className='fw-semibold m-0'>Inpatient Room</p>
                                <p className='fw-light' style={{fontStyle: "italic"}} >Facility</p>
                            </Card.Body>
                        </Card>


                        <Card className="col-3" style={{ width: '14rem', }}>
                            <Card.Img variant="top" />
                            <img style={{ width: "100%", height: "180px" }} src="./img/department-img-2.jpg" alt="Doctor-img" />
                            <Card.Body>
                                <p className='fw-semibold m-0'>Inpatient Room</p>
                                <p className='fw-light' style={{fontStyle: "italic"}} >Facility</p>
                            </Card.Body>
                        </Card>

                        <Card className="col-3"  style={{ width: '14rem', }}>
                            <Card.Img variant="top" />
                            <img style={{ width: "100%", height: "180px" }} src="./img/department-img-3.jpg" alt="Doctor-img" />
                            <Card.Body>
                                <p className='fw-semibold m-0'>Inpatient Room</p>
                                <p className='fw-light' style={{fontStyle: "italic"}} >Facility</p>
                            </Card.Body>
                        </Card>

                        <Card className="col-3" style={{ width: '14rem', }}>
                            <Card.Img variant="top" />
                            <img style={{ width: "100%", height: "180px" }} src="./img/department-img-4.jpg" alt="Doctor-img" />
                            <Card.Body>
                                <p className='fw-semibold m-0'>Inpatient Room</p>
                                <p className='fw-light' style={{fontStyle: "italic"}} >Facility</p>
                            </Card.Body>
                        </Card>
                        </div> */}
                        <a href="/gallery"> <Button className="red-btn-6 m-5"></Button> </a>
                    </div>

                  
            </Container>
        </>
    );
};

export default Oldpost;