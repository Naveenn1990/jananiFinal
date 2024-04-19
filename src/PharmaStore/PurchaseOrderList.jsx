import { faCancel, faCheck, faPenToSquare, faTrash, faEllipsis, faFilter, faAngleLeft, faAngleRight, faEye, faFileArrowDown, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Container, Dropdown, FloatingLabel, FormLabel, Modal, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const PurchaseOrderList = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const deleteBtnClose = () => setShow1(false)
    const deleteBtnShow = () => setShow1(true)

    const editBtnClose = () => setShow2(false)
    const editBtnShow = () => setShow2(true)

    const ViewDetailsClose = () => setShow3(false)
    const ViewDetailsShow = () => setShow3(true)

    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold '>Purchase Order List</h4>

            <Container>

                <div className='row'>
                    <div className="col-lg-6">
                        <Form.Select style={{ width: '200px' }} aria-label="Default select example">
                            <option>Bulk Action</option>
                            <option value="1" >Send Email</option>
                            <option value="2">Delete</option>
                        </Form.Select>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end gap-2 ms-auto">
                        <Dropdown >
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <FontAwesomeIcon icon={faFilter} />  Filtered By
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Active</Dropdown.Item>
                                <Dropdown.Item href="#">Inactive</Dropdown.Item>
                                <Dropdown.Item href="#">Email Verified</Dropdown.Item>
                                <Dropdown.Item href="#">Value</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Button className='green-btn-5' onClick={handleShow}> </Button>
                    </div>
                </div>
                <table className='table  '>
                    <thead>
                        <tr className="admin-table-head" >
                            <th className="fw-bold"><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th>
                            <th className="fw-bold">Patient ID</th>
                            <th className="fw-bold">Order ID</th>
                            <th className="fw-bold">Company</th>
                            <th className="fw-bold">Phone</th>
                            <th className="fw-bold">Address</th>
                            <th className="fw-bold">Value</th>
                            <th className="fw-bold">Status </th>
                            <th className="fw-bold">Actions </th>
                        </tr>
                    </thead>

                    <tbody >
                        <tr className="admin-table-row" >

                            <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>
                            <td>#2244</td>

                            <td className=" me-2">
                                <span onClick={ViewDetailsShow} style={{ color: '#208b8c', fontWeight: 'bold', cursor: 'pointer' }}> #M-35 </span>
                            </td>

                            <td><span className='text-dark fw-bold'>Health Care</span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                            <td>+811 847-4958 </td>
                            <td>
                                <span>City : Toronto</span><br />
                                <span>State : Ontario</span><br />
                                <span>Country : Canada</span>

                            </td>

                            <td>
                                7868.55$
                            </td>


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
                                        {/* <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>*/}
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={ViewDetailsShow}><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={editBtnShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>
                            <td>#2244</td>


                            <td className=" me-2">
                                <span onClick={ViewDetailsShow} style={{ color: '#208b8c', fontWeight: 'bold', cursor: 'pointer' }}> #M-654 </span>

                            </td>

                            <td><span className='text-dark fw-bold'>Square</span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                            <td>+811 847-4958 </td>
                            <td>
                                <span>City : Toronto</span><br />
                                <span>State : Ontario</span><br />
                                <span>Country : Canada</span>

                            </td>

                            <td>
                                7464.55$
                            </td>


                            <td>
                                <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Inactive</div>
                            </td>

                            <td>

                                {/* onClick={handleShow} */}
                                <Dropdown >
                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        {/* <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item> */}
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={ViewDetailsShow}><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={editBtnShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>


                        <tr className="admin-table-row" >

                            <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>

                            <td>#2244</td>

                            <td className=" me-2">
                                <span onClick={ViewDetailsShow} style={{ color: '#208b8c', fontWeight: 'bold', cursor: 'pointer' }}> #M-35 </span>
                            </td>

                            <td><span className='text-dark fw-bold'>Lupun</span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                            <td>+811 847-4958 </td>
                            <td>
                                <span>City : Toronto</span><br />
                                <span>State : Ontario</span><br />
                                <span>Country : Canada</span>

                            </td>

                            <td>
                                8745.55$
                            </td>


                            <td>
                                <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Inactive</div>
                            </td>

                            <td>

                                {/* onClick={handleShow} */}
                                <Dropdown >
                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        {/* <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>*/}
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={ViewDetailsShow}><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={editBtnShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>

                            <td>#2244</td>

                            <td className=" me-2">
                                <span onClick={ViewDetailsShow} style={{ color: '#208b8c', fontWeight: 'bold', cursor: 'pointer' }}> #M-35 </span>
                            </td>

                            <td><span className='text-dark fw-bold'>Medicare</span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                            <td>+811 847-4958 </td>
                            <td>
                                <span>City : Toronto</span><br />
                                <span>State : Ontario</span><br />
                                <span>Country : Canada</span>

                            </td>

                            <td>
                                6544.55$
                            </td>


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
                                        {/* <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>*/}
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={ViewDetailsShow}><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={editBtnShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>

                            <td>#2244</td>

                            <td className=" me-2">
                                <span onClick={ViewDetailsShow} style={{ color: '#208b8c', fontWeight: 'bold', cursor: 'pointer' }}> #M-35 </span>
                            </td>

                            <td><span className='text-dark fw-bold'>Sun</span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                            <td>+811 847-4958 </td>
                            <td>
                                <span>City : Toronto</span><br />
                                <span>State : Ontario</span><br />
                                <span>Country : Canada</span>

                            </td>

                            <td>
                                5452.55$
                            </td>


                            <td>
                                <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Inactive</div>
                            </td>

                            <td>

                                {/* onClick={handleShow} */}
                                <Dropdown >
                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        {/* <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item> */}
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={ViewDetailsShow}><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={editBtnShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>

                            <td>#2244</td>

                            <td className=" me-2">
                                <span onClick={ViewDetailsShow} style={{ color: '#208b8c', fontWeight: 'bold', cursor: 'pointer' }}> #M-35 </span>
                            </td>

                            <td><span className='text-dark fw-bold'>Sunflower</span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                            <td>+811 847-4958 </td>
                            <td>
                                <span>City : Toronto</span><br />
                                <span>State : Ontario</span><br />
                                <span>Country : Canada</span>

                            </td>

                            <td>
                                745.55$
                            </td>


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
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={ViewDetailsShow}><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={editBtnShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>
                            <td>#2244</td>

                            <td className=" me-2">
                                <span onClick={ViewDetailsShow} style={{ color: '#208b8c', fontWeight: 'bold', cursor: 'pointer' }}> #M-35 </span>
                            </td>

                            <td><span className='text-dark fw-bold'>Oxiden</span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                            <td>+811 847-4958 </td>
                            <td>
                                <span>City : Toronto</span><br />
                                <span>State : Ontario</span><br />
                                <span>Country : Canada</span>

                            </td>

                            <td>
                                6541.55$
                            </td>


                            <td>
                                <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Inactive</div>
                            </td>

                            <td>

                                {/* onClick={handleShow} */}
                                <Dropdown >
                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={ViewDetailsShow}><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={editBtnShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>


                    </tbody>
                </table>

                <div className='d-flex gap-3 mb-2 '>
                    <Form.Select className=' ms-auto' style={{ width: '100px', height: '40px' }} aria-label="Default select example">
                        <option value="1">5</option>
                        <option value="2">10</option>
                        <option value="3">15</option>
                    </Form.Select>

                    <span className="pagination" style={{ float: "right" }}>
                        <button className="btn2">Previous</button>
                        <button className="btn1">1</button>
                        <button className="btn3">Next</button>
                    </span>
                </div>


            </Container>


            {/* Add Order */}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >

                <Modal.Header closeButton >
                    <Modal.Title>
                        <div className='d-flex align-items-center gap-3 mb-3'>
                            {/* <img
                                style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                                src="./img/Our-doctors-img-1.jpg"
                                alt=""
                            /> */}
                            <h4 className='fw-bold ' style={{ color: 'rgb(32, 139, 140)' }}>Add Purchase Order</h4>
                        </div>
                        {/* <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Friend</div> */}

                    </Modal.Title >
                </Modal.Header>
                <Modal.Body>

                    <div className='row '>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Company* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingName" label="Medicine Name">
                                <Form.Control type="text" placeholder="Medicine Name" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Email* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="Email">
                                <Form.Control type="email" placeholder="Email" />
                            </FloatingLabel>
                        </div>

                    </div>

                    <div className='row'>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Phone* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="Phone">
                                <Form.Control type="number" placeholder="Phone" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">

                            <FormLabel className='fw-bold text-dark'>Balance* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="Balance">
                                <Form.Control type="number" placeholder="Balance" />
                            </FloatingLabel>
                        </div>

                    </div>


                    <div className='row mb-3'>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Country* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="Country">
                                <Form.Control type="text" placeholder="Country" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">

                            <FormLabel className='fw-bold text-dark'>City* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="City">
                                <Form.Control type="text" placeholder="City" />
                            </FloatingLabel>
                        </div>

                    </div>

                    <div className='row mb-3'>
                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>State* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="State">
                                <Form.Control type="text" placeholder="State" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Status* </FormLabel>
                            <Form.Select style={{ width: '350px' }} aria-label="Default select example">
                                <option>Select</option>
                                <option value="1" >Active</option>
                                <option value="2">Inactive</option>
                            </Form.Select>

                        </div>

                    </div>





                </Modal.Body>
                <Modal.Footer >
                    <Button variant="secondary" onClick={handleClose}>
                        Cancle
                    </Button>
                    {/* <Button  variant="danger"><FontAwesomeIcon icon={faCancel} className='fs-5 me-2' />Reject</Button> */}
                    <Button className='d-flex gap-2 align-items-center all-bg-green fw-bold' ><FontAwesomeIcon icon={faCheck} />Add Order</Button>
                </Modal.Footer>
            </Modal>


            {/* Edit Manufacturer */}

            <Modal
                show={show2}
                onHide={editBtnClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >

                <Modal.Header closeButton >
                    <Modal.Title>
                        <div className='d-flex align-items-center gap-3 mb-3'>
                            {/* <img
                                style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                                src="./img/Our-doctors-img-1.jpg"
                                alt=""
                            /> */}
                            <h4 className='fw-bold ' style={{ color: 'rgb(32, 139, 140)' }}>Edit Manufacturer</h4>
                        </div>
                        {/* <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Friend</div> */}

                    </Modal.Title >
                </Modal.Header>
                <Modal.Body>

                    <div className='row '>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Company* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingName" label="Medicine Name">
                                <Form.Control type="text" placeholder="Medicine Name" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Email* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="Email">
                                <Form.Control type="email" placeholder="Email" />
                            </FloatingLabel>
                        </div>

                    </div>

                    <div className='row'>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Phone* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="Phone">
                                <Form.Control type="number" placeholder="Phone" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">

                            <FormLabel className='fw-bold text-dark'>Balance* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="Balance">
                                <Form.Control type="number" placeholder="Balance" />
                            </FloatingLabel>
                        </div>

                    </div>


                    <div className='row mb-3'>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Country* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="Country">
                                <Form.Control type="text" placeholder="Country" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">

                            <FormLabel className='fw-bold text-dark'>City* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="City">
                                <Form.Control type="text" placeholder="City" />
                            </FloatingLabel>
                        </div>

                    </div>

                    <div className='row mb-3'>
                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>State* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="State">
                                <Form.Control type="text" placeholder="State" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Status* </FormLabel>
                            <Form.Select style={{ width: '350px' }} aria-label="Default select example">
                                <option>Select</option>
                                <option value="1" >Active</option>
                                <option value="2">Inactive</option>
                            </Form.Select>

                        </div>

                    </div>


                </Modal.Body>
                <Modal.Footer >
                    <Button variant="secondary" onClick={editBtnClose}>
                        Cancle
                    </Button>
                    {/* <Button  variant="danger"><FontAwesomeIcon icon={faCancel} className='fs-5 me-2' />Reject</Button> */}
                    <Button className='d-flex gap-2 align-items-center all-bg-green' ><FontAwesomeIcon icon={faCheck} />Edit Order</Button>
                </Modal.Footer>
            </Modal>


            {/* Delete Modal */}

            <Modal
                show={show1}
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

            {/* View Details Modal */}
            <Modal
                show={show3}
                onHide={ViewDetailsClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: '#208b8c', fontWeight: 'bold' }}>Purchase Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='mb-5' >
                        <img style={{ width: '40px', height: '40px' }} className='logo me-2 ' src="./img/logo.jpg" alt="Logo" /> <br />
                        <span className="fw-bold fs-4" style={{ color: 'rgb(32 139 140)' }}>JANANI</span><br />
                        <span>JananiHospital@gmail.com</span><br />
                        <span>+1999212993</span><br />
                        <span>Singapur Layout, Banglore</span><br />

                    </div>

                    <div className="row mb-5">

                        <div className="col-lg-6">
                            <span className='fw-bold text-dark'>From:</span> <br />
                            <span>Ganesh Kalal</span><br />
                            <span>+1991227831</span>
                        </div>

                        <div className="col-lg-6">
                            <span className='fw-bold text-dark'>To:</span><br />
                            <span>Amandeep</span><br />
                            <span>04/04/2023</span>

                        </div>

                    </div>

                    <h6 className='fw-bold text-dark'>PURCHASE ORDER </h6>
                    <table className="table table-bordered border-dark">
                        <thead>
                            <tr className="admin-table-head">
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Patient ID</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Order ID</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Company</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Phone</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Address</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Value</th>
                                {/* <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Status</th> */}
                            </tr>
                        </thead>

                        <tbody>
                            <tr >
                                <td>#2244</td>
                                <td className=" me-2">
                                    #M-6845
                                </td>

                                <td><span className='text-dark fw-bold'>Oxiden</span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                                <td>+811 847-4958 </td>
                                <td>
                                    <span>City : Toronto</span><br />
                                    <span>State : Ontario</span><br />
                                    <span>Country : Canada</span>

                                </td>
                                <td>
                                    6541.55$
                                </td>
                                {/* <td>
                                    <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Inactive</div>
                                </td> */}

                            </tr>
                        </tbody>

                    </table>

                    <div className='row ms-auto align-items-center justify-content-end mb-5'>
                        <div className="col-md-2 ">
                            <span >Total :</span><br />
                            <span>Discount :</span> <br />
                            <span>Gst :</span> <br />
                            <span className='fw-bold'>Grand Total :</span> <br />
                            <span className='fw-bold'>Status :</span>


                        </div>

                        <div className="col-md-2">
                            <span>$ 2020</span> <br />
                            <span>$20</span> <br />
                            <span>$ 20</span> <br />
                            <span className='fw-bold'>$ 2020</span> <br />
                            <span className='fw-bold'>Paid</span>

                        </div>


                    </div>


                    <div className='text-center text-dark mb-2'>
                        <p>Thanks For Shoping. </p>
                        <p>Sales Invoice Generated By: Janani Hospital, Contact : JananiHospital@gamil.com </p>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <Button className='all-bg-green' onClick={() => navigate('#')}>
                            <FontAwesomeIcon icon={faFileArrowDown} className='me-2' /> Download
                        </Button>
                        {/* 
                        <Button style={{ backgroundColor: 'rgb(32 139 140)' }}>
                            <FontAwesomeIcon icon={faEdit} className='me-2' /> Edit Invoice
                        </Button> */}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ViewDetailsClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary">Understood</Button> */}
                </Modal.Footer>
            </Modal>

        </div>
    )
}
