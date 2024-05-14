import axios from "axios";
import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const SurgeryReport = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { patientdetails, cause } = location.state || {};

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

  const [SurgeryName, setSurgeryName] = useState("");
  const [Procedure, setProcedure] = useState("");
  const [Findings, setFindings] = useState("");

  const submitSurgeryReport = async () => {
    try {
      const config = {
        url: "/",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "content-type": "application/json" },
        data: {
          patientId: patientdetails?._id,
          causeId: cause?._id,
          SurgeryName: SurgeryName,
          Procedure: Procedure,
          Findings: Findings,
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
          onClick={() => navigate(-1)}
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
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Name:{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Age:{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Sex:{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={3}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Pt ID:{" "}
                  </td>
                  <td
                    colSpan={3}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Ward:
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Pre-Operative Diagnosis
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Surgeon:{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Assistant-1:{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Assistant-2:{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Anaesthetist:{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Scrub Nurse:{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Circ Nurse:{" "}
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "16.6%", border: "2px  solid #20958C" }}>
                    Skin Wound Condition:{" "}
                  </td>
                  <td style={{ width: "16.6%", border: "2px  solid #20958C" }}>
                    Clean:{" "}
                  </td>
                  <td style={{ width: "16.6%", border: "2px  solid #20958C" }}>
                    Slightly Contaminated:{" "}
                  </td>
                  <td
                    style={{ width: "16.6%", border: "2px  solid #20958C" }}
                  ></td>
                  <td style={{ width: "16.6%", border: "2px  solid #20958C" }}>
                    Heavily COntaminated:{" "}
                  </td>
                  <td
                    style={{ width: "16.6%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    colSpan={6}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Name of Operaton{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    {/* Procedure:{" "} */}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Procedure</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
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
                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                    Swab / Instruments{" "}
                  </td>
                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                    checked <hr />
                  </td>
                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
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
    </div>
  );
};

export default SurgeryReport;
