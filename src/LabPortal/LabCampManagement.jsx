import { faCheck, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Container, Form, InputGroup, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const LabCampManagement = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'> Manage Camp</h4>
            <Container>
                <div className="row">
                    <div className="col-lg-3">
                        <Form.Select aria-label="Default select example">
                            <option value="1">Singapoor Layout Bangalore</option>
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

                        <Button onClick={() => navigate('/labaddnewcamp')} className='d-flex gap-2 align-items-center all-bg-green' style={{ fontSize: '14px', width: '206px', height: '37px' }}>
                            <FontAwesomeIcon icon={faPlus} />New Camp</Button>

                    </div>
                </div>


                <Table responsive className='table ' >
                    <thead>
                        <tr className="admin-table-head" >
                            <th className="fw-bold" style={{ color: '#208b8c' }}>S.No</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Name</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Date</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Provider</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Added By</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Location</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Status</th>
                            {/* <th className="fw-bold" style={{ color: '#208b8c' }}>Mode </th> */}
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Actions </th>
                        </tr>
                    </thead>

                    <tbody >
                        <tr className="admin-table-row" >

                            <td >
                                1.
                            </td>

                            <td>Jhon Deo</td>
                            <td>08/07/2023 </td>
                            <td>Dr.Hari Krishna</td>

                            <td>
                                Medicine.com
                            </td>

                            <td>
                                Singapoor Layout Banglore
                            </td>
                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Actve</div>
                            </td>

                            <td>
                                <div className='d-flex gap-3'>
                                    <FontAwesomeIcon icon={faCheck} style={{ backgroundColor: '#17af17', padding: '5px', color: 'white', cursor: "pointer" }} />
                                    <FontAwesomeIcon icon={faTrash} style={{ color: "#e63333", fontSize: '22px', cursor: "pointer" }} />
                                </div>
                            </td>
                        </tr>

                           <tr className="admin-table-row" >

                            <td >
                                1.
                            </td>

                            <td>Jhon Deo</td>
                            <td>08/07/2023 </td>
                            <td>Dr.Hari Krishna</td>

                            <td>
                                Medicine.com
                            </td>

                            <td>
                                Singapoor Layout Banglore
                            </td>
                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Actve</div>
                            </td>

                            <td>
                                <div className='d-flex gap-3'>
                                    <FontAwesomeIcon icon={faCheck} style={{ backgroundColor: '#17af17', padding: '5px', color: 'white', cursor: "pointer" }} />
                                    <FontAwesomeIcon icon={faTrash} style={{ color: "#e63333", fontSize: '22px', cursor: "pointer" }} />
                                </div>
                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td >
                                1.
                            </td>

                            <td>Jhon Deo</td>
                            <td>08/07/2023 </td>
                            <td>Dr.Hari Krishna</td>

                            <td>
                                Medicine.com
                            </td>

                            <td>
                                Singapoor Layout Banglore
                            </td>
                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Actve</div>
                            </td>

                            <td>
                                <div className='d-flex gap-3'>
                                    <FontAwesomeIcon icon={faCheck} style={{ backgroundColor: '#17af17', padding: '5px', color: 'white', cursor: "pointer" }} />
                                    <FontAwesomeIcon icon={faTrash} style={{ color: "#e63333", fontSize: '22px', cursor: "pointer" }} />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>

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
        </div>
    )
}
