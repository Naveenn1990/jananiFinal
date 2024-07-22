import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import moment from "moment";
import React, { useRef } from "react";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";

const NursingAssessment = ({NursingAssessments,patientdetail}) => {
  const pdfdownload = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("AnesthesiaConsentForm.pdf");
  };

  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "AnesthesiaConsentForm.pdf",
  });
  return (
    <>

      {NursingAssessments?.map((item)=>{
        return(<>
        <hr
        style={{ color: "black", height: "3px", width: "100%", backgroundColor: "black", border: "none" }}
        />
        <div className="text-center mt-1">
          {" "}
          <h6
            className="fw-bold mt-2"
            style={{ color: "#20958C", fontSize: "30px" }}
          >
            NURSING ASSESSMENT ON ADMISSION
          </h6>
        </div>
          <div
          ref={componentRef}
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
                NURSING ASSESSMENT ON ADMISSION
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
                  marginBottom: "10px",
                }}
              >
                <tbody>
                  <tr>
                    <td colSpan={3} style={{ border: "2px  solid #20958C" }}>
                      Patient Name:{`${patientdetail?.Firstname} ${patientdetail?.Lastname}`}
                    </td>
  
                    <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                      UHID No :{patientdetail?.PatientId}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={{ border: "2px  solid #20958C" }}>
                      Date & Time of Nursing Initial Assessment:{moment(patientdetail?.DTNursingInitialAssesment).format("DD-MM-YYYY HH:MM")}
                    </td>
                    <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                      General Consent Signed: {item?.ConsentSign}
                    </td>
                  </tr>
  
                  <tr style={{ textAlign: "center" }}>
                    <th style={{ width: "20%", border: "2px  solid #20958C" }}>
                      Vital Signs
                    </th>
                    <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                      Temp : {item?.VSTemp}
                    </td>
                    <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                      Pulse {item?.VSPulse}/Min
                    </td>
                    <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                      Resp: {item?.Resp}/Min
                    </td>
                    <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                      BP:{item?.BP}
                    </td>
                  </tr>
  
                  <tr style={{ textAlign: "center" }}>
                    <th style={{ width: "20%", border: "2px  solid #20958C" }}>
                      Height : {item?.Height}
                    </th>
                    <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                      Weight: {item?.Weight}
                    </td>
                    <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                      Blood Group:{item?.BloodGroup}
                    </td>
                    <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                      Spo2(if required) : {item?.Spo2}
                    </td>
                    <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                      GRBS(if required) : {item?.GRBS}
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <th style={{ border: "2px  solid #20958C" }}>
                      Complaints during admission and it's duration
                    </th>
                    <td colSpan={4} style={{ border: "2px  solid #20958C" }}>
                    {item?.Complaints}
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <th style={{ border: "2px  solid #20958C" }}>Neurological</th>
                    <td colSpan={4} style={{ border: "2px  solid #20958C" }}>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{ width: "33%", border: ".5px  solid #20958C" }}
                        >
                          Oriented : {item?.Oriented}
                        </td>
                        <td
                          style={{ width: "33%", border: ".5px  solid #20958C" }}
                        >
                          Speech: {item?.Speech1}
                        </td>
                        <td
                          style={{ width: "33%", border: ".5px  solid #20958C" }}
                        >
                          Speech: {item?.Speech2}
                        </td>
                      </tr>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{ width: "33%", border: ".5px  solid #20958C" }}
                        >
                          Level of Consciousness : ({item?.Consciousness})
                        </td>
                        <td
                          style={{ width: "33%", border: ".5px  solid #20958C" }}
                        >
                          Visual Impairment {item?.Impairment}
                        </td>
                        <td
                          style={{ width: "33%", border: ".5px  solid #20958C" }}
                        >
                          Extremity strength : {item?.Extremity}
                        </td>
                      </tr>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{ width: "33%", border: ".5px  solid #20958C" }}
                        >
                          Pupils : {item?.Pupils}
                        </td>
                        <td
                          style={{ width: "33%", border: ".5px  solid #20958C" }}
                        >
                          Hearing Impairment : {item?.HearingImpairment}
                        </td>
                        <td
                          style={{ width: "33%", border: ".5px  solid #20958C" }}
                        >
                          Pain : {item?.Pain} <br /> Location : {item?.Location1}
                        </td>
                      </tr>
                    </td>
                  </tr>
  
                  <tr style={{ textAlign: "center" }}>
                    <th style={{ border: "2px  solid #20958C" }}>Pain Scale</th>
                    <th colSpan={4} style={{ border: "2px  solid #20958C" }}>{item?.PainScale}</th>
                  </tr>
  
                  <tr
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <th style={{ border: "2px  solid #20958C" }}>Respiratory</th>
                    <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                      <tr style={{ textAlign: "center" }}>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                          Airway : {item?.Airway}
                        </td>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                          {item?.Airway}
                        </td>
                      </tr>
                      <tr style={{ textAlign: "center" }}>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                          Dyspnea :{" "}
                        </td>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                            {item?.Dyspnea}
                        </td>
                      </tr>
                      <tr style={{ textAlign: "center" }}>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                          Wheezing:
                        </td>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                            {item?.Wheezing}
                        </td>
                      </tr>
                    </td>
                    <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                      <tr style={{ textAlign: "center" }}>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                          Hemoptysis :
                        </td>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                            {item?.Hemoptysis}
                        </td>
                      </tr>
                      <tr style={{ textAlign: "center" }}>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                          Cough :{" "}
                        </td>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                         {item?.Cough}
                        </td>
                      </tr>
                      <tr style={{ textAlign: "center" }}>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                          Sputum :
                        </td>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                           {item?.Sputum}
                        </td>
                      </tr>
                    </td>
                  </tr>
  
                  <tr style={{ textAlign: "center" }}>
                    <th style={{ border: "2px  solid #20958C" }}>
                      Cardiovascular
                    </th>
                    <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                          Edema :
                        </td>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                          {item?.Edema}
                        </td>
                      </tr>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                          Loaction of edema :{" "}
                        </td>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                           {item?.Loactionofedema}
                        </td>
                      </tr>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                          Skin perfusion :
                        </td>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                          {item?.Skinperfusion}
                        </td>
                      </tr>
                    </td>
                    <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                          Capillary refill :
                        </td>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                            {item?.Capillaryrefill}
                        </td>
                      </tr>
                      <tr style={{ textAlign: "center" }}>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                          Pacemaker :{" "}
                        </td>
                        <td
                          style={{ width: "50%", border: ".5px  solid #20958C" }}
                        >
                          {item?.Pacemaker}
                        </td>
                      </tr>
                    </td>
                  </tr>
  
                  <tr style={{ textAlign: "center" }}>
                    <th style={{ border: "2px  solid #20958C" }}>
                      Skin & Mucous Membrane
                    </th>
  
                    <td colSpan={4} style={{ border: "2px  solid #20958C" }}>
                      <div>
                        <tr style={{ textAlign: "left" }}>
                          <td
                            style={{
                              width: "50%",
                              border: ".5px  solid #20958C",
                            }}
                          >
                            Color :  {item?.SkinColor}
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: ".5px  solid #20958C",
                            }}
                          >
                            Turgor : {item?.Turgor}
                          </td>
                        </tr>
                        <tr style={{ textAlign: "left" }}>
                          <td
                            style={{
                              width: "50%",
                              border: ".5px  solid #20958C",
                            }}
                          >
                            Temp : {item?.Temperature}
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: ".5px  solid #20958C",
                            }}
                          >
                            Mucous membrane: {item?.Mucousmembrane}
                          </td>
                        </tr>
                        <tr style={{ textAlign: "left" }}>
                          <td
                            style={{
                              width: "50%",
                              border: ".5px  solid #20958C",
                            }}
                          >
                            Moisture : {item?.Moisture}
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: ".5px  solid #20958C",
                            }}
                          >
                            Condition : {item?.Condition}
                          </td>
                        </tr>
                      </div>
                      <div>
                        <tr style={{ textAlign: "left" }}>
                          <td style={{ border: "0.5px  solid #20958C" }}>
                            Pressure Sore : <br /> {item?.PressureSore}
                          </td>
                          <td style={{ border: "0.5px  solid #20958C" }}>
                          {item?.Stage === "Stage 1" ? (<>
                              Stage 1 <br /> (Red Coloration)
                            </> 
                            ):("")}   
                          {item?.Stage === "Stage II" ? (<>
                            Stage II <br /> (Skin Break only)
                            </> 
                            ):("")}                        
                          {item?.Stage === "Stage III" ? (<>
                            Stage III <br /> (Fat exposed)
                            </> 
                            ):("")}
                          {item?.Stage === "Stage IV" ? (<>
                            Stage IV <br /> (Muscle/ Bone exposed)
                            </> 
                            ):("")}
                           </td>
                        </tr>
                      </div>
                    </td>
                  </tr>
  
                  <tr style={{ textAlign: "center" }}>
                    <th style={{ border: "2px  solid #20958C" }}>
                      Gastrointestinal
                    </th>
                    <td colSpan={4} style={{ border: "2px  solid #20958C" }}>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{ width: "33%", border: "0.5px  solid #20958C" }}
                        >
                          Loss of Appetite: {item?.LossofAppetite}
                        </td>
                        <td
                          style={{ width: "33%", border: "0.5px  solid #20958C" }}
                        >
                          Abdomen : {item?.Abdomen}
                        </td>
                        <td
                          rowSpan={3}
                          style={{ width: "33%", border: "0.5px  solid #20958C" }}
                        >
                          Swallowing diffulty : {item?.Swallowingdiffulty}
                        </td>
                      </tr>
                    
                     
                    </td>
                  </tr>
  
                  <tr style={{ textAlign: "center" }}>
                    <th style={{ border: "2px  solid #20958C" }}>
                      Genitourinary
                    </th>
                    <td colSpan={4} style={{ border: "2px  solid #20958C" }}>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{ width: "50%", border: "0.5px  solid #20958C" }}
                        >
                          Dysuria: {item?.Dysuria}
                        </td>
                        <td
                          style={{ width: "50%", border: "0.5px  solid #20958C" }}
                        >
                          Haemeturia : {item?.Haemeturia}
                        </td>
                      </tr>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{ width: "50%", border: "0.5px  solid #20958C" }}
                        >
                          Frequency : {item?.Frequency}
                        </td>
                        <td
                          style={{ width: "50%", border: "0.5px  solid #20958C" }}
                        >
                          Foley's Catheter : {item?.FoleyCatheter}
                        </td>
                      </tr>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{ width: "50%", border: "0.5px  solid #20958C" }}
                        >
                          Incontinence : {item?.Incontinence}
                        </td>
                        <td
                          style={{ width: "50%", border: "0.5px  solid #20958C" }}
                        >
                          Inserted on : {item?.Insertedon}
                        </td>
                      </tr>
                    </td>
                  </tr>
  
                  <tr style={{ textAlign: "center" }}>
                    <th style={{ border: "2px  solid #20958C" }}>Obstetric</th>
                    <td style={{ border: "2px  solid #20958C" }}>G P L A D</td>
                    <td colSpan={3} style={{ border: "2px  solid #20958C" }}>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{ width: "50%", border: "0.5px  solid #20958C" }}
                        >
                          LMP : {item?.LMP}
                        </td>
                        <td
                          style={{ width: "50%", border: "0.5px  solid #20958C" }}
                        >
                          EDD:{" "}{item?.EDD}
                        </td>
                      </tr>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{ width: "50%", border: "0.5px  solid #20958C" }}
                        >
                          Dating Scan(11 to 14 Weeks) : {item?.DatingScan}
                        </td>
                        <td
                          style={{ width: "50%", border: "0.5px  solid #20958C" }}
                        >
                          POG :{" "}{item?.POG}
                        </td>
                      </tr>
                    </td>
                  </tr>
  
                  <tr>
                    <th style={{ border: "2px  solid #20958C" }}>
                      Any Drug Allergy
                    </th>
                    <td style={{ border: "2px  solid #20958C" }} colSpan={4}></td>
                  </tr>
  
                  <tr>
                    <th colSpan={3}>Name & Signature of Nurse: 
                    <img
                      alt="sign"
                      src={`http://localhost:8521/PatientREG/${item?.NurseSignature}`}
                    />  

                    </th>
                    <th>Date : {item?.FormfillDate} </th>
                    <th>Time :  {item?.formfillTime}</th>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        </>)
      })}
    
    </>
  );
};

export default NursingAssessment;
