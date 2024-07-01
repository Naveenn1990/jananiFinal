import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Container, FormLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Label from "react-bootstrap/FormLabel";
import { useNavigate } from "react-router-dom";

export const VendorSettings = () => {
  const navigate = useNavigate();
  const Vendor = JSON.parse(sessionStorage.getItem("VendorDetails"));

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");

  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Address, setAddress] = useState("");

  const ChangeVendorPassword = async (e) => {
    e.preventDefault();
    if (!password) {
      alert("Please enter password");
    } else if (!conpassword) {
      alert("Please enter confirm password");
    } else if (password !== conpassword) {
      alert("Password and Confirm Password should be same");
    } else {
      try {
        const config = {
          url: "/vendor/ChangeVendorPassword",
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            VendorId: Vendor?.vendorId,
            password: password,
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          sessionStorage.setItem(
            "VendorDetails",
            JSON.stringify(res.data.Vendor)
          );
          alert("Password changed successfully");
          window.location.reload();
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  const UpdateVendor = async (e) => {
    e.preventDefault();
    if (!Fname && !Lname && !Email && !City && !State && !Address) {
      alert("There is no changes to update");
    } else {
      try {
        const config = {
          url: "/vendor/UpdateVendor",
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            VendorId: Vendor?.vendorId,
            fname: Fname ? Fname : Vendor?.fname,
            lname: Lname ? Lname : Vendor?.lname,
            email: Email ? Email : Vendor?.email,
            city: City ? City : Vendor?.city,
            state: State ? State : Vendor?.state,
            address1: Address ? Address : Vendor?.address1,
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          sessionStorage.setItem(
            "VendorDetails",
            JSON.stringify(res.data.Vendor)
          );
          alert("Data updated successfully");
          window.location.reload();
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
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold">
        Settings
      </h4>
      <Container className="">
        <Form style={{ marginLeft: "100px", marginTop: "50px" }}>
          <h4 className=" fw-bold mb-4">Change Password</h4>

          {/* <FloatingLabel
            className="mb-4"
            style={{ width: "600px" }}
            controlId="floatingEmail"
            label="Username"
          >
            <Form.Control type="text" placeholder="Username" />
          </FloatingLabel> */}

          <FloatingLabel
            className="mb-4"
            style={{ width: "600px" }}
            controlId="floatingPassword"
            label="Password"
          >
            <Form.Control
              className="create-account-password-1"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="doctor-login-eye"
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer", left: "35rem" }}
            />
          </FloatingLabel>

          <FloatingLabel
            className="mb-4"
            style={{ width: "600px" }}
            controlId="floatingPassword"
            label="Confirm Password"
          >
            <Form.Control
              className="create-account-password-2"
              type={showPassword1 ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) => setconpassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword1 ? faEye : faEyeSlash}
              className="doctor-login-eye"
              onClick={togglePasswordVisibility1}
              style={{ cursor: "pointer", left: "35rem" }}
            />
          </FloatingLabel>

          <div>
            <Button
              className=" mb-4"
              style={{
                width: "20%",
                height: "40px",
                fontSize: "16px",
                backgroundColor: "rgb(32 139 140)",
              }}
              onClick={(e) => {
                ChangeVendorPassword(e);
              }}
            >
              Save
            </Button>
          </div>
        </Form>

        <Form style={{ marginLeft: "100px", marginTop: "50px" }}>
          <h4 className=" mb-4 fw-bold">Account Settings</h4>

          <div className="d-flex gap-4 mb-4">
            <div>
              <FormLabel>First name</FormLabel>
              <FloatingLabel
                style={{ width: "290px" }}
                controlId="floatingInput"
                label={Vendor?.fname}
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder={Vendor?.fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </FloatingLabel>
            </div>
            <div>
              <FormLabel>Last name</FormLabel>
              <FloatingLabel
                style={{ width: "290px" }}
                controlId="floatingName"
                label={Vendor?.lname}
              >
                <Form.Control
                  type="text"
                  placeholder={Vendor?.lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </FloatingLabel>
            </div>
          </div>

          <FormLabel>Email</FormLabel>
          <FloatingLabel
            className="mb-5"
            style={{ width: "600px" }}
            controlId="floatingEmail"
            label={Vendor?.email}
          >
            <Form.Control
              type="Email"
              placeholder={Vendor?.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>

          <div className="d-flex gap-2 mb-5">
            <div>
              <FormLabel>City</FormLabel>
              <FloatingLabel
                style={{ width: "290px" }}
                controlId="floatingCity"
                label={Vendor?.city}
              >
                <Form.Control
                  type="text"
                  placeholder={Vendor?.city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </FloatingLabel>
            </div>
            <div>
              <FormLabel>State/Province</FormLabel>
              <FloatingLabel
                style={{ width: "290px" }}
                controlId="floatingState"
                label={Vendor?.state}
              >
                <Form.Control
                  type="text"
                  placeholder={Vendor?.state}
                  onChange={(e) => setState(e.target.value)}
                />
              </FloatingLabel>
            </div>
          </div>
          <FormLabel>Street Address</FormLabel>
          <FloatingLabel
            className="mb-5"
            style={{ width: "600px" }}
            controlId="floatingStreetAddress"
            label={Vendor?.address1}
          >
            <Form.Control
              type="text"
              placeholder={Vendor?.address1}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FloatingLabel>

          <div>
            <Button
              className=" mb-4"
              style={{
                width: "20%",
                height: "40px",
                fontSize: "16px",
                backgroundColor: "rgb(32 139 140)",
              }}
              onClick={(e) => {
                UpdateVendor(e);
              }}
            >
              Save Changes
            </Button>
          </div>
        </Form>

        {/* 
                    <Label>Patient Name</Label>
                    <div className='d-flex gap-4'>
                        <FloatingLabel
                            style={{ width: '300px' }}
                            controlId="floatingInput"
                            label="First name"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="First Name" />
                        </FloatingLabel>

                        <FloatingLabel style={{ width: '300px' }} controlId="floatingName" label="Last name">
                            <Form.Control type="text" placeholder="Last Name" />
                        </FloatingLabel>
                    </div>
                    <Label>Gender</Label>
                    <Form.Select className='mb-3' style={{ width: '600px' }} aria-label="Default select example">
                        <option>Select gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                    </Form.Select>

                    <Label>Date of Birth</Label>
                    <div className='d-flex gap-2'>
                        <Form.Select className='mb-3' style={{ width: '200px' }} aria-label="Default select example">
                            <option> Month</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">Jully</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </Form.Select>
                        <Form.Select className='mb-3' style={{ width: '200px' }} aria-label="Default select example">
                            <option> Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </Form.Select>
                        <Form.Select className='mb-3' style={{ width: '200px' }} aria-label="Default select example">
                            <option> Year</option>
                            <option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option>
                        </Form.Select>
                    </div>

                    <Label> Phone Number</Label>
                    <FloatingLabel className='mb-3' style={{ width: '600px' }} controlId="floatingNumber" label="Phone Number">
                        <Form.Control type="number" placeholder="Phone Number" />
                    </FloatingLabel>

                    <Label>Email</Label>
                    <FloatingLabel className='mb-3' style={{ width: '600px' }} controlId="floatingEmail" label="Email">
                        <Form.Control type="Email" placeholder="Email" />
                    </FloatingLabel>

                    <Label>Address</Label>
                    <FloatingLabel className='mb-3' style={{ width: '600px' }} controlId="floatingStreetAddress" label="Street Address">
                        <Form.Control type="text" placeholder="Street Address" />
                    </FloatingLabel>

                    <FloatingLabel className='mb-3' style={{ width: '600px' }} controlId="floatingStreetAddress" label="Street Address 2">
                        <Form.Control type="text" placeholder="Street Address 2" />
                    </FloatingLabel>

                    <div className='d-flex gap-2 mb-3'>
                        <FloatingLabel style={{ width: '300px' }} controlId="floatingCity" label="City">
                            <Form.Control type="text" placeholder="City" />
                        </FloatingLabel>
                        <FloatingLabel style={{ width: '300px' }} controlId="floatingState" label="State/Province">
                            <Form.Control type="text" placeholder="State/Province" />
                        </FloatingLabel>
                    </div>

                    <FloatingLabel className='mb-3' style={{ width: '600px' }} controlId="floatingPostal" label="Postal/Zip Code">
                        <Form.Control type="number" placeholder="Postal/Zip Code" />
                    </FloatingLabel>

                    <Label>Marital Status</Label>
                    <Form.Select className='mb-3' style={{ width: '600px' }} aria-label="Default select example">
                        <option>Status</option>
                        <option value="1">Married</option>
                        <option value="2">Single</option>
                        <option value="3">Divorced</option>
                    </Form.Select>


                    <Label className='me-5'>Is patient is younger then 18?</Label>

                    <input className='ms-5' type="radio" name='Yes' />
                    <Label className='ms-1'>Yes</Label>

                    <input className='ms-5' type="radio" name='Yes' />
                    <Label className='ms-1'>No</Label>


                    <FloatingLabel className='mb-3' style={{ width: '600px' }} controlId="floatingPassword" label="Password">
                        <Form.Control className='create-account-password-1' type="password" placeholder="Password" />
                        <FontAwesomeIcon icon={faEye} className='password-eye-1' />
                    </FloatingLabel>

                    <FloatingLabel className='mb-3' style={{ width: '600px' }} controlId="floatingPassword" label="Confirm Password">
                        <Form.Control className='create-account-password-2' type="password" placeholder="Confirm Password" />
                        <FontAwesomeIcon icon={faEye} className='password-eye-2' />
                    </FloatingLabel>

                    <div>
                        <Button className=' mb-4' style={{ width: "20%", height: '40px', fontSize: '16px' }} onClick={() => { navigate('/patientPortal') }}>Register</Button>
                    </div>

                    <a href="/patientPortal">Already have an account?</a> */}
      </Container>
    </div>
  );
};
