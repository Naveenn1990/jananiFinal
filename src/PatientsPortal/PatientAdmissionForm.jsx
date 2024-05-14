import React from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import Barcode from "react-barcode";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FiDownload } from "react-icons/fi";

const PatientAdmissionForm = () => {
    let patientDetails = JSON.parse(sessionStorage.getItem("PatientUser"));

    const dobString = patientDetails?.DOB;
const dob = new Date(dobString);
const currentDate = new Date();
const differenceMs = currentDate - dob;
const msInYear = 1000 * 60 * 60 * 24 * 365.25;
const msInMonth = msInYear / 12;
let ageOutput;
if (differenceMs < msInYear) {
  const ageMonths = Math.floor(differenceMs / msInMonth);
  ageOutput = `${ageMonths} months`;
} else {
  const ageYears = Math.floor(differenceMs / msInYear);
  ageOutput = `${ageYears} years`;
}



    const createPDF = async () => {
        // dynamic image is also adding in the PDF
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = await html2canvas(document.querySelector("#pdf"), {
          useCORS: true,
        });
    
        const img = data.toDataURL("image/png");
        const imgProperties = pdf.getImageProperties(img);
    
        // Calculate the scaling factor to fit the image on A4 paper
        const scaleFactor = pdf.internal.pageSize.getWidth() / imgProperties.width;
    
        // Calculate the height after scaling
        const pdfHeight = imgProperties.height * scaleFactor;
    
        // Add the image to PDF with the calculated dimensions
        pdf.addImage(img, "PNG", 0, 0, pdf.internal.pageSize.getWidth(), pdfHeight);
    
        // Save the PDF
        pdf.save("AdmissionForm.pdf");
      };
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
            <div>
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
                      <div className="text-center mt-1 d-flex justify-content-evenly">
                        {" "}
                        <h6
                          className="fw-bold mt-4"
                          style={{ color: "#20958C", fontSize: "30px" }}
                        >
                          IN_PATIENT ADMISSION FORM
                        </h6>
                        <Barcode value={`${patientDetails?.Firstname} ${patientDetails?.Lastname}`} width={1} height={50}  />
                      </div>
                      <div
                        className="text-center"
                        style={{
                          borderBottom: "1px solid #20958C",
                          width: "100%",
                          textAlign: "center",
                        }}
                      ></div>
                      <div
                        className="mt-2"
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
                            marginBottom: "20px",
                          }}
                        >
                          <tbody>
                            <tr style={{border:"1px solid #20958C"}}>
                              <td
                                colSpan={3}
                                style={{
                                  width: "33%",
                                }}
                              >
                                Date of admission:  {patientDetails?.AdmitDate}<br />
                                ML Case : 
                              </td>
                              <td
                                colSpan={3}
                                style={{
                                  width: "33%",
                                }}
                              >
                                IP No : <br />
                                MLC No : 
                              </td>
                             
                            </tr>
                            <tr style={{border:"1px solid #20958C"}}>
                              <td
                                colSpan={3}
                                style={{
                                  width: "33%",
                                }}
                              >
                                UHID No.: {patientDetails?.PatientId}<br />
                               Pateint Name : {patientDetails?.Firstname} {patientDetails?.Lastname}<br />
                               Address : {patientDetails?.Address1}<br />
                               Occupation : {patientDetails?.Designation}<br />
                               Mobile No. : +91 {patientDetails?.PhoneNumber}<br />
                               Relative Name:<br />
                               Name & Relationship :<br />
                               Ref. Dr. : <br />
                               Contact No. : +91 {patientDetails?.PhoneNumber}
                              </td>
                              <td
                                colSpan={3}
                                style={{
                                  width: "33%",
                                }}
                              >
                                Date of Birth : {patientDetails?.DOB}<br />
                                Sex: {patientDetails?.Gender} / Age : {ageOutput}<br />
                                Marital Status : {patientDetails?.MaritalStatus}<br />
                                Phone No. : {patientDetails?.PhoneNumber}<br />
                                Blood Group : 0<br />
                                <br />
                                Certificate No. :<br />
                                Consultant : Dr. Hampanagouda N.
Patil Gyneac. &                 Obst.<br />
                              </td>
                             
                            </tr>
                            <tr style={{border:"1px solid #20958C"}}>
                              <td
                                colSpan={3}
                                style={{
                                  width: "33%",
                                }}
                              >
                                Signature of the Attendant :
                              </td>
                              <td
                                colSpan={3}
                                style={{
                                  width: "33%",
                                }}
                              >
                                Signature of the Patient : 
                              </td>
                             
                            </tr>
                            <tr style={{border:"1px solid #20958C"}}>
                              <td
                                colSpan={1}
                                style={{
                                  width: "33%",
                                  padding:"5px",
                                  border:"1px solid #20958C"
                                }}
                              >
                                <div style={{border:"1px solid #20958C",display:"flex",alignItems:"center"}}>
                                <br />
                                Provisional / Admission Diagnosis
                                <br />
                                <br />
                                </div>
                               
                              </td>
                              <td
                                colSpan={5}
                                style={{
                                  width: "33%",
                                  padding:"3px",
                                }}
                              >
                               <div>
                                <div style={{border:"1px solid #20958C", marginBottom:"1px"}}>
                                <br />
                                </div>
                                <div style={{border:"1px solid #20958C",marginBottom:"1px"}}>
                                <br />
                                </div>
                                <div style={{border:"1px solid #20958C"}}>
                                <br />
                                </div>
                               </div>
                              </td>
                             
                            </tr>
                            <tr style={{border:"1px solid #20958C"}}>
                              <td
                                colSpan={1}
                                style={{
                                  width: "33%",
                                  padding:"5px",
                                  border:"1px solid #20958C"
                                }}
                              >
                                <div style={{border:"1px solid #20958C",display:"flex",alignItems:"center"}}>
                                <br />
                                Secondary Diagnosis And
