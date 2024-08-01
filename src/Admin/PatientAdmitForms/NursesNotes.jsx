import axios from "axios";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { FaBackward } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useLocation } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
const NursesNotes = () => {
  const location = useLocation();
  const { patientdetails, cause } = location.state || {};

  console.log("patientdetails", patientdetails);
  console.log("cause", cause);

  const [userdetail, setuserdetail] = useState({});
  const getpatientbyid = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8521/api/user/getPatientDetailByid/${patientdetails?._id}`
      );
      if (res.status === 200) {
        setuserdetail(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getpatientbyid();
  }, []);

  const [SelectedCause, setSelectedCause] = useState([]);
  useEffect(() => {
    if (cause) {
      const findcause = userdetail?.cause?.filter(
        (ele) => ele._id === cause?._id
      );
      setSelectedCause(findcause);
    }
  }, [cause, userdetail]);

  console.log("SelectedCause",SelectedCause);

  const dobString = patientdetails?.DOB;
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

  const [SelectDoctor, setSelectDoctor] = useState("");
  const [DoctorDept, setDoctorDept] = useState([]);
  useEffect(() => {
    if (SelectDoctor) {
      const assignDocDept = patientdetails?.assigndocts?.filter(
        (ele) => ele?.doctorsId?._id === SelectDoctor
      );
      setDoctorDept(assignDocDept);
    }
  }, [SelectDoctor, patientdetails]);

  const [NurseSignature, setNurseSignature] = useState(null);
  const sigCanvas1 = useRef({});
  const clear1 = () => sigCanvas1.current.clear();
  const save1 = () => {
    const NurseSignature = sigCanvas1.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    setNurseSignature(NurseSignature);
  };

  // Add Nurse Notes

  const [TimeandDate, setTimeandDate] = useState("");
  const [NurseReport, setNurseReport] = useState("");

  const [NurseNote, setNurseNote] = useState([]);

  const AddNurseNote = async () => {
    const newNote = {
      causename: cause?.CauseName,
      // NDate: NDate,
      NurseReport: NurseReport,
    };
    setNurseNote((prevDrug) => [...prevDrug, newNote]);
  };
  const deleteNote = async (indexToDelete) => {
    const updatedDrugList = NurseNote.filter(
      (_, index) => index !== indexToDelete
    );
    setNurseNote(updatedDrugList);
  };

  const [Diagnosis, setDiagnosis] = useState("");
  const submitNurseNote = async () => {  
    if (!TimeandDate) {
      return alert("Select Date..!");
    }
    if (!NurseReport) {
      return alert("Enter NurseReport..!");
    }
    if (!NurseSignature) {
      return alert("Sign is Pending..!");
    }
    try {
      const formdata = new FormData();
      const Nursesign = await fetch(NurseSignature).then((res) => res.blob());
      formdata.set("patientId", patientdetails?._id);
      formdata.set("causeId", cause?._id);
      formdata.set("doctorId", SelectDoctor);
      formdata.set("Diagnosis", Diagnosis);
      formdata.set("timeanddate", TimeandDate);
      formdata.set("NurseReport", NurseReport);
      formdata.set("NurseSignature", Nursesign, "nurse-signature.png");
      const config = {
        url: "/addnursenote",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "Content-Type": "multipart/form-data" },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getpatientbyid()
        setTimeandDate("")
        setNurseReport("")
        setNurseSignature(null)

      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  return (
    <div>
      <div>
        <button
          className="mt-2"
          style={{
            border: "#20958c",
            padding: "8px",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "6px",
            boxShadow: " 8px 8px 16px #20958c,-8px -8px 16px #20958c",
          }}
          onClick={() => window.history.go(-1)}
        >
          <FaBackward /> &nbsp; Back
        </button>
      </div>

      <div className="text-center mt-1">
        {" "}
        <h6
          className="fw-bold mt-2"
          style={{ color: "#20958C", fontSize: "30px" }}
        >
          NURSES NOTES
        </h6>
      </div>
      <div
        id="pdf"
        style={{
          padding: "15px",
          overflow: "hidden",
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
              <img src="/Images/logo.jpg" alt="" style={{ width: "100px" }} />
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
          <div className="text-center mt-1">
            {" "}
            <h6
              className="fw-bold mt-2"
              style={{ color: "#20958C", fontSize: "30px" }}
            >
              NURSES NOTES
            </h6>
          </div>
          <div
            style={{
              paddingLeft: "42px",
              paddingRight: "42px",
              textAlign: "justify",
            }}
          >
            <p style={{ fontSize: "17px" }}>
              <div className="container">
                <div className="row" style={{ border: "1px solid #20958C" }}>
                  <div
                    className="col-md-7"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    Name :{" "}
                    <span>
                      {`${patientdetails?.Firstname} ${patientdetails?.Lastname} `}
                    </span>
                  </div>
                  <div
                    className="col-md-2"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    Age :
                    <span>{ageOutput}</span>
                  </div>
                  <div
                    className="col-md-3"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Sex : <span>{patientdetails?.Gender}</span>
                  </div>
                </div>
                <div className="row" style={{ border: "1px solid #20958C" }}>
                  <div className="col-md-6 consentformhd">
                    Pt ID : <span>{patientdetails?.PatientId}</span>
                  </div>
                  <div className="col-md-6 consentformhd">
                    Ward : 
                    <span>
                      {
                      SelectedCause?.[0]?.causeBillDetails?.[0]?.BedBillDetails?.map((item)=>{
                        return(
                         <span> {item?.bedName}</span>
                        )
                      })}

                    </span>
                  </div>
                </div>
                <div className="row" style={{ border: "1px solid #20958C" }}>
                  <div className="col-md-6 consentformhd">
                    Dept: <span>
                    {
                      SelectedCause?.[0]?.causeBillDetails?.[0]?.BedBillDetails?.map((item)=>{
                        return(
                         <span> {item?.wardtype}</span>
                        )
                      })}
                    </span>
                  </div>
                  <div className="col-md-6  align-items-center gap-2">
                    Doctor :<br/>
                    {patientdetails?.assigndocts?.map((item,i)=>{
                      return(
                        <div>{i+1}). <span style={{fontWeight:"bold"}}>Dr. {`${item?.doctorsId?.Firstname} ${item?.doctorsId?.Lastname}`}</span></div>
                      )
                    })}
                  </div>
                </div>
                <div className="row" style={{ border: "1px solid #20958C" }}>
                  <div className="col-md-5 consentformhd">
                    DOA:{" "}
                    <span>
                      {moment(patientdetails?.createdAt).format("DD-MM-YYYY")}
                    </span>
                  </div>
                  <div className="col-md-7 consentformhd d-flex gap-2 align-items-center">
                    <p>Known Drug Allergies: </p>
                    <span>{patientdetails?.patientAllergies}</span>
                  </div>
                </div>
                <div className="row" style={{ border: "1px solid #20958C" }}>
                  <div className="col-md-12 consentformhd d-flex gap-2 align-items-center">
                    <b>Diagnosis : </b>
                    <span>{cause?.CauseName} </span>
                  </div>
                </div>

                <div className="mt-2">
                  <Table className="text-center" bordered>
                    <thead>
                      <tr>
                        <th>Date & Time</th>
                        <th>Observation/ Nsg Action/ Response/ Plan </th>
                        <th>Nurses Sign</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SelectedCause?.[0]?.nursenote?.map((item) => {
                        return (
                          <tr>
                            <td>
                              {moment(item?.timeanddate)?.format(
                                "DD-MM-YYYY || HH:MM"
                              )}
                            </td>
                            <td>{item?.NurseReport}</td>
                            <td>
                              <img
                                alt="sign"
                                src={`http://localhost:8521/PatientREG/${item?.NurseSignature}`}
                              />
                            </td>
                          </tr>
                        );
                      })}

                      <tr>
                        <td>
                          <input
                            type="datetime-local"
                            className="vi_0"
                            value={TimeandDate}
                            onChange={(e) => setTimeandDate(e.target.value)}
                            // min={new Date().toISOString().split("T")[0]}
                            min={getCurrentDateTime()}
                          />
                        </td>
                        <td>
                          <textarea
                            className="vi_0"
                            value={NurseReport}
                            onChange={(e) => setNurseReport(e.target.value)}
                          />
                        </td>
                        <td>
                          {!NurseSignature ? (
                            <div
                              style={{
                                border: "1px solid #dee2e6",
                                margin: "10px",
                              }}
                            >
                              <SignatureCanvas
                                ref={sigCanvas1}
                                penColor="black"
                                canvasProps={{
                                  width: 180,
                                  height: 100,
                                  className: "sigCanvas",
                                }}
                              />
                              <div className="d-flex gap-3">
                                <button onClick={clear1}>Clear</button>
                                <button onClick={save1}>Save</button>
                              </div>
                            </div>
                          ) : (
                            <img src={NurseSignature} alt="Signature" />
                          )}
                        </td>
                        {/* <td>
                          <Button onClick={AddNurseNote}>
                            <IoMdAdd />
                          </Button>
                        </td> */}
                      </tr>
                      {NurseNote?.map((item, i) => {
                        return (
                          <tr>
                            <td>{item?.NDate}</td>
                            <td>{item?.NTime}</td>
                            <td>{item?.NurseReport}</td>
                            <td>
                              <img
                                alt="sign"
                                src={`http://localhost:8521/PatientREG/${item?.NurseSignature}`}
                              />
                            </td>
                            <td>
                              <MdDelete
                                onClick={() => deleteNote(i)}
                                style={{
                                  cursor: "pointer",
                                  color: "red",
                                }}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-2 mb-2">
        <button className="btn btn-success" onClick={submitNurseNote}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default NursesNotes;
