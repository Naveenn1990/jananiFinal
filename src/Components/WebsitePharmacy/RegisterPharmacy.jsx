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

export const RegisterPharmacy = () => {
  const navigate = useNavigate();
  // let pharmacyUser = JSON.parse(sessionStorage.getItem("pharmacyUser"));
  function ValidateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  function validatename(inputtxt) {
    var phoneno = /^[a-zA-Z ]{2,30}$/; // var no = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
      return true;
    } else {
      alert("You have entered an invalid name!");
      return false;
    }
  }

  function phonenumber(inputtxt) {
    var phoneno = /^[6-9]\d{9}$/; // var no = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
      return true;
    } else {
      alert("You have entered an invalid mobile number!");
      return false;
    }
  }

  function CheckPassword(inputtxt) {
    var decimal =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    if (inputtxt.match(decimal)) {
      return true;
    } else {
      alert(
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character!"
      );
      return false;
    }
  }

  const [patientfirstname, setpatientfirstname] = useState("");
  const [patientlastname, setpatientlastname] = useState("");
  const [gender, setgender] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState();
  const [Address, setAddress] = useState();
  const [Address1, setAddress1] = useState();
  const [City, setCity] = useState();

  const [State, setState] = useState();
  const [Zipcode, setZipcode] = useState();
  const [Marital, setMarital] = useState();

  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const signup = async (e) => {
    e.preventDefault();
    if (
      !patientfirstname ||
      !patientlastname ||
      !password ||
      !conpassword ||
      !gender ||
      !DOB ||
      !mobileno ||
      !email ||
      !Address ||
      !Address1 ||
      !City ||
      !State ||
      !Zipcode ||
      !Marital ||
      !password ||
      !conpassword
    ) {
      alert("Please Fill All The Field");
    } else if (password !== conpassword) {
      alert("Password and ConfirmPassword should be same");
    } else {
      try {
        if (
          validatename(patientfirstname) &&
          ValidateEmail(email) &&
          phonenumber(mobileno) &&
          CheckPassword(password)
        ) {
          const config = {
            url: "/user/addPatient",
            method: "post",
            baseURL: "http://localhost:8521/api",
            headers: { "content-type": "application/json" },
            data: {
              Firstname: patientfirstname,
              Lastname: patientlastname,
              Gender: gender,
              DOB: DOB,
              PhoneNumber: mobileno,
              Email: email,
              Address1: Address,
              Address2: Address1,
              City: City,
              State: State,
              Zipcode: Zipcode,
              MaritalStatus: Marital,
              Password: password,
              ConfirmPassword: conpassword,
              registeredFrom: "pharmacy",
            },
          };
          let res = await axios(config);
          if (res.status === 200) {
            console.log(res.data);
            console.log(res.data.success);
            alert("Signup Success");
            window.location.assign("/loginpharmacy");
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

  return (
    <div>
      <Headerpharmacy wishlistData={null} CartItemsList={null} />
      <Container className="mt-4">
        <div
          className="row login-pharmacy align-items-center"
          style={{ minHeight: "600px" }}
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
                  className="fw-bold login-pharmacy-head"
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
          <div className="col-lg-5 p-3">
            <h4>
              <span style={{ color: "#208b8c" }}>REGISTER</span> HERE!
            </h4>
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <FloatingLabel
                  //   className=" mb-3"
                  style={{ width: "100%" }}
                  controlId="floatingName"
                  label="First Name"
                >
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setpatientfirstname(e.target.value)}
                  />
                </FloatingLabel>
              </div>
              <div className="col-md-6 mb-3">
                <FloatingLabel
                  //   className=" mb-3"
                  style={{ width: "100%" }}
                  controlId="floatingName"
                  label="Last Name"
                >
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setpatientlastname(e.target.value)}
                  />
                </FloatingLabel>
              </div>
              <div className="col-md-6 mb-3">
                <label style={{ fontWeight: "400", fontSize: " 15px" }}>
                  Gender
                </label>
                <Form.Select
                  //   className=" width-respns width-respns-768px"
                  // style={{ width: "610px" }}
                  aria-label="Default select example"
                  onChange={(e) => setgender(e.target.value)}
                >
                  <option>Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </div>
              <div className="col-md-6 mb-3">
                <label style={{ fontWeight: "400", fontSize: " 15px" }}>
                  Date of Birth
                </label>
                <Form.Control
                  type="date"
                  placeholder="Date of Birth"
                  onChange={(e) => setDOB(e.target.value)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <FloatingLabel
                  //   className=" width-respns width-respns-768px"
                  //   style={{ width: "610px" }}
                  controlId="floatingNumber"
                  label="Phone Number"
                >
                  <Form.Control
                    type="tele"
                    placeholder="Phone Number"
                    maxLength={10}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    onChange={(e) => setmobileno(e.target.value)}
                  />
                </FloatingLabel>
              </div>
              <div className="col-md-6 mb-3">
                <FloatingLabel
                  //   className=""
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
              </div>

              <div className="col-md-12 mb-3">
                <label style={{ fontWeight: "400", fontSize: " 15px" }}>
                  Address
                </label>
                <FloatingLabel
                  className="mb-2 width-respns width-respns-768px"
                  style={{ width: "100%" }}
                  controlId="floatingStreetAddress"
                  label="Street Address"
                >
                  <Form.Control
                    type="text"
                    placeholder="Street Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FloatingLabel>

                <FloatingLabel
                  className="mb-2 width-respns width-respns-768px"
                  style={{ width: "100%" }}
                  controlId="floatingStreetAddress"
                  label="Street Address 2"
                >
                  <Form.Control
                    type="text"
                    placeholder="Street Address 2"
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </FloatingLabel>

                <div className="d-flex justify-content-between mb-2 flex-1 ">
                  <FloatingLabel
                    className="mb-2"
                    // style={{ width: "100%" }}
                    controlId="floatingCity"
                    label="City"
                  >
                    <Form.Control
                      type="text"
                      placeholder="City"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    // style={{ width: "100%" }}
                    controlId="floatingState"
                    label="State/Province"
                  >
                    <Form.Control
                      type="text"
                      placeholder="State/Province"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </FloatingLabel>
                </div>

                <FloatingLabel
                  className="mb-3 width-respns width-respns-768px"
                  style={{ width: "100%" }}
                  controlId="floatingPostal"
                  label="Postal/Zip Code"
                >
                  <Form.Control
                    type="number"
                    placeholder="Postal/Zip Code"
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                </FloatingLabel>
              </div>
              <div className="col-md-12 mb-3">
                <label style={{ fontWeight: "400", fontSize: " 15px" }}>
                  Marital Status
                </label>
                <Form.Select
                  //   className=" width-respns width-respns-768px"
                  // style={{ width: "610px" }}
                  aria-label="Default select example"
                  onChange={(e) => setMarital(e.target.value)}
                >
                  <option>Select status</option>
                  <option value="Married">Married</option>
                  <option value="Single">Single</option>
                  <option value="Divorced">Divorced</option>
                </Form.Select>
              </div>
              <div className="col-md-6 mb-3">
                <FloatingLabel
                  className="mb-3"
                  style={{ width: "100%" }}
                  controlId="floatingPassword"
                  label="Password"
                >
                  <Form.Control
                    className="doctor-login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash}
                    className="doctor-login-eye"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer", left: "11rem" }}
                  />
                </FloatingLabel>
              </div>
              <div className="col-md-6 mb-3">
                <FloatingLabel
                  className="mb-3"
                  style={{ width: "100%" }}
                  controlId="floatingPassword"
                  label="Confirm Password"
                >
                  <Form.Control
                    className="doctor-login-password"
                    type={showPassword1 ? "text" : "password"}
                    placeholder="Confirm Password"
                    onChange={(e) => setconpassword(e.target.value)}
                  />
                  <FontAwesomeIcon
                    icon={showPassword1 ? faEye : faEyeSlash}
                    className="doctor-login-eye"
                    onClick={togglePasswordVisibility1}
                    style={{ cursor: "pointer", left: "11rem" }}
                  />
                </FloatingLabel>
              </div>
              <Button
                className="all-bg-green w-100"
                onClick={(e) => {
                  signup(e);
                }}
              >
                Register
              </Button>
            </div>
            <div>
              <p className="mb-2 text-center">
                Already have a account ?
                <span
                  style={{ color: "#208b8c", cursor: "pointer" }}
                  onClick={() => navigate("/loginpharmacy")}
                >
                  Login!
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
