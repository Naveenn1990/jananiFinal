import React, { useState } from 'react';
import { FormLabel, Form, FloatingLabel, Button, Container, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const LoginDiagnostic = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Container className='mt-4'>
                <div className="row login-pharmacy align-items-center" style={{minHeight:'500px'}} >
                    <div className="col-lg-6 d-flex justify-content-center ">
                        <div >
                            <p className='fw-bold text-center mt-2' style={{ color: '#208b8c' }}>WELCOME TO </p>
                            <div className="d-flex gap-2 justify-content-center align-items-center">
                                <img style={{ width: '50px', height: '50px' }} src="./img/hospital-plus-logo.png" alt="" />
                                <h1 className='fw-bold login-pharmacy-head ' style={{ color: '#208b8c' }}>JANANI DIAGNOSTIC</h1>
                            </div>
                            {/* <h1 className='fw-bold text-center' style={{ color: '#208b8c' }}></h1> */}
                            <img className='login-pharmacy-img' style={{ width: '400px', height: '350px' }} src="./img/logo.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5">

                        <h4><span style={{ color: '#208b8c', }}>LOGIN</span> HERE!</h4>
                        <div className='mb-3'>
                            <FormLabel>Email*</FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '100%' }} controlId="floatingEmail" label="Email">
                                <Form.Control type="email" placeholder="Email" />
                            </FloatingLabel>

                            <FormLabel>Password*</FormLabel>
                            <FloatingLabel className='mb-3' style={{ width: '100%' }} controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>

                            <Button className='all-bg-green w-100'>Login</Button>
                        </div>
                        <div>
                            <p className='mb-2 text-center'>Forgot Your Password ?
                                <span style={{ color: '#208b8c', cursor: 'pointer' }} onClick={handleShow}>Click Here!</span>
                            </p>
                           <hr />
                            <p className='mt-2 text-center mb-2'>You Don't have account ? 
                            <span style={{ color: '#208b8c', cursor: 'pointer' }} onClick={()=> navigate('/registerdiagnostic')}>Register Here!</span></p>
                        </div>
                    </div>
                </div>
            </Container>


            {/* Forgot Modal */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className="d-flex gap-2 justify-content-center">
                            <img style={{ width: '30px', height: '30px' }} src="./img/hospital-plus-logo.png" alt="" />
                            <h6 className='fw-bold mt-1' style={{ color: '#208b8c' }}>JANANI DIAGNOSTIC</h6>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='mb-2'><span style={{ color: '#208b8c', cursor: 'pointer' }}>RESET YOUR ACCOUNT</span> HERE!</p>
                    <FormLabel className='fw-bold text-dark'>Enter Your Email</FormLabel>
                    <FloatingLabel className='mb-3' style={{ width: '100%' }} controlId="floatingEmail" label="Email">
                        <Form.Control type="email" placeholder="Email" />
                    </FloatingLabel>

                    <Button className='all-bg-green w-100'>SEND</Button>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>

        </div>
    )
}