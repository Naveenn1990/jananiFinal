import { faAngleLeft, faAngleRight, faCancel, faCheck, faDownload, faEllipsis, faEye, faFilter, faHouseUser, faPenToSquare, faPlus, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Container, Dropdown, FloatingLabel, Form, FormLabel, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const MedicineList = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteBtnClose = () => setShow1(false)
    const deleteBtnShow = () => setShow1(true)

    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'>Medicine List</h4>

            <Container>
                
                <div className="row">
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

                        <Button className='green-btn-3' onClick={() => navigate('/addmedicine')}>

                        </Button>

                    </div>
                </div>

                <table className='table  '>
                    <thead>
                        <tr className="admin-table-head" >
                            <th className="fw-bold"><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th>
                            <th className="fw-bold">Name</th>
                            <th className="fw-bold">Generic Name</th>
                            <th className="fw-bold">Weight</th>
                            <th className="fw-bold">Category</th>
                            <th className="fw-bold">Price</th>
                            <th className="fw-bold">Stock</th>
                            <th className="fw-bold">Status </th>
                            <th className="fw-bold">Actions </th>
                        </tr>
                    </thead>

                    <tbody >
                        <tr className="admin-table-row" >

                            <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>


                            <td className=" me-2">
                                <a href="#" className='fw-bold'> Zimax</a>
                            </td>

                            <td>Azithromycin</td>
                            <td>500mg </td>
                            <td>Tablet</td>

                            <td>
                                20.55$
                            </td>

                            <td>
                                100
                            </td>


                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Available</div>
                            </td>

                            <td>

                                {/* onClick={handleShow} */}
                                <Dropdown >
                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Dropdown.Item className='medicine-list-dropdown' href="/purchaseorderlist"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>


                            <td className=" me-2" >
                                <a href="#" className='fw-bold'> Oxidon</a>
                            </td>

                            <td>Domperidon</td>
                            <td>50mg </td>
                            <td>Tablet</td>

                            <td>
                                2.55$
                            </td>

                            <td>
                                15
                            </td>


                            <td>
                                <div className="Diseases-btn" style={{ color: 'purple', border: '1px solid purple' }}>Low</div>
                            </td>

                            <td>

                                {/* onClick={handleShow} */}
                                <Dropdown >
                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>


                            <td className=" me-2" >
                                <a href="#" className='fw-bold'> MED-1008</a>
                            </td>

                            <td>hydrazine</td>
                            <td>200Doses </td>
                            <td>Inhealer</td>

                            <td>
                                12.45$
                            </td>

                            <td>
                                45
                            </td>


                            <td>
                                <div className="Diseases-btn" style={{ color: 'purple', border: '1px solid purple' }}>Low</div>
                            </td>

                            <td>

                                {/* onClick={handleShow} */}
                                <Dropdown >
                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>


                        <tr className="admin-table-row" >

                            <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>


                            <td className=" me-2" >
                                <a href="#" className='fw-bold'> Ceevit</a>
                            </td>

                            <td>Vitamin C	</td>
                            <td>250mg </td>
                            <td>Vitamin</td>

                            <td>
                                5.00$
                            </td>

                            <td>
                                200
                            </td>


                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Available</div>
                            </td>

                            <td>

                                {/* onClick={handleShow} */}
                                <Dropdown >
                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>


                            <td className=" me-2" >
                                <a href="#" className='fw-bold'> Pantonix</a>
                            </td>

                            <td>Pantoprazol</td>
                            <td>25mg </td>
                            <td>tablet</td>

                            <td>
                                10.00$
                            </td>

                            <td>
                                50
                            </td>


                            <td>
                                <div className="Diseases-btn" style={{ color: 'purple', border: '1px solid purple' }}>Low</div>
                            </td>

                            <td>

                                {/* onClick={handleShow} */}
                                <Dropdown >
                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>



                            <td className=" me-2" >
                                <a href="#" className='fw-bold'> Oxidon</a>
                            </td>

                            <td>Domperidon</td>
                            <td>50mg </td>
                            <td>Tablet</td>

                            <td>
                                2.55$
                            </td>

                            <td>
                                15
                            </td>


                            <td>
                                <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Out Of Stock</div>
                            </td>

                            <td>

                                {/* onClick={handleShow} */}
                                <Dropdown >
                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>


                            <td className=" me-2" >
                                <a href="#" className='fw-bold'> MED-1008</a>
                            </td>

                            <td>hydrazine</td>
                            <td>200Doses </td>
                            <td>Inhealer</td>

                            <td>
                                12.45$
                            </td>

                            <td>
                                45
                            </td>


                            <td>
                                <div className="Diseases-btn" style={{ color: 'purple', border: '1px solid purple' }}>Low</div>
                            </td>

                            <td>

                                {/* onClick={handleShow} */}
                                <Dropdown >
                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td>


                            <td className=" me-2" >
                                <a href="#" className='fw-bold'> Oxidon</a>
                            </td>

                            <td>Domperidon</td>
                            <td>50mg </td>
                            <td>Tablet</td>

                            <td>
                                2.55$
                            </td>

                            <td>
                                15
                            </td>


                            <td>
                                <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Out Of Stock</div>
                            </td>

                            <td>

                                {/* onClick={handleShow} */}
                                <Dropdown >
                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Dropdown.Item className='medicine-list-dropdown' href="#"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item>
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
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


            </Container>


            {/* EDIT MEDICINE */}

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
                            <h4 className='fw-bold ' style={{ color: 'rgb(32, 139, 140)' }}>Edit Medicine</h4>
                        </div>
                        {/* <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Friend</div> */}

                    </Modal.Title >
                </Modal.Header>
                <Modal.Body>

                    <div className='row '>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Medicine Name* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '300px' }} controlId="floatingEmail" label="Medicine Name">
                                <Form.Control type="text" placeholder="Medicine Name" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Genric Name* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '300px' }} controlId="floatingEmail" label="Genric Name">
                                <Form.Control type="text" placeholder="Genric Name" />
                            </FloatingLabel>
                        </div>

                    </div>

                    <div className='row'>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>SKU* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '300px' }} controlId="floatingEmail" label="SKU">
                                <Form.Control type="text" placeholder="SKU" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">

                            <FormLabel className='fw-bold text-dark'>Weight* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '300px' }} controlId="floatingEmail" label="Weight">
                                <Form.Control type="text" placeholder="Weight" />
                            </FloatingLabel>
                        </div>

                    </div>

                    <div className='row mb-3'>
                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Category* </FormLabel>
                            <Form.Select style={{ width: '300px' }} aria-label="Default select example">
                                <option>Select</option>
                                <option value="1" >Parcetomal</option>
                                <option value="2">Painkiller</option>
                                <option value="3">Khasi ki dawai</option>
                                <option value="4">Dolo 650</option>
                            </Form.Select>
                        </div>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Manufacture* </FormLabel>
                            <Form.Select style={{ width: '300px' }} aria-label="Default select example">
                                <option>Select</option>
                                <option value="1" >Healthcare</option>
                                <option value="2">Square</option>
                                <option value="3">Lupin </option>
                                <option value="4">sun</option>
                            </Form.Select>

                        </div>

                    </div>


                    <div className='row mb-3'>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Price* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '300px' }} controlId="floatingEmail" label="Price">
                                <Form.Control type="text" placeholder="Price" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">

                            <FormLabel className='fw-bold text-dark'>Manufacture Price* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '300px' }} controlId="floatingEmail" label="Manufacture Price">
                                <Form.Control type="text" placeholder="Manufacture Price" />
                            </FloatingLabel>
                        </div>

                    </div>


                    <div className='row mb-3'>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Stock(Box)* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '300px' }} controlId="floatingEmail" label="count">
                                <Form.Control type="number" placeholder="count" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">

                            <FormLabel className='fw-bold text-dark'>Expire Date* </FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '300px' }} controlId="floatingEmail" label="date">
                                <Form.Control type="date" placeholder="Manufacture Price" />
                            </FloatingLabel>
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer >
                    <Button variant="secondary" onClick={handleClose}>
                        Cancle
                    </Button>
                    {/* <Button  variant="danger"><FontAwesomeIcon icon={faCancel} className='fs-5 me-2' />Reject</Button> */}
                    <Button variant="success"><FontAwesomeIcon icon={faCheck} className='fs-5 me-2' />Save</Button>
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
