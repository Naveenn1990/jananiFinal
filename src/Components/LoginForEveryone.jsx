import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Container,
  FloatingLabel,
  Form,
  FormLabel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const LoginForEveryone = () => {
  const navigate = useNavigate();
  const [Doctor, setDoctor] = useState(true);
  const [ReferDoctor, setReferDoctor] = useState(false);
  const [Pharmacy, setPharmacy] = useState(false);
  const [ReferLab, setReferLab] = useState(false);
  const [Staff, setStaff] = useState(false);
  const [Lab, setLab] = useState(false);
  const [Vendor, setVendor] = useState(false);
  const [DEmail, setDEmail] = useState("");
  const [DId, setDId] = useState("");
  const [Dpassword, setDpassword] = useState("");
  const DoctorLogin = async (e) => {
    e.preventDefault();
    // if (!patientfirstname | !patientlastname | !conpassword | !gender | !DOB | !) {
    //   alert("Please Fill All The Field");
    // } else if (password !== conpassword) {
    //   alert("Password and ConfirmPassword should be same");
    // } else {
    try {
      const config = {
        url: "/Doctor/DoctorLogin",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          Email: DEmail,
          DoctorId: DId,
          Password: Dpassword,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        sessionStorage.setItem(
          "DoctorDetails",
          JSON.stringify(res.data.Doctor)
        );
        alert("Login Success");
        window.location.assign("/doctorsdashboard");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [RDEmail, setRDEmail] = useState("");
  const [RDID, setRDID] = useState("");
  const [RDpassword, setRDpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const RDoctorLogin = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/Clinic/ClinicLogin",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          Email: RDEmail,
          ClinicDocId: RDID,
          Password: RDpassword,
        },
      };
      let res = await axios(config);
      console.log("config", config);
      if (res.status === 200) {
        sessionStorage.setItem(
          "RDoctorDetails",
          JSON.stringify(res.data.Clinic)
        );
        alert("Login Success..");
        window.location.assign("/referdoctordashboard");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [SEmail, setSEmail] = useState("");
  const [Spassword, setSpassword] = useState("");

  const StaffLogin = async (e) => {
    e.preventDefault();
    // if (!patientfirstname | !patientlastname | !conpassword | !gender | !DOB | !) {
    //   alert("Please Fill All The Field");
    // } else if (password !== conpassword) {
    //   alert("Password and ConfirmPassword should be same");
    // } else {
    try {
      const config = {
        url: "/staff/StaffLogin",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          email: SEmail,
          password: Spassword,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        sessionStorage.setItem(
          "StaffDetails",
          JSON.stringify(res.data.staffdata)
        );
        alert("Login Success");
        window.location.assign("/staffdashboard");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [RLEmail, setRLEmail] = useState("");
  const [RLID, setRLID] = useState("");
  const [RLpassword, setRLpassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const RLabLogin = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/ClinicLab/ClinicLabLogin",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          Email: RLEmail,
          ClinicLabId: RLID,
          Password: RLpassword,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        sessionStorage.setItem("RLabDetails", JSON.stringify(res.data.Clinic));
        alert("Login Success");
        window.location.assign("/referlabdashboard");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [VendorEmail, setVendorEmail] = useState("");
  const [VendorID, setVendorID] = useState("");

  const [Vendorpassword, setVendorpassword] = useState("");

  const VendorLogin = async (e) => {
    e.preventDefault();
    // if (!patientfirstname | !patientlastname | !conpassword | !gender | !DOB | !) {
    //   alert("Please Fill All The Field");
    // } else if (password !== conpassword) {
    //   alert("Password and ConfirmPassword should be same");
    // } else {
    try {
      const config = {
        url: "/vendor/vendorLogin",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          email: VendorEmail,
          vendorId: VendorID,
          password: Vendorpassword,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        sessionStorage.setItem(
          "VendorDetails",
          JSON.stringify(res.data.Vendor)
        );
        alert("Login Success");
        window.location.assign("/vendordashboard");
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
      <Container>
        <div className="row justify-content-between ">
          <div className="col-lg-4  ">
            <div className="d-flex gap-4 p-5 ms-3">
              <img
                style={{ width: "50px", height: "50px" }}
                src="./img/hospital-plus-logo.png"
                alt=""
              />
              <h1 className="fw-bold " style={{ color: "#208b8c" }}>
                JANANI
              </h1>
            </div>
            <img
              style={{ width: "400px", height: "400px" }}
              src="./img/logo.jpg"
              alt=""
            />
          </div>

          <div className="col-lg-8  pt-5 ">
            <div style={{ float: "right" }}>
              <h6 className="fw-bold">Welcome to Janani</h6>
              {/* <p>Need an account? <a href="#" className='fw-bold'>Sign up</a></p> */}

              <div className="row gap-2 doctor-login-btn mb-4 mt-4">
                <Button
                  onClick={() => {
                    setDoctor(true);
                    setReferDoctor(false);
                    setPharmacy(false);
                    setVendor(false);
                  }}
                  style={{ backgroundColor: "#3f51b5" }}
                  className="col-lg-2 "
                >
                  Doctor
                </Button>

                <Button
                  onClick={() => {
                    setDoctor(false);
                    setReferDoctor(true);
                    setPharmacy(false);
                    setVendor(false);
                  }}
                  style={{ backgroundColor: "#ff4081" }}
                  className="col-lg-2"
                >
                  Refer Doctor
                </Button>

                {/* <Button

                                    onClick={() => {
                                        setDoctor(false);
                                        setReferDoctor(false);
                                        setPharmacy(true);
                                        setVendor(false)
                                    }}

                                    style={{ backgroundColor: '#f44336' }} className="col-lg-2 ">
                                    Pharmacy
                                </Button> */}

                <Button
                  onClick={() => {
                    setDoctor(false);
                    setReferDoctor(false);
                    setPharmacy(false);
                    setReferLab(true);
                    setVendor(false);
                  }}
                  style={{ backgroundColor: "rgb(159 154 14)" }}
                  className="col-lg-2 "
                >
                  Refer Lab
                </Button>             
                <Button
                  onClick={() => {
                    setDoctor(false);
                    setReferDoctor(false);
                    setPharmacy(false);
                    setReferLab(false);
                    setStaff(false);
                    setLab(false);
                    setVendor(true);
                  }}
                  style={{ backgroundColor: "red" }}
                  className="col-lg-2 "
                >
                  Vendor
                </Button>
              </div>

              <p className="fw-bold">Sign in</p>

              {Doctor ? (
                <>
                  <FormLabel>Enter Email Id</FormLabel>
                  <FloatingLabel
                    className="mb-3"
                    style={{ width: "500px" }}
                    controlId="floatingEmail"
                    label="Doctors@gmail.com"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Doctors@gmail.com"
                      onChange={(e) => setDEmail(e.target.value)}
                    />
                  </FloatingLabel>

                  <FormLabel>Enter Doctor Id</FormLabel>
                  <FloatingLabel
                    className="mb-3"
                    style={{ width: "500px" }}
                    controlId="floatingEmail"
                    label="ABC123456"
                  >
                    <Form.Control
                      type="text"
                      placeholder="ABC123456"
                      onChange={(e) => setDId(e.target.value)}
                    />
                  </FloatingLabel>

                  <FormLabel>Enter Password</FormLabel>
                  <FloatingLabel
                    className="mb-3"
                    style={{ width: "500px" }}
                    controlId="floatingPassword"
                    label="Password"
                  >
                    <Form.Control
                      className="doctor-login-password"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setDpassword(e.target.value)}
                    />
                    {/* <FontAwesomeIcon
                      icon={faEye}
                      className="doctor-login-eye"
                    /> */}
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="doctor-login-eye"
                    />
                  </FloatingLabel>

                  <Button
                    style={{
                      width: "30%",
                      fontWeight: "bold",
                      backgroundColor: "#20958c",
                    }}
                    onClick={(e) => DoctorLogin(e)}
                  >
                    LOGIN
                  </Button>
                </>
              ) : (
                <>
                  {ReferDoctor ? (
                    <>
                      <FormLabel>Enter Login Id</FormLabel>
                      <FloatingLabel
                        className="mb-3"
                        style={{ width: "500px" }}
                        controlId="floatingEmail"
                        label="ReferDoctor@Hospital.com"
                      >
                        <Form.Control
                          type="email"
                          placeholder="Login Id"
                          onChange={(e) => setRDEmail(e.target.value)}
                        />
                      </FloatingLabel>

                      <FormLabel>Enter RefDoctor Id</FormLabel>
                      <FloatingLabel
                        className="mb-3"
                        style={{ width: "500px" }}
                        controlId="floatingEmail"
                        label="ReferDoctor@EmployeID"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Employe id"
                          onChange={(e) => setRDID(e.target.value)}
                        />
                      </FloatingLabel>

                      <FormLabel>Enter Password</FormLabel>
                      <FloatingLabel
                        className="mb-3"
                        style={{ width: "500px" }}
                        controlId="floatingPassword"
                        label="Password"
                      >
                        <Form.Control
                          className="doctor-login-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          onChange={(e) => setRDpassword(e.target.value)}
                          value={RDpassword}
                        />
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                          className="doctor-login-eye"
                          onClick={togglePasswordVisibility}
                          style={{ cursor: "pointer" }}
                        />
                      </FloatingLabel>

                      <Button
                        style={{
                          width: "30%",
                          fontWeight: "bold",
                          backgroundColor: "#20958c",
                        }}
                        onClick={(e) => RDoctorLogin(e)}
                      >
                        LOGIN
                      </Button>
                    </>
                  ) : (
                    <>
                      {Pharmacy ? (
                        <>
                          <FormLabel>Enter Login Id</FormLabel>
                          <FloatingLabel
                            className="mb-3"
                            style={{ width: "500px" }}
                            controlId="floatingEmail"
                            label="Pharmacy@Hospital.com"
                          >
                            <Form.Control type="email" placeholder="Login Id" />
                          </FloatingLabel>

                          <FormLabel>Enter Employe Id</FormLabel>
                          <FloatingLabel
                            className="mb-3"
                            style={{ width: "500px" }}
                            controlId="floatingEmail"
                            label="Pharmacy@EmployeID"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Employe id"
                            />
                          </FloatingLabel>

                          <FormLabel>Enter Password</FormLabel>
                          <FloatingLabel
                            className="mb-3"
                            style={{ width: "500px" }}
                            controlId="floatingPassword"
                            label="Password"
                          >
                            <Form.Control
                              className="doctor-login-password"
                              type="password"
                              placeholder="Password"
                            />
                            <FontAwesomeIcon
                              icon={faEye}
                              className="doctor-login-eye"
                            />
                          </FloatingLabel>

                          <Button
                            style={{
                              width: "30%",
                              fontWeight: "bold",
                              backgroundColor: "#20958c",
                            }}
                            onClick={() => navigate("/pharmastoredashboard")}
                          >
                            LOGIN
                          </Button>
                        </>
                      ) : (
                        <>
                          {ReferLab ? (
                            <>
                              <FormLabel>Enter Login Id</FormLabel>
                              <FloatingLabel
                                className="mb-3"
                                style={{ width: "500px" }}
                                controlId="floatingEmail"
                                label="ReferLab@Hospital.com"
                              >
                                <Form.Control
                                  type="email"
                                  placeholder="Login Id"
                                  onChange={(e) => setRLEmail(e.target.value)}
                                />
                              </FloatingLabel>

                              <FormLabel>Enter Employe Id</FormLabel>
                              <FloatingLabel
                                className="mb-3"
                                style={{ width: "500px" }}
                                controlId="floatingEmail"
                                label="ReferLabID@Hospital.com"
                              >
                                <Form.Control
                                  type="text"
                                  placeholder="Employe id"
                                  onChange={(e) => setRLID(e.target.value)}
                                />
                              </FloatingLabel>

                              <FormLabel>Enter Password</FormLabel>
                              <FloatingLabel
                                className="mb-3"
                                style={{ width: "500px" }}
                                controlId="floatingPassword"
                                label="Password"
                              >
                                <Form.Control
                                  className="doctor-login-password"
                                  type={showPassword1 ? "text" : "password"}
                                  placeholder="Password"
                                  onChange={(e) =>
                                    setRLpassword(e.target.value)
                                  }
                                  value={RLpassword}
                                />

                                <FontAwesomeIcon
                                  icon={showPassword1 ? faEyeSlash : faEye}
                                  className="doctor-login-eye"
                                  onClick={togglePasswordVisibility1}
                                  style={{ cursor: 'pointer' }}
                                />
                              </FloatingLabel>

                              <Button
                                style={{
                                  width: "30%",
                                  fontWeight: "bold",
                                  backgroundColor: "#20958c",
                                }}
                                onClick={(e) => RLabLogin(e)}
                              >
                                LOGIN
                              </Button>
                            </>
                          ) : (
                            <>
                              {Staff ? (
                                <>
                                  <FormLabel>Enter Login Id</FormLabel>
                                  <FloatingLabel
                                    className="mb-3"
                                    style={{ width: "500px" }}
                                    controlId="floatingEmail"
                                    label="Staff@Hospital.com"
                                  >
                                    <Form.Control
                                      type="email"
                                      placeholder="Login Id"
                                      onChange={(e) =>
                                        setSEmail(e.target.value)
                                      }
                                    />
                                  </FloatingLabel>

                                  {/* <FormLabel>Enter Employe Id</FormLabel>
                                                                        <FloatingLabel className='mb-3' style={{ width: '500px' }} controlId="floatingEmail" label="Staff@EmployeID">
                                                                            <Form.Control type="text" placeholder="Employe id" />

                                                                        </FloatingLabel> */}

                                  <FormLabel>Enter Password</FormLabel>
                                  <FloatingLabel
                                    className="mb-3"
                                    style={{ width: "500px" }}
                                    controlId="floatingPassword"
                                    label="Password"
                                  >
                                    <Form.Control
                                      className="doctor-login-password"
                                      type="password"
                                      placeholder="Password"
                                      onChange={(e) =>
                                        setSpassword(e.target.value)
                                      }
                                    />
                                    <FontAwesomeIcon
                                      icon={faEye}
                                      className="doctor-login-eye"
                                    />
                                  </FloatingLabel>

                                  <Button
                                    style={{
                                      width: "30%",
                                      fontWeight: "bold",
                                      backgroundColor: "#20958c",
                                    }}
                                    onClick={(e) => StaffLogin(e)}
                                  >
                                    LOGIN
                                  </Button>
                                </>
                              ) : (
                                <>
                                  {Lab ? (
                                    <>
                                      <FormLabel>Enter Login Id</FormLabel>
                                      <FloatingLabel
                                        className="mb-3"
                                        style={{ width: "500px" }}
                                        controlId="floatingEmail"
                                        label="Lab@Hospital.com"
                                      >
                                        <Form.Control
                                          type="email"
                                          placeholder="Login Id"
                                        />
                                      </FloatingLabel>

                                      <FormLabel>Enter Employe Id</FormLabel>
                                      <FloatingLabel
                                        className="mb-3"
                                        style={{ width: "500px" }}
                                        controlId="floatingEmail"
                                        label="Lab@EmployeID"
                                      >
                                        <Form.Control
                                          type="text"
                                          placeholder="Employe id"
                                        />
                                      </FloatingLabel>

                                      <FormLabel>Enter Password</FormLabel>
                                      <FloatingLabel
                                        className="mb-3"
                                        style={{ width: "500px" }}
                                        controlId="floatingPassword"
                                        label="Password"
                                      >
                                        <Form.Control
                                          className="doctor-login-password"
                                          type="password"
                                          placeholder="Password"
                                        />
                                        <FontAwesomeIcon
                                          icon={faEye}
                                          className="doctor-login-eye"
                                        />
                                      </FloatingLabel>

                                      <Button
                                        style={{
                                          width: "30%",
                                          fontWeight: "bold",
                                          backgroundColor: "#20958c",
                                        }}
                                        onClick={() =>
                                          navigate("/labdashboard")
                                        }
                                      >
                                        LOGIN
                                      </Button>
                                    </>
                                  ) : Vendor ? (
                                    <>
                                      <FormLabel>Enter Login Id</FormLabel>
                                      <FloatingLabel
                                        className="mb-3"
                                        style={{ width: "500px" }}
                                        controlId="floatingEmail"
                                        label="Vendor@Hospital.com"
                                      >
                                        <Form.Control
                                          type="email"
                                          placeholder="Login Id"
                                          onChange={(e) =>
                                            setVendorEmail(e.target.value)
                                          }
                                        />
                                      </FloatingLabel>

                                      <FormLabel>Enter Vendor Id</FormLabel>
                                      <FloatingLabel
                                        className="mb-3"
                                        style={{ width: "500px" }}
                                        controlId="floatingEmail"
                                        label="Vendor@EmployeID"
                                      >
                                        <Form.Control
                                          type="text"
                                          placeholder="Employe id"
                                          onChange={(e) =>
                                            setVendorID(e.target.value)
                                          }
                                        />
                                      </FloatingLabel>

                                      <FormLabel>Enter Password</FormLabel>
                                      <FloatingLabel
                                        className="mb-3"
                                        style={{ width: "500px" }}
                                        controlId="floatingPassword"
                                        label="Password"
                                      >
                                        <Form.Control
                                          className="doctor-login-password"
                                          type="password"
                                          placeholder="Password"
                                          onChange={(e) =>
                                            setVendorpassword(e.target.value)
                                          }
                                        />
                                        <FontAwesomeIcon
                                          icon={faEye}
                                          className="doctor-login-eye"
                                        />
                                      </FloatingLabel>

                                      <Button
                                        style={{
                                          width: "30%",
                                          fontWeight: "bold",
                                          backgroundColor: "#20958c",
                                        }}
                                        onClick={(e) => VendorLogin(e)}
                                      >
                                        LOGIN
                                      </Button>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
