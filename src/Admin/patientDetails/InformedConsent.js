import React, { useState } from "react";
import { Table, Modal, ProgressBar, Button, Form } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

const InformedConsent = () => {
  return (
    <>
      {/* English */}
      <div
        className="mt-2 d-dlex text-end gap-2"
        style={{ justifyContent: "right" }}
      >
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
              Informed Consent for High risk Procedure
            </h6>
          </div>
          <div
            style={{
              paddingLeft: "42px",
              paddingRight: "42px",
              textAlign: "justify",
            }}
          >
            <div className="informedTable">
              <Table
                className=""
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
                      Patient Name:{" "}
                      <span style={{ fontWeight: "bold" }}>Mannu Kumar</span>{" "}
                    </td>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      Date:{" "}
                      <span style={{ fontWeight: "bold" }}>02/05/2024</span>{" "}
                    </td>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      Age: <span style={{ fontWeight: "bold" }}>25 years</span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      OP No: <span style={{ fontWeight: "bold" }}>12</span>{" "}
                    </td>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      IP No: <span style={{ fontWeight: "bold" }}>1200</span>{" "}
                    </td>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      Sex: <span style={{ fontWeight: "bold" }}>Male</span>{" "}
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={3} style={{ border: "1.5px  solid #20958C" }}>
                      <p>
                        I/ We{" "}
                        <span style={{ fontWeight: "bold" }}>
                          JananiHospital
                        </span>{" "}
                        have been explained about the medical condition and the
                        prospered surgery by <br /> Dr.{" "}
                        <span style={{ fontWeight: "bold" }}>Doom </span> and{" "}
                        Dr. {"  "}{" "}
                        <span style={{ fontWeight: "bold" }}>Strange</span>
                        <br />
                        <br />
                        Medical Condition/Diagnosis:{" "}
                        <span style={{ fontWeight: "bold" }}>XXX</span> <br />
                        <br />
                        Proposed operatve Procedure:{" "}
                        <span style={{ fontWeight: "bold" }}>YYY</span> <br />
                        <br />
                        I/We, (the relatives/legal guardian of) Mr./Mrs{" "}
                        <span style={{ fontWeight: "bold" }}>Mannu</span> who is
                        admitted on{" "}
                        <span style={{ fontWeight: "bold" }}>
                          JananiHospital
                        </span>{" "}
                        have been explained in the languages understood by
                        me/us, about the pros & cons of the operation and risks
                        involved during and after the surgery, and that the
                        procedure carries a higher risk than the usual cases.
                        <br />
                        <br />
                        I/We, have been explained in detail about the nature of
                        the surgery/procedure, the possible benefits and
                        complications. I/We have been explained that this case
                        carries a higher risk than the usual and the reasons for
                        the same. During the course of the surgical procedure,
                        circumstances may arise or a condidtion may be found
                        which may require suspension or extension of planned
                        procedure or necessary performance of an alternative
                        procedure.
                        <br />
                        <br />
                        I/We, have been informed the high risk involved in
                        medical procedures which might necessitate admission to
                        ICU/NICU/Mecanial Ventilation/Endotracheal intubation
                        Lumbar puncture/Bone marrow aspiration, Intercostal
                        drainage, Arterial Central Dialysis, line, Exchange
                        transfusion, FNAC Biopsy etc.
                        <br />
                        <br />
                        I/We have beeen informed that the operation
                        (s)/Procedures (s) involved the risk of unsuccessful
                        result,complication,temporary or permanent injury or
                        disability and even fatality form known or unforeseen
                        causes. No guarantee or promises have been made to me/us
                        concerning the results of the procedure or treatment.
                        <br />
                        <br />
                        I/We, understood that I/We, have the right to withhold
                        consent for the procedure/surgery I/We. also understand
                        that I/We, have a right to obtain a second opinion
                        transfer to a different centre and the risk involved in
                        such a decision.
                        <br />
                        Knowing all the above mentioned facts / We, give my/our
                        Risk Consent for the above mentioned surgery/Procedure.
                        <br />
                        <br />
                        I/We also indemnify the hospital, the concerned doctors
                        and the hospital staff in case of any adverse
                        consequences arising from the surgery.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
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
                    <th style={{ width: "20%" }}></th>
                    <th style={{ width: "20%" }}>Name</th>
                    <th style={{ width: "20%" }}>Signature</th>
                    <th style={{ width: "20%" }}>Date</th>
                    <th style={{ width: "20%" }}>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      Patient/Patirnt Surrogate
                    </td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      Witness
                    </td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      Doctor
                    </td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      Relative/Legal_guardian(relationship with patient)
                    </td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      {/* kannada */}
      {/* <div className="mt-2 d-dlex text-end gap-2">
                    <button
                      style={{
                        padding: "6px",
                        border: "none",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "0px",
                      }}
                      onClick={createPDF3}
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
                        width: "1073px",
                        margin: "auto",
                        borderRadius: "20px",
                        height: "1700px",
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
                            ಜನನಿ ಬಹು ವಿಶೇಷತೆಯ ಆಸ್ಪತ್ರೆ ಮತ್ತು ಸಂಶೋಧನಾ ಕೇಂದ್ರ
                          </h4>
                          <h6 className="fw-bold" style={{ fontSize: "19px" }}>
                            "ಕನರಾ ಬ್ಯಾಂಕ್ ಪಕ್ಕ, ಜಾಲನಗರ್ ಮುಖ್ಯ ರಸ್ತೆ, ಕೆ.ಕೆ.
                            ಕಾಲೋನಿ, ವಿಜಯಪುರ-586109
                          </h6>
                          <h6 style={{ fontSize: "16px" }}>
                            ದೂರವಾಣಿ: 08352-277077, ಮೊಬೈಲ್: 9606031158,
                            7090831204 ಇಮೇಲ್: jananihospital2018@gmail.com
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
                          ಅತಿದೊಡ್ಡ ಅಪಾಯದ ಕ್ರಮಕ್ಕಾಗಿ ತತ್ವಸೂಚನಾತ್ಮಕ ಒಪ್ಪಿಗೆ
                        </h6>
                      </div>
                      <div
                        style={{
                          paddingLeft: "42px",
                          paddingRight: "42px",
                          textAlign: "justify",
                        }}
                      >
                        <p style={{ fontSize: "20px" }}>
                          <div className="container">
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
                              <div
                                className="col-md-4"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                ರೋಗಿಯ ಹೆಸರು:{" "}
                                <span>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="vi_0"
                                    style={{ width: "163px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-4"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                ದಿನಾಂಕ:{" "}
                                <span>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="vi_0"
                                    style={{ width: "236px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-4"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                ವಯಸ್ಸು:{" "}
                                <span>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="vi_0"
                                    style={{ width: "230px" }}
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <div
                                className="col-md-4"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                ಓಪಿ ಸಂಖ್ಯೆ:{" "}
                                <span>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="vi_0"
                                    style={{ width: "215px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-4"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                ಐಪಿ ಸಂಖ್ಯೆ:{" "}
                                <span>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="vi_0"
                                    style={{ width: "214px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-4"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                ಲಿಂಗ :&nbsp;&nbsp;&nbsp;{" "}
                                <span>
                                  <input
                                    type="radio"
                                    name=""
                                    id=""
                                    className="vi_0"
                                  />
                                  ಪುರುಷ &nbsp;&nbsp;&nbsp;
                                  <input
                                    type="radio"
                                    name=""
                                    id=""
                                    className="vi_0"
                                  />
                                  ಸ್ತ್ರೀ{" "}
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <div
                                className="col-md-12"
                                style={{
                                  padding: "20px",
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <p style={{ fontSize: "18px" }}>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; ನಾನು/ನಾವು{" "}
                                  <span
                                    style={{ borderBottom: "1px solid black" }}
                                  >
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "301px" }}
                                    />
                                  </span>
                                  ವೈದ್ಯಕೀಯ ಸ್ಥಿತಿಯ ಬಗ್ಗೆ ನನಗೆ/ನಮಗೆ ವಿವರಿಸಲಾಗಿದೆ
                                  ಮತ್ತು ನಿಗದಿತ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಡಾ.
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "680px" }}
                                    />
                                    <br />
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                                    &nbsp;ಡಾ.
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "680px" }}
                                    />
                                  </span>{" "}
                                </p>

                                <p style={{ fontSize: "18px" }}>
                                  ವೈದ್ಯಕೀಯ ಸ್ಥಿತಿ/ರೋಗನಿದಾನ :
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "670px" }}
                                    />
                                  </span>
                                  "ಪ್ರಸ್ತಾಪಿತ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಕ್ರಮ:
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "684px" }}
                                    />
                                  </span>{" "}
                                </p>
                                <p style={{ fontSize: "18px" }}>
                                  ನಾನು/ನಾವು, (ನಾತಿ/ಕಾನೂನು ಸಂರಕ್ಷಕ)
                                  ಶ್ರಿ./ಶ್ರಿಮತಿ, ಅವರು ವಾಸ್ತವ್ಯಕ್ಕೆ ಬರುವ ದಿನಾಂಕ
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "200px" }}
                                    />
                                  </span>
                                  ಅವರು ಪ್ರವೇಶಗೊಂಡ{" "}
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "200px" }}
                                    />
                                  </span>
                                  ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಭಾಷೆಯಲ್ಲಿ, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ
                                  ಪ್ರಯೋಜನಗಳು ಮತ್ತು ಹಾನಿಗಳು ಮತ್ತು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ
                                  ಸಮಯದಲ್ಲಿ ಮತ್ತು ನಂತರ ಉಂಟಾಗುವ ಅಪಾಯಗಳ ಬಗ್ಗೆ
                                  ವಿವರಿಸಲಾಗಿದೆ, ಮತ್ತು ಈ ಕ್ರಮವು ಸಾಮಾನ್ಯ
                                  ಪ್ರಕರಣಗಳಿಗಿಂತ ಹೆಚ್ಚು ಅಪಾಯವನ್ನು ಹೊಂದಿದೆ.
                                  <br />
                                  <br />
                                  ನಾವು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ/ಕ್ರಮದ ಸ್ವರೂಪ, ಸಾಧ್ಯವಾಗುವ
                                  ಪ್ರಯೋಜನಗಳು ಮತ್ತು ಸಂಕೀರ್ಣತೆಗಳ ಬಗ್ಗೆ ವಿವರವಾಗಿ
                                  ವಿವರಿಸಲಾಗಿದೆ. ಈ ಪ್ರಕರಣವು ಸಾಮಾನ್ಯವಕ್ಕಿಂತ ಹೆಚ್ಚು
                                  ಅಪಾಯವನ್ನು ಹೊಂದಿದೆ ಮತ್ತು ಅದಕ್ಕೆ ಕಾರಣಗಳನ್ನೂ
                                  ವಿವರಿಸಲಾಗಿದೆ. ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಕ್ರಮದ ಅವಧಿಯಲ್ಲಿ,
                                  ಯೋಜಿತ ಕ್ರಮವನ್ನು ಸ್ಥಗಿತಗೊಳಿಸಲು ಅಥವಾ ವಿಸ್ತರಿಸಲು
                                  ಅಥವಾ ಬದಲ್ಮಾರ್ಗ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯನ್ನು ನೆರವೇರಿಸಲು
                                  ಅಗತ್ಯವಿರುವ ಪರಿಸ್ಥಿತಿಗಳು ಅಥವಾ ಸ್ಥಿತಿಯನ್ನು
                                  ಕಂಡುಹಿಡಿಯಬಹುದು.
                                  <br />
                                  <br />
                                  ನಾವು ವೈದ್ಯಕೀಯ ಕ್ರಮಗಳಲ್ಲಿ ನಡೆಯಬಹುದಾದ ಹೆಚ್ಚಿನ
                                  ಅಪಾಯಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ನೀಡಲಾಗಿದೆ, ಇದು
                                  ICU/NICU/ಮೆಕಾನಿಕಲ್ ವೆಂಟಿಲೇಶನ್/ಎಂಡೋಟ್ರಾಕಿಯಲ್
                                  ಇಂಟ್ಯೂಬೇಷನ್, ಲಂಬಾರ್ ಪುಂಕ್ಚರ್/ಎಲುಬಿನ ಮಜ್ಜಿಗೆಯ
                                  ಆಕಾಂಕ್ಷೆ, ಇಂಟರ್ಕೋಸ್ಟಲ್ ಡ್ರೈನೆಜ್, ಅರೆರಿಯಲ್
                                  ಸೆಂಟ್ರಲ್ ಡಯಾಲಿಸಿಸ್, ಎಕ್ಸ್‌ಚೇಂಜ್
                                  ಟ್ರಾನ್ಸ್ಫ್ಯೂಷನ್, FNAC ಬಯೋಪ್ಸಿ ಮುಂತಾದವುಗಳಿಗೆ
                                  ಪ್ರವೇಶವನ್ನು ಅಗತ್ಯಗೊಳಿಸಬಹುದು.
                                  <br />
                                  <br />
                                  ನಾವು ತಿಳಿಸಲಾಗಿದೆ ಎಂಬ ಕಾರಣದಿಂದ ಈ
                                  ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ(ಗಳು)/ಕ್ರಮ(ಗಳು) ಅಸಾಧ್ಯ ಫಲಿತಾಂಶ,
                                  ಸಂಕೀರ್ಣತೆ, ತಾತ್ಕಾಲಿಕ ಅಥವಾ ಶಾಶ್ವತ ಗಾಯ ಅಥವಾ
                                  ಅಂಗವಿಕಲತೆ ಮತ್ತು ಅಜ್ಞಾತ ಅಥವಾ ಅಪ್ರತೀಕ್ಷಿತ
                                  ಕಾರಣಗಳಿಂದ ದಾರುಣಾವಳಿ ಸೇರಿದಂತೆ ಅಪಾಯವನ್ನು
                                  ಹೊಂದಿದೆ. ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಅಥವಾ ಚಿಕಿತ್ಸೆಯ
                                  ಫಲಿತಾಂಶಗಳ ಬಗ್ಗೆ ಯಾವುದೇ ಖಾತರಿಯಿಲ್ಲ ಅಥವಾ
                                  ನಮ್ಮಿಗೆ/ನಮಗೆ ಭರವಸೆ ನೀಡಿಲ್ಲ.
                                  <br />
                                  <br />
                                  ನಾನು/ನಾವು, ಈ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ/ಶಸ್ತ್ರವೈದ್ಯಕೀಯ
                                  ಕ್ರಮಕ್ಕಾಗಿ ಒಪ್ಪಿಗೆಯನ್ನು ನಿರಾಕರಿಸಲು ಹಕ್ಕು
                                  ಹೊಂದಿದ್ದೇವೆ. ನಾನು/ನಾವು, ಎರಡನೇ ಅಭಿಪ್ರಾಯವನ್ನು
                                  ಪಡೆಯಲು, ಬೇರೆ ಕೇಂದ್ರಕ್ಕೆ ವರ್ಗಾವಣೆಗೊಳ್ಳಲು ಮತ್ತು
                                  ಅಂತಹ ನಿರ್ಣಯದಲ್ಲಿ ತೊಡಗಿರುವ ಅಪಾಯವನ್ನು
                                  ಹೊಂದಿದ್ದೇವೆ ಎಂಬುದನ್ನು ಕೂಡ ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇವೆ.
                                  <br />
                                  "ಎಲ್ಲಾ ಮೇಲ್ಕಂಡ ವಿಷಯಗಳನ್ನು ತಿಳಿದು, ನಾವು ಮೇಲ್ಕಂಡ
                                  ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ/ಕ್ರಮಕ್ಕಾಗಿ ಅಪಾಯದ ಒಪ್ಪಿಗೆ
                                  ನೀಡುತ್ತೇವೆ.
                                  <br />
                                  <br />
                                  ನಾವು, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯಿಂದ ಉಂಟಾಗುವ ಯಾವುದೇ
                                  ಹಾನಿಕಾರಕ ಪರಿಣಾಮಗಳ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಆಸ್ಪತ್ರೆ,
                                  ಸಂಬಂಧಿತ ವೈದ್ಯರು ಮತ್ತು ಆಸ್ಪತ್ರೆ ಸಿಬ್ಬಂದಿಯನ್ನು
                                  ರಕ್ಷಿಸಲು ಸಮ್ಮತಿಸುತ್ತೇವೆ..
                                </p>
                                <p style={{ fontSize: "18px" }}>
                                  <div className="container"></div>
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div
                                className="col-md-4"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              ></div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                ಹೆಸರು
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                ಹಸ್ತಾಕ್ಷರ
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                ದಿನಾಂಕ
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                ಸಮಯ
                              </div>
                            </div>
                            <div className="row">
                              <div
                                className="col-md-4"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                ರೋಗಿ/ರೋಗಿಯ ಪ್ರತಿನಿಧಿ
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "161px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "161px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "161px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "161px" }}
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <div
                                className="col-md-4"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                ಸಾಕ್ಷಿ
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "161px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "161px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "161px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "161px" }}
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <div
                                className="col-md-4"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                ಡಾಕ್ಟರ್
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "161px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "161px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "161px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "161px" }}
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <div
                                className="col-md-4"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "16px",
                                }}
                              >
                                ನಾತಿ/ಕಾನೂನು ಸಂರಕ್ಷಕ (ರೋಗಿಯೊಂದಿಗೆ ಸಂಬಂಧ)
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "161px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "161px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "161px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "161px" }}
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div> */}
    </>
  );
};

export default InformedConsent;
