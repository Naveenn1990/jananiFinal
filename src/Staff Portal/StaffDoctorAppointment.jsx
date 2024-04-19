
import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Dropdown, FloatingLabel, Form, FormLabel, Modal, ProgressBar, Table } from 'react-bootstrap'
import { faAngleLeft, faAngleRight, faCancel, faCheck, faDownload, faEllipsis, faEye, faFilePdf, faFilter, faHouseUser, faPenToSquare, faPlus, faTrash, faUpload, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

export const StaffDoctorAppointment = () => {

    const navigate = useNavigate()

    // const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const deleteBtnClose = () => setShow1(false)
    const deleteBtnShow = () => setShow1(true)

    const ViewProfileClose = () => setShow2(false);
    const ViewProfileShow = () => setShow2(true);

    return (
        <div>
            <h4 className='p-4 mb-4 fw-bold ' style={{ backgroundColor: '#dae1f3' }} > Doctor's Appointment</h4>

            <Container>
                {/* <div className='staff-doctor-management-h5 ' style={{ fontSize: '24px' }} >
                    <span>Total Appointments </span> <br />
                    <span>(100)</span>
                </div> */}


                <div className="row gap-2 justify-content-center  mb-4">

                    <Card className='col-lg-2 text-light' style={{ width: '13rem', backgroundColor: 'rgb(32 139 140)' }}>
                        <Card.Body className='text-center px-1'>
                            <Card.Title className='fw-bold' style={{ fontFamily: 'Roboto_Slab variant0' }}>"Total Appointments"</Card.Title>
                            <Card.Text className='fs-4 fw-bold'>
                                (100)
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='col-lg-2 text-light' style={{ width: '13rem', backgroundColor: 'rgb(112 4 147)' }}>
                        <Card.Body className='text-center px-1'>
                            <Card.Title className='fw-bold' style={{ fontFamily: 'Roboto_Slab variant0' }}>"Today's Appointments"</Card.Title>
                            <Card.Text className='fs-4 fw-bold'>
                                (10)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='col-lg-2 text-light' style={{ width: '13rem', backgroundColor: 'rgb(153 68 119)' }}>
                        <Card.Body className='text-center'>
                            <Card.Title className='fw-bold' style={{ fontFamily: 'Roboto_Slab variant0' }}>"Upcoming Appointments"</Card.Title>
                            <Card.Text className='fs-4 fw-bold'>
                                (15)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='col-lg-2 text-light' style={{ width: '13rem', backgroundColor: 'rgb(53 153 21)' }}>
                        <Card.Body className='text-center'>
                            <Card.Title className='fw-bold' style={{ fontFamily: 'Roboto_Slab variant0' }}>"Completed Appointments"</Card.Title>
                            <Card.Text className='fs-4 fw-bold'>
                                (40)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='col-lg-2 text-light' style={{ width: '13rem', backgroundColor: 'rgb(177 108 4)' }}>
                        <Card.Body className='text-center'>
                            <Card.Title className='fw-bold' style={{ fontFamily: 'Roboto_Slab variant0' }}>"Pending Appointments"</Card.Title>
                            <Card.Text className='fs-4 fw-bold'>
                                (35)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>


                <div className='row  mb-4'>
                    <div className="col-lg-6">
                        {/* <FormLabel className='fw-bold text-dark'>Doctor's* </FormLabel> */}
                        <Form.Select style={{ width: '200px' }} aria-label="Default select example">
                            <option> Select Doctor </option>
                            <option value="1">Dr.Jhon Smith</option>
                            <option value="2">Dr.Ganesh Kalal</option>
                            <option value="3">Dr.Suresh</option>
                            <option value="4">Dr.Ramesh</option>
                            <option value="5">Dr.Dinesh</option>
                        </Form.Select>

                    </div>

                    <div className=" col-lg-4 d-flex justify-content-end ">
                        <Form className="">
                            <Form.Control
                                style={{ width: "300px" }}
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            {/* <Button variant="outline-primary">Search</Button> */}
                        </Form>
                    </div>
                    <div className='col-lg-2'>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <FontAwesomeIcon icon={faFilter} />  Filtered By
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Today</Dropdown.Item>
                                <Dropdown.Item href="#">Yesterday</Dropdown.Item>
                                <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                                <Dropdown.Item href="#">Last 1 Month</Dropdown.Item>
                                <Dropdown.Item href="#">Last 6 Month</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        {/* <Button className='green-btn-9' onClick={() => navigate('/')}>

            </Button> */}
                    </div>
                </div>

                <table className='table' style={{ fontSize: '14px' }}>
                    <thead>
                        <tr className="admin-table-head" >
                            {/* <th className="fw-bold"><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th> */}
                            <th className="fw-bold">Image</th>
                            <th className="fw-bold">Patient Name</th>
                            <th className="fw-bold">Gender</th>
                            <th className="fw-bold">Address</th>
                            <th className="fw-bold">Mobile</th>
                            <th className="fw-bold">Doctor</th>
                            <th className="fw-bold">Age</th>
                            <th className="fw-bold">Blood Group </th>
                            <th className="fw-bold">Diesease </th>
                            <th className="fw-bold">Actions </th>
                        </tr>
                    </thead>

                    <tbody >
                        <tr className="admin-table-row" >

                            {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                            <td >
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/Our-doctors-img-1.jpg"
                                    alt=""
                                />
                            </td>

                            <td className='fw-bold'>
                                Rajesh
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
                                        {/* <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item> */}
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                            <td >
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/Our-doctors-img-1.jpg"
                                    alt=""
                                />
                            </td>

                            <td className='fw-bold'>
                                Kamlesh
                            </td>

                            <td>Male</td>
                            <td>Singapoor Layout <br /> Banglore </td>
                            <td>1224531545</td>

                            <td>
                                Dr.Smith
                            </td>

                            <td>
                                24
                            </td>

                            <td>B+</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Danguee</div>
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
                                        {/* <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item> */}
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                            <td >
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/Our-doctors-img-1.jpg"
                                    alt=""
                                />
                            </td>

                            <td className='fw-bold'>
                                Ramesh
                            </td>

                            <td>Male</td>
                            <td>Singapoor Layout <br /> Banglore </td>
                            <td>1224531545</td>

                            <td>
                                Dr.Lara
                            </td>

                            <td>
                                24
                            </td>

                            <td>C+</td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'purple', border: '1px solid purple' }}>Jaundise</div>
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
                                        {/* <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item> */}
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>


                        <tr className="admin-table-row" >

                            {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                            <td >
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/Our-doctors-img-1.jpg"
                                    alt=""
                                />
                            </td>

                            <td className='fw-bold'>
                                Jhon
                            </td>

                            <td>Male</td>
                            <td>Singapoor Layout <br /> Banglore </td>
                            <td>1224531545</td>

                            <td>
                                Dr.Deo
                            </td>

                            <td>
                                24
                            </td>

                            <td>C+</td>

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
                                        {/* <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item> */}
                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </td>
                        </tr>

                    </tbody>
                </table>


            </Container>

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
       
        </Modal.Footer> */}
            </Modal>


        </div>
    )
}
