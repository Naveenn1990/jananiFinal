import axios from "axios";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Barcode from "react-barcode";
import { Table, Modal, Button, Form } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { CiBarcode } from "react-icons/ci";
import { useReactToPrint } from "react-to-print";
import { GrView } from "react-icons/gr";
import moment from "moment";
import { FaBed, FaPlus } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { LuView } from "react-icons/lu";
export default function Inpatientlist() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [IpdCause, setIpdCause] = useState("");
  const [ShowReferDetails, setShowReferDetails] = useState(false);

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

  const [show13, setShow13] = useState(false);
  const handleClose13 = () => setShow13(false);
  const handleShow13 = () => setShow13(true);

  const [show14, setShow14] = useState(false);
  const handleClose14 = () => setShow14(false);
  const handleShow14 = () => setShow14(true);

  const [show15, setShow15] = useState(false);

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
  const [clickedAddAllergyBtn, setclickedAddAllergyBtn] = useState("");
  const [Aadharcard, setAadharcard] = useState("");
  const [Aadharno, setAadharno] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [patientAllergies, setpatientAllergies] = useState([]);

  //Regex
  const namePattern = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
  const relativepattern = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
  const mobilePattern = /^[0-9]{10}$/;
  const pincodePattern = /^[0-9]{6}$/;
  const aadharnoPattern = /^[0-9]{12}$/;
  const emailPattern = /^[^\s@]+@gmail\.com$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const signup = async (e) => {
    e.preventDefault();
    if (!patientfirstname) {
      return alert("Enter your first name");
    } else if (!namePattern.test(patientfirstname)) {
      return alert("Enter a valid first name (letters only)");
    }
    if (!patientlastname) {
      return alert("Enter your last name");
    } else if (!namePattern.test(patientlastname)) {
      return alert("Enter a valid last name  letters only)");
    }
    if (!gender) {
      return alert("Select Your gender..!");
    }
    if (!mobileno) {
      return alert("Enter mobile number..!");
    } else if (!mobilePattern.test(mobileno)) {
      return alert("Enter a valid 10-digit mobile number");
    }
    if (!alternatePhoneNumber) {
      return alert("Enter alternate mobile number..!");
    } else if (!mobilePattern.test(alternatePhoneNumber)) {
      return alert("Enter a valid 10-digit mobile number");
    }
    if (!email) {
      return alert("Enter Email Id");
    } else if (!emailPattern.test(email)) {
      return alert("Enter a valid Gmail address (e.g., example@gmail.com)");
    }
    if (!DOB) {
      return alert("Select Birth date and Year.!");
    }
    if (!Address) {
      return alert("Enter Street Address..!");
    }
    if (!City) {
      return alert("Enter City name..!");
    } else if (!namePattern.test(City)) {
      return alert(
        "Enter a valid City name (2-30 characters, letters only, optional hyphen or apostrophe)"
      );
    }
    if (!State) {
      return alert("Enter State name..!");
    } else if (!namePattern.test(State)) {
      return alert(
        "Enter a valid State name (2-30 characters, letters only, optional hyphen or apostrophe)"
      );
    }
    if (!Zipcode) {
      return alert("Enter Zipcode..!");
    } else if (!pincodePattern.test(Zipcode)) {
      return alert("Enter a valid 6-digit Indian Zipcode");
    }
    if (!password) {
      return alert("Enter password..!");
    } else if (!passwordPattern.test(password)) {
      return alert(
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, one special character, and be at least 8 characters long."
      );
    }
    if (!conpassword) {
      return alert("Enter Confirm password..!");
    } else if (!passwordPattern.test(conpassword)) {
      return alert(
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, one special character, and be at least 8 characters long."
      );
    }
    if (password !== conpassword) {
      return alert("Passwords do not match. Please check again.");
    }
    if (!MaritalStatus) {
      return alert("Please Select Marital Status..!");
    }
    if (!PatientAge18) {
      return alert("Please Select and Confirm +18..!");
    }
    if (!Aadharcard) {
      return alert("Please Upload Aadhar Card..!");
    }
    if (!Aadharno) {
      return alert("Enter Aadharno..!");
    } else if (!aadharnoPattern.test(Aadharno)) {
      return alert("Enter a valid 12-digit Indian aadhar no");
    }
    if (!relationWithPatient) {
      return alert("Enter Relation with patient..!");
    } else if (!relativepattern.test(relationWithPatient)) {
      return alert("Enter a valid Relation with patient)");
    }
    if (!relativeName) {
      return alert("Enter Relative name..!");
    } else if (!relativepattern.test(relativeName)) {
      return alert("Enter a valid Relative name )");
    }
    if (!relativePhone) {
      return alert("Enter Relative mobile no..!");
    } else if (!mobilePattern.test(relativePhone)) {
      return alert("Enter a valid mobile no )");
    }
    if (!AdmitDate) {
      return alert("Select Admission Date..!");
    }
    if (!followUpsDate) {
      return alert("Select Follow-up Date..!");
    }
    if (!haveInsurance) {
      return alert("Select Insurance ");
    }
    if (haveInsurance === "yes") {
      if (!insuranceProviderCompany) {
        return alert("Enter Helth Insurance Company Name..!");
      }
      if (!insuranceAmt) {
        return alert("Enter Helth Insurance Amount..!");
      }
    }

    if (medications === true) {
      if (!medicinesTaking) {
        return alert("Please Enter medication name");
      }
    }

    try {
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
    } catch (error) {
      console.log(error.response.data.error);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [IPDPatientList, setIPDPatientList] = useState([]);
  const getipdpatients = () => {
    axios
      .get("http://localhost:8521/api/user/getPatientList")
      .then(function (response) {
        setIPDPatientList(response.data.UsersInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log("IPDPatientList",IPDPatientList);
  

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
        // setPatientVisitId(res.data.visitor)
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

  const [selCause, setselCause] = useState("");
  const [selectedId, ...causeParts] = selCause ? selCause.split(" ") : ["", ""];
  const selectedCauseName = causeParts.join(" ");
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
          causeId: selectedId,
          causename: selectedCauseName,
          doctorsId: selDoc,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose7();
        setselCause("");
        setselDoc("");
        getipdpatients();
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

  const DeletePatient = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8521/api/user/deletepatientbyid/${PatientDetailsView?._id}`
      );
      if (res.status === 200) {
        alert(res.data.success);
        getipdpatients();
        handleClose13();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const [EditPatientDetails, setEditPatientDetails] = useState({});
  useEffect(() => {
    if (EditPatientDetails) {
      setpatientfirstname(EditPatientDetails?.Firstname || "");
      setpatientlastname(EditPatientDetails?.Lastname || "");
      setgender(EditPatientDetails?.Gender || "");
      setmobileno(EditPatientDetails?.PhoneNumber || "");
      setalternatePhoneNumber(EditPatientDetails?.alternatePhoneNumber || "");
      setemail(EditPatientDetails?.Email || "");
      setDOB(EditPatientDetails?.DOB || "");
      setAddress(EditPatientDetails?.Address1 || "");
      setAddress1(EditPatientDetails?.Address2 || "");
      setCity(EditPatientDetails?.City1 || "");
      setState(EditPatientDetails?.State1 || "");
      setZipcode(EditPatientDetails?.Zipcode || "");
      setMaritalStatus(EditPatientDetails?.MaritalStatus || "");
      setPatientAge18(EditPatientDetails?.PatientAge18 || "");
      setAadharno(EditPatientDetails?.Aadharno || "");
      setrelationWithPatient(EditPatientDetails?.relationWithPatient || "");
      setrelativeName(EditPatientDetails?.relativeName || "");
      setrelativePhone(EditPatientDetails?.relativePhone || "");
      setProfilePic(EditPatientDetails?.profilepic || "");
      setAadharcard(EditPatientDetails?.Aadharcard || "");
      setinsuranceDoc(EditPatientDetails?.insuranceDoc || "");
    }
  }, [EditPatientDetails]);

  const EditPatient = async () => {
    try {
      formdata.set("IPDpatientId", EditPatientDetails?._id);
      formdata.set("Firstname", patientfirstname);
      formdata.set("Lastname", patientlastname);
      formdata.set("Gender", gender);
      formdata.set("DOB", DOB);
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
      formdata.set("Aadharno", Aadharno);
      formdata.set("relativePhone", relativePhone);
      formdata.set("profilepic", ProfilePic);
      formdata.set("Aadharcard", Aadharcard);
      const config = {
        url: "/editpatientdetails",
        method: "put",
        baseURL: "http://localhost:8521/api/user",
        headers: { "content-type": "multipart/form-data" },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose14();
        getipdpatients();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const [LengthOfCauseArr, setLengthOfCauseArr] = useState("");
  useEffect(() => {
    setLengthOfCauseArr(PatientDetailsView?.cause?.length);
  }, [PatientDetailsView]);

  const [assignedBedInfo, setAssignedBedInfo] = useState([]);
  useEffect(() => {
    if (
      IpdCause &&
      JSON.parse(IpdCause)?.causeBillDetails?.length &&
      JSON.parse(IpdCause)?.causeBillDetails[0]["BedBillDetails"]
    ) {
      setAssignedBedInfo([
        ...JSON.parse(IpdCause)?.causeBillDetails[0]["BedBillDetails"],
      ]);
    }
  }, [IpdCause]);

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
            onClick={() => handleShow2()}
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

      <Modal
        size="lg"
        show={ShowReferDetails}
        onHide={() => setShowReferDetails(false)}
      >
        <Modal.Header>
          <Modal.Title>Referred By</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Table>
              <tbody style={{ color: "white", fontWeight: "bold" }}>
                <tr>
                  <td>
                    <b>Referred By(doctorID): </b>
                  </td>
                  <td>
                    {LengthOfCauseArr ? (
                      <>
                        {
                          PatientDetailsView?.cause[LengthOfCauseArr - 1]
                            ?.requestedDocCause?.DoctorId
                        }
                      </>
                    ) : (
                      <></>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Referred By(doctor): </b>
                  </td>
                  <td>
                    {LengthOfCauseArr ? (
                      <>
                        DR.{" "}
                        {
                          PatientDetailsView?.cause[LengthOfCauseArr - 1]
                            ?.requestedDocCause?.Firstname
                        }{" "}
                        {
                          PatientDetailsView?.cause[LengthOfCauseArr - 1]
                            ?.requestedDocCause?.Lastname
                        }
                      </>
                    ) : (
                      <></>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Referred Date: </b>
                  </td>
                  <td>
                    {LengthOfCauseArr ? (
                      `${new Date(
                        PatientDetailsView?.cause[
                          LengthOfCauseArr - 1
                        ]?.requestedDocDateCause
                      )?.getDate()}-${
                        new Date(
                          PatientDetailsView?.cause[
                            LengthOfCauseArr - 1
                          ]?.requestedDocDateCause
                        )?.getMonth() + 1
                      }-${new Date(
                        PatientDetailsView?.cause[
                          LengthOfCauseArr - 1
                        ]?.requestedDocDateCause
                      )?.getFullYear()}`
                    ) : (
                      <></>
                    )}
                  </td>
                </tr>

                <tr>
                  <td>
                    <b>Reason of Recommendation(By Doctor): </b>
                  </td>
                  <td>
                    {LengthOfCauseArr ? (
                      PatientDetailsView?.cause[LengthOfCauseArr - 1]
                        ?.reasonForRecommendationOfIPDCause
                    ) : (
                      <></>
                    )}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowReferDetails(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Patient Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row" style={{ color: "white" }}>
            <div className="col-lg-4">
              <img
                alt="profile-pic"
                src={`http://localhost:8521/PatientREG/${PatientDetailsView?.profilepic}`}
                style={{ width: "100%" }}
              />
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
                  <b>Patient ID : </b>
                  {PatientDetailsView?.PatientId}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Name : </b>
                  {`${PatientDetailsView?.Firstname} ${PatientDetailsView?.Lastname}`}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Email ID : </b> {PatientDetailsView?.Email}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Mobile : </b> {PatientDetailsView?.PhoneNumber}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Marital Status : </b> {PatientDetailsView?.MaritalStatus}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Gender : </b> {PatientDetailsView?.Gender}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>D-O-B : </b> {PatientDetailsView?.DOB}
                </h6>
              </div>
            </div>
            <div className="col-lg-8">
              <div style={{ backgroundColor: "white", padding: "10px" }}>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Content </th>
                      <th>Patient Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>Aadharcard No</b>
                      </td>
                      <td>
                        <p>{PatientDetailsView?.Aadharno}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Aadharcard</b>
                      </td>
                      <td>
                        <a
                          target="_blank"
                          href={`http://localhost:8521/PatientREG/${PatientDetailsView?.Aadharcard}`}
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Insurance Complany</b>
                      </td>
                      <td>
                        <p>{PatientDetailsView?.insuranceProviderCompany}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Insurance Documents</b>
                      </td>
                      <td>
                        <a
                          target="_blank"
                          href={`http://localhost:8521/PatientREG/${PatientDetailsView?.insuranceDoc}`}
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Address</b>
                      </td>
                      <td
                        style={{
                          maxWidth: "300px",
                          wordWrap: "break-word",
                          overflowWrap: "break-word",
                          whiteSpace: "normal",
                        }}
                      >
                        <p style={{ width: "auto", textAlign: "justify" }}>
                          {PatientDetailsView?.Address1},
                          {PatientDetailsView?.Address2},
                          {PatientDetailsView?.City1},
                          {PatientDetailsView?.State1},
                          {PatientDetailsView?.Zipcode}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Relatives</b>
                      </td>
                      <td>
                        <p>
                          {PatientDetailsView?.relativeName} (
                          {PatientDetailsView?.relationWithPatient}){" "}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
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
                type="text"
                placeholder="First Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                value={patientfirstname}
                onChange={(e) => setpatientfirstname(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                placeholder="Last Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                value={patientlastname}
                onChange={(e) => setpatientlastname(e.target.value)}
              />
            </div>

            <div className="col-lg-6">
              <select
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
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
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
                type="text"
                value={mobileno}
                maxLength={10}
                onChange={(e) => setmobileno(e.target.value)}
              />
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
                maxLength={10}
                type="text"
                value={alternatePhoneNumber}
                onChange={(e) => setalternatePhoneNumber(e.target.value)}
              />
            </div>

            <div className="col-lg-6">
              <input
                type="email"
                placeholder="Email"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  marginTop: "4%",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-5">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Date of Birth :
                  </h6>
                </div>
                <div className="col-lg-7">
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
                    max={new Date().toISOString().split("T")[0]}
                    value={DOB}
                    onChange={(e) => setDOB(e.target.value)}
                  />
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
                    accept="image/*"
                    onChange={(e) => setProfilePic(e.target.files[0])}
                  />
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
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
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
                value={Address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
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
                value={City}
                onChange={(e) => setCity(e.target.value)}
              />
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
                value={State}
                onChange={(e) => setState(e.target.value)}
              />
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
                maxLength={6}
                type="text"
                value={Zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
            </div>
            <div className="col-lg-6" style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "60%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? "🙈" : "🙉"}
              </span>
            </div>

            <div className="col-lg-6" style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="ConfirmPassword"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                value={conpassword}
                onChange={(e) => setconpassword(e.target.value)}
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "60%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? "🙈" : "🙉"}
              </span>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Marrital Status:
                  </h6>
                </div>
                <div className="col-lg-9">
                  <select
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    value={MaritalStatus}
                    onChange={(e) => setMaritalStatus(e.target.value)}
                  >
                    <option value="">Select Option</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorce">Divorce</option>
                    <option value="Complicated">Complicated</option>
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
                    value={PatientAge18}
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
                    accept="image/*"
                    onChange={(e) => setAadharcard(e.target.files[0])}
                  />
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
                    placeholder="Enter Aadhar Card No"
                    maxLength={12}
                    value={Aadharno}
                    onChange={(e) => setAadharno(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "0px",
                borderTop: "1px solid #ebebeb",
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
                    type="text"
                    value={relationWithPatient}
                    onChange={(e) => setrelationWithPatient(e.target.value)}
                  />
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
                    type="text"
                    value={relativeName}
                    onChange={(e) => setrelativeName(e.target.value)}
                  />
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
                    type="text"
                    maxLength={10}
                    value={relativePhone}
                    onChange={(e) => setrelativePhone(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "0px",
                borderTop: "1px solid #ebebeb",
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
                        min={new Date().toISOString().split("T")[0]}
                      />
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
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setfollowUpsDate(e.target.value)}
                      />
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
                {haveInsurance === "yes" && (
                  <>
                    <div className="col-lg-6">
                      <div
                        className="row"
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
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
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="row"
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div className="col-lg-3">
                          <h6 style={{ color: "white", marginTop: "6%" }}>
                            Health Insurance Provider:
                          </h6>
                        </div>
                        <div className="col-lg-9">
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
                            placeholder="Insurance Provider Name.."
                            onChange={(e) =>
                              setinsuranceProviderCompany(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="row"
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div className="col-lg-3">
                          <h6 style={{ color: "white", marginTop: "6%" }}>
                            Health Insurance Amount:
                          </h6>
                        </div>
                        <div className="col-lg-9">
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
                            placeholder="Insurance Amount"
                            onChange={(e) => setinsuranceAmt(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

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
                    checked={medications === true}
                    onChange={() => setmedications(true)}
                  />
                  Yes
                </div>

                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    checked={medications === false}
                    onChange={() => setmedications(false)}
                  />
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
                  />
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
                    placeholder="write allergy "
                  />
                </div>
                <div className="col-lg-3">
                  <Button
                    variant="warning"
                    onClick={() => {
                      patientAllergies.push(allergy);
                      setclickedAddAllergyBtn("clicked");
                    }}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3">
              <div style={{ padding: "5px", backgroundColor: "white" }}>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th>S.N.</th>
                      <th>Allergies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patientAllergies?.map((item, i) => {
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
                type="text"
                placeholder="enter Mobile Number"
                value={MobileNumber}
                maxLength={10}
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
          <div style={{ padding: "5px", backgroundColor: "white" }}>
            <Table className="text-center" bordered>
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
          </div>
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
              return (
                <option value={`${item?._id} ${item?.CauseName}`}>
                  {item?.CauseName}
                </option>
              );
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
          <div style={{ padding: "8px", backgroundColor: "white" }}>
            <Table bordered>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Cause Name</th>
                  <th>Doctor Name</th>
                  <th>Doctor ID</th>
                  <th>Department</th>
                  <th>Assign Date</th>
                </tr>
              </thead>
              <tbody>
                {ViewCause?.assigndocts?.map((item, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item?.causename}</td>
                      <td>{`${item?.doctorsId?.Firstname} ${item?.doctorsId?.Lastname}`}</td>
                      <td>{item?.doctorsId?.DoctorId}</td>
                      <td>{item?.doctorsId?.Department}</td>
                      <td>{moment(item?.createdAt).format("DD-MM-YYYY")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose8}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={show14} onHide={handleClose14}>
        <Modal.Header>
          <Modal.Title>Edit In-Patient</Modal.Title>
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
                value={patientfirstname}
              />
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
                value={patientlastname}
              />
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
                value={gender}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
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
                maxLength={10}
                type="text"
                onChange={(e) => setmobileno(e.target.value)}
                value={mobileno}
              />
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
                maxLength={10}
                type="text"
                onChange={(e) => setalternatePhoneNumber(e.target.value)}
                value={alternatePhoneNumber}
              />
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
                value={email}
              />
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-5">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Date of Birth :
                  </h6>
                </div>
                <div className="col-lg-7">
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
                    value={DOB}
                    max={new Date().toISOString().split("T")[0]}
                  />
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
                    accept="image/*"
                    onChange={(e) => setProfilePic(e.target.files[0])}
                  />
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
                    value={Address}
                  />
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
                value={Address1}
              />
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
                value={City}
              />
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
                value={State}
              />
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
                maxLength={6}
                type="text"
                onChange={(e) => setZipcode(e.target.value)}
                value={Zipcode}
              />
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Marrital Status:
                  </h6>
                </div>
                <div className="col-lg-9">
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
                    value={MaritalStatus}
                  >
                    <option value="">Select Option</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorce">Divorce</option>
                    <option value="Complicated">Complicated</option>
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
                    value={PatientAge18}
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
                    accept="image/*"
                    onChange={(e) => setAadharcard(e.target.files[0])}
                  />
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
                    maxLength={12}
                    onChange={(e) => setAadharno(e.target.value)}
                    value={Aadharno}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "0px",
                borderTop: "1px solid #ebebeb",
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
                    value={relationWithPatient}
                  />
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
                    value={relativeName}
                  />
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
                    maxLength={10}
                    onChange={(e) => setrelativePhone(e.target.value)}
                    value={relativePhone}
                  />
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
                padding: "4px 10px",
              }}
              onClick={() => {
                handleClose14();
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
              onClick={() => EditPatient()}
            >
              Edit
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

      <div style={{ overflowX: "scroll" }}>
        <Table responsive="md" style={{ marginTop: "1%" }} bordered>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Profile</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Sex</th>
              <th>Address</th>
              <th>D.O.B</th>
              <th>Bar-Code</th>
              <th>Add-Cause</th>
              <th>Assign Bed</th>
              <th>Admission Form</th>
              <th>Visitors</th>
              <th>Consent Forms</th>
              <th>Patient Forms</th>
              <th>Assign Doctor</th>
              <th>Read More</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {IPDPatientList?.filter(
              (val) => val?.registrationType === "IPD"
            )?.map((item) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
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
                    {item?.cause[item?.cause?.length - 1]?.docReqToIPDCause ? (
                      <Link
                        style={{
                          color: "red",
                        }}
                      >
                        <div
                          onClick={() => {
                            setPatientDetailsView(item);
                            setShowReferDetails(true);
                          }}
                        >
                          Referred
                        </div>
                      </Link>
                    ) : (
                      <></>
                    )}
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
                    <div>
                      <Button
                        onClick={() =>
                          navigate("/admin/BedAssignIPD", {
                            state: { PatientDetailsView: item },
                          })
                        }
                      >
                        Assign Bed
                      </Button>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <Button
                        onClick={() => {
                          setPatientDetailsView(item);
                          setShow15(true);
                        }}
                      >
                        Beds-list
                      </Button>
                    </div>
                  </td>
                  <td>
                    <Button
                      onClick={() => {
                        handleShow9();
                        setAdmissionForm(item);
                      }}
                    >
                      Admission Form
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
                      onClick={() => {
                        handleShow6();
                        setViewCause(item);
                      }}
                    >
                      View Forms
                    </button>
                  </td>
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
                  <td>
                    <div className="d-flex gap-2">
                      <MdEdit
                        style={{
                          color: "#20958c",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleShow14();
                          setEditPatientDetails(item);
                        }}
                      />
                      <AiFillDelete
                        style={{
                          color: "red",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleShow13();
                          setPatientDetailsView(item);
                        }}
                      />
                    </div>
                    <hr />
                    <div className="">
                      <p
                        style={{
                          color: "green",
                          fontWeight: "bold",
                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleShow();
                          setPatientDetailsView(item);
                        }}
                      >
                        <LuView />
                      </p>
                    </div>
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
            View {" "}
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

      <Modal
        show={show13}
        onHide={handleClose13}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="text-center">
            <img
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              src="/img/delete-btn.png"
              alt=""
            />
            <h4 className="fw-bold text-dark mb-2">Are You Sure</h4>
            <p>This event data will be removed permanently</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose13}>
            Cancel
          </Button>
          <Button variant="danger" onClick={DeletePatient}>
            <FontAwesomeIcon icon={faCancel} className=" me-2" />
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show15}
        size="md"
        onHide={() => {
          setAssignedBedInfo([]);
          setShow15(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Assigned Bed History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <b style={{ color: "white" }}>Choose Cause</b>
          </div>
          <div>
            {PatientDetailsView?.cause?.map((item, i) => {
              return (
                <div className="d-flex align-items-center mt-2">
                  <input
                    type="radio"
                    name="ipd_cause"
                    id={`cause${i}`}
                    value="HTML"
                    onClick={() => setIpdCause(JSON.stringify(item))}
                    style={{ height: "20px", width: "16px" }}
                  />

                  <div style={{ color: "white", marginLeft: "5px" }}>
                    {item?.CauseName}
                  </div>
                </div>
              );
            })}
          </div>
          {IpdCause &&
          JSON.parse(IpdCause)?.causeBillDetails?.length &&
          JSON.parse(IpdCause)?.causeBillDetails[0]["BedBillDetails"]
            ?.length ? (
            <div style={{ marginTop: "10px", color: "white" }}>
              <b>Assigned Bed Information</b>
              <div style={{ height: "250px", overflow: "hidden scroll" }}>
                {assignedBedInfo?.map((val, i) => {
                  return (
                    <div
                      className="d-flex align-items-center justify-content-around"
                      style={{
                        border: "2px solid white",
                        margin: "10px",
                        padding: "10px",
                        color: "white",
                      }}
                    >
                      <div>
                        <Table bordered>
                          <tbody>
                            <tr>
                              <td>
                                <b>Building</b>
                              </td>
                              <td>{val?.buildingName}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Floor</b>
                              </td>
                              <td>{val?.floor}</td>
                            </tr>

                            <tr>
                              <td>
                                <b>Ward</b>
                              </td>
                              <td>{val?.wardName}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Bed</b>
                              </td>
                              <td>{val?.bedName}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>

                      <div>
                        <FaBed
                          style={{
                            fontSize: "124px",
                            color:
                              i === assignedBedInfo?.length - 1
                                ? "red"
                                : "white",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setAssignedBedInfo([]);
              setShow15(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
