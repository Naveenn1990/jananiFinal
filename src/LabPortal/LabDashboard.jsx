import { faFileInvoice, faMoneyBillTransfer, faUserGroup, faVialVirus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export const LabDashboard = () => {
    return (
        <div>
            <Container>

            <div className='p-4 mb-4 row align-items-center justify-content-between' style={{ backgroundColor: '#dae1f3'}} >

                <h4 className='fw-bold col-lg-4'>Dashboard</h4>

                <div className='col-lg-6 d-flex gap-3 '>
                    <Form.Select style={{ width: '200px', marginLeft: 'auto' }} aria-label="Default select example">
                        <option value="1">Last 30 Days</option>
                        <option value="2">Last 6 Months</option>
                        <option value="3">Last 1 Year</option>
                    </Form.Select>
                    <Button className='d-flex gap-2 all-bg-green' ><FontAwesomeIcon icon={faFileInvoice} className='fs-6' /> Report</Button>
                </div>
            </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 text-light me-3 ms-auto" style={{ backgroundColor: '#729507', borderRadius: '20px', width: '350px' }}>
                        <div className=" refer-dashboard " >
                            <span><FontAwesomeIcon icon={faUserGroup} className='fs-2 p-4  ' style={{ borderRadius: '50%', backgroundColor: '#80a709' }} /></span>
                            <div >
                                <span className="fs-6 fw-bold">LAB PATIENTS</span> <br />
                                <span className="fs-4 mb-2">450</span>
                                <div className="progress mb-2">
                                    <div className="progress-bar" style={{ width: "45%" }}></div>
                                </div>
                                <span className="">
                                    45% Increase in 28 Days
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 text-light  me-3" style={{ backgroundColor: '#990d5a', borderRadius: '20px', width: '350px' }}>
                        <div className=" refer-dashboard " >
                            <span><FontAwesomeIcon icon={faVialVirus} className='fs-2 p-4' style={{ borderRadius: '50%', backgroundColor: '#ab1e45' }} /></span>
                            <div >
                                <span className="fs-6 fw-bold">LAB ORDERS</span> <br />
                                <span className="fs-4 mb-2">155</span>
                                <div className="progress mb-2">
                                    <div className="progress-bar" style={{ width: "65%" }}></div>
                                </div>
                                <span className="">
                                    68% Increase in 28 Days
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 text-light  me-3" style={{ backgroundColor: '#c1a51f', borderRadius: '20px', width: '350px' }}>
                        <div className=" refer-dashboard " >
                            <span><FontAwesomeIcon icon={faMoneyBillTransfer} className='fs-2 p-4  ' style={{ borderRadius: '50%', backgroundColor: '#ab9918' }} /></span>
                            <div >
                                <span className="fs-6 fw-bold">REVENUE</span> <br />
                                <span className="fs-4 mb-2">85%</span>
                                <div className="progress mb-2">
                                    <div className="progress-bar" style={{ width: "85%" }}></div>
                                </div>
                                <span className="">
                                    60% Increase in 28 Days
                                </span>
                            </div>
                        </div>
                    </div>



                </div>
            </Container>
        </div>
    )
}
