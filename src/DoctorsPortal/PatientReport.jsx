import React from 'react'
import { Container, Dropdown, Navbar } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Label from 'react-bootstrap/FormLabel';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { faCalendarDays, faEllipsisVertical, faEnvelope, faEye, faLocationDot, faPhoneVolume, faBandage, faCheck, faAngleRight, faAngleLeft, faCancel, faCirclePlus, faArrowsRotate, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';

const PatientReport = () => {
    const navigate = useNavigate();
  return (
    <div>

            <Navbar expand="lg" style={{ backgroundColor: '#dae1f3' }}>
                <Container fluid>
                    <Navbar.Brand className='fw-bold' href="#">Patients</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-primary">Search</Button>
                        </Form>

                      
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className='mb-5'>
                <table class="table" >
                    <thead>
                        <tr className="admin-table-head" >
                            <th className="fw-bold"> Patient ID </th>
                            <th className="fw-bold">Name</th>
                            <th className="fw-bold">Age</th>
                            <th className="fw-bold">Sex</th>
                            <th className="fw-bold">Address</th>
                            <th className="fw-bold">Report</th>
                            <th className="fw-bold">Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="admin-table-row" >


                            <td>John Doe</td>
                            <td>12/05/2016 </td>
                            <td>test@email.com</td>

                            <td>
                                123456789
                            </td>
                            <td>
                                God creature is sixth was abundantly and sea gathered
                            </td>
                            <td>
                   
                      <button
                        style={{
                          padding: "6px",
                          border: "none",
                          backgroundColor: "#20958c",
                          color: "white",
                          borderRadius: "0px",
                        }}
                        onClick={() =>
                          navigate(
                            `/doctorforms`
                          )
                        }
                      >
                        Report
                      </button>
                    </td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <MdEdit
                          style={{ color: "#20958c", marginRight: "1%" }}
                        />
                        <AiFillDelete style={{ color: "red" }} />
                      </div>
                    </td>

                        </tr>

                       


                    </tbody>


                </table>
                <div className='d-flex gap-3  '>
                    <Form.Select className=' mb-5 ms-auto' style={{ width: '100px', height: '40px' }} aria-label="Default select example">
                        <option value="1">5</option>
                        <option value="2">10</option>
                        <option value="3">15</option>
                    </Form.Select>
                    <div className='mt-2'>
                        <span className='me-4 '>1-10 of 13 page</span>
                       <button className='me-4 ' > <FontAwesomeIcon icon={faAngleLeft} /></button>
                       <button> <FontAwesomeIcon icon={faAngleRight} className='' /></button>   
                    </div>
                </div>
            </Container>






           


            


        </div>
  )
}

export default PatientReport