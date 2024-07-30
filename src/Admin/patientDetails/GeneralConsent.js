import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import moment from "moment";
import React from "react";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

const GeneralConsent = ({ viewGeneralConsentform, patientdetail }) => {
  console.log("patientdetail", patientdetail);
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
  return (
    <>
      {viewGeneralConsentform?.map((item, i) => {
        return (
          <div>
            <hr />
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
                onClick={createPDF}
              >
                Download <FiDownload />
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
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, Want to
                    get myself/ my relative{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {item?.patientname}
                    </span>{" "}
                    Admitted and treated in this hospital. The decision of
                    coming here is purely on my discretion.
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, am fully
                    aware with the facilities available for the care of myself/
                    my relative and have full faith in the staff of this
                    hospital/ Medical Establishment. I have been explained that
                    admitted Patients and Patients required emergency care take
                    priority of the Doctor. I fully agree and co-operate.{" "}
                  </p>

                  <p style={{ fontSize: "18px" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, fully
                    understand and agree to pay the fees charged by the Doctor/
                    Hospital for the professional service rendered to me/
                    relative during the illness regardies of the end result of
                    the illness. I promise not to misbehave either with Doctors
                    or any of the Hospital staff. I know that indecency on my
                    part will lead to explusion from the Hospital.{" "}
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, hereby
                    on my own free will, authorize the hospital to admit myself/
                    my relative.{" "}
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
                            Dr.{" "}
                            {`${item?.ConDoctorName?.Firstname} ${item?.ConDoctorName?.Lastname}`}
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
                            Mr. {item?.RealivesName}
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
                              alt="profile-img"
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
                              alt="profile-img"
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
                      {moment(item?.createdAt)?.format(
                        "DD/MM/YYYY - HH:MM"
                      )}
                    </span>{" "}
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

export default GeneralConsent;
