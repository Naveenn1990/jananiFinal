import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Barcode from "react-barcode";
import { Table, Modal, ProgressBar, Button } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { MdEdit } from "react-icons/md";
import { CiBarcode } from "react-icons/ci";
import { useReactToPrint } from "react-to-print";

export default function Outpatientlist() {
  const [View, setView] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = (item) => {
    setShow3(true);
    setViewBarcode(item);
  };
  const [ViewBarcode, setViewBarcode] = useState({});
  const [show10, setShow10] = useState(false);
  const handleClose10 = () => setShow10(false);
  const handleShow10 = (item) => {
    setShow10(true);
    setViewBarcode(item);
  };


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
  const [ConsultationFee, setConsultationFee] = useState();

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
        formdata.set("ConsultationFee", ConsultationFee);
        formdata.set("ConfirmPassword", conpassword);
        formdata.set("registrationType", "OPD");
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
        // handle success
        setcategory(response.data.UsersInfo);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  console.log("category", category);

  useEffect(() => {
    getcategory();
  }, []);
  const createPDF = async () => {
    // dynamic image is also adding in the PDF
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"), {
      useCORS: true,
    });

    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);

    // Calculate the scaling factor to fit the image on A4 paper
    const scaleFactor = pdf.internal.pageSize.getWidth() / imgProperties.width;

    // Calculate the height after scaling
    const pdfHeight = imgProperties.height * scaleFactor;

    // Add the image to PDF with the calculated dimensions
    pdf.addImage(img, "PNG", 0, 0, pdf.internal.pageSize.getWidth(), pdfHeight);

    // Save the PDF
    pdf.save("ServiceInvoice.pdf");
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
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
          Out-Patient List
        </h6>
        <AiOutlinePlusCircle
          className="AddIcon1"
          onClick={() => handleShow2(true)}
        />
        <input
          placeholder="Search Out-Patient List"
          style={{
            padding: "5px 10px",
            border: "1px solid #20958c",
            borderRadius: "0px",
          }}
        />
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Patient Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
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
          <Modal.Title>Add Out-Patient</Modal.Title>
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
              <h6 style={{ color: "white" }}>Consulation Fee</h6>

              <div className="row">
                <div className="col-lg-6">
                  <input
                    placeholder="Consulation Fee"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "2%",
                    }}
                    onChange={(e) => setConsultationFee(e.target.value)}
                  ></input>
                </div>

                

                
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

      <Modal size="lg" show={show3} onHide={handleClose3}>
        <Modal.Header>
          <Modal.Title>Invoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            id="pdf"
            style={{ padding: "15px"}}
          >
            <div
              style={{
                padding: "5px",
                border: "2px solid #20958C",
                width: "733px",
                margin: "auto",
                borderRadius: "7px",
                height: "530px",
                backgroundColor: "white",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex align-items-center mb-1 justify-content-around ps-5 pe-5 pt-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="/Images/logo.jpg"
                          alt=""
                          style={{ width: "80px" }}
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="fw-bold" style={{ fontSize: "16px" }}>
                          JANANI MULTISPECIALITY HOSPITAL AND RESEARCH CENTER
                        </h4>
                        <h6 className="fw-bold" style={{ fontSize: "14px" }}>
                          Beside Canara Bank, Jalanagar Main Road, K. K. Colony,
                          Vijaypura-586109
                        </h6>
                        <h6 style={{ fontSize: "14px" }}>
                          Tel:08352-277077 Cell:9606031158, 7090831204
                          Email:jananihospital2018@gmail.com
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div
                      className="text-center"
                      style={{
                        borderBottom: "1px solid #20958C",
                        width: "100%",
                        textAlign: "center",
                      }}
                    ></div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                      <div className="text-center mt-1 d-flex align-items-center" >
                        {" "}
                        <h6
                          className="fw-bold mt-2"
                          style={{
                            color: "#20958C",
                            fontSize: "20px",
                            
                          }}
                        >
                          RECIEPT/ PATIENT COPY
                        </h6>
                      </div>
                      <div>
                        <Barcode
                          value={`${View?.Firstname} ${View?.Lastname}`}
                          width={1}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-12"
                    style={{ border: "1px solid #20958C" }}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <p style={{ fontSize: "14px", marginBottom: "unset" }}>
                          <span style={{color:"#20958C",fontWeight:"600"}}>UHID No.</span>: {View?.PatientId}
                        </p>
                        <p style={{ fontSize: "14px", marginBottom: "unset" }}>
                        <span style={{color:"#20958C",fontWeight:"600"}}>PT. NAME</span>  : {View?.Firstname}
                        </p>
                        <p style={{ fontSize: "14px", marginBottom: "unset" }}>
                        <span style={{color:"#20958C",fontWeight:"600"}}>ADDRESS</span> : {View?.Address1}
                        </p>
                        
                      </div>
                      <div className="col-md-6">
                        <p style={{ fontSize: "14px", marginBottom: "unset" }}>
                        <span style={{color:"#20958C",fontWeight:"600"}}>Phone No</span> : {View?.PhoneNumber}
                        </p>
                        <p style={{ fontSize: "14px", marginBottom: "unset" }}>
                        <span style={{color:"#20958C",fontWeight:"600"}}>SEX</span> : {View?.Gender}
                        </p>
                        <p style={{ fontSize: "14px", marginBottom: "unset" }}>
                        <span style={{color:"#20958C",fontWeight:"600"}}>DOB</span> : {View?.DOB}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 mt-3">
                    <div className="row">
                      <div
                        className="col-md-2"
                        style={{ border: "1px solid #20958C" }}
                      >
                        SL.No
                      </div>
                      <div
                        className="col-md-8"
                        style={{ border: "1px solid #20958C" }}
                      >
                        Description
                      </div>
                      <div
                        className="col-md-2"
                        style={{ border: "1px solid #20958C" }}
                      >
                        Amount
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col-md-2"
                        style={{ border: "1px solid #20958C" }}
                      >
                        1.
                      </div>
                      <div
                        className="col-md-8"
                        style={{ border: "1px solid #20958C" }}
                      >
                        Initial Consultation
                      </div>
                      <div
                        className="col-md-2"
                        style={{ border: "1px solid #20958C" }}
                      >
                        ₹ {View?.ConsultationFee}/-
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-2">
                    <div
                      className="text-center"
                      style={{
                        borderBottom: "1px solid #20958C",
                        width: "100%",
                        textAlign: "center",
                      }}
                    ></div>
                  </div>
                  <div className="col-md-12 ">
                    <div className="row">
                      <div className="col-md-10">Total</div>
                      <div className="col-md-2">₹ {View?.ConsultationFee}/-</div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-2">
                    <div
                      className="text-center"
                      style={{
                        borderBottom: "1px solid #20958C",
                        width: "100%",
                        textAlign: "center",
                      }}
                    ></div>
                  </div>
                  <div className="col-md-12 ">
                    <div className="row">
                      <div className="col-md-6">
                        <p style={{ fontSize: "11px", marginBottom: "unset" }}>
                          Paid Amount : ( ₹ {View?.ConsultationFee}/-)
                        </p>
                        <p style={{ fontSize: "12px", marginBottom: "unset" }}>
                          *This is a Computerised Bill/Receipt
                        </p>
                        <p style={{ fontSize: "12px", marginBottom: "unset" }}>
                          Wish you speedy Recovery....
                        </p>
                      </div>
                      <div className="col-md-6 text-end">
                        <p style={{ fontSize: "11px", marginBottom: "unset" }}>
                          For JANANI MULTISPECIALITY HOSPITAL AND RESEARCH
                          CENTRE
                        </p>
                        <p style={{ fontSize: "12px", marginBottom: "unset" }}>
                          BHIMU 19-04-2024
                        </p>
                        <p style={{ fontSize: "12px", marginBottom: "unset" }}>
                          Authorised Signatory *
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              onClick={handleClose3}
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
              onClick={createPDF}
            >
              Download
            </button>
          </div>
        </Modal.Footer>
      </Modal>
      <div>
      <Table responsive="md" style={{ marginTop: "1%" }}>
        <thead>
          <tr style={{ fontSize: "15px", textAlign: "center" }}>
            <th>Profile</th>
            <th>Patient-Id</th>

            <th> Name</th>
            <th>Sex</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Age</th>
            <th>Reciept</th>
            <th>Bar-Code</th>
            <th>Action</th>
            <th>Read More</th>
          </tr>
        </thead>
        <tbody>
          {category
            ?.filter((val) => val?.registrationType === "OPD")
            ?.map((item) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>
                    <img
                      alt=""
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
                    <button
                      style={{
                        padding: "6px",
                        border: "1px solid white",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "0px",
                      }}
                      onClick={()=>{handleShow3();setView(item)}}
                    >
                      Consultaion Reciept
                    </button>
                  </td>
                  <td>
                      <CiBarcode
                        style={{ cursor: "pointer", fontSize: "35px" }}
                        onClick={() => handleShow10(item)}
                      />
                    </td>
                  <td>
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
                  <td>
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "0px",
                      }}
                      onClick={() => setShow(true)}
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
    </div>
  );
}
