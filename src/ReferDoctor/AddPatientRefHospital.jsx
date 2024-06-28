import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Label from "react-bootstrap/FormLabel";
import React, { useState } from "react";
import {
  Button,
  Container,
  FloatingLabel,
  Form,
  FormLabel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CkEditorComponent } from "../CkEditor/CkEditorComponent";
import axios from "axios";

function AddPatientRefHospital() {
    const ReferralDocDetails = JSON.parse(sessionStorage.getItem("RDoctorDetails"));

    const [patientfirstname, setpatientfirstname] = useState("");
    const [patientlastname, setpatientlastname] = useState("");
    const [gender, setgender] = useState("");
    const [mobileno, setmobileno] = useState();
    const [email, setemail] = useState("");
    const [DOB, setDOB] = useState("");
    const [MaritalStatus, setMaritalStatus] = useState("");
    const [bloodgroup, setbloodgroup] = useState("");
    const [Age, setAge] = useState()
    const [Appointmentdate, setAppointmentdate] = useState("")
    const [Address, setAddress] = useState();    
    const [Document, setDocument] = useState();
    const [InjuryCondition, setInjuryCondition] = useState();  
    const formdata = new FormData();
    const AddHospitalRefPatient = async (e) => {
      e.preventDefault();
      formdata.append("ClinicId",ReferralDocDetails?._id)
      formdata.append("PatientsFname", patientfirstname);
      formdata.append("PatientsLname", patientlastname);
      formdata.append("Gender", gender);      
      formdata.append("PhoneNumber", mobileno);
      formdata.append("Email", email);   
      formdata.append("DOB", DOB);  
      formdata.append("marritalStatus", MaritalStatus);
      formdata.append("BloodGroup", bloodgroup);
      formdata.append("Age", Age);
      formdata.append("AppointmentDate", Appointmentdate);
      formdata.append("Address1", Address);
      formdata.append("InjuryCondition", InjuryCondition);      
      formdata.append("OldPrescription", Document);  
      try {
        const config = {
          url: "/Clinic/addRefHospitalPatient",
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "multipart/form-data" },
          data: formdata,
        };
        let res = await axios(config);
        if (res.status === 200) {
         alert(res.data.success);
         window.location.assign("/referhospitalpatientlist")
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
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold">
        Add Patient For Hospital Refer{" "}
      </h4>
      <Container className="">
        <Form style={{ marginLeft: "100px", marginTop: "50px" }}>
          <h4 className=" fw-bold mb-3">Patient Information</h4>
          <div className="d-flex gap-4 mb-5">
            <FloatingLabel
              style={{ width: "400px" }}
              controlId="floatingEmail"
              label="First Name"
            >
              <Form.Control
                type="text"
                placeholder="First Name"
                onChange={(e) => setpatientfirstname(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              style={{ width: "400px" }}
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
          <div className="d-flex gap-4 mb-5">
            <Form.Select
              style={{ width: "400px" }}
              aria-label="Default select example"
              onChange={(e) => setgender(e.target.value)}
            >
              <option>Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Select>

            <FloatingLabel
              style={{ width: "400px" }}
              controlId="floatingNumber"
              label="Phone Number"
            >
              <Form.Control
                type="number"
                placeholder="Phone Number"
                onChange={(e) => setmobileno(e.target.value)}
              />
            </FloatingLabel>
          </div>
          <div className="d-flex gap-4 mb-5">
            <FloatingLabel
              style={{ width: "400px" }}
              controlId="floatingEmail"
              label="Email"
            >
              <Form.Control
                type="Email"
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              style={{ width: "400px" }}
              controlId="floatingEmail"
              label="Birth Date"
            >
              <Form.Control
                type="date"
                placeholder="Birth Date"
                onChange={(e) => setDOB(e.target.value)}
              />
            </FloatingLabel>
          </div>         
          <div className="d-flex gap-4 mb-5">
            <Form.Select
              style={{ width: "400px" }}
              aria-label="Default select example"
              onChange={(e) => setMaritalStatus(e.target.value)}
            >
              <option>Marital Status </option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </Form.Select>

            <Form.Select
              style={{ width: "400px" }}
              aria-label="Default select example"
              onChange={(e) => setbloodgroup(e.target.value)}
            >
              <option>Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </Form.Select>
          </div>
          <div className=" mb-5">           
            <FloatingLabel
              style={{ width: "400px" }}
              controlId="floatingNumber"
              label="Age"
            >
              <Form.Control
                type="number"
                placeholder="Phone Number"
                onChange={(e) => setAge(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              style={{ width: "400px" }}
              label="Appointment Date"
            >
              <Form.Control
                type="date"                
                onChange={(e) => setAppointmentdate(e.target.value)}
              />
            </FloatingLabel>
          </div>
          <div className="mb-5">
            {/* <label >Comments</label> */}
            <textarea
              class="form-control"
              placeholder="Address"
              id="floatingTextarea2"
              style={{ width: "820px", height: "100px" }}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        
          <FloatingLabel className="mb-5" label="Injury/Contion">
            <Form.Control
              style={{ width: "820px", height: "100px" }}
              type="text"
              placeholder="Injury/Contion"
              onChange={(e) => setInjuryCondition(e.target.value)}
            />
          </FloatingLabel>      
          <FormLabel className="fw-bold text-dark">
            {" "}
            Choose Old Prescription*{" "}
          </FormLabel>{" "}
          <br />
          <input
            type="file"
            className=" p-2 mb-5"
            style={{
              border: "1px solid grey",
              width: "820px",
              height: "50px",
            }}
            onChange={(e) => setDocument(e.target.files[0])}
          />
          <div className="d-flex gap-3 mb-4 mt-4">
            <Button
              style={{
                width: "15%",
                height: "40px",
                fontSize: "16px",
                backgroundColor: "rgb(32 139 140)",
              }}
              onClick={(e) => {
                AddHospitalRefPatient(e);
              }}
            >
              Submit
            </Button>          
          </div>
        </Form>
      </Container>
    </div>
  </div>
  )
}

export default AddPatientRefHospital