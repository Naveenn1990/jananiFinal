import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import Barcode from "react-barcode";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CiBarcode } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { LuView } from "react-icons/lu";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

function IPD_PatientList() {
  const navigate = useNavigate();
  const [PatientDetailsView, setPatientDetailsView] = useState("");
  const [ShowReferDetails, setShowReferDetails] = useState(false);
  const [PatientVisitId, setPatientVisitId] = useState("");
  const [EditPatientDetails, setEditPatientDetails] = useState({});
  const [Selectcause, setSelectcause] = useState({});
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show10, setShow10] = useState(false);
  const [ViewBarcode, setViewBarcode] = useState({});
  const handleClose10 = () => setShow10(false);
  const handleShow10 = (item) => {
    setShow10(true);
    setViewBarcode(item);
  };
  const [show11, setShow11] = useState(false);
  const handleClose11 = () => setShow11(false);
  const handleShow11 = () => setShow11(true);

  const [show12, setShow12] = useState(false);
  const handleClose12 = () => setShow12(false);
  const handleShow12 = () => setShow12(true);

  const [AdmissionForm, setAdmissionForm] = useState("");
  const [show9, setShow9] = useState(false);
  const handleClose9 = () => setShow9(false);
  const handleShow9 = () => setShow9(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

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

  const [show13, setShow13] = useState(false);
  const handleClose13 = () => setShow13(false);
  const handleShow13 = () => setShow13(true);

  const [show14, setShow14] = useState(false);
  const handleClose14 = () => setShow14(false);
  const handleShow14 = () => setShow14(true);

  const [VisitingCard, setVisitingCard] = useState({});
  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);


  const componentRef1 = useRef();
  const handlePrint1 = useReactToPrint({
    content: () => componentRef1.current,
  });

  const componentRef2 = useRef();
  const handlePrint2 = useReactToPrint({
    content: () => componentRef2.current,
  });


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

// Add Visitor
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
  const [MaritalStatus, setMaritalStatus] = useState("");
  const [PatientAge18, setPatientAge18] = useState("");
  const [relativeName, setrelativeName] = useState("");
  const [relationWithPatient, setrelationWithPatient] = useState("");
  const [relativePhone, setrelativePhone] = useState("");
  const [Aadharcard, setAadharcard] = useState("");
  const [Aadharno, setAadharno] = useState("");
  const [insuranceDoc, setinsuranceDoc] = useState("");
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
  let formdata = new FormData();
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

  useEffect(() => {
    getipdpatients();
    getDoctors();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
        }}
      >
        <h6 
        style={{ 
            fontSize: "22px", 
            fontWeight: "600", 
            color: "grey",    
             }}>
         IPD Patient List :
        </h6>
      </div>

      <div style={{ overflowX: "scroll" }}>
        <Table responsive="md" style={{ marginTop: "1%" }} bordered>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Profile</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Add-Cause</th>
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
                  <td>
                    <div>
                         {`${item?.Firstname} ${item?.Lastname}`}
                    </div>
                  </td>
                  <td>{item?.PhoneNumber}</td>
                                
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
            View{" "}
            <span style={{ color: "red" }}>
          
              {`${PatientDetailsView?.Firstname} ${PatientDetailsView?.Lastname}`} 'S
               
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

export default IPD_PatientList;
