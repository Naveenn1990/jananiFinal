import { faBuilding, faCalendarDays, faSignal, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Container, FloatingLabel, FormLabel, Form } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';


export const StaffCheckSchedule = () => {

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Container className='p-4' >

                <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                    <Nav variant="pills" className="d-flex justify-content-evenly">
                        <Nav.Item>
                            <Nav.Link eventKey="first" className='fw-bold fs-6 text-dark'>Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second" className='fw-bold fs-6 text-dark'>Schedule</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" className='fw-bold fs-6 text-dark'>Appointments</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <hr />

                    <Tab.Content>
                        <Tab.Pane eventKey="first" className='p-2'>
                            <h4 className='fw-bold text-dark p-2'>Doctor Profile</h4>
                            <div className="row align-items-center ">
                                <div className="col-lg-4">
                                    <img src="./img/admin-doctors-list-2.jpg" alt="" style={{ width: '300px', height: '300px', borderRadius: '20px' }} />
                                </div>

                                <div className='col-lg-2'>
                                    <div className='mb-3'>
                                        <div className='d-flex gap-2 fs-5 text-success'>
                                            <span><FontAwesomeIcon icon={faUser} /></span>
                                            <span >Name</span>
                                        </div>
                                        <p style={{ marginLeft: '25px' }}>Shruthi</p>
                                    </div>
                                    <hr />
                                    <div className='mb-3'>
                                        <div className='d-flex gap-2 fs-5 text-success'>
                                            <span><FontAwesomeIcon icon={faCalendarDays} /></span>
                                            <span >Birth Date</span>
                                        </div>
                                        <p style={{ marginLeft: '25px' }}>16/01/2023</p>
                                    </div>
                                    <hr />
                                    <div className='mb-3'>
                                        <div className='d-flex gap-2 fs-5 text-success'>
                                            <span><FontAwesomeIcon icon={faBuilding} /></span>
                                            <span >Department</span>
                                        </div>
                                        <p style={{ marginLeft: '25px' }}>Cardiology</p>
                                    </div>


                                </div>

                                <div className="col-lg-2">
                                    <div className='mb-3'>
                                        <div className='d-flex gap-2 fs-5 text-success'>
                                            <span><FontAwesomeIcon icon={faUser} /></span>
                                            <span >Gender</span>
                                        </div>
                                        <p style={{ marginLeft: '30px' }}>Female</p>
                                    </div>
                                    <hr />
                                    <div className='mb-3'>
                                        <div className='d-flex gap-2 fs-5 text-success'>
                                            <span><FontAwesomeIcon icon={faSignal} /></span>
                                            <span >Status</span>
                                        </div>
                                        <p style={{ marginLeft: '30px' }}>On Duty</p>
                                    </div>
                                    <hr />
                                    <div className='mb-3'>
                                        <div className='d-flex gap-2 fs-5 text-success'>
                                            <span><FontAwesomeIcon icon={faSignal} /></span>
                                            <span >Doctor type</span>
                                        </div>
                                        <p style={{ marginLeft: '30px' }}>Senior</p>
                                    </div>

                                </div>
                            </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="second" className='p-2'>


                            <div>
                                <h2 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)", fontFamily: "lato" }} >Dr Shruuuti</h2>
                                {/* <a className='text-decoration-none fw-light text-dark' href=""><p>View Profile</p></a> */}
                            </div>
                            <div className='table-responsive'>
                                <table className='table-bordered border-light '>
                                    <thead>
                                        <tr style={{ backgroundColor: "#000", color: "#fff" }}>
                                            <th className='schedule-row'>Doctor name</th>

                                            <th>
                                                <div className="td">Sunday</div>
                                            </th>

                                            <th>
                                                <div className="td">Monday</div>
                                            </th>

                                            <th>
                                                <div className="td">Tuesday</div>
                                            </th>

                                            <th>
                                                <div className="td">Wednesday</div>
                                            </th>

                                            <th>
                                                <div className="td">Thursday</div>
                                            </th>

                                            <th>
                                                <div className="td">Friday</div>
                                            </th>

                                            <th>
                                                <div className="td">Saturday</div>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr >
                                            <td>
                                                <p className='text-dark' style={{ backgroundColor: "#eee", border: "1px solid #fff", padding: '25px' }} >
                                                    <FontAwesomeIcon icon={faUser} fade /> Dr. Shruuuti</p>
                                            </td>
                                            <td className="available">
                                                <div className="tb">07.00 - 10.00</div></td>
                                            <td >
                                                <div className="text-center">-</div>
                                            </td>
                                            <td className="available">
                                                <div class="td">08.00 - 10.00</div>
                                            </td>
                                            <td className="available">
                                                <div className="tb">19.00 - 21.00</div>
                                            </td>
                                            <td >
                                                <div className="text-center">-</div>
                                            </td>
                                            <td className="available">
                                                <div className="tb">19.00 - 21.00</div>
                                            </td>
                                            <td >
                                                <div className="text-center">-</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <div className='d-flex align-items-center justify-content-end gap-2'>
                                <InputGroup className="mb-2" style={{ width: '300px' }}>
                                    <InputGroup.Text id="basic-addon1"> <FontAwesomeIcon icon={faCalendarDays} /></InputGroup.Text>
                                    <Form.Control
                                        type='date'
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>


                                <Button onClick={handleShow} style={{ backgroundColor: 'rgb(32 139 140)', fontSize: '14px', marginBottom: '10px' }}>
                                    + New Appointment</Button>
                            </div>

                            <table className="table" >
                                <thead>
                                    <tr className="admin-table-head" >
                                        <th className="fw-bold">Image</th>
                                        <th className="fw-bold">Patient Name</th>
                                        <th className="fw-bold">Date & Time</th>
                                        <th className="fw-bold">Treatment</th>
                                        <th className="fw-bold">Mobile</th>
                                        <th className="fw-bold">Status</th>
                                        <th className="fw-bold">Location </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="admin-table-row" >



                                        <td className=" me-2">
                                            <img
                                                style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                                src="./img/Our-doctors-img-1.jpg"
                                                alt=""
                                            />
                                        </td>

                                        <td>John Doe</td>
                                        <td>12/05/2016 <br /> 12:35 </td>
                                        <td>Heart CheckUp</td>

                                        <td>
                                            123456789
                                        </td>
                                        <td>
                                            <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Confirm</div>
                                        </td>
                                        <td>Singapoor Layout <br /> Banglore</td>

                                    </tr>

                                    <tr className="admin-table-row" >
                                        <td className=" me-2">
                                            <img
                                                style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                                src="./img/Our-doctors-img-2.jpg"
                                                alt=""
                                            />
                                        </td>

                                        <td>Jhonny</td>
                                        <td>12/05/2016 <br /> 12:35 </td>
                                        <td>Heart problem</td>

                                        <td>
                                            123456789
                                        </td>
                                        <td>
                                            <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Confirm</div>
                                        </td>
                                        <td>Singapoor Layout <br /> Banglore</td>

                                    </tr>

                                    <tr className="admin-table-row" >
                                        <td className=" me-2">
                                            <img
                                                style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                                src="./img/Our-doctors-img-3.jpg"
                                                alt=""
                                            />
                                        </td>

                                        <td>Jhonny</td>
                                        <td>12/05/2016 <br /> 12:35 </td>
                                        <td>Heart problem</td>

                                        <td>
                                            123456789
                                        </td>
                                        <td>
                                            <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Confirm</div>
                                        </td>
                                        <td>Singapoor Layout <br /> Banglore</td>

                                    </tr>

                                    <tr className="admin-table-row" >
                                        <td className=" me-2">
                                            <img
                                                style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                                src="./img/Our-doctors-img-4.jpg"
                                                alt=""
                                            />
                                        </td>

                                        <td>Jhonny</td>
                                        <td>12/05/2016 <br /> 12:35 </td>
                                        <td>Heart problem</td>

                                        <td>
                                            123456789
                                        </td>
                                        <td>
                                            <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Confirm</div>
                                        </td>
                                        <td>Singapoor Layout <br /> Banglore</td>

                                    </tr>

                                </tbody>
                            </table>


                        </Tab.Pane>
                    </Tab.Content>


                </Tab.Container>
            </Container>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Admit Patient</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row mb-2 '>
                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Patient Name* </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingEmail" label="First Name">
                                <Form.Control type="text" placeholder="First Name" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Phone Number* </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingName" label="Number">
                                <Form.Control type="number" placeholder="Number" />
                            </FloatingLabel>
                        </div>

                    </div>

                    <div className='row mb-2 '>
                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Email * </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingEmail" label="Email">
                                <Form.Control type="email" placeholder="Email" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Choose Date* </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingName" label="">
                                <Form.Control type="date" placeholder="" />
                            </FloatingLabel>
                        </div>

                    </div>

                    <div className='row mb-2 '>
                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Choose Time * </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingEmail" label="">
                                <Form.Control type="time" placeholder="" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6 mt-3">
                            <FormLabel className='fw-bold text-dark'>Cause* </FormLabel>
                            <Form.Select style={{ width: '300px' }} aria-label="Default select example">
                                <option value="1">Fever</option>
                                <option value="2">Typhod</option>
                                <option value="3">Dengue</option>
                                <option value="4">Maleriya</option>
                            </Form.Select>
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success">Submit</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
