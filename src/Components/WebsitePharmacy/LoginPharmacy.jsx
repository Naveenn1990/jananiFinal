import React, { useState } from "react";
import {
  FormLabel,
  Form,
  FloatingLabel,
  Button,
  Container,
  Modal,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Headerpharmacy } from "./headerpharmacy";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LoginPharmacy = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [Number, setNumber] = useState("");
  const [password, setpassword] = useState("");

  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const Login = async (e) => {
    e.preventDefault();
    if (!Number || !password) {
      alert("Please Enter Number and Password");
    } else {
      try {
        const config = {
          url: "/pharmacy/LoginPharmacyUser",
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
          if (res.data.admin?.Blokingstatus === true) {
            alert("Sorry...!, You are blocked from website owner");
          } else {
            console.log(res.data.success);
            sessionStorage.setItem(
              "pharmacyUser",
              JSON.stringify(res.data.admin)
            );
            alert("Login Success");
            window.location.assign("/pharmacy");
          }
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  const [email, setemail] = useState("");
  const [OTP, setOTP] = useState();
  const [PtientID, setPtientID] = useState("");
  const [Ppassword, setPpassword] = useState("");
  const [Pconpassword, setPconpassword] = useState("");

  const [showPasswordPpassword, setShowPasswordPpassword] = useState(false);
  const togglePasswordVisibilityPpassword = () => {
    setShowPasswordPpassword(!showPasswordPpassword);
  };

  const [showPasswordPconpassword, setShowPasswordPconpassword] =
    useState(false);
  const togglePasswordVisibilityPconpassword = () => {
    setShowPasswordPconpassword(!showPasswordPconpassword);
  };

  const VendorsendOtp = async (e) => {
    if (!email) {
      alert("Please enter email id");
    } else {
      try {
        const config = {
          url: "/email/PharmacyCustomersendOtp",
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            email: email,
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          alert("OTP sent to your registered email Id");
          handleShow1();
        } else {
          alert(res.data.error);
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  const VerifyOtp = async (e) => {
    if (!OTP) {
      alert("Please enter valid OTP");
    } else {
      try {
        const config = {
          url: "/email/PharmacyCustomerVerifyOtp",
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            email: email,
            otp: OTP,
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          alert("OTP verified successfully");
          console.log(res.data);
          setPtientID(res.data.success?._id);
          handleShow2();
        } else {
          alert(res.data.error);
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };
  console.log("PtientID", PtientID);
  const ChangePharmacyPassword = async (e) => {
    if (Ppassword !== Pconpassword) {
      alert("Password and Confirm Password should be same");
    } else {
      try {
        const config = {
          url: "/email/ChangePharmacyCustomerPassword",
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            Id: PtientID,
            password: Ppassword,
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          alert("Your password changed successfully, Please login");
          window.location.reload();
        } else {
          alert(res.data.error);
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  return (
    <div>
      <Headerpharmacy wishlistData={null} CartItemsList={null} />
      <Container className="mt-4">
        <div
          className="row login-pharmacy align-items-center"
          style={{ minHeight: "500px" }}
        >
          <div className="col-lg-6 d-flex justify-content-center ">
            <div>
              <p
                className="fw-bold text-center mt-2"
                style={{ color: "#208b8c" }}
              >
                WELCOME TO{" "}
              </p>
              <div className="d-flex gap-2 justify-content-center align-items-center">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="./img/hospital-plus-logo.png"
                  alt=""
                />
                <h1
                  className="fw-bold login-pharmacy-head "
                  style={{ color: "#208b8c" }}
                >
                  JANANI PHARMACY
                </h1>
              </div>
              {/* <h1 className='fw-bold text-center' style={{ color: '#208b8c' }}></h1> */}
              <img
                className="login-pharmacy-img"
                style={{ width: "400px", height: "350px" }}
                src="./img/logo.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-5">
            <h4>
              <span style={{ color: "#208b8c" }}>LOGIN</span> HERE!
            </h4>
            <div className="mb-3">
              <FormLabel>Phone*</FormLabel>
              <FloatingLabel
                className="mb-3"
                style={{ width: "100%" }}
                controlId="floatingEmail"
                label="Phone"
              >
                <Form.Control
                  type="number"
                  placeholder="Phone"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </FloatingLabel>

              <FormLabel>Password*</FormLabel>
              <FloatingLabel
                className="mb-3"
                style={{ width: "100%" }}
                controlId="floatingPassword"
                label="Password"
              >
                <Form.Control
                  className="doctor-login-password"
                  type={showPassword1 ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setpassword(e.target.value)}
                />
                <FontAwesomeIcon
                  icon={showPassword1 ? faEye : faEyeSlash}
                  className="doctor-login-eye"
                  onClick={togglePasswordVisibility1}
                  style={{ cursor: "pointer", left: "26rem" }}
                />
              </FloatingLabel>

              <Button
                style={{ backgroundColor: "#208b8c", width: "100%" }}
                onClick={(e) => Login(e)}
              >
                Login
              </Button>
            </div>
            <div>
              <p className="mb-2 text-center">
                Forgot Your Password ?
                <span
                  style={{ color: "#208b8c", cursor: "pointer" }}
                  onClick={handleShow}
                >
                  Click Here!
                </span>
              </p>
              <hr />
              <p className="mt-2 text-center mb-2">
                You Don't have account ?
                <span
                  style={{ color: "#208b8c", cursor: "pointer" }}
                  onClick={() => navigate("/registerpharmacy")}
                >
                  Register Here!
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Forgot Modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex gap-2 justify-content-center">
              <img
                style={{ width: "30px", height: "30px" }}
                src="./img/hospital-plus-logo.png"
                alt=""
              />
              <h6 className="fw-bold mt-1" style={{ color: "white" }}>
                JANANI PHARMACY
              </h6>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-2">
            <span style={{ color: "white", cursor: "pointer" }}>
              RESET YOUR ACCOUNT
            </span>{" "}
            HERE!
          </p>
          <FormLabel className="fw-bold text-dark">Enter Your Email</FormLabel>
          <FloatingLabel
            className="mb-3"
            style={{ width: "100%" }}
            controlId="floatingEmail"
            label="Email"
          >
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
            />
          </FloatingLabel>

          <Button
            variant="primary"
            style={{ width: "100%" }}
            onClick={VendorsendOtp}
          >
            SEND
          </Button>
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

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex gap-2 justify-content-center">
              <img
                style={{ width: "30px", height: "30px" }}
                src="./img/hospital-plus-logo.png"
                alt=""
              />
              <h6 className="fw-bold mt-1" style={{ color: "white" }}>
                JANANI PHARMACY
              </h6>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-2">
            <span style={{ color: "white", cursor: "pointer" }}>
              VERIFY OTP
            </span>
          </p>
          <FormLabel className="fw-bold text-dark">
            Enter OTP sent to Email
          </FormLabel>
          <FloatingLabel
            className="mb-3"
            style={{ width: "100%" }}
            controlId="floatingEmail"
            label="OTP"
          >
            <Form.Control
              type="text"
              placeholder="OTP"
              onChange={(e) => setOTP(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={VerifyOtp}>
            Verify
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex gap-2 justify-content-center">
              <img
                style={{ width: "30px", height: "30px" }}
                src="./img/hospital-plus-logo.png"
                alt=""
              />
              <h6 className="fw-bold mt-1" style={{ color: "white" }}>
                JANANI PHARMACY
              </h6>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-2">
            <span style={{ color: "white", cursor: "pointer" }}>
              RESET PASSWORD
            </span>
          </p>
          <FormLabel className="fw-bold text-dark">New Password</FormLabel>
          <FloatingLabel
            className="mb-3"
            style={{ width: "100%" }}
            controlId="floatingEmail"
            label="Password"
          >
            <Form.Control
              className="doctor-login-password"
              type={showPasswordPpassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPpassword(e.target.value)}
            />

            <FontAwesomeIcon
              icon={showPasswordPpassword ? faEye : faEyeSlash}
              className="doctor-login-eye"
              onClick={togglePasswordVisibilityPpassword}
              style={{ cursor: "pointer", left: "26rem" }}
            />
          </FloatingLabel>
          <FormLabel className="fw-bold text-dark">Confirm Password</FormLabel>
          <FloatingLabel
            className="mb-3"
            style={{ width: "100%" }}
            controlId="floatingEmail"
            label="Confirm Password"
          >
            <Form.Control
              className="doctor-login-password"
              type={showPasswordPconpassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) => setPconpassword(e.target.value)}
            />

            <FontAwesomeIcon
              icon={showPasswordPconpassword ? faEye : faEyeSlash}
              className="doctor-login-eye"
              onClick={togglePasswordVisibilityPconpassword}
              style={{ cursor: "pointer", left: "26rem" }}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={ChangePharmacyPassword}>
            Change Password
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
