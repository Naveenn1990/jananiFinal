import axios from "axios";
import React, { useRef, useState } from "react";
import Barcode from "react-barcode";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import QRCode from "react-qr-code";

function PatientProfile() {
  const fileInputRef = useRef(null);

  const handleEditClick = () => {
    // Trigger click event on the file input when the edit icon is clicked
    fileInputRef.current.click();
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let patientDetails = JSON.parse(sessionStorage.getItem("PatientUser"));
  const [patientfirstname, setpatientfirstname] = useState("");
  const [patientlastname, setpatientlastname] = useState("");
  const [gender, setgender] = useState("");
  const [DOB, setDOB] = useState("");
  const [ProfilePic, setProfilePic] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState();
  const [Address, setAddress] = useState();
  const [Address1, setAddress1] = useState();
  const [City, setCity] = useState();
  const [State, setState] = useState();
  const [Zipcode, setZipcode] = useState();
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");

  const UpdateProfile = async () => {
    try {
      const config = {
        url: "/user/editPatientDetails/" + patientDetails?._id,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          Firstname: patientfirstname,
          Lastname: patientlastname,
          Gender: gender,
          DOB: DOB,
          Email: email,
          PhoneNumber: mobileno,
          Address1: Address,
          Address2: Address1,
          City1: City,
          State1: State,
          Zipcode: Zipcode,
          Password: password,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        sessionStorage.setItem("PatientUser", JSON.stringify(res.data.admin));
        alert("update successfully");
        handleClose();
        window.location.reload();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  let formdata = new FormData();

  const UpdateProfilePic = async (ProfilePic) => {
    try {
      formdata.set("profilepic", ProfilePic);
      const config = {
        url: "/user/editPatientpic/" + patientDetails?._id,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "multipart/form-data" },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        sessionStorage.setItem("PatientUser", JSON.stringify(res.data.admin));
        alert("update successfully");
        handleClose();
        window.location.reload();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mt-2">
        Profile Details
      </h4>

      <div className="row mb-3">
        <div className="col-lg-7">
          <div
            className=""
            style={{
              lineHeight: " 37px",
              textAlign: "center",
              backgroundColor: "#dae1f3",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            <div className="row">
              <div className="col-sm-6">
                <div className="d-flex gap-3">
                  {" "}
                  <b>Name : </b>{" "}
                  <p>
                    {patientDetails?.Firstname} {patientDetails?.Lastname}
                  </p>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <b>DOB : </b> <p>{patientDetails?.DOB}</p>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <b>Phone Number : </b> <p>{patientDetails?.PhoneNumber}</p>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <b>Address2 : </b> <p>{patientDetails?.Address2}</p>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <b>State : </b> <p>{patientDetails?.State1}</p>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <b>Password : </b> <p>{patientDetails?.Password}</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex gap-3">
                  <b>Email : </b> <p>{patientDetails?.Email}</p>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <b>Gender : </b> <p>{patientDetails?.Gender}</p>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <b>Address1 : </b> <p>{patientDetails?.Address1}</p>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <b>City : </b> <p>{patientDetails?.City1}</p>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <b>Zipcode : </b> <p>{patientDetails?.Zipcode}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Button onClick={() => handleShow()}>Update Profile</Button>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="d-flex justify-content-center">
            <div style={{ border: "1px solid" }}>
              <p>
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={(e) => UpdateProfilePic(e.target.files[0])}
                />
                <FaEdit onClick={handleEditClick} />
              </p>
              <img
                style={{
                  width: "269px",
                  height: "182px",
                }}
                src={`http://localhost:8521/PatientREG/${patientDetails?.profilepic}`}
                alt=""
              />
              <p style={{ textAlign: "center" }}>
                {patientDetails?.Firstname} {patientDetails?.Lastname}
              </p>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-center mb-3">
            <div>
            <Barcode value={`${patientDetails?.Firstname} ${patientDetails?.Lastname}`} width={1} height={50}  />

{/* Generate a barcode with additional options */}
{/* <Barcode value="987654321" width={1} height={50} /> */}
            
              <p style={{ textAlign: "center" }}>Profile Details</p>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Profile Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="row">
              <div className="col-sm-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label> First Name</Form.Label>
                  <Form.Control
                    onChange={(e) => setpatientfirstname(e.target.value)}
                    type="text"
                    placeholder={patientDetails?.Firstname}
                  />
                </Form.Group>
              </div>
              <div className="col-sm-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label> Last Name</Form.Label>
                  <Form.Control
                    onChange={(e) => setpatientlastname(e.target.value)}
                    type="text"
                    placeholder={patientDetails?.Lastname}
                  />
                </Form.Group>
              </div>
              <div className="col-sm-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    onChange={(e) => setemail(e.target.value)}
                    type="email"
                    placeholder={patientDetails?.Email}
                  />
                </Form.Group>
              </div>
              <div className="col-sm-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>DOB</Form.Label>
                  <Form.Control
                    onChange={(e) => setDOB(e.target.value)}
                    type="date"
                  />
                </Form.Group>
              </div>
              <div className="col-sm-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Gender</Form.Label>
                  <Form.Select onChange={(e) => setgender(e.target.value)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="col-sm-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    onChange={(e) => setmobileno(e.target.value)}
                    type="number"
                    placeholder={patientDetails?.PhoneNumber}
                  />
                </Form.Group>
              </div>
              <div className="col-sm-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Address1</Form.Label>
                  <Form.Control
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    placeholder={patientDetails?.Address1}
                  />
                </Form.Group>
              </div>
              <div className="col-sm-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Address2</Form.Label>
                  <Form.Control
                    onChange={(e) => setAddress1(e.target.value)}
                    type="text"
                    placeholder={patientDetails?.Address2}
                  />
                </Form.Group>
              </div>
              <div className="col-sm-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    placeholder={patientDetails?.City1}
                  />
                </Form.Group>
              </div>
              <div className="col-sm-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    onChange={(e) => setState(e.target.value)}
                    type="text"
                    placeholder={patientDetails?.State1}
                  />
                </Form.Group>
              </div>
              <div className="col-sm-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>ZipCode</Form.Label>
                  <Form.Control
                    onChange={(e) => setZipcode(e.target.value)}
                    type="text"
                    placeholder={patientDetails?.Zipcode}
                  />
                </Form.Group>
              </div>
              <div className="col-sm-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(e) => setpassword(e.target.value)}
                    type="text"
                    placeholder={patientDetails?.Password}
                  />
                </Form.Group>
              </div>
              {/* <div className="col-sm-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label> Confirm Password</Form.Label>
                  <Form.Control 
                   onChange={(e)=>setconpassword(e.target.value)}
                   type="text" placeholder={patientDetails?.Password} />
                </Form.Group>
              </div> */}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={UpdateProfile}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PatientProfile;
