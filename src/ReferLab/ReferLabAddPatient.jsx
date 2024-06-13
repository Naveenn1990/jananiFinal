import React, { useEffect, useState } from "react";
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

export const ReferLabAddPatient = () => {
  const navigate = useNavigate();
  const ReferalLAB = JSON.parse(sessionStorage.getItem("RLabDetails"));

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [gender, setgender] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [email, setemail] = useState("");
  const [dob, setdob] = useState("");
  const [age, setage] = useState("");
  const [maritalStatus, setmaritalStatus] = useState("");
  const [bloodgroup, setbloodgroup] = useState("");
  const [Address, setAddress] = useState("");
  const [DateofAppointment, setDateofAppointment] = useState("");
  const [Injury, setInjury] = useState("");
  const [OldPrescription, setOldPrescription] = useState("");
  const formdata = new FormData();

  const RegisterPatient = async () => {
    try {
      formdata.set("LabPatientsFname", firstname);
      formdata.set("LabPatientsLname", lastname);
      formdata.set("Gender", gender);
      formdata.set("PhoneNumber", Phoneno);
      formdata.set("Email", email);
      formdata.set("Dob", dob);
      formdata.set("Age", age);
      formdata.set("marritalStatus", maritalStatus);
      formdata.set("BloodGroup", bloodgroup);
      formdata.set("Address", Address);
      formdata.set("AppointmentDate", DateofAppointment);
      formdata.set("InjuryCondition", Injury);
      formdata.set("OldPrescription", OldPrescription);
      formdata.set("LabId", ReferalLAB?._id);
      const config = {
        url: "/addLabPatient",
        method: "post",
        baseURL: "http://localhost:8521/api/ClinicLab",
        headers: { "Content-Type": "multipart/form-data" },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        window.location.assign("/referlabpatientlist");
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const [HospitalLabList, setHospitalLabList] = useState([]);
  const HospitallabList = () => {
    axios
      .get("http://localhost:8521/api/admin/getHospitalLabTestlist")
      .then(function (response) {
        if (response.status === 200) {
          const data = response.data.HospitalLabTests;
          setHospitalLabList(data);
        }
      })
      .catch(function (error) {
        console.log(error);
        setHospitalLabList([]);
      });
  };
  useEffect(() => {
    HospitallabList();
  }, []);
console.log("HospitalLabList",HospitalLabList);
  return (
    <div>
      <div>
        <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold">
          Add Patient
        </h4>
        <Container className="">
          <Form style={{ marginLeft: "70px", marginTop: "20px" }}>
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
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
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
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                />
              </FloatingLabel>
            </div>
            <div className="d-flex gap-4 mb-5">
              <Form.Select
                style={{ width: "400px" }}
                aria-label="Default select example"
                onChange={(e) => setgender(e.target.value)}
                value={gender}
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
                  onChange={(e) => setPhoneno(e.target.value)}
                  value={Phoneno}
                  type="number"
                  placeholder="Phone Number"
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
                  value={email}
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
                  onChange={(e) => setdob(e.target.value)}
                  value={dob}
                />
              </FloatingLabel>
            </div>
            <div className="d-flex gap-4 mb-5">
              <FloatingLabel
                style={{ width: "400px" }}
                controlId="floatingAge"
                label="Age"
              >
                <Form.Control
                  type="number"
                  placeholder="Age"
                  onChange={(e) => setage(e.target.value)}
                  value={age}
                />
              </FloatingLabel>
              <Form.Select
                style={{ width: "400px" }}
                aria-label="Default select example"
                onChange={(e) => setmaritalStatus(e.target.value)}
                value={maritalStatus}
              >
                <option>Marital Status </option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </Form.Select>
            </div>
            <div className="d-flex gap-4 mb-5">
              <Form.Select
                style={{ width: "400px" }}
                aria-label="Default select example"
                onChange={(e) => setbloodgroup(e.target.value)}
                value={bloodgroup}
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
            <div className="mb-5">
              <textarea
                onChange={(e) => setAddress(e.target.value)}
                value={Address}
                class="form-control"
                placeholder="Address"
                id="floatingTextarea2"
                style={{ width: "820px", height: "100px" }}
              ></textarea>
            </div>
            <div className="d-flex gap-4 mb-5">
              <FloatingLabel
                style={{ width: "400px" }}
                controlId="floatingDate"
                label="Date of Appointment"
              >
                <Form.Control
                  type="date"
                  placeholder="Date of Appointment"
                  onChange={(e) => setDateofAppointment(e.target.value)}
                  value={DateofAppointment}
                />
              </FloatingLabel>
              <Form.Select
                style={{ width: "400px" }}
                aria-label="Default select example"
              >
                <option>Select Category</option>
                {HospitalLabList?.map((item)=>{
                  return(
                    <option value="1">{item?.testCategory?.testName}</option>
                  )
                })}
              </Form.Select>
            </div>
            <div className="d-flex gap-4 mb-5">
              <Form.Select
                style={{ width: "400px" }}
                aria-label="Default select example"
              >
                <option>Select Lab Test</option>
                <option value="1">Dr.Rajesh</option>
                <option value="2">Dr.Sarah Smith</option>
              </Form.Select>
            </div>
            <FloatingLabel className="mb-5" label="Injury/Contion">
              <Form.Control
                style={{ width: "820px", height: "100px" }}
                type="text"
                placeholder="Injury/Contion"
                onChange={(e) => setInjury(e.target.value)}
                value={Injury}
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
              onChange={(e) => setOldPrescription(e.target.files[0])}
            />
            <div className="d-flex gap-3 mb-4 mt-4">
              <Button
                style={{
                  width: "15%",
                  height: "40px",
                  fontSize: "16px",
                  backgroundColor: "rgb(32 139 140)",
                }}
                onClick={() => RegisterPatient()}
              >
                Submit
              </Button>
              {/* <Button
                style={{
                  width: "10%",
                  height: "40px",
                  fontSize: "16px",
                  backgroundColor: "#FE2E2E",
                }}
                onClick={() => {
                  navigate("#");
                }}
              >
                Cancel
              </Button> */}
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};
