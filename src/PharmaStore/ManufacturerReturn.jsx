import { faAngleLeft, faAngleRight, faCancel, faCheck, faDownload, faEllipsis, faEye, faFilter, faHouseUser, faPenToSquare, faPlus, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Container, Dropdown, FloatingLabel, Form, FormLabel, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const ManufacturerReturn = () => {

    const navigate = useNavigate()

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);



    const deleteBtnClose = () => setShow1(false)
    const deleteBtnShow = () => setShow1(true)

    const editBtnClose = () => setShow2(false)
    const editBtnShow = () => setShow2(true)


    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'>Manufacturer Return List </h4>

            <Container>
                <div className="row">
                    <div className="col-lg-3 d-flex gap-2 mb-3">

                        <Form.Select style={{ width: '200px' }} aria-label="Default select example">

                            <option value="1" >Today</option>
                            <option value="2">Tomorrow</option>
                            <option value="3">Last 1 Month</option>
                            <option value="4">Last 6 Month</option>
                        </Form.Select>
                    </div>

                    <div className="col-lg-9  d-flex gap-2 ">
                        <Form className="ms-auto">
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
                                <Dropdown.Item href="#">Last 30 Days</Dropdown.Item>
                                <Dropdown.Item href="#">Last 6 Months</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Button className='green-btn-8' onClick={() => navigate('/addmanufacturerreturn')}>

                        </Button>

                    </div>

                    <table className='table  '>
                        <thead>
                            <tr className="admin-table-head" >
                                <th className="fw-bold"><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th>
                                <th className="fw-bold">Purchase ID</th>
                                <th className="fw-bold">Manufacturer</th>
                                <th className="fw-bold">Date</th>
                                <th className="fw-bold">Phone</th>
                                <th className="fw-bold" >Reason</th>
                                <th className="fw-bold">Amount</th>
                                <th className="fw-bold">Actions </th>
                            </tr>
                        </thead>

                        <tbody >
                            <tr className="admin-table-row" >

                                <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>


                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> #3578</a>
                                </td>

                                <td><span className='text-dark fw-bold'>Health Care</span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                                <td>19/12/2020 </td>

                                <td>+811 847-4958</td>


                                <td>
                                    <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Expire Date	</div>
                                </td>

                                <td>
                                    7868.55$
                                </td>



                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
                                    <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={editBtnShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit </Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>


                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> #5452</a>
                                </td>

                                <td><span className='text-dark fw-bold'>Square </span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                                <td>19/12/2020 </td>
                                <td>+124 394-1787</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Wrong Drug</div>
                                </td>


                                <td>
                                    7464.55$
                                </td>



                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
        <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={editBtnShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>


                            <tr className="admin-table-row" >

                                <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>


                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> #5582</a>
                                </td>

                                <td><span className='text-dark fw-bold'>Lupin</span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                                <td>17/05/2021</td>
                                <td>+168 603-2320</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'blue', border: '1px solid blue' }}>Damaged</div>
                                </td>

                                <td>
                                    352.55$
                                </td>




                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
        <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={editBtnShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>


                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> #5452</a>
                                </td>

                                <td><span className='text-dark fw-bold'>Medicare</span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                                <td>05/12/2021 </td>
                                <td>+168 603-2320 </td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'purple', border: '1px solid purple' }}>Extra Drug</div>
                                </td>


                                <td>
                                    6545.55$
                                </td>



                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
<Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={editBtnShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>


                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> #5642</a>
                                </td>

                                <td><span className='text-dark fw-bold'>Support Medic</span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                                <td>02/08/2021	 </td>
                                <td>+168 603-2320 </td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Wrong Drug</div>
                                </td>


                                <td>
                                    5452.55$
                                </td>

                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
<Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={editBtnShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>


                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> #5452</a>
                                </td>

                                <td><span className='text-dark fw-bold'>Square </span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                                <td>19/12/2020 </td>
                                <td>+124 394-1787</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Wrong Drug</div>
                                </td>


                                <td>
                                    7464.55$
                                </td>



                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
<Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={editBtnShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>


                            <tr className="admin-table-row" >

                                <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>


                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> #5582</a>
                                </td>

                                <td><span className='text-dark fw-bold'>Lupin</span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                                <td>17/05/2021</td>
                                <td>+168 603-2320</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'blue', border: '1px solid blue' }}>Damaged</div>
                                </td>

                                <td>
                                    352.55$
                                </td>




                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
<Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={editBtnShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>


                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> #5452</a>
                                </td>

                                <td><span className='text-dark fw-bold'>Medicare</span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                                <td>05/12/2021 </td>
                                <td>+168 603-2320 </td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'purple', border: '1px solid purple' }}>Extra Drug</div>
                                </td>


                                <td>
                                    6545.55$
                                </td>



                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
<Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={editBtnShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>


                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> #5642</a>
                                </td>

                                <td><span className='text-dark fw-bold'>Support Medic</span> <br /><span style={{ fontSize: '12px', color: 'grey' }}>info@softnio.com</span> </td>
                                <td>02/08/2021	 </td>
                                <td>+1124542145 </td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Wrong Drug</div>
                                </td>


                                <td>
                                    5452.55$
                                </td>

                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
<Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={editBtnShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

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
                            <span className='me-4 '  >1-10 of 13 page</span>
                            <FontAwesomeIcon icon={faAngleLeft} className='me-4 ' />
                            <FontAwesomeIcon icon={faAngleRight} className='' />
                        </div>
                    </div>

                </div>
            </Container>




            {/* Edit Wastage Return */}

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
                            <h4 className='fw-bold ' style={{ color: 'rgb(32, 139, 140)' }}>Edit Manufacturer Return</h4>
                        </div>
                        {/* <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Friend</div> */}

                    </Modal.Title >
                </Modal.Header>
                <Modal.Body>

                    <div className='row '>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Company* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingName" label="Customer">
                                <Form.Control type="text" placeholder="Customer" />
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
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="Number">
                                <Form.Control type="number" placeholder="Number" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">

                            <FormLabel className='fw-bold text-dark'>Product Name* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="Name">
                                <Form.Control type="text" placeholder="Name" />
                            </FloatingLabel>
                        </div>

                    </div>


                    <div className='row mb-3'>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Amount* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="Amount">
                                <Form.Control type="number" placeholder="Amount" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">

                            <FormLabel className='fw-bold text-dark'>Invoice No* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="Invoice No">
                                <Form.Control type="text" placeholder="Invoice No" />
                            </FloatingLabel>
                        </div>

                    </div>

                    <div className='row mb-3'>
                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Quantity* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="Quantity">
                                <Form.Control type="number" placeholder="Quantity" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark mb-4'>Reason* </FormLabel>
                            <Form.Select style={{ width: '350px' }} aria-label="Default select example">
                                <option>Select</option>
                                <option value="1" >Wrong Drug</option>
                                <option value="2">Extra Drug</option>
                                <option value="3">Damaged</option>
                                <option value="3">Expired Drug</option>
                            </Form.Select>

                        </div>

                    </div>

                    <div className='row mb-3'>
                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Date* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '350px' }} controlId="floatingEmail" label="Date">
                                <Form.Control type="date" placeholder="Date" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark mb-4'>Status* </FormLabel>
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
                    <Button variant="success d-flex align-items-center gap-2"><FontAwesomeIcon icon={faCheck} className='fs-6' />Edit Return</Button>
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

        </div>
    )
}
