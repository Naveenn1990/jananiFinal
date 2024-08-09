import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";

import { Table } from "react-bootstrap";

import { FiDownload } from "react-icons/fi";

const EstimatedCharge = ({ HospitalizedCForm, patientdetail }) => {
  // PDF Generate

  const createPDF = async (id) => {
    try {
      const pdf = new jsPDF("portrait", "pt", "a4");
      const element = document.querySelector(`#${id}`);
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
      pdf.save("Hospitalization.pdf");
    } catch (error) {
      console.error("An error occurred while creating the PDF:", error);
    }
  };
  return (
    <>
      {HospitalizedCForm?.map((item ,i) => {
        return (
          <div>
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
                onClick={()=>createPDF(`pdf${i+1}`)}
              >
                Download <FiDownload />
              </button>
            </div>
            <div
              id={`pdf${i+1}`}
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
                            Ward/ Room Category Charges per Day (Including Room
                            Rent, nursing Charges, Duty Doctor Charges,
                            Monitoring, charges, Primary Consultant Charges).
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
                  <p style={{ fontSize: "18px" }} className="mt-3">
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
                        {HospitalizedCForm[0]?.SurgeryPackages?.map((item) => {
                          return (
                            <tr>
                              <td
                                style={{
                                  width: "33%",
                                  border: "1.5px  solid #20958C",
                                }}
                              >
                                {item?.NameOfSurgery}
                              </td>
                              <td
                                style={{
                                  width: "33%",
                                  border: "1.5px  solid #20958C",
                                }}
                              >
                                {item?.SurgeryEstimatePrice[0]}
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
                  <p style={{ fontSize: "18px" }} className="mt-3">
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
                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "1.5px  solid #20958C",
                            }}
                          >
                            {item?.NameofProcedure}
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "1.5px  solid #20958C",
                            }}
                          >
                            {item?.ProcedureCost}
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "1.5px  solid #20958C",
                            }}
                          >
                            {item?.ProcedurRemark}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </p>
                  <p style={{ fontSize: "18px" }} className="mt-3">
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
                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "1.5px  solid #20958C",
                            }}
                          >
                            {item?.InvestigationName}
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "1.5px  solid #20958C",
                            }}
                          >
                            {item?.InvestigationCost}
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "1.5px  solid #20958C",
                            }}
                          >
                            {item?.InvestigationRemark}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </p>
                  <p style={{ fontSize: "18px" }} className="mt-3">
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
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I,{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {item?.patientname}
                    </span>{" "}
                    have been explained in detail the above mentioned charges in
                    a language that I understand.
                    <br />
                    <br />
                    <div>
                      Patient/ Patient Relative Name & Signature :{" "}
                      <span style={{ fontWeight: "bold" }}>
                        {item?.RealivesName}
                      </span>{" "}
                      <span style={{marginLeft:"20px"}}>
                      Sign:{" "}
                          <span style={{ fontWeight: "bold" }}>
                            <img
                              alt="profile-img"
                              src={`http://localhost:8521/ConsentForm/${item?.relativesign}`}
                            />
                          </span>{" "}
                      </span>
                    </div>
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
                    Name: Designation & Signature of the hospital staff
                    Explaining the Estinated Cost <br /> <br />
                    <span style={{ fontWeight: "bold" }}>
                      Dr. {item?.AuthperName} : {item?.AuthperDesignation}
                    </span>{" "}
                  </p>
                  <p style={{ fontSize: "18px", textAlignLast: "end" }}>
                    Signature
                    <span style={{ fontWeight: "bold" }}>
                            <img
                              alt="sign"
                              src={`http://localhost:8521/ConsentForm/${item?.authpersonsign}`}
                            />
                          </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EstimatedCharge;
