import React from 'react'
import { Button, Container, Dropdown } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faMagnifyingGlass, faUpload } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


export const StaffDoctorManagement = () => {

const navigate = useNavigate()

    return (
        <div>
            <h4 className='p-4 mb-4 fw-bold ' style={{ backgroundColor: '#dae1f3' }} > Doctor's Management</h4>
            <Container>
                <div className="row">
                    <div className="col-lg-4 d-flex mb-4">

                        <Dropdown>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                <FontAwesomeIcon icon={faUpload} />  Export
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Export CSV</Dropdown.Item>
                                <Dropdown.Item href="#">Export JSON</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        {/* <p><Button variant="danger" size="md" active>
                            <FontAwesomeIcon icon={faDownload} />  Import
                        </Button></p> */}
                    </div>

                    <div className="col-lg-8  d-flex gap-2 ">
                        <Form className="ms-auto">
                            <Form.Control
                                style={{ width: "400px" }}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                        <Button variant="danger" className='d-flex gap-1 align-items-center mb-4'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />Search
                        </Button>

                        {/* <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <FontAwesomeIcon icon={faFilter} />  Filtered By
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                                <Dropdown.Item href="#">Last 1 Month</Dropdown.Item>
                                <Dropdown.Item href="#">Last 6 Month</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Button style={{ backgroundColor: 'rgb(32 139 140)', marginBottom: '20px', fontSize: '11px' }} onClick={() => navigate('/staffoutpatientform')}>
                            <FontAwesomeIcon icon={faPlus} /> Add Out Patinet
                        </Button> */}

                    </div>
                </div>

                <hr />

                <h5 className='staff-doctor-management-h5' >Today Available Doctors</h5>

                <div className="row gap-2 justify-content-center mb-4">
                    <Card className='col-lg-3 text-light' style={{ width: '16rem', backgroundColor: '#363668' }}>
                        <Card.Body className='text-center px-1'>
                            <Card.Title className='fw-bold' style={{ fontFamily: 'Roboto_Slab variant0' }}>"Genral / Duty Doctor's"</Card.Title>
                            <Card.Text className='fs-4 fw-bold'>
                                (25)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='col-lg-3 text-light' style={{ width: '16rem', backgroundColor: '#789d07' }}>
                        <Card.Body className='text-center'>
                            <Card.Title className='fw-bold' style={{ fontFamily: 'Roboto_Slab variant0' }}>"Surgeons"</Card.Title>
                            <Card.Text className='fs-4 fw-bold'>
                                (12)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='col-lg-3 text-light' style={{ width: '16rem', backgroundColor: '#d38f11' }}>
                        <Card.Body className='text-center'>
                            <Card.Title className='fw-bold' style={{ fontFamily: 'Roboto_Slab variant0' }}>"Specialist"</Card.Title>
                            <Card.Text className='fs-4 fw-bold'>
                                (8)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='col-lg-3 text-light' style={{ width: '16rem', backgroundColor: '#b10404' }}>
                        <Card.Body className='text-center'>
                            <Card.Title className='fw-bold' style={{ fontFamily: 'Roboto_Slab variant0' }}>"On Leave"</Card.Title>
                            <Card.Text className='fs-4 fw-bold'>
                                (10)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <table className="table" style={{ fontSize: '12px' }}>
                    <thead >
                        <tr className="admin-table-head" >
                            <th className="fw-bold">Categories</th>
                            <th className="fw-bold">Doctor Id </th>
                            <th className="fw-bold">Name</th>
                            {/* <th className="fw-bold">Doctor Type</th> */}
                            <th className="fw-bold">Number</th>
                            <th className="fw-bold">Gender</th>
                            <th className="fw-bold">Specialist</th>
                            <th className="fw-bold">Department</th>
                            <th className="fw-bold">Grade</th>
                            <th className="fw-bold">Shifts</th>
                            <th className="fw-bold">Status </th>
                            <th className="fw-bold">Action </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="admin-table-row" >

                            <td>Genral</td>

                            <td>#GD1254</td>
                            <td>Ganesh Kalal</td>
                           

                            <td>
                                123456789
                            </td>

                            <td>Male</td>

                            <td>Genral</td>

                            <td>Cardiology</td>

                            <td>Sr</td>

                            <td>Night</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>On Duty</div>
                            </td>
                            
                            <td>
                                <button className="table-details-btn" onClick={()=> navigate('/staffcheckschedule')}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td>Genral</td>

                            <td>#GD1254</td>
                            <td>Sheetal</td>
                           

                            <td>
                                123456789
                            </td>

                            <td>Female</td>

                            <td>Genral</td>

                            <td>Traumtologist</td>

                            <td>Jr</td>

                            <td>Night</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>On Duty</div>
                            </td>
                             
                            <td>
                                <button className="table-details-btn" onClick={()=> navigate('/staffcheckschedule')}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td>Genral</td>

                            <td>#GD1254</td>
                            <td>Amandeep</td>
                          

                            <td>
                                123456789
                            </td>

                            <td>Male</td>

                            <td>Genral</td>

                            <td>Cardiology</td>

                            <td>Jr</td>

                            <td>Night</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Off Duty</div>
                            </td>
                             
                            <td>
                                <button className="table-details-btn" onClick={()=> navigate('/staffcheckschedule')}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td>Genral</td>

                            <td>#GD1254</td>
                            <td>Shruuti</td>
                           

                            <td>
                                123456789
                            </td>

                            <td>Female</td>

                            <td>Genral</td>

                            <td>Cardiology</td>

                            <td>Sr</td>

                            <td>Day</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Off Duty</div>
                            </td>
                             
                            <td>
                                <button className="table-details-btn" onClick={()=> navigate('/staffcheckschedule')}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td>Genral</td>

                            <td>#GD1254</td>
                            <td>Sunny</td>
                          

                            <td>
                                123456789
                            </td>

                            <td>Male</td>

                            <td>Genral</td>

                            <td>Pediatric</td>

                            <td>Sr</td>

                            <td>Night</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>On Duty</div>
                            </td>
                             
                            <td>
                                <button className="table-details-btn" onClick={()=> navigate('/staffcheckschedule')}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td>Genral</td>

                            <td>#GD1254</td>
                            <td>Pooja</td>
                           

                            <td>
                                123456789
                            </td>

                            <td>Female</td>

                            <td>Genral</td>

                            <td>Neurologist</td>

                            <td>Jr</td>

                            <td>Day</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Off Duty</div>
                            </td>
                             
                            <td>
                                <button className="table-details-btn" onClick={()=> navigate('/staffcheckschedule')}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </td>
                        </tr>
         
                    </tbody>
                </table>
            </Container>
        </div>
    )
}
