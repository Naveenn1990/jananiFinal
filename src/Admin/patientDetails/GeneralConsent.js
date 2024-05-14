import React, { useState } from "react";

import { Button, Form, Table } from "react-bootstrap";

import { FiDownload } from "react-icons/fi";

const GeneralConsent = () => {
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
      <div
        id="pdf"
        style={{ padding: "15px", overflow: "hidden", overflowX: "scroll" }}
      >
        <div
          style={{
            padding: "5px",
            border: "2px solid #20958C",
            // width: "1057px",
            margin: "auto",
            borderRadius: "20px",
            // height: "1235px",
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
              GENERAL CONSENT FORM
            </h6>
          </div>
          <div
            style={{
              border: "2px solid #20958C",
              padding: "20px 42px",
              textAlign: "justify",
              width: "90%",
              margin: "auto",
            }}
          >
            <p style={{ fontSize: "18px" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, Want to get
              myself/ my relative{" "}
              <span style={{ fontWeight: "bold" }}>Mannu</span> Admitted and
              treated in this hospital. The decision of coming here is purely on
              my discretion.
            </p>
            <p style={{ fontSize: "18px" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, am fully aware
              with the facilities available for the care of myself/ my relative
              and have full faith in the staff of this hospital/ Medical
              Establishment. I have been explained that admitted Patients and
              Patients required emergency care take priority of the Doctor. I
              fully agree and co-operate.{" "}
            </p>

            <p style={{ fontSize: "18px" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, fully
              understand and agree to pay the fees charged by the Doctor/
              Hospital for the professional service rendered to me/ relative
              during the illness regardies of the end result of the illness. I
              promise not to misbehave either with Doctors or any of the
              Hospital staff. I know that indecency on my part will lead to
              explusion from the Hospital.{" "}
            </p>
            <p style={{ fontSize: "18px" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, hereby on my
              own free will, authorize the hospital to admit myself/ my
              relative.{" "}
            </p>

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
                  <th style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    Doctor
                    {/* <span style={{ fontWeight: "bold" }}>Mannu Kumar</span>{" "} */}
                  </th>
                  <th style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    Tenant/ Relative
                    {/* <span style={{ fontWeight: "bold" }}>02/05/2024</span>{" "} */}
                  </th>
                  <th style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    Patient
                    {/* <span style={{ fontWeight: "bold" }}>25 years</span> */}
                  </th>
                </tr>
                <tr>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    Name:{" "}
                    <span style={{ fontWeight: "bold" }}>Dr. Strange</span>{" "}
                  </td>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    Name: <span style={{ fontWeight: "bold" }}>Mr. Bolt</span>{" "}
                  </td>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    Sign: <span style={{ fontWeight: "bold" }}></span>{" "}
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    Sign: <span style={{ fontWeight: "bold" }}></span>{" "}
                  </td>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    Relationship:{" "}
                    <span style={{ fontWeight: "bold" }}>Uncle</span>{" "}
                  </td>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    <span style={{ fontWeight: "bold" }}></span>
                  </td>
                </tr>
              </tbody>
            </Table>

            <p style={{ fontSize: "18px", marginTop: "20px" }}>
              Date/Time:{" "}
              <span style={{ fontWeight: "bold" }}>05/05/2024 - 16:50</span>{" "}
            </p>
          </div>
          {/* <div className="text-center mt-1">
                {" "}
                <h6
                  className="fw-bold mt-2"
                  style={{ color: "#20958C", fontSize: "30px" }}
                >
                  ಸಾಮಾನ್ಯ ಒಪ್ಪಿಗೆ ಪತ್ರ
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
                  ಕೇಳಿಗಿನ ಸಹಿ ಮಾಡಿದ ನಾನು / ನನ್ನ ಸಂಬಂಧಿ{" "}
                  <span style={{ borderBottom: "1px solid black" }}>
                    <input
                      type="text"
                      className="vi_0"
                      style={{ width: "490px" }}
                      value={userdetail?.Firstname}
                      readOnly
                    />
                  </span>{" "}
                  ಗೆ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ದಾಖಲಿಸಲು ಅನುಮತಿ ಕೊಟ್ಟಿದ್ದೇನೆ.
                </p>
                <p style={{ fontSize: "18px" }}>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ನಾನು ಸ್ವೈಚ್
                  ಇಂದ ಈ ಆಸ್ಪತ್ರೆಗೆ ಬಂದಿದ್ದೇನೆ ಮತ್ತು ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಲಭ್ಯವಿರುವ
                  ವಿಶೇಷತೆಗಳ ಬಗ್ಗೆ ನನಗೆ ತಿಳಿಯಿಲ್ಲ ಮತ್ತು ನಾನು ತಿಳಿದಿಲ್ಲ. ಆಸ್ಪತ್ರೆಯ
                  ನಿಯಮಗಳನ್ನು ಸರಿಯಾಗಿ ಪಾಲಿಸುತ್ತೇನೆ ಮತ್ತು ನನ್ನಿಂದ ವೈದ್ಯರು,
                  ಆಸ್ಪತ್ರೆಯ ಸಿಬ್ಬಂದಿಗಳು ಮತ್ತು ಇತರ ರೋಗಿಗಳಿಗೆ ಯಾವ ತೊಂದರೆಯೂ
                  ಇಲ್ಲದಂತೆ ನನ್ನ ಸಹಾಯವನ್ನು ಒದಗಿಸುತ್ತೇನೆ. ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ನಡೆಯುವ
                  ಸೇವೆಗಳ ಬಿಲಗಳನ್ನು ಪವತಿಸುತ್ತೇನೆ.{" "}
                </p>
              </div> */}
        </div>
      </div>
    </>
  );
};

export default GeneralConsent;
