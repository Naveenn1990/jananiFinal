import { Checkbox } from "@mui/material";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import { useLocation } from "react-router-dom";

function DoctorsViewForms() {
  let doctorDetails = JSON.parse(sessionStorage.getItem("DoctorDetails"));
  const location = useLocation();
  const { item, causeId } = location.state;
  const dobString = item?.DOB;
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
  const [CauseDetails, setCauseDetails] = useState([]);
  useEffect(() => {
    const assignedPatients = item?.cause?.filter((val) => val._id === causeId);
    setCauseDetails(assignedPatients[0]);
  }, [item]);

  const [DocTreatChart, setDocTreatChart] = useState(true);
  const [DocNotes, setDocNotes] = useState(false);
  const [SurgeryReport, setSurgeryReport] = useState(false);
  const [LabTestsRequirements, setLabTestsRequirements] = useState(false);

  console.log("CauseDetails44trt54555665435: ", CauseDetails);
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
            setLabTestsRequirements(false);
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
            setLabTestsRequirements(false);
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
            setLabTestsRequirements(false);
          }}
        >
          Surgery Report
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
            setSurgeryReport(false);
            setLabTestsRequirements(true);
          }}
        >
          Lab Test
        </button>
      </div>

      <div className="container">
        <h3>
          Patient Cause :{" "}
          <span style={{ color: "red" }}>{CauseDetails?.CauseName}</span>
        </h3>
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
                        Name : {`${item?.Firstname} ${item?.Lastname}`}
                      </td>
                      <td
                        style={{ width: "33%", border: "2px  solid #20958C" }}
                      >
                        Age : {ageOutput}
                      </td>
                      <td
                        style={{ width: "33%", border: "2px  solid #20958C" }}
                      >
                        Sex : {item?.Gender}
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
                        Pt ID : {item?.PatientId}
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
                        Doctor Incharge :{" "}
                        {`${doctorDetails?.Firstname} ${doctorDetails?.Lastname} `}
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
                    </tr>
                  </thead>
                  <tbody>
                    {CauseDetails?.doctorstreatment?.map((item, i) => {
                      return (
                        <>
                          {item?.DoctorsTreatment?.map((ele) => {
                            return (
                              <tr style={{ textAlign: "center" }}>
                                <td
                                  style={{
                                    width: "15%",
                                    border: "2px solid #20958C",
                                  }}
                                >
                                  {ele?.DTdate}
                                </td>
                                <td
                                  style={{
                                    width: "10%",
                                    border: "2px solid #20958C",
                                  }}
                                >
                                  {ele?.DTTime}
                                </td>
                                <td
                                  style={{
                                    width: "50%",
                                    border: "2px solid #20958C",
                                  }}
                                >
                                  {ele?.DTNotes}
                                </td>
                                <td
                                  style={{
                                    width: "20%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Pending
                                </td>
                              </tr>
                            );
                          })}
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
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
                            Name: {`${item?.Firstname} ${item?.Lastname}`}
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Age: {ageOutput}
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Sex: {item?.Gender}
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
                            Pt ID: {item?.PatientId}
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
                            Dept: {doctorDetails?.Department}
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Doctor:{" "}
                            {`${doctorDetails?.Firstname} ${doctorDetails?.Lastname} `}
                          </td>
                        </tr>
                        <tr
                          style={{
                            width: "50%",
                            border: "2px  solid #20958C",
                          }}
                        >
                          <td
                          // style={{
                          //   width: "50%",
                          //   border: "2px  solid #20958C",
                          // }}
                          >
                            DOA: {moment(item?.createdAt).format("DD-MM-YYYY")}
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
                      className="mt-2"
                    >
                      <thead>
                        <tr style={{ textAlign: "center" }}>
                          <th
                            style={{
                              border: "2px  solid #20958C",
                            }}
                          >
                            Diagnosis
                          </th>
                          <th
                            style={{
                              border: "2px  solid #20958C",
                            }}
                          >
                            Drug Allergies
                          </th>
                          <th
                            style={{
                              border: "2px  solid #20958C",
                            }}
                          >
                            Date & Times
                          </th>
                          <th
                            style={{
                              border: "2px  solid #20958C",
                            }}
                          >
                            Notes
                          </th>
                          <th
                            style={{
                              border: "2px  solid #20958C",
                            }}
                          >
                            Doctor's sign
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {CauseDetails?.doctorsnotes?.map((item, i) => {
                          return (
                            <tr style={{ textAlign: "center" }}>
                              <td
                                style={{
                                  border: "2px  solid #20958C",
                                }}
                              >
                                {item?.Diagnosis}
                              </td>
                              <td
                                style={{
                                  border: "2px  solid #20958C",
                                }}
                              >
                                {item?.DrugAllergies}
                              </td>

                              <td
                                style={{
                                  border: "2px  solid #20958C",
                                }}
                              >
                                {item?.DNDate}/ {item?.DNTime}
                              </td>
                              <td
                                style={{
                                  border: "2px  solid #20958C",
                                }}
                              >
                                {item?.DNOtes}
                              </td>
                              <td
                                style={{
                                  border: "2px  solid #20958C",
                                }}
                              ></td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                </div>
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
                                Name: {`${item?.Firstname} ${item?.Lastname}`}
                              </td>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Age: {ageOutput}
                              </td>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Sex: {item?.Gender}
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
                                Pt ID: {item?.PatientId}
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
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Surgeon:{" "}
                                {`${doctorDetails?.Firstname} ${doctorDetails?.Lastname} `}
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
                          </tbody>
                        </Table>

                        {CauseDetails?.surgeryreport?.map((item, i) => {
                          return (
                            <>
                              <div>
                                <b>Surgery : </b> {i + 1}
                              </div>
                              <Table>
                                <tr>
                                  <td
                                    colspan="2"
                                    style={{
                                      border: "2px  solid #20958C",
                                    }}
                                  >
                                    <div>
                                      <b>Pre-Operative Operation : </b>{" "}
                                      {item?.PreOperativeDiagnosis}
                                    </div>
                                  </td>
                                  <td
                                    style={{
                                      border: "2px  solid #20958C",
                                    }}
                                  >
                                    <div>
                                      <b>Name of Operaton : </b>{" "}
                                      {item?.NameofOperation}
                                    </div>
                                  </td>
                                </tr>
                                <tr style={{ border: "2px  solid #20958C" }}>
                                  <b>Procedure : </b>
                                  {item?.Procedure}
                                </tr>
                                <tr style={{ border: "2px  solid #20958C" }}>
                                  <b>Findings : </b>
                                  {item?.Findings}
                                </tr>
                                <tr>
                                  <td style={{ border: "2px  solid #20958C" }}>
                                    <b>Swab / Instruments : </b>{" "}
                                  </td>
                                  <td style={{ border: "2px  solid #20958C" }}>
                                    {item?.ReportCheck}
                                  </td>
                                  <td style={{ border: "2px  solid #20958C" }}>
                                    Doctor's Signature
                                  </td>
                                </tr>
                              </Table>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {LabTestsRequirements ? (
                    <>
                      <div className="text-center mt-1">
                        {" "}
                        <h6
                          className="fw-bold mt-2"
                          style={{ color: "#20958C", fontSize: "30px" }}
                        >
                          LAB TESTS
                        </h6>
                      </div>
                      <div
                        id="pdf"
                        style={{
                          padding: "30px",
                          overflow: "hidden",
                        }}
                      >
                        <Table bordered style={{ textAlign: "center" }}>
                          <thead>
                            <th>S.no.</th>
                            <th>Date</th>
                            <th>Details</th>
                            {/* <th>General Ref Value</th>
                            <th>Unit</th> */}
                          </thead>
                          <tbody>
                            {CauseDetails?.RecommendedLabTest?.map(
                              (dataval, index) => {
                                return (
                                  <tr>
                                    <td>{index + 1}.</td>
                                    <td>
                                      {`${new Date(
                                        dataval?.createdAt
                                      )?.getDate()}-${
                                        new Date(
                                          dataval?.createdAt
                                        )?.getMonth() + 1
                                      }-${new Date(
                                        dataval?.createdAt
                                      )?.getFullYear()}`}
                                    </td>
                                    <td>
                                      <Table bordered>
                                        <thead>
                                          <th>S.no.</th>
                                          <th>Test Name</th>
                                          <th>General Ref value</th>
                                          <th>Unit</th>
                                        </thead>
                                        <tbody>
                                          {dataval?.labTestBookingId?.Labtests?.map(
                                            (valitem, i) => {
                                              return (
                                                <tr>
                                                  <td>{i}.</td>
                                                  <td>{valitem?.testName}</td>
                                                  <td>
                                                    {valitem?.generalRefVal}
                                                  </td>
                                                  <td>{valitem?.unit}</td>
                                                </tr>
                                              );
                                            }
                                          )}
                                        </tbody>
                                      </Table>
                                    </td>
                                  </tr>
                                );
                              }
                            )}
                          </tbody>
                        </Table>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default DoctorsViewForms;
