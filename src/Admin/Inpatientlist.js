import axios from "axios";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Barcode from "react-barcode";
import { Table, Modal, ProgressBar, Button, Form, Card } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CiBarcode } from "react-icons/ci";

import { useReactToPrint } from "react-to-print";
import { GrView } from "react-icons/gr";
import moment from "moment";
import { FaPlus } from "react-icons/fa";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import { AiFillFileExcel } from "react-icons/ai";
import { FaUserMd } from "react-icons/fa";

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
  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const [show7, setShow7] = useState(false);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  const [show8, setShow8] = useState(false);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);

  const [AdmissionForm, setAdmissionForm] = useState("");
  const [show9, setShow9] = useState(false);
  const handleClose9 = () => setShow9(false);
  const handleShow9 = () => setShow9(true);

  const [PatientDetailsView, setPatientDetailsView] = useState("");
  const [show11, setShow11] = useState(false);
  const handleClose11 = () => setShow11(false);
  const handleShow11 = () => setShow11(true);

  const [show12, setShow12] = useState(false);
  const handleClose12 = () => setShow12(false);
  const handleShow12 = () => setShow12(true);

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
          setmedicinesTaking("");
          setpatientAllergies([]);
          alert("IPD Patient Register Successfully.!");
          getipdpatients();
          handleClose2();
        }
      }
    } catch (error) {
      console.log(error.response.data.error);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [data, setdata] = useState([]);
  const getipdpatients = () => {
    axios
      .get("http://localhost:8521/api/user/getPatientList")
      .then(function (response) {
        setdata(
          response.data.UsersInfo?.filter(
            (val) => val?.registrationType === "IPD"
          )
        );
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
        setDoctors(
          response.data.DoctorsInfo?.filter(
            (data) => data.DoctorType === "hospital"
          )
        );
      })
      .catch(function (error) {
        console.log(error);
        setDoctors(error.response.data.DoctorsInfo);
      });
  };

  useEffect(() => {
    getipdpatients();
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
        getipdpatients();
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
        getipdpatients();
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

  const componentRef2 = useRef();
  const handlePrint2 = useReactToPrint({
    content: () => componentRef2.current,
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
          doctorsId: selDoc,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose7();
        setselCause("");
        setselDoc("");
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const dobString = AdmissionForm?.DOB;
  const dob = new Date(dobString);
  const currentDate = new Date();
  const differenceMs = currentDate - dob;
  const ageYears = Math.floor(differenceMs / (1000 * 60 * 60 * 24 * 365.25));

  let ageOutput;
  if (ageYears < 1) {
    const ageMonths = Math.floor(ageYears * 12);
    ageOutput = `${ageMonths} months`;
  } else {
    ageOutput = `${ageYears} years`;
  }

  // Add Cause
  const [CauseName, setCauseName] = useState("");
  const AddpatientCause = async () => {
    if (!CauseName) {
      alert("Please Enter Patient Cause");
    }
    try {
      const config = {
        url: "/addcause/" + PatientDetailsView?._id,
        method: "put",
        baseURL: "http://localhost:8521/api/user",
        headers: { "content-type": "application/json" },
        data: {
          CauseName: CauseName,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose11();
        getipdpatients();
        setCauseName("");
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const DeleteCause = async (id) => {
    try {
      const config = {
        url: "/deletecause/" + PatientDetailsView?._id,
        method: "put",
        baseURL: "http://localhost:8521/api/user",
        headers: { "content-type": "application/json" },
        data: {
          causeid: id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getipdpatients();
        handleClose12();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = data.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      settableFilter([...filterTable]);
    } else {
      setSearch(e.target.value);
      setdata([...data]);
    }
  };

  const exportType = "xls";

  const [fileName, setfileName] = useState("IPD-Patient-List");

  const ExportToExcel = () => {
    if (fileName) {
      if (data.length != 0) {
        exportFromJSON({ data, fileName, exportType });
        // setfileName("");
      } else {
        alert("There is no data to export");
        // setfileName("");
      }
    } else {
      alert("Enter file name to export");
    }
  };

  console.log("data", data);

  return (
    <div>
      <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
        In-Patient List
      </h6>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        <input
          placeholder="Search"
          style={{
            padding: "5px 10px",
            border: "1px solid #20958c",
            borderRadius: "0px",
          }}
          onChange={handleFilter}
        />
        <button
          style={{
            backgroundColor: "#20958c",
            color: "white",
            border: "none",
            fontSize: "12px",
            borderRadius: "4px",
          }}
          onClick={ExportToExcel}
        >
          EXPORT <AiFillFileExcel />
        </button>
        <div className="d-flex gap-2">
          <AiOutlinePlusCircle
            className="AddIcon1"
            onClick={() => handleShow2()}
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
            <Barcode value={ViewBarcode?.PatientId} width={2} height={50} />
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
            style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
          >
            Select Cause
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Select
            value={selCause}
            onChange={(e) => setselCause(e.target.value)}
          >
            <option>select cause</option>
            {ViewCause?.cause?.map((item) => {
              return <option value={item?._id}>{item?.CauseName}</option>;
            })}
          </Form.Select>
          <br />
          <Form.Label
            style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
          >
            Select Doctor
            <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Select
            value={selDoc}
            onChange={(e) => setselDoc(e.target.value)}
          >
            <option>select Doctor</option>
            {Doctors?.map((item, i) => {
              return (
                <option
                  value={item?._id}
                >{`${item?.Firstname} ${item?.Lastname}`}</option>
              );
            })}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose7}>
            Close
          </Button>
          <Button variant="primary" onClick={AssignDoctor}>
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
              {ViewCause?.assigndocts?.map((item, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>jskdj</td>
                    <td>{`${item?.doctorsId?.Firstname} ${item?.doctorsId?.Lastname}`}</td>
                    <td>{item?.doctorsId?.DoctorId}</td>
                    <td>{item?.doctorsId?.Designation}</td>
                    <td>{moment(item?.createdAt).format("DD-MM-YYYY")}</td>
                  </tr>
                );
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

      <div style={{ overflow: "hidden", overflowX: "scroll" }}>
        <Table responsive="md" style={{ marginTop: "1%" }} bordered>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Sl No.</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Sex</th>
              <th>Address</th>
              <th>D.O.B</th>
              <th>Bar-Code</th>
              <th>Add-Cause</th>
              <th>Admission Form</th>
              <th>Visitors</th>
              <th>Consent Forms</th>
              <th>Patient Forms</th>
              <th>Assign Doctor</th>
              <th>Action</th>
              <th>Read More</th>
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, index) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            alt="profile-img"
                            src={`http://localhost:8521/PatientREG/${item?.profilepic}`}
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                          />
                          {item?.PatientId}
                        </td>
                        <td>{`${item?.Firstname} ${item?.Lastname}`}</td>
                        <td>{item?.PhoneNumber}</td>
                        <td>{item?.Gender}</td>
                        <td>{item?.Address1}</td>
                        <td>
                          <div style={{ width: "80px", fontWeight: "bold" }}>
                            {item?.DOB}
                          </div>
                        </td>
                        <td>
                          <CiBarcode
                            style={{ cursor: "pointer", fontSize: "35px" }}
                            onClick={() => handleShow10(item)}
                          />
                        </td>
                        <td>
                          <Button
                            onClick={() => {
                              handleShow11();
                              setPatientDetailsView(item);
                            }}
                          >
                            <FaPlus /> Cause{" "}
                          </Button>
                          <div
                            style={{
                              backgroundColor: "#20958c",
                              padding: "5px",
                              marginTop: "14px",
                              borderRadius: "6px",
                            }}
                          >
                            <GrView
                              style={{
                                cursor: "pointer",
                                fontSize: "28px",
                                color: "white",
                              }}
                              onClick={() => {
                                handleShow12();
                                setPatientDetailsView(item);
                              }}
                            />
                          </div>
                        </td>
                        <td>
                          <Button
                            onClick={() => {
                              handleShow9();
                              setAdmissionForm(item);
                            }}
                          >
                            Admission From
                          </Button>
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
                  })
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, index) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            alt="profile-img"
                            src={`http://localhost:8521/PatientREG/${item?.profilepic}`}
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                          />
                          {item?.PatientId}
                        </td>
                        <td>{`${item?.Firstname} ${item?.Lastname}`}</td>
                        <td>{item?.PhoneNumber}</td>
                        <td>{item?.Gender}</td>
                        <td>{item?.Address1}</td>
                        <td>
                          <div style={{ width: "80px", fontWeight: "bold" }}>
                            {item?.DOB}
                          </div>
                        </td>
                        <td>
                          <CiBarcode
                            style={{ cursor: "pointer", fontSize: "35px" }}
                            onClick={() => handleShow10(item)}
                          />
                        </td>
                        <td>
                          <Button
                            onClick={() => {
                              handleShow11();
                              setPatientDetailsView(item);
                            }}
                          >
                            <FaPlus /> Cause{" "}
                          </Button>
                          <div
                            style={{
                              backgroundColor: "#20958c",
                              padding: "5px",
                              marginTop: "14px",
                              borderRadius: "6px",
                            }}
                          >
                            <GrView
                              style={{
                                cursor: "pointer",
                                fontSize: "28px",
                                color: "white",
                              }}
                              onClick={() => {
                                handleShow12();
                                setPatientDetailsView(item);
                              }}
                            />
                          </div>
                        </td>
                        <td>
                          <Button
                            onClick={() => {
                              handleShow9();
                              setAdmissionForm(item);
                            }}
                          >
                            Admission From
                          </Button>
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
      <div style={{ display: "flex" }}>
        <p style={{ width: "100%", marginTop: "20px" }}>
          Total Count: {data?.length}
        </p>
        <ReactPaginate
          previousLabel={"Back"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
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

      <Modal
        show={show9}
        onHide={handleClose9}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Admission From</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            ref={componentRef2}
            style={{
              padding: "15px",
              overflow: "hidden",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                padding: "5px",
                border: "2px solid #20958C",
                margin: "auto",
                borderRadius: "20px",
              }}
            >
              <div className="d-flex align-items-center mb-1 justify-content-around ps-5 pe-5 pt-4">
                <div className="d-flex align-items-center">
                  <img src="/img/logo.jpg" alt="" style={{ width: "100px" }} />
                </div>
                <div className="text-center">
                  <h4 className="fw-bold" style={{ fontSize: "25px" }}>
                    JANANI MULTISPECIALITY HOSPITAL AND RESEARCH CENTER
                  </h4>
                  <h6 className="fw-bold" style={{ fontSize: "19px" }}>
                    Beside Canara Bank, Jalanagar Main Road, K. K. Colony,
                    Vijaypura-586109
                  </h6>
                  <h6 style={{ fontSize: "16px" }}>
                    Tel:08352-277077 Cell:9606031158, 7090831204
                    Email:jananihospital2018@gmail.com
                  </h6>
                </div>
              </div>
              <div
                className="text-center"
                style={{
                  borderBottom: "1px solid #20958C",
                  width: "100%",
                  textAlign: "center",
                }}
              ></div>
              <div className="text-center mt-1 d-flex justify-content-evenly">
                {" "}
                <h6
                  className="fw-bold mt-4"
                  style={{ color: "#20958C", fontSize: "30px" }}
                >
                  IN_PATIENT ADMISSION FORM
                </h6>
                <Barcode
                  value={`${AdmissionForm?.Firstname} ${AdmissionForm?.Lastname}`}
                  width={1}
                  height={50}
                />
              </div>
              <div
                className="text-center"
                style={{
                  borderBottom: "1px solid #20958C",
                  width: "100%",
                  textAlign: "center",
                }}
              ></div>
              <div
                className="mt-2"
                style={{
                  paddingLeft: "42px",
                  paddingRight: "42px",
                  textAlign: "justify",
                }}
              >
                <Table
                  style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                >
                  <tbody>
                    <tr style={{ border: "1px solid #20958C" }}>
                      <td
                        colSpan={3}
                        style={{
                          width: "33%",
                        }}
                      >
                        Date of admission:
                        {AdmissionForm?.AdmitDate}
                        <br />
                        ML Case :
                      </td>
                      <td
                        colSpan={3}
                        style={{
                          width: "33%",
                        }}
                      >
                        IP No : <br />
                        MLC No :
                      </td>
                    </tr>
                    <tr style={{ border: "1px solid #20958C" }}>
                      <td
                        colSpan={3}
                        style={{
                          width: "33%",
                        }}
                      >
                        UHID No.: {AdmissionForm?.PatientId}
                        <br />
                        Pateint Name : {AdmissionForm?.Firstname}{" "}
                        {AdmissionForm?.Lastname}
                        <br />
                        Address : {AdmissionForm?.Address1}
                        <br />
                        Occupation : {AdmissionForm?.Designation}
                        <br />
                        Mobile No. : +91 {AdmissionForm?.PhoneNumber}
                        <br />
                        Relative Name:
                        <br />
                        Name & Relationship :<br />
                        Ref. Dr. : <br />
                        Contact No. : +91 {AdmissionForm?.PhoneNumber}
                      </td>
                      <td
                        colSpan={3}
                        style={{
                          width: "33%",
                        }}
                      >
                        Date of Birth : {AdmissionForm?.DOB}
                        <br />
                        Sex: {AdmissionForm?.Gender} / Age : {ageOutput}
                        <br />
                        Marital Status : {AdmissionForm?.MaritalStatus}
                        <br />
                        Phone No. : {AdmissionForm?.PhoneNumber}
                        <br />
                        Blood Group : 0<br />
                        <br />
                        Certificate No. :<br />
                        Consultant : Dr. Hampanagouda N. Patil Gyneac. & Obst.
                        <br />
                      </td>
                    </tr>
                    <tr style={{ border: "1px solid #20958C" }}>
                      <td
                        colSpan={3}
                        style={{
                          width: "33%",
                        }}
                      >
                        Signature of the Attendant :
                      </td>
                      <td
                        colSpan={3}
                        style={{
                          width: "33%",
                        }}
                      >
                        Signature of the Patient :
                      </td>
                    </tr>
                    <tr style={{ border: "1px solid #20958C" }}>
                      <td
                        colSpan={1}
                        style={{
                          width: "33%",
                          padding: "5px",
                          border: "1px solid #20958C",
                        }}
                      >
                        <div
                          style={{
                            border: "1px solid #20958C",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <br />
                          Provisional / Admission Diagnosis
                          <br />
                          <br />
                        </div>
                      </td>
                      <td
                        colSpan={5}
                        style={{
                          width: "33%",
                          padding: "3px",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              border: "1px solid #20958C",
                              marginBottom: "1px",
                            }}
                          >
                            <br />
                          </div>
                          <div
                            style={{
                              border: "1px solid #20958C",
                              marginBottom: "1px",
                            }}
                          >
                            <br />
                          </div>
                          <div style={{ border: "1px solid #20958C" }}>
                            <br />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ border: "1px solid #20958C" }}>
                      <td
                        colSpan={1}
                        style={{
                          width: "33%",
                          padding: "5px",
                          border: "1px solid #20958C",
                        }}
                      >
                        <div
                          style={{
                            border: "1px solid #20958C",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <br />
                          Secondary Diagnosis And Compllcation
                          <br />
                          <br />
                        </div>
                      </td>
                      <td
                        colSpan={5}
                        style={{
                          width: "33%",
                          padding: "3px",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              border: "1px solid #20958C",
                              marginBottom: "1px",
                            }}
                          >
                            <br />
                          </div>
                          <div
                            style={{
                              border: "1px solid #20958C",
                              marginBottom: "1px",
                            }}
                          >
                            <br />
                          </div>
                          <div style={{ border: "1px solid #20958C" }}>
                            <br />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ border: "1px solid #20958C" }}>
                      <td
                        colSpan={1}
                        style={{
                          width: "33%",
                          padding: "5px",
                          border: "1px solid #20958C",
                        }}
                      >
                        <div
                          style={{
                            border: "1px solid #20958C",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <br />
                          Operative Procedures
                          <br />
                          <br />
                        </div>
                      </td>
                      <td
                        colSpan={5}
                        style={{
                          width: "33%",
                          padding: "3px",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              border: "1px solid #20958C",
                              marginBottom: "1px",
                            }}
                          >
                            <br />
                          </div>
                          <div
                            style={{
                              border: "1px solid #20958C",
                              marginBottom: "1px",
                            }}
                          >
                            <br />
                          </div>
                          <div style={{ border: "1px solid #20958C" }}>
                            <br />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ border: "1px solid #20958C" }}>
                      <td
                        colSpan={1}
                        style={{
                          width: "33%",
                          padding: "5px",
                          border: "1px solid #20958C",
                        }}
                      >
                        <div
                          style={{
                            border: "1px solid #20958C",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          Date & Time Discharge
                        </div>
                      </td>
                      <td
                        colSpan={5}
                        style={{
                          width: "33%",
                          padding: "3px",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              border: "1px solid #20958C",
                              marginBottom: "1px",
                            }}
                          >
                            <br />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ border: "1px solid #20958C" }}>
                      <td
                        colSpan={1}
                        style={{
                          width: "33%",
                          padding: "5px",
                          border: "1px solid #20958C",
                        }}
                      >
                        <div
                          style={{
                            border: "1px solid #20958C",
                            paddingTop: "11px",
                            paddingBottom: "11px",
                          }}
                        >
                          Outcome
                        </div>
                      </td>
                      <td
                        colSpan={5}
                        style={{
                          width: "33%",
                          padding: "3px",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              border: "1px solid #20958C",
                              marginBottom: "1px",
                            }}
                          >
                            <br />
                          </div>
                          <div
                            style={{
                              border: "1px solid #20958C",
                              marginBottom: "1px",
                            }}
                          >
                            <br />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ border: "1px solid #20958C" }}>
                      <td
                        colSpan={1}
                        style={{
                          width: "33%",
                          padding: "5px",
                          border: "1px solid #20958C",
                        }}
                      >
                        <div
                          style={{
                            border: "1px solid #20958C",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          In Case of Death Cause &<br />
                          Time of Death
                        </div>
                      </td>
                      <td
                        colSpan={5}
                        style={{
                          width: "33%",
                          padding: "3px",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              border: "1px solid #20958C",
                              marginBottom: "1px",
                            }}
                          >
                            <br />
                          </div>
                          <div
                            style={{
                              border: "1px solid #20958C",
                              marginBottom: "1px",
                            }}
                          >
                            <br />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ border: "1px solid #20958C" }}>
                      <td
                        colSpan={1}
                        style={{
                          width: "33%",
                          padding: "5px",
                          border: "1px solid #20958C",
                        }}
                      >
                        <div
                          style={{
                            border: "1px solid #20958C",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          Autopsy : Yes / No
                        </div>
                      </td>
                      <td
                        colSpan={5}
                        style={{
                          width: "33%",
                          padding: "3px",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              border: "1px solid #20958C",
                              marginBottom: "1px",
                            }}
                          >
                            <br />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ border: "1px solid #20958C" }}>
                      <td
                        colSpan={1}
                        style={{
                          width: "33%",
                          padding: "5px",
                          border: "1px solid #20958C",
                        }}
                      >
                        <div
                          style={{
                            border: "1px solid #20958C",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          Signature of Unit Head
                        </div>
                      </td>
                      <td
                        colSpan={5}
                        style={{
                          width: "33%",
                          padding: "3px",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              border: "1px solid #20958C",
                              marginBottom: "1px",
                            }}
                          >
                            <br />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose9}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePrint2}>
            Print
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show11} onHide={handleClose11}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add{" "}
            <span style={{ color: "red" }}>
              "
              {`${PatientDetailsView?.Firstname} ${PatientDetailsView?.Lastname}`}
              "
            </span>{" "}
            Causes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  color: "white",
                }}
              >
                Patient Cause
                <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                onChange={(e) => setCauseName(e.target.value)}
                type="text"
                placeholder="Cause..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose11}>
            Close
          </Button>
          <Button variant="primary" onClick={() => AddpatientCause()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show12} onHide={handleClose12}>
        <Modal.Header closeButton>
          <Modal.Title>
            Edit{" "}
            <span style={{ color: "red" }}>
              "
              {`${PatientDetailsView?.Firstname} ${PatientDetailsView?.Lastname}`}
              " S
            </span>{" "}
            Causes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ padding: "5px", backgroundColor: "white" }}>
            <Table bordered>
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>Cause Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {PatientDetailsView?.cause?.map((item, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item?.CauseName}</td>
                      <td>
                        <div className="d-flex gap-3">
                          <MdDelete
                            onClick={() => {
                              DeleteCause(item?._id);
                            }}
                            style={{
                              color: "red",
                              cursor: "pointer",
                              fontSize: "18px",
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose12}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
