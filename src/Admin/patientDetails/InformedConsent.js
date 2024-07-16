import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import moment from "moment";
import React, { useRef, useState } from "react";
import { Table, Modal, ProgressBar, Button, Form } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";

const InformedConsent = ({ HighRiskCForm }) => {
  console.log("HighRiskCForm", HighRiskCForm);

  const pdfdownload = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("HighRiskConsentForm.pdf");
  };

  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "HighRiskConsentForm",
  });
  return (
    <>
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
          onClick={handleprint}
        >
          Print <FiDownload />
        </Button>
      </div>
      <div
      ref={componentRef}
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
          <div className="text-center mt-1">
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
                      <span style={{ fontWeight: "bold" }}>
                        {HighRiskCForm[0]?.patientname}
                      </span>{" "}
                    </td>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      Date:{" "}
                      <span style={{ fontWeight: "bold" }}>
                        {moment(HighRiskCForm[0]?.createdAt)?.format(
                          "DD/MM/YYYY"
                        )}
                      </span>{" "}
                    </td>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      Age:{" "}
                      <span style={{ fontWeight: "bold" }}>
                        {(() => {
                          const dob = new Date(HighRiskCForm[0]?.DOB);
                          const currentDate = new Date();
                          const differenceMs = currentDate - dob;
                          const ageYears = Math.floor(
                            differenceMs / (1000 * 60 * 60 * 24 * 365.25)
                          );
                          const ageMonths = Math.floor(
                            (differenceMs % (1000 * 60 * 60 * 24 * 365.25)) /
                              (1000 * 60 * 60 * 24 * 30.44)
                          );

                          if (ageYears > 0) {
                            return (
                              <span>
                                {ageYears} {ageYears === 1 ? "year" : "years"}
                              </span>
                            );
                          } else {
                            return (
                              <span>
                                {ageMonths}{" "}
                                {ageMonths === 1 ? "month" : "months"}
                              </span>
                            );
                          }
                        })()}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      OP No: <span style={{ fontWeight: "bold" }}>12SDFD3</span>{" "}
                    </td>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      IP No:{" "}
                      <span style={{ fontWeight: "bold" }}>SHIDIK323</span>{" "}
                    </td>
                    <td
                      style={{ width: "33%", border: "1.5px  solid #20958C" }}
                    >
                      Sex: <span style={{ fontWeight: "bold" }}>{HighRiskCForm[0]?.Gender}</span>{" "}
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={3} style={{ border: "1.5px  solid #20958C" }}>
                      <p>
                        I/ We{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {HighRiskCForm[0]?.StaffName}
                        </span>{" "}
                        have been explained about the medical condition and the
                        prospered surgery by <br /> Dr.{" "}
                        <span style={{ fontWeight: "bold" }}>{`${HighRiskCForm[0]?.ConDoctorName?.Firstname} ${HighRiskCForm[0]?.ConDoctorName?.Lastname}`} </span> and Dr.{" "}
                        {"  "} <span style={{ fontWeight: "bold" }}>{`${HighRiskCForm[0]?.ConDoctorName2?.Firstname} ${HighRiskCForm[0]?.ConDoctorName2?.Lastname}`}</span>
                        <br />
                        <br />
                        Medical Condition/Diagnosis:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {HighRiskCForm[0]?.Diagnosis}
                        </span>{" "}
                        <br />
                        <br />
                        Proposed operatve Procedure:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {HighRiskCForm[0]?.OperativeProce}
                        </span>{" "}
                        <br />
                        <br />
                        I/We, (the relatives/legal guardian of) Mr./Mrs{" "}
                        <span style={{ fontWeight: "bold" }}>
                        {HighRiskCForm[0]?.patientname}
                        </span>{" "}
                        who is admitted on{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {HighRiskCForm[0]?.Date}
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
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      {HighRiskCForm[0]?.patientname}
                    </td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    >
                       <img
                      alt="profile-img"
                      src={`http://localhost:8521/ConsentForm/${HighRiskCForm[0]?.patientsign}`}
                    />
                    </td>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      {HighRiskCForm[0]?.Date2}
                    </td>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      {HighRiskCForm[0]?.Time1}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      Witness
                    </td>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      {HighRiskCForm[0]?.Witness1}
                    </td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    >
                      <img
                      alt="profile-img"
                      src={`http://localhost:8521/ConsentForm/${HighRiskCForm[0]?.witnesssign}`}
                    />
                    </td>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      {HighRiskCForm[0]?.Date3}
                    </td>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      {HighRiskCForm[0]?.Time2}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      Doctor
                    </td>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                    {`${HighRiskCForm[0]?.Doctor2?.Firstname} ${HighRiskCForm[0]?.Doctor2?.Lastname}`}                   
                    </td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    >
                       <img
                      alt="profile-img"
                      src={`http://localhost:8521/ConsentForm/${HighRiskCForm[0]?.doctorsign}`}
                    />
                    </td>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      {HighRiskCForm[0]?.Date4}
                    </td>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      {HighRiskCForm[0]?.Time3}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      Relative/Legal_guardian(relationship with patient)
                    </td>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      {HighRiskCForm[0]?.Guardian1}
                    </td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    >
                        <img
                      alt="profile-img"
                      src={`http://localhost:8521/ConsentForm/${HighRiskCForm[0]?.legalgurdiansign}`}
                    />
                    </td>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      {HighRiskCForm[0]?.Date5}
                    </td>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      {HighRiskCForm[0]?.Time4}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformedConsent;
