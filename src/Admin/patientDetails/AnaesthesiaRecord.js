import React from "react";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

const AnaesthesiaRecord = () => {
  return (
    <>
      <div className="mt-2 d-dlex text-end gap-2">
        <Button
          style={{
            padding: "6px",
            border: "none",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
            marginRight: "20px",
          }}
        >
          Print <FiDownload />
        </Button>
      </div>
      <div className="text-center mt-1">
        {" "}
        <h6
          className="fw-bold mt-2"
          style={{ color: "#20958C", fontSize: "30px" }}
        >
          ANAESTHESIA RECORD
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
              ANAESTHESIA RECORD
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
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Date:</p>
                      <p>OT:</p>
                      <p>Consent: </p>
                    </div>
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Regular /High-risk:</p>
                      <p>NPO Status: </p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <div>
                      <p>Anaesthesiologist:</p>
                      <p>Surgeion :</p>
                    </div>
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <p>Immediate Pre-op Vitals :</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <p>PR:</p>
                      <p>BP:</p>
                      <p>RR: </p>
                      <p>SpO2</p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <p>Anaesthesiologist:</p>
                    <p>Surgeion :</p>
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <p>Anaesthesia:</p>
                      <p>Start-:</p>
                      <p>Complete-: </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <p>Surgery:</p>
                      <p>Start-:</p>
                      <p>Complete-: </p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>GA Details: LMA:</p>
                      <p>Size:</p>
                      <p>ETT Size: </p>
                      <p>Cuffed / uncuffed</p>
                      <p>No of Attempts</p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Diffcult intubation: tes/no</p>
                      <p>CL gr:</p>
                      <p>VLS.: yes/no</p>
                      <p>Sellick's Manceuvre: yes/no </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>O2: L/min:</p>
                      <p>N20:</p>
                      <p>Air: </p>
                      <p>L/min</p>
                      <p>Inhalational Agent</p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>
                        {" "}
                        Ventilation : Spont / IPPv / Low Flows / Mannual /
                        Ventilator-vt
                      </p>
                      <p>RR:</p>
                      <p>AWP:</p>
                      <p>PEEP </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    <div>
                      <p>
                        Regional Anaesthesia : Sprial / Epidural / CSEA / Caudal
                      </p>
                      <tr>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          Tip/g
                        </td>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          Position Insert/Inj.
                        </td>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          Space LORS /A
                        </td>
                        <td style={{ border: "0.5px  solid #20958C" }}>Time</td>
                        <td style={{ border: "0.5px  solid #20958C" }}>Drug</td>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          V/ Dose
                        </td>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          Onset
                        </td>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          Derm. Level
                        </td>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          Motor Block
                        </td>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          Paraesthesia Insert / inj
                        </td>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          BI tap
                        </td>
                        <td style={{ border: "0.5px  solid #20958C" }}>DP</td>
                      </tr>

                      <tr>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          Spinal
                        </td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                      </tr>
                      <tr>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          Epidural
                        </td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                        <td style={{ border: "0.5px  solid #20958C" }}></td>
                      </tr>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style={{ border: "2px  solid #20958C" }}>Comments</td>
                  <td style={{ border: "2px  solid #20958C" }}>Topups:</td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                    Patient Position :
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                    Monitoring : SpO2/ ECG / NIBP / ABP / CVP / Urine Output
                    Ryles Tube
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "60%" }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>V-SBP</p>
                          <p>DBP</p>
                          <p>PR </p>
                          <p>X-CVP</p>
                          <p>AWP</p>
                          <p>Site of Infusion</p>
                        </div>
                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            SpO2
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            EtcO2
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            FlO2
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            Inhal Ag
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            Temp
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            200
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            180
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            160
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            140
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            120
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            100
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            80
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            60
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            40
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            20
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            10
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            O/ -ve
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontWeight: "small",
                              fontSize: "14px",
                              border: "0.5px  solid #20958C",
                            }}
                          >
                            Time
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                          <td style={{ border: "0.5px  solid #20958C" }}></td>
                        </tr>

                        <p>
                          Recovery : Satisfacoty / Delayed / Laryngospasm / Re-
                          intubation / Airway
                        </p>
                        <p>Consicous / sedated / Drowsy</p>
                        <p>Reflexes & Muscle tone : </p>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>Vitala before shifting PR :</p>
                          <p>BP:</p>
                          <p>SpO2: </p>
                          <p>VAS:</p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>Shifted to POW / HDU / ICU :</p>
                          <p>El. Ventilation :</p>
                          <p>yes</p>
                          <p>no</p>
                        </div>

                        <p style={{ border: "1px solid #20958C" }}>
                          <b>
                            {" "}
                            Post-Operative instructions as written in post OP
                            Doctor Orders Sheet.
                          </b>
                        </p>
                      </div>

                      <div style={{ width: "40%" }}>
                        <Table>
                          <tr>
                            <td style={{ border: "0.5px  solid #20958C" }}>
                              J-O
                            </td>
                            <td
                              colSpan={2}
                              style={{ border: "0.5px  solid #20958C" }}
                            >
                              DRUGS / DOSE & ROUTE
                            </td>
                          </tr>
                          <tr>
                            <td
                              rowSpan={2}
                              style={{ border: "0.5px  solid #20958C" }}
                            >
                              Cryst
                            </td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                          </tr>
                          <tr>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                          </tr>
                          <tr>
                            <td
                              rowSpan={2}
                              style={{ border: "0.5px  solid #20958C" }}
                            >
                              Colloids
                            </td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                          </tr>
                          <tr>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                          </tr>
                          <tr>
                            <td
                              rowSpan={2}
                              style={{ border: "0.5px  solid #20958C" }}
                            >
                              Blood
                            </td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                          </tr>
                          <tr>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                          </tr>

                          <tr>
                            <td
                              rowSpan={2}
                              style={{ border: "0.5px  solid #20958C" }}
                            >
                              EBL
                            </td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                          </tr>
                          <tr>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                          </tr>

                          <tr>
                            <td
                              rowSpan={2}
                              style={{ border: "0.5px  solid #20958C" }}
                            >
                              Urine
                            </td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                          </tr>
                          <tr>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                          </tr>

                          <tr>
                            <td
                              rowSpan={2}
                              style={{ border: "0.5px  solid #20958C" }}
                            >
                              Ascitis
                            </td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                          </tr>
                          <tr>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                          </tr>

                          <tr>
                            <td
                              rowSpan={2}
                              style={{ border: "0.5px  solid #20958C" }}
                            >
                              RTA
                            </td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                          </tr>
                          <tr>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                            <td style={{ border: "0.5px  solid #20958C" }}></td>
                          </tr>

                          <tr>
                            <td
                              colSpan={3}
                              style={{
                                border: "2px  solid #20958C",
                              }}
                            >
                              Total I-O:
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={3}
                              style={{
                                height: "500px",
                                border: "2px  solid #20958C",
                              }}
                            >
                              Any Adverse Events
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={3}
                              style={{
                                border: "2px  solid #20958C",
                              }}
                            >
                              Signature :
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={3}
                              style={{
                                border: "2px  solid #20958C",
                              }}
                            >
                              Name :
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={3}
                              style={{
                                border: "2px  solid #20958C",
                              }}
                            >
                              Date :
                            </td>
                          </tr>
                        </Table>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnaesthesiaRecord;
