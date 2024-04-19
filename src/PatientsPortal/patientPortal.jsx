import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { Container, Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

export const PatientPortal = () => {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const navigate = useNavigate()

    const [Number, setNumber] = useState("");
    const [password, setpassword] = useState("");

    const Login = async (e) => {
        e.preventDefault();
        // if (!patientfirstname | !patientlastname | !conpassword | !gender | !DOB | !) {
        //   alert("Please Fill All The Field");
        // } else if (password !== conpassword) {
        //   alert("Password and ConfirmPassword should be same");
        // } else {
        try {

            const config = {
                url: "/user/PatientLogin",
                method: "post",
                baseURL: "http://localhost:8521/api",
                headers: { "content-type": "application/json" },
                data: {
                    mobile: Number,
                    password: password,

                },
            };
            let res = await axios(config);
            if (res.status === 200) {
                console.log(res.data);
                console.log(res.data.success);
                sessionStorage.setItem("PatientUser", JSON.stringify(res.data.admin));
                alert("Login Success");
                window.location.assign("/patientdashboard");
            }

        } catch (error) {
            console.log(error.response);
            if (error.response) {


                alert(error.response.data.error);
            }

        }
    };

    return (
        <div>
            <Container fluid>
                <div className='d-flex justify-content-between mb-4 patient-login-bg' style={{ backgroundImage: "url(./img/patient-portal-img-1.jpg)", height: "auto", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                    <img className='img-fluid patient-portal-img' src="./img/patient-portal-img-2.jpg" alt="" />
                    <img className='logo img-fluid patient-portal-logo' src="./img/logo.png" alt="Logo" style={{ width: '100px', height: '100px', marginRight: '15px' }} />
                </div>
                <div className='text-center  mb-4'>
                    <h2 >Welcome to Patient Portal, Your Medical Home on the Web</h2>
                    <h6 >With Patient Portal, you can connect with your doctor through a convenient, safe and secure environment.</h6>
                </div>

                <div className="p-3 m-auto mb-5 patient-login" style={{ backgroundColor: "#fff", width: "400px", height: "450px", boxShadow: "0px 8px 32px 0px rgba(19, 19, 20, 0.37)" }}>

                    <h3 className='mb-4 text-center' style={{ color: '#208b8c', fontFamily: 'Bricolage_Grotesque variant0' }}>Login to Patient Portal</h3>

                    <div className='mb-3'>
                        <div class="label">
                            <label for="ctl00_ContentPlaceHolder1_Login2_txtUserName" id="ctl00_ContentPlaceHolder1_Login2_lblUserName">Mobile Number</label>
                        </div>

                        <div>

                            <input className='ps-2' style={{ width: "100%", height: '40px' }} type="text" autocomplete="off" aria-required="true" placeholder="Mobile Number"
                                onChange={(e) => setNumber(e.target.value)} />
                        </div>
                    </div>


                    <div className='mb-3'>
                        <div class="label">
                            <label>Password</label>
                        </div>

                        <div className='patient-login-input'>
                            <input className='ps-2 ' style={{ width: "100%", height: '40px' }} type="password" aria-required="true" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                            <FontAwesomeIcon icon={faEye} className='password-eye' />
                        </div>

                        <div>
                            <div>
                                <p onClick={handleShow} style={{ color: '#208b8c', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' }}>Forgot password?</p>
                            </div>

                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <Button onClick={(e) => Login(e)} className='fw-bold mb-4 ' style={{ width: "70%", height: '40px', fontSize: '16px', backgroundColor: '#208b8c' }} type="submit"> LOGIN</Button>
                    </div>

                    <div className='text-center'>
                        <p> --------------  I am new here --------------</p>
                        <a className='text-decoration-none' href="/createaccount">CREATE ACCOUNT</a>
                    </div>
                </div>

                <p className='text-center mb-3'>Your security is important. We use technology to encrypt, safeguard, and secure your personal information. Please view our
                    <span style={{ color: '#208b8c', cursor: 'pointer' }} onClick={() => alert('Lorem ipusum aisjhduashf jajwdas jasnfjasf asjfeaf ajsfnsjanf asjfkasnfja jeancjanecencac')}> Privacy Policy</span> for more information
                </p>
            </Container>

            {/* Email Model */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className='login mb-4'>
                        <h4 style={{ color: '#208b8c' }}>Forgot Password</h4>
                        <p className='text-secondary'>Enter Your Email</p>
                    </div>

                    <InputGroup className='mb-4'>
                        <Form.Control
                            className='login-input'
                            type='email'
                            placeholder="Email Id"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <div className='mb-4'>
                        <Button onClick={handleShow1} style={{ width: '100%', backgroundColor: '#208b8c' }}>
                            Send Mail
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Verify Model */}
            <Modal show={show1} onHide={handleClose1}>
                <Modal.Body>
                    <form class="form_0">
                        <p class="heading_0">Verify OTP</p>
                        <div>
                            <input class="input_0" type="password" maxlength="1" />
                            <input class="input_0" type="password" maxlength="1" />
                            <input class="input_0" type="password" maxlength="1" />
                            <input class="input_0" type="password" maxlength="1" />
                            <input class="input_0" type="password" maxlength="1" />
                            <input class="input_0" type="password" maxlength="1" />
                        </div>
                    </form>
                    <div className='mb-4'>
                        <Button onClick={handleShow2} style={{ width: '100%', backgroundColor: '#208b8c' }}>
                            Verify
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* New Password Model */}
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className='login mb-4'>
                        <h4 style={{ color: '#208b8c' }}>Enter New Password</h4>
                        <p className='text-secondary'>Enter Your Password</p>
                    </div>

                    <InputGroup className='mb-4'>
                        <Form.Control
                            className='login-input'
                            type='password'
                            placeholder="New Password"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className='mb-4'>
                        <Form.Control
                            className='login-input'
                            type='password'
                            placeholder=" Confirm New Password"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <div className='mb-4'>
                        <Button onClick={handleShow1} style={{ width: '100%', backgroundColor: '#208b8c' }}>
                            Submit
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}
