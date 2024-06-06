import React, { useRef } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

function PatientCaseStudy() {
  const location = useLocation();
  const { item } = location.state || {}; // Destructure the item from state
  console.log("item", item);

  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "casestudy",
  });
  return (
    <div>
      <div style={{ backgroundColor: "#dae1f3" }}>
        <h2>Patient CaseStudy</h2>
      </div>
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
            <div className="col-md-3 text-start mt-4">
              {/* <img
                src={`http://localhost:8521/PatientREG/${patientdetail?.profilepic}`}
                alt=""
                style={{
                  height: "118px",
                  width: "157px",
                  borderRadius: "100%",
                }}
              /> */}
            </div>
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
      <div ref={componentRef} className="container" style={{padding:"35px"}}>
        <div className="row mt-3">
          <div>
            <h3>Prescription :</h3>
          </div>
          <Table bordered>
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Type</th>
                <th>Generic Name</th>
                <th>Dosage</th>
                <th>Frequency</th>
                <th>Duration</th>
                <th>Instruction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Suspension</td>
                <td>Di Cloride CHO_I</td>
                <td>3 times</td>
                <td>1.3.4.1</td>
                <td>2</td>
                <td>After Food</td>
              </tr>
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
              <tr>
                <td>1</td>
                <td>X-ray</td>
                <td>
                  X-rays are a form of electromagnetic radiation, similar to
                  visible light.
                </td>
                <td></td>
                <td>
                  We can define X-Rays or X-radiation as a form of
                  electromagnetic radiation. They are powerful waves of
                  electromagnetic energy. Most of them have a wavelength ranging
                  from 0.01 to 10 nanometres, corresponding to frequencies in
                  the range 3 × 1019 Hz to 3×1016 Hz and energies in the range
                  100 eV to 100 keV.
                </td>
              </tr>
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
                <td>172 cm</td>                
              </tr>
              <tr>
                <td>Weight(kg) :</td>
                <td>56 kg</td>                
              </tr>
              <tr>
                <td>BMI :</td>
                <td></td>                
              </tr>
              <tr>
                <td>Temperature :</td>
                <td>98.0 F</td>                
              </tr>
              <tr>
                <td>Pulse Rate :</td>
                <td>137 </td>                
              </tr>
              <tr>
                <td>Blood Pressure :</td>
                <td>562</td>                
              </tr>
              <tr>
                <td>Spo2(% at RA) :</td>
                <td>56 </td>                
              </tr>
              <tr>
                <td>Sugar(mg/dl) :</td>
                <td>56 </td>                
              </tr>
              <tr>
                <td>Head Circumference(cm) :</td>
                <td>56 </td>                
              </tr>
            </tbody>
            <h4>Systemic Examination</h4>
            <tbody>
            <tr>
                <td>RS :</td>
                <td>56 </td>                
              </tr>
            <tr>
                <td>CVS :</td>
                <td>56 </td>                
              </tr>
            <tr>
                <td>CNS :</td>
                <td>56 </td>                
              </tr>
            <tr>
                <td>PA :</td>
                <td>56 </td>                
              </tr>
            </tbody>
            <h4>Examination</h4>
            <tbody>
                <tr>
                    <td>General Examination :</td>
                    <td>326</td>
                </tr>
                <tr>
                    <td>Local Examination :</td>
                    <td>326</td>
                </tr>
            </tbody>
          </Table>

        </div>
        <div style={{display:"d-flex",justifyContent:"center"}}>
            <Button onClick={handleprint}>Print</Button>
        </div>
      </div>
    </div>
  );
}

export default PatientCaseStudy;
