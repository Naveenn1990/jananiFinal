import moment from "moment";
import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Table, Modal, Button } from "react-bootstrap";

import { useLocation } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa";
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

  const [show, setShow] = useState(false);
  const [labreportObj, setlabreportObj] = useState({});
  const [Item2Details, setItem2Details] = useState({});
  const componentRef1 = useRef();
  const handleprint1 = useReactToPrint({
    content: () => componentRef1.current,
    documentTitle: "LabTestReport",
  });
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
                        Ward :{" "}
                        {CauseDetails?.causeBillDetails?.[0]?.BedBillDetails?.map(
                          (item) => {
                            return <span> {item?.bedName}</span>;
                          }
                        )}
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
                  className="mt-2"
                  style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    margin: "auto",
                  }}
                  bordered
                >
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th style={{ width: "10%", border: "2px solid white" }}>
                        Date
                      </th>
                      <th style={{ width: "10%", border: "2px solid white" }}>
                        Time
                      </th>
                      <th style={{ width: "50%", border: "2px solid white" }}>
                        Notes
                      </th>
                      <th style={{ width: "20%", border: "2px solid white" }}>
                        Doctor's sign
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CauseDetails?.doctorstreatment?.map((item, i) => {
                      return (
                        <>
                          <tr style={{ textAlign: "center" }}>
                            <td
                              style={{
                                border: "2px solid #20958C",
                              }}
                            >
                              {item?.DTdate}
                            </td>
                            <td
                              style={{
                                border: "2px solid #20958C",
                              }}
                            >
                              {item?.DTTime}
                            </td>
                            <td
                              style={{
                                border: "2px solid #20958C",
                              }}
                            >
                              {item?.DTNotes}
                            </td>
                            <td
                              style={{
                                border: "2px  solid #20958C",
                              }}
                            >
                              <b>Doctor Name : </b>{" "}
                              <span>{`${item?.doctorid?.Firstname} ${item?.doctorid?.Lastname}`}</span>
                              <br />
                              <hr />
                              <img
                                alt="sign"
                                src={`http://localhost:8521/PatientREG/${item?.doctortretmentSignature}`}
                              />
                            </td>
                          </tr>
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
                            Ward :{" "}
                            {CauseDetails?.causeBillDetails?.[0]?.BedBillDetails?.map(
                              (item) => {
                                return <span> {item?.bedName}</span>;
                              }
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Dept :{" "}
                            {CauseDetails?.causeBillDetails?.[0]?.BedBillDetails?.map(
                              (item) => {
                                return <span> {item?.wardtype}</span>;
                              }
                            )}
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
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex align-items-center">
                              <div>Known Drug Allergies : </div>
                              <span>{item?.patientAllergies}</span>
                            </div>
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
                            <div className="d-flex align-items-center">
                              <div>Diagnosis : </div>
                              {CauseDetails?.CauseName}
                            </div>
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
                            Sl.No.
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
                                {i + 1}
                              </td>

                              <td
                                style={{
                                  border: "2px  solid #20958C",
                                }}
                              >
                                {item?.DNDate}
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
                              >
                                <b>Doctor Name : </b>{" "}
                                <span>{`${item?.doctorid?.Firstname} ${item?.doctorid?.Lastname}`}</span>
                                <br />
                                <hr />
                                <img
                                  alt="sign"
                                  src={`http://localhost:8521/PatientREG/${item?.doctornotesSignature}`}
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
                          RECOMMENDED LAB TESTS
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
                                          <th>Results</th>
                                        </thead>
                                        <tbody>
                                          {dataval?.labTestBookingId?.Labtests?.map(
                                            (valitem, i) => {
                                              return (
                                                <tr>
                                                  <td>{i}.</td>
                                                  <td>{valitem?.testName}</td>
                                                  <td>
                                                    <FaRegFilePdf
                                                      onClick={() => {
                                                        setItem2Details(
                                                          dataval
                                                        );
                                                        setlabreportObj(
                                                          valitem
                                                        );
                                                        setShow(true);
                                                      }}
                                                      style={{
                                                        color: "#20958C",
                                                        fontSize: "20px",
                                                      }}
                                                    />
                                                  </td>
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

                      <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        size="lg"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Lab Report</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div ref={componentRef1}>
                            <div
                              style={{
                                overflow: "hidden",
                                overflowX: "scroll",
                              }}
                            >
                              <div
                                className="invoice-rspns"
                                style={{
                                  boxShadow:
                                    " 0px 8px 32px 0px rgba(19, 19, 20, 0.37)",
                                  background: "#f5f6fa",
                                  backdropFilter: "blur(4px)",
                                  padding: "20px",
                                }}
                              >
                                <div className="">
                                  <div
                                    className="mb-5 "
                                    style={{
                                      display: "flex",
                                    }}
                                  >
                                    <div>
                                      <img
                                        style={{
                                          width: "115px",
                                          height: "115px",
                                        }}
                                        className="logo me-2 "
                                        src="/img/logo.png"
                                        alt="Logo"
                                      />{" "}
                                    </div>
                                    <div
                                      className="text-center"
                                      style={{ marginLeft: "30px" }}
                                    >
                                      <span
                                        className="fw-bold fs-4"
                                        style={{ color: "rgb(32 139 140)" }}
                                      >
                                        JANANI CLINICAL LABORATORY
                                      </span>
                                      <br />
                                      <div>
                                        <b>
                                          Upstair Canara bank , Near BDA Cross,
                                          KK Colony, Jalanagar Main Road,
                                          Vijayapur--586109
                                        </b>
                                        <div>
                                          Phone:- 08352-277077 ,9606831158 ,
                                          Email:- jananihospital2018@gmail.com
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="row"
                                  style={{
                                    borderBottom: "2px solid",
                                    padding: "0px",
                                    display: "flex",
                                    //   justifyContent: "space-between",
                                  }}
                                >
                                  <div className="col-sm-6">
                                    <Table>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <b>Patient ID</b>{" "}
                                          </td>
                                          <td>{item.PatientId}</td>
                                        </tr>

                                        <tr>
                                          <td>
                                            <b>Patient Name</b>{" "}
                                          </td>
                                          <td>
                                            {item?.Firstname} {item?.Lastname}
                                          </td>
                                        </tr>

                                        <tr>
                                          <td>
                                            <b>Patient Age</b>{" "}
                                          </td>
                                          <td>
                                            {moment().diff(
                                              moment(item?.DOB),
                                              "years"
                                            )}{" "}
                                            years
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <b>Gender</b>
                                          </td>
                                          <td>{item?.Gender}</td>
                                        </tr>

                                        <tr>
                                          <td>
                                            <b>Email</b>
                                          </td>
                                          <td> {item?.Email}</td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                  <div className="col-sm-6">
                                    <Table>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <b>Phone</b>
                                          </td>
                                          <td>{item?.PhoneNumber}</td>
                                        </tr>

                                        <tr>
                                          <td>
                                            <b>Referred By</b>
                                          </td>
                                          <td>
                                            {
                                              Item2Details?.labTestBookingId
                                                ?.hospitallabRefferedBy
                                            }
                                          </td>
                                        </tr>

                                        <tr>
                                          <td>
                                            <b>Register Date</b>
                                          </td>
                                          <td>
                                            {moment(item?.testDate).format(
                                              "DD/MM/YYYY"
                                            )}
                                            years
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <b>Sample </b>
                                          </td>
                                          <td> {labreportObj?.sampleName}</td>
                                        </tr>

                                        <tr>
                                          <td>
                                            <b>Collected On</b>{" "}
                                          </td>
                                          <td>
                                            {`${new Date(
                                              labreportObj?.sampleCollectionDateTime
                                            ).getDate()} - ${
                                              new Date(
                                                labreportObj?.sampleCollectionDateTime
                                              ).getMonth() + 1
                                            } - ${new Date(
                                              labreportObj?.sampleCollectionDateTime
                                            ).getFullYear()}`}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                </div>

                                <div
                                  style={{
                                    marginTop: "20px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  {" "}
                                  <h3>{labreportObj?.testName}</h3>
                                </div>
                                <div className="row mt-2">
                                  <Table bordered>
                                    <thead>
                                      <tr>
                                        <th>Test Name</th>
                                        <th>Result</th>
                                        <th>Unit</th>
                                        <th>General Reference Value</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {labreportObj?.subTest?.map(
                                        (itemdata) => {
                                          return (
                                            <tr>
                                              <td>{itemdata?.subtestName}</td>
                                              <td>
                                                <b>
                                                  {
                                                    itemdata?.subtestpatientReportVal
                                                  }
                                                </b>
                                              </td>
                                              <td>{itemdata?.subtestunit}</td>
                                              <td>
                                                {itemdata?.subtestgeneralRefVal}
                                              </td>
                                            </tr>
                                          );
                                        }
                                      )}
                                    </tbody>
                                  </Table>
                                </div>

                                <div>
                                  <p style={{ textAlign: "center" }}>
                                    ---------The end of Report---------
                                  </p>
                                </div>
                                <hr />
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={() => setShow(false)}
                          >
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleprint1}>
                            Print
                          </Button>
                        </Modal.Footer>
                      </Modal>
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
