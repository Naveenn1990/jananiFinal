import React, { useState } from "react";
import { Table, Modal, ProgressBar, Button, Form } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

const AnesthesiaConsent = () => {
  return (
    <>
      {/* English */}
      <div
        className="mt-2 d-flex text-end gap-2"
        style={{ alignItems: "right", justifyContent: "right" }}
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
              Consent For Anesthesia / Sedation
            </h6>
          </div>
          <div
            style={{
              paddingLeft: "42px",
              paddingRight: "42px",
              textAlign: "justify",
            }}
          >
            <div className="patientViewtable">
              <Table
                className=""
                style={{
                  border: "1px  solid #20958C",
                  borderCollapse: "collapse",
                  width: "100%",
                  margin: "auto",
                }}
              >
                <tr>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    Patient Name:{" "}
                    <span style={{ fontWeight: "bold" }}>Mannu Kumar</span>{" "}
                  </td>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    Date: <span style={{ fontWeight: "bold" }}>02/05/2024</span>{" "}
                  </td>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    Age: <span style={{ fontWeight: "bold" }}>25 years</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    OP No: <span style={{ fontWeight: "bold" }}>12</span>{" "}
                  </td>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    IP No: <span style={{ fontWeight: "bold" }}>1200</span>{" "}
                  </td>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    Sex: <span style={{ fontWeight: "bold" }}>Male</span>{" "}
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} style={{ border: "1.5px  solid #20958C" }}>
                    Diagnosis :{" "}
                    <span style={{ fontWeight: "bold" }}>
                      Histopathological
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} style={{ border: "1.5px  solid #20958C" }}>
                    Operative Procedure/ Operation :{" "}
                    <span style={{ fontWeight: "bold" }}>Mannual</span>{" "}
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} style={{ border: "1.5px  solid #20958C" }}>
                    Type of Anesthesia Local/ General/ Spinal/ Epidural/ Never
                    Block/ Combined/ MAC :{" "}
                    <span style={{ fontWeight: "bold" }}>Spinal</span>{" "}
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} style={{ border: "1.5px  solid #20958C" }}>
                    <p>
                      I, <span style={{ fontWeight: "bold" }}>Mannu Kumar</span>{" "}
                      (Patient Name), give my full consent out of my own free
                      will to undergo the following surgery / procedure{" "}
                      <span style={{ fontWeight: "bold" }}>XXXY</span> at Janani
                      Multispeciality Hospital I understand that the above
                      mentioned procedure necessitates the administration of
                      local/sedation/ regional/general anesthesia or any
                      combination there of to provide the required anesthesia
                      service.
                      <br />
                      <br />
                      I, understand that anesthetic agent zould be administered
                      by injecting in to the bloodstream (IV LINE), breathed in
                      to the lungs, myected through a needle/catheter placed
                      either directly in to the spinal canal er immediate
                      outside the spinal canal block is achieved by injecting
                      the anesthetic agent near the nerves.
                      <br />
                      <br />
                      I, undentand results and effects of anesthesia depends on
                      the type administered and it decreasedless of
                      feeling/numbness, loss of movement to tatal unconscious
                      state. vary from temporary.
                      <br />
                      <br />
                      I, have been explained that all forms of anesthesia
                      invalve some risks and no guarantees or promises can the
                      results of the procedure/treatments, I understand that
                      there of aesthesia Theses include Bruising, pain made
                      concerning some infrequent complications that can occur
                      due to use ome injuryst the side of injections, temporary
                      breathing difficulties, temporary nerve damage muscle
                      paint, asthmatic reactions, headaches, the possibility of
                      sensation during the operation (especially with Caesarean
                      section and some emergency procedures), damage to teeth
                      and dental prostheses, lip and tongue, temperare, but nous
                      complications including, heart attack, stroke, severe
                      allergic ar sensitivity reactions, brain camage, kidney o
                      failure, lung damage, paraplegia or quadriplegie,
                      permanent nerve e or blood vessel damage, eye eye injury,
                      damage, to the larynx Ivoice boa and vocal cards perumania
                      and infaction bom blood transfusion The possibility of
                      more serious complications including death is quite
                      remote, but it does exists.
                      <br />
                      <br />
                      I, have been explained language known & understood by
                      about the nature of the surgery/procedure, type of
                      anarsthesia used, and it's benefits, and costs, inks
                      associated with it, other alternatives and its prognosis.
                      <br />
                      <br />
                      I, understand that local anaesthesia with or without
                      sedation may not be successful and therefor an altenative
                      method may be used as deemend necessary. I hereby absolve
                      Janani Multispeciailty Hospital
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        Thyroidectomy{" "}
                      </span>
                      and its surgical team & hospital staff of anyliability for
                      consequences arising because of the above-mentioned
                      surgery/procedure.
                      <br />
                      <span style={{ fontWeight: "bold" }}>
                        Consent of Patient Rapresentative/Surrogate{" "}
                      </span>
                      <br />
                      The patient is unable to give consent because he/she is
                      minor/Unconscious hence I,{" "}
                      <span style={{ fontWeight: "bold" }}>
                        Manuu kumar
                      </span>{" "}
                      (Name /relationship with Patient) therefore give my
                      consent an behalf of the patient after discussion with the
                      Doctor for the above mentioned Surgery/operative/Invasive
                      Proceudre
                    </p>
                  </td>
                </tr>
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
                          onClick={createPDF5}
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
                              <h4
                                className="fw-bold"
                                style={{ fontSize: "25px" }}
                              >
                                ಜನನಿ ಬಹು ವಿಶೇಷತೆಯ ಆಸ್ಪತ್ರೆ ಮತ್ತು ಸಂಶೋಧನಾ ಕೇಂದ್ರ
                              </h4>
                              <h6
                                className="fw-bold"
                                style={{ fontSize: "19px" }}
                              >
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
                              ನಿಷ್ಚೇತನ/ತಾತ್ಕಾಲಿಕ ನೆನೆಗುದಿಗೆ ಬಿತ್ತುವಿಕೆಗಾಗಿ
                              ಒಪ್ಪಿಗೆ
                            </h6>
                          </div>
                          <div
                            style={{
                              paddingLeft: "42px",
                              paddingRight: "42px",
                              textAlign: "justify",
                            }}
                          >
                            <p style={{ fontSize: "17px" }}>
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
                                        style={{ width: "186px" }}
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
                                        style={{ width: "249px" }}
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
                                        style={{ width: "245px" }}
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
                                        style={{ width: "231px" }}
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
                                        style={{ width: "230px" }}
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
                                    ಲಿಂಗ:{" "}
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
                                      border: "1px solid #20958C",
                                      paddingLeft: "unset",
                                      paddingRight: "unset",
                                    }}
                                  >
                                    ರೋಗನಿದಾನ :{" "}
                                    <span>
                                      <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="vi_0"
                                        style={{ width: "856px" }}
                                      />
                                    </span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div
                                    className="col-md-12"
                                    style={{
                                      border: "1px solid #20958C",
                                      paddingLeft: "unset",
                                      paddingRight: "unset",
                                    }}
                                  >
                                    ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಕ್ರಮ/ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ :{" "}
                                    <span>
                                      <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="vi_0"
                                        style={{ width: "741px" }}
                                      />
                                    </span>
                                  </div>
                                </div>

                                <div className="row">
                                  <div
                                    className="col-md-12"
                                    style={{
                                      border: "1px solid #20958C",
                                      paddingLeft: "unset",
                                      paddingRight: "unset",
                                    }}
                                  >
                                    ನಿಷ್ಚೇತನದ ಪ್ರಕಾರ ಸ್ಥಳೀಯ/ ಸಾಮಾನ್ಯ/ ಸ್ಫೈನಲ್/
                                    ಎಪಿಡ್ಯುರಲ್/ ನರ್ವ್ ಬ್ಲಾಕ್/ ಸಂಯೋಜಿತ/ MAC{" "}
                                  </div>
                                </div>
                                <div className="row">
                                  <div
                                    className="col-md-12"
                                    style={{
                                      padding: "6px",
                                      border: "1px solid #20958C",
                                      paddingLeft: "unset",
                                      paddingRight: "unset",
                                    }}
                                  >
                                    <p style={{ fontSize: "17px" }}>
                                      ನಾನು,{" "}
                                      <span
                                        style={{
                                          borderBottom: "1px solid black",
                                        }}
                                      >
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "301px" }}
                                        />
                                      </span>
                                      (ರೋಗಿಯ ಹೆಸರು), ನನಗೆ ಸ್ವಯಂಸ್ಪೂರ್ತದಿಂದ ಈ
                                      ಕೆಳಗಿನ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ/ಕ್ರಮವನ್ನು
                                      ತೆಗೆದುಕೊಳ್ಳಲು ಸಂಪೂರ್ಣ ಒಪ್ಪಿಗೆ ನೀಡುತ್ತೇನೆ
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "636px" }}
                                        />
                                        <br />
                                        ಜನನಿ ಬಹು ವಿಶೇಷತೆಯ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ, ಮೇಲ್ಕಂಡ
                                        ಕ್ರಮವು ಅಗತ್ಯನಿಷ್ಚೇತನ ಸೇವೆಯನ್ನು ಒದಗಿಸಲು
                                        ಸ್ಥಳೀಯ/ಸೂಜಿಸೀಡಿಸುವಿಕೆ/ಪ್ರಾದೇಶಿಕ/ಸಾಮಾನ್ಯ
                                        ನಿಷ್ಚೇತನ ಅಥವಾ ಅವುಗಳಲ್ಲಿ ಯಾವುದಾದರೂ
                                        ಸಂಯೋಜನೆಯನ್ನು ನೀಡಬೇಕಾಗಿದೆ ಎಂಬುದನ್ನು ನಾನು
                                        ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ.
                                      </span>{" "}
                                    </p>

                                    <p style={{ fontSize: "17px" }}>
                                      ನಾನು, ಅನಿಸ್ಥೆಟಿಕ್ ಏಜೆಂಟ್ ಅನ್ನು
                                      ರಕ್ತನಾಳದಲ್ಲಿ (IV ಲೈನ್) ಸಲ್ಲಿಸುವ ಮೂಲಕ,
                                      ಶ್ವಾಸಕೋಶಗಳಲ್ಲಿ ಉಸಿರಾಟ ಮಾಡುವ ಮೂಲಕ,
                                      ನೆಡ್ಲ್/ಕ್ಯಾಥೆಟರ್ ಅನ್ನು ನೇರವಾಗಿ ಸ್ಫೈನಲ್
                                      ಕಾಲಿನಲ್ಲಿ ಅಥವಾ ಸ್ಫೈನಲ್ ಕಾಲಿನ ಹೊರಗಡೆ
                                      ಪ್ರದರ್ಶಿಸುವ ಮೂಲಕ ನೀಡಬಹುದು, ಅಥವಾ ರೋಗಿಯ
                                      ಬ್ಲಾಕ್ ಅನ್ನು ಅನಿಸ್ಥೆಟಿಕ್ ಏಜೆಂಟ್ ಅನ್ನು ನರಗಳ
                                      ಹತ್ತಿರ ಇಂಜೆಕ್ಟ್ ಮಾಡುವ ಮೂಲಕ ಸಾಧಿಸಲಾಗುತ್ತದೆ.
                                    </p>
                                    <p style={{ fontSize: "17px" }}>
                                      ನಾನು, ಅನಿಸ್ಥೇಷಿಯಾದ ಫಲಿತಾಂಶಗಳು ಮತ್ತು
                                      ಪರಿಣಾಮಗಳು ನೀಡಿದ ನಿಷ್ಚೇತನದ ಪ್ರಕಾರ
                                      ಅವಲಂಬಿಸಿವೆ ಮತ್ತು ಇದು
                                      ಸಂವೇದನೆ/ಅನುಭವ/ನಿರ್ಜೀವತೆ, ಚಲನಶೀಲತೆಯ
                                      ನಷ್ಟದಿಂದ ಸಂಪೂರ್ಣ ಅಜ್ಞಾತ ಸ್ಥಿತಿವರೆಗೆ
                                      ಅಂತರವಿರಬಹುದು ಎಂಬುದನ್ನು
                                      ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ. ಈ ಪ್ರಭಾವಗಳು
                                      ತಾತ್ಕಾಲಿಕವಾಗಿದ್ದಿರಬಹುದು
                                      <br />
                                      <br />
                                      ನಾನು, ಎಲ್ಲ ರೀತಿಯ ನಿಷ್ಚೇತನವು ಕೆಲವು
                                      ಅಪಾಯಗಳನ್ನು ಒಳಗೊಂಡಿರುತ್ತವೆ ಮತ್ತು ಯಾವುದೇ
                                      ಭರವಸೆಗಳನ್ನು ನೀಡುವಂತಿಲ್ಲ ಅಥವಾ
                                      ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ/ಚಿಕಿತ್ಸೆಗಳ ಫಲಿತಾಂಶಗಳ
                                      ಭರವಸೆಯನ್ನು ನೀಡಲು ಸಾಧ್ಯವಿಲ್ಲ ಎಂಬುದನ್ನು
                                      ವಿವರಿಸಲಾಗಿದೆ. ನಿಷ್ಚೇತನದಿಂದ ಉಂಟಾಗಬಹುದಾದ
                                      ಕೆಲವು ಅಪರೂಪದ ಸಂಕೀರ್ಣತೆಗಳು ಒಳಗೊಂಡಿರುತ್ತವೆ
                                      ಎಂದು ನನಗೆ ತಿಳಿಸಲಾಗಿದೆ, ಉದಾಹರಣೆಗೆ,
                                      ಇಂಜೆಕ್ಷನ್‌ಗಳ ಸ್ಥಳದಲ್ಲಿ ರಕ್ತಗಾಯ, ನೋವು,
                                      ತಾತ್ಕಾಲಿಕ ಉಸಿರಾಟ ಸಮಸ್ಯೆಗಳು, ತಾತ್ಕಾಲಿಕ ನರ
                                      ಹಾನಿ, ಪೇಶಿ ನೋವು, ದೀರ್ಘಕಾಲೀನ
                                      ಪ್ರತಿಕ್ರಿಯೆಗಳು, ತಲೆ ನೋವು, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ
                                      ಸಮಯದಲ್ಲಿ ಸಂವೇದನೆ (ವಿಶೇಷವಾಗಿ ಸೀಸೇರಿಯನ್
                                      ವಿಭಾಗ ಮತ್ತು ಕೆಲವು ತುರ್ತು ಕ್ರಮಗಳಲ್ಲಿ),
                                      ಹಲ್ಲುಗಳು ಮತ್ತು ಹಲ್ಲಿನ ಕೃತಕ ಮತ್ತು
                                      ತಾತ್ಕಾಲಿಕ, ಆದರೆ ನೋವುಸಂಕೀರ್ಣತೆಗಳು,
                                      ಹೃದಯಾಘಾತ, ಪಾಳುಕು, ಗಂಭೀರ ಅಲರ್ಜಿಕ್ ಅಥವಾ
                                      ಭಿನ್ನಪ್ರತ್ಯಯ ಪ್ರತಿಕ್ರಿಯೆಗಳು, ಮೆದುಳು ಹಾನಿ,
                                      ಮೂತ್ರಪಿಂಡ ವೈಫಲ್ಯ, ಉಸಿರಾಟದ ಹಾನಿ,
                                      ಪಾರಾಪ್ಲೆಜಿಯಾ ಅಥವಾ ಕ್ವಾಡ್ರಿಪ್ಲೆಜಿಯಾ, ಶಾಶ್ವತ
                                      ನರ ಅಥವಾ ರಕ್ತನಾಳದ ಹಾನಿ, ಕಣ್ಣು ಹಾನಿ,
                                      ಕಂಠಸ್ಥಳದ ಹಾನಿ, ಆವಾಜಿನ ತಂತಿಗಳು, ಶಾಶ್ವತ
                                      ಹಾನಿ, ಮತ್ತು ರಕ್ತಸಂಚಾರದ ಸಂಕ್ರಮಣಗಳಿಂದ
                                      ಉಂಟಾಗುವ ಶ್ವಾಸಕೋಶಗಳ ಬಹುಶಃ ಭೀಕರ
                                      ಸಂಕೀರ್ಣತೆಗಳನ್ನು ಒಳಗೊಂಡಿದೆ, ಇದರ ಹೊರತಾಗಿಯೂ
                                      ಅಪಾಯಗಳ ಸಾಧ್ಯತೆ ಇರುತ್ತದೆ.
                                      <br />
                                      <br />
                                      ನಾನು, ನನಗೆ ಪರಿಚಿತವಾದ ಭಾಷೆಯಲ್ಲಿ ಮತ್ತು
                                      ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ವಿಷಯಗಳ ಬಗ್ಗೆ ವಿವರಿಸಲಾಗಿದೆ:
                                      ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ/ಕ್ರಮದ ಸ್ವರೂಪ, ಬಳಸಲಾದ
                                      ನಿಷ್ಚೇತನದ ಪ್ರಕಾರ, ಅದರ ಪ್ರಯೋಜನಗಳು ಮತ್ತು
                                      ವೆಚ್ಚ, ಅದಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಅಪಾಯಗಳು, ಇತರ
                                      ಪರ್ಯಾಯಗಳು, ಮತ್ತು ಅವರ ಸಾಂಖ್ಯಾತಿಕ ಲೆಕ್ಕಾಚಾರ
                                      <br />
                                      <br />
                                      ನಾನು, ಸ್ವಲ್ಪ ನಿಷ್ಚೇತನವು ಸೀಡಿಸಿದ ಅಥವಾ
                                      ಇಲ್ಲದೆ ಯಶಸ್ವಿಯಾಗದಿದ್ದರೆ, ಅಗತ್ಯವೆಂದು
                                      ಪರಿಗಣಿಸಿದಾಗ ಪರ್ಯಾಯ ವಿಧಾನವನ್ನು ಬಳಸಬಹುದು
                                      ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ.
                                      <br />
                                      <br />
                                      ನಾನು ಈ ಮೂಲಕ ಜನನಿ ಬಹು ವಿಶೇಷತೆಯ ಆಸ್ಪತ್ರೆಗೆ
                                      ಪೂರ್ತಿ ಉಲ್ಲೇಖಿಸುತ್ತೇನೆ
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "331px" }}
                                        />
                                      </span>
                                      ಮತ್ತು ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ತಂಡ ಮತ್ತು ಆಸ್ಪತ್ರೆಗೆ
                                      ಅಧಿಕೃತ ಹೊಣೆಗಾರಿಕೆಗಳಿಲ್ಲ ಮೇಲ್ಕಂಡ
                                      ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ/ಕ್ರಮದಿಂದ ಉಂಟಾಗುವ
                                      ಪರಿಣಾಮಗಳಿಗೆ.
                                      <br />
                                      ರೋಗಿಯ ಪ್ರತಿನಿಧಿ/ಪ್ರತಿನಿಧಿಯ ಒಪ್ಪಿಗೆ
                                      <br />
                                      ರೋಗಿ ಒಪ್ಪಿಗೆ ನೀಡಲು ಸಾಧ್ಯವಿಲ್ಲ ಏಕೆಂದರೆ
                                      ಅವರು/ಅವರು ಅಪ್ರಾಪ್ತ/ಅಪಸ್ಮಾರದ
                                      ಸ್ಥಿತಿಯಲ್ಲಿದ್ದಾರೆ.{" "}
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "331px" }}
                                        />
                                      </span>
                                      ಹೀಗಾಗಿ ನಾನು,{" "}
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "300px" }}
                                        />
                                      </span>{" "}
                                      (ಹೆಸರು/ರೋಗಿಯೊಂದಿಗೆ ಸಂಬಂಧ) ಆದ್ದರಿಂದ ಮೇಲ್ಕಂಡ
                                      ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ/ಕ್ರೀಯಾತ್ಮಕ/ಆಕ್ರಮಣಕಾರಿ
                                      ಕ್ರಮಕ್ಕಾಗಿ ಡಾಕ್ಟರ್ ಜೊತೆ ಚರ್ಚಿಸಿದ ನಂತರ
                                      ರೋಗಿಯ ಪರವಾಗಿ ನನ್ನ ಒಪ್ಪಿಗೆ ನೀಡುತ್ತೇನೆ.
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

export default AnesthesiaConsent;
