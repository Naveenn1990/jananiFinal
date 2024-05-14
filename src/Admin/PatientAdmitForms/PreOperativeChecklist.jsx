import { Checkbox } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const PreOperativeChecklist = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { patientdetails, cause } = location.state || {};

  const dobString = patientdetails?.DOB;
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

  const [DateTime, setDateTime] = useState("");
  const [consentSigned1, setConsentSigned1] = useState(false);
  const [consentSigned2, setConsentSigned2] = useState(false);
  const [consentRemark, setConsentRemark] = useState("");
  const [PreMedication1, setPreMedication1] = useState(false);
  const [PreMedication2, setPreMedication2] = useState(false);
  const [PreMedicationRemark, setPreMedicationRemark] = useState("");
  const [Antibiotics1, setAntibiotics1] = useState(false);
  const [Antibiotics2, setAntibiotics2] = useState(false);
  const [AntibioticsRemarks, setAntibioticsRemarks] = useState("");
  const [BloodProductAvl1, setBloodProductAvl1] = useState(false)
  const [BloodProductAvl2, setBloodProductAvl2] = useState(false)
  const [BloodProductAvlRemark, setBloodProductAvlRemark] = useState("");
  const [LabResult1, setLabResult1] = useState(false)
  const [LabResult2, setLabResult2] = useState(false)
  const [LabResultRemark, setLabResultRemark] = useState("")
  const [Radiology1, setRadiology1] = useState(false)
  const [Radiology2, setRadiology2] = useState(false)
  const [RadiologyRemark, setRadiologyRemark] = useState("")
  const [SavingSkin1, setSavingSkin1] = useState(false)
  const [SavingSkin2, setSavingSkin2] = useState(false)
  const [SavingSkinRemark, setSavingSkinRemark] = useState("")
  const [BathOral1, setBathOral1] = useState(false)
  const [BathOral2, setBathOral2] = useState(false)
  const [BathOralRemark, setBathOralRemark] = useState("");
  const [PatientVoided1, setPatientVoided1] = useState(false)
  const [PatientVoided2, setPatientVoided2] = useState(false)
  const [PatientVoidedRemark, setPatientVoidedRemark] = useState("")
  const [TheatreGown1, setTheatreGown1] = useState(false)
  const [TheatreGown2, setTheatreGown2] = useState(false)
  const [TheatreGownRemark, setTheatreGownRemark] = useState("")
  const [RTInserted1, setRTInserted1] = useState(false)
  const [RTInserted2, setRTInserted2] = useState(false)
  const [RTInsertedRemark, setRTInsertedRemark] = useState("")
  const [PregnancyTest1, setPregnancyTest1] = useState(false)
  const [PregnancyTest2, setPregnancyTest2] = useState(false)
  const [PregnancyTestRemark, setPregnancyTestRemark] = useState("")
  const [HIVTest1, setHIVTest1] = useState(false)
  const [HIVTest2, setHIVTest2] = useState(false)
  const [HIVTestRemark, setHIVTestRemark] = useState("")
  const [Dentures1, setDentures1] = useState(false)
  const [Dentures2, setDentures2] = useState(false)
  const [DenturesRemark, setDenturesRemark] = useState("")
  const [ContactLense1, setContactLense1] = useState(false)
  const [ContactLense2, setContactLense2] = useState(false)
  const [ContactLenseRemark, setContactLenseRemark] = useState("")
  const [NailPolish1, setNailPolish1] = useState(false)
  const [NailPolish2, setNailPolish2] = useState(false)
  const [NailPolishRemark, setNailPolishRemark] = useState("")
  const [Jewellery1, setJewellery1] = useState(false)
  const [Jewellery2, setJewellery2] = useState(false)
  const [JewelleryRemark, setJewelleryRemark] = useState("")
  const [MessageTreat, setMessageTreat] = useState("")
  const [WardStaff1, setWardStaff1] = useState("")
  const [WardStaff2, setWardStaff2] = useState("")

  
  const submitpreOperativelist = async () => {
    try {
      const config = {
        url: "/addpreoperativelist",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "content-type": "application/json" },
        data: {
          patientId: patientdetails?._id,
          causeId: cause?._id,
          DateTime: DateTime,
          consentSigned1:consentSigned1,
          consentSigned2:consentSigned2,
          consentRemark:consentRemark,
          PreMedication1:PreMedication1,
          PreMedication2:PreMedication2,
          PreMedicationRemark:PreMedicationRemark,
          Antibiotics1:Antibiotics1,
          Antibiotics2:Antibiotics2,
          AntibioticsRemarks:AntibioticsRemarks,
          BloodProductAvl1:BloodProductAvl1,
          BloodProductAvl2:BloodProductAvl2,
          BloodProductAvlRemark:BloodProductAvlRemark,
          LabResult1:LabResult1,
          LabResult2:LabResult2,
          LabResultRemark:LabResultRemark,
          Radiology1:Radiology1,
          Radiology2:Radiology2,
          RadiologyRemark:RadiologyRemark,
          SavingSkin1:SavingSkin1,
          SavingSkin2:SavingSkin2,
          SavingSkinRemark:SavingSkinRemark,
          BathOral1:BathOral1,
          BathOral2:BathOral2,
          BathOralRemark:BathOralRemark,
          PatientVoided1:PatientVoided1,
          PatientVoided2:PatientVoided2,
          PatientVoidedRemark:PatientVoidedRemark,
          TheatreGown1:TheatreGown1,
          TheatreGown2:TheatreGown2,
          TheatreGownRemark:TheatreGownRemark,
          RTInserted1:RTInserted1,
          RTInserted2:RTInserted2,
          RTInsertedRemark:RTInsertedRemark,
          PregnancyTest1:PregnancyTest1,
          PregnancyTest2:PregnancyTest2,
          PregnancyTestRemark:PregnancyTestRemark,
          HIVTest1:HIVTest1,
          HIVTest2:HIVTest2,
          HIVTestRemark:HIVTestRemark,
          Dentures1:Dentures1,
          Dentures2:Dentures2,
          DenturesRemark:DenturesRemark,
          ContactLense1:ContactLense1,
          ContactLense2:ContactLense2,
          ContactLenseRemark:ContactLenseRemark,
          NailPolish1:NailPolish1,
          NailPolish2:NailPolish2,
          NailPolishRemark:NailPolishRemark,
          Jewellery1:Jewellery1,
          Jewellery2:Jewellery2,
          JewelleryRemark:JewelleryRemark,
          MessageTreat:MessageTreat,
          WardStaff1:WardStaff1,
          WardStaff2:WardStaff2,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  return (
    <div>
      <div>
        <button
          className="mt-2"
          style={{
            padding: "6px",
            border: "1px solid white",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
          }}
          onClick={() => navigate("/admin/patientform")}
        >
          Back
        </button>
      </div>

      <div className="text-center mt-1">
        <h6
          className="fw-bold mt-2"
          style={{ color: "#20958C", fontSize: "30px" }}
        >
          PRE OPERTAIVE CHECKLIST
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
            // width: "1073px",
            margin: "auto",
            borderRadius: "20px",
            // height: "1700px",
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
          <div
            className="text-center"
            style={{
              borderBottom: "1px solid #20958C",
              width: "100%",
              textAlign: "center",
            }}
          ></div>
          <div className="text-center mt-1">
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
                    Name:
                    {`${patientdetails?.Firstname} ${patientdetails?.Lastname} `}
                  </td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Age:{ageOutput}
                  </td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Sex:{patientdetails?.Gender}
                  </td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    IP ID:{patientdetails?.PatientId}
                  </td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Ward: OPD
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={1}
                    style={{ width: "40%", border: "2px  solid #20958C" }}
                  >
                    Dept:
                  </td>
                  <td
                    colSpan={4}
                    style={{ width: "60%", border: "2px  solid #20958C" }}
                  >
                    Doctor:
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={1}
                    style={{ width: "40%", border: "2px  solid #20958C" }}
                  >
                    HB:
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "30%", border: "2px  solid #20958C" }}
                  >
                    Wt:
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "30%", border: "2px  solid #20958C" }}
                  >
                    Allergies:
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={5}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Procedure:
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={5}
                    style={{ width: "100%" }}
                    className="d-flex align-items-center gap-1"
                  >
                    Date/Time:
                    <input
                      type="datetime-local"
                      className="vi_0"
                      value={DateTime}
                      onChange={(e) => setDateTime(e.target.value)}
                    />
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
                  <th style={{ border: "2px  solid #20958C" }}>Sl.No. </th>
                  <th style={{ border: "2px  solid #20958C" }}>Item </th>
                  <th style={{ border: "2px  solid #20958C" }}>YES </th>
                  <th style={{ border: "2px  solid #20958C" }}>No </th>
                  <th style={{ border: "2px  solid #20958C" }}>Remarks</th>
                </tr>
                <tr>
                  <th
                    style={{
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    1
                  </th>
                  <td style={{ border: "2px  solid #20958C" }}>
                    Consent Signed
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox
                      onChange={(e) => {
                        setConsentSigned1(e.target.checked);
                        setConsentSigned2(false);
                      }}
                      checked={consentSigned1}
                      color="primary"
                      name="consent1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox
                      onChange={(e) => {
                        setConsentSigned2(e.target.checked);
                        setConsentSigned1(false);
                      }}
                      checked={consentSigned2}
                      color="primary"
                      name="consent2"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input 
                    type="text" 
                    className="vi_0"
                    value={consentRemark}
                    onChange={(e)=>setConsentRemark(e.target.value)}
                     />
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
                    2
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Pre Medication Given
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                    onChange={(e)=>{
                      setPreMedication1(e.target.checked);
                      setPreMedication2(false)
                    }}
                    checked={PreMedication1}
                    color="primary"
                    name="premedication1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                    onChange={(e)=>{
                      setPreMedication2(e.target.checked)
                      setPreMedication1(false)
                    }}
                    checked={PreMedication2}
                    color="primary"
                    name="premedication2"
                    />
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    <input 
                    type="text" 
                    className="vi_0" 
                    value={PreMedicationRemark}
                    onChange={(e)=>setPreMedicationRemark(e.target.value)}
                    />
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
                    3
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Antibiotics Adminstered
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                    onChange={(e)=>{
                      setAntibiotics1(e.target.checked);
                      setAntibiotics2(false)
                    }}
                    checked={Antibiotics1}
                    color="primary"
                    name="Antibiotics1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                    onChange={(e)=>{
                      setAntibiotics2(e.target.checked);
                      setAntibiotics1(false)
                    }}
                    checked={Antibiotics2}
                    color="primary"
                    name="Antibiotics2"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input 
                    type="text" 
                    className="vi_0"
                    value={AntibioticsRemarks}
                    onChange={(e)=>setAntibioticsRemarks(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    4
                  </th>
                  <td style={{ border: "2px  solid #20958C" }}>
                    Blood Products Available
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                    onChange={(e)=>{
                      setBloodProductAvl1(e.target.checked);
                      setBloodProductAvl2(false)
                    }}
                    checked={BloodProductAvl1}
                    color="primary"
                    name="BloodProductAvl1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                     onChange={(e)=>{
                      setBloodProductAvl2(e.target.checked);
                      setBloodProductAvl1(false)
                    }}
                    checked={BloodProductAvl2}
                    color="primary"
                    name="BloodProductAvl2"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input 
                    type="text" 
                    className="vi_0" 
                    value={BloodProductAvlRemark}
                    onChange={(e)=>setBloodProductAvlRemark(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    5
                  </th>
                  <td style={{ border: "2px  solid #20958C" }}>
                    Lab Results Present
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                     onChange={(e)=>{
                      setLabResult1(e.target.checked);
                      setLabResult2(false)
                    }}
                    checked={LabResult1}
                    color="primary"
                    name="LabResult1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                     onChange={(e)=>{
                      setLabResult2(e.target.checked);
                      setLabResult1(false)
                    }}
                    checked={LabResult2}
                    color="primary"
                    name="LabResult2"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input 
                    type="text" 
                    className="vi_0"
                    value={LabResultRemark}
                    onChange={(e)=>setLabResultRemark(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    6
                  </th>
                  <td style={{ border: "2px  solid #20958C" }}>
                    Radiology Films/ CD Present
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                     onChange={(e)=>{
                      setRadiology1(e.target.checked);
                      setRadiology2(false)
                    }}
                    checked={Radiology1}
                    color="primary"
                    name="Radiology1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                     onChange={(e)=>{
                      setRadiology2(e.target.checked);
                      setRadiology1(false)
                    }}
                    checked={Radiology2}
                    color="primary"
                    name="Radiology2"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input 
                    type="text" 
                    className="vi_0" 
                    value={RadiologyRemark}
                    onChange={(e)=>setRadiologyRemark(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    7
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Saving / Skin Preparation Done
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox
                       onChange={(e)=>{
                        setSavingSkin1(e.target.checked);
                        setSavingSkin2(false)
                      }}
                      checked={SavingSkin1}
                      color="primary"
                      name="SavingSkin1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                       onChange={(e)=>{
                        setSavingSkin2(e.target.checked);
                        setSavingSkin1(false)
                      }}
                      checked={SavingSkin2}
                      color="primary"
                      name="SavingSkin2"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input 
                    type="text" 
                    className="vi_0"
                    value={SavingSkinRemark}
                    onChange={(e)=>setSavingSkinRemark(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    8
                  </th>
                  <td style={{ border: "2px  solid #20958C" }}>
                    Bath / Oral Hygeine Done
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                       onChange={(e)=>{
                        setBathOral1(e.target.checked);
                        setBathOral2(false)
                      }}
                      checked={BathOral1}
                      color="primary"
                      name="BathOral1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                       onChange={(e)=>{
                        setBathOral2(e.target.checked);
                        setBathOral1(false)
                      }}
                      checked={BathOral2}
                      color="primary"
                      name="BathOral2"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <input 
                    type="text" 
                    className="vi_0" 
                    value={BathOralRemark}
                    onChange={(e)=>setBathOralRemark(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <th
                    style={{
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    9
                  </th>
                  <td style={{ border: "2px  solid #20958C" }}>
                    Patient Voided
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                       onChange={(e)=>{
                        setPatientVoided1(e.target.checked);
                        setPatientVoided2(false)
                      }}
                      checked={PatientVoided1}
                      color="primary"
                      name="PatientVoided1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                       onChange={(e)=>{
                        setPatientVoided2(e.target.checked);
                        setPatientVoided1(false)
                      }}
                      checked={PatientVoided2}
                      color="primary"
                      name="PatientVoided2"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input 
                    type="text" 
                    className="vi_0" 
                    value={PatientVoidedRemark}
                    onChange={(e)=>setPatientVoidedRemark(e.target.value)}
                    />
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
                    11
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Theatre Gown Worn
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                      onChange={(e)=>{
                        setTheatreGown1(e.target.checked);
                        setTheatreGown2(false)
                      }}
                      checked={TheatreGown1}
                      color="primary"
                      name="TheatreGown1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    {" "}
                    <Checkbox 
                      onChange={(e)=>{
                        setTheatreGown2(e.target.checked);
                        setTheatreGown1(false)
                      }}
                      checked={TheatreGown2}
                      color="primary"
                      name="TheatreGown2"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input 
                    type="text" 
                    className="vi_0" 
                    value={TheatreGownRemark}
                    onChange={(e)=>setTheatreGownRemark(e.target.value)}
                    />
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
                    12
                  </th>
                  <td style={{ border: "2px  solid #20958C" }}>RT Inserted</td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                    onChange={(e)=>{
                      setRTInserted1(e.target.checked);
                      setRTInserted2(false)
                    }}
                    checked={RTInserted1}
                    color="primary"
                    name="RTInserted1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                     onChange={(e)=>{
                      setRTInserted2(e.target.checked);
                      setRTInserted1(false)
                    }}
                    checked={RTInserted2}
                    color="primary"
                    name="RTInserted2"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input 
                    type="text" 
                    className="vi_0"
                    value={RTInsertedRemark}
                    onChange={(e)=>setRTInsertedRemark(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <th
                    style={{
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    13
                  </th>
                  <td style={{ border: "2px  solid #20958C" }}>
                    Pregnancy Test
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                     onChange={(e)=>{
                      setPregnancyTest1(e.target.checked);
                      setPregnancyTest2(false)
                    }}
                    checked={PregnancyTest1}
                    color="primary"
                    name="PregnancyTest1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox
                     onChange={(e)=>{
                      setPregnancyTest2(e.target.checked);
                      setPregnancyTest1(false)
                    }}
                    checked={PregnancyTest2}
                    color="primary"
                    name="PregnancyTest2"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input 
                    type="text" 
                    className="vi_0" 
                    value={PregnancyTestRemark}
                    onChange={(e)=>setPregnancyTestRemark(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <th
                    style={{
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    14
                  </th>
                  <td style={{ border: "2px  solid #20958C" }}>
                    HIV, HBsAg, HCV Tests
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                     onChange={(e)=>{
                      setHIVTest1(e.target.checked);
                      setHIVTest2(false)
                    }}
                    checked={HIVTest1}
                    color="primary"
                    name="HIVTest1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                     onChange={(e)=>{
                      setHIVTest2(e.target.checked);
                      setHIVTest1(false)
                    }}
                    checked={HIVTest2}
                    color="primary"
                    name="HIVTest2"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input 
                    type="text" 
                    className="vi_0" 
                    value={HIVTestRemark}
                    onChange={(e)=>setHIVTestRemark(e.target.value)}
                    />
                  </td>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <th
                    style={{
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  ></th>
                  <th style={{ width: "40%", border: "2px  solid #20958C" }}>
                    REMOVABLE ITEMS
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
                    1
                  </th>
                  <td style={{ border: "2px  solid #20958C" }}>
                    Dentures: Upper / Lower / Partial (Specify)
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                    onChange={(e)=>{
                      setDentures1(e.target.checked);
                      setDentures2(false)
                    }}
                    checked={Dentures1}
                    color="primary"
                    name="Dentures1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                    onChange={(e)=>{
                      setDentures2(e.target.checked);
                      setDentures1(false)
                    }}
                    checked={Dentures2}
                    color="primary"
                    name="Dentures2"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>      
                    <input 
                    type="text" 
                    className="vi_0"
                    value={DenturesRemark} 
                    onChange={(e)=>setDenturesRemark(e.target.value)}
                    />
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
                    2
                  </th>
                  <td style={{ border: "2px  solid #20958C" }}>
                    Contact Lenses
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                     onChange={(e)=>{
                      setContactLense1(e.target.checked);
                      setContactLense2(false)
                    }}
                    checked={ContactLense1}
                    color="primary"
                    name="ContactLense1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                     onChange={(e)=>{
                      setContactLense2(e.target.checked);
                      setContactLense1(false)
                    }}
                    checked={ContactLense2}
                    color="primary"
                    name="ContactLense2"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input 
                    type="text" 
                    className="vi_0" 
                    value={ContactLenseRemark}
                    onChange={(e)=>setContactLenseRemark(e.target.value)}
                    />
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
                    3
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Nail Polish
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                      onChange={(e)=>{
                        setNailPolish1(e.target.checked);
                        setNailPolish2(false)
                      }}
                      checked={NailPolish1}
                      color="primary"
                      name="NailPolish1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                     onChange={(e)=>{
                      setNailPolish2(e.target.checked);
                      setNailPolish1(false)
                    }}
                    checked={NailPolish2}
                    color="primary"
                    name="NailPolish2"
                    />
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    <input 
                    type="text" 
                    className="vi_0" 
                    value={NailPolishRemark}
                    onChange={(e)=>setNailPolishRemark(e.target.value)}
                    />
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
                    4
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Jewellery / Others
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                      onChange={(e)=>{
                        setJewellery1(e.target.checked);
                        setJewellery2(false)
                      }}
                      checked={Jewellery1}
                      color="primary"
                      name="Jewellery1"
                    />
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <Checkbox 
                      onChange={(e)=>{
                        setJewellery2(e.target.checked);
                        setJewellery1(false)
                      }}
                      checked={Jewellery2}
                      color="primary"
                      name="Jewellery2"
                    />
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    <input 
                    type="text" 
                    className="vi_0" 
                    value={JewelleryRemark}
                    onChange={(e)=>setJewelleryRemark(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <td colSpan={5} style={{ border: "2px  solid #20958C" }}>
                    <div className="d-flex align-items-center">
                      <b style={{ width: "40%" }}>
                        Any Message to Theatre Staff:
                      </b>
                      <input 
                      type="text" 
                      className="vi_0" 
                      value={MessageTreat}
                      onChange={(e)=>setMessageTreat(e.target.value)}
                      />
                    </div>
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
                    Received By (OT Staff)
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
                    <div className="d-flex align-items-center gap-2">
                      <b>Name: </b>
                      <input 
                      type="text" 
                      className="vi_0" 
                      value={WardStaff1}
                      onChange={(e)=>setWardStaff1(e.target.value)}
                      />
                    </div>
                  </td>
                  <td
                    colSpan={3}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Signature:
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
                    <div className="d-flex align-items-center gap-2">
                      <b>Name: </b>
                      <input 
                      type="text" 
                      className="vi_0" 
                      value={WardStaff2}
                      onChange={(e)=>setWardStaff2(e.target.value)}
                      />
                    </div>
                  </td>
                  <td
                    colSpan={3}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Signature:
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <div className="text-center mt-2 mb-2">
        <button 
        className="btn btn-success"
        onClick={submitpreOperativelist}
        >Submit</button>
      </div>
    </div>
  );
};
export default PreOperativeChecklist;
