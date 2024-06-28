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
import Select from "react-select";
export const AddPatient = () => {
    const ReferralDocDetails = JSON.parse(sessionStorage.getItem("RDoctorDetails"));
    
    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        minHeight: "60px",
      }),
    };
    const [Labtests1, setLabtests1] = useState([]);
    let [selectedOptions, setSelectedOptions] = useState([]);
    const hasSelectedOptions = Labtests1 && Labtests1.length > 0;
    const AddLabTest = (Labtests) => {
      setSelectedOptions(
        Labtests?.map((val) => {
          return {
            testid: val._id,
            testName: val.testName,
            priceNonInsurance: val.priceNonInsurance,
            priceInsurance: val.priceInsurance,
            unit: val.unit,
            generalRefVal: val.generalRefVal,
          };
        })
      );
      setLabtests1(Labtests);
    };

    const [HospitalLabList, setHospitalLabList] = useState([]);
    const getHospitallabList = () => {
      axios
        .get("http://localhost:8521/api/admin/getHospitalLabTestlist")
        .then(function (response) {
          if (response.status === 200) {
            const data = response.data.HospitalLabTests;
            data.forEach((item) => {
              item.label = item.testName;
              item.value = item.testName;
            });
  
            setHospitalLabList(data);
          }
        })
        .catch(function (error) {
          console.log(error);
          setHospitalLabList([]);
        });
    };

  const [patientfirstname, setpatientfirstname] = useState("");
  const [patientlastname, setpatientlastname] = useState("");
  const [gender, setgender] = useState("");
  const [DOB, setDOB] = useState("");
  const [Age, setAge] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState();
  const [maritalStatus, setmaritalStatus] = useState("");
  const [Address, setAddress] = useState();
  const [bloodgroup, setbloodgroup] = useState();
  const [Document, setDocument] = useState();
  const [InjuryCondition, setInjuryCondition] = useState();
  const [DateofAppointment, setDateofAppointment] = useState("");
  const formdata = new FormData();
  console.log("selectedOptions",selectedOptions);
  const AddRefPatient = async (e) => {
    e.preventDefault();
    try {
    formdata.set("ClinicId", ReferralDocDetails?._id);
    formdata.append("Firstname", patientfirstname);
    formdata.append("Lastname", patientlastname);
    formdata.append("Gender", gender);   
    formdata.append("PhoneNumber", mobileno);
    formdata.append("Email", email);
    formdata.append("DOB", DOB);
    formdata.append("age", Age);
    formdata.append("Address1", Address);
    formdata.append("BloodGroup", bloodgroup);
    formdata.append("MaritalStatus", maritalStatus);
    formdata.append("appointmentdate", DateofAppointment);
    formdata.append("InjuryCondition", InjuryCondition);
    formdata.append("oldprescriptionDoc", Document);
    // formdata.append("Labtests", JSON.stringify(selectedOptions));
      const config = {
        url: "/Clinic/addRefPatient",
        method: "post",
        baseURL: "http://localhost:8521/api",
        // headers: { "content-type": "multipart/form-data" },
        data: formdata,
      };
      
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        window.location.assign("/referdoctorpatientlist")
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    getHospitallabList()
  }, [])
  

  return (
    <div>
      <div>
        <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold">
          Add Patient For Refer Lab{" "}
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
              <FloatingLabel
                style={{ width: "400px" }}
                label="Age"
              >
                <Form.Control
                  type="number"
                  onChange={(e) => setAge(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                style={{ width: "400px" }}
                controlId="floatingEmail"
                label="Marital Status"
              >
                <Form.Select
                  onChange={(e) => setmaritalStatus(e.target.value)}
                >
                <option>Marital Status </option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                </Form.Select>
              </FloatingLabel>
            </div>          
            <div className="d-flex gap-4 mb-5">             

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
           
            <div className="mb-5">
              <textarea
              value={Address}
                class="form-control"
                placeholder="Address"
                id="floatingTextarea2"
                style={{ width: "820px", height: "100px" }}
                onChange={(e) => setAddress(e.target.value)}
              />
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
                  min={new Date().toISOString().split("T")[0]}
                />
              </FloatingLabel>
              {/* <FloatingLabel
              style={{ width: "400px" }}
                className="col-md-5 p-1"
                controlId="floatingName"
                label={hasSelectedOptions ? "" : "Select Lab Tests"}
              >
                <Select
                  
                  isMulti
                  name="labTests"
                  options={HospitalLabList}
                  className="basic-multi-select"
                  classNamePrefix=""
                  value={Labtests1}
                  onChange={AddLabTest}
                  styles={customStyles}
                  placeholder=""
                />
              </FloatingLabel> */}
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
                  AddRefPatient(e);
                }}
              >
                Submit
              </Button>
            
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};
