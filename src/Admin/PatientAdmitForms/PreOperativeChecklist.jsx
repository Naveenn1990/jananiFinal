import { Checkbox } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { FaBackward } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";

const PreOperativeChecklist = () => {
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
  const [consentSigned, setConsentSigned] = useState("");
  const [consentRemark, setConsentRemark] = useState("");
  const [PreMedication, setPreMedication] = useState("");
  const [PreMedicationRemark, setPreMedicationRemark] = useState("");
  const [Antibiotics, setAntibiotics] = useState("");
  const [AntibioticsRemarks, setAntibioticsRemarks] = useState("");
  const [BloodProductAvl, setBloodProductAvl] = useState("");
  const [BloodProductAvlRemark, setBloodProductAvlRemark] = useState("");
  const [LabResult, setLabResult] = useState("");
  const [LabResultRemark, setLabResultRemark] = useState("");
  const [Radiology, setRadiology] = useState("");
  const [RadiologyRemark, setRadiologyRemark] = useState("");
  const [SavingSkin, setSavingSkin] = useState("");
  const [SavingSkinRemark, setSavingSkinRemark] = useState("");
  const [BathOral, setBathOral] = useState("");
  const [BathOralRemark, setBathOralRemark] = useState("");
  const [PatientVoided, setPatientVoided] = useState("");
  const [PatientVoidedRemark, setPatientVoidedRemark] = useState("");
  const [TheatreGown, setTheatreGown] = useState("");
  const [TheatreGownRemark, setTheatreGownRemark] = useState("");
  const [RTInserted, setRTInserted] = useState("");
  const [RTInsertedRemark, setRTInsertedRemark] = useState("");
  const [PregnancyTest, setPregnancyTest] = useState("");
  const [PregnancyTestRemark, setPregnancyTestRemark] = useState("");
  const [HIVTest, setHIVTest] = useState("");
  const [HIVTestRemark, setHIVTestRemark] = useState("");
  const [Dentures, setDentures] = useState("");
  const [DenturesRemark, setDenturesRemark] = useState("");
  const [ContactLense, setContactLense] = useState("");
  const [ContactLenseRemark, setContactLenseRemark] = useState("");
  const [NailPolish, setNailPolish] = useState("");
  const [NailPolishRemark, setNailPolishRemark] = useState("");
  const [Jewellery, setJewellery] = useState("");
  const [JewelleryRemark, setJewelleryRemark] = useState("");
  const [MessageTreat, setMessageTreat] = useState("");
  const [WardStaff, setWardStaff] = useState("");
  const [WardStaff2, setWardStaff2] = useState("");

  const [SelectDoctor, setSelectDoctor] = useState("");

  const [StaffSign, setStaffSign] = useState(null);
  const sigCanvas1 = useRef({});
  const clear1 = () => sigCanvas1.current.clear();
  const save1 = () => {
    const StaffSign = sigCanvas1.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    setStaffSign(StaffSign);
  };

  const [StaffSign2, setStaffSign2] = useState(null);
  const sigCanvas2 = useRef({});
  const clear2 = () => sigCanvas2.current.clear();
  const save2 = () => {
    const StaffSign2 = sigCanvas2.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    setStaffSign2(StaffSign2);
  };

  const [Diagnosis, setDiagnosis] = useState("");
  const [Fasting, setFasting] = useState("");
  const [Procedure, setProcedure] = useState("");

  const submitpreOperativelist = async () => {
    if (!SelectDoctor) {
      return alert("Please Select Doctor");
    }
    if (!Diagnosis) {
      return alert("Enter Diagnosis");
    }
    if (!Fasting) {
      return alert("Enter Fasting From");
    }
    if (!Procedure) {
      return alert("Enter Procedure");
    }
    if (!DateTime) {
      return alert("Select DateTime");
    }
    if (!consentSigned) {
      return alert("consentSigned..?");
    }
    if (!PreMedication) {
      return alert("PreMedication..?");
    }
    if (!Antibiotics) {
      return alert("Antibiotics Adminstered..?");
    }
    if (!BloodProductAvl) {
      return alert("Blood Products Available..?");
    }
    if (!LabResult) {
      return alert("Lab Results Present..?");
    }
    if (!Radiology) {
      return alert("Radiology Films/ CD Present..?");
    }
    if (!SavingSkin) {
      return alert("Saving / Skin Preparation Done..?");
    }
    if (!BathOral) {
      return alert("Bath / Oral Hygeine Done..?");
    }
    if (!PatientVoided) {
      return alert("Patient Voided..?");
    }
    if (!TheatreGown) {
      return alert("Theatre Gown Worn..?");
    }
    if (!RTInserted) {
      return alert("RT Inserted..?");
    }
    if (!PregnancyTest) {
      return alert("Pregnancy Test..?");
    }
    if (!HIVTest) {
      return alert("HIV, HBsAg, HCV Tests..?");
    }
    if (!Dentures) {
      return alert("Dentures: Upper / Lower / Partial (Specify)..?");
    }
    if (!ContactLense) {
      return alert("Contact Lenses..?");
    }
    if (!NailPolish) {
      return alert("Nail Polish..?");
    }
    if (!Jewellery) {
      return alert("Jewellery / Others..?");
    }
    if (!MessageTreat) {
      return alert("Enter Message to Theatre Staff");
    }
    if (!WardStaff) {
      return alert("Enter Ward Staff Name ");
    }
    if (!WardStaff2) {
      return alert("Enter Ward Staff-2 Name ");
    }

    const formdata = new FormData();
    const staffsignature = await fetch(StaffSign).then((res) => res.blob());
    const staffsignature2 = await fetch(StaffSign2).then((res) => res.blob());
    formdata.set("patientId", patientdetails?._id);
    formdata.set("causeId", cause?._id);
    formdata.set("doctorId", SelectDoctor);
    formdata.set("Diagnosis", Diagnosis);
    formdata.set("Fasting", Fasting);
    formdata.set("Procedure", Procedure);
    formdata.set("DateTime", DateTime);
    formdata.set("consentSigned", consentSigned);
    formdata.set("consentRemark", consentRemark);
    formdata.set("PreMedication", PreMedication);
    formdata.set("PreMedicationRemark", PreMedicationRemark);
    formdata.set("Antibiotics", Antibiotics);
    formdata.set("AntibioticsRemarks", AntibioticsRemarks);
    formdata.set("BloodProductAvl", BloodProductAvl);
    formdata.set("BloodProductAvlRemark", BloodProductAvlRemark);
    formdata.set("LabResult", LabResult);
    formdata.set("LabResultRemark", LabResultRemark);
    formdata.set("Radiology", Radiology);
    formdata.set("RadiologyRemark", RadiologyRemark);
    formdata.set("SavingSkin", SavingSkin);
    formdata.set("SavingSkinRemark", SavingSkinRemark);
    formdata.set("BathOral", BathOral);
    formdata.set("BathOralRemark", BathOralRemark);
    formdata.set("PatientVoided", PatientVoided);
    formdata.set("PatientVoidedRemark", PatientVoidedRemark);
    formdata.set("TheatreGown", TheatreGown);
    formdata.set("TheatreGownRemark", TheatreGownRemark);
    formdata.set("RTInserted", RTInserted);
    formdata.set("RTInsertedRemark", RTInsertedRemark);
    formdata.set("PregnancyTest", PregnancyTest);
    formdata.set("PregnancyTestRemark", PregnancyTestRemark);
    formdata.set("HIVTest", HIVTest);
    formdata.set("HIVTestRemark", HIVTestRemark);
    formdata.set("Dentures", Dentures);
    formdata.set("DenturesRemark", DenturesRemark);
    formdata.set("ContactLense", ContactLense);
    formdata.set("ContactLenseRemark", ContactLenseRemark);
    formdata.set("NailPolish", NailPolish);
    formdata.set("NailPolishRemark", NailPolishRemark);
    formdata.set("Jewellery", Jewellery);
    formdata.set("JewelleryRemark", JewelleryRemark);
    formdata.set("MessageTreat", MessageTreat);
    formdata.set("WardStaff", WardStaff);
    formdata.set("WardStaff2", WardStaff2);
    formdata.set("staffsignature", staffsignature, "staff-signature.png");
    formdata.set("staff2signature", staffsignature2, "staff2-signature.png");
    try {
      const config = {
        url: "/addpreoperativelist",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "Content-Type": "multipart/form-data" },
        data: formdata,
        
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
            border: "#20958c",
            padding: "8px",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "6px",
            boxShadow: " 8px 8px 16px #20958c,-8px -8px 16px #20958c",
          }}
          onClick={() => window.history.go(-1)}
        >
          <FaBackward /> &nbsp; Back
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
                    Doctor:{" "}
                    <Form.Select
                      className="vi_0"
                      onChange={(e) => setSelectDoctor(e.target.value)}
                    >
                      <option value="">Select Doctor</option>
                      {patientdetails?.assigndocts?.map((item) => {
                        return (
                          <option
                            value={item?.doctorsId?._id}
                          >{`${item?.doctorsId?.Firstname} ${item?.doctorsId?.Lastname}`}</option>
                        );
                      })}
                    </Form.Select>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={1}
                    style={{ width: "40%", border: "2px  solid #20958C" }}
                  >
                    Diagnosis:
                    <input
                      type="text"
                      className="vi_0"
                      placeholder="Diagnosis"
                      onChange={(e) => setDiagnosis(e.target.value)}
                      value={Diagnosis}
                    />
                  </td>
                  <td
                    colSpan={4}
                    style={{ width: "60%", border: "2px  solid #20958C" }}
                  >
                    <p>Fasting From: </p>
                    <input
                      type="text"
                      className="vi_0"
                      placeholder="Fasting From"
                      onChange={(e) => setFasting(e.target.value)}
                      value={Fasting}
                    />
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
                    Allergies: {patientdetails?.patientAllergies}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={5}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Procedure:{" "}
                    <input
                      type="text"
                      className="vi_0"
                      placeholder="Procedure"
                      onChange={(e) => setProcedure(e.target.value)}
                      value={Procedure}
                    />
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
                        setConsentSigned(e.target.checked ? "YES" : "");
                      }}
                      checked={consentSigned === "YES"}
                      color="primary"
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
                        setConsentSigned(e.target.checked ? "NO" : "");
                      }}
                      checked={consentSigned === "NO"}
                      color="primary"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={consentRemark}
                      onChange={(e) => setConsentRemark(e.target.value)}
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
                      onChange={(e) => {
                        setPreMedication(e.target.checked ? "YES" : "");
                      }}
                      checked={PreMedication === "YES"}
                      color="primary"
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
                        setPreMedication(e.target.checked ? "NO" : "");
                      }}
                      checked={PreMedication === "NO"}
                      color="primary"
                    />
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={PreMedicationRemark}
                      onChange={(e) => setPreMedicationRemark(e.target.value)}
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
                      onChange={(e) => {
                        setAntibiotics(e.target.checked ? "YES" : "");
                      }}
                      checked={Antibiotics === "YES"}
                      color="primary"
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
                        setAntibiotics(e.target.checked ? "NO" : "");
                      }}
                      checked={Antibiotics === "NO"}
                      color="primary"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={AntibioticsRemarks}
                      onChange={(e) => setAntibioticsRemarks(e.target.value)}
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
                      onChange={(e) => {
                        setBloodProductAvl(e.target.checked ? "YES" : "");
                      }}
                      checked={BloodProductAvl === "YES"}
                      color="primary"
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
                        setBloodProductAvl(e.target.checked ? "NO" : "");
                      }}
                      checked={BloodProductAvl === "NO"}
                      color="primary"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={BloodProductAvlRemark}
                      onChange={(e) => setBloodProductAvlRemark(e.target.value)}
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
                      onChange={(e) => {
                        setLabResult(e.target.checked ? "YES" : "");
                      }}
                      checked={LabResult === "YES"}
                      color="primary"
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
                        setLabResult(e.target.checked ? "NO" : "");
                      }}
                      checked={LabResult === "NO"}
                      color="primary"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={LabResultRemark}
                      onChange={(e) => setLabResultRemark(e.target.value)}
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
                      onChange={(e) => {
                        setRadiology(e.target.checked ? "YES" : "");
                      }}
                      checked={Radiology === "YES"}
                      color="primary"
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
                        setRadiology(e.target.checked ? "NO" : "");
                      }}
                      checked={Radiology === "NO"}
                      color="primary"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={RadiologyRemark}
                      onChange={(e) => setRadiologyRemark(e.target.value)}
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
                      onChange={(e) => {
                        setSavingSkin(e.target.checked ? "YES" : "");
                      }}
                      checked={SavingSkin === "YES"}
                      color="primary"
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
                        setSavingSkin(e.target.checked ? "NO" : "");
                      }}
                      checked={SavingSkin === "NO"}
                      color="primary"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={SavingSkinRemark}
                      onChange={(e) => setSavingSkinRemark(e.target.value)}
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
                      onChange={(e) => {
                        setBathOral(e.target.checked ? "YES" : "");
                      }}
                      checked={BathOral === "YES"}
                      color="primary"
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
                        setBathOral(e.target.checked ? "NO" : "");
                      }}
                      checked={BathOral === "NO"}
                      color="primary"
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
                      onChange={(e) => setBathOralRemark(e.target.value)}
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
                      onChange={(e) => {
                        setPatientVoided(e.target.checked ? "YES" : "");
                      }}
                      checked={PatientVoided === "YES"}
                      color="primary"
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
                        setPatientVoided(e.target.checked ? "NO" : "");
                      }}
                      checked={PatientVoided === "NO"}
                      color="primary"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={PatientVoidedRemark}
                      onChange={(e) => setPatientVoidedRemark(e.target.value)}
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
                      onChange={(e) => {
                        setTheatreGown(e.target.checked ? "YES" : "");
                      }}
                      checked={TheatreGown === "YES"}
                      color="primary"
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
                      onChange={(e) => {
                        setTheatreGown(e.target.checked ? "NO" : "");
                      }}
                      checked={TheatreGown === "NO"}
                      color="primary"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={TheatreGownRemark}
                      onChange={(e) => setTheatreGownRemark(e.target.value)}
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
                      onChange={(e) => {
                        setRTInserted(e.target.checked ? "YES" : "");
                      }}
                      checked={RTInserted === "YES"}
                      color="primary"
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
                        setRTInserted(e.target.checked ? "NO" : "");
                      }}
                      checked={RTInserted === "NO"}
                      color="primary"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={RTInsertedRemark}
                      onChange={(e) => setRTInsertedRemark(e.target.value)}
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
                      onChange={(e) => {
                        setPregnancyTest(e.target.checked ? "YES" : "");
                      }}
                      checked={PregnancyTest === "YES"}
                      color="primary"
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
                        setPregnancyTest(e.target.checked ? "NO" : "");
                      }}
                      checked={PregnancyTest === "NO"}
                      color="primary"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={PregnancyTestRemark}
                      onChange={(e) => setPregnancyTestRemark(e.target.value)}
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
                      onChange={(e) => {
                        setHIVTest(e.target.checked ? "YES" : "");
                      }}
                      checked={HIVTest === "YES"}
                      color="primary"
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
                        setHIVTest(e.target.checked ? "NO" : "");
                      }}
                      checked={HIVTest === "NO"}
                      color="primary"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={HIVTestRemark}
                      onChange={(e) => setHIVTestRemark(e.target.value)}
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
                      onChange={(e) => {
                        setDentures(e.target.checked ? "YES" : "");
                      }}
                      checked={Dentures === "YES"}
                      color="primary"
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
                        setDentures(e.target.checked ? "NO" : "");
                      }}
                      checked={Dentures === "NO"}
                      color="primary"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={DenturesRemark}
                      onChange={(e) => setDenturesRemark(e.target.value)}
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
                      onChange={(e) => {
                        setContactLense(e.target.checked ? "YES" : "");
                      }}
                      checked={ContactLense === "YES"}
                      color="primary"
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
                        setContactLense(e.target.checked ? "NO" : "");
                      }}
                      checked={ContactLense === "NO"}
                      color="primary"
                    />
                  </td>
                  <td style={{ border: "2px  solid #20958C" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={ContactLenseRemark}
                      onChange={(e) => setContactLenseRemark(e.target.value)}
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
                      onChange={(e) => {
                        setNailPolish(e.target.checked ? "YES" : "");
                      }}
                      checked={NailPolish === "YES"}
                      color="primary"
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
                      onChange={(e) => {
                        setNailPolish(e.target.checked ? "NO" : "");
                      }}
                      checked={NailPolish === "NO"}
                      color="primary"
                    />
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={NailPolishRemark}
                      onChange={(e) => setNailPolishRemark(e.target.value)}
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
                      onChange={(e) => {
                        setJewellery(e.target.checked ? "YES" : "");
                      }}
                      checked={Jewellery === "YES"}
                      color="primary"
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
                        setJewellery(e.target.checked ? "NO" : "");
                      }}
                      checked={Jewellery === "NO"}
                      color="primary"
                    />
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={JewelleryRemark}
                      onChange={(e) => setJewelleryRemark(e.target.value)}
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
                        onChange={(e) => setMessageTreat(e.target.value)}
                        placeholder="Message to Theatre Staff"
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
                        value={WardStaff}
                        onChange={(e) => setWardStaff(e.target.value)}
                        placeholder="Ward Staff Name ."
                      />
                    </div>
                  </td>
                  <td
                    colSpan={3}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Signature:{" "}
                    {!StaffSign ? (
                      <div
                        style={{
                          border: "1px solid #dee2e6",
                        }}
                      >
                        <SignatureCanvas
                          ref={sigCanvas1}
                          penColor="black"
                          canvasProps={{
                            width: 180,
                            height: 100,
                            className: "sigCanvas",
                          }}
                        />
                        <button onClick={clear1}>Clear</button>
                        <button onClick={save1}>Save</button>
                      </div>
                    ) : (
                      <img src={StaffSign} alt="Signature" />
                    )}
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
                        onChange={(e) => setWardStaff2(e.target.value)}
                        placeholder="Ward Staff Name ."
                      />
                    </div>
                  </td>
                  <td
                    colSpan={3}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Signature:
                    {!StaffSign2 ? (
                      <div
                        style={{
                          border: "1px solid #dee2e6",
                        }}
                      >
                        <SignatureCanvas
                          ref={sigCanvas2}
                          penColor="black"
                          canvasProps={{
                            width: 180,
                            height: 100,
                            className: "sigCanvas",
                          }}
                        />
                        <button onClick={clear2}>Clear</button>
                        <button onClick={save2}>Save</button>
                      </div>
                    ) : (
                      <img src={StaffSign2} alt="Signature" />
                    )}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <div className="text-center mt-2 mb-2">
        <button className="btn btn-success" onClick={submitpreOperativelist}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default PreOperativeChecklist;
