import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";

const NurseNotes = ({ NursingNote, patientdetail, cause }) => {
  console.log("NursingNote,patientdetail", cause, NursingNote, patientdetail);
  const dobString = patientdetail?.DOB;
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

  const [Doctor, setDoctor] = useState([]);
  useEffect(() => {
    if (NursingNote) {
      const selecteddoc = patientdetail?.assigndocts?.filter(
        (ele) => ele?.doctorsId?._id === NursingNote?.[0]?.doctorId
      );
      setDoctor(selecteddoc);
    }
  }, [NursingNote, patientdetail?.assigndocts]);

  const pdfdownload = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("preanaestheticasses.pdf");
  };

  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "preanaestheticasses.pdf",
  });

  return (
    <>
      <hr
        style={{
          color: "black",
          height: "3px",
          width: "100%",
          backgroundColor: "black",
          border: "none",
        }}
      />
      <div className="text-center mt-1">
        {" "}
        <h6
          className="fw-bold mt-2"
          style={{ color: "#20958C", fontSize: "30px" }}
        >
          NURSES NOTES
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
          <div className="text-center mt-1">
            {" "}
            <h6
              className="fw-bold mt-2"
              style={{ color: "#20958C", fontSize: "30px" }}
            >
              NURSES NOTES
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
                  <td style={{ width: "33%", border: "2px  solid #20958C" }}>
                    Name :{" "}
                    {`${patientdetail?.Firstname} ${patientdetail?.Lastname}`}
                  </td>
                  <td style={{ width: "33%", border: "2px  solid #20958C" }}>
                    Age : {ageOutput}
                  </td>
                  <td style={{ width: "33%", border: "2px  solid #20958C" }}>
                    Sex : {patientdetail?.Gender}
                  </td>
                </tr>
              </tbody>
            </Table>
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
                    Pt ID: {patientdetail?.PatientId}
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Ward:
                    {cause?.causeBillDetails?.[0]?.BedBillDetails?.map(
                      (item) => {
                        return <span> {item?.bedName}</span>;
                      }
                    )}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Dept:
                    {cause?.causeBillDetails?.[0]?.BedBillDetails?.map(
                      (item) => {
                        return <span> {item?.wardtype}</span>;
                      }
                    )}
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Doctor:
                    <br />
                    {patientdetail?.assigndocts?.map((item, i) => {
                      return (
                        <div>
                          {i + 1}).{" "}
                          <span style={{ fontWeight: "bold" }}>
                            Dr.{" "}
                            {`${item?.doctorsId?.Firstname} ${item?.doctorsId?.Lastname}`}
                          </span>
                        </div>
                      );
                    })}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    DOA:{" "}
                    {moment(patientdetail?.createdAt)?.format("DD-MM-YYYY")}
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Known Drug Allergies : {patientdetail?.patientAllergies}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Diagnosis : {cause?.CauseName}
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                margin: "auto",
              }}
              bordered
            >
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Date & Time
                  </th>
                  <th style={{ width: "60%", border: "2px  solid #20958C" }}>
                    Observation/ Nsg Action/ Response/ Plan
                  </th>
                  <th style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Nurses's sign
                  </th>
                </tr>
              </thead>
              <tbody>
                {NursingNote?.map((item) => {
                  return (
                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{ width: "20%", border: "2px  solid #20958C" }}
                      >
                        {moment(item?.timeanddate)?.format(
                          "DD-MM-YYYY || HH:MM"
                        )}
                      </td>
                      <td
                        style={{ width: "60%", border: "2px  solid #20958C" }}
                      >
                        {item?.NurseReport}
                      </td>
                      <td
                        style={{ width: "20%", border: "2px  solid #20958C" }}
                      >
                        <img
                          alt="sign"
                          src={`http://localhost:8521/PatientREG/${item?.NurseSignature}`}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default NurseNotes;
