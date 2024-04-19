import { faAngleLeft, faAngleRight, faCancel, faCheck, faDownload, faEllipsis, faEye, faFilePdf, faFilter, faHouseUser, faPenToSquare, faPlus, faTrash, faUpload, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Padding } from '@mui/icons-material'
import React, { useState } from 'react'
import { Button, Container, Dropdown, FloatingLabel, Form, FormLabel, Modal, ProgressBar, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";


export const ReferLabPatientList = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteBtnClose = () => setShow1(false)
    const deleteBtnShow = () => setShow1(true)

    const ViewProfileClose = () => setShow2(false);
    const ViewProfileShow = () => setShow2(true);

    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'>Patient List</h4>

            <Container>
                <div className="row">
                    <div className="col-lg-4 d-flex gap-2">

                        {/* <Dropdown>
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
                        </Button></p> */}
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

                        <Button className='green-btn-9' onClick={() => navigate('/referlabaddpatient')}>

                        </Button>

                    </div>

                    <table className='table  '>
                        <thead>
                            <tr className="admin-table-head" >
                                {/* <th className="fw-bold"><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th> */}
                                <th className="fw-bold">Image</th>
                                <th className="fw-bold">Name</th>
                                <th className="fw-bold">Gender</th>
                                <th className="fw-bold">Address</th>
                                <th className="fw-bold">Mobile</th>
                                <th className="fw-bold">Refer Doctor</th>
                                <th className="fw-bold">Age</th>
                                <th className="fw-bold">Blood Group </th>
                                <th className="fw-bold">Diesease </th>
                                <th className="fw-bold">Actions </th>
                            </tr>
                        </thead>

                        <tbody >
                            <tr className="admin-table-row" >

                                {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                                <td className=" me-2">
                                    <img
                                        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                        src="./img/Our-doctors-img-1.jpg"
                                        alt=""
                                    />
                                </td>

                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> Rajesh</a>
                                </td>

                                <td>Male</td>
                                <td>Singapoor Layout <br /> Banglore </td>
                                <td>1224531545</td>

                                <td>
                                    Dr.Sarah
                                </td>

                                <td>
                                    24
                                </td>

                                <td>A+</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Typhod</div>
                                </td>

                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="/purchaseorderlist"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={ViewProfileShow}><FontAwesomeIcon icon={faUser} className='me-2' />View Profile</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                                <td className=" me-2">
                                    <img
                                        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                        src="./img/Our-doctors-img-1.jpg"
                                        alt=""
                                    />
                                </td>

                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> Kamlesh</a>
                                </td>

                                <td>Male</td>
                                <td>Singapoor Layout <br /> Banglore </td>
                                <td>1224531545</td>

                                <td>Dr.Ramesh</td>

                                <td>
                                    24
                                </td>

                                <td>B+</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Cholera</div>
                                </td>

                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="/purchaseorderlist"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={ViewProfileShow}><FontAwesomeIcon icon={faUser} className='me-2' />View Profile</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                                <td className=" me-2">
                                    <img
                                        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                        src="./img/Our-doctors-img-1.jpg"
                                        alt=""
                                    />
                                </td>

                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> Sarah</a>
                                </td>

                                <td>Female</td>
                                <td>Singapoor Layout <br /> Banglore </td>
                                <td>1224531545</td>

                                <td>
                                    Dr.Sheetal
                                </td>

                                <td>
                                    24
                                </td>

                                <td>B+</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Cholera</div>
                                </td>

                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="/purchaseorderlist"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={ViewProfileShow}><FontAwesomeIcon icon={faUser} className='me-2' />View Profile</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>


                            <tr className="admin-table-row" >

                                {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                                <td className=" me-2">
                                    <img
                                        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                        src="./img/Our-doctors-img-1.jpg"
                                        alt=""
                                    />
                                </td>

                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> Sheetal</a>
                                </td>

                                <td>Female</td>
                                <td>Singapoor Layout <br /> Banglore </td>
                                <td>1224531545</td>

                                <td>
                                    Dr.Ganesh
                                </td>

                                <td>
                                    24
                                </td>

                                <td>O-</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'blue', border: '1px solid blue' }}>Jaundice</div>
                                </td>

                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="/purchaseorderlist"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={ViewProfileShow}><FontAwesomeIcon icon={faUser} className='me-2' />View Profile</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                                <td className=" me-2">
                                    <img
                                        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                        src="./img/Our-doctors-img-1.jpg"
                                        alt=""
                                    />
                                </td>

                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> Arun</a>
                                </td>

                                <td>Male</td>
                                <td>Singapoor Layout <br /> Banglore </td>
                                <td>1224531545</td>

                                <td>
                                    Dr.Amandeep
                                </td>

                                <td>
                                    24
                                </td>

                                <td>AB+</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Fever</div>
                                </td>

                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="/purchaseorderlist"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={ViewProfileShow}><FontAwesomeIcon icon={faUser} className='me-2' />View Profile</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>
                            <tr className="admin-table-row" >

                                {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                                <td className=" me-2">
                                    <img
                                        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                        src="./img/Our-doctors-img-1.jpg"
                                        alt=""
                                    />
                                </td>

                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> Shruuti mam</a>
                                </td>

                                <td>Female</td>
                                <td>Singapoor Layout <br /> Banglore </td>
                                <td>1224531545</td>

                                <td>
                                    Dr.Shruuuti
                                </td>

                                <td>
                                    24
                                </td>

                                <td>B+</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'blue', border: '1px solid blue' }}>Jaundice</div>
                                </td>

                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="/purchaseorderlist"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={ViewProfileShow}><FontAwesomeIcon icon={faUser} className='me-2' />View Profile</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                                <td className=" me-2">
                                    <img
                                        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                        src="./img/Our-doctors-img-1.jpg"
                                        alt=""
                                    />
                                </td>

                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> Rajesh</a>
                                </td>

                                <td>Male</td>
                                <td>Singapoor Layout <br /> Banglore </td>
                                <td>1224531545</td>

                                <td>
                                    Dr Jhone Deo
                                </td>

                                <td>
                                    24
                                </td>

                                <td>A+</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Fever</div>
                                </td>

                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="/purchaseorderlist"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
            <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={ViewProfileShow}><FontAwesomeIcon icon={faUser} className='me-2' />View Profile</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                                <td className=" me-2">
                                    <img
                                        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                        src="./img/Our-doctors-img-1.jpg"
                                        alt=""
                                    />
                                </td>

                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> Arun</a>
                                </td>

                                <td>Male</td>
                                <td>Singapoor Layout <br /> Banglore </td>
                                <td>1224531545</td>

                                <td>
                                    Dr.Amandeep
                                </td>

                                <td>
                                    24
                                </td>

                                <td>AB+</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Fever</div>
                                </td>

                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="/purchaseorderlist"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
            <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={ViewProfileShow}><FontAwesomeIcon icon={faUser} className='me-2' />View Profile</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>
                            <tr className="admin-table-row" >

                                {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                                <td className=" me-2">
                                    <img
                                        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                        src="./img/Our-doctors-img-1.jpg"
                                        alt=""
                                    />
                                </td>

                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> Shruuti mam</a>
                                </td>

                                <td>Female</td>
                                <td>Singapoor Layout <br /> Banglore </td>
                                <td>1224531545</td>

                                <td>
                                    Dr.Shruuuti
                                </td>

                                <td>
                                    24
                                </td>

                                <td>B+</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'blue', border: '1px solid blue' }}>Jaundice</div>
                                </td>

                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="/purchaseorderlist"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
            <Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={ViewProfileShow}><FontAwesomeIcon icon={faUser} className='me-2' />View Profile</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                                <td className=" me-2">
                                    <img
                                        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                        src="./img/Our-doctors-img-1.jpg"
                                        alt=""
                                    />
                                </td>

                                <td className=" me-2">
                                    <a href="#" className='fw-bold'> Rajesh</a>
                                </td>

                                <td>Male</td>
                                <td>Singapoor Layout <br /> Banglore </td>
                                <td>1224531545</td>

                                <td>
                                    Dr Jhone Deo
                                </td>

                                <td>
                                    24
                                </td>

                                <td>A+</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Fever</div>
                                </td>

                                <td>

                                    {/* onClick={handleShow} */}
                                    <Dropdown >
                                        <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                            {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                            <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            {/* <Dropdown.Item className='medicine-list-dropdown' href="/purchaseorderlist"><FontAwesomeIcon icon={faHouseUser} className='me-2' />Manufacturer</Dropdown.Item>
<Dropdown.Item className='medicine-list-dropdown' href="/medicinedetail"><FontAwesomeIcon icon={faEye} className='me-2' />View Details</Dropdown.Item> */}
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={ViewProfileShow}><FontAwesomeIcon icon={faUser} className='me-2' />View Profile</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                            <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <div className='d-flex gap-3 align-items-center mb-3 '>
                        <Form.Select className=' ms-auto' style={{ width: '100px', height: '40px' }} aria-label="Default select example">
                            <option value="1">5</option>
                            <option value="2">10</option>
                            <option value="3">15</option>
                        </Form.Select>
                        <div className='mt-2 align-items-center d-flex'>
                            <span className='me-4 '  >1-10 of 13 page</span>
                           <FontAwesomeIcon icon={faAngleLeft} className='me-4 page-change-btn' />
                            <FontAwesomeIcon icon={faAngleRight} className='page-change-btn'/>
                        </div>
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
                            <img
                                style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                                src="./img/Our-doctors-img-1.jpg"
                                alt=""
                            />
                            <h4 className='fw-bold ' style={{ color: 'rgb(32, 139, 140)' }}>Edit Patient Detail</h4>
                        </div>
                        <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green', width: '100px' }}>Rajesh</div>

                    </Modal.Title >
                </Modal.Header>
                <Modal.Body>

                    <div className='row mb-2 '>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>First Name* </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingEmail" label="First Name">
                                <Form.Control type="text" placeholder="First Name" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Last Name* </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingName" label="Last Name">
                                <Form.Control type="text" placeholder="Last Name" />
                            </FloatingLabel>
                        </div>

                    </div>

                    <div className='row mb-2'>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Gender* </FormLabel>
                            <Form.Select style={{ width: '300px' }} aria-label="Default select example">
                                <option>Select gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Other</option>
                            </Form.Select>
                        </div>

                        <div className="col-lg-6">

                            <FormLabel className='fw-bold text-dark'>Mobile Number* </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingNumber" label="Phone Number">
                                <Form.Control type="number" placeholder="Phone Number" />
                            </FloatingLabel>
                        </div>

                    </div>

                    <div className='row mb-2'>
                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Email* </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingEmail" label="Email">
                                <Form.Control type="Email" placeholder="Email" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Birth Date* </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingEmail" label="">
                                <Form.Control type="date" placeholder="" />
                            </FloatingLabel>


                        </div>

                    </div>


                    <div className='row mb-3'>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Age* </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingAge" label="Age">
                                <Form.Control type="number" placeholder="Age" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">

                            <FormLabel className='fw-bold text-dark'>Blood Presure* </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingEmail" label="Blood Presure">
                                <Form.Control type="text" placeholder="Blood Presure" />
                            </FloatingLabel>
                        </div>

                    </div>


                    <div className='row mb-3'>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Marital* </FormLabel>
                            <Form.Select style={{ width: '300px' }} aria-label="Default select example">
                                <option>Marital Status </option>
                                <option value="1">Single</option>
                                <option value="2">Married</option>
                            </Form.Select>
                        </div>

                        <div className="col-lg-6">

                            <FormLabel className='fw-bold text-dark'>Blood Group* </FormLabel>
                            <Form.Select style={{ width: '300px' }} aria-label="Default select example">
                                <option>Blood Group</option>
                                <option value="1">A+</option>
                                <option value="2">A-</option>
                                <option value="3">B+</option>
                                <option value="3">B-</option>
                                <option value="3">AB+</option>
                                <option value="3">AB-</option>
                                <option value="3">O+</option>
                                <option value="3">O-</option>
                            </Form.Select>
                        </div>

                    </div>

                    <div className='row mb-3'>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Injury/Contion* </FormLabel>
                            <FloatingLabel className='mb-5' label="Injury/Contion">
                                <Form.Control style={{ width: '300px' }} type="text" placeholder="Injury/Contion" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">

                            <FormLabel className='fw-bold text-dark'>Sugar Level* </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingEmail" label="Sugar Level">
                                <Form.Control type="text" placeholder="Sugar Level" />
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

            {/* VIEW PEOFILE MODAL */}

            <Modal size="lg" show={show2} onHide={ViewProfileClose} >
                <Modal.Header style={{ backgroundColor: 'rgb(32 139 140)', color: 'white' }}>
                    <Modal.Title >Patient Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: 'rgb(32 139 140)' }}>
                    <div className="row" style={{ color: "white" }}>
                        <div className="col-lg-4">
                            <img src="./img/department-img-1.jpg" style={{ width: "100%" }} />
                            <div style={{ border: "1px solid lightgrey" }}>
                                <h6
                                    style={{
                                        textAlign: "center",
                                        padding: "4% 0%",
                                        backgroundColor: "lightblue",
                                    }}
                                >
                                    ABOUT PATIENT
                                </h6>

                                <h6
                                    style={{
                                        paddingLeft: "4%",
                                        fontSize: "14px",
                                        marginTop: "2%",
                                    }}
                                >
                                    <b>NAME</b> : John
                                </h6>
                                <h6
                                    style={{
                                        paddingLeft: "4%",
                                        fontSize: "14px",
                                        marginTop: "2%",
                                    }}
                                >
                                    <b>EmailID</b> : John@gmail.com
                                </h6>
                                <h6
                                    style={{
                                        paddingLeft: "4%",
                                        fontSize: "14px",
                                        marginTop: "2%",
                                    }}
                                >
                                    <b>Mobile</b> : 9563256325
                                </h6>
                                <h6
                                    style={{
                                        paddingLeft: "4%",
                                        fontSize: "14px",
                                        marginTop: "2%",
                                    }}
                                >
                                    <b>Occupation</b> : Engineer
                                </h6>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div style={{ border: "1px solid lightgrey", padding: "2%" }}>
                                <span style={{ fontSize: "14px", textAlign: "justify" }}>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s,
                                </span>
                                <hr></hr>
                                <h6>General Report</h6>
                                <hr></hr>
                                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                                    Heart Beat
                                </span>
                                <ProgressBar
                                    variant="success"
                                    style={{ height: "6px" }}
                                    now={40}
                                />

                                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                                    Blood Pressure
                                </span>
                                <ProgressBar
                                    variant="info"
                                    style={{ height: "6px" }}
                                    now={60}
                                />

                                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                                    Sugar
                                </span>
                                <ProgressBar
                                    variant="warning"
                                    style={{ height: "6px" }}
                                    now={60}
                                />

                                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                                    Haemoglobin
                                </span>
                                <ProgressBar
                                    variant="danger"
                                    style={{ height: "6px" }}
                                    now={60}
                                />
                            </div>
                        </div>
                    </div>
                    <h6 style={{ marginTop: "4%", color: 'white' }}>Past Visit History</h6>
                    <Table className='table-bordered border-secondary' responsive="md" style={{ marginTop: "1%", backgroundColor: '#F2EFFB' }}>
                        <thead >
                            <tr style={{ fontSize: "15px", textAlign: "center" }}>
                                <th className='fw-bold'>Date</th>
                                <th className='fw-bold'>Refer Doctor</th>
                                <th className='fw-bold'>Department</th>
                                <th className='fw-bold'>Report</th>
                                <th className='fw-bold'>Earning</th>
                            </tr>
                        </thead>
                        <tbody style={{}}>
                            <tr style={{ fontSize: "15px", textAlign: "center" }}>
                                <td>06/10/1987</td>

                                <td>Dr.Devid</td>
                                <td>Cardiology</td>
                                <td><FontAwesomeIcon icon={faFilePdf} style={{ color: "#e0271a", }} /></td>
                                <td>

                                    $500

                                    {/* {" "}
                                    <div
                                        style={{
                                            display: "flex",
                                            textAlign: "center",
                                            justifyContent: "space-evenly",
                                        }}
                                    >
                                        <MdEdit style={{ color: "#20958c", marginRight: "1%" }} />
                                        <AiFillDelete style={{ color: "red" }} />
                                    </div> */}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                {/* <Modal.Footer>
          <div style={{ display: "flex" }}>
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                marginRight: "20px",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow(false);
              }}
            >
              CANCEL
            </button>

            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow(false);
                alert("Doctor Added");
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer> */}
            </Modal>
            {/* <Table responsive="md" style={{ marginTop: "1%" }}>
                <thead>
                    <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <th>Profile</th>
                        <th> Name</th>
                        <th>Sex</th>
                        <th>Address</th>
                        <th>Mobile</th>
                        <th>Birth Date</th>
                        <th>Age</th>
                        <th>Blood Group</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>Read More</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>
                            <img
                                src="/Images/doctor1.jpg"
                                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                            />
                        </td>
                        <td>John</td>
                        <td>Male</td>
                        <td>bangalore</td>
                        <td>9535652565</td>
                        <td>11 jan 1983</td>
                        <td>40</td>
                        <td>AB++</td>
                        <td>Discharge</td>
                        <td>
                            <div
                                style={{
                                    display: "flex",
                                    textAlign: "center",
                                    justifyContent: "space-evenly",
                                }}
                            >
                                <MdEdit style={{ color: "#20958c", marginRight: "1%" }} />
                                <AiFillDelete style={{ color: "red" }} />
                            </div>
                        </td>
                        <td>
                            <button
                                style={{
                                    border: "none",
                                    backgroundColor: "#20958c",
                                    color: "white",
                                    borderRadius: "20px",
                                }}
                                onClick={() => setShow(true)}
                            >
                                Read More
                            </button>
                        </td>
                    </tr>
                    <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>
                            <img
                                src="/Images/doctor1.jpg"
                                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                            />
                        </td>
                        <td>John</td>
                        <td>Male</td>
                        <td>bangalore</td>
                        <td>9535652565</td>
                        <td>11 jan 1983</td>
                        <td>40</td>
                        <td>AB++</td>
                        <td>Discharge</td>
                        <td>
                            <div
                                style={{
                                    display: "flex",
                                    textAlign: "center",
                                    justifyContent: "space-evenly",
                                }}
                            >
                                <MdEdit style={{ color: "#20958c", marginRight: "1%" }} />
                                <AiFillDelete style={{ color: "red" }} />
                            </div>
                        </td>
                        <td>
                            <button
                                style={{
                                    border: "none",
                                    backgroundColor: "#20958c",
                                    color: "white",
                                    borderRadius: "20px",
                                }}
                                onClick={() => setShow(true)}
                            >
                                Read More
                            </button>
                        </td>
                    </tr>
                    <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>
                            <img
                                src="/Images/doctor1.jpg"
                                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                            />
                        </td>
                        <td>John</td>
                        <td>Male</td>
                        <td>bangalore</td>
                        <td>9535652565</td>
                        <td>11 jan 1983</td>
                        <td>40</td>
                        <td>AB++</td>
                        <td>Discharge</td>
                        <td>
                            <div
                                style={{
                                    display: "flex",
                                    textAlign: "center",
                                    justifyContent: "space-evenly",
                                }}
                            >
                                <MdEdit style={{ color: "#20958c", marginRight: "1%" }} />
                                <AiFillDelete style={{ color: "red" }} />
                            </div>
                        </td>
                        <td>
                            <button
                                style={{
                                    border: "none",
                                    backgroundColor: "#20958c",
                                    color: "white",
                                    borderRadius: "20px",
                                }}
                                onClick={() => setShow(true)}
                            >
                                Read More
                            </button>
                        </td>
                    </tr>
                </tbody>
            </Table> */}

        </div>
    )
}
