import { faCancel, faCapsules, faCheck, faClipboard, faDownload, faEye, faFilePdf, faFileWaveform, faFilter, faPlus, faUpload, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import { Button, Container, Dropdown, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const StaffOutPatientList = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'>Out Patient List</h4>


            <Container>

                <div className="row">
                    <div className="col-lg-4 d-flex gap-2 mb-4">

                        <Dropdown>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                <FontAwesomeIcon icon={faUpload} />  Export
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Export CSV</Dropdown.Item>
                                <Dropdown.Item href="#">Export JSON</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <p><Button variant="danger" size="md" active>
                            <FontAwesomeIcon icon={faDownload} />  Import
                        </Button></p>
                    </div>

                    <div className="col-lg-8  d-flex gap-2">
                        <Form className="">
                            <Form.Control
                                style={{ width: "400px" }}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            {/* <Button variant="outline-primary">Search</Button> */}
                        </Form>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <FontAwesomeIcon icon={faFilter} />  Filtered By
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                                <Dropdown.Item href="#">Last 1 Month</Dropdown.Item>
                                <Dropdown.Item href="#">Last 6 Month</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Button style={{ backgroundColor: 'rgb(32 139 140)', marginBottom: '20px', fontSize:'11px'   }} onClick={() => navigate('/staffoutpatientform')}>
                        <FontAwesomeIcon icon={faPlus} /> Add Out Patinet
                        </Button>

                    </div>
                </div>


                <table className="table" >
                    <thead>
                        <tr className="admin-table-head" >
                            {/* <th className="fw-bold"><input style={{ width: '20px', height: '20px' }} type="checkbox" /></th> */}
                            <th className="fw-bold">Patient ID</th>
                            <th className="fw-bold" style={{ width: '136px' }}>Patient Name</th>
                            <th className="fw-bold">Date </th>
                            <th className="fw-bold">City</th>
                            <th className="fw-bold">Mobile</th>
                            <th className="fw-bold">Blood Group</th>
                            <th className="fw-bold">Department</th>
                            <th className="fw-bold">Condition</th>
                            <th className="fw-bold">Disease</th>
                            <th className="fw-bold">Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="admin-table-row" >

                            <td>#125</td>

                            <td>John Doe</td>
                            <td>12/05/2016 </td>
                            <td>Banglore</td>

                            <td>
                                123456789
                            </td>

                            <td>A+</td>

                            <td>Cardiology</td>

                            <td>Emergency</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Fever</div>
                            </td>


                            <td>
                                <button className="table-details-btn" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </td>

                        </tr>

                        <tr className="admin-table-row" >

                            <td>#546</td>

                            <td>Sarah Smith</td>
                            <td>12/05/2016 </td>
                            <td>Banglore</td>

                            <td>
                                123456789
                            </td>

                            <td>B+</td>


                            <td>Cardiology</td>

                            <td>Normal</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'purple', border: '1px solid purple' }}>Bone </div>
                            </td>


                            <td>
                                <button className="table-details-btn" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </td>

                        </tr>


                        <tr className="admin-table-row" >

                            <td>#471</td>

                            <td>Miya Bhai</td>
                            <td>12/05/2016 </td>
                            <td>Banglore</td>

                            <td>
                                123456789
                            </td>

                            <td>O+</td>


                            <td>Cardiology</td>

                            <td>Normal</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Maleriya</div>
                            </td>


                            <td>
                                <button className="table-details-btn" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </td>

                        </tr>

                        <tr className="admin-table-row" >

                            <td>#793</td>

                            <td>Sarah Smith</td>
                            <td>12/05/2016 </td>
                            <td>Banglore</td>

                            <td>
                                123456789
                            </td>

                            <td>O-</td>


                            <td>Neurologist</td>

                            <td>Emergency</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Typhod</div>
                            </td>


                            <td>
                                <button className="table-details-btn" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </td>

                        </tr>

                        <tr className="admin-table-row" >

                            <td>#125</td>

                            <td>John Doe</td>
                            <td>12/05/2016 </td>
                            <td>Banglore</td>

                            <td>
                                123456789
                            </td>

                            <td>A+</td>

                            <td>Cardiology</td>

                            <td>Emergency</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Fever</div>
                            </td>


                            <td>
                                <button className="table-details-btn" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </td>

                        </tr>

                        <tr className="admin-table-row" >

                            <td>#546</td>

                            <td>Sarah Smith</td>
                            <td>12/05/2016 </td>
                            <td>Banglore</td>

                            <td>
                                123456789
                            </td>

                            <td>B+</td>


                            <td>Cardiology</td>

                            <td>Normal</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'purple', border: '1px solid purple' }}>Bone </div>
                            </td>


                            <td>
                                <button className="table-details-btn" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </td>

                        </tr>


                        <tr className="admin-table-row" >

                            <td>#471</td>

                            <td>Miya Bhai</td>
                            <td>12/05/2016 </td>
                            <td>Banglore</td>

                            <td>
                                123456789
                            </td>

                            <td>O+</td>


                            <td>Cardiology</td>

                            <td>Normal</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Maleriya</div>
                            </td>


                            <td>
                                <button className="table-details-btn" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </td>

                        </tr>

                        <tr className="admin-table-row" >

                            <td>#793</td>

                            <td>Sarah Smith</td>
                            <td>12/05/2016 </td>
                            <td>Banglore</td>

                            <td>
                                123456789
                            </td>

                            <td>O-</td>


                            <td>Neurologist</td>

                            <td>Emergency</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Typhod</div>
                            </td>


                            <td>
                                <button className="table-details-btn" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </td>

                        </tr>

                    </tbody>
                </table>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <span className="pagination" style={{ float: "right" }}>
                                <button className="btn2">Previous</button>
                                <button className="btn1">1</button>
                                <button className="btn3">Next</button>
                            </span>
                        </div>
                    </div>
                </div>

            </Container>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='d-flex align-items-center gap-3 mb-1'>
                            {/* <img
                                style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                                src="./img/Our-doctors-img-1.jpg"
                                alt=""
                            /> */}
                            <p className='fw-bold '>Bed 251</p>
                        </div>
                        <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Patient</div>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <div className=' mb-1 fs-5 fw-bold'>
                                Mr. Jhon Deo
                            </div>

                            <div className=' mb-1 fs-5'>
                                Reg : NTCH2145488400
                            </div>

                            <div className=' mb-1 fs-5'>
                                IP : 123456789
                            </div>

                            <div className=' mb-1 fs-5'>
                                WNorth-E-Wing
                            </div>

                            <div className=' mb-3 fs-5'>
                                <span className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Fever</span>
                            </div>
                        </div>
                        <div className='text-center me-4' >
                            <FontAwesomeIcon icon={faUser} style={{ fontSize: '80px', padding: '24px 28px', backgroundColor: 'rgb(209 203 203)', borderRadius: '50%' }} />
                            <p className='fw-bold'>Male</p>
                            <p>50 Year Old</p>
                        </div>
                    </div>
                    <div className=' fs-5 fw-bold'>
                        Dr Carlous Romulo
                    </div>
                    <p>Cardiologist</p>


                </Modal.Body>
                <Modal.Footer className='fs-2' >
                    <FontAwesomeIcon icon={faFileWaveform} style={{ color: '#ffa500', marginRight: '20px', }} />
                    <FontAwesomeIcon icon={faCapsules} style={{ color: 'rgb(30 102 211)', marginRight: '20px' }} />
                    <FontAwesomeIcon icon={faFilePdf} style={{ color: "#e60505", marginRight: '20px' }} />
                    <FontAwesomeIcon icon={faClipboard} className='me-auto' style={{ color: "rgb(83 183 71)" }} />
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
