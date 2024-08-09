import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Container, Table, Modal } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa";
import moment from "moment";

function PatientCaseStudy() {
  const location = useLocation();
  const { item } = location.state || {}; // Destructure the item from state
  console.log("item", item);

  const [show, setShow] = useState(false);
  const [labreportObj, setlabreportObj] = useState({});
  const [Item2Details, setItem2Details] = useState({});
  const componentRef1 = useRef();
  const handleprint1 = useReactToPrint({
    content: () => componentRef1.current,
    documentTitle: "LabTestReport",
  });

  const createPDF = async () => {
    const input = document.getElementById("pdf");
    const options = { scrollY: -window.scrollY };
    const canvas = await html2canvas(input, options);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", [canvas.width, canvas.height]);
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("Prescription.pdf");
  };

  return (
    <div>
      <div style={{ backgroundColor: "#dae1f3" }}>
        <h2>Patient CaseStudy</h2>
      </div>
      <div id="pdf">
        <div
          className="details"
          style={{
            border: "2px  solid #20958C",
            borderRadius: "20px",
            marginTop: "10px",
          }}
        >
          {/* <h6
          className="ihie"
          style={{
            fontSize: "33px",
            fontWeight: "600",
            textAlign: "center",
            paddingTop: "15px",
          }}
        >
          Patients Details
        </h6> */}

          <Container style={{ padding: "30px" }}>
            <div
              className="row"
              style={{
                border: "1px solid #1F938A",
                borderRadius: "10px",
                position: "relative",
              }}
            >
              <div className="col-md-12 text-center">
                <div
                  className="fw-bold"
                  style={{
                    color: "#1F938A",
                    fontSize: "1.5rem",
                    position: "absolute",
                    top: "-20px",
                    left: "10px",
                    backgroundColor: "white",
                  }}
                >
                  {item.Firstname} {item.Lastname}
                </div>
              </div>

              <div className="col-md-3 text-start mt-4">
                <p>Patient Id : {item.PatientId}</p>
                <p>Mobile : {item.PhoneNumber}</p>
                <p>Email : {item.Email}</p>
              </div>
              <div className="col-md-3 text-start mt-4">
                <p>Sex : {item.Gender}</p>
                <p>DOB : {item.DOB}</p>
                {/* <p>Age : {ageOutput}</p> */}
              </div>
              <div className="col-md-3 text-start mt-4"></div>
              <div className="col-md-3 text-start mt-4">
                <div>
                  {/* <Barcode
                  value={patientdetail?.PatientId}
                  width={1}
                  height={50}
                /> */}
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="container" style={{ padding: "35px" }}>
          <div className="row mt-3">
            <div>
              <h3>Prescription :</h3>
            </div>
            <Table bordered>
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Medicine</th>
                  <th>Quantity</th>
                  <th>Medicine Taking Time</th>
                  <th>Dosage</th>
                </tr>
              </thead>
              <tbody>
                {item?.medicineInfo?.map((item1, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item1?.medicineName}</td>
                      <td>{item1?.Quantity}</td>
                      <td>{item1?.medicineTakingTime}</td>
                      <td>
                        <p>Morning: {item1?.morningDose}</p>
                        <p>Afternoon: {item1?.noonDose}</p>
                        <p>Evening: {item1?.eveDose}</p>
                        <p>Night: {item1?.nightDose}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>

          <div className="row mt-3">
            <div>
              <h3>Investigation :</h3>
            </div>
            <Table bordered>
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Invastigation Name</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {item?.investigationList?.map((item2, i) => {
                  return (
                    <>
                      {item2?.labid?.Labtests?.map((val) => {
                        return (
                          <tr>
                            <td>{i + 1}</td>
                            <td>{val?.testName}</td>
                            <td>
                              <FaRegFilePdf
                                onClick={() => {
                                  setItem2Details(item2);
                                  setlabreportObj(val);
                                  setShow(true);
                                }}
                                style={{ color: "#20958C", fontSize: "20px" }}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="row mt-3">
            <div>
              <h3>Examination :</h3>
            </div>
            <Table bordered>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Height(cm) :</td>
                  <td>{item?.height} cm</td>
                </tr>
                <tr>
                  <td>Weight(kg) :</td>
                  <td>{item?.weight} kg</td>
                </tr>
                <tr>
                  <td>BMI :</td>
                  <td>{item?.bmi}</td>
                </tr>
                <tr>
                  <td>Temperature :</td>
                  <td>{item?.temperature} F</td>
                </tr>
                <tr>
                  <td>Pulse Rate :</td>
                  <td>{item?.pulserate} </td>
                </tr>
                <tr>
                  <td>Blood Pressure :</td>
                  <td>{item?.bp}</td>
                </tr>
                <tr>
                  <td>Spo2(% at RA) :</td>
                  <td>{item?.spo2} </td>
                </tr>
                <tr>
                  <td>Sugar(mg/dl) :</td>
                  <td>{item?.suger} </td>
                </tr>
                <tr>
                  <td>Head Circumference(cm) :</td>
                  <td>{item?.headcircumference} </td>
                </tr>
              </tbody>
              <h4>Systemic Examination</h4>
              <tbody>
                <tr>
                  <td>RS :</td>
                  <td>{item?.rs} </td>
                </tr>
                <tr>
                  <td>CVS :</td>
                  <td>{item?.cvs} </td>
                </tr>
                <tr>
                  <td>CNS :</td>
                  <td>{item?.cns} </td>
                </tr>
                <tr>
                  <td>PA :</td>
                  <td>{item?.pa} </td>
                </tr>
              </tbody>
              <h4>Examination</h4>
              <tbody>
                <tr>
                  <td>General Examination :</td>
                  <td>{item?.generalexamination}</td>
                </tr>
                <tr>
                  <td>Local Examination :</td>
                  <td>{item?.localexamination}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Button onClick={createPDF}>Download</Button>
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Lab Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div ref={componentRef1}>
            <div style={{ overflow: "hidden", overflowX: "scroll" }}>
              <div
                className="invoice-rspns"
                style={{
                  boxShadow: " 0px 8px 32px 0px rgba(19, 19, 20, 0.37)",
                  background: "#f5f6fa",
                  backdropFilter: "blur(4px)",
                  padding: "20px",
                }}
              >
                <div className="">
                  <div
                    className="mb-5 "
                    style={{
                      display: "flex",
                    }}
                  >
                    <div>
                      <img
                        style={{ width: "115px", height: "115px" }}
                        className="logo me-2 "
                        src="/img/logo.png"
                        alt="Logo"
                      />{" "}
                    </div>
                    <div className="text-center" style={{ marginLeft: "30px" }}>
                      <span
                        className="fw-bold fs-4"
                        style={{ color: "rgb(32 139 140)" }}
                      >
                        JANANI CLINICAL LABORATORY
                      </span>
                      <br />
                      <div>
                        <b>
                          Upstair Canara bank , Near BDA Cross, KK Colony,
                          Jalanagar Main Road, Vijayapur--586109
                        </b>
                        <div>
                          Phone:- 08352-277077 ,9606831158 , Email:-
                          jananihospital2018@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="row"
                  style={{
                    borderBottom: "2px solid",
                    padding: "0px",
                    display: "flex",
                    //   justifyContent: "space-between",
                  }}
                >
                  <div className="col-sm-6">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <b>Patient ID</b>{" "}
                          </td>
                          <td>{item.PatientId}</td>
                        </tr>

                        <tr>
                          <td>
                            <b>Patient Name</b>{" "}
                          </td>
                          <td>
                            {item?.Firstname} {item?.Lastname}
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Patient Age</b>{" "}
                          </td>
                          <td>
                            {moment().diff(moment(item?.DOB), "years")} years
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <b>Gender</b>
                          </td>
                          <td>{item?.Gender}</td>
                        </tr>

                        <tr>
                          <td>
                            <b>Email</b>
                          </td>
                          <td> {item?.Email}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <div className="col-sm-6">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <b>Phone</b>
                          </td>
                          <td>{item?.PhoneNumber}</td>
                        </tr>

                        <tr>
                          <td>
                            <b>Referred By</b>
                          </td>
                          <td>{Item2Details?.labid?.hospitallabRefferedBy}</td>
                        </tr>

                        <tr>
                          <td>
                            <b>Register Date</b>
                          </td>
                          <td>
                            {moment(item?.testDate).format("DD/MM/YYYY")}
                            years
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <b>Sample </b>
                          </td>
                          <td> {labreportObj?.sampleName}</td>
                        </tr>

                        <tr>
                          <td>
                            <b>Collected On</b>{" "}
                          </td>
                          <td>
                            {`${new Date(
                              labreportObj?.sampleCollectionDateTime
                            ).getDate()} - ${
                              new Date(
                                labreportObj?.sampleCollectionDateTime
                              ).getMonth() + 1
                            } - ${new Date(
                              labreportObj?.sampleCollectionDateTime
                            ).getFullYear()}`}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>

                <div style={{ marginTop: "20px", marginBottom: "10px" }}>
                  {" "}
                  <h3>{labreportObj?.testName}</h3>
                </div>
                <div className="row mt-2">
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>Test Name</th>
                        <th>Result</th>
                        <th>Unit</th>
                        <th>General Reference Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {labreportObj?.subTest?.map((itemdata) => {
                        return (
                          <tr>
                            <td>{itemdata?.subtestName}</td>
                            <td>
                              <b>{itemdata?.subtestpatientReportVal}</b>
                            </td>
                            <td>{itemdata?.subtestunit}</td>
                            <td>{itemdata?.subtestgeneralRefVal}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>

                <div>
                  <p style={{ textAlign: "center" }}>
                    ---------The end of Report---------
                  </p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleprint1}>
            Print
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PatientCaseStudy;
