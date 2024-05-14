import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Form } from "react-bootstrap";
import { Checkbox } from "@mui/material";
import moment from "moment";
import axios from "axios";

const DoctorForms = () => {
  let doctorDetails = JSON.parse(sessionStorage.getItem("DoctorDetails"));
  const location = useLocation();
  const Patientdetails = location.state;
  console.log("Patientdetails", Patientdetails);
  const dobString = Patientdetails?.DOB;
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


  // DOCTORS TREATMENT CHART

  const [DTdate, setDTdate] = useState("")
  const [DTTime, setDTTime] = useState("")
  const [DTNotes, setDTNotes] = useState("")

  const [DoctorsNotes, setDoctorsNotes] = useState([])
  const Adddoctorsnotes = async () => {
    const newNote = {
      doctorid:Patientdetails?._id,
      DTdate:DTdate,
      DTTime:DTTime,
      DTNotes:DTNotes,
    };
    setDoctorsNotes((prevDrug) => [...prevDrug, newNote]);
  };
  const deletedoctorsnote = async (indexToDelete) => {
    const updatedDrugList = DoctorsNotes.filter(
      (_, index) => index !== indexToDelete
    );
    setDoctorsNotes(updatedDrugList);
  };

  const submitIntakeOut = async () => {
    try {
      const config = {
        url: "/addintakeout",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "content-type": "application/json" },
        data: {
          patientId: Patientdetails?._id,
          // causeId: cause?._id,
          DoctorsNotes: DoctorsNotes,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  
  const [DocTreatChart, setDocTreatChart] = useState(true);
  const [DocNotes, setDocNotes] = useState(false);
  const [SurgeryReport, setSurgeryReport] = useState(false);

  return (
    <div>
      <div className="d-flex justify-content-around p-5">
        <button
          style={{
            padding: "6px",
            border: "1px solid white",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
          }}
          onClick={() => {
            setDocTreatChart(true);
            setDocNotes(false);
            setSurgeryReport(false);
          }}
        >
          <div>
            {/* <RiBillFill style={{fontSize:"38px"}}/>   */}
            Doctor Treatment Chart
          </div>
        </button>

        <button
          style={{
            padding: "6px",
            border: "1px solid white",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
          }}
          onClick={() => {
            setDocTreatChart(false);
            setDocNotes(true);
            setSurgeryReport(false);
          }}
        >
          Doctors Notes
        </button>

        <button
          style={{
            padding: "6px",
            border: "1px solid white",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
          }}
          // onClick={() => navigate("/admin/SurgeryReport")}
          onClick={() => {
            setDocTreatChart(false);
            setDocNotes(false);
            setSurgeryReport(true);
          }}
        >
          Surgery Report
        </button>
      </div>

      {DocTreatChart ? (
        <>
          <div className="text-center mt-1">
            {" "}
            <h6
              className="fw-bold mt-2"
              style={{ color: "#20958C", fontSize: "30px" }}
            >
              DOCTORS TREATMENT CHART
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
              <div className="text-center mt-1">
                {" "}
                <h6
                  className="fw-bold mt-2"
                  style={{ color: "#20958C", fontSize: "30px" }}
                >
                  DOCTORS TREATMENT CHART
                </h6>
              </div>
              <div
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
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{ width: "33%", border: "2px  solid #20958C" }}
                      >
                        Name :{" "}
                        {`${Patientdetails?.Firstname} ${Patientdetails?.Lastname}`}
                      </td>
                      <td
                        style={{ width: "33%", border: "2px  solid #20958C" }}
                      >
                        Age : {ageOutput}
                      </td>
                      <td
                        style={{ width: "33%", border: "2px  solid #20958C" }}
                      >
                        Sex : {Patientdetails?.Gender}
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Table
                  style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    margin: "auto",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ width: "50%", border: "2px solid #20958C" }}>
                        Pt ID : {Patientdetails?.PatientId}
                      </td>
                      <td style={{ width: "50%", border: "2px solid #20958C" }}>
                        Ward : 26/32
                      </td>
                    </tr>
                    <tr>
                      <td
                        colSpan={2}
                        style={{ width: "100%", border: "2px  solid #20958C" }}
                      >
                        {/* <div className="d-flex align-items-center">
                          <div style={{ width: "12%" }}>
                            {" "}
                            Doctor Incharge :{" "}
                          </div>

                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "90%" }}
                          />
                        </div> */}
                         Doctor Incharge : {`${doctorDetails?.Firstname} ${doctorDetails?.Lastname} `}
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Table
                  style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    margin: "auto",
                  }}
                  bordered
                >
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th style={{ width: "10%", border: "2px solid #20958C" }}>
                        Date
                      </th>
                      <th style={{ width: "10%", border: "2px solid #20958C" }}>
                        Time
                      </th>
                      <th style={{ width: "50%", border: "2px solid #20958C" }}>
                        Notes
                      </th>
                      <th style={{ width: "20%", border: "2px solid #20958C" }}>
                        Doctor's sign
                      </th>
                      <th style={{ width: "20%", border: "2px solid #20958C" }}>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ textAlign: "center" }}>
                      <td style={{ width: "10%", border: "2px solid #20958C" }}>
                        {" "}
                        <input
                          type="date"
                          className="vi_0"
                          value={DTdate}
                          onChange={(e)=>setDTdate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </td>
                      <td style={{ width: "10%", border: "2px solid #20958C" }}>
                        <input
                          type="time"
                          className="vi_0"
                          style={{ width: "86%" }}
                          onChange={(e)=>setDTTime(e.target.value)}
                          value={DTTime}
                        />
                      </td>
                      <td style={{ width: "50%", border: "2px solid #20958C" }}>
                      <Form.Control 
                      className="vi_0"
                      as="textarea" 
                      rows={3} 
                      onChange={(e)=>setDTNotes(e.target.value)}
                      value={DTNotes}
                      />
                      </td>
                      <td
                        style={{ width: "20%", border: "2px  solid #20958C" }}
                      >
                        <input
                          type="text"
                          className="vi_0"                          
                        />
                      </td>
                      <td
                        style={{ width: "10%", border: "2px  solid #20958C" }}
                      >
                        <Button
                           onClick={Adddoctorsnotes}
                        >
                          <IoMdAdd />
                        </Button>
                      </td>
                    </tr>
                    {DoctorsNotes?.map((item, i) => {
                      return (
                        <tr>
                          <td>{moment(item?.DTdate).format("DD-MM-YYYY")}</td>
                          <td>{item?.DTTime}</td>
                          <td>{item?.DTNotes}</td>
                          <td></td>
                          <td>
                            <MdDelete
                                onClick={() => deletedoctorsnote(i)}
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
          </div>
          <div className="text-center mt-2 mb-2">
            <button className="btn btn-success">Submit</button>
          </div>
        </>
      ) : (
        <>
          {DocNotes ? (
            <>
              <div className="text-center mt-1">
                {" "}
                <h6
                  className="fw-bold mt-2"
                  style={{ color: "#20958C", fontSize: "30px" }}
                >
                  DOCTORS NOTES
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
                      <img
                        src="/img/logo.jpg"
                        alt=""
                        style={{ width: "100px" }}
                      />
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
                      DOCTORS NOTES
                    </h6>
                  </div>
                  <div
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
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Name: Sheetal
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Age: 22
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Sex: Female
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table
                      style={{
                        borderCollapse: "collapse",
                        width: "100%",
                        margin: "auto",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Pt ID: 9097768656
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Ward: 32/23
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Dept: Neurologists
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Doctor: Unknown
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            DOA: jsdgdf
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Known Drug Allergies:{" "}
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "70%" }}
                              />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan={2}
                            style={{
                              width: "100%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Diagnosis:{" "}
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "92%" }}
                              />
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table
                      style={{
                        borderCollapse: "collapse",
                        width: "100%",
                        margin: "auto",
                      }}
                    >
                      <thead>
                        <tr style={{ textAlign: "center" }}>
                          <th
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Date
                          </th>
                          <th
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Time
                          </th>
                          <th
                            style={{
                              width: "60%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Notes
                          </th>
                          <th
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Doctor's sign
                          </th>
                          <th
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ textAlign: "center" }}>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "100%" }}
                            />
                          </td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "100%" }}
                            />
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "100%" }}
                            />
                          </td>
                          <td
                            style={{
                              width: "20%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="file"
                              className="vi_0"
                              style={{ width: "100%" }}
                            />
                          </td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <Button
                            //    onClick={adddrug}
                            >
                              <IoMdAdd />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className="text-center mt-2 mb-2">
                <button className="btn btn-success">Submit</button>
              </div>
            </>
          ) : (
            <>
              {SurgeryReport ? (
                <>
                  <div className="text-center mt-1">
                    {" "}
                    <h6
                      className="fw-bold mt-2"
                      style={{ color: "#20958C", fontSize: "30px" }}
                    >
                      SURGERY REPORT
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
                          <img
                            src="/img/logo.jpg"
                            alt=""
                            style={{ width: "100px" }}
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="fw-bold" style={{ fontSize: "25px" }}>
                            JANANI MULTISPECIALITY HOSPITAL AND RESEARCH CENTER
                          </h4>
                          <h6 className="fw-bold" style={{ fontSize: "19px" }}>
                            Beside Canara Bank, Jalanagar Main Road, K. K.
                            Colony, Vijaypura-586109
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
                          SURGERY REPORT
                        </h6>
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
                            <tr>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Name: Sheetal Aily
                              </td>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Age: 22
                              </td>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Sex: Female
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={3}
                                style={{
                                  width: "50%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Pt ID: 908866756
                              </td>
                              <td
                                colSpan={3}
                                style={{
                                  width: "50%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Ward: 33
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={6}
                                style={{
                                  width: "100%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Pre-Operative Diagnosis:{" "}
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "85%" }}
                                  />
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Surgeon: Rahul
                              </td>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Assistant-1: Xyz1
                              </td>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Assistant-2: Xyz2
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Anaesthetist: sadasdasddf
                              </td>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Scrub Nurse:{" "}
                              </td>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Circ Nurse:{" "}
                              </td>
                            </tr>

                            <tr>
                              <td
                                style={{
                                  width: "16.6%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Skin Wound Condition:{" "}
                              </td>
                              <td
                                style={{
                                  width: "16.6%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Clean:{" "}
                              </td>
                              <td
                                style={{
                                  width: "16.6%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Slightly Contaminated:{" "}
                              </td>
                              <td
                                style={{
                                  width: "16.6%",
                                  border: "2px  solid #20958C",
                                }}
                              ></td>
                              <td
                                style={{
                                  width: "16.6%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Heavily COntaminated:{" "}
                              </td>
                              <td
                                style={{
                                  width: "16.6%",
                                  border: "2px  solid #20958C",
                                }}
                              ></td>
                            </tr>

                            <tr>
                              <td
                                colSpan={6}
                                style={{
                                  width: "100%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Name of Operaton{" "}
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={6}
                                style={{
                                  width: "100%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                {/* Procedure:{" "} */}
                                <Form.Group
                                  className="mb-3"
                                  controlId="exampleForm.ControlTextarea1"
                                >
                                  <Form.Label>Procedure</Form.Label>
                                  <Form.Control as="textarea" rows={3} className="vi_0"/>
                                </Form.Group>
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={6}
                                style={{
                                  width: "100%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                {/* Findings :{" "} */}
                                <Form.Group
                                  className="mb-3"
                                  controlId="exampleForm.ControlTextarea1"
                                >
                                  <Form.Label>Findings</Form.Label>
                                  <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={2}
                                style={{ border: "2px  solid #20958C" }}
                              >
                                Swab / Instruments{" "}
                              </td>
                              <td
                                colSpan={2}
                                style={{ border: "2px  solid #20958C" }}
                              >
                                <Checkbox /> <Checkbox /> <hr />
                              </td>
                              <td
                                colSpan={2}
                                style={{ border: "2px  solid #20958C" }}
                              >
                                Doctor's Signature
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-2 mb-2">
                    <button className="btn btn-success">Submit</button>
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DoctorForms;
