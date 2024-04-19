import { faEye, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Container, FloatingLabel, Form, FormLabel, InputGroup, Modal, ProgressBar, Table } from 'react-bootstrap'

export const StaffRecordManagement = () => {

    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const statusClose = () => setShow1(false)
    const statusShow = () => setShow1(true)
    return (
        <div>

            <h4 className='p-4 mb-4 fw-bold text-center' style={{ backgroundColor: '#dae1f3' }} > Check Records</h4>

            <Container>
                <div className="row mb-3 ">
                    <div className="  col-lg-2">
                        <label className='fw-bold' id="basic-addon1">Patient ID</label> <br />
                        <input type="text" className="form-control" placeholder="ID" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="  col-lg-2">
                        <label className='fw-bold' id="basic-addon1">Patient Name</label> <br />
                        <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="  col-lg-3">
                        <label className='fw-bold' id="basic-addon1">Patient Number</label> <br />
                        <input type="number" className="form-control" placeholder="Number" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className='col-lg-2'>
                        <label className='fw-bold' id="basic-addon1">Select Report</label> <br />
                        <select className="form-select " aria-label="Default select example">
                            <option selected>Select Report</option>
                            <option value="1">X-Ray</option>
                            <option value="2">Lab Report</option>
                            <option value="3">Scan Report</option>
                            <option value="4">Blood Test</option>
                        </select>
                    </div>

                    <div className="col-lg-3">
                        <Button style={{backgroundColor:'rgb(32 139 140)', width:'200px',marginTop:'25px'}}>
                            Check
                        </Button>

                    </div>
                </div>

                {/* <div className="row">
                    <div className="col-md-2">
                            <FloatingLabel style={{ width: '100%' }} controlId="floatingName" label="Patient ID">
                                <Form.Control type="text" placeholder="Patient ID" />
                            </FloatingLabel>
                    </div>

                    <div className="col-md-2">
              
                            <FloatingLabel style={{ width: '100%' }} controlId="floatingName" label="Patient Name">
                                <Form.Control type="text" placeholder="Patient Name" />
                            </FloatingLabel>
                    </div>

                    <div className="col-md-2">
            
                            <FloatingLabel style={{ width: '100%' }} controlId="floatingName" label="Phone Number">
                                <Form.Control type="number" placeholder="Phone Number" />
                            </FloatingLabel>
                    </div>

                    <div className="col-md-2 d-flex ">
                        <Form.Select style={{ width: '197px', height: '35px' }} aria-label="Default select example">
                            <option> Select Report Type </option>
                            <option value="1">X-Ray</option>
                            <option value="2">Lab Report</option>
                            <option value="3">Scan Report</option>
                            <option value="4">Blood Test</option>
                            <option value="5">Other</option>
                        </Form.Select>
                    </div>
                </div> */}

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
                            <th className="fw-bold" style={{ width: '131px' }}>Last Action </th>
                            <th className="fw-bold" style={{ width: '100px' }}>Status </th>
                            <th className="fw-bold">Actions </th>
                        </tr>
                    </thead>

                    <tbody >
                        <tr className="admin-table-row" >

                            {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                            <td >
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/admin-doctors-list-2.jpg"
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

                            <td>Last 15 hours ago</td>

                            <td>
                                <div onClick={statusShow} className="Diseases-btn" style={{ color: 'green', border: '1px solid green', cursor: 'pointer' }}>Active</div>
                            </td>

                            <td>
                                <button className="table-details-btn" >
                                    <FontAwesomeIcon icon={faEye} onClick={handleShow} />
                                </button>
                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                            <td >
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/admin-doctors-list-2.jpg"
                                    alt=""
                                />
                            </td>

                            <td className='fw-bold'>
                                Rithik
                            </td>

                            <td>Male</td>
                            <td>Singapoor Layout <br /> Banglore </td>
                            <td>1224531545</td>

                            <td>
                                Dr.Smith
                            </td>

                            <td>
                                36
                            </td>

                            <td>Last 24 hours ago</td>

                            <td>
                                <div onClick={statusShow} className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange', cursor: 'pointer' }}>In active</div>
                            </td>

                            <td>
                                <button className="table-details-btn" >
                                    <FontAwesomeIcon icon={faEye} onClick={handleShow} />
                                </button>
                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                            <td >
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/admin-doctors-list-2.jpg"
                                    alt=""
                                />
                            </td>

                            <td className='fw-bold'>
                                Rohan
                            </td>

                            <td>Male</td>
                            <td>Singapoor Layout <br /> Banglore </td>
                            <td>1224531545</td>

                            <td>
                                Dr.Jhon
                            </td>

                            <td>
                                36
                            </td>

                            <td>Last 24 hours ago</td>

                            <td>
                                <div onClick={statusShow} className="Diseases-btn" style={{ color: 'green', border: '1px solid green', cursor: 'pointer' }}>Active</div>
                            </td>

                            <td>
                                <button className="table-details-btn" >
                                    <FontAwesomeIcon icon={faEye} onClick={handleShow} />
                                </button>
                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                            <td >
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/admin-doctors-list-2.jpg"
                                    alt=""
                                />
                            </td>

                            <td className='fw-bold'>
                                Yellapa
                            </td>

                            <td>Male</td>
                            <td>Singapoor Layout <br /> Banglore </td>
                            <td>1224531545</td>

                            <td>
                                Dr.Jhon
                            </td>

                            <td>
                                36
                            </td>

                            <td>Last 7 Days ago</td>

                            <td>
                                <div onClick={statusShow} className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange', cursor: 'pointer' }}>Active</div>
                            </td>

                            <td>
                                <button className="table-details-btn" >
                                    <FontAwesomeIcon icon={faEye} onClick={handleShow} />
                                </button>
                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                            <td >
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/admin-doctors-list-2.jpg"
                                    alt=""
                                />
                            </td>

                            <td className='fw-bold'>
                                Yellapa
                            </td>

                            <td>Male</td>
                            <td>Singapoor Layout <br /> Banglore </td>
                            <td>1224531545</td>

                            <td>
                                Dr.Jhon
                            </td>

                            <td>
                                36
                            </td>

                            <td>Last 7 Days ago</td>

                            <td>
                                <div onClick={statusShow} className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange', cursor: 'pointer' }}>Active</div>
                            </td>

                            <td>
                                <button className="table-details-btn" >
                                    <FontAwesomeIcon icon={faEye} onClick={handleShow} />
                                </button>
                            </td>
                        </tr>


                    </tbody>
                </table>



            </Container>

            {/* View Profile */}

            <Modal size="lg" show={show} onHide={handleClose} >
                <Modal.Header style={{ backgroundColor: 'rgb(32 139 140)', color: 'white' }}>
                    <Modal.Title >Patient Report</Modal.Title>
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


            {/* Status Modal */}

            <Modal
                show={show1}
                onHide={statusClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Change Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label className='fw-bold text-dark' >Status</label>
                    <Form.Select style={{ width: '400px' }} aria-label="Default select example">
                        <option> Select Status </option>
                        <option value="1">Active</option>
                        <option value="2">In active</option>
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={statusClose}>
                        Close
                    </Button>
                    <Button variant="success">Change Status</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
