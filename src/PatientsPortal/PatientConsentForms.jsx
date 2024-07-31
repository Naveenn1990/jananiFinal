import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Form, Table } from "react-bootstrap";
import moment from "moment";
import axios from "axios";

const PatientConsentForms = () => {
  const user = JSON.parse(sessionStorage.getItem("PatientUser"));
  const [patientdetail, setpatientdetail] = useState("");
  const getpatientbyid = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8521/api/user/getPatientDetailByid/${user?._id}`
      );
      if (res.status === 200) {
        setpatientdetail(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getpatientbyid();
  }, []);

  console.log("patientdetail", patientdetail);

  const dobString = user?.DOB;
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

  const [btn1, setbtn1] = useState(true);
  const [btn2, setbtn2] = useState(true);
  const [btn3, setbtn3] = useState(true);
  const [btn4, setbtn4] = useState(true);

  const createPDF = async () => {
    try {
      const pdf = new jsPDF("portrait", "pt", "a4");
      const element = document.querySelector("#pdf");
      const data = await html2canvas(element, {
        useCORS: true,
        scale: 2,
      });
      const img = data.toDataURL("image/png");
      const imgProperties = pdf.getImageProperties(img);
      const scaleFactor =
        pdf.internal.pageSize.getWidth() / imgProperties.width;
      const pdfHeight = imgProperties.height * scaleFactor;
      pdf.addImage(
        img,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdfHeight
      );
      pdf.save("generalconsentform.pdf");
    } catch (error) {
      console.error("An error occurred while creating the PDF:", error);
    }
  };

  const createPDF1 = async () => {
    try {
      const pdf = new jsPDF("portrait", "pt", "a4");
      const element = document.querySelector("#pdf");
      const data = await html2canvas(element, {
        useCORS: true,
        scale: 2,
      });
      const img = data.toDataURL("image/png");
      const imgProperties = pdf.getImageProperties(img);
      const scaleFactor =
        pdf.internal.pageSize.getWidth() / imgProperties.width;
      const pdfHeight = imgProperties.height * scaleFactor;
      pdf.addImage(
        img,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdfHeight
      );
      pdf.save("Hospitalizedconsentform.pdf");
    } catch (error) {
      console.error("An error occurred while creating the PDF:", error);
    }
  };

  const createPDF2 = async () => {
    try {
      const pdf = new jsPDF("portrait", "pt", "a4");
      const element = document.querySelector("#pdf");
      const data = await html2canvas(element, {
        useCORS: true,
        scale: 2,
      });
      const img = data.toDataURL("image/png");
      const imgProperties = pdf.getImageProperties(img);
      const scaleFactor =
        pdf.internal.pageSize.getWidth() / imgProperties.width;
      const pdfHeight = imgProperties.height * scaleFactor;
      pdf.addImage(
        img,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdfHeight
      );
      pdf.save("Highriskconsentform.pdf");
    } catch (error) {
      console.error("An error occurred while creating the PDF:", error);
    }
  };

  const createPDF4 = async () => {
    try {
      const pdf = new jsPDF("portrait", "pt", "a4");
      const element = document.querySelector("#pdf");
      const data = await html2canvas(element, {
        useCORS: true,
        scale: 2,
      });
      const img = data.toDataURL("image/png");
      const imgProperties = pdf.getImageProperties(img);
      const scaleFactor =
        pdf.internal.pageSize.getWidth() / imgProperties.width;
      const pdfHeight = imgProperties.height * scaleFactor;
      pdf.addImage(
        img,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdfHeight
      );
      pdf.save("Anesthesiaconsentform.pdf");
    } catch (error) {
      console.error("An error occurred while creating the PDF:", error);
    }
  };

  const [SelectCause, setSelectCause] = useState("");
  const [CauseDetails, setCauseDetails] = useState({});
  useEffect(() => {
    const assignedPatients = patientdetail?.cause?.filter(
      (val) => val._id === SelectCause
    );
    setCauseDetails(assignedPatients?.[0]);
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
        <h6
          style={{
            fontSize: "22px",
            fontWeight: "600",
            color: "grey",
            textAlign: "center",
          }}
        >
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
          {patientdetail?.cause?.map((item) => {
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
              setConsentForm("AnesthesiaConsentForms");
            }}
          >
            Consent For Anesthesia / Sedation
          </button>
        </div>
      </div>

      {btn1 ? (
        <>
          {CauseDetails?.consentform
            ?.filter((ele) => ele.formname === ConsentForm)
            ?.map((item) => {
              return (
                <div>
                  <hr />
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
                      Download <FiDownload />
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
                            Beside Canara Bank, Jalanagar Main Road, K. K.
                            Colony, Vijaypura-586109
                          </h6>
                          <h6 style={{ fontSize: "16px" }}>
                            Tel:08352-277077 Cell:9606031158, 7090831204
                            Email:jananihospital2018@gmail.com
                          </h6>
                        </div>
                      </div>
                      <div className="text-center mt-1">
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
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I,
                          Want to get myself/ my relative{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {item?.patientname}
                          </span>{" "}
                          Admitted and treated in this hospital. The decision of
                          coming here is purely on my discretion.
                        </p>
                        <p style={{ fontSize: "18px" }}>
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, am
                          fully aware with the facilities available for the care
                          of myself/ my relative and have full faith in the
                          staff of this hospital/ Medical Establishment. I have
                          been explained that admitted Patients and Patients
                          required emergency care take priority of the Doctor. I
                          fully agree and co-operate.{" "}
                        </p>

                        <p style={{ fontSize: "18px" }}>
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I,
                          fully understand and agree to pay the fees charged by
                          the Doctor/ Hospital for the professional service
                          rendered to me/ relative during the illness regardies
                          of the end result of the illness. I promise not to
                          misbehave either with Doctors or any of the Hospital
                          staff. I know that indecency on my part will lead to
                          explusion from the Hospital.{" "}
                        </p>
                        <p style={{ fontSize: "18px" }}>
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I,
                          hereby on my own free will, authorize the hospital to
                          admit myself/ my relative.{" "}
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
                              <th
                                style={{
                                  width: "33%",
                                  border: "1.5px  solid #20958C",
                                }}
                              >
                                Doctor
                              </th>
                              <th
                                style={{
                                  width: "33%",
                                  border: "1.5px  solid #20958C",
                                }}
                              >
                                Tenant/ Relative
                              </th>
                              <th
                                style={{
                                  width: "33%",
                                  border: "1.5px  solid #20958C",
                                }}
                              >
                                Patient
                              </th>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  width: "33%",
                                  border: "1.5px  solid #20958C",
                                }}
                              >
                                Name:{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  {`${item?.ConDoctorName?.Firstname} ${item?.ConDoctorName?.Lastname} `}
                                </span>{" "}
                              </td>
                              <td
                                style={{
                                  width: "33%",
                                  border: "1.5px  solid #20958C",
                                }}
                              >
                                Name:{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  {item?.RealivesName}
                                </span>{" "}
                              </td>
                              <td
                                style={{
                                  width: "33%",
                                  border: "1.5px  solid #20958C",
                                }}
                              >
                                Sign:{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  <img
                                    alt="sign"
                                    src={`http://localhost:8521/ConsentForm/${item?.patientsign}`}
                                  />
                                </span>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  width: "33%",
                                  border: "1.5px  solid #20958C",
                                }}
                              >
                                Sign:{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  <img
                                    alt="sign"
                                    src={`http://localhost:8521/ConsentForm/${item?.doctorsign}`}
                                  />
                                </span>{" "}
                              </td>
                              <td
                                style={{
                                  width: "33%",
                                  border: "1.5px  solid #20958C",
                                }}
                              >
                                Relationship:{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  {item?.PatientRelation}
                                </span>{" "}
                              </td>
                              <td
                                style={{
                                  width: "33%",
                                  border: "1.5px  solid #20958C",
                                }}
                              >
                                <span style={{ fontWeight: "bold" }}></span>
                              </td>
                            </tr>
                          </tbody>
                        </Table>

                        <p style={{ fontSize: "18px", marginTop: "20px" }}>
                          Date/Time:{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {item?.Date} - 16:50
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </>
      ) : (
        <>
          {btn2 ? (
            <>
              {CauseDetails?.consentform
                ?.filter((ele) => ele.formname === ConsentForm)
                ?.map((item) => {
                  return (
                    <div>
                      <hr/>
                      <div className="mt-2 d-dlex  d-flex justify-content-between gap-2">
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
                          Download <FiDownload />
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
                          <div className="text-center mt-1">
                            {" "}
                            <h6
                              className="fw-bold mt-2"
                              style={{ color: "#20958C", fontSize: "30px" }}
                            >
                              Hospitalization Estimated Charge sheet Cum Consent
                              form
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
                                      style={{
                                        width: "33%",
                                        border: "1.5px  solid #20958C",
                                      }}
                                    >
                                      <span style={{ fontWeight: "bold" }}>
                                        {item?.WardRoomCharges}
                                      </span>{" "}
                                    </td>
                                    <td
                                      style={{
                                        width: "33%",
                                        border: "1.5px  solid #20958C",
                                      }}
                                    >
                                      Ward/ Room Category Charges per Day
                                      (Including Room Rent, nursing Charges,
                                      Duty Doctor Charges, Monitoring, charges,
                                      Primary Consultant Charges).
                                    </td>
                                    <td
                                      style={{
                                        width: "33%",
                                        border: "1.5px  solid #20958C",
                                      }}
                                    >
                                      Remark:{" "}
                                      <span style={{ fontWeight: "bold" }}>
                                        {item?.WardRemark}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      colSpan={3}
                                      style={{
                                        width: "100%",
                                        border: "1.5px  solid #20958C",
                                      }}
                                    >
                                      {item?.WardText1}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      colSpan={3}
                                      style={{
                                        width: "100%",
                                        border: "1.5px  solid #20958C",
                                      }}
                                    >
                                      {item?.WardText2}
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
                                    <th
                                      style={{
                                        width: "33%",
                                        border: "1.5px  solid black",
                                      }}
                                    >
                                      Estimated Cost
                                    </th>
                                    <th
                                      style={{
                                        width: "33%",
                                        border: "1.5px  solid black",
                                      }}
                                    >
                                      Remark
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {item?.SurgeryPackages?.map((item2) => {
                                    return (
                                      <tr>
                                        <td
                                          style={{
                                            width: "33%",
                                            border: "1.5px  solid #20958C",
                                          }}
                                        >
                                          {item2?.NameOfSurgery}
                                        </td>
                                        <td
                                          style={{
                                            width: "33%",
                                            border: "1.5px  solid #20958C",
                                          }}
                                        >
                                          {item2?.SurgeryEstimatePrice?.[0]}
                                        </td>
                                        <td
                                          style={{
                                            width: "33%",
                                            border: "1.5px  solid #20958C",
                                          }}
                                        >
                                          {item?.SurgeryRemark}
                                        </td>
                                      </tr>
                                    );
                                  })}
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
                                    <th
                                      style={{
                                        width: "33%",
                                        border: "1.5px  solid black",
                                      }}
                                    >
                                      Estimated Cost
                                    </th>
                                    <th
                                      style={{
                                        width: "33%",
                                        border: "1.5px  solid black",
                                      }}
                                    >
                                      Remark
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {item?.ProcedureDetails?.map((item3) => {
                                    return (
                                      <tr>
                                        <td
                                          style={{
                                            width: "33%",
                                            border: "1.5px  solid #20958C",
                                          }}
                                        >
                                          {item3?.NameofProcedure}
                                        </td>
                                        <td
                                          style={{
                                            width: "33%",
                                            border: "1.5px  solid #20958C",
                                          }}
                                        >
                                          {item3?.ProcedureCost}
                                        </td>
                                        <td
                                          style={{
                                            width: "33%",
                                            border: "1.5px  solid #20958C",
                                          }}
                                        >
                                          {item3?.ProcedurRemark}
                                        </td>
                                      </tr>
                                    );
                                  })}
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
                                    <th
                                      style={{
                                        width: "33%",
                                        border: "1.5px  solid black",
                                      }}
                                    >
                                      Estimated Cost
                                    </th>
                                    <th
                                      style={{
                                        width: "33%",
                                        border: "1.5px  solid black",
                                      }}
                                    >
                                      Remark
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {item?.InvestigationChargeList?.map(
                                    (item4) => {
                                      return (
                                        <tr>
                                          <td
                                            style={{
                                              width: "33%",
                                              border: "1.5px  solid #20958C",
                                            }}
                                          >
                                            {item4?.InvestigationName}
                                          </td>
                                          <td
                                            style={{
                                              width: "33%",
                                              border: "1.5px  solid #20958C",
                                            }}
                                          >
                                            {item4?.InvestigationCost}
                                          </td>
                                          <td
                                            style={{
                                              width: "33%",
                                              border: "1.5px  solid #20958C",
                                            }}
                                          >
                                            {item4?.InvestigationRemark}
                                          </td>
                                        </tr>
                                      );
                                    }
                                  )}
                                </tbody>
                              </Table>
                            </p>
                            <p style={{ fontSize: "18px" }}>
                              <span
                                style={{ color: "#20958C", fontWeight: "600" }}
                              >
                                Note
                              </span>{" "}
                              : The above stated details exclude charges for
                              routine procedure/ Investigation, Pharmacy /
                              Medicine Specialists and superSpecialists
                              consultations, ventilator and oxygen, Synringe
                              pump, Patient transport and usages of any other
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
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              I,{" "}
                              <span style={{ fontWeight: "bold" }}>
                                {item?.patientname}
                              </span>{" "}
                              have been explained in detail the above mentioned
                              charges in a language that I understand.
                              <br />
                              <br />
                              Patient/ Patient Relative Name & Signature :{" "}
                              <span style={{ fontWeight: "bold" }}>
                                {item?.RealivesName}
                              </span>{" "}
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
                                    <span style={{ fontWeight: "bold" }}>
                                      {item?.Witness1}
                                    </span>{" "}
                                  </td>
                                  <td style={{ border: "1px  solid #20958C" }}>
                                    Withness-2/Relative-2:{" "}
                                    <span style={{ fontWeight: "bold" }}>
                                      {item?.Witness2}
                                    </span>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ border: "1px  solid #20958C" }}>
                                    Phone No:{" "}
                                    <span style={{ fontWeight: "bold" }}>
                                      {item?.Witness1Number}
                                    </span>{" "}
                                  </td>
                                  <td style={{ border: "1px  solid #20958C" }}>
                                    Phone No:{" "}
                                    <span style={{ fontWeight: "bold" }}>
                                      {item?.Witness2Number}
                                    </span>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </Table>

                            <p style={{ fontSize: "18px" }}>
                              Name: Designation & Signature of the hospital
                              staff Explaining the Estinated Cost <br /> <br />
                              <span style={{ fontWeight: "bold" }}>
                                Dr. Strange: surgeon
                              </span>{" "}
                            </p>
                            <p
                              style={{ fontSize: "18px", textAlignLast: "end" }}
                            >
                              Signature
                              <input
                                type="text"
                                name=""
                                id=""
                                className="vi_0"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </>
          ) : (
            <>
              {btn3 ? (
                <>
                  {CauseDetails?.consentform
                    ?.filter((ele) => ele.formname === ConsentForm)
                    ?.map((item) => {
                      return (
                        <div>
                          <hr/>
                          <div className="mt-2 d-dlex d-flex justify-content-between gap-2">
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
                              Download <FiDownload />
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
                                    Beside Canara Bank, Jalanagar Main Road, K.
                                    K. Colony, Vijaypura-586109
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
                                          style={{
                                            width: "33%",
                                            border: "1.5px  solid #20958C",
                                          }}
                                        >
                                          Patient Name:{" "}
                                          <span style={{ fontWeight: "bold" }}>
                                            {item?.patientname}
                                          </span>{" "}
                                        </td>
                                        <td
                                          style={{
                                            width: "33%",
                                            border: "1.5px  solid #20958C",
                                          }}
                                        >
                                          Date:{" "}
                                          <span style={{ fontWeight: "bold" }}>
                                            {moment(
                                              patientdetail?.createdAt
                                            ).format("DD-MM-YYYY")}
                                          </span>{" "}
                                        </td>
                                        <td
                                          style={{
                                            width: "33%",
                                            border: "1.5px  solid #20958C",
                                          }}
                                        >
                                          Age:{" "}
                                          <span style={{ fontWeight: "bold" }}>
                                            {ageOutput}
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={{
                                            width: "33%",
                                            border: "1.5px  solid #20958C",
                                          }}
                                        >
                                          OP No:{" "}
                                          <span
                                            style={{ fontWeight: "bold" }}
                                          ></span>{" "}
                                        </td>
                                        <td
                                          style={{
                                            width: "33%",
                                            border: "1.5px  solid #20958C",
                                          }}
                                        >
                                          IP No:{" "}
                                          <span style={{ fontWeight: "bold" }}>
                                            {patientdetail?.PatientId}
                                          </span>{" "}
                                        </td>
                                        <td
                                          style={{
                                            width: "33%",
                                            border: "1.5px  solid #20958C",
                                          }}
                                        >
                                          Sex:{" "}
                                          <span style={{ fontWeight: "bold" }}>
                                            {patientdetail?.Gender}
                                          </span>{" "}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colSpan={3}
                                          style={{
                                            border: "1.5px  solid #20958C",
                                          }}
                                        >
                                          <p>
                                            I/ We{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {item?.StaffName}
                                            </span>{" "}
                                            have been explained about the
                                            medical condition and the prospered
                                            surgery by <br /> Dr.{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {`${item?.ConDoctorName?.Firstname} ${item?.ConDoctorName?.Lastname}`}{" "}
                                            </span>{" "}
                                            and Dr. {"  "}{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {`${item?.ConDoctorName2?.Firstname} ${item?.ConDoctorName2?.Lastname}`}
                                            </span>
                                            <br />
                                            <br />
                                            Medical Condition/Diagnosis :{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {item?.Diagnosis}
                                            </span>{" "}
                                            <br />
                                            <br />
                                            Proposed operatve Procedure :{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {item?.OperativeProce}
                                            </span>{" "}
                                            <br />
                                            <br />
                                            I/We, (the relatives/legal guardian
                                            of) Mr./Mrs{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {item?.patientname}
                                            </span>{" "}
                                            who is admitted on{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {moment(item?.Date)?.format(
                                                "DD/MM/YYYY"
                                              )}
                                            </span>{" "}
                                            have been explained in the languages
                                            understood by me/us, about the pros
                                            & cons of the operation and risks
                                            involved during and after the
                                            surgery, and that the procedure
                                            carries a higher risk than the usual
                                            cases.
                                            <br />
                                            <br />
                                            I/We, have been explained in detail
                                            about the nature of the
                                            surgery/procedure, the possible
                                            benefits and complications. I/We
                                            have been explained that this case
                                            carries a higher risk than the usual
                                            and the reasons for the same. During
                                            the course of the surgical
                                            procedure, circumstances may arise
                                            or a condidtion may be found which
                                            may require suspension or extension
                                            of planned procedure or necessary
                                            performance of an alternative
                                            procedure.
                                            <br />
                                            <br />
                                            I/We, have been informed the high
                                            risk involved in medical procedures
                                            which might necessitate admission to
                                            ICU/NICU/Mecanial
                                            Ventilation/Endotracheal intubation
                                            Lumbar puncture/Bone marrow
                                            aspiration, Intercostal drainage,
                                            Arterial Central Dialysis, line,
                                            Exchange transfusion, FNAC Biopsy
                                            etc.
                                            <br />
                                            <br />
                                            I/We have beeen informed that the
                                            operation (s)/Procedures (s)
                                            involved the risk of unsuccessful
                                            result,complication,temporary or
                                            permanent injury or disability and
                                            even fatality form known or
                                            unforeseen causes. No guarantee or
                                            promises have been made to me/us
                                            concerning the results of the
                                            procedure or treatment.
                                            <br />
                                            <br />
                                            I/We, understood that I/We, have the
                                            right to withhold consent for the
                                            procedure/surgery I/We. also
                                            understand that I/We, have a right
                                            to obtain a second opinion transfer
                                            to a different centre and the risk
                                            involved in such a decision.
                                            <br />
                                            Knowing all the above mentioned
                                            facts / We, give my/our Risk Consent
                                            for the above mentioned
                                            surgery/Procedure.
                                            <br />
                                            <br />
                                            I/We also indemnify the hospital,
                                            the concerned doctors and the
                                            hospital staff in case of any
                                            adverse consequences arising from
                                            the surgery.
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
                                        <th style={{ width: "20%" }}>
                                          Signature
                                        </th>
                                        <th style={{ width: "20%" }}>Date</th>
                                        <th style={{ width: "20%" }}>Time</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          Patient/Patirnt Surrogate
                                        </td>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          {item?.patientname}
                                        </td>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          <img
                                            alt="sign"
                                            src={`http://localhost:8521/ConsentForm/${item?.patientsign}`}
                                          />
                                        </td>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          {item?.Date2}
                                        </td>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          {item?.Time1}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          Witness
                                        </td>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          {item?.Witness1}
                                        </td>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          <img
                                            alt="sign"
                                            src={`http://localhost:8521/ConsentForm/${item?.witnesssign}`}
                                          />
                                        </td>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          {item?.Date3}
                                        </td>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          {item?.Time2}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          Doctor
                                        </td>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          {`${item?.Doctor2?.Firstname} ${item?.Doctor2?.Lastname}`}
                                        </td>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          <img
                                            alt="sign"
                                            src={`http://localhost:8521/ConsentForm/${item?.doctorsign}`}
                                          />
                                        </td>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          {item?.Date4}
                                        </td>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          {item?.Time3}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          Relative/Legal_guardian(relationship
                                          with patient)
                                        </td>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          {item?.Guardian1}
                                        </td>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          <img
                                            alt="sign"
                                            src={`http://localhost:8521/ConsentForm/${item?.legalgurdiansign}`}
                                          />
                                        </td>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          {item?.Date5}
                                        </td>
                                        <td
                                          style={{
                                            width: "20%",
                                            border: "1px solid #20958C",
                                          }}
                                        >
                                          {item?.Time4}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </>
              ) : (
                <>
                  {btn4 ? (
                    <>
                      {CauseDetails?.consentform
                        ?.filter((ele) => ele.formname === ConsentForm)
                        ?.map((item) => {
                          return (
                            <div>
                              <hr/>
                              <div className="mt-2 d-dlex d-flex justify-content-between gap-2">
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
                                  Download <FiDownload />
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
                                      <h4
                                        className="fw-bold"
                                        style={{ fontSize: "25px" }}
                                      >
                                        JANANI MULTISPECIALITY HOSPITAL AND
                                        RESEARCH CENTER
                                      </h4>
                                      <h6
                                        className="fw-bold"
                                        style={{ fontSize: "19px" }}
                                      >
                                        Beside Canara Bank, Jalanagar Main Road,
                                        K. K. Colony, Vijaypura-586109
                                      </h6>
                                      <h6 style={{ fontSize: "16px" }}>
                                        Tel:08352-277077 Cell:9606031158,
                                        7090831204
                                        Email:jananihospital2018@gmail.com
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="text-center mt-1">
                                    {" "}
                                    <h6
                                      className="fw-bold mt-2"
                                      style={{
                                        color: "#20958C",
                                        fontSize: "30px",
                                      }}
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
                                          <td
                                            style={{
                                              width: "33%",
                                              border: "1.5px  solid #20958C",
                                            }}
                                          >
                                            Patient Name:{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {item?.patientname}
                                            </span>{" "}
                                          </td>
                                          <td
                                            style={{
                                              width: "33%",
                                              border: "1.5px  solid #20958C",
                                            }}
                                          >
                                            Date:{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {" "}
                                              {moment(
                                                patientdetail?.createdAt
                                              ).format("DD-MM-YYYY")}
                                            </span>{" "}
                                          </td>
                                          <td
                                            style={{
                                              width: "33%",
                                              border: "1.5px  solid #20958C",
                                            }}
                                          >
                                            Age:{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {ageOutput}
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            style={{
                                              width: "33%",
                                              border: "1.5px  solid #20958C",
                                            }}
                                          >
                                            OP No:{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            ></span>{" "}
                                          </td>
                                          <td
                                            style={{
                                              width: "33%",
                                              border: "1.5px  solid #20958C",
                                            }}
                                          >
                                            IP No:{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {patientdetail?.PatientId}
                                            </span>{" "}
                                          </td>
                                          <td
                                            style={{
                                              width: "33%",
                                              border: "1.5px  solid #20958C",
                                            }}
                                          >
                                            Sex:{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {patientdetail?.Gender}
                                            </span>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            colSpan={3}
                                            style={{
                                              border: "1.5px  solid #20958C",
                                            }}
                                          >
                                            Diagnosis :{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {item?.Diagnosis}
                                            </span>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            colSpan={3}
                                            style={{
                                              border: "1.5px  solid #20958C",
                                            }}
                                          >
                                            Operative Procedure/ Operation :{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {item?.OperativeProce}
                                            </span>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            colSpan={3}
                                            style={{
                                              border: "1.5px  solid #20958C",
                                            }}
                                          >
                                            Type of Anesthesia Local/ General/
                                            Spinal/ Epidural/ Never Block/
                                            Combined/ MAC :{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {item?.TypeofAnesthesia}
                                            </span>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            colSpan={3}
                                            style={{
                                              border: "1.5px  solid #20958C",
                                            }}
                                          >
                                            <p>
                                              I,{" "}
                                              <span
                                                style={{ fontWeight: "bold" }}
                                              >
                                                {item?.patientname}
                                              </span>{" "}
                                              (Patient Name), give my full
                                              consent out of my own free will to
                                              undergo the following surgery /
                                              procedure{" "}
                                              <span
                                                style={{ fontWeight: "bold" }}
                                              >
                                                {item?.NameOfSurgery}
                                              </span>{" "}
                                              at Janani Multispeciality Hospital
                                              I understand that the above
                                              mentioned procedure necessitates
                                              the administration of
                                              local/sedation/ regional/general
                                              anesthesia or any combination
                                              there of to provide the required
                                              anesthesia service.
                                              <br />
                                              <br />
                                              I, understand that anesthetic
                                              agent zould be administered by
                                              injecting in to the bloodstream
                                              (IV LINE), breathed in to the
                                              lungs, myected through a
                                              needle/catheter placed either
                                              directly in to the spinal canal er
                                              immediate outside the spinal canal
                                              block is achieved by injecting the
                                              anesthetic agent near the nerves.
                                              <br />
                                              <br />
                                              I, undentand results and effects
                                              of anesthesia depends on the type
                                              administered and it decreasedless
                                              of feeling/numbness, loss of
                                              movement to tatal unconscious
                                              state. vary from temporary.
                                              <br />
                                              <br />
                                              I, have been explained that all
                                              forms of anesthesia invalve some
                                              risks and no guarantees or
                                              promises can the results of the
                                              procedure/treatments, I understand
                                              that there of aesthesia Theses
                                              include Bruising, pain made
                                              concerning some infrequent
                                              complications that can occur due
                                              to use ome injuryst the side of
                                              injections, temporary breathing
                                              difficulties, temporary nerve
                                              damage muscle paint, asthmatic
                                              reactions, headaches, the
                                              possibility of sensation during
                                              the operation (especially with
                                              Caesarean section and some
                                              emergency procedures), damage to
                                              teeth and dental prostheses, lip
                                              and tongue, temperare, but nous
                                              complications including, heart
                                              attack, stroke, severe allergic ar
                                              sensitivity reactions, brain
                                              camage, kidney o failure, lung
                                              damage, paraplegia or
                                              quadriplegie, permanent nerve e or
                                              blood vessel damage, eye eye
                                              injury, damage, to the larynx
                                              Ivoice boa and vocal cards
                                              perumania and infaction bom blood
                                              transfusion The possibility of
                                              more serious complications
                                              including death is quite remote,
                                              but it does exists.
                                              <br />
                                              <br />
                                              I, have been explained language
                                              known & understood by about the
                                              nature of the surgery/procedure,
                                              type of anarsthesia used, and it's
                                              benefits, and costs, inks
                                              associated with it, other
                                              alternatives and its prognosis.
                                              <br />
                                              <br />
                                              I, understand that local
                                              anaesthesia with or without
                                              sedation may not be successful and
                                              therefor an altenative method may
                                              be used as deemend necessary. I
                                              hereby absolve Janani
                                              Multispeciailty Hospital
                                              <span
                                                style={{ fontWeight: "bold" }}
                                              >
                                                {" "}
                                                {item?.NameOfSurgery2}{" "}
                                              </span>
                                              and its surgical team & hospital
                                              staff of anyliability for
                                              consequences arising because of
                                              the above-mentioned
                                              surgery/procedure.
                                              <br />
                                              <span
                                                style={{ fontWeight: "bold" }}
                                              >
                                                Consent of Patient
                                                Rapresentative/Surrogate{" "}
                                              </span>
                                              <br />
                                              The patient is unable to give
                                              consent because he/she is
                                              minor/Unconscious hence I,{" "}
                                              <span
                                                style={{ fontWeight: "bold" }}
                                              >
                                                {item?.patientname}
                                              </span>{" "}
                                              (Name /relationship with Patient)
                                              therefore give my consent an
                                              behalf of the patient after
                                              discussion with the Doctor for the
                                              above mentioned
                                              Surgery/operative/Invasive
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
                                            <th style={{ width: "20%" }}>
                                              Name
                                            </th>
                                            <th style={{ width: "20%" }}>
                                              Signature
                                            </th>
                                            <th style={{ width: "20%" }}>
                                              Date
                                            </th>
                                            <th style={{ width: "20%" }}>
                                              Time
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              Patient/Patirnt Surrogate
                                            </td>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              {item?.patientname}
                                            </td>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              <img
                                                alt="sign"
                                                src={`http://localhost:8521/ConsentForm/${item?.patientsign}`}
                                              />
                                            </td>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              {item?.Date2}
                                            </td>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              {item?.Time1}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              Witness
                                            </td>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              {item?.Witness1}
                                            </td>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              <img
                                                alt="sign"
                                                src={`http://localhost:8521/ConsentForm/${item?.witnesssign}`}
                                              />
                                            </td>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              {item?.Date3}
                                            </td>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              {item?.Time2}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              Doctor
                                            </td>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              {`${item?.Doctor2?.Firstname} ${item?.Doctor2?.Lastname}`}
                                            </td>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              <img
                                                alt="sign"
                                                src={`http://localhost:8521/ConsentForm/${item?.doctorsign}`}
                                              />
                                            </td>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              {" "}
                                              {item?.Date4}
                                            </td>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              {" "}
                                              {item?.Time3}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              Relative/Legal_guardian(relationship
                                              with patient)
                                            </td>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              {item?.Guardian1}
                                            </td>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              <img
                                                alt="sign"
                                                src={`http://localhost:8521/ConsentForm/${item?.legalgurdiansign}`}
                                              />
                                            </td>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              {item?.Date5}
                                            </td>
                                            <td
                                              style={{
                                                width: "20%",
                                                border: "1px solid #20958C",
                                              }}
                                            >
                                              {item?.Time4}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </Table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
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
