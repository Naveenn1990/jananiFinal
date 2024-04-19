import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Label from 'react-bootstrap/FormLabel';
import React from 'react'
import { Button, Container, FloatingLabel, Form, FormLabel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { CkEditorComponent } from '../CkEditor/CkEditorComponent';

export const ReferLabAddPatient = () => {

    const navigate = useNavigate()

    return (
        <div>
            <div>
                <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold'>Add Patient</h4>
                <Container className=''>

                    <Form style={{ marginLeft: "100px", marginTop: '50px' }}   >

                        <h4 className=' fw-bold mb-3'>Patient Information</h4>

                        <div className="d-flex gap-4 mb-5">


                            <FloatingLabel style={{ width: '400px' }} controlId="floatingEmail" label="First Name">
                                <Form.Control type="text" placeholder="First Name" />
                            </FloatingLabel>


                            <FloatingLabel style={{ width: '400px' }} controlId="floatingName" label="Last Name">
                                <Form.Control type="text" placeholder="Last Name" />
                            </FloatingLabel>

                        </div>

                        <div className="d-flex gap-4 mb-5">

                            <Form.Select style={{ width: '400px' }} aria-label="Default select example">
                                <option>Select gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Other</option>
                            </Form.Select>

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

                            <FloatingLabel style={{ width: '400px' }} controlId="floatingEmail" label="Blood Presure">
                                <Form.Control type="text" placeholder="Blood Presure" />
                            </FloatingLabel>

                        </div>

                        <div className="d-flex gap-4 mb-5">

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


                        </div>

                        <div className='mb-5' >
                            <FloatingLabel style={{ width: '400px' }} controlId="floatingEmail" label="Sugar Level">
                                <Form.Control type="text" placeholder="Sugar Level" />
                            </FloatingLabel>
                        </div>

                        <div className='mb-5' >
                            {/* <label >Comments</label> */}
                            <textarea class="form-control" placeholder="Address" id="floatingTextarea2" style={{ width: '820px', height: "100px" }}></textarea>
                        </div>

                        {/* <h6 className='fw-bold'>Appointment Details</h6> */}

                        <div className="d-flex gap-4 mb-5">

                            <Form.Select style={{ width: '400px' }} aria-label="Default select example">
                                <option>Refer Doctor</option>
                                <option value="1">Dr.Rajesh</option>
                                <option value="2">Dr.Sarah Smith</option>
                                <option value="3">Dr.Jay Soni</option>
                                <option value="3">Dr.Pooja Patel</option>
                                <option value="3">Others</option>
                            </Form.Select>


                            <FloatingLabel style={{ width: '400px' }} controlId="floatingDate" label="Date of Appointment">

                                <Form.Control type="date" placeholder="Date of Appointment" />
                            </FloatingLabel>
                        </div>

                        {/* <h6>Time of Appointment</h6>
                        <Form.Select style={{ width: '400px', marginBottom: '50px' }} aria-label="Default select example">
                            <option>Time</option>
                            <option value="1">10:30 - 11:00</option>
                            <option value="2">11:00 - 11:30</option>
                            <option value="3">11:30 - 12:00</option>
                            <option value="3">12:00 - 12:30</option>
                            <option value="3">12:30 - 01:00</option>
                            <option value="3">03:30 - 4:00</option>
                            <option value="3">04:00 - 4:30</option>
                            <option value="3">04:30 - 5:00</option>
                        </Form.Select> */}

                        <FloatingLabel className='mb-5' label="Injury/Contion">
                            <Form.Control style={{ width: '820px', height: '100px' }} type="text" placeholder="Injury/Contion" />
                        </FloatingLabel>

                        {/* <FloatingLabel className='mb-5' label="Note">
                            <Form.Control style={{ width: '820px', height: '100px' }} type="text" placeholder="Note" />
                        </FloatingLabel> */}
                        <FormLabel className='fw-bold text-dark'> Choose Old Prescription* </FormLabel> <br />
                        <input type="file" className=' p-2 mb-5' style={{ border: '1px solid grey', width: '820px', height: '50px' }} />

                        <CkEditorComponent />

                        <div className='d-flex gap-3 mb-4 mt-4'>
                           
                         <Button  style={{ width: "15%", height: '40px', fontSize: '16px', backgroundColor: 'rgb(32 139 140)' }} onClick={() => { navigate('#') }}>Submit</Button>
                         <Button  style={{ width: "10%", height: '40px', fontSize: '16px', backgroundColor: '#FE2E2E' }} onClick={() => { navigate('#') }}>Cancel</Button>
                        
                        </div>

                    </Form>
                </Container>
            </div>


        </div>
    )
}
