import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Label from 'react-bootstrap/FormLabel';
import { useNavigate } from 'react-router-dom';
import { Country, State, City, } from "country-state-city";

export const CreateAccount = () => {

  // Location
  const [Country1, setCountry1] = useState("IN");
  const [State1, setState1] = useState("");
  const [City1, setCity1] = useState("");

  const CountryList = Country.getAllCountries();
  const StateList = State.getStatesOfCountry("IN");
  const CityList = City.getCitiesOfState("IN", State1);


  const navigate = useNavigate()

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
  const [altmobileno, setaltmobileno] = useState();
  const [Address, setAddress] = useState();
  const [Address1, setAddress1] = useState();
  const [Zipcode, setZipcode] = useState();
  const [Marital, setMarital] = useState();


  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    // if (!patientfirstname | !patientlastname | !conpassword | !gender | !DOB | !) {
    //   alert("Please Fill All The Field");
    // } else if (password !== conpassword) {
    //   alert("Password and ConfirmPassword should be same");
    // } else {
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
            alternatePhoneNumber : altmobileno,
            Email: email,
            Address1: Address,
            Address2: Address1,
            City1: City1,
            State1: State1,
            Zipcode: Zipcode,
            MaritalStatus: Marital,
            Password: password,
            ConfirmPassword: conpassword,
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          console.log(res.data);
          console.log(res.data.success);
          alert("Signup Success");
          window.location.assign("/patientPortal");
        }
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

        <h2 className='mb-4 text-center' style={{ color: '#208b8c', fontFamily: 'Bricolage_Grotesque variant0' }}>Patient Registration</h2>

        <div className='d-flex justify-content-center gap-2'>
          <Form >
            <Label className='fw-bold text-dark'>Patient Name :</Label>
            <div className='d-flex justify-content-between flex-1'>
              <FloatingLabel
                style={{ width: '300px' }}
                controlId="floatingInput"
                label="First name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="First Name"
                  onChange={(e) => setpatientfirstname(e.target.value)} />
              </FloatingLabel>

              <FloatingLabel style={{ width: '300px' }} controlId="floatingName" label="Last name">
                <Form.Control type="text" placeholder="Last Name" onChange={(e) => setpatientlastname(e.target.value)} />
              </FloatingLabel>
            </div>

            <div className='mb-3'>
              <Label className='fw-bold text-dark'>Gender :</Label>
              <Form.Select className=' width-respns width-respns-768px' style={{ width: '610px' }} aria-label="Default select example" onChange={(e) => setgender(e.target.value)} >
                <option>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
            </div>

            <Label className='fw-bold text-dark'>Date of Birth :</Label>
            <div className='d-flex justify-content-between flex-1'>
              <FloatingLabel style={{ width: '300px' }} controlId="floatingName" label="Date of Birth">
                <Form.Control type="date" placeholder="Date of Birth" onChange={(e) => setDOB(e.target.value)} />
              </FloatingLabel>

            </div>

            <Label className='fw-bold text-dark'> Phone Number :</Label>
            <FloatingLabel className='mb-3 width-respns width-respns-768px' style={{ width: '610px' }} controlId="floatingNumber" label="Phone Number">
              <Form.Control type="number" placeholder="Phone Number" onChange={(e) => setmobileno(e.target.value)} />
            </FloatingLabel>

            <Label className='fw-bold text-dark'>Alternate Phone Number :</Label>
            <FloatingLabel className='mb-3 width-respns width-respns-768px' style={{ width: '610px' }} controlId="floatingNumber" label="Phone Number">
              <Form.Control type="number" placeholder="Phone Number" onChange={(e) => setaltmobileno(e.target.value)} />
            </FloatingLabel>

            <Label className='fw-bold text-dark'>Email :</Label>
            <FloatingLabel className='mb-3 width-respns width-respns-768px' style={{ width: '610px' }} controlId="floatingEmail" label="Email">
              <Form.Control type="Email" placeholder="Email" onChange={(e) => setemail(e.target.value)} />
            </FloatingLabel>

            <Label className='fw-bold text-dark'>Address :</Label>
            <FloatingLabel className='mb-2 width-respns width-respns-768px' style={{ width: '610px' }} controlId="floatingStreetAddress" label="Street Address">
              <Form.Control type="text" placeholder="Street Address" onChange={(e) => setAddress(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel className='mb-2 width-respns width-respns-768px' style={{ width: '610px' }} controlId="floatingStreetAddress" label="Street Address 2">
              <Form.Control type="text" placeholder="Street Address 2" onChange={(e) => setAddress1(e.target.value)} />
            </FloatingLabel>

            <div className='d-flex justify-content-between mb-3 flex-1'>
              <FloatingLabel style={{ width: '300px' }} controlId="floatingState" label="State/Province">
                <select
                  className="form-control login-input"
                  value={State1}
                  onChange={(e) => setState1(e.target.value)}
                >
                  <option value="">Select State</option>
                  {StateList?.map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </FloatingLabel>
              <FloatingLabel className='mb-2' style={{ width: '300px' }} controlId="floatingCity" label="City">
                <select
                  className="form-control login-input"
                  value={City1}
                  onChange={(e) => setCity1(e.target.value)}
                >
                  <option value="">Select City</option>
                  {CityList?.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </FloatingLabel>
            </div>
            <FloatingLabel className='mb-3 width-respns width-respns-768px' style={{ width: '610px' }} controlId="floatingPostal" label="Postal/Zip Code">
              <Form.Control type="number" placeholder="Postal/Zip Code" onChange={(e) => setZipcode(e.target.value)} />
            </FloatingLabel>

            <Label className='fw-bold text-dark'>Marital Status :</Label>
            <Form.Select className='mb-3 width-respns width-respns-768px' style={{ width: '610px' }} aria-label="Default select example" onChange={(e) => setMarital(e.target.value)}>
              <option>Status</option>
              <option value="Married">Married</option>
              <option value="Single">Single</option>
              <option value="Divorced">Divorced</option>
            </Form.Select>


            <FloatingLabel className='mb-3 width-respns width-respns-768px' style={{ width: '610px' }} controlId="floatingPassword" label="Password">
              <Form.Control className='create-account-password-1' type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
              <FontAwesomeIcon icon={faEye} className='password-eye-1' />
            </FloatingLabel>

            <FloatingLabel className='mb-3 width-respns width-respns-768px' style={{ width: '610px' }} controlId="floatingPassword" label="Confirm Password" onChange={(e) => setconpassword(e.target.value)}>
              <Form.Control className='create-account-password-2' type="password" placeholder="Confirm Password" />
              <FontAwesomeIcon icon={faEye} className='password-eye-2' />
            </FloatingLabel>

            <div>
              <Button className=' mb-4' style={{ width: "auto", height: '40px', fontSize: '16px', backgroundColor: '#208b8c' }} onClick={(e) => { signup(e) }}>Register</Button>
            </div>

            <a href="/patientPortal" className='mb-5'>Already have an account?</a>

          </Form>
        </div>
      </Container>

    </div>
  )
}
