import { faBarcode, faCheck, faEye, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { Button, Container, Form, InputGroup, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const LabOrder = () => {

    const [show, setShow] = useState(false)

    const ViewClose = () => setShow(false)
    const ViewShow = () => setShow(true)

    const navigate = useNavigate()

    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'> Orders</h4>
            <Container>
                <div className="row">
                    {/* <div className="col-lg-3">
                        <Form.Select aria-label="Default select example">
                            <option value="1">Singapoor Layout Bangalore</option>
                        </Form.Select>
                    </div> */}

                    <div className="col-lg-2">
                        <Form.Select aria-label="Default select example">
                            <option value="1">Laboratory</option>
                            <option value="1">Radiology</option>
                            <option value="1">Patholoy</option>
                            <option value="1">Cardiology</option>
                        </Form.Select>
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
                    <div className='d-flex gap-2 '>
                        <InputGroup >
                            <InputGroup.Text >Search</InputGroup.Text>
                            <Form.Control
                                type='search'
                                placeholder=""
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        {/* <Button onClick={() => navigate('/labneworder')} className='d-flex gap-2 align-items-center' style={{ backgroundColor: '#208b8c', fontSize: '14px', width: '206px', height: '37px' }}>
                            <FontAwesomeIcon icon={faPlus} />New Order</Button> */}

                    </div>
                </div>


                <table className='table ' responsive>
                    <thead>
                        <tr className="admin-table-head" >
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Patient ID</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Patient</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Referred By</th>
                            {/* <th className="fw-bold" style={{ color: '#208b8c' }}>Provider</th> */}
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Test Type</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Date</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Status</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Actions </th>
                        </tr>
                    </thead>

                    <tbody >
                        <tr className="admin-table-row" >
                            <td>#202151</td>

                            <td >
                                Sarah Smith
                            </td>

                            <td>Dr.Jhon Deo</td>
                            <td>X-Ray Chest </td>

                            <td>
                                08/07/2023
                            </td>


                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Active</div>
                            </td>

                            <td>
                                <div className='d-flex gap-2'>
                                    <FontAwesomeIcon icon={faEye} onClick={ViewShow} style={{ color: "#208b8c", fontSize: '22px', cursor: "pointer" }} />
                                    <FontAwesomeIcon icon={faCheck} style={{ backgroundColor: '#17af17', padding: '5px', color: 'white', cursor: "pointer" }} />
                                    <FontAwesomeIcon icon={faTrash} style={{ color: "#e63333", fontSize: '22px', cursor: "pointer" }} />
                                </div>
                            </td>

                        </tr>
                        <tr className="admin-table-row" >

                            <td>#202151</td>

                            <td >
                                Sarah Smith
                            </td>

                            <td>Dr.Jhon Deo</td>
                            <td>X-Ray Chest </td>

                            <td>
                                08/07/2023
                            </td>


                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Active</div>
                            </td>

                            <td>
                                <div className='d-flex gap-2'>
                                    <FontAwesomeIcon icon={faEye} onClick={ViewShow} style={{ color: "#208b8c", fontSize: '22px', cursor: "pointer" }} />
                                    <FontAwesomeIcon icon={faCheck} style={{ backgroundColor: '#17af17', padding: '5px', color: 'white', cursor: "pointer" }} />
                                    <FontAwesomeIcon icon={faTrash} style={{ color: "#e63333", fontSize: '22px', cursor: "pointer" }} />
                                </div>
                            </td>

                        </tr>
                        <tr className="admin-table-row" >
                            <td>#202151</td>

                            <td >
                                Sarah Smith
                            </td>

                            <td>Dr.Jhon Deo</td>
                            <td>X-Ray Chest </td>


                            <td>
                                08/07/2023
                            </td>


                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Active</div>
                            </td>

                            <td>
                                <div className='d-flex gap-2'>
                                    <FontAwesomeIcon icon={faEye} onClick={ViewShow} style={{ color: "#208b8c", fontSize: '22px', cursor: "pointer" }} />
                                    <FontAwesomeIcon icon={faCheck} style={{ backgroundColor: '#17af17', padding: '5px', color: 'white', cursor: "pointer" }} />
                                    <FontAwesomeIcon icon={faTrash} style={{ color: "#e63333", fontSize: '22px', cursor: "pointer" }} />
                                  
                                </div>
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


            {/* VIEW MODAL */}

            <Modal
                show={show}
                onHide={ViewClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bold ' style={{ color: '#208b8c' }}>Order Details</Modal.Title>
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
                                <td className="col-md-3"> Sarah Smith </td>
                            </tr>
                            <tr>
                                <td className="col-md-2"><strong>Referred By:</strong></td>
                                <td className="col-md-3">Dr.Jhon Deo</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"><strong>Note:</strong></td>
                                <td className="col-md-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</td>
                            </tr>
                        </tbody>
                    </table>


                    <h4 className='fw-bold text-dark'>Test :</h4>

                    <table class="table table-bordered">
                        <thead class="bg-md-default">
                            <tr>
                                <th width="20%" style={{ color: '#208b8c', fontWeight: 'bold' }}>Patient ID</th>
                                <th width="20%" style={{ color: '#208b8c', fontWeight: 'bold' }}>Order No</th>
                                <th width="20%" style={{ color: '#208b8c', fontWeight: 'bold' }}>Test Type</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>#24120</td>
                                <td>24</td>
                                <td>X-Ray Chest</td>
                            </tr>

                        </tbody>
                    </table>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ViewClose}>
                        Close
                    </Button>
                    <Button className='d-flex gap-2 align-items-center' onClick={() => navigate('/labgeneratebarcode')} style={{ fontSize: '12px', cursor: "pointer", backgroundColor:'#208b8c' }} > 
                    <FontAwesomeIcon icon={faBarcode}  />Generate Barcode</Button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}
