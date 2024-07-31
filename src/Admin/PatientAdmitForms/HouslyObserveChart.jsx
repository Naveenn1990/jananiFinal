import axios from "axios";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { FaBackward } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
const HouslyObserveChart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { patientdetails, cause } = location.state || {};

  console.log("patientdetails",patientdetails);

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

  // Add HOURLY OBSERVATION CHART

  const [OTime, setOTime] = useState("");
  const [HRmin, setHRmin] = useState("");
  const [RRmin, setRRmin] = useState("");
  const [SPO2, setSPO2] = useState("");
  const [BP, setBP] = useState("");
  const [GRBs, setGRBs] = useState("");
  const [O2, setO2] = useState("");

  const [HourlyNotes, setHourlyNotes] = useState([]);

  const AddHourlyNotes = async () => {
    const newNote = {
      causename: cause?.CauseName,
      OTime: OTime,
      HRmin: HRmin,
      RRmin: RRmin,
      SPO2: SPO2,
      BP: BP,
      GRBs: GRBs,
      O2: O2,
    };
    setHourlyNotes((prevDrug) => [...prevDrug, newNote]);
  };
  const deleteNote = async (indexToDelete) => {
    const updatedDrugList = HourlyNotes.filter(
      (_, index) => index !== indexToDelete
    );
    setHourlyNotes(updatedDrugList);
  };

  const [NurseSignature, setNurseSignature] = useState(null);
  const sigCanvas1 = useRef({});
  const clear1 = () => sigCanvas1.current.clear();
  const save1 = () => {
    const NurseSignature = sigCanvas1.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    setNurseSignature(NurseSignature);
  };

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

  const [SelectedCause, setSelectedCause] = useState([])
  useEffect(() => {
    if(cause){
      const findcause = userdetail?.cause?.filter((ele)=>ele._id === cause?._id)
      setSelectedCause(findcause)
    }

  }, [cause,userdetail])

  const submitNurseNote = async () => {
  
    if(!OTime){
      return alert("Please Select Time")
    }
    if(!HRmin){
      return alert("Please Enter HR/Min")
    }
    if(!RRmin){
      return alert("Please Enter RR/Min")
    }
    if(!SPO2){
      return alert("Please Enter SPO2")
    }
    if(!BP){
      return alert("Please Enter BP")
    }
    if(!GRBs){
      return alert("Please Enter GRBs")
    }
    if(!O2){
      return alert("Please Enter O2")
    }
    if(!NurseSignature){
      return alert("Nurse Signature Pending..!")
    }
    const formdata = new FormData();
    const Nursesign = await fetch(NurseSignature).then((res) => res.blob());
    formdata.set("patientId", patientdetails?._id);
    formdata.set("causeId", cause?._id);
    formdata.set("doctorId", SelectDoctor);
    formdata.set("OTime", OTime);
    formdata.set("HRmin", HRmin);
    formdata.set("RRmin", RRmin);
    formdata.set("SPO2", SPO2);
    formdata.set("BP", BP);
    formdata.set("GRBs", GRBs);
    formdata.set("O2", O2);
    formdata.set("NurseSignature", Nursesign,"nurse-signature.png");
    try {
      const config = {
        url: "/addhourlynotes",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "Content-Type": "multipart/form-data" },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        sessionStorage.setItem("PatientUser", JSON.stringify(res.data.updateddata))
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  return (
    <div>
      <div>
      <button
          className="mt-2"
          style={{
            border:"#20958c",
            padding: "8px",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "6px",
             boxShadow: " 8px 8px 16px #20958c,-8px -8px 16px #20958c",
           
          }}
          onClick={() => window.history.go(-1)}
        >
         <FaBackward />  &nbsp;      
         Back
        </button>
      </div>

      <div className="text-center mt-1">
        {" "}
        <h6
          className="fw-bold mt-2"
          style={{ color: "#20958C", fontSize: "30px" }}
        >
          HOURLY OBSERVATION CHART
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
              style={{
                color: "#20958C",
                fontSize: "30px",
              }}
            >
              HOURLY OBSERVATION CHART
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
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-5"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    Name:{" "}
                    <span>
                      {`${patientdetails?.Firstname} ${patientdetails?.Lastname} `}
                    </span>
                  </div>
                  <div
                    className="col-md-3"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    ID No:
                    <span>{patientdetails?.PatientId}</span>
                  </div>
                  <div
                    className="col-md-4"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Sex: <span>{patientdetails?.Gender}</span>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-5"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    DOA:{" "}
                    <span>
                      {moment(patientdetails?.createdAt).format("DD-MM-YYYY")}
                    </span>
                  </div>
                  <div
                    className="col-md-3"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    Age :<span>{ageOutput}</span>
                  </div>
                  <div
                    className="col-md-4"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                      alignItems: "center",
                    }}
                  >
                    Unit Dr : <br/>
                    <span>
                   
                    {patientdetails?.assigndocts?.map((item,i)=>{
                      return(
                        <div>{i+1}). <span style={{fontWeight:"bold"}}>Dr. {`${item?.doctorsId?.Firstname} ${item?.doctorsId?.Lastname}`}</span></div>
                      )
                    })}
                    </span>
                  </div>
                </div>
                <div className="row mt-2">
                  <Table className="text-center" bordered>
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>HR/ MIN</th>
                        <th>RR/ MIN </th>
                        <th>SPO2</th>
                        <th>BP</th>
                        <th>GRBS</th>
                        <th>O2</th>
                        <th>Sign</th>
                      </tr>
                    </thead>
                    <tbody>
                    {SelectedCause?.[0]?.hourlynote?.map((item)=>{
                        return(
                          <tr>
                          <td>{item?.OTime}</td>
                          <td>{item?.HRmin}</td>
                          <td>{item?.RRmin}</td>
                          <td>{item?.SPO2}</td>
                          <td>{item?.BP}</td>
                          <td>{item?.GRBs}</td>
                          <td>{item?.O2}</td>
                          <td>
                          <img
                            alt="sign"
                            src={`http://localhost:8521/PatientREG/${item?.NurseSignature}`}
                          /> 
                          </td>
                        </tr>
                        )
                      })
                      }
                      <tr>
                        <td>
                          <input
                            type="time"
                            className="vi_0"
                            value={OTime}
                            onChange={(e) => setOTime(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="vi_0"
                            value={HRmin}
                            onChange={(e) => setHRmin(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="vi_0"
                            value={RRmin}
                            onChange={(e) => setRRmin(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="vi_0"
                            value={SPO2}
                            onChange={(e) => setSPO2(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="vi_0"
                            value={BP}
                            onChange={(e) => setBP(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="vi_0"
                            value={GRBs}
                            onChange={(e) => setGRBs(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="vi_0"
                            value={O2}
                            onChange={(e) => setO2(e.target.value)}
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
                       
                      </tr>
                      {HourlyNotes?.map((item, i) => {
                        return (
                          <tr>
                            <td>{item?.OTime}</td>
                            <td>{item?.HRmin}</td>
                            <td>{item?.RRmin}</td>
                            <td>{item?.SPO2}</td>
                            <td>{item?.BP}</td>
                            <td>{item?.GRBs}</td>
                            <td>{item?.O2}</td>
                            <td>Sing</td>
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

export default HouslyObserveChart;
