import axios from "axios";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Barcode from "react-barcode";
import { Table, Modal, ProgressBar, Button, Form, Card } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CiBarcode } from "react-icons/ci";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useReactToPrint } from "react-to-print";
import { GrView } from "react-icons/gr";
import moment from "moment";
export default function Inpatientlist() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ViewBarcode, setViewBarcode] = useState({});
  const [show10, setShow10] = useState(false);
  const handleClose10 = () => setShow10(false);
  const handleShow10 = (item) => {
    setShow10(true);
    setViewBarcode(item);
  };

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [VisitingCard, setVisitingCard] = useState({});
  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const [ViewCause, setViewCause] = useState({});
  console.log("ViewCause", ViewCause);
  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const [show7, setShow7] = useState(false);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  const [show8, setShow8] = useState(false);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);

  console.log("VisitingCard", VisitingCard);

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
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, should be total 8 character!"
      );
      return false;
    }
  }

  const [medications, setmedications] = useState(false);
  const [medicinesTaking, setmedicinesTaking] = useState();
  let formdata = new FormData();
  const [patientfirstname, setpatientfirstname] = useState("");
  const [patientlastname, setpatientlastname] = useState("");
  const [gender, setgender] = useState("");
  const [DOB, setDOB] = useState("");
  const [ProfilePic, setProfilePic] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState();
  const [alternatePhoneNumber, setalternatePhoneNumber] = useState();
  const [Address, setAddress] = useState();
  const [Address1, setAddress1] = useState();
  const [City, setCity] = useState();

  const [State, setState] = useState();
  const [Zipcode, setZipcode] = useState();
  const [Marital, setMarital] = useState();

  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");

  const [MaritalStatus, setMaritalStatus] = useState("");
  const [PatientAge18, setPatientAge18] = useState("");
  const [relativeName, setrelativeName] = useState("");
  const [relationWithPatient, setrelationWithPatient] = useState("");
  const [relativePhone, setrelativePhone] = useState("");
  const [AdmitDate, setAdmitDate] = useState("");
  const [followUpsDate, setfollowUpsDate] = useState("");
  const [allergy, setallergy] = useState("");

  const [haveInsurance, sethaveInsurance] = useState("");
  const [insuranceDoc, setinsuranceDoc] = useState("");
  const [insuranceProviderCompany, setinsuranceProviderCompany] = useState("");
  const [insuranceAmt, setinsuranceAmt] = useState("");
  let [patientAllergies, setpatientAllergies] = useState([]);
  const [clickedAddAllergyBtn, setclickedAddAllergyBtn] = useState("");
  const [Aadharcard, setAadharcard] = useState("");
  const [Aadharno, setAadharno] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    try {
      if (
        validatename(patientfirstname) &&
        ValidateEmail(email) &&
        phonenumber(mobileno) &&
        CheckPassword(password)
      ) {
        formdata.set("Firstname", patientfirstname);
        formdata.set("Lastname", patientlastname);
        formdata.set("Gender", gender);
        formdata.set("DOB", DOB);
        formdata.set("profilepic", ProfilePic);
        formdata.set("PhoneNumber", mobileno);
        formdata.set("alternatePhoneNumber", alternatePhoneNumber);
        formdata.set("Email", email);
        formdata.set("Address1", Address);
        formdata.set("Address2", Address1);
        formdata.set("City1", City);
        formdata.set("State1", State);
        formdata.set("Zipcode", Zipcode);
        formdata.set("MaritalStatus", MaritalStatus);
        formdata.set("PatientAge18", PatientAge18);
        formdata.set("relativeName", relativeName);
        formdata.set("relationWithPatient", relationWithPatient);
        formdata.set("relativePhone", relativePhone);
        formdata.set("AdmitDate", AdmitDate);
        formdata.set("followUpsDate", followUpsDate);
        formdata.set("haveInsurance", haveInsurance);
        formdata.set("insuranceDoc", insuranceDoc);
        formdata.set("insuranceProviderCompany", insuranceProviderCompany);
        formdata.set("insuranceAmt", insuranceAmt);
        formdata.set("Password", password);
        formdata.set("ConfirmPassword", conpassword);
        formdata.set("registrationType", "IPD");
        formdata.set("registeredFrom", "staff");
        formdata.set("patientAllergies", patientAllergies);
        formdata.set("takingAnyMedication", medications);
        formdata.set("medicinesTaking", medicinesTaking);
        formdata.set("Aadharcard", Aadharcard);
        formdata.set("Aadharno", Aadharno);
        const config = {
          url: "/user/addPatient",
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "multipart/form-data" },
          data: formdata,
        };
        let res = await axios(config);
        if (res.status === 200) {
          console.log(res.data);
          console.log(res.data.success);
          setmedicinesTaking("");
          setpatientAllergies([]);
          alert("Signup Success");
          getcategory();
          // window.location.assign("/patientPortal");
        }
      }
    } catch (error) {
      console.log(error.response.data.error);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [category, setcategory] = useState([]);

  const getcategory = () => {
    axios
      .get("http://localhost:8521/api/user/getPatientList")
      .then(function (response) {
        setcategory(response.data.UsersInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [Doctors, setDoctors] = useState([]);

  const getDoctors = () => {
    axios
      .get("http://localhost:8521/api/Doctor/getDoctorsList")
      .then(function (response) {
        // handle success
        setDoctors(
          response.data.DoctorsInfo?.filter(
            (data) => data.DoctorType === "hospital"
          )
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setDoctors(error.response.data.DoctorsInfo);
      });
  };

  useEffect(() => {
    getcategory();
    getDoctors();
  }, []);

  useEffect(() => {
    setpatientAllergies(patientAllergies);
    setclickedAddAllergyBtn("");
    setallergy("");
  }, [clickedAddAllergyBtn]);



  const [PatientVisitId, setPatientVisitId] = useState("");
  const [VisitorName, setVisitorName] = useState("");
  const [RelationWithPatient, setRelationWithPatient] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [VisiterAddress, setVisiterAddress] = useState("");
  const phoneNumberPattern = /^\d{10}$/;
  const addVisitor = async () => {
    if (!VisitorName.trim()) {
      return alert("Enter Visiter Name");
    }
    if (!RelationWithPatient) {
      return alert("Enter realtion With Patient");
    }
    if (!MobileNumber.match(phoneNumberPattern)) {
      return alert("Enter valid mobile no");
    }
    if (!VisiterAddress) {
      return alert("Enter Address");
    }

    try {
      const config = {
        url: "/user/patientvisitor",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" }, // Corrected typo here
        data: {
          patientId: PatientVisitId,
          VisitorName: VisitorName,
          RelationWithPatient: RelationWithPatient,
          MobileNumber: MobileNumber,
          VisiterAddress: VisiterAddress,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.message);
        handleClose3();
        getcategory();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  const DeleteVisitor = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this visitor?"
    );
    if (!confirmDelete) {
      return; // If user cancels, exit the function
    }

    try {
      const config = {
        url: "/user/deletepatientvisitor",
        method: "delete",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" }, // Corrected typo here
        data: {
          patientId: PatientVisitId?._id,
          visitorId: id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.message);
        setPatientVisitId(res.data.data);
        getcategory();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };


  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const componentRef1 = useRef();
  const handlePrint1 = useReactToPrint({
    content: () => componentRef1.current,
  });

  const [Selectcause, setSelectcause] = useState({});
  // Assigned Doctors

  const [selCause, setselCause] = useState();
  const [selDoc, setselDoc] = useState();
  const AssignDoctor = async () => {
    try {
      const config = {
        url: "/assigndoctors",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "content-type": "application/json" },
        data: {
          patientId: ViewCause?._id,
          causeId: selCause,
          doctorsId:selDoc,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose7()
        setselCause("")
        setselDoc("")
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };


  console.log("ViewCause",ViewCause);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
        }}
      >
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          In-Patient List
        </h6>
        <div className="d-flex gap-2">
          <AiOutlinePlusCircle
            className="AddIcon1"
            onClick={() => setShow2(true)}
          />
          <input
            placeholder="Search In-Patient List"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
          />
        </div>
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Patient Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row" style={{ color: "white" }}>
            <div className="col-lg-4">
              <img src="/Images/Patient.png" style={{ width: "100%" }} />
              <div style={{ border: "1px solid lightgrey" }}>
                <h6
                  style={{
                    textAlign: "center",
                    padding: "4% 0%",
                    backgroundColor: "lightblue",
                  }}
                >
                  ABOUT PATIENT
                </h6>

                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>NAME</b> : John
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>EmailID</b> : John@gmail.com
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Mobile</b> : 9563256325
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Occupation</b> : Engineer
                </h6>
              </div>
            </div>
            <div className="col-lg-8">
              <div style={{ border: "1px solid lightgrey", padding: "2%" }}>
                <span style={{ fontSize: "14px", textAlign: "justify" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </span>
                <hr></hr>
                <h6>General Report</h6>
                <hr></hr>
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  Heart Beat
                </span>
                <ProgressBar
                  variant="success"
                  style={{ height: "6px" }}
                  now={40}
                />

                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  Blood Pressure
                </span>
                <ProgressBar
                  variant="info"
                  style={{ height: "6px" }}
                  now={60}
                />

                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  Sugar
                </span>
                <ProgressBar
                  variant="warning"
                  style={{ height: "6px" }}
                  now={60}
                />

                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  Haemoglobin
                </span>
                <ProgressBar
                  variant="danger"
                  style={{ height: "6px" }}
                  now={60}
                />
              </div>
            </div>
          </div>
          <h6 style={{ marginTop: "4%" }}>Past Visit History</h6>
          <Table responsive="md" style={{ marginTop: "1%" }}>
            <thead>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                <th>Date</th>
                <th>Doctor</th>
                <th> Treatment</th>
                <th>Charges</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                <td>06/10/1987</td>

                <td>Devid</td>
                <td>Check Up</td>
                <td>500</td>
                <td>
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <MdEdit style={{ color: "#20958c", marginRight: "1%" }} />
                    <AiFillDelete style={{ color: "red" }} />
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        {/* <Modal.Footer>
          <div style={{ display: "flex" }}>
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                marginRight: "20px",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow(false);
              }}
            >
              CANCEL
            </button>

            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow(false);
                alert("Doctor Added");
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer> */}
      </Modal>

      <Modal size="lg" show={show2} onHide={handleClose2}>
        <Modal.Header>
          <Modal.Title>Add In-Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 style={{ color: "white", margin: "0% 2% 2% 2%" }}>
            Personal Information
          </h6>
          <div
            className="row"
            style={{
              border: "1px solid white",
              padding: "2% 0%",
              margin: "0% 1%",
              borderRadius: "0px",
            }}
          >
            <div className="col-lg-6">
              <input
                placeholder="First Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setpatientfirstname(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Last Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setpatientlastname(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <select
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  marginTop: "4%",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setgender(e.target.value)}
              >
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Contact Number"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  marginTop: "4%",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setmobileno(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Alternate Phone Number"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  marginTop: "4%",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setalternatePhoneNumber(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Email"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  marginTop: "4%",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setemail(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-5">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Date of Birth :
                  </h6>
                </div>
                <div className="col-lg-7">
                  {" "}
                  <input
                    type="date"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    onChange={(e) => setDOB(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-4">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Profile Pic :
                  </h6>
                </div>
                <div className="col-lg-8">
                  {" "}
                  <input
                    type="file"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    onChange={(e) => setProfilePic(e.target.files[0])}
                  ></input>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Address:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <input
                    type="text"
                    placeholder="Street Address"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setAddress(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Street Address Line 2"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setAddress1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-3">
              <input
                placeholder="City"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "8%",
                }}
                onChange={(e) => setCity(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-3">
              <input
                placeholder="
                State / Province"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "8%",
                }}
                onChange={(e) => setState(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Postal / Zip Code"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setZipcode(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Password"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setpassword(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="ConfirmPassword"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setconpassword(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Marrital Status:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <select
                    type="text"
                    placeholder="Street Address"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setMaritalStatus(e.target.value)}
                  >
                    <option value="">Select Option</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Age is 18+:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <select
                    type="text"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setPatientAge18(e.target.value)}
                  >
                    <option value="">Select Option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Aadhar Card:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <input
                    type="file"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setAadharcard(e.target.files[0])}
                  ></input>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Aadhar No:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setAadharno(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "0px",
                borderTop: "1px solid #ebebeb",
                // borderBottom: "1px solid #ebebeb",
                // backgroundColor: "#ebebeb",
                marginTop: "4%",
              }}
            >
              <h6 style={{ color: "white" }}>Relative / next to kin*</h6>

              <div className="row">
                <div className="col-lg-6">
                  <input
                    placeholder="Relation with patient"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "2%",
                    }}
                    onChange={(e) => setrelationWithPatient(e.target.value)}
                  ></input>
                </div>

                <div className="col-lg-6">
                  <input
                    placeholder="Relative Name"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "2%",
                    }}
                    onChange={(e) => setrelativeName(e.target.value)}
                  ></input>
                </div>

                <div className="col-lg-6">
                  <input
                    placeholder="Relative Mobileno."
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    onChange={(e) => setrelativePhone(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "0px",
                borderTop: "1px solid #ebebeb",
                // borderBottom: "1px solid #ebebeb",
                // backgroundColor: "#ebebeb",
                marginTop: "4%",
              }}
            >
              <h6 style={{ color: "white" }}>Admission Information</h6>

              <div className="row">
                <div className="col-lg-6">
                  <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-lg-3">
                      <h6 style={{ color: "white" }}>Admission Date: </h6>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="date"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "2%",
                        }}
                        onChange={(e) => setAdmitDate(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-lg-3">
                      <h6 style={{ color: "white" }}>Follow-up Date: </h6>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="date"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "2%",
                        }}
                        onChange={(e) => setfollowUpsDate(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Health Insurance*:
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <select
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        onChange={(e) => sethaveInsurance(e.target.value)}
                      >
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Health Insurance Doc(if available):
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <input
                        type="file"
                        accept="image/*"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        onChange={(e) => setinsuranceDoc(e.target.files[0])}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Health Insurance Provider:
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <input
                        type="test"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        onChange={(e) =>
                          setinsuranceProviderCompany(e.target.value)
                        }
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Health Insurance Amount:
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <input
                        type="Number"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        onChange={(e) => setinsuranceAmt(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>

                {/* <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Accidental Case*:
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <select
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        // onChange={(e) => setAddress(e.target.value)}
                      >
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* <div className="col-lg-6">
              <textarea
                placeholder="Address"
                cols={4}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
              ></textarea>
            </div> */}
          </div>

          {/* <h6 style={{ color: "white", margin: "2%" }}>In case of emergency</h6> */}
          {/* <div
            className="row"
            style={{
              border: "1px solid white",
              padding: "2% 0%",
              margin: "0% 1%",
              borderRadius: "0px",
            }}
          >
            <div className="col-lg-6">
              <input
                placeholder="First Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Last Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Relationship"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  marginTop: "4%",
                  backgroundColor: "#ebebeb",
                }}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Contact Number"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  marginTop: "4%",

                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
              ></input>
            </div>
          </div> */}

          <div
            className="row"
            style={{
              border: "1px solid white",
              padding: "2% 0%",
              margin: "0% 1%",
              borderRadius: "0px",
            }}
          >
            <div className="col-lg-6" style={{ color: "white" }}>
              Taking any medications, currently?
            </div>
            <div className="col-lg-6" style={{ color: "white" }}>
              <div className="row">
                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    checked={medications == true}
                    onChange={() => setmedications(true)}
                  ></input>{" "}
                  Yes
                </div>

                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    checked={medications == false}
                    onChange={() => setmedications(false)}
                  ></input>{" "}
                  No
                </div>
              </div>
            </div>

            {medications ? (
              <>
                <label style={{ color: "white", marginTop: "4%" }}>
                  If yes, please list it here
                </label>
                <div
                  className="col-lg-12"
                  style={{ color: "white", textAlign: "center" }}
                >
                  <textarea
                    cols={6}
                    placeholder="Please list all medications"
                    value={medicinesTaking}
                    onChange={(e) => setmedicinesTaking(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",

                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                    }}
                  ></textarea>
                </div>
              </>
            ) : null}

            <div className="col-lg-6">
              <div
                className="row"
                style={{
                  display: "flex",
                  alignItems: "baseline",
                }}
              >
                <div className="col-lg-3">
                  <h6 style={{ color: "white", marginTop: "6%" }}>
                    Allergies:
                  </h6>
                </div>
                <div className="col-lg-6">
                  {" "}
                  <input
                    type="text"
                    value={allergy}
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setallergy(e.target.value)}
                  ></input>
                </div>
                <div className="col-lg-3">
                  <Button
                    variant="warning"
                    onClick={() => {
                      patientAllergies.push(allergy);
                      // setpatientAllergies(patientAllergies);
                      console.log(patientAllergies);
                      setclickedAddAllergyBtn("clicked");
                    }}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3">
              <Table responsive>
                <thead>
                  <th>S.no.</th>
                  <th>Allergies</th>
                </thead>
                <tbody>
                  {patientAllergies.map((item, i) => {
                    console.log("patientAllergies", patientAllergies);
                    return (
                      <tr>
                        <td>{++i}</td>
                        <td>{item}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: "flex" }}>
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                marginRight: "20px",
                border: "1px solid white",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow2(false);
              }}
            >
              CANCEL
            </button>

            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                border: "1px solid white",
                padding: "4px 10px",
              }}
              onClick={(e) => {
                setShow2(false);
                signup(e);
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal size="md" show={show10} onHide={handleClose10}>
        <Modal.Header>
          <Modal.Title>
            Barcode{" "}
            <span>
              ({ViewBarcode?.Firstname} {ViewBarcode?.Lastname} )
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div ref={componentRef} className="d-flex justify-content-center">
            <Barcode
              value={`${ViewBarcode?.Firstname} ${ViewBarcode?.Lastname}`}
              width={1}
              height={50}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose10}>
            Close
          </Button>

          <Button variant="primary" onClick={handlePrint}>
            print
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Add Visitors </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Visitor Name</Form.Label>
              <Form.Control
                onChange={(e) => setVisitorName(e.target.value)}
                type="text"
                placeholder="enter visitor name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Relation With Patient</Form.Label>
              <Form.Control
                onChange={(e) => setRelationWithPatient(e.target.value)}
                type="text"
                placeholder="enter Relation With Patient"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                onChange={(e) => setMobileNumber(e.target.value)}
                type="number"
                placeholder="enter Mobile Number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={(e) => setVisiterAddress(e.target.value)}
                type="text"
                placeholder="enter Address"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
          <Button variant="primary" onClick={addVisitor}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show4} onHide={handleClose4} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            Visitors List
            <span style={{ color: "red" }}>
              ({PatientVisitId?.Firstname} {PatientVisitId?.Lastname})
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table className="text-center" border>
            <thead>
              <tr>
                <th>SN.</th>
                <th>Visitor Name</th>
                <th>RelationWithPatient</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Card</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {PatientVisitId?.visitor?.map((item, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item?.VisitorName}</td>
                    <td>{item?.RelationWithPatient}</td>
                    <td>{item?.VisiterAddress}</td>
                    <td>{item?.MobileNumber}</td>
                    <td>
                      <GrView
                        onClick={() => {
                          handleShow5();
                          setVisitingCard(item);
                        }}
                        style={{
                          color: "green",
                          cursor: "pointer",
                        }}
                      />
                    </td>
                    <td>
                      <MdDelete
                        style={{
                          cursor: "pointer",
                          color: "red",
                        }}
                        onClick={() => DeleteVisitor(item?._id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show5} onHide={handleClose5}>
        <Modal.Header closeButton>
          <Modal.Title>Visiting card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div ref={componentRef1} style={{ backgroundColor: "white" }}>
            <div className="container">
              <div className="row" style={{ border: "1px solid white" }}>
                <div
                  className="col-md-5"
                  style={{
                    border: "1px solid white",
                    backgroundColor: "white",
                  }}
                >
                  <img
                    src="/Images/logo.png"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
                <div
                  className="col-md-7 p-2 text-center"
                  style={{
                    backgroundColor: "#20958C",
                    borderTopLeftRadius: "50px",
                    borderBottomLeftRadius: "50px",
                  }}
                >
                  <p
                    style={{
                      color: "red",
                      fontSize: "28px",
                      fontWeight: "700",
                    }}
                  >
                    Visitor Card
                  </p>
                  <p style={{ color: "white" }}>
                    <span
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}
                    >
                      {" "}
                      Patient name :{" "}
                    </span>
                    {PatientVisitId?.Firstname} {PatientVisitId?.Lastname}
                  </p>
                  <p style={{ color: "white" }}>
                    <span
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}
                    >
                      Relation with Patient :{" "}
                    </span>
                    {VisitingCard?.RelationWithPatient}
                  </p>
                  <p style={{ color: "white" }}>
                    <span
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}
                    >
                      Visitor Name :{" "}
                    </span>
                    {VisitingCard?.VisitorName}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div ref={componentRef1} className="d-flex justify-content-center">
          <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s', borderRadius: '10px' }} className="mb-2">
      <Card.Header style={{ backgroundColor: '#007bff', color: 'white', textAlign: 'center', borderRadius: '10px 10px 0 0' }}>
        <img src="./Images/logo.png" alt="" width="30" height="30" style={{ marginRight: '5px' }} />
        Janani Hospital
      </Card.Header>
      <Card.Body style={{ backgroundColor: '#f7f7f7' }}>
        <Card.Title style={{ color: '#007bff', marginBottom: '20px', textAlign: 'center' }}>Visitor Card</Card.Title>
        <Card.Text style={{ textAlign: 'left', lineHeight: '1.5' }}>
          <p style={{ marginBottom: '5px' }}><strong>Patient name:</strong> {PatientVisitId?.Firstname} {PatientVisitId?.Lastname}</p>
          <p style={{ marginBottom: '5px' }}><strong>Relation with Patient:</strong> {VisitingCard?.RelationWithPatient}</p>
          <p style={{ marginBottom: '5px' }}><strong>Visitor Name:</strong> {VisitingCard?.VisitorName}</p>
        </Card.Text>
      </Card.Body>
    </Card>
          </div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePrint1}>
            print
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show7} onHide={handleClose7}>
        <Modal.Header closeButton>
          <Modal.Title>ASSIGN DOCTORS</Modal.Title>
        </Modal.Header>
        <Modal.Body>          
          <Form.Label
           style={{ color: "white",fontWeight:"bold",fontSize:"20px" }}
          >Select Cause
          <span style={{ color: "red" }}>*</span></Form.Label>
          <Form.Select
          value={selCause}
          onChange={(e)=>setselCause(e.target.value)}
          >
            <option>select cause</option>
            {ViewCause?.cause?.map((item) => {
              return (
                <option value={item?._id}>
                  {item?.CauseName}
                </option>
              );
            })}
          </Form.Select>
          <br />      
          <Form.Label
           style={{ color: "white",fontWeight:"bold",fontSize:"20px" }}
          >Select Doctor 
          <span style={{ color: "red" }}>*</span></Form.Label>
          <Form.Select
          value={selDoc}
           onChange={(e)=>setselDoc(e.target.value)}
          >
            <option>select Doctor</option>
            {Doctors?.map((item, i) => {
              return (
                <option value={item?._id}>{`${item?.Firstname} ${item?.Lastname}`}</option>
              );
            })}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose7}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={AssignDoctor}
          >
            Assign
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show8} onHide={handleClose8} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>ASSIGN DOCTORS LIST</Modal.Title>
        </Modal.Header>
        <Modal.Body>          
         <Table bordered>
          <thead>
            <tr>
              <th>No.</th>
              <th>Cause Name</th>
              <th>Doctor Name</th>
              <th>Doctor ID</th>
              <th>Designation</th>
              <th>Assign Date</th>
            </tr>
          </thead>
          <tbody>
            {ViewCause?.assigndocts?.map((item,i)=>{
              return(
                <tr>
                <td>{i+1}</td>
                <td>jskdj</td>
                <td>{`${item?.doctorsId?.Firstname} ${item?.doctorsId?.Lastname}`}</td>
                <td>{item?.doctorsId?.DoctorId}</td>
                <td>{item?.doctorsId?.Designation}</td>
                <td>{moment(item?.createdAt).format("DD-MM-YYYY")}</td>
              </tr>
              )
            })}
           
          </tbody>
         </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose8}>
            Close
          </Button>         
        </Modal.Footer>
      </Modal>

      <div style={{ overflowX: "scroll" }}>
        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Profile</th>
              <th>Patient-Id</th>
              <th>Name</th>
              <th>Sex</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Age</th>
              <th>Bar-Code</th>
              <th>Visitors</th>
              <th>Consent Forms</th>
              <th>Patient Forms</th>
              <th>Assign Doctor</th>
              <th>Action</th>
              <th>Read More</th>
            </tr>
          </thead>
          <tbody>
            {category
              ?.filter((val) => val?.registrationType === "IPD")
              ?.map((item) => {
                return (
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>
                      <img
                        alt=""
                        // src="/Images/doctor1.jpg"
                        src={`http://localhost:8521/PatientREG/${item?.profilepic}`}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </td>
                    <td>{item?.PatientId}</td>
                    <td>{item?.Firstname}</td>
                    <td>{item?.Gender}</td>
                    <td>{item?.Address1}</td>
                    <td>{item?.PhoneNumber}</td>
                    <td>{item?.DOB}</td>
                    <td>
                      <CiBarcode
                        style={{ cursor: "pointer", fontSize: "35px" }}
                        onClick={() => handleShow10(item)}
                      />
                    </td>

                    <td>
                      {item?.visitor?.length === 4 ? (
                        <p style={{ color: "red" }}>
                          Four (4) visitors are allowed
                        </p>
                      ) : (
                        <>
                          <button
                            style={{
                              padding: "6px",
                              border: "none",
                              backgroundColor: "#20958c",
                              color: "white",
                              borderRadius: "0px",
                            }}
                            onClick={() => {
                              handleShow3();
                              setPatientVisitId(item?._id);
                            }}
                          >
                            Add Visitors
                          </button>
                        </>
                      )}
                      <br />
                      <button
                        style={{
                          padding: "6px",
                          border: "1px solid white",
                          backgroundColor: "#20958c",
                          color: "white",
                          borderRadius: "0px",
                        }}
                        onClick={() => {
                          handleShow4();
                          setPatientVisitId(item);
                        }}
                      >
                        View Visitors
                      </button>
                      {/* <b
                        style={{ cursor: "pointer" }}
                        className="mt-3"
                        // variant="success"
                        onClick={() => {
                          handleShow4();
                          setPatientVisitId(item);
                        }}
                      >
                        {" "}
                        View Visitors
                      </b> */}
                    </td>
                    <td>
                      <button
                        style={{
                          padding: "6px",
                          border: "none",
                          backgroundColor: "#20958c",
                          color: "white",
                          borderRadius: "0px",
                        }}
                        onClick={() =>
                          navigate(
                            `/admin/InpatientlistConsentForms/${item?._id}`
                          )
                        }
                      >
                        Consent Forms
                      </button>
                    </td>
                    <td>
                      <button
                        style={{
                          padding: "6px",
                          border: "1px solid white",
                          backgroundColor: "#20958c",
                          color: "white",
                          borderRadius: "0px",
                        }}
                        // onClick={() => navigate("/admin/patientform",{state:item})}
                        onClick={() => {
                          handleShow6();
                          setViewCause(item);
                        }}
                      >
                        View Forms
                      </button>
                    </td>
                    {/* <td>
                    <button
                        style={{
                          border: "none",
                          backgroundColor: "#20958c",
                          color: "white",
                          borderRadius: "0px",
                        }}
                        onClick={handleShow7}
                      >
                        Assign
                      </button>

                    </td> */}
                    <td>
                      <button
                        style={{
                          padding: "6px",
                          border: "none",
                          backgroundColor: "#20958c",
                          color: "white",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          handleShow7();
                          setViewCause(item);
                        }}
                      >
                        Assign
                      </button>
                      <button
                      className="mt-2"
                        style={{
                          padding: "6px",
                          border: "none",
                          backgroundColor: "#20958c",
                          color: "white",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          handleShow8();
                          setViewCause(item);
                        }}
                      >
                        View List
                      </button>
                     
                    </td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <MdEdit
                          style={{ color: "#20958c", marginRight: "1%" }}
                        />
                        <AiFillDelete style={{ color: "red" }} />
                      </div>
                    </td>
                    <td>
                    <button
                        style={{
                          border: "none",
                          backgroundColor: "#20958c",
                          color: "white",
                          borderRadius: "0px",
                        }}
                        onClick={() =>
                          navigate(`/admin/patientdetails/${item?._id}`)
                        }
                      >
                        Read More
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
      <Modal show={show6} onHide={handleClose6}>
        <Modal.Header closeButton>
          <Modal.Title>
            {`${ViewCause?.Firstname} ${ViewCause?.Lastname}`} Causes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            Select cause<span>*</span>
          </label>
          <Form.Select onChange={(e) => setSelectcause(e.target.value)}>
            <option>select cause</option>
            {ViewCause?.cause?.map((item, i) => {
              return (
                <option value={JSON.stringify(item)}>{item?.CauseName}</option>
              );
            })}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              navigate("/admin/patientform", {
                state: {
                  item: ViewCause,
                  selectCause: JSON.parse(Selectcause),
                },
              })
            }
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
