import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const NursesNotes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { patientdetails, cause } = location.state || {};

  console.log("patientdetails", patientdetails);
  console.log("cause", cause);

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

  // Add Nurse Notes

  const [NDate, setNDate] = useState("");
  const [NTime, setNTime] = useState("");
  const [NurseReport, setNurseReport] = useState("");

  const [NurseNote, setNurseNote] = useState([]);

  const AddNurseNote = async () => {
    const newNote = {
      causename: cause?.CauseName,
      NDate: NDate,
      NTime: NTime,
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

  const submitNurseNote = async()=>{
    try {
      const config ={
        url:"/addnursenote",
        method:"put",
        baseURL:"http://localhost:8521/api/staff",
        headers:{"content-type":"application/json"},
        data:{
          patientId:patientdetails?._id,
          causeId:cause?._id,
          NurseNote:NurseNote
        }
      }
      let res = await axios(config);
      if(res.status === 200){
        alert(res.data.success)
      }
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  return (
    <div>
      <div>
        <button
          className="mt-2"
          style={{
            padding: "6px",
            border: "1px solid white",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
          }}
          onClick={() => navigate("/admin/patientform")}
        >
          Back
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
            // width: "1073px",
            margin: "auto",
            borderRadius: "20px",
            // height: "1700px",
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
          <div
            className="text-center"
            style={{
              borderBottom: "1px solid #20958C",
              width: "100%",
              textAlign: "center",
            }}
          ></div>
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
                    Name:{" "}
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
                    Age:
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
                    Sex: <span>{patientdetails?.Gender}</span>
                  </div>
                </div>
                <div className="row" style={{ border: "1px solid #20958C" }}>
                  <div
                    className="col-md-6"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    Pt ID: <span>{patientdetails?.PatientId}</span>
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    Ward: <span>23AC</span>
                  </div>
                </div>
                <div className="row" style={{ border: "1px solid #20958C" }}>
                  <div
                    className="col-md-6"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    Dept:{" "}
                    <span>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="vi_0"
                        style={{ width: "350px" }}
                      />
                    </span>
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    Doctor: <span>Dr. JK Das</span>
                  </div>
                </div>
                <div className="row" style={{ border: "1px solid #20958C" }}>
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
                    className="col-md-7"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    Known Drug Allergies:{" "}
                    <span>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="vi_0"
                        style={{ width: "392px" }}
                      />
                    </span>
                  </div>
                </div>
                <div className="row" style={{ border: "1px solid #20958C" }}>
                  <div
                    className="col-md-12"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    Diagnosis:{" "}
                    <span>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="vi_0"
                        style={{ width: "886px" }}
                      />
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <span style={{ color: "red", fontFamily: "bold" }}>
                    {cause?.CauseName}
                  </span>
                </div>
                <div className="mt-2">
                  <Table className="text-center">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Observation/ Nsg Action/ Response/ Plan </th>
                        <th>Nurses Sign</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="date"
                            className="vi_0"
                            value={NDate}
                            onChange={(e) => setNDate(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="vi_0"
                            value={NTime}
                            onChange={(e) => setNTime(e.target.value)}
                          />
                        </td>
                        <td>
                          <textarea
                            className="vi_0"
                            onChange={(e) => setNurseReport(e.target.value)}
                          />
                        </td>
                        <td></td>
                        <td>
                          <Button onClick={AddNurseNote}>
                            <IoMdAdd />
                          </Button>
                        </td>
                      </tr>
                      {NurseNote?.map((item, i) => {
                        return (
                          <tr>
                            <td>{item?.NDate}</td>
                            <td>{item?.NTime}</td>
                            <td>{item?.NurseReport}</td>
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
        <button 
        className="btn btn-success"
        onClick={submitNurseNote}
        >Submit</button>
      </div>
    </div>
  );
};

export default NursesNotes;
