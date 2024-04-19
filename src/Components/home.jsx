import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, ProgressBar } from 'react-bootstrap';
import { Height } from '@mui/icons-material';
import { BiAnalyse, BiLaptop, BiLike, BiMessageDetail, BiPaperPlane, BiArchiveOut } from "react-icons/bi";
import Nav from 'react-bootstrap/Nav';
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import { useEffect } from 'react';
import { ProgressLine } from './ProgressBar/progressLine';
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import parse from "html-react-parser"
import { Link } from 'react-router-dom';


export const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    useEffect(() => {
        AOS.init({ duration: 2500 })
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const [counterOn, setCounterOn] = useState(false);


    // get Banner
    const [GetBannerData, setGetBannerData] = useState([]);
    const getBanner = async () => {
        try {
            const res = await axios.get("http://localhost:8521/api/admin/getBanner");
            if (res.status === 200) {
                setGetBannerData(res.data.success);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // get about us
    const [GetAboutData, setGetAboutData] = useState([]);
    const GetAboutUs = async () => {
        try {
            const res = await axios.get("http://localhost:8521/api/admin/getAboutUs");
            if (res.status === 200) {
                setGetAboutData(res.data.success);
            } else {
                setGetAboutData([]);
            }
        } catch (error) {
            console.log(error);
            setGetAboutData([]);
        }
    };

    // get best hospital
    const [getbestHospital, setbestHospital] = useState([]);
    const getBestHospitalTown = async () => {
        try {
            const res = await axios.get(
                "http://localhost:8521/api/admin/getbestHospital"
            );
            if (res.status === 200) {
                setbestHospital(res.data.success);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Get testimonial
    const [GetTestimonialData, setGetTestimonialData] = useState([]);
    const GetTestimonial = async () => {
        try {
            const res = await axios.get(
                "http://localhost:8521/api/admin/getTestimonial"
            );
            if (res.status === 200) {
                setGetTestimonialData(res.data.success);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // get Clinical execellence
    const [getClinicaldata, setgetClinicaldata] = useState([]);
    const getClinical = async () => {
        try {
            const res = await axios.get(
                "http://localhost:8521/api/admin/getClinical"
            );
            if (res.status === 200) {
                setgetClinicaldata(res.data.success);
            }
        } catch (error) {
            console.log(error.response.data.error);
        }
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

    // Get Blog and lettest news data
    const [BlogDetails, setBlogDetails] = useState([]);
    const GetBlog = async () => {
        try {
            const res = await axios.get("http://localhost:8521/api/admin/getBlog");
            if (res.status === 200) {
                setBlogDetails(res.data.success);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Get Servicrs
    const [Service, setService] = useState([]);
    const getService = () => {
        axios
            .get("http://localhost:8521/api/admin/getService")
            .then(function (response) {
                // handle success
                setService(response.data.Service);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    };

    // get Pharmacy Banner
    const [GetPharmBanData, setGetPharmBanData] = useState([]);
    const getPharmacyBan = async () => {
        try {
            const res = await axios.get(
                "http://localhost:8521/api/admin/getPharmacyBan"
            );
            if (res.status === 200) {
                setGetPharmBanData(res.data.success);
            }
        } catch (error) {
            console.log(error);
        }
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


    useEffect(() => {
        getBanner()
        GetAboutUs()
        getBestHospitalTown()
        GetTestimonial()
        getClinical()
        GetDepartment()
        GetBlog()
        getService()
        getPharmacyBan()
        getDoctors()
    }, [])

    return (
        <div>
            <ProgressLine
                visualParts={[
                    {
                        percentage: "100%",
                        color: "#e30606",

                    }
                ]}
            />

            <Carousel fade>
                {GetBannerData?.map((item) => (
                    <Carousel.Item key={item.id}>
                        <a href={`${item?.bannerLink}`}>
                            <img
                                className="d-block w-100 Home-carousel-img"
                                style={{ height: "500px", imageRendering: 'pixelated', }}
                                src={`http://localhost:8521/banner/${item?.bannerImg}`}
                                alt="Carousel Slide"
                            />
                        </a>
                    </Carousel.Item>
                ))}
            </Carousel>

            <Container fluid className='p-4 all-bg-green' >

                {/* <Nav variant="underline" defaultActiveKey="/home"> */}
                <div className='row justify-content-between'>
                    <div className='col-lg-3' >
                        {/* <Nav.Item>
                                <Nav.Link href="/home">Active</Nav.Link> */}
                        <h5 className='fw-bold mb-4 text-light appointment-header'>CHECK SCHEDULES</h5>
                        <label className='mb-1 text-light' for="name">Department's Name</label><br />
                        <Form.Select className='mb-2 ' aria-label="Default select example">
                            <option>Choose Department</option>
                            <option value="2">Cardiology</option>
                            <option value="3">Dental</option>
                            <option value="4">Neurologist</option>
                            <option value="5">Peditric</option>
                            <option value="6">Urology</option>
                            <option value="7">Xray</option>
                        </Form.Select>

                        <label className='mb-1 text-light' for="name">Doctor's Name</label><br />
                        <Form.Select className='mb-3 ' aria-label="Default select example">
                            <option>Choose Doctor</option>
                            <option value="2">Dr.name 1</option>
                            <option value="3">Dr.name 2</option>
                            <option value="3">Dr.name 3</option>
                            <option value="3">Dr.name 4</option>
                        </Form.Select>
                        <a href="/schedules"> <Button className='red-btn mb-5'></Button></a>
                        {/* </Nav.Item> */}
                    </div>



                    <div className='col-lg-8 ' >
                        {/* <Nav.Item>
                                <Nav.Link eventKey="link-1">Option 2</Nav.Link> */}
                        <div className='row '>
                            <h5 className='fw-bold mb-4 text-light'>BOOK APPOINTMENT</h5>
                            <div className='col-lg-4'>

                                <form>
                                    <label className='mb-1 text-light' for="name" >Patient Name</label><br />
                                    <input className='home-input mb-2' type="text" placeholder='Name' /><br />
                                    <label className='mb-1 text-light' for="date">Choose Date</label>
                                    <input className='home-input mb-2' type="date" />
                                </form>
                            </div>

                            <div className='col-lg-4 mb-2'>
                                <form className=''>
                                    <label className='mb-1 text-light' for="number">Phone Number</label><br />
                                    <input className='home-input mb-2' type="number" placeholder='+123456789' /><br />

                                    <label className='mb-1 text-light' for="name">Department</label><br />
                                    <Form.Select aria-label="Default select example">
                                        <option>Neurologist</option>
                                        <option value="2">Cardiology</option>
                                        <option value="3">Dental</option>
                                        <option value="6">Urology</option>
                                        <option value="5">Peditric</option>
                                    </Form.Select>
                                </form>
                            </div>

                            <div className='col-lg-4'>
                                <form >
                                    <label className='mb-1 text-light' for="email" >Email address</label><br />
                                    <input className='home-input mb-3' type="email" placeholder='example@gmail.com' /><br />
                                    <a href="#"><Button className='red-btn-2 mt-4 mb-2' ></Button></a>
                                </form>
                            </div>
                        </div>
                        {/* </Nav.Item> */}
                    </div>
                </div>
                {/* </Nav > */}

                <p className='text-center text-light '>Please fill out all of the fields correctly. Your records will be saved in our database securely.</p>

            </Container>

            {/* ABOUT US START */}
            <Container className='margin-top about-us '>
                <div className='row align-items-center '>
                    <div data-aos="fade-right" className=' col-sm-12 col-md-6 col-lg-6 '>
                        <img className='img-fluid' src={`http://localhost:8521/AboutUs/${GetAboutData[0]?.AboutImg}`} alt="doctor-img" />
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-6 '>
                        <div className='mb-4'>
                            <h3 className='fw-bold text-center mt-3 ' style={{ color: "rgb(32 139 140)" }}>ABOUT US</h3>
                            <img className='img-fluid' style={{ width: "100%", height: "100px" }} src="./img/red-line.jpg" alt="red-line-img" />
                            <div className='fw-light text-justify mb-3'>{parse(`<div>${GetAboutData[0]?.AboutDescription}</div>`)}</div>

                        </div>
                    </div>
                </div>
            </Container>
            {/* ABOUT US END */}

            {/* HOSPITAL IN TOWN */}
            <Container className='text-center margin-top '>
                <div className='mb-3'>
                    <h3 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)" }}>BEST HOSPITAL IN TOWN</h3>
                    <p className='fw-light mb-2'>When It Comes to Health Care</p>
                    <ProgressBar variant="danger" animated now={100} style={{ height: '1px', width: '250px', margin: 'auto' }} />
                </div>
                <div className='row align-items-center justify-content-center '>
                    {getbestHospital?.slice(0, 6)?.map((item) => (
                        <div className='col-md-6 col-lg-4 mb-4'>
                            <span data-aos="fade-right"  >
                                <img src={`http://localhost:8521/BestHospital/${item?.Icon}`} alt="" style={{ width: '30px', height: '30px', imageRendering: 'pixelated', marginBottom: '20px' }} />
                            </span>
                            <h5 className='fw-semibold'>{item?.Header}</h5>
                            <p className='fw-light'>{item?.Description}</p>
                        </div>
                    ))}
                </div>
            </Container>
            {/* HOSPITAL IN TOWN */}

            {/* OUR DOCTORS */}
            <Container className='margin-top '>
                <div className='text-center mb-3'>
                    <h4 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)" }}>OUR DOCTORS</h4>
                    <p className='fw-light mb-2'>Our doctors are specialized in their field and have more than 10 years of experiences.</p>
                    <ProgressBar variant="danger" animated now={100} style={{ height: '1px', width: '250px', margin: 'auto' }} />
                </div>

                <div className='row align-items-center ' >
                    {Doctors?.slice(0, 4)?.map((item) => {
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

                    {/* <Card data-aos="fade-up" data-aos-duration="2000" className='col-sm-12 col-md-6 col-lg-3 m-auto p-0 mb-3' style={{ width: '17rem' }}>
                        <Card.Img variant="top" />
                        <a href="/drName2"><img style={{ width: "100%", height: "200px" }} src="./img/Our-doctors-img-2.jpg" alt="Doctor-img" /></a>
                        <Card.Body>

                            <Card.Title>
                                <a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href='/drName2'>Dr. Kathryn Wood</a>
                            </Card.Title>
                            <p className='fw-bold'>"Pulomanry"</p>
                            <Card.Text>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsa.
                            </Card.Text>
                        </Card.Body>
                    </Card>



                    <Card data-aos="fade-up" data-aos-duration="2500" className='col-sm-12 col-md-6 col-lg-3 m-auto p-0 mb-3' style={{ width: '17rem' }}>
                        <Card.Img variant="top" />
                        <a href="/drName3"><img style={{ width: "100%", height: "200px" }} src="./img/Our-doctors-img-3.jpg" alt="Doctor-img" /></a>
                        <Card.Body>

                            <Card.Title>
                                <a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href='/drName3'>Dr. Hooman Azmi</a>
                            </Card.Title>
                            <p className='fw-bold'>"Dental"</p>
                            <Card.Text>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsa.                               </Card.Text>
                        </Card.Body>
                    </Card>



                    <Card data-aos="fade-up" data-aos-duration="3000" className='col-sm-12 col-md-6 col-lg-3 m-auto p-0 mb-3' style={{ width: '17rem' }}>
                        <Card.Img variant="top" />
                        <a href="/drName4"><img style={{ width: "100%", height: "200px" }} src="./img/Our-doctors-img-4.jpg" alt="Doctor-img" /></a>
                        <Card.Body>

                            <Card.Title>
                                <a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href='/drName4'>Dr. Peter Parker</a>
                            </Card.Title>
                            <p className='fw-bold'>"Neurologist"</p>
                            <Card.Text>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsa.</Card.Text>
                        </Card.Body>
                    </Card> */}

                </div>
                <a href="/doctors" className='text-decoration-none'>
                    <div className='d-flex justify-content-end'>
                        <button className=" more-btn_0 learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="butt-text">More Doctors</span>
                        </button>
                    </div>
                </a>
            </Container>
            {/* OUR DOCTORS */}

            {/* OUR SERVICES START */}
            <Container className='margin-top '>
                <div>
                    <div className='mb-5'>
                        <h4 className='text-center fw-bold ' style={{ color: "rgb(32 139 140)" }}>OUR SERVICES</h4>
                        <ProgressBar variant="danger" animated now={100} style={{ height: '1px', width: '250px', margin: 'auto', }} />
                    </div>
                    <div className='row mb-3'>
                        {Service?.slice(0, 4)?.map((item) => (
                            <>
                                <Card data-aos="fade-up" data-aos-duration="1500" className=' col-lg-3 m-auto mb-2 p-0' style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src={`http://localhost:8521/ServiceManagement/${item?.ServiceImage}`} alt="service-img" className='card_img_0' />
                                    <Card.Body>
                                        <Card.Title>
                                            <Link
                                                className='fw-semibold'
                                                style={{
                                                    textDecoration: "none",
                                                    color: "rgb(32 139 140)"
                                                }}
                                                to="/service_details" state={{ item: item }}>
                                                {item?.ServiceTitle}
                                            </Link>
                                        </Card.Title>
                                        <Card.Text><div>{parse(`<div>${item?.ServiceDescription?.slice(0, 100)}...</div>`)}</div></Card.Text>
                                        <Link to='/service_details' state={{ item: item }}><Button className='green-btn mt-2'></Button>{' '} </Link>
                                    </Card.Body>
                                </Card>
                            </>
                        ))}
                    </div>
                    <a href="/service" className='text-decoration-none'>
                        <div className='d-flex justify-content-end'>
                            <button className=" more-btn_0 learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="butt-text">More Services</span>
                            </button>
                        </div>
                    </a>
                </div>
            </Container>
            {/* OUR SERVICES END */}

            {/* LATEST NEWS START */}
            <Container className='margin-top '>
                <div className='text-center mb-5'>
                    <h3 className='text-center fw-bold' style={{ color: "rgb(32 139 140)" }}> LATEST NEWS</h3>
                    <p className='mb-2'>Our department & special service</p>
                    <ProgressBar variant="danger" animated now={100} style={{ height: '1px', width: '250px', margin: 'auto', }} />
                </div>

                <div className='row justify-content-evenly me-0'>
                    {BlogDetails?.slice(0, 3)?.map((item) => {
                        return (<>
                            <div data-aos="zoom-in-up" className='col-md-6 col-lg-3 d-flex justify-content-evenly p-0 mb-3'>
                                <div>
                                    <img className='img-fluid card_img_0' src={`http://localhost:8521/Blog/${item?.BlogImg}`} alt="" />
                                    <div className="d-flex gap-2">
                                        {/* <div className='latest'>
                                            <p className='latest-date'>25 <br /> Oct</p> <br />
                                        </div> */}
                                        <div className='mt-2'>
                                            <a style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="/eventBlog">Tag: {item?.BlogTag}</a>
                                            {/* <h6><a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="/eventBlog">Latest blog with image</a></h6> */}
                                            <p style={{ width: '243px', textAlign: 'justify' }} >{parse(`<div>${item?.BlogDescription?.slice(0, 90)}...</div>`)}</p>
                                        </div>
                                    </div>
                                    <Link to='/eventBlog' state={{ item: item }}><Button className='green-btn mt-2'></Button></Link>
                                </div>
                            </div>
                        </>)
                    })}
                </div>
                <a href="/Blog_Details" className='text-decoration-none'>
                    <div className='d-flex justify-content-end'>
                        <button className=" more-btn_0 learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="butt-text">More News</span>
                        </button>
                    </div>
                </a>
            </Container>
            {/* LATEST NEWS END */}

            {/* PHARMACY START */}
            <Container fluid className='margin-top '>
                <div data-aos="fade-up" className='row align-items-center me-0'>
                    <div className='col-lg-6 pharmacy-text'>
                        <h5 className='fs-1 fw-semibold' style={{ color: "rgb(32 139 140)" }}>{GetPharmBanData[0]?.PharmacySubTitle}</h5>
                        <h1 className='pharmacy-heading'>{GetPharmBanData[0]?.PharmacyTitle}</h1>
                        <a href="/pharmacy"><Button className='red-btn-4 mb-4'></Button></a>
                    </div>

                    <div data-aos="fade-up" className='col-lg-6'>
                        <a href={GetPharmBanData[0]?.PharmacyBanLink}>
                            <img className='img-fluid' src={`http://localhost:8521/PharmacyBanner/${GetPharmBanData[0]?.PharmacyBan}`} alt="store-img" />
                        </a>
                    </div>
                </div>

            </Container>
            {/* PHARMACY END */}

            {/* CLINICAL EXLENCE START */}
            <div className='margin-top img-fluid' style={{ backgroundImage: "url(./img/clinical-img.jpg)", width: "100%", minHeight: '300px', padding: '20px', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "center", backgroundAttachment: 'fixed' }}>
                <h2 className=' fw-bold text-center text-dark p-3'>
                    CLINICAL EXCELLENCE
                </h2>
                <Container>
                    <div className="row justify-content-evenly ">
                        {getClinicaldata?.slice(0, 4)?.map((item) => (
                            <div className="col-lg-3 counter-up-border mb-3" >
                                <div className='counter-up'>
                                    <ScrollTrigger
                                        onEnter={() => setCounterOn(true)}
                                        onExit={() => setCounterOn(false)}
                                    >
                                        <h5 >
                                            {counterOn && (
                                                <CountUp
                                                    start={0}
                                                    end={item?.FieldNumber}
                                                    duration={2}
                                                    delay={0}
                                                />
                                            )}
                                        </h5>

                                    </ScrollTrigger>
                                    <FontAwesomeIcon icon={faPlus} />
                                    <span className='fw-bold text-dark'>{item?.FieldName1}</span>
                                </div>
                                <p>{item?.FieldName2}</p>
                            </div>
                        ))}


                        {/* <div className="col-lg-3 counter-up-border mb-3">
                                <div className='counter-up'>
                                    <ScrollTrigger
                                        onEnter={() => setCounterOn(true)}
                                        onExit={() => setCounterOn(false)}
                                    >
                                        <h5 >
                                            {counterOn && (
                                                <CountUp
                                                    start={0}
                                                    end={300}
                                                    duration={2}
                                                    delay={0}
                                                />
                                            )}
                                        </h5>

                                    </ScrollTrigger>
                                    <FontAwesomeIcon icon={faPlus} />
                                    <span className='fw-bold text-dark'>Doctors</span>
                                </div>
                                <p>Doctors in team</p>
                            </div>

                            <div className="col-lg-2 counter-up-border mb-3">
                                <div className='counter-up'>
                                    <ScrollTrigger
                                        onEnter={() => setCounterOn(true)}
                                        onExit={() => setCounterOn(false)}
                                    >
                                        <h5 >
                                            {counterOn && (
                                                <CountUp
                                                    start={0}
                                                    end={2}
                                                    duration={2}
                                                    delay={0}
                                                />
                                            )}
                                        </h5>

                                    </ScrollTrigger>
                                    <span className='fw-bold text-dark'>Millons</span>
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                                <p>Patients</p>
                            </div>

                            <div className="col-lg-4 counter-up-border mb-3" style={{ width: '300px' }}>
                                <div className='counter-up'>
                                    <ScrollTrigger
                                        onEnter={() => setCounterOn(true)}
                                        onExit={() => setCounterOn(false)}
                                    >
                                        <h5 >
                                            {counterOn && (
                                                <CountUp
                                                    start={0}
                                                    end={83000}
                                                    duration={2}
                                                    delay={0}
                                                />
                                            )}
                                        </h5>

                                    </ScrollTrigger>
                                    <FontAwesomeIcon icon={faPlus} />
                                    <span className='fw-bold text-dark'>Surgeries Perfomed</span>
                                </div>
                                <p>Surgeries</p>
                            </div> */}

                    </div>
                </Container>
            </div>
            {/* CLINICAL EXLENCE END */}

            {/* DEPARTMENT START */}
            <Container className='margin-top p-0 '>
                <div className='mb-5'>
                    <h4 className='text-center fw-bold  mb-3' style={{ color: "rgb(32 139 140)" }}>HOSPITAL DEPARTMENT</h4>
                    <ProgressBar variant="danger" animated now={100} style={{ height: '1px', width: '250px', margin: 'auto', }} />
                </div>
                <div className='row me-0'>

                    {GetDepartmentData?.slice(0, 8)?.map((item) => {
                        return (<>
                            <Card data-aos="fade-up" data-aos-duration='1500' className='col-sm-12 col-md-6 col-lg-3 m-auto mb-3 p-0' style={{ width: '15rem' }}>
                                <Card.Img variant="top" />
                                <Link state={{ item: item }} to="/Department_Details"><img className='card_img_0' src={`http://localhost:8521/HospitalDepartment/${item?.DepartmentImg}`} alt="Doctor-img" /></Link>
                                <Card.Body>
                                    <Card.Title> <Link state={{ item: item }} className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} to="/Department_Details">{item?.DepartmentName}</Link></Card.Title>
                                    <Card.Text>
                                        <div>
                                            {parse(`<div>${item?.Description?.slice(0, 75)}...</div>`)}
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </>)
                    })}
                </div>
                <a href="/departments" className='text-decoration-none'>
                    <div className='d-flex justify-content-end'>
                        <button className=" more-btn_0 learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="butt-text"> Departments</span>
                        </button>
                    </div>
                </a>
            </Container>
            {/* DEPARTMENT END */}

            {/* TESTIMONIAL START */}
            <Container className='margin-top '>
                <div>
                    <div className='mb-5'>
                        <h4 className='text-center fw-bold mb-3' style={{ color: "rgb(32 139 140)" }}> TESTIMONIALS</h4>
                        <ProgressBar variant="danger" animated now={100} style={{ height: '1px', width: '250px', margin: 'auto', }} />
                    </div>
                    <Slider {...settings}>
                        {GetTestimonialData?.map((item) => (
                            <div data-aos="fade-left" className='d-flex justify-content-center'>
                                <div style={{ width: '40%' }}>
                                    <img className='testimonial-img' src={`http://localhost:8521/Testimonial/${item?.Img}`} alt="patient-img" />
                                    <p className='text-center fw-bold m-0'>{item?.Name}</p>
                                    <p className='text-center'>{parse(`<div>${item?.Description}</div>`)}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
            {/* TESTIMONIAL START */}

            {/* APPOINTMENT START */}
            <Container className='margin-top '>
                <div className='row text-center justify-content-center  gap-3 '>

                    <a data-aos="fade-up" data-aos-duration="1000" className='text-decoration-none text-dark  col-md-6 col-lg-2 appointment-icon' href="#">
                        <img src="./img/appointment-img.svg" alt="appointment-icon" />
                        <p>Book Appointment</p>
                    </a>

                    <a data-aos="fade-up" data-aos-duration="1500" className='text-decoration-none text-dark col-md-6 col-lg-2 appointment-icon' href="#">
                        <img className='' src="./img/appointment-img-2.svg" alt="appointment-icon" />
                        <p>Book Health Check-Up</p></a>

                    <a data-aos="fade-up" data-aos-duration="2000" className='text-decoration-none text-dark col-md-6 col-lg-2 appointment-icon' href="#">
                        <img className='' src="./img/appointment-img-3.svg" alt="appointment-icon" />
                        <p>Consult Online</p>
                    </a>

                    <a data-aos="fade-up" data-aos-duration="2500" className='text-decoration-none text-dark col-md-6 col-lg-2 appointment-icon' href="/pharmacy">
                        <img className='' src="./img/appointment-img-4.svg" alt="appointment-icon" />
                        <p>Buy Medicine</p>
                    </a>

                    <a data-aos="fade-up" data-aos-duration="3000" className='text-decoration-none text-dark col-md-6 col-lg-2 appointment-icon' href="/contact">
                        <img className='' src="./img/appointment-img-5.svg" alt="appointment-icon" />
                        <p>Find Hospital</p>
                    </a>

                    <a data-aos="fade-up" data-aos-duration="3500" className='text-decoration-none text-dark col-md-6 col-lg-2 appointment-icon' href="/patientPortal">
                        <img className='' src="./img/appointment-img-6.svg" alt="appointment-icon" />
                        <p>View Health Record</p>
                    </a>

                </div>

            </Container>
            {/* APPOINTMENT END */}

        </div>
    )
}
