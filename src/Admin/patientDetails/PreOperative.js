import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";

const PreOperative = ({CHECKLIST , patientdetail,cause}) => {
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

  const [Doctor, setDoctor] = useState([])
  useEffect(() => {
    if(CHECKLIST){
      const selecteddoc = patientdetail?.assigndocts?.filter((ele)=>ele?.doctorsId?._id ===  CHECKLIST?.[0]?.doctorId)
      setDoctor(selecteddoc)
    }
  
  }, [CHECKLIST,patientdetail?.assigndocts])

  const pdfdownload = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("preoperativechecklist.pdf");
  };

  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "preoperativechecklist.pdf",
  });
  return (
    <>
      <div className="mt-2 d-dlex text-end gap-2">
        {/* <Button
          style={{
            padding: "6px",
            border: "none",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
            marginRight: "20px",
          }}
          onClick={()=>handleprint()}
        >
          Print <FiDownload />
        </Button> */}
      </div>
      {CHECKLIST?.map((item)=>{
        return(
          <>
             <hr
        style={{ color: "black", height: "3px", width: "100%", backgroundColor: "black", border: "none" }}
        />
             <div className="text-center mt-1">
        {" "}
        <h6
          className="fw-bold mt-2"
          style={{ color: "#20958C", fontSize: "30px" }}
        >
          PRE-OPERATIVE CHECK LIST
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
              style={{
                color: "#20958C",
                fontSize: "30px",
              }}
            >
              PRE-OPERATIVE CHECK LIST
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
                border: "1px  solid #20958C",
                borderCollapse: "collapse",
                width: "100%",
                margin: "auto",
              }}
            >
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th
                    colSpan={5}
                    style={{ width: "100%", border: "1px  solid #20958C" }}
                  >
                    PRE-OPERATIVE CHECK LIST
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Name: {`${patientdetail?.Firstname} ${patientdetail?.Lastname}`}
                  </td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Age:{ageOutput}
                  </td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Sex:{patientdetail?.Gender}
                  </td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    IP ID:{patientdetail?.PatientId}
                  </td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Ward:{
                      cause?.causeBillDetails?.[0]?.BedBillDetails?.map((item)=>{
                        return(
                         <span> {item?.bedName}</span>
                        )
                      })}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={1}
                    style={{ width: "40%", border: "2px  solid #20958C" }}
                  >
                    Dept:{" "}{
                      cause?.causeBillDetails?.[0]?.BedBillDetails?.map((item)=>{
                        return(
                         <span> {item?.wardtype}</span>
                        )
                      })}
                  </td>
                  <td
                    colSpan={4}
                    style={{ width: "60%", border: "2px  solid #20958C" }}
                  >
                    Doctor:{" "}
                    {patientdetail?.assigndocts?.map((item,i)=>{
                      return(
                        <div>{i+1}). <span style={{fontWeight:"bold"}}>Dr. {`${item?.doctorsId?.Firstname} ${item?.doctorsId?.Lastname}`}</span></div>
                      )
                    })}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={1}
                    style={{ width: "40%", border: "2px  solid #20958C" }}
                  >
                    Diagnosis:{" "}{cause?.CauseName}
                  </td>
                  <td
                    colSpan={4}
                    style={{ width: "60%", border: "2px  solid #20958C" }}
                  >
                    Fasting From:{" "}{item?.Fasting}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={1}
                    style={{ width: "40%", border: "2px  solid #20958C" }}
                  >
                    HB:{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "30%", border: "2px  solid #20958C" }}
                  >
                    Wt:{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "30%", border: "2px  solid #20958C" }}
                  >
                    Allergies:{" "} {patientdetail?.patientAllergies}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={5}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Procedure:{" "}{item?.Procedure}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={5}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Date/Time: {moment(item?.DateTime).format("DD-MM-YYYY / HH:MM")}
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                margin: "auto",
                marginBottom: "20px",
              }}
            >
              <tbody>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Sl.No.{" "}
                  </th>
                  <th style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Item{" "}
                  </th>
                  <th style={{ width: "15%", border: "2px  solid #20958C" }}>
                    YES{" "}
                  </th>
                  <th style={{ width: "15%", border: "2px  solid #20958C" }}>
                    No{" "}
                  </th>
                  <th style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Remarks
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    1{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Consent Signed{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                    {item?.consentSigned === "YES" ?
                     (
                      <p>{item?.consentSigned}</p>
                      ):("")}
                    
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                  {item?.consentSigned === "NO" ?
                     (
                      <p>{item?.consentSigned}</p>
                      ):("")}
                    
                  </td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  >
                     {item?.consentRemark}
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    2{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Pre Medication Given{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                    {item?.PreMedication === "YES" ?
                     (
                      <p>{item?.PreMedication}</p>
                      ):("")}
                   </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                     {item?.PreMedication === "NO" ?
                     (
                      <p>{item?.PreMedication}</p>
                      ):("")}
                  </td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  >{item?.PreMedicationRemark}</td>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    3{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Antibiotics Adminstered{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                     {item?.Antibiotics === "YES" ?
                     (
                      <p>{item?.Antibiotics}</p>
                      ):("")}
                    </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >  {item?.Antibiotics === "NO" ?
                    (
                     <p>{item?.Antibiotics}</p>
                     ):("")}</td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  >{item?.AntibioticsRemarks}</td>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    4{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Blood Products Available{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                     {item?.BloodProductAvl === "YES" ?
                     (
                      <p>{item?.BloodProductAvl}</p>
                      ):("")}
                    </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  > 
                   {item?.BloodProductAvl === "NO" ?
                     (
                      <p>{item?.BloodProductAvl}</p>
                      ):("")}
                  </td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  > {item?.BloodProductAvlRemark}</td>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    5{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Lab Results Present{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                     {item?.LabResult === "YES" ?
                     (
                      <p>{item?.LabResult}</p>
                      ):("")}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >  {item?.LabResult === "NO" ?
                    (
                     <p>{item?.LabResult}</p>
                     ):("")}</td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  >{item?.LabResultRemark}</td>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    6{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Radiology Films/ CD Present{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                     {item?.Radiology === "YES" ?
                     (
                      <p>{item?.Radiology}</p>
                      ):("")}
                    </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                    {item?.Radiology === "NO" ?
                     (
                      <p>{item?.Radiology}</p>
                      ):("")}
                  </td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  > {item?.RadiologyRemark}</td>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    7{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Saving / Skin Preparation Done{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                    {item?.SavingSkin === "YES" ?
                     (
                      <p>{item?.SavingSkin}</p>
                      ):("")}
                   </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >  {item?.SavingSkin === "NO" ?
                    (
                     <p>{item?.SavingSkin}</p>
                     ):("")}</td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  >{item?.SavingSkinRemark}</td>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    8{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Bath / Oral Hygeine Done{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                     {item?.BathOral === "YES" ?
                     (
                      <p>{item?.BathOral}</p>
                      ):("")}
                   </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  > {item?.BathOral === "NO" ?
                    (
                     <p>{item?.BathOral}</p>
                     ):("")}</td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  >{item?.BathOralRemark}</td>
                </tr>

                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    9{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Patient Voided{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                     {item?.PatientVoided === "YES" ?
                     (
                      <p>{item?.PatientVoided}</p>
                      ):("")}
                    </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >{item?.PatientVoided === "NO" ?
                    (
                     <p>{item?.PatientVoided}</p>
                     ):("")}</td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  >{item?.PatientVoidedRemark}</td>
                </tr>

                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    11{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Theatre Gown Worn{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  > 
                  {item?.TheatreGown === "YES" ?
                     (
                      <p>{item?.TheatreGown}</p>
                      ):("")}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  > {item?.TheatreGown === "NO" ?
                    (
                     <p>{item?.TheatreGown}</p>
                     ):("")}</td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  >{item?.TheatreGownRemark}</td>
                </tr>

                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    12{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    RT Inserted{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >  
                  {item?.RTInserted === "YES" ?
                     (
                      <p>{item?.RTInserted}</p>
                      ):("")}
                 </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  > {item?.RTInserted === "NO" ?
                    (
                     <p>{item?.RTInserted}</p>
                     ):("")}</td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  >{item?.RTInsertedRemark}</td>
                </tr>

                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    13{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Pregnancy Test{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >  
                   {item?.PregnancyTest === "YES" ?
                     (
                      <p>{item?.PregnancyTest}</p>
                      ):("")}
                </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  > {item?.PregnancyTest === "NO" ?
                    (
                     <p>{item?.PregnancyTest}</p>
                     ):("")}</td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  >{item?.PregnancyTestRemark}</td>
                </tr>

                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    14{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    HIV, HBsAg, HCV Tests{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  > 
                  {item?.HIVTest === "YES" ?
                     (
                      <p>{item?.HIVTest}</p>
                      ):("")}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  > {item?.HIVTest === "NO" ?
                    (
                     <p>{item?.HIVTest}</p>
                     ):("")}</td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  >{item?.HIVTestRemark}</td>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                  </th>
                  <th style={{ width: "40%", border: "2px  solid #20958C" }}>
                    REMOVABLE ITEMS{" "}
                  </th>
                  <th style={{ width: "15%", border: "2px  solid #20958C" }}>
                    PRESENT
                  </th>
                  <th style={{ width: "15%", border: "2px  solid #20958C" }}>
                    REMOVED
                  </th>
                  <th style={{ width: "20%", border: "2px  solid #20958C" }}>
                    REMARKS
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    1{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Dentures: Upper / Lower / Partial (Specify){" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                     {item?.Dentures === "YES" ?
                     (
                      <p>{item?.Dentures}</p>
                      ):("")}
                     </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                    {item?.Dentures === "NO" ?
                     (
                      <p>{item?.Dentures}</p>
                      ):("")}
                  </td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  >{item?.DenturesRemark}</td>
                </tr>

                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    2{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Contact Lenses{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                    {item?.ContactLense === "YES" ?
                     (
                      <p>{item?.ContactLense}</p>
                      ):("")}
                    </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                     {item?.ContactLense === "NO" ?
                     (
                      <p>{item?.ContactLense}</p>
                      ):("")}
                  </td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  > {item?.ContactLenseRemark}</td>
                </tr>

                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    3{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Nail Polish{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >  {item?.NailPolish === "YES" ?
                    (
                     <p>{item?.NailPolish}</p>
                     ):("")} </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                    {item?.NailPolish === "NO" ?
                    (
                     <p>{item?.NailPolish}</p>
                     ):("")} 
                  </td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  >{item?.NailPolishRemark}</td>
                </tr>

                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    4{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Jewellery / Others{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                    {item?.Jewellery === "YES" ?
                    (
                     <p>{item?.Jewellery}</p>
                     ):("")} 
                   </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >{item?.Jewellery === "NO" ?
                    (
                     <p>{item?.Jewellery}</p>
                     ):("")} </td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  >{item?.JewelleryRemark}</td>
                </tr>

                <tr>
                  <td
                    colSpan={5}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Any Message to Theatre Staff:{" "} {item?.MessageTreat}
                  </td>
                </tr>

                <br />

                <tr>
                  <th
                    colSpan={2}
                    style={{
                      width: "50%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    Endorsed By (Ward Staff)
                  </th>
                  <th
                    colSpan={3}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Received By (OT Staff){" "}
                  </th>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{
                      width: "50%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    Name : {item?.WardStaff1}
                  </td>
                  <td
                    colSpan={3}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Signature:   <img
                      alt="sign"
                      src={`http://localhost:8521/PatientREG/${item?.staffsignature}`}
                    /> 
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{
                      width: "50%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    Name :{item?.WardStaff1}
                  </td>
                  <td
                    colSpan={3}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Signature:<img
                      alt="sign"
                      src={`http://localhost:8521/PatientREG/${item?.staff2signature}`}
                    /> 
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
          </>
        )
      })}
   
    </>
  );
};

export default PreOperative;