Compllcation
                                <br />
                                <br />
                                </div>
                               
                              </td>
                              <td
                                colSpan={5}
                                style={{
                                  width: "33%",
                                  padding:"3px",
                                }}
                              >
                               <div>
                                <div style={{border:"1px solid #20958C", marginBottom:"1px"}}>
                                <br />
                                </div>
                                <div style={{border:"1px solid #20958C",marginBottom:"1px"}}>
                                <br />
                                </div>
                                <div style={{border:"1px solid #20958C"}}>
                                <br />
                                </div>
                               </div>
                              </td>
                             
                            </tr>
                            <tr style={{border:"1px solid #20958C"}}>
                              <td
                                colSpan={1}
                                style={{
                                  width: "33%",
                                  padding:"5px",
                                  border:"1px solid #20958C"
                                }}
                              >
                                <div style={{border:"1px solid #20958C",display:"flex",alignItems:"center"}}>
                                <br />
                                Operative Procedures
                                <br />
                                <br />
                                </div>
                               
                              </td>
                              <td
                                colSpan={5}
                                style={{
                                  width: "33%",
                                  padding:"3px",
                                }}
                              >
                               <div>
                                <div style={{border:"1px solid #20958C", marginBottom:"1px"}}>
                                <br />
                                </div>
                                <div style={{border:"1px solid #20958C",marginBottom:"1px"}}>
                                <br />
                                </div>
                                <div style={{border:"1px solid #20958C"}}>
                                <br />
                                </div>
                               </div>
                              </td>
                             
                            </tr>
                            <tr style={{border:"1px solid #20958C"}}>
                              <td
                                colSpan={1}
                                style={{
                                  width: "33%",
                                  padding:"5px",
                                  border:"1px solid #20958C"
                                }}
                              >
                                <div style={{border:"1px solid #20958C",display:"flex",alignItems:"center"}}>
                                Date & Time Discharge
                                </div>
                               
                              </td>
                              <td
                                colSpan={5}
                                style={{
                                  width: "33%",
                                  padding:"3px",
                                }}
                              >
                               <div>
                                <div style={{border:"1px solid #20958C", marginBottom:"1px"}}>
                                <br />
                                </div>
                               </div>
                              </td>
                             
                            </tr>
                            <tr style={{border:"1px solid #20958C"}}>
                              <td
                                colSpan={1}
                                style={{
                                  width: "33%",
                                  padding:"5px",
                                  border:"1px solid #20958C"
                                }}
                              >
                                <div style={{border:"1px solid #20958C",paddingTop:"11px",paddingBottom:"11px"}}>
                                
                                Outcome
                                
                                </div>
                               
                              </td>
                              <td
                                colSpan={5}
                                style={{
                                  width: "33%",
                                  padding:"3px",
                                }}
                              >
                               <div>
                                <div style={{border:"1px solid #20958C", marginBottom:"1px"}}>
                                <br />
                                </div>
                                <div style={{border:"1px solid #20958C",marginBottom:"1px"}}>
                                <br />
                                </div>
                               
                               </div>
                              </td>
                             
                            </tr>
                            <tr style={{border:"1px solid #20958C"}}>
                              <td
                                colSpan={1}
                                style={{
                                  width: "33%",
                                  padding:"5px",
                                  border:"1px solid #20958C"
                                }}
                              >
                                <div style={{border:"1px solid #20958C",display:"flex",alignItems:"center"}}>
                               
                                In Case of Death Cause &<br />
Time of Death
                                </div>
                               
                              </td>
                              <td
                                colSpan={5}
                                style={{
                                  width: "33%",
                                  padding:"3px",
                                }}
                              >
                               <div>
                                <div style={{border:"1px solid #20958C", marginBottom:"1px"}}>
                                <br />
                                </div>
                                <div style={{border:"1px solid #20958C",marginBottom:"1px"}}>
                                <br />
                                </div>
                                
                               </div>
                              </td>
                             
                            </tr>
                            <tr style={{border:"1px solid #20958C"}}>
                              <td
                                colSpan={1}
                                style={{
                                  width: "33%",
                                  padding:"5px",
                                  border:"1px solid #20958C"
                                }}
                              >
                                <div style={{border:"1px solid #20958C",display:"flex",alignItems:"center"}}>
                             
                                Autopsy : Yes / No
                                </div>
                               
                              </td>
                              <td
                                colSpan={5}
                                style={{
                                  width: "33%",
                                  padding:"3px",
                                }}
                              >
                               <div>
                                <div style={{border:"1px solid #20958C", marginBottom:"1px"}}>
                                <br />
                                </div>
                                
                               </div>
                              </td>
                             
                            </tr>
                            <tr style={{border:"1px solid #20958C"}}>
                              <td
                                colSpan={1}
                                style={{
                                  width: "33%",
                                  padding:"5px",
                                  border:"1px solid #20958C"
                                }}
                              >
                                <div style={{border:"1px solid #20958C",display:"flex",alignItems:"center"}}>
                                Signature of Unit Head
                                </div>
                               
                              </td>
                              <td
                                colSpan={5}
                                style={{
                                  width: "33%",
                                  padding:"3px",
                                }}
                              >
                               <div>
                                <div style={{border:"1px solid #20958C", marginBottom:"1px"}}>
                                <br />
                                </div>
                               
                               </div>
                              </td>
                             
                            </tr>
                            
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
             
             </div>
          
          </div>
          <div className="mt-2 d-flex justify-content-center">
              <Button 
            //   onClick={() => GeneralConsentForm()}
              >Submit</Button>
            </div>

    </div>
  )
}

export default PatientAdmissionForm