import React, { useState } from 'react';
import { FormLabel, Form, FloatingLabel, Button, Container, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const RegisterDiagnostic = () => {

    const navigate = useNavigate()


    return (
        <div>
            <Container className='mt-4'>
                <div className="row login-pharmacy align-items-center" style={{ minHeight: '600px' }} >
                    <div className="col-lg-6 d-flex justify-content-center ">
                        <div >
                            <p className='fw-bold text-center mt-2' style={{ color: '#208b8c' }}>WELCOME TO </p>
                            <div className="d-flex gap-2 justify-content-center align-items-center">
                                <img style={{ width: '50px', height: '50px' }} src="./img/hospital-plus-logo.png" alt="" />
                                <h1 className='fw-bold login-pharmacy-head' style={{ color: '#208b8c' }}>JANANI DIAGNOSTIC</h1>
                            </div>
                            {/* <h1 className='fw-bold text-center' style={{ color: '#208b8c' }}></h1> */}
                            <img className='login-pharmacy-img' style={{ width: '400px', height: '350px' }} src="./img/logo.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5">

                        <h4><span style={{ color: '#208b8c', }}>REGISTER</span> HERE!</h4>
                        <div className='mb-3'>

                            <FloatingLabel className='mb-3' style={{ width: '100%' }} controlId="floatingName" label="Name">
                                <Form.Control type="text" placeholder="Name" />
                            </FloatingLabel>

                            <FloatingLabel className='mb-3' style={{ width: '100%' }} controlId="floatingMobile" label="Mobile">
                                <Form.Control type="number" placeholder="Mobile" />
                            </FloatingLabel>

                            <FloatingLabel className='mb-3' style={{ width: '100%' }} controlId="floatingEmail" label="Email">
                                <Form.Control type="email" placeholder="Email" />
                            </FloatingLabel>

                            <FloatingLabel className='mb-3' style={{ width: '100%' }} controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>

                            <FloatingLabel className='mb-3' style={{ width: '100%' }} controlId="floatingPassword" label="Confirm Password">
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </FloatingLabel>

                            <Button className='all-bg-green w-100'>Register</Button>
                        </div>
                        <div>
                            <p className='mb-2 text-center'>Already have a account ?
                                <span style={{ color: '#208b8c', cursor: 'pointer' }} onClick={() => navigate('/logindiagnostic')}>Login!</span>
                            </p>                    
                        </div>
                    </div>
                </div>
            </Container>




        </div>
    )
}