import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Label from 'react-bootstrap/FormLabel';
import React from 'react'
import { Button, Container, FloatingLabel, Form, FormLabel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { CkEditorComponent } from '../CkEditor/CkEditorComponent';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export const ReferLabTest = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div>
                <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold'>Lab Test</h4>
                <Container>

                    <Form style={{ marginLeft: "100px" }}   >
                        <h4 className=' fw-bold mb-3 mt-3'>Select Patient</h4>
                        <div className="d-flex gap-4 mb-5">

                            <Form.Select style={{ width: '400px' }} aria-label="Default select example">
                                <option>Patine Name</option>
                                <option value="1">Ganesh</option>
                                <option value="2">Rajesh</option>
                                <option value="3">Kamlesh</option>
                                <option value="4">Ramesh</option>
                                <option value="5">Suresh</option>
                                <option value="6">Dinesh</option>
                            </Form.Select>
                        </div>
                    </Form>
                </Container>
                <hr />

                <Container className=''>

                    <Form style={{ marginLeft: "100px", marginTop: '50px' }}   >


                        <div className="d-flex gap-4 mb-5">


                            <FloatingLabel style={{ width: '400px' }} controlId="floatingEmail" label="First Name">
                                <Form.Control type="text" placeholder="First Name" />
                            </FloatingLabel>


                            <FloatingLabel style={{ width: '400px' }} controlId="floatingName" label="Last Name">
                                <Form.Control type="text" placeholder="Last Name" />
                            </FloatingLabel>

                        </div>

                        <div className="d-flex gap-4 mb-5">

                            {/* <Form.Select style={{ width: '400px' }} aria-label="Default select example">
                                <option>Select gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Other</option>
                            </Form.Select> */}


                            <FloatingLabel style={{ width: '400px' }} controlId="floatingNumber" label="Gender">
                                <Form.Control type="text" placeholder="Gender" />
                            </FloatingLabel>

                            <FloatingLabel style={{ width: '400px' }} controlId="floatingNumber" label="Phone Number">
                                <Form.Control type="number" placeholder="Phone Number" />
                            </FloatingLabel>
                        </div>



                        <div className="d-flex gap-4 mb-5">
                            <FloatingLabel style={{ width: '400px' }} controlId="floatingEmail" label="Email">
                                <Form.Control type="Email" placeholder="Email" />
                            </FloatingLabel>

                            <FloatingLabel style={{ width: '400px' }} controlId="floatingEmail" label="Birth Date">
                                <Form.Control type="date" placeholder="Birth Date" />
                            </FloatingLabel>

                        </div>


                        <div className="d-flex gap-4 mb-5">
                            <FloatingLabel style={{ width: '400px' }} controlId="floatingAge" label="Age">
                                <Form.Control type="number" placeholder="Age" />
                            </FloatingLabel>


                            <FloatingLabel style={{ width: '400px' }} controlId="floatingAge" label="Blood Group">
                                <Form.Control type="text" placeholder="Blood Group" />
                            </FloatingLabel>



                            {/* <Form.Select style={{ width: '400px' }} aria-label="Default select example">
                                <option>Blood Group</option>
                                <option value="1">A+</option>
                                <option value="2">A-</option>
                                <option value="3">B+</option>
                                <option value="3">B-</option>
                                <option value="3">AB+</option>
                                <option value="3">AB-</option>
                                <option value="3">O+</option>
                                <option value="3">O-</option>
                            </Form.Select> */}

                            {/* <FloatingLabel style={{ width: '400px' }} controlId="floatingEmail" label="Blood Presure">
                                <Form.Control type="text" placeholder="Blood Presure" />
                            </FloatingLabel> */}

                        </div>

                        {/* <div className="d-flex gap-4 mb-5">

                            <Form.Select style={{ width: '400px' }} aria-label="Default select example">
                                <option>Marital Status </option>
                                <option value="1">Single</option>
                                <option value="2">Married</option>
                            </Form.Select>

                            <Form.Select style={{ width: '400px' }} aria-label="Default select example">
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


                        </div> */}
                        {/* 
                        <div className='mb-5' >
                            <FloatingLabel style={{ width: '400px' }} controlId="floatingEmail" label="Sugar Level">
                                <Form.Control type="text" placeholder="Sugar Level" />
                            </FloatingLabel>
                        </div>

                        <div className='mb-5' >
                            <label >Comments</label>
                            <textarea class="form-control" placeholder="Address" id="floatingTextarea2" style={{ width: '820px', height: "100px" }}></textarea>
                        </div> */}

                        {/* <h6 className='fw-bold'>Appointment Details</h6> */}

                        <div className="d-flex gap-4 mb-5">

                            <Form.Select style={{ width: '400px' }} aria-label="Default select example">
                                <option>Test Category</option>
                                <option value="1" onClick={handleShow}>HbA1c</option>
                                <option value="2">TSH</option>
                                <option value="3">KFT</option>
                                <option value="4">Dengue Antiligen NS1 iGg&igM</option>
                                <option value="5">Urine R/M Measure</option>
                                <option value="6">Lipid Profile</option>
                                <option value="7">Full Body Test</option>
                                <option value="7">Other</option>
                            </Form.Select>


                            <Form.Select style={{ width: '400px' }} aria-label="Default select example">
                                <option>Test Type</option>
                                <option value="1">HbA1c</option>
                                <option value="2">TSH</option>
                                <option value="3">KFT</option>
                                <option value="4">Dengue Antiligen NS1 iGg&igM</option>
                                <option value="5">Urine R/M Measure</option>
                                <option value="6">Lipid Profile</option>
                                <option value="7">Full Body Test</option>
                                <option value="7">Other</option>
                            </Form.Select>
                        </div>

                        <table class="table table-striped table-bordered mb-5" style={{ width: '500px', border:'#837e7e' }}>
                            <thead >
                                <tr >
                                    <th className='text-dark fw-bold'>#</th>
                                    <th className='text-dark fw-bold'>Sub Test</th>
                                    {/* <th className='text-dark fw-bold'>Test Price</th> */}
                                    <th className='text-dark fw-bold'>Select</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        1
                                    </td>
                                    <td>HbA1c</td>

                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        2
                                    </td>
                                    <td>TSH</td>

                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        3
                                    </td>
                                    <td>JHSd</td>

                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        4
                                    </td>
                                    <td>KFT</td>

                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        5
                                    </td>
                                    <td>Diagnostic antigen</td>

                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        6
                                    </td>
                                    <td>Urine R/M Measure</td>

                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        7
                                    </td>
                                    <td>Lipid profile</td>

                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        8
                                    </td>
                                    <td>CZD HZS</td>

                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <FormLabel className='fw-bold text-dark'> Choose Prescription (if any)* </FormLabel> <br />
                        <input type="file" className=' p-2 mb-5' style={{ border: '1px solid grey', width: '820px', height: '50px' }} />

                        <CkEditorComponent />

                        <div className='d-flex gap-3 mb-4 mt-4'>

                            <Button style={{ width: "15%", height: '40px', fontSize: '16px', backgroundColor: 'rgb(32 139 140)' }} onClick={() => { navigate('#') }}>Submit</Button>
                            <Button style={{ width: "10%", height: '40px', fontSize: '16px', backgroundColor: '#FE2E2E' }} onClick={() => { navigate('#') }}>Cancel</Button>

                        </div>

                    </Form>
                </Container>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Select Test Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <table class="table table-striped m" style={{ width: '500px' }}>
                        <thead >
                            <tr >
                                <th className='text-dark fw-bold'>#</th>
                                <th className='text-dark fw-bold'>Test Name</th>
                                {/* <th className='text-dark fw-bold'>Test Price</th> */}
                                <th className='text-dark fw-bold'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>HbA1c</td>

                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    2
                                </td>
                                <td>TSH</td>

                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    3
                                </td>
                                <td>JHSd</td>

                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    4
                                </td>
                                <td>KFT</td>

                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    5
                                </td>
                                <td>Diagnostic antigen</td>

                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    6
                                </td>
                                <td>Urine R/M Measure</td>

                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    7
                                </td>
                                <td>Lipid profile</td>

                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    8
                                </td>
                                <td>CZD HZS</td>

                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Done</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

