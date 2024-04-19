import { faBarcode, faCheck, faEye, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { Button, Container, Dropdown, Form, InputGroup, Modal, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const LabHomeCollection = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState()

    const ViewClose = () => setShow(false)
    const ViewShow = () => setShow(true)

    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'> Home Collection</h4>
            <Container>
                <div className="row">
                    {/* <div className="col-lg-3">
                        <Form.Select aria-label="Default select example">
                            <option value="1">Singapoor Layout Bangalore</option>
                        </Form.Select>
                    </div> */}
                    <div className="col-lg-2">
                        <InputGroup >
                            <Form.Control
                                type='date'
                                placeholder=""
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                    <div className="col-lg-2">
                        <InputGroup >
                            <Form.Control
                                type='date'
                                placeholder=""
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className="col-lg-2">
                        <Button className='all-bg-green'>Go</Button>
                    </div>

                </div>

                <hr />

                <div className='d-flex align-items-center justify-content-between mb-3'>
                    <div>
                        <Form.Select aria-label="Default select example">
                            <option value="1">10</option>
                            <option value="2">25</option>
                            <option value="3">50</option>
                            <option value="4">100</option>
                        </Form.Select>
                    </div>
                    <div className='d-flex gap-3'>

                        <Dropdown>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                <FontAwesomeIcon icon={faUpload} />  Export
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Export CSV</Dropdown.Item>
                                <Dropdown.Item href="#">Export JSON</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <InputGroup >
                            <InputGroup.Text >Search</InputGroup.Text>
                            <Form.Control
                                type='search'
                                placeholder=""
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                </div>


                <Table className='table ' responsive style={{ width: '1500px' }}>
                    <thead>
                        <tr className="admin-table-head" >
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Order ID</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Patient Name</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Test Type</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Visit Date</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Address</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Amount</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Date/Time</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Status </th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Assignee </th>
                            <th className="fw-bold" style={{ color: '#208b8c', width: '145px' }}>Payment Type </th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Actions</th>
                        </tr>
                    </thead>

                    <tbody >
                        <tr className="admin-table-row" >

                            <td >
                                #24241
                            </td>

                            <td>Yellappa</td>
                            <td>Blood Test</td>
                            <td>08/07/2023</td>

                            <td>
                                Singapoor Layout Banglore
                            </td>

                            <td>100.00</td>
                            <td>08/10/2023 <br /> 12:30 AM</td>
                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Active</div>
                            </td>
                            <td>
                                <Form.Select aria-label="Default select example">
                                    <option>Select</option>
                                    <option value="1">Suresh</option>
                                    <option value="2">Ramesh</option>
                                    <option value="3">Dinesh</option>
                                </Form.Select>
                            </td>
                            <td>Cash</td>

                            <td >
                                <div className='d-flex gap-3'>
                                    <FontAwesomeIcon icon={faEye} onClick={ViewShow} style={{ color: "#208b8c", fontSize: '22px', cursor: "pointer" }} />
                                    <FontAwesomeIcon icon={faCheck} style={{ backgroundColor: '#17af17', padding: '5px', color: 'white', cursor: "pointer" }} />
                                    <FontAwesomeIcon icon={faTrash} style={{ color: "#e63333", fontSize: '22px', cursor: "pointer" }} />
                                </div>
                            </td>

                        </tr>
                        <tr className="admin-table-row" >

                            <td >
                                #24241
                            </td>

                            <td>Yellappa</td>
                            <td>Blood Test</td>
                            <td>08/07/2023</td>

                            <td>
                                Singapoor Layout Banglore
                            </td>

                            <td>100.00</td>
                            <td>08/10/2023 <br /> 12:30 AM</td>
                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Active</div>
                            </td>
                            <td>
                                <Form.Select aria-label="Default select example">
                                    <option>Select</option>
                                    <option value="1">Suresh</option>
                                    <option value="2">Ramesh</option>
                                    <option value="3">Dinesh</option>
                                </Form.Select>
                            </td>
                            <td>Cash</td>

                            <td >
                                <div className='d-flex gap-3'>
                                    <FontAwesomeIcon icon={faEye} onClick={ViewShow} style={{ color: "#208b8c", fontSize: '22px', cursor: "pointer" }} />
                                    <FontAwesomeIcon icon={faCheck} style={{ backgroundColor: '#17af17', padding: '5px', color: 'white', cursor: "pointer" }} />
                                    <FontAwesomeIcon icon={faTrash} style={{ color: "#e63333", fontSize: '22px', cursor: "pointer" }} />
                                </div>
                            </td>

                        </tr>

                    </tbody>
                </Table>

                <div className="container mt-2">
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

            {/* VIEW MODAL */}

            <Modal
                show={show}
                onHide={ViewClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bold ' style={{ color: '#208b8c' }}>Patient Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td className="col-md-2"><strong>Category:</strong></td>
                                <td className="col-md-3">Laboratory</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"><strong>Patient Name:</strong></td>
                                <td className="col-md-3"> Yellapa </td>
                            </tr>
                            <tr>
                                <td className="col-md-2"><strong>Address:</strong></td>
                                <td className="col-md-3">Singapoor Layout Banglore</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"><strong>Amount:</strong></td>
                                <td className="col-md-3">100.00</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"><strong>Assignee:</strong></td>
                                <td className="col-md-3">Rohan</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"><strong>Description:</strong></td>
                                <td className="col-md-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</td>
                            </tr>
                        </tbody>
                    </table>


                    <h5 className='fw-bold text-dark'>Test :</h5>

                    <table class="table table-bordered">
                        <thead class="bg-md-default">
                            <tr>
                                <th width="20%" style={{ color: '#208b8c', fontWeight: 'bold' }}>Order ID</th>
                                <th width="20%" style={{ color: '#208b8c', fontWeight: 'bold' }}>Order No</th>
                                <th width="20%" style={{ color: '#208b8c', fontWeight: 'bold' }}>Test Type</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>#24120</td>
                                <td>24</td>
                                <td>Blood Test</td>
                            </tr>

                        </tbody>
                    </table>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ViewClose}>
                        Close
                    </Button>
                    <Button className='d-flex gap-2 align-items-center' onClick={() => navigate('/labgeneratebarcode')} style={{ fontSize: '12px', cursor: "pointer", backgroundColor: '#208b8c' }} >
                        <FontAwesomeIcon icon={faBarcode} />Generate Barcode</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

