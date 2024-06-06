import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function PatientCaseStudy() {
  const location = useLocation();
  const { item } = location.state || {}; // Destructure the item from state
  console.log("item", item);

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
                  <th>Medicine Type</th>
                  <th>Generic Name</th>
                  <th>Dosage</th>
                  <th>Duration</th>
                  <th>Instruction</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {item?.medicineInfo?.map((item1, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item1?.medicineType}</td>
                      <td>{item1?.genericName}</td>
                      <td>
                        <p>Morning: {item1?.morningDose}</p>
                        <p>Afternoon: {item1?.noonDose}</p>
                        <p>Night: {item1?.nightDose}</p>
                      </td>
                      <td>{item1?.duration}</td>
                      <td>{item1?.medicineTakingTime}</td>
                      <td>{item1?.result}</td>
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
                  <th>Description</th>
                  <th>Image(Investigation)</th>
                  <th>Remark</th>
                </tr>
              </thead>
              <tbody>
                {item?.investigationList?.map((item2, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item2?.investigationName}</td>
                      <td>{item2?.investigationDescription}</td>
                      <td>
                        <a
                          href={`http://localhost:8521/Patient/${item2.investigationIncludeInReport}`}
                          target="blank_"
                        >
                          View Documents
                        </a>
                      </td>
                      <td>{item2?.notes}</td>
                    </tr>
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
      <div className="mb-3" style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={createPDF}>Download</Button>
      </div>
    </div>
  );
}

export default PatientCaseStudy;
