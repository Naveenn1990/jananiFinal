import React from "react";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

const PreAnaestheticAsses = () => {
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
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    PAC Done by Dr{" "}
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Consultant Surgeon
                  </td>
                </tr>
                <tr style={{ alignContent: "center" }}>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
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
                            Name :
                          </td>
                          <td style={{ width: "50%", border: "none" }}>
                            MR No :
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50%", border: "none" }}>
                            Age & Sex :
                          </td>
                          <td style={{ width: "50%", border: "none" }}>
                            Allergy :
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
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
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
                            Diagnosis :
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Problem :
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
                            Surgery:
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    CVS:{" "}
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    RS :
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Endocrine{" "}
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Renal
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    CNS / Musclo Skeletal{" "}
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    GIT / Hematology
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Current Medications
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Past Anaesthetic Exposure
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
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
                            Temp :
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Build :
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            PR :
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Hydrarion :
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            BP :
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Pallor :
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            R. R. :
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Icterus :
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Sp02 :
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Cyanosis :
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Heart :
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Oedema :
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Lungs :
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Peripheral pules :
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
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
                            Hb / PVC :
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            WBC :
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Plat :
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            HIV :
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            HBSAg :
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            HCV :
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            FBS :
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            PLBS :
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            RBS :
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            S. Cr :
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            BUN :
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Bd Urea :
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Na :
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            k :
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Cl :
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            S. Bil :
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            SGPT :
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            LDH :
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            PT :
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            aPTT :
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            INR :
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Others :
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
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
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
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          Mouth Opening:
                        </td>
                        <th
                          rowSpan={2}
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          ASA Grading :{" "}
                        </th>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          Denittion :
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          {" "}
                          TMJ :
                        </td>
                        <th
                          rowSpan={2}
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          Difficult Intubation :{" "}
                        </th>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          Neck Extension :
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          Mallampati Gt :
                        </td>
                        <th
                          rowSpan={2}
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          Difficult Regional:{" "}
                        </th>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          Spine Grading :
                        </td>
                      </tr>
                    </Table>
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
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
                          ></td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          ></td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          ></td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          ></td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          ></td>
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
                          ></td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          ></td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          ></td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          ></td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          ></td>
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
                          ></td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          ></td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          ></td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          ></td>
                          <td
                            style={{
                              width: "10%",
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
                    style={{
                      width: "50%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>May be posted : </span>{" "}
                  </td>
                  <td
                    style={{
                      width: "50%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>Review PAC : </span>{" "}
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
                      Pre OP Instructions :{" "}
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
                          Anaesthesia Plan :{" "}
                        </span>{" "}
                      </td>
                      <td
                        style={{
                          width: "50%",
                          border: "2px  solid #20958C",
                        }}
                      >
                        <span
                          style={{ fontWeight: "bold", textAlign: "justify" }}
                        >
                          Specific Post OP Instructions :{" "}
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
                    Date:{" "}
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      width: "50%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    Time:{" "}
                  </td>
                  <td
                    style={{
                      width: "50%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    Signature & Name{" "}
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

export default PreAnaestheticAsses;
