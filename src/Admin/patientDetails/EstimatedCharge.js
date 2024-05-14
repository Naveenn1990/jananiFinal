import React, { useState } from "react";

import { Table, Modal, ProgressBar, Button, Form } from "react-bootstrap";

import { FiDownload, FiThumbsUp } from "react-icons/fi";

const EstimatedCharge = () => {
  return (
    <>
      <div className="mt-2 d-dlex text-end gap-2">
        <button
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
        </button>
      </div>
      <div
        id="pdf"
        style={{
          padding: "15px",
          overflow: "hidden",
          overflowX: "scroll",
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
              Hospitalization Estimated Charge sheet Cum Consent form
            </h6>
          </div>
          <div
            style={{
              paddingLeft: "42px",
              paddingRight: "42px",
              textAlign: "justify",
            }}
          >
            <p style={{ fontSize: "18px" }}>
              1. Ward/ Room Charges
              <Table
                style={{
                  border: "1px  solid #20958C",
                  borderCollapse: "collapse",
                  width: "100%",
                  margin: "auto",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        ----------------
                      </span>{" "}
                    </td>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      Ward/ Room Category Charges per Day (Including Room Rent,
                      nursing Charges, Duty Doctor Charges, Monitoring, charges,
                      Primary Consultant Charges).
                    </td>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      Remark:{" "}
                      <span style={{ fontWeight: "bold" }}>
                        Vary professional
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan={3}
                      style={{ width: "100%", border: "1.5px  solid #20958C" }}
                    >
                      ---------------
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan={3}
                      style={{ width: "100%", border: "1.5px  solid #20958C" }}
                    >
                      ---------------
                    </td>
                  </tr>
                </tbody>
              </Table>
            </p>
            <p style={{ fontSize: "18px" }}>
              2. Surgery Package Charges
              <Table
                style={{
                  border: "1px  solid #20958C",
                  borderCollapse: "collapse",
                  width: "100%",
                  margin: "auto",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        width: "33%",
                        border: "1.5px  solid black",
                        textAlign: "justify",
                      }}
                    >
                      Name of the Procedure/ Procedures
                    </th>
                    <th style={{ width: "33%", border: "1.5px  solid black" }}>
                      Estimated Cost
                    </th>
                    <th style={{ width: "33%", border: "1.5px  solid black" }}>
                      Remark
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      ..procedure ...
                    </td>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      10,000
                    </td>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      Comfortable
                    </td>
                  </tr>
                </tbody>
              </Table>
            </p>
            <p style={{ fontSize: "18px" }}>
              3.Special Procedure Charges
              <Table
                style={{
                  border: "1px  solid #20958C",
                  borderCollapse: "collapse",
                  width: "100%",
                  margin: "auto",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        width: "33%",
                        border: "1.5px  solid black",
                        textAlign: "justify",
                      }}
                    >
                      Name of the Procedure/ Procedures
                    </th>
                    <th style={{ width: "33%", border: "1.5px  solid black" }}>
                      Estimated Cost
                    </th>
                    <th style={{ width: "33%", border: "1.5px  solid black" }}>
                      Remark
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      ..procedure ...
                    </td>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      10,000
                    </td>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      Comfortable
                    </td>
                  </tr>
                </tbody>
              </Table>
            </p>
            <p style={{ fontSize: "18px" }}>
              4. Special Investigation Charges
              <Table
                style={{
                  border: "1px  solid #20958C",
                  borderCollapse: "collapse",
                  width: "100%",
                  margin: "auto",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        width: "33%",
                        border: "1.5px  solid black",
                        textAlign: "justify",
                      }}
                    >
                      Name of the Investigation Charges
                    </th>
                    <th style={{ width: "33%", border: "1.5px  solid black" }}>
                      Estimated Cost
                    </th>
                    <th style={{ width: "33%", border: "1.5px  solid black" }}>
                      Remark
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      ..procedure ...
                    </td>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      10,000
                    </td>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      Comfortable
                    </td>
                  </tr>
                </tbody>
              </Table>
            </p>
            <p style={{ fontSize: "18px" }}>
              <span style={{ color: "#20958C", fontWeight: "600" }}>Note</span>{" "}
              : The above stated details exclude charges for routine procedure/
              Investigation, Pharmacy / Medicine Specialists and
              superSpecialists consultations, ventilator and oxygen, Synringe
              pump, Patient transport and usages of any other Equipments/
              Materials as required.
            </p>
            <p
              style={{
                fontSize: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h4
                style={{
                  color: "#20958C",
                  fontWeight: "600",
                  justifyContent: "center",
                }}
              >
                Declaration
              </h4>
            </p>
            <p style={{ fontSize: "18px" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I,{" "}
              <span style={{ fontWeight: "bold" }}>Mannu Kumar</span> have been
              explained in detail the above mentioned charges in a language that
              I understand.
              <br />
              <br />
              Patient/ Patient Relative Name & Signature :{" "}
              <span style={{ fontWeight: "bold" }}>Mannu</span>{" "}
            </p>

            <Table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                border: "none",
              }}
            >
              <tbody>
                <tr>
                  <td style={{ border: "1px  solid #20958C" }}>
                    Withness-1/Relative-1 :{" "}
                    <span style={{ fontWeight: "bold" }}>Hela</span>{" "}
                  </td>
                  <td style={{ border: "1px  solid #20958C" }}>
                    Withness-2/Relative-2:{" "}
                    <span style={{ fontWeight: "bold" }}>Loki</span>{" "}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px  solid #20958C" }}>
                    Phone No:{" "}
                    <span style={{ fontWeight: "bold" }}>9125438700</span>{" "}
                  </td>
                  <td style={{ border: "1px  solid #20958C" }}>
                    Phone No:{" "}
                    <span style={{ fontWeight: "bold" }}>6364004511</span>{" "}
                  </td>
                </tr>
              </tbody>
            </Table>

            <p style={{ fontSize: "18px" }}>
              Name: Designation & Signature of the hospital staff Explaining the
              Estinated Cost <br /> <br />
              <span style={{ fontWeight: "bold" }}>
                Dr. Strange: surgeon
              </span>{" "}
            </p>
            <p style={{ fontSize: "18px", textAlignLast: "end" }}>
              Signature
              <input type="text" name="" id="" className="vi_0" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstimatedCharge;
