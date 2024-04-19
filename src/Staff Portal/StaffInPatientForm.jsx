import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const StaffInPatientForm = () => {
    return (
        <div>

            <h4 className='p-4 mb-4 fw-bold text-center' style={{ backgroundColor: '#dae1f3' }} > In Patinet Admission</h4>

            <Container>

                <div className="row">
                    <div className="col-lg-3">
                        <InputGroup className="mb-3 ">
                            <InputGroup.Text id="basic-addon1" style={{ borderColor: '#0000006e', color: '#000', fontWeight: 'bold' }}>Date</InputGroup.Text>
                            <Form.Control
                                type='Date'
                                placeholder="Date"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className="col-lg-3">
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" style={{ borderColor: '#0000006e', color: '#000', fontWeight: 'bold' }}>Card No</InputGroup.Text>
                            <Form.Control
                                type='number'
                                placeholder="Number"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className="col-lg-3">
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" style={{ borderColor: '#0000006e', color: '#000', fontWeight: 'bold' }}>Bed Type</InputGroup.Text>
                            <Form.Control
                                type='text'
                                placeholder="Number"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className="col-lg-3">
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" style={{ borderColor: '#0000006e', color: '#000', fontWeight: 'bold' }}>Bed Number</InputGroup.Text>
                            <Form.Control
                                type='number'
                                placeholder="Number"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                </div>


                <h4 className='text-center fw-bold  text-light p-3 mb-4' style={{ backgroundColor: 'rgb(27 12 64)' }}>Patient Information</h4>


                <div className='row align-items-center '>
                    <div className='d-flex align-items-center col-lg-6 m-auto mb-3'>
                        <p className='input-heading'>Patient Type</p>
                        <Form.Select aria-label="Default select example" className='select-width' >
                            <option value="1">Old</option>
                            <option value="2">New</option>
                        </Form.Select>
                        <Form.Control
                            type='text'
                            placeholder=""
                            className='input-width'
                            aria-describedby="basic-addon1"
                        />

                    </div>

                    <div className='d-flex align-items-center col-lg-6 mb-3'>
                        <p className='input-heading'>Patient ID</p>
                        <Form.Control
                            type='number'
                            placeholder=""
                            className='input-width'
                            aria-describedby="basic-addon1"
                        />

                    </div>
                </div>


                <div className='row align-items-center '>
                    <div className='d-flex align-items-center col-lg-6 m-auto mb-3'>
                        <p className='input-heading'>Patient Name</p>
                        <Form.Select aria-label="Default select example" className='select-width' >
                            <option value="1">Mr.</option>
                            <option value="2">Ms.</option>
                        </Form.Select>
                        <Form.Control
                            type='text'
                            placeholder=""
                            className='input-width'
                            aria-describedby="basic-addon1"
                        />

                    </div>

                    <div className='d-flex align-items-center col-lg-6 mb-3'>
                        <p className='input-heading'>City</p>
                        <Form.Control
                            type='text'
                            placeholder=""
                            className='input-width'
                            aria-describedby="basic-addon1"
                        />

                    </div>

                </div>


                <div className='row align-items-center '>
                    <div className='d-flex align-items-center col-lg-6 m-auto mb-3'>
                        <p className='input-heading'>Guardian Name</p>
                        <Form.Select aria-label="Default select example" className='select-width' >
                            <option value="1">S/o.</option>
                            <option value="2">D/o.</option>
                            <option value="2">W/o.</option>
                        </Form.Select>

                        <Form.Control
                            type='text'
                            placeholder=""
                            className='input-width'
                            aria-describedby="basic-addon1"
                        />

                    </div>

                    <div className='d-flex align-items-center col-lg-6 mb-3 '>
                        <p className='input-heading'>Age</p>
                        <Form.Control
                            type='numebr'
                            placeholder=""
                            style={{ minWidth: '150px', borderRadius: 'none ', padding: '6px' }}
                            aria-describedby="basic-addon1"
                        />
                        <Form.Control
                            type='text'
                            placeholder="Year"
                            style={{ minWidth: '150px', borderRadius: 'none ', padding: '6px' }}
                            aria-describedby="basic-addon1"
                        />

                    </div>
                </div>

                <div className='row align-items-center '>
                    <div className='d-flex align-items-center col-lg-6 m-auto mb-3'>
                        <p className='input-heading'>Email</p>

                        <Form.Control
                            type='email'
                            placeholder=""
                            className='input-width'
                            aria-describedby="basic-addon1"
                        />

                    </div>

                    <div className='d-flex align-items-center col-lg-6 mb-3'>
                        <p className='input-heading'>D O B</p>
                        <Form.Control
                            type='Date'
                            placeholder=""
                            className='input-width'
                            aria-describedby="basic-addon1"
                        />

                    </div>
                </div>


                <div className='row align-items-center '>
                    <div className='d-flex align-items-center col-lg-6 m-auto mb-3'>
                        <p className='input-heading'>Mobile Number</p>

                        <Form.Control
                            type='number'
                            placeholder=""
                            className='input-width'
                            aria-describedby="basic-addon1"
                        />

                    </div>

                    <div className='d-flex align-items-center col-lg-6 mb-3'>
                        <p className='input-heading'>Blood Group</p>
                        <Form.Select aria-label="Default select example" className='select-width' >
                            <option value="1">A+</option>
                            <option value="2">A-</option>
                            <option value="3">B+</option>
                            <option value="4">B-</option>
                            <option value="5">AB+</option>
                            <option value="6">AB-</option>
                            <option value="7">O-</option>
                            <option value="8">O+</option>
                        </Form.Select>

                    </div>
                </div>


                <div className='row align-items-center'>
                    <div className='d-flex align-items-center col-lg-6 m-auto mb-3'>
                        <p className='input-heading'>Gender</p>
                        <Form.Select aria-label="Default select example" className='select-width' >
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Other</option>
                        </Form.Select>


                    </div>

                    <div className='d-flex align-items-center col-lg-6 mb-3'>
                        <p className='input-heading'>Marital Status</p>
                        <Form.Select aria-label="Default select example" className='select-width' >
                            <option value="1">Married</option>
                            <option value="2">Single</option>
                            <option value="3">Divorce</option>
                        </Form.Select>

                    </div>
                </div>

                <div className='row align-items-center '>
                    <div className='d-flex align-items-center col-lg-6 m-auto mb-3'>
                        <p className='input-heading'>Ref.By</p>

                        <Form.Control
                            type='text'
                            placeholder="Enter Doctor Name"
                            className='input-width'
                            aria-describedby="basic-addon1"
                        />

                    </div>

                    <div className='d-flex align-items-center col-lg-6 mb-3'>
                        <Form.Control
                            type='number'
                            placeholder="Mobile Number"
                            style={{ minWidth: '150px', borderRadius: 'none ', padding: '6px' }}
                            aria-describedby="basic-addon1"
                        />

                        <Form.Control
                            type='text'
                            placeholder="Designation "
                            style={{ minWidth: '150px', borderRadius: 'none ', padding: '6px' }}
                            aria-describedby="basic-addon1"
                        />

                    </div>
                </div>

                <div className='row align-items-center '>
                    <div className='d-flex align-items-center col-lg-6 mb-3'>
                        <p className='input-heading'>Department</p>
                        <Form.Select aria-label="Default select example" className='select-width' >
                            <option>Select Department</option>
                            <option value="1">Cardiology</option>
                            <option value="2">Dental</option>
                            <option value="3">Neurologist</option>
                            <option value="4">Pediatric</option>
                            <option value="5">Urology</option>
                            <option value="6">Traumtology</option>
                            <option value="7">X-ray</option>
                            <option value="8">Other</option>
                        </Form.Select>

                    </div>

                    <div className='d-flex align-items-center col-lg-6 mb-3'>
                        <p className='input-heading'>Doctors</p>
                        <Form.Select aria-label="Default select example" className='select-width' >
                            <option>Select Doctors</option>
                            <option value="1">Dr.Ganesh Kalal</option>
                            <option value="2">Dr.Jhon Smith</option>
                            <option value="3">Dr.Shruuuti</option>
                            <option value="4">Dr.Ganesh Kalal</option>
                            <option value="5">Dr.Ganesh Kalal</option>
                            <option value="6">Dr.Ganesh Kalal</option>
                            <option value="7">Dr.Ganesh Kalal</option>
                            <option value="8">Dr.Ganesh Kalal</option>
                        </Form.Select>

                    </div>
                </div>

                <div className='row align-items-center mb-3'>
                    <div className='d-flex align-items-center col-lg-6 m-auto mb-3'>
                        <p className='input-heading'>Cause</p>

                        <Form.Control
                            type='text'
                            placeholder=""
                            className='input-width'
                            aria-describedby="basic-addon1"
                        />

                    </div>

                    <div className='d-flex align-items-center col-lg-6 mb-3'>
                        <p className='input-heading'>Condition</p>
                        <Form.Select aria-label="Default select example" className='select-width' >
                            <option value="1">Emergency</option>
                            <option value="2">Normal</option>
                        </Form.Select>

                    </div>



                </div>


                {/* <div className='row align-items-center '>

                    <div className='d-flex align-items-center col-lg-6 mb-3'>
                        <p className='input-heading'>Payment Mode</p>
                        <Form.Select aria-label="Default select example" className='select-width' >
                            <option value="1">Cash</option>
                            <option value="2">Upi</option>
                            <option value="3">Phone Pay</option>
                            <option value="4">Google Pay</option>
                        </Form.Select>

                    </div>

                    <div className='d-flex align-items-center col-lg-6 m-auto mb-3'>
                        <p className='input-heading'>Remarks</p>

                        <Form.Control
                            type='text'
                            placeholder=""
                            className='input-width'
                            aria-describedby="basic-addon1"
                        />

                    </div>
                </div> */}


                <div className='row align-items-center mb-3'>

                    <div className=' col-lg-4 mb-3 d-flex '>
                        <Button className=' m-auto' style={{ backgroundColor: 'green', width: '200px' }}>SAVE</Button>

                    </div>

                    <div className=' col-lg-4  mb-3 d-flex'>
                        <Button className=' m-auto' style={{ backgroundColor: 'orange', width: '200px' }}>Print</Button>


                    </div>
                    <div className=' col-lg-4 mb-3 d-flex'>

                        <Button className=' m-auto' style={{ backgroundColor: 'blue', width: '200px' }}>Update</Button>

                    </div>
                </div>



            </Container>

        </div>
    )
}
