import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Button, Form, Table } from "react-bootstrap";

const PatientConsentForms = () => {
  const user = JSON.parse(sessionStorage.getItem("PatientUser"));
  console.log("PatientUser", user);

  const [btn1, setbtn1] = useState(true);
  const [btn2, setbtn2] = useState(true);
  const [btn3, setbtn3] = useState(true);
  const [btn4, setbtn4] = useState(true);

  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"), {
      useCORS: true,
    });
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const scaleFactor = pdf.internal.pageSize.getWidth() / imgProperties.width;
    const pdfHeight = imgProperties.height * scaleFactor;
    pdf.addImage(img, "PNG", 0, 0, pdf.internal.pageSize.getWidth(), pdfHeight);
    pdf.save("ServiceInvoice.pdf");
  };
  const createPDF1 = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"), {
      useCORS: true,
    });
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const scaleFactor = pdf.internal.pageSize.getWidth() / imgProperties.width;
    const pdfHeight = imgProperties.height * scaleFactor;
    pdf.addImage(img, "PNG", 0, 0, pdf.internal.pageSize.getWidth(), pdfHeight);
    pdf.save("ServiceInvoice.pdf");
  };
  const createPDF2 = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"), {
      useCORS: true,
    });
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const scaleFactor = pdf.internal.pageSize.getWidth() / imgProperties.width;
    const pdfHeight = imgProperties.height * scaleFactor;
    pdf.addImage(img, "PNG", 0, 0, pdf.internal.pageSize.getWidth(), pdfHeight);
    pdf.save("ServiceInvoice.pdf");
  };

  const createPDF4 = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"), {
      useCORS: true,
    });
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const scaleFactor = pdf.internal.pageSize.getWidth() / imgProperties.width;
    const pdfHeight = imgProperties.height * scaleFactor;
    pdf.addImage(img, "PNG", 0, 0, pdf.internal.pageSize.getWidth(), pdfHeight);
    pdf.save("ServiceInvoice.pdf");
  };

  const [SelectCause, setSelectCause] = useState("");
  const [CauseDetails, setCauseDetails] = useState({});
  useEffect(() => {
    const assignedPatients = user?.cause?.filter(
      (val) => val._id === SelectCause
    );
    setCauseDetails(assignedPatients[0]);
  }, [SelectCause]);
  console.log("CauseDetails", CauseDetails);

  const [ConsentForm, setConsentForm] = useState("");
  const [ViewConsentForm, setViewConsentForm] = useState([]);
  console.log("ConsentForm", ConsentForm);

  useEffect(() => {
    if (CauseDetails && ConsentForm) {
      const findconsentform = CauseDetails?.consentform.filter(
        (ele) => ele.formname === ConsentForm
      );
      setViewConsentForm(findconsentform);
    }
  }, [ConsentForm]);

  console.log("ViewConsentForm", ViewConsentForm);

  
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2%",
        }}
      >
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" ,textAlign:"center"}}>
          Consents Forms
        </h6>
        <div id="google_translate_element"></div>
      </div>

      <div className="d-flex align-items-center">
        <b style={{ width: "16%" }}>Select Your Cause : </b>
        <Form.Select
          onChange={(e) => setSelectCause(e.target.value)}
          value={SelectCause}
          style={{ width: "25%" }}
        >
          <option>select cause</option>
          {user?.cause?.map((item) => {
            return <option value={item?._id}>{item?.CauseName}</option>;
          })}
        </Form.Select>
      </div>

      <div className="mt-3">
        <div className="d-flex gap-2">
          <button
            style={{
              padding: "6px",
              border: "none",
              backgroundColor: "#20958c",
              color: "white",
              borderRadius: "0px",
            }}
            onClick={() => {
              setbtn1(true);
              setbtn2(false);
              setbtn3(false);
              setbtn4(false);
              setConsentForm("GeneralConsentForms");
            }}
          >
            General Consent Forms
          </button>
          <button
            style={{
              padding: "6px",
              border: "none",
              backgroundColor: "#20958c",
              color: "white",
              borderRadius: "0px",
            }}
            onClick={() => {
              setbtn1(false);
              setbtn2(true);
              setbtn3(false);
              setbtn4(false);
              setConsentForm("HospitalizedConsentForms");
            }}
          >
            Hospitalized Estimated Charge Sheet Cum Consent Form
          </button>
          <button
            style={{
              padding: "6px",
              border: "none",
              backgroundColor: "#20958c",
              color: "white",
              borderRadius: "0px",
            }}
            onClick={() => {
              setbtn1(false);
              setbtn2(false);
              setbtn3(true);
              setbtn4(false);
              setConsentForm("HighriskConsentForms");
            }}
          >
            Informed Consent for High risk Procedure
          </button>
          <button
            style={{
              padding: "6px",
              border: "none",
              backgroundColor: "#20958c",
              color: "white",
              borderRadius: "0px",
            }}
            onClick={() => {
              setbtn1(false);
              setbtn2(false);
              setbtn3(false);
              setbtn4(true);
            }}
          >
            Consent For Anesthesia / Sedation
          </button>
        </div>
      </div>

      {btn1 ? (
        <>
          <div className="mt-2 d-dlex d-flex justify-content-between gap-2">         
            <button
              style={{
                padding: "6px",
                border: "none",
                backgroundColor: "#20958c",
                color: "white",
                borderRadius: "0px",
              }}
              onClick={createPDF}
            >
              Print <FiDownload />
            </button>
          </div>
          <div
            id="pdf"
            style={{ padding: "15px", overflow: "hidden", overflowX: "scroll" }}
          >
            {CauseDetails?.consentform?.filter((ele)=>ele.formname === ConsentForm)?.map((item)=>{
              return(
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
                <span style={{ fontWeight: "bold" }}>{item?.patientname}</span> Admitted and
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
                    </th>
                    <th style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                      Tenant/ Relative                   
                    </th>
                    <th style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                      Patient                     
                    </th>
                  </tr>
                  <tr>
                    <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                      Name:{" "}
                      <span style={{ fontWeight: "bold" }}>{item?.ConDoctorName}</span>{" "}
                    </td>
                    <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                      Name: <span style={{ fontWeight: "bold" }}>{item?.RealivesName}</span>{" "}
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
                      <span style={{ fontWeight: "bold" }}>{item?.PatientRelation}</span>{" "}
                    </td>
                    <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                      <span style={{ fontWeight: "bold" }}></span>
                    </td>
                  </tr>
                </tbody>
              </Table>
  
              <p style={{ fontSize: "18px", marginTop: "20px" }}>
                Date/Time:{" "}
                <span style={{ fontWeight: "bold" }}>{item?.Date} - 16:50</span>{" "}
              </p>
            </div>           
          </div>
              )
            })}
            

          </div>
        </>
      ) : (
        <>
          {btn2 ? (
            <>
              <div className="mt-2 d-dlex  d-flex justify-content-between gap-2">
                
              <div>
              {ViewConsentForm?.map((item) => {
                return (
                  <>
                    <Button>
                      <p>{item?.patientname}</p>
                      <p>12-05-2024</p>
                    </Button>
                    &nbsp;&nbsp;
                  </>
                );
              })}
            </div>
                <button
                  style={{
                    padding: "6px",
                    border: "none",
                    backgroundColor: "#20958c",
                    color: "white",
                    borderRadius: "0px",
                  }}
                  onClick={createPDF1}
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
                      <div className="container">
                        <div
                          className="row"
                          style={{ border: "1px solid #20958C" }}
                        >
                          <div
                            className="col-md-4"
                            style={{
                              paddingTop: "10px",
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <textarea
                              name=""
                              id=""
                              cols="27"
                              rows="4"
                              className="vi_0"
                            ></textarea>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              paddingTop: "10px",
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <h6
                              style={{
                                fontSize: "17px",
                                padding: "5px",
                              }}
                            >
                              Ward/ Room Category Charges per Day (Including
                              Room Rent, nursing Charges, Duty Doctor Charges,
                              Monitoring, charges, Primary Consultant Charges).
                            </h6>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              paddingTop: "10px",
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <h6
                              style={{
                                fontSize: "18px",
                              }}
                            >
                              Remark
                            </h6>
                            <textarea
                              name=""
                              id=""
                              cols="27"
                              rows="3"
                              className="vi_0"
                            ></textarea>
                          </div>
                          <div
                            className="col-md-12"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <textarea
                              name=""
                              id=""
                              cols="90"
                              rows="1"
                              className="vi_0"
                            ></textarea>
                          </div>
                          <div
                            className="col-md-12"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <textarea
                              name=""
                              id=""
                              cols="90"
                              rows="1"
                              className="vi_0"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      2. Surgery Package Charges
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
                              fontSize: "18px",
                            }}
                          >
                            Name of the Surgery/ Surgories
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Estimated Cost
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Remark
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
                            <span style={{ borderBottom: "1px solid black" }}>
                              {/* <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                /> */}
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span
                              style={{ borderBottom: "1px solid black" }}
                            ></span>{" "}
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "321px" }}
                              />
                            </span>{" "}
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
                            <span style={{ borderBottom: "1px solid black" }}>
                              {/* <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                /> */}
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "321px" }}
                              />
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "321px" }}
                              />
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      3.Special Procedure Charges
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
                              fontSize: "18px",
                            }}
                          >
                            Name of the Procedure/ Procedures
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Estimated Cost
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Remark
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
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "321px" }}
                              />
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "321px" }}
                              />
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "321px" }}
                              />
                            </span>{" "}
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
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "321px" }}
                              />
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "321px" }}
                              />
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "321px" }}
                              />
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      4. Special Investigation Charges
                      <div className="container">
                        <div className="row">
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Name of the Surgery/ Surgories
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Estimated Cost
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Remark
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
                            <span style={{ borderBottom: "1px solid black" }}>
                              {/* <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                /> */}
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "321px" }}
                              />
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "321px" }}
                              />
                            </span>{" "}
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
                            <span style={{ borderBottom: "1px solid black" }}>
                              {/* <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                /> */}
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "321px" }}
                              />
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "321px" }}
                              />
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <span style={{ color: "#20958C", fontWeight: "600" }}>
                        Note
                      </span>{" "}
                      : The above stated details exclude charges for routine
                      procedure/ Investigation, Pharmacy / Medicine Specialists
                      and superSpecialists consultations, ventilator and oxygen,
                      Synringe pump, Patient transport and usages of any other
                      Equipments/ Materials as required.
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
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I,
                      <span>
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "490px" }}
                          value={user?.username}
                        />
                      </span>{" "}
                      have been explained in detail the above mentioned charges
                      in a language that I understand.
                      <br />
                      <br />
                      Patient/ Patient Relative Name & Signature :{" "}
                      <span>
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "270px" }}
                          // value={userdetail?.relativeName}
                        />
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "270px" }}
                        />
                      </span>
                    </p>

                    <p style={{ fontSize: "18px" }}>
                      <span>
                        Witness-1/ Relative-1{" "}
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "270px" }}
                        />
                        Witness-2/ Relative-2{" "}
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "270px" }}
                        />
                      </span>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        Phone No :{" "}
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "270px" }}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone No
                        :{" "}
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "270px" }}
                        />
                      </span>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      Name: Designation & Signature of the hospital staff
                      Explaining the Estinated Cost
                      <textarea
                        name=""
                        id=""
                        cols="90"
                        rows="2"
                        className="vi_0"
                      ></textarea>
                    </p>
                    <p style={{ fontSize: "18px", textAlignLast: "end" }}>
                      Signature
                      <input type="text" name="" id="" className="vi_0" />
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {btn3 ? (
                <>
                  {/* English */}
                  <div className="mt-2 d-dlex d-flex justify-content-between gap-2">
                  <div>
              {ViewConsentForm?.map((item) => {
                return (
                  <>
                    <Button>
                      <p>{item?.patientname}</p>
                      <p>12-05-2024</p>
                    </Button>
                    &nbsp;&nbsp;
                  </>
                );
              })}
            </div>
                    <button
                      style={{
                        padding: "6px",
                        border: "none",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "0px",
                      }}
                      onClick={createPDF2}
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
                        <p style={{ fontSize: "18px" }}>
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
                                  fontSize: "18px",
                                }}
                              >
                                Patient Name:{" "}
                                <span>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="vi_0"
                                    style={{ width: "190px" }}
                                    // value={userdetail?.Firstname}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-4"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "18px",
                                }}
                              >
                                Date:{" "}
                                <span>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="vi_0"
                                    style={{ width: "269px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-4"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "18px",
                                }}
                              >
                                Age:{" "}
                                <span>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="vi_0"
                                    style={{ width: "274px" }}
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
                                  fontSize: "18px",
                                }}
                              >
                                OP No:{" "}
                                <span>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="vi_0"
                                    style={{ width: "252px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-4"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "18px",
                                }}
                              >
                                IP No:{" "}
                                <span>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="vi_0"
                                    style={{ width: "262px" }}
                                  />
                                </span>
                              </div>
                              <div
                                className="col-md-4"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "18px",
                                }}
                              >
                                Sex:{" "}
                                <span>
                                  <input type="radio" name="" id="" />
                                  Male &nbsp;&nbsp;&nbsp;
                                  <input type="radio" name="" id="" />
                                  Female{" "}
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
                                  &nbsp; I/ We{" "}
                                  <span
                                    style={{ borderBottom: "1px solid black" }}
                                  >
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "301px" }}
                                      value={user?.username}
                                    />
                                  </span>
                                  have been explained about the medical
                                  condition and the prospered surgery by Dr.
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
                                    &nbsp;Dr.
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "680px" }}
                                    />
                                  </span>{" "}
                                </p>

                                <p style={{ fontSize: "18px" }}>
                                  Medical Condition/Diagnosis :
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "670px" }}
                                    />
                                  </span>
                                  Proposed operative Procedure:
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "684px" }}
                                    />
                                  </span>{" "}
                                </p>
                                <p style={{ fontSize: "18px" }}>
                                  I/We, (the relatives/legal guardian of)
                                  Mr./Mrs
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "200px" }}
                                      // value={userdetail?.relativeName}
                                    />
                                  </span>
                                  who is admitted on{" "}
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "200px" }}
                                    />
                                  </span>
                                  have been explained in the languages
                                  understood by me/us, about the pros & cons of
                                  the operation and risks involved during and
                                  after the surgery, and that the procedure
                                  carries a higher risk than the usual cases.
                                  <br />
                                  <br />
                                  I/We, have been explained in detail about the
                                  nature of the surgery/procedure, the possible
                                  benefits and complications. I/We have been
                                  explained that this case carries a higher risk
                                  than the usual and the reasons for the same.
                                  During the course of the surgical procedure,
                                  circumstances may arise or a condidtion may be
                                  found which may require suspension or
                                  extension of planned procedure or necessary
                                  performance of an alternative procedure.
                                  <br />
                                  <br />
                                  I/We, have been informed the high risk
                                  involved in medical procedures which might
                                  necessitate admission to ICU/NICU/Mecanial
                                  Ventilation/Endotracheal intubation Lumbar
                                  puncture/Bone marrow aspiration, Intercostal
                                  drainage, Arterial Central Dialysis, line,
                                  Exchange transfusion, FNAC Biopsy etc.
                                  <br />
                                  <br />
                                  I/We have beeen informed that the operation
                                  (s)/Procedures (s) involved the risk of
                                  unsuccessful result,complication,temporary or
                                  permanent injury or disability and even
                                  fatality form known or unforeseen causes. No
                                  guarantee or promises have been made to me/us
                                  concerning the results of the procedure or
                                  treatment.
                                  <br />
                                  <br />
                                  I/We, understood that I/We, have the right to
                                  withhold consent for the procedure/surgery
                                  I/We. also understand that I/We, have a right
                                  to obtain a second opinion transfer to a
                                  different centre and the risk involved in such
                                  a decision.
                                  <br />
                                  Knowing all the above mentioned facts / We,
                                  give my/our Risk Consent for the above
                                  mentioned surgery/Procedure.
                                  <br />
                                  <br />
                                  I/We also indemnify the hospital, the
                                  concerned doctors and the hospital staff in
                                  case of any adverse consequences arising from
                                  the surgery.
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
                                  fontSize: "18px",
                                }}
                              >
                                Name
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "18px",
                                }}
                              >
                                Signature
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "18px",
                                }}
                              >
                                Date
                              </div>
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "18px",
                                }}
                              >
                                Time
                              </div>
                            </div>
                            <div className="row">
                              <div
                                className="col-md-4"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "18px",
                                }}
                              >
                                Patient/ Patient Surrogate
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
                                  fontSize: "18px",
                                }}
                              >
                                Witness
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
                                  fontSize: "18px",
                                }}
                              >
                                Doctor
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
                                Relative/Legal_guardian (relationship with
                                patient)
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
              ) : (
                <>
                  {btn4 ? (
                    <>
                      {/* English */}
                      <div className="mt-2 d-dlex d-flex justify-content-between gap-2">
                      <div>
              {ViewConsentForm?.map((item) => {
                return (
                  <>
                    <Button>
                      <p>{item?.patientname}</p>
                      <p>12-05-2024</p>
                    </Button>
                    &nbsp;&nbsp;
                  </>
                );
              })}
            </div>
                        <button
                          style={{
                            padding: "6px",
                            border: "none",
                            backgroundColor: "#20958c",
                            color: "white",
                            borderRadius: "0px",
                          }}
                          onClick={createPDF4}
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
                                src="/img/logo.jpg"
                                alt=""
                                style={{ width: "100px" }}
                              />
                            </div>
                            <div className="text-center">
                              <h4
                                className="fw-bold"
                                style={{ fontSize: "25px" }}
                              >
                                JANANI MULTISPECIALITY HOSPITAL AND RESEARCH
                                CENTER
                              </h4>
                              <h6
                                className="fw-bold"
                                style={{ fontSize: "19px" }}
                              >
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
                                      fontSize: "17px",
                                    }}
                                  >
                                    Patient Name:{" "}
                                    <span>
                                      <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="vi_0"
                                        style={{ width: "190px" }}
                                      />
                                    </span>
                                  </div>
                                  <div
                                    className="col-md-4"
                                    style={{
                                      border: "1px solid #20958C",
                                      paddingLeft: "unset",
                                      paddingRight: "unset",
                                      fontSize: "17px",
                                    }}
                                  >
                                    Date:{" "}
                                    <span>
                                      <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="vi_0"
                                        style={{ width: "269px" }}
                                      />
                                    </span>
                                  </div>
                                  <div
                                    className="col-md-4"
                                    style={{
                                      border: "1px solid #20958C",
                                      paddingLeft: "unset",
                                      paddingRight: "unset",
                                      fontSize: "17px",
                                    }}
                                  >
                                    Age:{" "}
                                    <span>
                                      <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="vi_0"
                                        style={{ width: "274px" }}
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
                                      fontSize: "17px",
                                    }}
                                  >
                                    OP No:{" "}
                                    <span>
                                      <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="vi_0"
                                        style={{ width: "252px" }}
                                      />
                                    </span>
                                  </div>
                                  <div
                                    className="col-md-4"
                                    style={{
                                      border: "1px solid #20958C",
                                      paddingLeft: "unset",
                                      paddingRight: "unset",
                                      fontSize: "17px",
                                    }}
                                  >
                                    IP No:{" "}
                                    <span>
                                      <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="vi_0"
                                        style={{ width: "262px" }}
                                      />
                                    </span>
                                  </div>
                                  <div
                                    className="col-md-4"
                                    style={{
                                      border: "1px solid #20958C",
                                      paddingLeft: "unset",
                                      paddingRight: "unset",
                                      fontSize: "17px",
                                    }}
                                  >
                                    Sex:{" "}
                                    <span>
                                      <input type="radio" name="" id="" />
                                      Male &nbsp;&nbsp;&nbsp;
                                      <input type="radio" name="" id="" />
                                      Female{" "}
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
                                      fontSize: "17px",
                                    }}
                                  >
                                    Diagnosis :{" "}
                                    <span>
                                      <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="vi_0"
                                        style={{ width: "845px" }}
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
                                      fontSize: "17px",
                                    }}
                                  >
                                    Operative Procedure/ Operation :{" "}
                                    <span>
                                      <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="vi_0"
                                        style={{ width: "650px" }}
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
                                      fontSize: "17px",
                                    }}
                                  >
                                    Type of Anesthesia Local/ General/ Spinal/
                                    Epidural/ Never Block/ Combined/ MAC{" "}
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
                                      I,{" "}
                                      <span
                                        style={{
                                          borderBottom: "1px solid black",
                                        }}
                                      >
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "301px" }}
                                          // value={userdetail?.Firstname}
                                        />
                                      </span>
                                      (Patient Name), give my full consent out
                                      of my own free will to undergo the
                                      following surgery / procedure
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "442px" }}
                                        />
                                        at Janani Multispeciality Hospital I
                                        understand that the above mentioned
                                        procedure necessitates the
                                        administration of local/sedation/
                                        regional/general anesthesia or any
                                        combination there of to provide the
                                        required anesthesia service.
                                      </span>{" "}
                                    </p>

                                    <p style={{ fontSize: "17px" }}>
                                      I, understand that anesthetic agent zould
                                      be administered by injecting in to the
                                      bloodstream (IV LINE), breathed in to the
                                      lungs, myected through a needle/catheter
                                      placed either directly in to the spinal
                                      canal er immediate outside the spinal
                                      canal block is achieved by injecting the
                                      anesthetic agent near the nerves.
                                    </p>
                                    <p style={{ fontSize: "17px" }}>
                                      I, undentand results and effects of
                                      anesthesia depends on the type
                                      administered and it decreasedless of
                                      feeling/numbness, loss of movement to
                                      tatal unconscious state. vary from
                                      temporary
                                      <br />
                                      <br />
                                      I, have been explained that all forms of
                                      anesthesia invalve some risks and no
                                      guarantees or promises can the results of
                                      the procedure/treatments, I understand
                                      that there of aesthesia Theses include
                                      Bruising, pain made concerning some
                                      infrequent complications that can occur
                                      due to use ome injuryst the side of
                                      injections, temporary breathing
                                      difficulties, temporary nerve damage
                                      muscle paint, asthmatic reactions,
                                      headaches, the possibility of sensation
                                      during the operation (especially with
                                      Caesarean section and some emergency
                                      procedures), damage to teeth and dental
                                      prostheses, lip and tongue, temperare, but
                                      nous complications including, heart
                                      attack, stroke, severe allergic ar
                                      sensitivity reactions, brain camage,
                                      kidney o failure, lung damage, paraplegia
                                      or quadriplegie, permanent nerve e or
                                      blood vessel damage, eye eye injury,
                                      damage, to the larynx Ivoice boa) and
                                      vocal cards perumania and infaction bom
                                      blood transfusion The possibility of more
                                      serious complications including death is
                                      quite remote, but it does exists.
                                      <br />
                                      <br />
                                      I, have been explained language known &
                                      understood by about the nature of the
                                      surgery/procedure, type of anarsthesia
                                      used, and it's benefits, and costs, inks
                                      associated with it, other alternatives and
                                      its prognosis. <br />
                                      <br />
                                      I, understand that local anaesthesia with
                                      or without sedation may not be successful
                                      and therefor an altenative method may be
                                      used as deemend necessary.
                                      <br />
                                      <br />I hereby absolve Janani
                                      Multispeciailty Hospital.
                                      <span>gjghj</span>
                                      and its surgical team & hospital staff of
                                      anyliability for consequences arising
                                      because of the above-mentioned
                                      surgery/procedure.
                                      <br />
                                      Consent of Patient
                                      Rapresentative/Surrogate
                                      <br />
                                      The patient is unable to give consent
                                      because he/she is minor/Unconscious{" "}
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "331px" }}
                                          // value={userdetail?.Firstname}
                                        />
                                      </span>
                                      hence I,{" "}
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "331px" }}
                                          // value={userdetail?.relativeName}
                                        />
                                      </span>{" "}
                                      (Name /relationship with Patient)
                                      therefore give my consent an behalf of the
                                      patient after discussion with the Doctor
                                      for the above mentioned
                                      Surgery/operative/Invasive Proceudre
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
                                    Name
                                  </div>
                                  <div
                                    className="col-md-2"
                                    style={{
                                      border: "1px solid #20958C",
                                      paddingLeft: "unset",
                                      paddingRight: "unset",
                                    }}
                                  >
                                    Signature
                                  </div>
                                  <div
                                    className="col-md-2"
                                    style={{
                                      border: "1px solid #20958C",
                                      paddingLeft: "unset",
                                      paddingRight: "unset",
                                    }}
                                  >
                                    Date
                                  </div>
                                  <div
                                    className="col-md-2"
                                    style={{
                                      border: "1px solid #20958C",
                                      paddingLeft: "unset",
                                      paddingRight: "unset",
                                    }}
                                  >
                                    Time
                                  </div>
                                </div>
                                <div className="row">
                                  <div
                                    className="col-md-4"
                                    style={{
                                      border: "1px solid #20958C",
                                      paddingLeft: "unset",
                                      paddingRight: "unset",
                                      fontSize: "17px",
                                    }}
                                  >
                                    Patient/ Patient Surrogate
                                  </div>
                                  <div
                                    className="col-md-2"
                                    style={{
                                      border: "1px solid #20958C",
                                      paddingLeft: "unset",
                                      paddingRight: "unset",
                                      fontSize: "17px",
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
                                      fontSize: "17px",
                                    }}
                                  >
                                    Witness
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
                                      fontSize: "17px",
                                    }}
                                  >
                                    Doctor
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
                                    Relative/Legal_guardian (relationship with
                                    patient)
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
};

export default PatientConsentForms;
