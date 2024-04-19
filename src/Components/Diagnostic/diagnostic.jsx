import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Container, FloatingLabel, Form, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import LabCard from './labCard';
import { useNavigate } from 'react-router-dom';


export const Diagnostic = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const thankyouClose = () => setShow1(false);
    const thankyouShow = () => setShow1(true);

    return (
        <div>
            <h1 className=' fw-bold p-3 text-center' style={{ color: "rgb(32 139 140)" }}>DIAGNOSTIC</h1>
            <Carousel fade>

                <Carousel.Item>
                    <img
                        className="d-block w-100 lab-carousel"
                        style={{ height: "450px" }}
                        src="./img/diagnostic-slide-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className=' diagnostic-slide'>
                        <Container>
                            <div >
                                <div className=' me-auto text-light fw-bold  lab-carousel-text  '>

                                    <h3 className='fs-1 fw-bold' > TAKE CARE OF <br /> YOUR HEALTH</h3>
                                    <p className='mb-3' >At Hospital, We are dedicated to dignosing all kind of diseases</p>
                                    <Button onClick={handleShow} className='green-btn-2'></Button>
                                </div>
                            </div>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 lab-carousel "
                        style={{ height: "450px" }}
                        src="./img/diagnostic-slide-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className=' diagnostic-slide'>
                        <Container>
                            <div className='row'>
                                <div className='m-auto text-light fw-bold  lab-carousel-text  '>

                                    <h3 className='fs-1 fw-bold '>YEARS OF EXPRERIENCE</h3>
                                    <p className='mb-3'>Since our foundation, we've been <br />delivering diagnostic solutions</p>
                                    <Button onClick={handleShow} className='green-btn-2'></Button>
                                </div>
                            </div>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 lab-carousel"
                        style={{ height: "450px" }}
                        src="./img/diagnostic-slide-3.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className=' diagnostic-slide'>
                        <Container>
                            <div className=''>
                                <div className=' me-auto text-light fw-bold  lab-carousel-text '>

                                    <h3 className='fs-1 fw-bold '> TAKE CARE OF <br /> YOUR HEALTH</h3>
                                    <p className='mb-3'>At Hospital, We are dedicated to dignosing all kind of diseases</p>
                                    <Button onClick={handleShow} className='green-btn-2'></Button>
                                </div>
                            </div>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>


            <Container className='margin-top align-items-center justify-content-center'>
                <div className='row text-center  mb-5'>

                    <a className='text-decoration-none text-dark col-md-6 col-lg-3 appointment-icon m-auto mb-3' href="/gastroenterology">
                        <img className='mb-3' style={{ width: "70px", height: "70px" }} src="./img/diagnostic-img-4.png" alt="appointment-icon" />
                        <p>GASTROENTEROLOGY</p>
                    </a>


                    <a className='text-decoration-none text-dark col-md-6 col-lg-3 appointment-icon m-auto mb-3' href="/gastroenterology">
                        <img className='mb-3' style={{ width: "70px", height: "70px" }} src="./img/diagnostic-img-5.png" alt="appointment-icon" />
                        <p>ORTHOPEDIC</p>
                    </a>


                    <a className='text-decoration-none text-dark col-md-6 col-lg-3 appointment-icon m-auto mb-3' href="/gastroenterology">
                        <img className='mb-3' style={{ width: "70px", height: "70px" }} src="./img/diagnostic-img-6.png" alt="appointment-icon" />
                        <p>SURGERY</p>
                    </a>


                    <a className='text-decoration-none text-dark col-md-6 col-lg-3 appointment-icon m-auto mb-3' href="/gastroenterology">
                        <img className='mb-3' style={{ width: "70px", height: "70px" }} src="./img/diagnostic-img-7.png" alt="appointment-icon" />
                        <p>UROLOGY</p>
                    </a>

                </div>

                <div className='row text-center'>

                    <a className='text-decoration-none text-dark col-md-6 col-lg-3 appointment-icon m-auto mb-3' href="/gastroenterology">
                        <img className='mb-3' style={{ width: "70px", height: "70px" }} src="./img/diagnostic-img-8.png" alt="appointment-icon" />
                        <p>MRI TESTING</p>
                    </a>

                    <a className='text-decoration-none text-dark col-md-6 col-lg-3 appointment-icon m-auto mb-3' href="/gastroenterology">
                        <img className='mb-3' style={{ width: "70px", height: "70px" }} src="./img/diagnostic-img-9.png" alt="appointment-icon" />
                        <p>NEUROSURGERY</p>
                    </a>

                    <a className='text-decoration-none text-dark col-md-6 col-lg-3 appointment-icon m-auto mb-3' href="/gastroenterology">
                        <img className='mb-3' style={{ width: "70px", height: "70px" }} src="./img/diagnostic-img-10.png" alt="appointment-icon" />
                        <p>BLOOD TEST</p>
                    </a>

                    <a className='text-decoration-none text-dark col-md-6 col-lg-3 appointment-icon m-auto mb-3' href="#">
                        <img className='mb-3' style={{ width: "70px", height: "70px" }} src="./img/diagnostic-img-11.png" alt="appointment-icon" />
                        <p>CARDIOLOGY</p>
                    </a>

                </div>

                <Container >

                    <div><LabCard /> </div>

                </Container>

                <Container className='margin-top'>

                    <div>
                        <h4 className='text-center fw-bold mb-5' style={{ color: "rgb(32 139 140)" }}>OUR SERVICES</h4>
                        <div className='row'>

                            <Card className=' col-md-6 col-lg-3 m-auto mb-3 p-0' style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="./img/service-img-1.jpg" alt="service-img" />
                                <Card.Body>
                                    <Card.Title> <a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="#">Nephrologist Care</a> </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
                                    </Card.Text>
                                </Card.Body>
                            </Card>


                            <Card className='col-md-6 col-lg-3 m-auto mb-3 p-0' style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="./img/service-img-2.jpg" alt="service-img" />
                                <Card.Body>
                                    <Card.Title><a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="#">Eye Care</a></Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
                                    </Card.Text>

                                </Card.Body>
                            </Card>


                            <Card className='col-md-6 col-lg-3 m-auto mb-3 p-0' style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="./img/service-img-3.jpg" alt="service-img" />
                                <Card.Body>
                                    <Card.Title><a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="#">Pediatrician Clinic</a></Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                            <Card className='col-md-6 col-lg-3 m-auto mb-3 p-0' style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="./img/service-img-4.jpg" alt="service-img" />
                                <Card.Body>
                                    <Card.Title><a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="#">Prenatal Care</a></Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>

                        <div className='row mt-5'>

                            <Card className=' col-lg-3 m-auto mb-3 p-0' style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="./img/service-img-4.jpg" alt="service-img" />
                                <Card.Body>
                                    <Card.Title> <a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="#">Medical Counseling</a> </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
                                    </Card.Text>
                                </Card.Body>
                            </Card>


                            <Card className=' col-lg-3 m-auto mb-3 p-0' style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="./img/service-img-3.jpg" alt="service-img" />
                                <Card.Body>
                                    <Card.Title><a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="#">Elder Care</a></Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
                                    </Card.Text>

                                </Card.Body>
                            </Card>


                            <Card className=' col-lg-3 m-auto mb-3 ' style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="./img/service-img-2.jpg" alt="service-img" />
                                <Card.Body>
                                    <Card.Title><a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="#">Competetive Doctors</a></Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                            <Card className=' col-lg-3 m-auto mb-3 p-0' style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="./img/service-img-1.jpg" alt="service-img" />
                                <Card.Body>
                                    <Card.Title><a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href="#">Rehabilation Center</a></Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                    </div>

                </Container>

                <Container className='margin-top'>
                    <h4 className='text-center fw-bold mb-5' style={{ color: "rgb(32 139 140)" }}>OUR DOCTORS</h4>
                    <div className='row ' >

                        <Card className='col-lg-3 m-auto  mb-3' style={{ width: '17rem' }}>
                            <Card.Img variant="top" />
                            <a href="/drNamee"><img style={{ width: "100%", height: "200px" }} src="./img/Our-doctors-img-1.jpg" alt="Doctor-img" /></a>
                            <Card.Body>

                                <Card.Title className='text-center'>
                                    <a className='fw-semibold ' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href='/drNamee'>Dr.Veranda Tanum</a>
                                </Card.Title>
                                <p className='text-center fw-bold'>"Pulomanry"</p>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus adfaa inventore necessitatibus dolorem odit recusandae earum?
                                </Card.Text>
                            </Card.Body>
                        </Card>


                        <Card className='col-lg-3 m-auto  mb-3' style={{ width: '17rem' }}>
                            <Card.Img variant="top" />
                            <a href="/drName2"><img style={{ width: "100%", height: "200px" }} src="./img/Our-doctors-img-2.jpg" alt="Doctor-img" /></a>
                            <Card.Body>

                                <Card.Title className='text-center'>
                                    <a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href='/drName2'>Dr. Kathryn Wood</a>
                                </Card.Title>
                                <p className='text-center fw-bold'>"Cardiology"</p>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus adfaa inventore necessitatibus dolorem odit recusandae earum?
                                </Card.Text>
                            </Card.Body>
                        </Card>



                        <Card className='col-lg-3 m-auto mb-3' style={{ width: '17rem' }}>
                            <Card.Img variant="top" />
                            <a href="/drName3"><img style={{ width: "100%", height: "200px" }} src="./img/Our-doctors-img-3.jpg" alt="Doctor-img" /></a>
                            <Card.Body>

                                <Card.Title className='text-center'>
                                    <a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href='/drName3'>Dr. Hooman Azmi</a>
                                </Card.Title>
                                <p className='text-center fw-bold'>"Dental"</p>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus adfaa inventore necessitatibus dolorem odit recusandae earum?
                                </Card.Text>
                            </Card.Body>
                        </Card>



                        <Card className='col-lg-3 m-auto mb-3' style={{ width: '17rem' }}>
                            <Card.Img variant="top" />
                            <a href="/drName4"><img style={{ width: "100%", height: "200px" }} src="./img/Our-doctors-img-4.jpg" alt="Doctor-img" /></a>
                            <Card.Body>

                                <Card.Title className='text-center'>
                                    <a className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} href='/drName4'>Dr. Peter Parker</a>
                                </Card.Title>
                                <p className='text-center fw-bold'>"Neurologist"</p>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus adfaa inventore necessitatibus dolorem odit recusandae earum?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <a href="/doctors">
                        <Button className='mt-5 m-auto d-flex justify-content-center all-bg-green'  >
                            MORE DOCTORS
                        </Button>
                    </a>
                </Container>
            </Container>



            {/* BOOK APPOINTMENT MODAL */}
            <Modal
                show={show}
                onHide={handleClose}
                // backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: '#208b8c', fontWeight: 'bold' }}>Book Your Test</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <FloatingLabel className='mb-3 w-100' controlId="floatingName" label="Name">
                        <Form.Control type="text" placeholder="Name" />
                    </FloatingLabel>

                    <FloatingLabel className='mb-3 w-100' controlId="floatingMobile" label="Mobile">
                        <Form.Control type="number" placeholder="Mobile" />
                    </FloatingLabel>

                    <FloatingLabel className='mb-3 w-100' controlId="floatingEmail" label="Email">
                        <Form.Control type="email" placeholder="Email" />
                    </FloatingLabel>

                    <FloatingLabel className='mb-3 w-100' controlId="floatingName" label="Test Type">
                        <Form.Control type="text" placeholder="Test Type" />
                    </FloatingLabel>

                    <FloatingLabel className='mb-3 w-100' controlId="floatingEmail" label="">
                        <Form.Control type="date" placeholder="" />
                    </FloatingLabel>

                    <Button onClick={thankyouShow} onHide={handleClose} className='all-bg-green w-100'>Submit</Button>


                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer> */}
            </Modal>

            {/* THANK YOU MODAL */}

            <Modal
                show={show1}
                onHide={thankyouClose}
                // backdrop="static"
                keyboard={false}
            >
                <Modal.Header >
                    {/* <Modal.Title>Modal title</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className='col-lg-6'>
                            <h2 style={{color:'#208b8c', fontFamily:'Bricolage_Grotesque variant0'}}>THANK YOU !</h2>
                            <p className='mb-3'>We have received your booking request</p>
                            <h6 className='fw-semibold' style={{fontFamily:'Bricolage_Grotesque variant0'}}>Our medical experts will get in touch with you shortly.....</h6>
                        </div>
                        <div className='col-lg-6'>
                            <img style={{ width: '100%', height: '150px' }} src="./img/Thankyou-image.png" alt="" />
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={thankyouClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer> */}
            </Modal>

        </div>
    )
}
