import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef } from "react";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";

const PreAnaestheticAsses = ({cause,preanesthetica, patientdetail }) => {

  const dobString = patientdetail?.DOB;
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

  const pdfdownload = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("preanaestheticasses.pdf");
  };

  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "preanaestheticasses.pdf",
  });
  return (
    <>
      <div className="mt-2 d-dlex text-end gap-2">
        {/* <Button
          style={{
            padding: "6px",
            border: "none",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
            marginRight: "20px",
          }}
          onClick={handleprint}
        >
          Print <FiDownload />
        </Button> */}
        <hr
          style={{
            color: "black",
            height: "3px",
            width: "100%",
            backgroundColor: "black",
            border: "none",
          }}
        />
      </div>
      {preanesthetica?.map((item) => {
        return (
          <>
            <div className="text-center mt-1">
              {" "}
              <h6
                className="fw-bold mt-2"
                style={{ color: "#20958C", fontSize: "30px" }}
              >
                PRE-ANAESTHETIC ASSESSMENT
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
                      src="/Images/logo.jpg"
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
                    PRE-ANAESTHETIC ASSESSMENT
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
                      marginBottom: "20px",
                    }}
                  >
                    <thead>
                      <tr style={{ textAlign: "center" }}>
                        <th colSpan={2}>PRE-ANAESTHETIC ASSESSMENT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          PAC Done by Dr :{" "}
                          <br/>
                    {patientdetail?.assigndocts?.map((item,i)=>{
                      return(
                        <div>{i+1}). <span style={{fontWeight:"bold"}}>Dr. {`${item?.doctorsId?.Firstname} ${item?.doctorsId?.Lastname}`}</span></div>
                      )
                    })}
                        </td>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          Consultant Surgeon :
                          <br/>
                    {patientdetail?.assigndocts?.map((item,i)=>{
                      return(
                        <div>{i+1}). <span style={{fontWeight:"bold"}}>Dr. {`${item?.doctorsId?.Firstname} ${item?.doctorsId?.Lastname}`}</span></div>
                      )
                    })}
                        </td>
                      </tr>
                      <tr style={{ alignContent: "center" }}>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
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
                                <td style={{ width: "50%", border: "none" }}>
                                  Name : {`${patientdetail?.Firstname} ${patientdetail?.Lastname}`}
                                </td>
                                <td style={{ width: "50%", border: "none" }}>
                                  MR No :
                                </td>
                              </tr>
                              <tr>
                                <td style={{ width: "50%", border: "none" }}>
                                  Age & Sex : {ageOutput}
                                </td>
                                <td style={{ width: "50%", border: "none" }}>
                                  Allergy : {patientdetail?.patientAllergies}
                                </td>
                              </tr>
                              <tr>
                                <td style={{ width: "50%", border: "none" }}>
                                  Wt/Ht/BMI:
                                </td>
                                <td style={{ width: "50%", border: "none" }}>
                                  Bld Br. :
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </td>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
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
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Diagnosis : {cause?.CauseName}
                                </td>
                                <td
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Problem : {item?.Problem}
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
                                  Surgery : {item?.Surgery}
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          CVS :{" "} {item?.CVS}
                        </td>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          RS :  {item?.RS}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          Endocrine : {" "} {item?.Endocrine}
                        </td>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          Renal : {item?.Renal}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          CNS / Musclo Skeletal : {" "}{item?.CNSSkeletal}
                        </td>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          GIT / Hematology : {item?.GITHematology}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          Current Medications : {item?.CurrentMedications}
                        </td>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          Past Anaesthetic Exposure : {item?.PastAnaesthetic}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          GENERAL EXAMINATION
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
                                  Temp : {item?.Temp}
                                </td>
                                <td
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Build : {item?.Build}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  PR : {item?.PR}
                                </td>
                                <td
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Hydrarion : {item?.Hydrarion}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  BP : {item?.BP}
                                </td>
                                <td
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Pallor : {item?.Pallor}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  R. R. : {item?.RR}
                                </td>
                                <td
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Icterus : {item?.Icterus}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Sp02 : {item?.Sp02}
                                </td>
                                <td
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Cyanosis : {item?.Cyanosis}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Heart : {item?.Heart}
                                </td>
                                <td
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Oedema : {item?.Oedema}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Lungs : {item?.Lungs}
                                </td>
                                <td
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Peripheral pules : {item?.Peripheral}
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </td>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          INVESTIGATIONS
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
                                  Hb / PVC : {item?.HbPVC}
                                </td>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  WBC : {item?.WBC}
                                </td>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Plat : {item?.Plat}
                                </td>
                              </tr>

                              <tr>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  HIV : {item?.HIV}
                                </td>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  HBSAg : {item?.HBSAg}
                                </td>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  HCV : {item?.HCV}
                                </td>
                              </tr>

                              <tr>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  FBS : {item?.FBS}
                                </td>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  PLBS : {item?.PLBS}
                                </td>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  RBS : {item?.RBS}
                                </td>
                              </tr>

                              <tr>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  S. Cr : {item?.SCr}
                                </td>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  BUN : {item?.BUN}
                                </td>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Bd Urea : {item?.BdUrea}
                                </td>
                              </tr>

                              <tr>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Na : {item?.Na}
                                </td>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  k : {item?.K}
                                </td>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Cl : {item?.Cl}
                                </td>
                              </tr>

                              <tr>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  S. Bil : {item?.SBil}
                                </td>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  SGPT : {item?.SGPT}
                                </td>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  LDH : {item?.LDH}
                                </td>
                              </tr>

                              <tr>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  PT : {item?.PT}
                                </td>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  aPTT : {item?.aPTT}
                                </td>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  INR : {item?.INR}
                                </td>
                              </tr>

                              <tr>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Others : {item?.Others}
                                </td>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                ></td>
                                <td
                                  style={{
                                    width: "33%",
                                    border: "2px  solid #20958C",
                                  }}
                                ></td>
                              </tr>
                            </tbody>
                          </Table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          <span style={{ fontWeight: "bold" }}>
                            AIRWAY ASSESSMENT
                          </span>
                          <Table
                            style={{
                              borderCollapse: "collapse",
                              width: "100%",
                              margin: "auto",
                            }}
                          >
                            <tr>
                              <td
                                style={{
                                  width: "50%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Mouth Opening : {item?.MouthOpening}
                              </td>
                              <th
                                rowSpan={2}
                                style={{
                                  width: "50%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                ASA Grading :{" "}{item?.ASAGrading}
                              </th>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  width: "50%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Denittion : {item?.Denittion}
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  width: "50%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                {" "}
                                TMJ : {item?.TMJ}
                              </td>
                              <th
                                rowSpan={2}
                                style={{
                                  width: "50%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Difficult Intubation :{" "}{item?.DifficultIntubation}
                              </th>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  width: "50%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Neck Extension : {item?.NeckExtension}
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  width: "50%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Mallampati Gt : {item?.Mallampati}
                              </td>
                              <th
                                rowSpan={2}
                                style={{
                                  width: "50%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Difficult Regional :{" "}{item?.Regional}
                              </th>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  width: "50%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Spine Grading : {item?.SpineGrading}
                              </td>
                            </tr>
                          </Table>
                        </td>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
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
                                <th
                                  colSpan={6}
                                  style={{
                                    width: "100%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Blood Products reservation status
                                </th>
                              </tr>
                              <tr>
                                <th
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Component
                                </th>
                                <th
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  PRBC
                                </th>
                                <th
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  FFP
                                </th>
                                <th
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Cryo
                                </th>
                                <th
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  RDP
                                </th>
                                <th
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  SDP
                                </th>
                              </tr>
                              <tr>
                                <th
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Check Availability
                                </th>
                                <td
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >{item?.CheckPRBC}</td>
                                <td
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >{item?.CheckFFP}</td>
                                <td
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >{item?.CheckCryo}</td>
                                <td
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >{item?.CheckRDP}</td>
                                <td
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >{item?.CheckSDP}</td>
                              </tr>
                              <tr>
                                <th
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Cross Match & Reserve
                                </th>
                                <td
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >{item?.CrossPRBC}</td>
                                <td
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >{item?.CrossFFP}</td>
                                <td
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >{item?.CrossCryo}</td>
                                <td
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >{item?.CrossRDP}</td>
                                <td
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >{item?.CrossSDP}</td>
                              </tr>
                              <tr>
                                <th
                                  style={{
                                    width: "50%",
                                    border: "2px  solid #20958C",
                                  }}
                                >
                                  Issue
                                </th>
                                <td
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >{item?.IssuePRBC}</td>
                                <td
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >{item?.IssueFFP}</td>
                                <td
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >{item?.IssueCryo}</td>
                                <td
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >{item?.IssueRDP}</td>
                                <td
                                  style={{
                                    width: "10%",
                                    border: "2px  solid #20958C",
                                  }}
                                >{item?.IssueSDP}</td>
                              </tr>
                            </tbody>
                          </Table>
                        </td>
                      </tr>

                      <tr>
                        <td
                          style={{
                            width: "50%",
                            border: "2px  solid #20958C",
                          }}
                        >
                          <span style={{ fontWeight: "bold" }}>
                            May be posted :{" "}{item?.Maybeposted}
                          </span>{" "}
                        </td>
                        <td
                          style={{
                            width: "50%",
                            border: "2px  solid #20958C",
                          }}
                        >
                          <span style={{ fontWeight: "bold" }}>
                            Review PAC :{" "}{item?.ReviewPAC}
                          </span>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "50%",
                            border: "2px  solid #20958C",
                          }}
                        >
                          <span style={{ fontWeight: "bold" }}>
                            Pre OP Instructions :{" "}{item?.PreOPInstructions}
                          </span>{" "}
                        </td>
                        <td
                          style={{
                            width: "50%",
                            border: "2px  solid #20958C",
                          }}
                        >
                          <tr>
                            <td
                              style={{
                                width: "50%",
                                border: "2px  solid #20958C",
                              }}
                            >
                              <span style={{ fontWeight: "bold" }}>
                                Anaesthesia Plan :{" "}{item?.AnaesthesiaPlan}
                              </span>{" "}
                            </td>
                            <td
                              style={{
                                width: "50%",
                                border: "2px  solid #20958C",
                              }}
                            >
                              <span
                                style={{
                                  fontWeight: "bold",
                                  textAlign: "justify",
                                }}
                              >
                                Specific Post OP Instructions :{" "}{item?.PostOPInstructions}
                              </span>{" "}
                            </td>
                          </tr>
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
                          Date :{" "}{item?.PAnesDate}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style={{
                            width: "50%",
                            border: "2px  solid #20958C",
                          }}
                        >
                          Time :{" "}{item?.PAnesTime}
                        </td>
                        <td
                          style={{
                            width: "50%",
                            border: "2px  solid #20958C",
                          }}
                        >
                          Signature & Name : {" "}
                          <img
                            alt="sign"
                            src={`http://localhost:8521/PatientREG/${item?.nursesignature}`}
                          /> 
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default PreAnaestheticAsses;
