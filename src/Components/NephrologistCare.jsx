import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneVolume,
    faEnvelope,
    faAnglesRight
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export const NephrologistCare = () => {

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

    return (
        <div>


            <div className='head-back-img' style={{ backgroundImage: "url(./img/all-department-img.jpg)", width: "100%", height: "150px", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>

                <Container>
                    <h1 className='text-dark pt-5 fw-light back-img-head'>Services</h1>
                </Container>
            </div>



            <Container className='mt-5'>


                <div className="mb-4">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            className="d-flex gap-1 breadcrumb-hover"
                            color="inherit"
                            href="/home"
                        >
                         <FontAwesomeIcon icon={faHouse}
                          style={{fontSize:'14px', marginTop:'3px'}} />
                            Home
                        </Link>

                        <Link
                            underline="hover"
                            className="d-flex gap-1 breadcrumb-hover"
                            color="inherit"
                            href="/Service"
                        >
                            Services
                        </Link>
                        
                        <Typography
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="text.primary"
                        >
                            Nephrologist Care 
                        </Typography>
                    </Breadcrumbs>
                </div>

                <div className='row mb-2 '>
                    <div className='col-md-6 col-lg-4 mb-2 '>
                        <img className='img-fluid ' style={{width: "100%", height:"280px", borderRadius: '10px'}} src="./img/department-img-1.jpg" alt="department-img" />
                    </div>
                    <div className='col-md-6  col-lg-4 mb-2'>
                        <h3 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)"}} >Nephrologist Care</h3>
                        <p style={{ textAlign: 'justify' }}>"Here's the story of a lovely lady, who was bringing up three very lovely girls. All of them had hair of gold, like their mother, the youngest one in curls. Here's the store, of a man named Brady, who was busy with three boys of his own. They were four men, living all together, yet they were all alone. 'Til the one day when the lady met this fellow. And they knew it was much more than a hunch, that this group would somehow form a family".</p>
                    </div>
                    <div className='col-md-12 col-lg-4'>
                        <h5 className='fw-bold mb-2 ms-4' style={{ color: "rgb(32 139 140)"}}>Other Services</h5>
                        <ul>
                            <a style={{listStyle:"none" , color:"black"}} href="/nephrologistcare"> <li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight:"10px"}} />Nephrologist Care</li></a>
                            <a style={{listStyle:"none" , color:"black"}} href="/eyecare">  <li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight:"10px"}}/>Eye Care</li></a>
                            <a style={{listStyle:"none" , color:"black"}} href="/pediatricianclinic">  <li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight:"10px"}}/>Pediatrician Clinic</li></a>
                            <a style={{listStyle:"none" , color:"black"}} href="/prentalcare"> <li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight:"10px"}}/>Prental Care</li></a>
                            <a style={{listStyle:"none" , color:"black"}} href="/medicalcounseling">  <li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight:"10px"}}/>Medical Counseling</li></a>
                            <a style={{listStyle:"none" , color:"black"}} href="/rehabilitationcenter">  <li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight:"10px"}}/>Rehabilitation Center</li></a>
                            <a style={{listStyle:"none" , color:"black"}} href="/elderycare"> <li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight:"10px"}}/>Eldery Care</li></a>
                            <a style={{listStyle:"none" , color:"black"}} href="/competetivedoctors"> <li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight:"10px"}}/>Competitive Doctors</li></a>
                        </ul>
                    </div>
                </div>

                <div className='ms-4 mb-4'>
                    <h5 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)"}}>Contact Details</h5>
                    <a className='text-dark' href="/contact"> <FontAwesomeIcon icon={faEnvelope} beatFade /> Nephrologistcare@hospital.com</a> <br />
                    <a className='text-dark' href="/contact"> <FontAwesomeIcon icon={faPhoneVolume} beatFade /> +1 600 200 999</a> <br />
                    <a className='text-dark' href="/contact"> <FontAwesomeIcon icon={faPhoneVolume} beatFade /> +1 600 200 999</a>
                </div>

                <div>
                    <h3 className='fw-bold mb-1 text-center' style={{ color: "rgb(32 139 140)" }}> Other Services </h3>
                    <Slider {...settings}>
                        <div>
                            <Card className='m-auto' style={{ width: '15rem',  }}>
                                <Card.Img variant="top" />
                                <a href="/nephrologistcare"><img style={{ width: "100%", height: "180px" }} src="./img/department-img-8.jpg" alt="Doctor-img" /></a>
                                <Card.Body>
                                    <Card.Title> <a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="/nephrologistcare">Nephrologist Care</a></Card.Title>
                                    <Card.Text>
                                        Here's the story of a lovely lady, who was bringing up three very lovely...
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                        <Card className='m-auto' style={{ width: '15rem' }}>
                            <Card.Img variant="top" />
                            <a href="/eyecare"><img style={{ width: "100%", height: "180px" }} src="./img/department-img-2.jpg" alt="Doctor-img" /></a>
                            <Card.Body>
                                <Card.Title> <a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="/eyecare">Eye Care</a></Card.Title>
                                <Card.Text>
                                    We never thought of findin' a place where we belong. Don't have to stand...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='m-auto' style={{ width: '15rem' }}>
                            <Card.Img variant="top" />
                            <a href="/pediatricianclinic"><img style={{ width: "100%", height: "180px" }} src="./img/department-img-3.jpg" alt="Doctor-img" /></a>
                            <Card.Body>
                                <Card.Title> <a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="/pediatricianclinic">Pediatrician Clinic</a></Card.Title>
                                <Card.Text>
                                    You unlock this door with the key of imagination. Beyond it is another
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='m-auto' style={{ width: '15rem' }}>
                            <Card.Img variant="top" />
                            <a href="/prentalcare"><img style={{ width: "100%", height: "180px" }} src="./img/department-img-4.jpg" alt="Doctor-img" /></a>
                            <Card.Body>
                                <Card.Title> <a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="/prentalcare">Prental Care</a></Card.Title>
                                <Card.Text>
                                    One thousand years ago, superstition and the sword ruled. It was a time of...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='m-auto' style={{ width: '15rem' }}>
                            <Card.Img variant="top" />
                            <a href="/medicalcounseling"><img style={{ width: "100%", height: "180px" }} src="./img/department-img-5.jpg" alt="Doctor-img" /></a>
                            <Card.Body>
                                <Card.Title> <a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="/medicalcounseling">Medical Counseling</a></Card.Title>
                                <Card.Text>
                                    Life is like a hurricane here in Duckburg. Race cars, lasers, aeroplanes - it's...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='m-auto' style={{ width: '15rem' }}>
                            <Card.Img variant="top" />
                            <a href="/rehabilitationcenter"><img style={{ width: "100%", height: "180px" }} src="./img/department-img-6.jpg" alt="Doctor-img" /></a>
                            <Card.Body>
                                <Card.Title> <a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="/rehabilitationcenter">Rehabilitation Center</a></Card.Title>
                                <Card.Text>
                                    Your tread must be light and sure, as though your path were upon rice...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='m-auto' style={{ width: '15rem' }}>
                            <Card.Img variant="top" />
                            <a href="/elderycare"><img style={{ width: "100%", height: "180px" }} src="./img/department-img-7.jpg" alt="Doctor-img" /></a>
                            <Card.Body>
                                <Card.Title> <a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="/elderycare">Eldery Care</a></Card.Title>
                                <Card.Text>
                                    They're creepy and they're kooky, mysterious and spooky.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='m-auto' style={{ width: '15rem' }}>
                            <Card.Img variant="top" />
                            <a href="/competetivedoctors"><img style={{ width: "100%", height: "180px" }} src="./img/department-img-8.jpg" alt="Doctor-img" /></a>
                            <Card.Body>
                                <Card.Title> <a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="/competitivedoctors">Competitive Doctors</a></Card.Title>
                                <Card.Text>
                                    I bet we been together for a million years, And I bet we'll be...</Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    </Slider>
                </div>

            </Container>

        </div>
    )
}
