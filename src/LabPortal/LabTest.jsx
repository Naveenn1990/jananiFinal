
import { faAngleLeft, faAngleRight, faCancel, faCheck, faDownload, faEllipsis, faEye, faFilter, faHouseUser, faPenToSquare, faPlus, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Container, Dropdown, FloatingLabel, Form, FormLabel, Modal, Table } from 'react-bootstrap'
import { TfiRuler } from 'react-icons/tfi'
import { useNavigate } from 'react-router-dom'

export const LabTest = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    // const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false)

    const viewClose = () => setShow(false)
    const viewShow = () => setShow(true)

    // const handleClose = () => setShow1(false);
    // const handleShow = () => setShow1(true);

    const deleteBtnClose = () => setShow2(false)
    const deleteBtnShow = () => setShow2(true)

    return (

        <div>

            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'>Lab Test</h4>

            <Container>

                <div className="row mb-3">
                    <div className="col-lg-4 d-flex gap-2">

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

                        <Button className='all-bg-green' onClick={() => navigate('/labaddtest')}>
                            <FontAwesomeIcon icon={faPlus} />   Add Test
                        </Button>

                    </div>
                </div>

                <Table className='table ' responsive style={{ width: '1500px' }}>
                    <thead>
                        <tr className="admin-table-head" >
                            <th className="fw-bold" width='112px' >Patient ID</th>
                            <th className="fw-bold">Test Name</th>
                            <th className="fw-bold">Sac</th>
                            <th className="fw-bold">Category</th>
                            <th className="fw-bold">Dept</th>
                            <th className="fw-bold">Method</th>
                            <th className="fw-bold">Sample</th>
                            <th className="fw-bold">Order </th>
                            <th className="fw-bold">Price </th>
                            <th className="fw-bold">TAT(Unit) </th>
                            <th className="fw-bold">Status </th>
                            <th className="fw-bold">Actions </th>
                        </tr>
                    </thead>

                    <tbody >
                        <tr className="admin-table-row" >

                            <td >
                                TST_542
                            </td>

                            <td>ERYTHROCYTE SEDIMENTATION RATE - ESR</td>
                            <td>#5255 </td>
                            <td>Laboratory</td>

                            <td>
                                HAEMATOLOGY
                            </td>

                            <td>
                                WESTERGREN METHOD
                            </td>

                            <td>BLOOD (EDTA)</td>
                            <td>23</td>
                            <td>40.00</td>
                            <td>60(min)</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Active</div>
                            </td>

                            <td>

                                {/* onClick={handleShow} */}
                                <Dropdown >
                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        {/* <Dropdown.Item className='medicine-list-dropdown' href="/purchaseorderlist"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item> */}
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={viewShow} ><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={() => navigate('/labaddtest')}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit </Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td >
                                TST_542
                            </td>

                            <td>ERYTHROCYTE SEDIMENTATION RATE - ESR</td>
                            <td>#5255 </td>
                            <td>Laboratory</td>

                            <td>
                                HAEMATOLOGY
                            </td>

                            <td>
                                WESTERGREN METHOD
                            </td>

                            <td>BLOOD (EDTA)</td>
                            <td>23</td>
                            <td>40.00</td>
                            <td>60(min)</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Active</div>
                            </td>

                            <td>

                                {/* onClick={handleShow} */}
                                <Dropdown >
                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        {/* <Dropdown.Item className='medicine-list-dropdown' href="/purchaseorderlist"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item> */}
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={viewShow}><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={() => navigate('/labaddtest')}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit </Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td >
                                TST_542
                            </td>

                            <td>ERYTHROCYTE SEDIMENTATION RATE - ESR</td>
                            <td>#5255 </td>
                            <td>Laboratory</td>

                            <td>
                                HAEMATOLOGY
                            </td>

                            <td>
                                WESTERGREN METHOD
                            </td>

                            <td>BLOOD (EDTA)</td>
                            <td>23</td>
                            <td>40.00</td>
                            <td>60(min)</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Active</div>
                            </td>

                            <td>

                                {/* onClick={handleShow} */}
                                <Dropdown >
                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        {/* <Dropdown.Item className='medicine-list-dropdown' href="/purchaseorderlist"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item> */}
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={viewShow}><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={() => navigate('/labaddtest')}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit </Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td >
                                TST_542
                            </td>

                            <td>ERYTHROCYTE SEDIMENTATION RATE - ESR</td>
                            <td>#5255 </td>
                            <td>Laboratory</td>

                            <td>
                                HAEMATOLOGY
                            </td>

                            <td>
                                WESTERGREN METHOD
                            </td>

                            <td>BLOOD (EDTA)</td>
                            <td>23</td>
                            <td>40.00</td>
                            <td>60(min)</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Active</div>
                            </td>

                            <td>

                                {/* onClick={handleShow} */}
                                <Dropdown >
                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        {/* <Dropdown.Item className='medicine-list-dropdown' href="/purchaseorderlist"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item> */}
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={viewShow}><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={() => navigate('/labaddtest')}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit </Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

            {/* VIEW MODAL */}

            <Modal
                show={show}
                onHide={viewClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bold ' style={{ color: '#208b8c' }}>Investigation Equipment Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="col-md-2"><strong>Category:</strong></td>
                                <td className="col-md-3">Radiology</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"><strong>Test Name:</strong></td>
                                <td className="col-md-3">ERYTHROCYTE SEDIMENTATION RATE - ESR</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"><strong>Department:</strong></td>
                                <td className="col-md-3">Biochemistry</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"><strong>Sample:</strong></td>
                                <td className="col-md-3">BLOOD (EDTA)</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"><strong>Method:</strong></td>
                                <td className="col-md-3">Westergren Method</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"><strong>Price:</strong></td>
                                <td className="col-md-3">40.00</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"><strong>Description:</strong></td>
                                <td className="col-md-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, neque.</td>
                            </tr>
                        </tbody>
                    </table>


                    <h4 className='fw-bold text-dark'>Result :</h4>

                    <table class="table table-bordered">
                        <thead class="bg-md-default">
                            <tr>
                                <th width="20%" style={{ color: '#208b8c', fontWeight: 'bold' }}>Result Name</th>
                                <th width="10%" style={{ color: '#208b8c', fontWeight: 'bold' }}>Order</th>
                                <th width="10%" style={{ color: '#208b8c', fontWeight: 'bold' }}>Unit</th>
                                <th width="10%" style={{ color: '#208b8c', fontWeight: 'bold' }}>Formula</th>
                                <th width="40%" style={{ color: '#208b8c', fontWeight: 'bold' }}>Normal Values</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>ERYTHROCYTE SEDIMENTATION RATE - ESR</td>
                                <td>1</td>
                                <td>mg/day</td>
                                <td>--</td>
                                <td>500 - 2000 mg/day</td>
                            </tr>

                        </tbody>
                    </table>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={viewClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary">Understood</Button> */}
                </Modal.Footer>
            </Modal>

            {/* Delete Modal */}

            <Modal
                show={show2}
                onHide={deleteBtnClose}
                backdrop="static"
                keyboard={false}

            >

                <Modal.Header closeButton >
                    <Modal.Title>

                        {/* <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Friend</div> */}

                    </Modal.Title >
                </Modal.Header>

                <Modal.Body>
                    <div className='text-center'>
                        <img
                            style={{ width: "80px", height: "80px", borderRadius: "5px", marginBottom: '10px' }}
                            src="./img/delete-btn.png"
                            alt=""
                        />
                        <h4 className='fw-bold text-dark mb-2'>Are You Sure</h4>
                        <p>This event data will be removed permanently</p>
                    </div>

                </Modal.Body>
                <Modal.Footer >

                    <Button variant="danger"><FontAwesomeIcon icon={faCancel} className=' me-2' />Delet</Button>
                    <Button variant="success" onClick={deleteBtnClose}>
                        Cancle
                    </Button>

                    {/* <Button variant="success"><FontAwesomeIcon icon={faCheck} className='fs-5 me-2' />Save</Button> */}
                </Modal.Footer>
            </Modal>

        </div>

    )
}