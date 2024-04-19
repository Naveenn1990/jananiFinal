import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Label from 'react-bootstrap/FormLabel';
import { useNavigate } from 'react-router-dom';


export const PatientSettings = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-3 mt-2 '>Settings</h4>
            <Container >
                <div className="d-flex justify-content-center">
                    <div>
                        <Form  >

                            <h4 className=' fw-bold mb-4'>Security Settings</h4>

                            <FloatingLabel className='mb-3 width-respns width-respns-768px' style={{ width: '600px' }} controlId="floatingEmail" label="Username">
                                <Form.Control type="text" placeholder="Username" />
                            </FloatingLabel>


                            <FloatingLabel className='mb-3 width-respns width-respns-768px' style={{ width: '600px' }} controlId="floatingPassword" label="Password">
                                <Form.Control className='create-account-password-1' type="password" placeholder="Password" />
                                <FontAwesomeIcon icon={faEye} className='password-eye-1' />
                            </FloatingLabel>


                            <FloatingLabel className='mb-3 width-respns width-respns-768px' style={{ width: '600px' }} controlId="floatingPassword" label="Confirm Password">
                                <Form.Control className='create-account-password-2' type="password" placeholder="Confirm Password" />
                                <FontAwesomeIcon icon={faEye} className='password-eye-2' />
                            </FloatingLabel>

                            <div>
                                <Button className=' mb-4' style={{ width: "auto", height: '40px', fontSize: '16px', backgroundColor:'#208b8c' }} onClick={() => { navigate('#') }}>Save</Button>
                            </div>

                        </Form>


                        <Form style={{ marginTop: '50px' }}   >

                            <h4 className=' mb-4 fw-bold'>Account Settings</h4>

                            <div className='d-flex justify-content-between mb-3 flex-1'>
                                <FloatingLabel
                                    style={{ width: '290px' }}
                                    controlId="floatingInput"
                                    label="First name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="First Name" />
                                </FloatingLabel>

                                <FloatingLabel style={{ width: '290px' }} controlId="floatingName" label="Last name">
                                    <Form.Control type="text" placeholder="Last Name" />
                                </FloatingLabel>
                            </div>


                            <FloatingLabel className='mb-3 width-respns width-respns-768px' style={{ width: '600px' }} controlId="floatingEmail" label="Email">
                                <Form.Control type="Email" placeholder="Email" />
                            </FloatingLabel>



                            <div className='d-flex justify-content-between mb-3 flex-1'>

                                <FloatingLabel style={{ width: '290px' , marginBottom:'12px'}} controlId="floatingCity" label="City">
                                    <Form.Control type="text" placeholder="City" />
                                </FloatingLabel>


                                <FloatingLabel style={{ width: '290px' }} controlId="floatingState" label="State/Province">
                                    <Form.Control type="text" placeholder="State/Province" />
                                </FloatingLabel>

                            </div>


                            <div className='d-flex justify-content-between mb-3 flex-1'>

                                <FloatingLabel style={{ width: '290px' , marginBottom:'12px' }} controlId="floatingDate" label="Birth Date">
                                    <Form.Control type="date" placeholder="Birth Date" />
                                </FloatingLabel>


                                <FloatingLabel style={{ width: '290px' }} controlId="floatingMobile" label="Mobile">
                                    <Form.Control type="number" placeholder="Mobile" />
                                </FloatingLabel>

                            </div>

                            <Form.Select className='mb-3 width-respns width-respns-768px' style={{ width: '600px' }} aria-label="Default select example">
                                <option>Blood Group</option>
                                <option value="1">A-</option>
                                <option value="2">A+</option>
                                <option value="3">B-</option>
                                <option value="4">B+</option>
                                <option value="5">AB-</option>
                                <option value="6">AB+</option>
                                <option value="6">O-</option>
                                <option value="6">O+</option>
                            </Form.Select>

                            <FloatingLabel className='mb-3 width-respns width-respns-768px' style={{ width: '600px' }} controlId="floatingStreetAddress" label="Street Address">
                                <Form.Control type="text" placeholder="Street Address" />
                            </FloatingLabel>

                            <div>
                                <Button className=' mb-4' style={{ width: "auto", height: '40px', fontSize: '16px', backgroundColor:'#208b8c' }} onClick={() => { navigate('#') }}>Save Changes</Button>
                            </div>

                        </Form>

                    </div>
                </div>
            </Container>



        </div>
    )
}
