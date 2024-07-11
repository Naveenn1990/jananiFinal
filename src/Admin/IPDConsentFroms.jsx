import axios from "axios";
import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import moment from "moment";
import SignatureCanvas from "react-signature-canvas";
import { Checkbox } from "@mui/material";

const IPDConsentFroms = () => {
  const { id } = useParams();
  const [btn1, setbtn1] = useState(true);
  const [btn2, setbtn2] = useState(true);
  const [btn3, setbtn3] = useState(true);
  const [btn4, setbtn4] = useState(true);

  let [patientAllergies, setpatientAllergies] = useState([]);
  const [clickedAddAllergyBtn, setclickedAddAllergyBtn] = useState("");

  const [HServicesList, setHServicesList] = useState([]);
  const getHospitalServiceList = async () => {
    try {
      let response = await axios.get(
        "http://localhost:8521/api/admin/HospitalServicesList"
      );
      if (response.status === 200) {
        setHServicesList(response.data.allHospitalServices);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHospitalServiceList();
  }, []);

  useEffect(() => {
    setpatientAllergies(patientAllergies);
    setclickedAddAllergyBtn("");
  }, [clickedAddAllergyBtn]);

  const [userdetail, setuserdetail] = useState({});
  const getpatientbyid = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8521/api/user/getPatientDetailByid/${id}`
      );
      if (res.status === 200) {
        setuserdetail(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getpatientbyid();
  }, []);

  useEffect(() => {
    setRealivesName(userdetail?.relativeName || "");
    setPatientRelation(userdetail?.relationWithPatient || "");
  }, [userdetail]);

  // Hospitalization Consent Form
  const [NameOfSurgery, setNameOfSurgery] = useState("");
  const [NameOfSurgery2, setNameOfSurgery2] = useState("");
  const [SurgeryEstimatePrice, setSurgeryEstimatePrice] = useState();
  const [SurgeryRemark, setSurgeryRemark] = useState("");
  const [SurgeryPackages, setSurgeryPackages] = useState([]);
  const surgeryDetails = () => {
    const obj = {
      NameOfSurgery: NameOfSurgery,
      SurgeryEstimatePrice: SurgeryEstimatePrice,
      SurgeryRemark: SurgeryRemark,
    };
    setSurgeryPackages((prevState) => [...prevState, obj]);
  };
  const removeSurgery = (indexToRemove) => {
    setSurgeryPackages((prevState) => {
      const updatedState = prevState.filter(
        (_, index) => index !== indexToRemove
      );
      return updatedState;
    });
  };

  useEffect(() => {
    if (NameOfSurgery) {
      const estimatecost = HServicesList?.filter(
        (ele) => ele.hSurgeryService === NameOfSurgery
      )?.map(
        (item) =>
          Number(item.hServicePriceInsuredPeople) +
          Number(item.hServicePriceNonInsuredPeople)
      );
      setSurgeryEstimatePrice(estimatecost);
    }
  }, [NameOfSurgery]);

  //Special Procedure Charges

  const [NameofProcedure, setNameofProcedure] = useState("");
  const [ProcedureCost, setProcedureCost] = useState();
  const [ProcedurRemark, setProcedurRemark] = useState("");
  const [ProcedureDetails, setProcedureDetails] = useState([]);

  const ProcedureCharges = () => {
    const obj = {
      NameofProcedure: NameofProcedure,
      ProcedureCost: ProcedureCost,
      ProcedurRemark: ProcedurRemark,
    };
    setProcedureDetails((prevState) => [...prevState, obj]);
  };
  const removeProcedure = (indexToRemove) => {
    setProcedureDetails((prevState) => {
      const updatedState = prevState.filter(
        (_, index) => index !== indexToRemove
      );
      return updatedState;
    });
  };

  // Special Investigation Charges

  const [InvestigationName, setInvestigationName] = useState("");
  const [InvestigationCost, setInvestigationCost] = useState("");
  const [InvestigationRemark, setInvestigationRemark] = useState("");

  const [InvestigationChargeList, setInvestigationChargeList] = useState([]);

  const InvestigationCharges = () => {
    const obj = {
      InvestigationName: InvestigationName,
      InvestigationCost: InvestigationCost,
      InvestigationRemark: InvestigationRemark,
    };
    setInvestigationChargeList((prevState) => [...prevState, obj]);
  };

  const removeInvestigation = (indexToRemove) => {
    setInvestigationChargeList((prevState) => {
      const updatedState = prevState.filter(
        (_, index) => index !== indexToRemove
      );
      return updatedState;
    });
  };

  const [PatientName, setPatientName] = useState("");
  useEffect(() => {
    setPatientName(`${userdetail?.Firstname} ${userdetail?.Lastname}` || "");
  }, [userdetail]);

  const [Patientage, setPatientage] = useState("");
  const [OpNumber, setOpNumber] = useState("");
  const [IpNumber, setIpNumber] = useState("");
  const [StaffName, setStaffName] = useState("");
  const [ConDoctorName2, setConDoctorName2] = useState("");
  const [Diagnosis, setDiagnosis] = useState("");
  const [OperativeProce, setOperativeProce] = useState("");
  const [PatientSurrogate, setPatientSurrogate] = useState("");
  const [Date2, setDate2] = useState("");
  const [Time1, setTime1] = useState("");
  const [Date3, setDate3] = useState("");
  const [Time2, setTime2] = useState("");
  const [Doctor2, setDoctor2] = useState("");
  const [Date4, setDate4] = useState("");
  const [Time3, setTime3] = useState("");
  const [Guardian1, setGuardian1] = useState("");
  const [Date5, setDate5] = useState("");
  const [Time4, setTime4] = useState("");

  const [WardRoomCharges, setWardRoomCharges] = useState("");
  const [WardRemark, setWardRemark] = useState("");
  const [WardText1, setWardText1] = useState("");
  const [WardText2, setWardText2] = useState("");
  const [Witness1, setWitness1] = useState("");
  const [Witness2, setWitness2] = useState("");
  const [Witness1Number, setWitness1Number] = useState("");
  const [Witness2Number, setWitness2Number] = useState("");

  const [TypeofAnesthesia, setTypeofAnesthesia] = useState("");
  const [ConDoctorName, setConDoctorName] = useState("");
  const [RealivesName, setRealivesName] = useState("");
  const [PatientRelation, setPatientRelation] = useState("");
  const [Date0, setDate] = useState("");
  const [ConsentFormName, setConsentFormName] = useState("GeneralConsentForms");
  const [CauseId, setCauseId] = useState("");
  const formdata = new FormData();
  const GeneralConsentForm = async () => {
    if (!CauseId) {
      return alert("please select cause of this consent form");
    }

    if (ConsentFormName === "GeneralConsentForms") {
      if (!ConDoctorName) {
        return alert("Select Doctor");
      }
      if (!signature) {
        return alert("Doctor Sign is pending");
      }
      if (!signature1) {
        return alert("Patient Sign is pending ");
      }
      if (!Date0) {
        return alert("Select Date and Time");
      }
    }

    if(ConsentFormName === "HospitalizedConsentForms"){
      if(!WardRoomCharges){
        return alert("Please Enter Ward/ Room Charges")
      }

    }

    if (ConsentFormName === "HighriskConsentForms") {
      if (!StaffName) {
        return alert("Please Enter Staff Name");
      }
      if (!ConDoctorName) {
        return alert("Please Select surgery Doctor1");
      }
      if (!ConDoctorName2) {
        return alert("Please Select surgery Doctor2");
      }
      if (!Diagnosis) {
        return alert("Please Enter Medical Condition/Diagnosis");
      }
      if (!OperativeProce) {
        return alert("Please Enter Proposed operative Procedure");
      }
      if (!RealivesName) {
        return alert("Please Enter Realive Name");
      }
      if (!Date0) {
        return alert("Please Select Date");
      }
      if (!signature1) {
        return alert("Patient Sign is pending ");
      }
      if (!Date2) {
        return alert("Patient Select date ");
      }
      if (!Time1) {
        return alert("Patient Select Time ");
      }
      if (!Witness1) {
        return alert("Please Enter Witness Name");
      }
      if (!WitnessSign) {
        return alert("Witness Sign is pending ");
      }
      if (!Date3) {
        return alert("Witness Select date ");
      }
      if (!Time2) {
        return alert("Witness Select Time ");
      }
      if (!Doctor2) {
        return alert("Select Doctor");
      }
      if (!signature) {
        return alert("Doctor Sign is pending ");
      }
      if (!Date4) {
        return alert("Doctor Select date ");
      }
      if (!Time3) {
        return alert("Doctor Select Time ");
      }
      if (!Guardian1) {
        return alert("Please Enter Legal_guardian");
      }
      if (!LegalGuardian) {
        return alert("Legal_guardian Sign is pending ");
      }
      if (!Date5) {
        return alert("Legal_guardian Select date ");
      }
      if (!Time4) {
        return alert("Legal_guardian Select Time ");
      }
    }

    if (ConsentFormName === "AnesthesiaConsentForms") {
      if (!Diagnosis) {
        return alert("Please Enter Medical Condition/Diagnosis");
      }
      if (!OperativeProce) {
        return alert("Please Enter Operative Procedure/ Operation");
      }
      if (!TypeofAnesthesia) {
        return alert("Please check Type of Anesthesia ");
      }
      if (!NameOfSurgery) {
        return alert("Please enter the surgery name");
      }
      if (!NameOfSurgery2) {
        return alert("Please fill the field");
      }
      if (!signature1) {
        return alert("Patient Sign is pending ");
      }
      if (!Date2) {
        return alert("Patient Select date ");
      }
      if (!Time1) {
        return alert("Patient Select Time ");
      }
      if (!Witness1) {
        return alert("Please Enter Witness Name");
      }
      if (!WitnessSign) {
        return alert("Witness Sign is pending ");
      }
      if (!Date3) {
        return alert("Witness Select date ");
      }
      if (!Time2) {
        return alert("Witness Select Time ");
      }
      if (!Doctor2) {
        return alert("Select Doctor");
      }
      if (!signature) {
        return alert("Doctor Sign is pending ");
      }
      if (!Date4) {
        return alert("Doctor Select date ");
      }
      if (!Time3) {
        return alert("Doctor Select Time ");
      }
      if (!Guardian1) {
        return alert("Please Enter Legal_guardian");
      }
      if (!LegalGuardian) {
        return alert("Legal_guardian Sign is pending ");
      }
      if (!Date5) {
        return alert("Legal_guardian Select date ");
      }
      if (!Time4) {
        return alert("Legal_guardian Select Time ");
      }
    }

    const DoctorSignature = await fetch(signature).then((res) => res.blob());
    const PatientSignature1 = await fetch(signature1).then((res) => res.blob());
    const WitnessSignature = await fetch(WitnessSign).then((res) => res.blob());
    const LegalGuardianSignature = await fetch(LegalGuardian).then((res) =>
      res.blob()
    );

    formdata.set("causeId", CauseId);
    formdata.set("patientId", userdetail?._id);
    formdata.set("formname", ConsentFormName);
    formdata.set(
      "patientname",
      `${userdetail?.Firstname} ${userdetail?.Lastname}`
    );
    formdata.set("ConDoctorName", ConDoctorName);
    formdata.set("RealivesName", RealivesName);
    formdata.set("PatientRelation", PatientRelation);
    formdata.set("Date", Date0);

    formdata.set("WardRoomCharges", WardRoomCharges);
    formdata.set("WardRemark", WardRemark);
    formdata.set("WardText1", WardText1);
    formdata.set("WardText2", WardText2);
    formdata.set("Witness1", Witness1);
    formdata.set("Witness2", Witness2);
    formdata.set("Witness1Number", Witness1Number);
    formdata.set("Witness2Number", Witness2Number);
    formdata.set("SurgeryPackages", SurgeryPackages);
    formdata.set("ProcedureDetails", ProcedureDetails);
    formdata.set("InvestigationChargeList", InvestigationChargeList);

    formdata.set("Patientage", Patientage);
    formdata.set("OpNumber", OpNumber);
    formdata.set("IpNumber", IpNumber);
    formdata.set("StaffName", StaffName);
    formdata.set("ConDoctorName2", ConDoctorName2);
    formdata.set("Diagnosis", Diagnosis);
    formdata.set("OperativeProce", OperativeProce);
    formdata.set("PatientSurrogate", PatientSurrogate);
    formdata.set("Date2", Date2);
    formdata.set("Time1", Time1);
    formdata.set("Date3", Date3);
    formdata.set("Time2", Time2);
    formdata.set("Doctor2", Doctor2);
    formdata.set("Date4", Date4);
    formdata.set("Time3", Time3);
    formdata.set("Guardian1", Guardian1);
    formdata.set("Date5", Date5);
    formdata.set("Time4", Time4);
    formdata.set("NameOfSurgery", NameOfSurgery);
    formdata.set("TypeofAnesthesia", TypeofAnesthesia);
    formdata.set("DOB", userdetail?.DOB);
    formdata.set("Gender", userdetail?.Gender);
    formdata.set("NameOfSurgery2", NameOfSurgery2);

    formdata.set("doctorsign", DoctorSignature, "doctor-signature.png");
    formdata.set("patientsign", PatientSignature1, "patient-signature.png");
    formdata.set("witnesssign", WitnessSignature, "witness-signature.png");
    formdata.set(
      "legalgurdiansign",
      LegalGuardianSignature,
      "legalgurdiation-signature.png"
    );
    try {
      const config = {
        url: "/consentform",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "Content-Type": "multipart/form-data" },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getpatientbyid();
        window.location.assign("");
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const dobString = userdetail?.DOB;
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

  const [signature, setSignature] = useState(null);
  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();

  const save = () => {
    const signature = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    setSignature(signature);
  };

  const [signature1, setSignature1] = useState(null);
  const sigCanvas1 = useRef({});

  const clear1 = () => sigCanvas1.current.clear();

  const save1 = () => {
    const signature1 = sigCanvas1.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    setSignature1(signature1);
  };

  const [WitnessSign, setWitnessSign] = useState(null);
  const sigCanvas3 = useRef({});

  const clear3 = () => sigCanvas3.current.clear();

  const save3 = () => {
    const WitnessSign = sigCanvas3.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    setWitnessSign(WitnessSign);
  };

  const [LegalGuardian, setLegalGuardian] = useState(null);
  const sigCanvas4 = useRef({});

  const clear4 = () => sigCanvas4.current.clear();

  const save4 = () => {
    const LegalGuardian = sigCanvas4.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    setLegalGuardian(LegalGuardian);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
          backgroundColor: "#20958c",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "white" }}>
          IPD Patient Consents Forms
        </h6>
        <div id="google_translate_element"></div>
      </div>
      <hr />

      <div className="d-flex mt-2 align-items-center">
        <div style={{ width: "15%" }}>Please Select Cause : </div>
        <Form.Select
          onChange={(e) => setCauseId(e.target.value)}
          style={{ width: "25%" }}
        >
          <option>Select The Cause</option>
          {userdetail?.cause?.map((item) => {
            return <option value={item?._id}>{item?.CauseName}</option>;
          })}
        </Form.Select>
      </div>

      <div className="mt-3">
        <div className="d-flex gap-2">
          <button
            style={{
              padding: "6px",
              border: "none",
              backgroundColor: "#20958c",
              color: "white",
              borderRadius: "0px",
            }}
            onClick={() => {
              setbtn1(true);
              setbtn2(false);
              setbtn3(false);
              setbtn4(false);
              setConsentFormName("GeneralConsentForms");
            }}
          >
            General Consent Forms
          </button>
          <button
            style={{
              padding: "6px",
              border: "none",
              backgroundColor: "#20958c",
              color: "white",
              borderRadius: "0px",
            }}
            onClick={() => {
              setbtn1(false);
              setbtn2(true);
              setbtn3(false);
              setbtn4(false);
              setConsentFormName("HospitalizedConsentForms");
            }}
          >
            Hospitalized Estimated Charge Sheet Cum Consent Form
          </button>
          <button
            style={{
              padding: "6px",
              border: "none",
              backgroundColor: "#20958c",
              color: "white",
              borderRadius: "0px",
            }}
            onClick={() => {
              setbtn1(false);
              setbtn2(false);
              setbtn3(true);
              setbtn4(false);
              setConsentFormName("HighriskConsentForms");
            }}
          >
            Informed Consent for High risk Procedure
          </button>
          <button
            style={{
              padding: "6px",
              border: "none",
              backgroundColor: "#20958c",
              color: "white",
              borderRadius: "0px",
            }}
            onClick={() => {
              setbtn1(false);
              setbtn2(false);
              setbtn3(false);
              setbtn4(true);
              setConsentFormName("AnesthesiaConsentForms");
            }}
          >
            Consent For Anesthesia / Sedation
          </button>
        </div>
      </div>

      {btn1 ? (
        <>
          <div className="mt-2 d-dlex text-center gap-2">
            <h3>{ConsentFormName}</h3>
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
                width: "1057px",
                margin: "auto",
                borderRadius: "20px",
                height: "auto",
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
                  paddingLeft: "42px",
                  paddingRight: "42px",
                  textAlign: "justify",
                }}
              >
                <p style={{ fontSize: "18px" }}>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, Want to
                  get myself/ my relative{" "}
                  <span style={{ borderBottom: "1px solid black" }}>
                    <input
                      type="text"
                      className="vi_0"
                      value={`${userdetail?.Firstname} ${userdetail?.Lastname}`}
                      style={{ width: "490px" }}
                      readOnly
                    />
                  </span>{" "}
                  Admitted and treated in this hospital. The decision of coming
                  here is purely on my discretion.
                </p>
                <p style={{ fontSize: "18px" }}>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, am fully
                  aware with the facilities available for the care of myself/ my
                  relative and have full faith in the staff of this hospital/
                  Medical Establishment. I have been explained that admitted
                  Patients and Patients required emergency care take priority of
                  the Doctor. I fully agree and co-operate.{" "}
                </p>
                <p style={{ fontSize: "18px" }}>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, fully
                  understand and agree to pay the fees charged by the Doctor/
                  Hospital for the professional service rendered to me/ relative
                  during the illness regardies of the end result of the illness.
                  I promise not to misbehave either with Doctors or any of the
                  Hospital staff. I know that indecency on my part will lead to
                  explusion from the Hospital.{" "}
                </p>
                <p style={{ fontSize: "18px" }}>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, hereby on
                  my own free will, authorize the hospital to admit myself/ my
                  relative.{" "}
                </p>
              </div>
              <div className="mt-3">
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Doctor</th>
                      <th>Tenant/ Relative</th>
                      <th>Patient </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>
                          <b style={{ fontSize: "18px" }}>Name : </b>
                          <span>
                            <Form.Select
                              className="vi_0"
                              style={{ width: "270px" }}
                              onChange={(e) => setConDoctorName(e.target.value)}
                            >
                              <option value="">Select Doctor</option>
                              {userdetail?.assigndocts?.map((item) => {
                                return (
                                  <option
                                    value={item?.doctorsId?._id}
                                  >{`${item?.doctorsId?.Firstname} ${item?.doctorsId?.Lastname}`}</option>
                                );
                              })}
                            </Form.Select>
                          </span>
                        </div>
                      </td>
                      <td>
                        <h6 style={{ fontSize: "20px" }}>Name : </h6>
                        <span style={{ borderBottom: "1px solid black" }}>
                          <input
                            type="text"
                            className="vi_0"
                            value={RealivesName}
                            onChange={(e) => setRealivesName(e.target.value)}
                          />
                        </span>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="vi_0"
                          value={`${userdetail?.Firstname} ${userdetail?.Lastname}`}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {!signature ? (
                          <div
                            style={{
                              border: "1px solid #dee2e6",
                            }}
                          >
                            <SignatureCanvas
                              ref={sigCanvas}
                              penColor="black"
                              canvasProps={{
                                width: 180,
                                height: 100,
                                className: "sigCanvas",
                              }}
                            />
                            <button onClick={clear}>Clear</button>
                            <button onClick={save}>Save</button>
                          </div>
                        ) : (
                          <img src={signature} alt="Signature" />
                        )}
                      </td>
                      <td>
                        <input
                          type="text"
                          className="vi_0"
                          value={PatientRelation}
                          onChange={(e) => setPatientRelation(e.target.value)}
                        />
                      </td>
                      <td>
                        {!signature1 ? (
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
                          <img src={signature1} alt="Signature" />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="mt-3">
                <p style={{ fontSize: "18px" }}>
                  Date/ Time :{" "}
                  <span>
                    <input
                      type="datetime-local"
                      className="vi_0"
                      style={{ width: "400px" }}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-2 d-flex justify-content-center">
              <Button onClick={() => GeneralConsentForm()}>Submit</Button>
            </div>
          </div>
        </>
      ) : (
        <>
          {btn2 ? (
            <>
              <div className="mt-2 d-dlex text-center gap-2">
                <h3>{ConsentFormName}</h3>
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
                    height: "auto",
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
                      <b>1. Ward/ Room Charges</b>
                      <div className="container">
                        <div
                          className="row"
                          style={{ border: "1px solid #20958C" }}
                        >
                          <div className="col-md-4 consentformhd">
                            <textarea
                              cols="20"
                              rows="3"
                              className="vi_0 mt-1"
                              onChange={(e) =>
                                setWardRoomCharges(e.target.value)
                              }
                              placeholder=" Ward/ Room Charges"
                              value={WardRoomCharges}
                            />
                          </div>
                          <div className="col-md-4 consentformhd">
                            <h6
                              style={{
                                fontSize: "17px",
                                padding: "5px",
                                textAlign:"justify"
                              }}
                            >
                              Ward/ Room Category Charges per Day (Including
                              Room Rent, nursing Charges, Duty Doctor Charges,
                              Monitoring, charges, Primary Consultant Charges).
                            </h6>
                          </div>
                          <div className="col-md-4 consentformhd">
                            <h6
                              style={{
                                fontSize: "18px",
                              }}
                            >
                              Remark :
                            </h6>
                            <textarea
                              placeholder="enter remarks"
                              cols="20"
                              rows="2"
                              className="vi_0 p-1"
                              onChange={(e) => setWardRemark(e.target.value)}
                              value={WardRemark}
                            />
                          </div>
                          <div
                            className="col-md-12 consentformhd">
                            <textarea
                              onChange={(e) => setWardText1(e.target.value)}
                              cols="90"
                              rows="1"
                              className="vi_0 mt-1"
                              placeholder="Write Something"
                              value={WardText1}
                            />
                          </div>
                          <div className="col-md-12 consentformhd">
                            <textarea
                              onChange={(e) => setWardText2(e.target.value)}
                              cols="90"
                              rows="1"
                              className="vi_0 mt-1"
                              placeholder="Write Something"
                              value={WardText2}
                            />
                          </div>
                        </div>
                      </div>
                    </p><br/>
                    <p style={{ fontSize: "18px" }}>
                      <b>2. Surgery Package Charges</b>
                      <div className="container">
                        <div
                          className="row"
                          style={{ border: "1px solid #20958C" }}
                        >
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Name of the Surgery/ Surgories
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Estimated Cost
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Remark
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Action
                          </div>
                        </div>

                        <div className="row">
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <select
                                onChange={(e) =>
                                  setNameOfSurgery(e.target.value)
                                }
                                className="vi_0"
                                style={{ width: "241px" }}
                              >
                                <option value="">select the surgery</option>
                                {HServicesList?.map((val) => {
                                  return (
                                    <option value={val?.hSurgeryService}>
                                      {val?.hSurgeryService}
                                    </option>
                                  );
                                })}
                              </select>
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              {SurgeryEstimatePrice?.[0]}
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "241px" }}
                                onChange={(e) =>
                                  setSurgeryRemark(e.target.value)
                                }
                              />
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <Button onClick={surgeryDetails}>Add</Button>
                            </span>
                          </div>
                        </div>
                        {SurgeryPackages?.map((item, i) => {
                          return (
                            <div className="row">
                              <div
                                className="col-md-3"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>{item?.NameOfSurgery}</span>{" "}
                              </div>
                              <div
                                className="col-md-3"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>{item?.SurgeryEstimatePrice}</span>{" "}
                              </div>
                              <div
                                className="col-md-3"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>{item?.SurgeryRemark}</span>{" "}
                              </div>
                              <div
                                className="col-md-3"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <Button
                                    onClick={() => removeSurgery(i)}
                                    variant="danger"
                                  >
                                    Delete
                                  </Button>
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </p>
                    <br/>
                    <p style={{ fontSize: "18px" }}>
                      <b>3.Special Procedure Charges</b>
                      <div className="container">
                        <div
                          className="row"
                          style={{ border: "1px solid #20958C" }}
                        >
                          <div className="col-md-3 consentformhd" >
                            Name of the Procedure/ Procedures
                          </div>
                          <div className="col-md-3 consentformhd">
                            Estimated Cost
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Remark
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Action
                          </div>
                        </div>

                        <div className="row">
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "241px" }}
                                placeholder="enter procedure name"
                                onChange={(e) =>
                                  setNameofProcedure(e.target.value)
                                }
                              />
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                placeholder="enter producer cost"
                                type="number"
                                className="vi_0"
                                style={{ width: "241px" }}
                                onChange={(e) =>
                                  setProcedureCost(e.target.value)
                                }
                              />
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                placeholder="enter procuder remark"
                                type="text"
                                className="vi_0"
                                style={{ width: "241px" }}
                                onChange={(e) =>
                                  setProcedurRemark(e.target.value)
                                }
                              />
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <Button onClick={ProcedureCharges}>Add</Button>
                            </span>
                          </div>
                        </div>
                        {ProcedureDetails?.map((item, i) => {
                          return (
                            <div className="row">
                              <div
                                className="col-md-3"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>{item?.NameofProcedure}</span>
                              </div>
                              <div
                                className="col-md-3"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>{item?.ProcedureCost}</span>
                              </div>
                              <div
                                className="col-md-3"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>{item?.ProcedurRemark}</span>
                              </div>
                              <div
                                className="col-md-3"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <Button
                                    onClick={() => removeProcedure(i)}
                                    variant="danger"
                                  >
                                    delete
                                  </Button>
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      4. Special Investigation Charges
                      <div className="container">
                        <div className="row">
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Name of the Investigation Charges
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Estimated Cost
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Remark
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "18px",
                            }}
                          >
                            Action
                          </div>
                        </div>

                        <div className="row">
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "241px" }}
                                placeholder="enter investigation "
                                onChange={(e) =>
                                  setInvestigationName(e.target.value)
                                }
                              />
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                type="number"
                                className="vi_0"
                                style={{ width: "241px" }}
                                placeholder="enter cost"
                                onChange={(e) =>
                                  setInvestigationCost(e.target.value)
                                }
                              />
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span style={{ borderBottom: "1px solid black" }}>
                              <input
                                placeholder="enter remark"
                                type="text"
                                className="vi_0"
                                style={{ width: "241px" }}
                                onChange={(e) =>
                                  setInvestigationRemark(e.target.value)
                                }
                              />
                            </span>{" "}
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <Button onClick={InvestigationCharges}>
                                Add
                              </Button>
                            </span>
                          </div>
                        </div>
                        {InvestigationChargeList?.map((item, i) => {
                          return (
                            <div className="row">
                              <div
                                className="col-md-3"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>{item?.InvestigationName}</span>{" "}
                              </div>
                              <div
                                className="col-md-3"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>{item?.InvestigationCost}</span>
                              </div>
                              <div
                                className="col-md-3"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>{item?.InvestigationRemark}</span>
                              </div>
                              <div
                                className="col-md-3"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                }}
                              >
                                <span>
                                  <Button
                                    variant="danger"
                                    onClick={() => removeInvestigation(i)}
                                  >
                                    delete
                                  </Button>
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </p>
                    <p style={{ fontSize: "18px" }}>
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
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I,
                      <span>
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "490px" }}
                          value={PatientName}
                          onChange={(e) => setPatientName(e.target.value)}
                        />
                      </span>{" "}
                      have been explained in detail the above mentioned charges
                      in a language that I understand.
                      <br />
                      <br />
                      Patient/ Patient Relative Name & Signature :{" "}
                      <span>
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "270px" }}
                          value={RealivesName}
                          onChange={(e) => setRealivesName(e.target.value)}
                        />
                      </span>
                    </p>

                    <p style={{ fontSize: "18px" }}>
                      <span>
                        Witness-1/ Relative-1{" "}
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "270px" }}
                          onChange={(e) => setWitness1(e.target.value)}
                          placeholder=" Witness-1/ Relative-1"
                        />
                        Witness-2/ Relative-2{" "}
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "270px" }}
                          onChange={(e) => setWitness2(e.target.value)}
                          placeholder=" Witness-2/ Relative-2"
                        />
                      </span>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        Phone No :{" "}
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "270px" }}
                          placeholder="enter number"
                          onChange={(e) => setWitness1Number(e.target.value)}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone No
                        :{" "}
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "270px" }}
                          placeholder="enter number"
                          onChange={(e) => setWitness2Number(e.target.value)}
                        />
                      </span>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      Name: Designation & Signature of the hospital staff
                      Explaining the Estinated Cost
                      <textarea
                        name=""
                        id=""
                        cols="90"
                        rows="2"
                        className="vi_0"
                      ></textarea>
                    </p>
                    <p style={{ fontSize: "18px", textAlignLast: "end" }}>
                      Signature
                      <input type="text" name="" id="" className="vi_0" />
                    </p>
                  </div>
                </div>
                <div className="mt-2 d-flex justify-content-center">
                  <Button onClick={() => GeneralConsentForm()}>Submit</Button>
                </div>
              </div>
            </>
          ) : (
            <>
              {btn3 ? (
                <>
                  <div className="mt-2 d-dlex text-center gap-2">
                    <h3>{ConsentFormName}</h3>
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
                        width: "1073px",
                        margin: "auto",
                        borderRadius: "20px",
                        height: "auto",
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
                            Beside Canara Bank, Jalanagar Main Road, K. K.
                            Colony, Vijaypura-586109
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
                          Informed Consent for High risk Procedure
                        </h6>
                      </div>
                      <div
                        style={{
                          textAlign: "justify",
                          padding: "30px",
                        }}
                      >
                        <div className="container">
                          <div
                            className="row"
                            style={{ border: "1px solid #20958C" }}
                          >
                            <div className="col-md-4 consentformhd">
                              <b>Patient Name :</b>{" "}
                              <span>
                                {`${userdetail?.Firstname} ${userdetail?.Lastname}`}
                              </span>
                            </div>
                            <div className="col-md-4 consentformhd">
                              <b>Date :</b>{" "}
                              <span>
                                {moment(userdetail?.createdAt).format(
                                  "DD-MM-YYYY"
                                )}
                              </span>
                            </div>
                            <div className="col-md-4 consentformhd">
                              <b>Age :</b> <span>{ageOutput}</span>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-4 consentformhd">
                              <b>OP No :</b> <span>24DSF2</span>
                            </div>
                            <div className="col-md-4 consentformhd">
                              <b>IP No :</b> <span>45FGF3</span>
                            </div>
                            <div className="col-md-4 consentformhd">
                              <b>Sex :</b> <span>{userdetail?.Gender}</span>
                            </div>
                          </div>
                          <div className="row">
                            <div
                              className="col-md-12"
                              style={{
                                padding: "10px",
                                border: "1px solid #20958C",
                              }}
                            >
                              <p style={{ fontSize: "18px" }}>
                                I/ We{" "}
                                <span
                                  style={{ borderBottom: "1px solid black" }}
                                >
                                   <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "301px" }}
                                    value={StaffName}
                                    onChange={(e) =>
                                      setStaffName(e.target.value)
                                    }
                                    placeholder="Enter Staff Name"
                                  /> 
                                    
                                </span>
                                &nbsp; have been explained about the medical
                                condition and <br />
                                <p className="d-flex gap-3 mt-2">
                                  the prospered surgery by Dr.
                                  <Form.Select
                                    className="vi_0"
                                    style={{ width: "301px" }}
                                    value={ConDoctorName}
                                    onChange={(e) =>
                                      setConDoctorName(e.target.value)
                                    }
                                  >
                                    <option>Select Doctors</option>
                                    {userdetail?.assigndocts?.map((item) => {
                                      return (
                                        <option
                                          value={item?.doctorsId?._id}
                                        >{`${item?.doctorsId?.Firstname} ${item?.doctorsId?.Lastname}`}</option>
                                      );
                                    })}
                                  </Form.Select>
                                </p>
                                <span className="d-flex mt-3 gap-3">
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dr.
                                  <Form.Select
                                    className="vi_0"
                                    value={ConDoctorName2}
                                    onChange={(e) =>
                                      setConDoctorName2(e.target.value)
                                    }
                                    style={{ width: "301px" }}
                                  >
                                    <option>Select Doctors</option>
                                    {userdetail?.assigndocts?.map((item) => {
                                      return (
                                        <option
                                          value={item?.doctorsId?._id}
                                        >{`${item?.doctorsId?.Firstname} ${item?.doctorsId?.Lastname}`}</option>
                                      );
                                    })}
                                  </Form.Select>
                                </span>
                              </p>
                              <div className="d-flex gap-3 mt-3 align-items-center">
                                <p>Medical Condition/Diagnosis :</p>
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "683px" }}
                                    value={Diagnosis}
                                    onChange={(e) =>
                                      setDiagnosis(e.target.value)
                                    }
                                    placeholder="Enter Medical Condition/Diagnosis"
                                  />
                                </span>
                              </div>
                              <div className="d-flex gap-3 mt-3 align-items-center">
                                <p>Proposed operative Procedure:</p>
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "684px" }}
                                    value={OperativeProce}
                                    onChange={(e) =>
                                      setOperativeProce(e.target.value)
                                    }
                                    placeholder="Enter Proposed operative Procedure"
                                  />
                                </span>{" "}
                              </div>
                              <div className="mt-3">
                                I/We, (the relatives/legal guardian of) Mr./Mrs
                                &nbsp;&nbsp;
                                <span>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    style={{ width: "200px" }}
                                    value={RealivesName}
                                    onChange={(e) =>
                                      setRealivesName(e.target.value)
                                    }
                                  />
                                </span>
                                &nbsp;&nbsp; who is admitted on{" "}
                                <span>
                                  <input
                                    type="date"
                                    className="vi_0"
                                    style={{ width: "200px" }}
                                    value={Date0}
                                    onChange={(e) => setDate(e.target.value)}
                                    min={new Date().toISOString().split("T")[0]}
                                  />
                                </span>
                                &nbsp;&nbsp; have been explained in the
                                languages understood by me/us, about the pros &
                                cons of the operation and risks involved during
                                and after the surgery, and that the procedure
                                carries a higher risk than the usual cases.
                                <br />
                                <br />
                                I/We, have been explained in detail about the
                                nature of the surgery/procedure, the possible
                                benefits and complications. I/We have been
                                explained that this case carries a higher risk
                                than the usual and the reasons for the same.
                                During the course of the surgical procedure,
                                circumstances may arise or a condidtion may be
                                found which may require suspension or extension
                                of planned procedure or necessary performance of
                                an alternative procedure.
                                <br />
                                <br />
                                I/We, have been informed the high risk involved
                                in medical procedures which might necessitate
                                admission to ICU/NICU/Mecanial
                                Ventilation/Endotracheal intubation Lumbar
                                puncture/Bone marrow aspiration, Intercostal
                                drainage, Arterial Central Dialysis, line,
                                Exchange transfusion, FNAC Biopsy etc.
                                <br />
                                <br />
                                I/We have beeen informed that the operation
                                (s)/Procedures (s) involved the risk of
                                unsuccessful result,complication,temporary or
                                permanent injury or disability and even fatality
                                form known or unforeseen causes. No guarantee or
                                promises have been made to me/us concerning the
                                results of the procedure or treatment.
                                <br />
                                <br />
                                I/We, understood that I/We, have the right to
                                withhold consent for the procedure/surgery I/We.
                                also understand that I/We, have a right to
                                obtain a second opinion transfer to a different
                                centre and the risk involved in such a decision.
                                <br />
                                Knowing all the above mentioned facts / We, give
                                my/our Risk Consent for the above mentioned
                                surgery/Procedure.
                                <br />
                                <br />
                                I/We also indemnify the hospital, the concerned
                                doctors and the hospital staff in case of any
                                adverse consequences arising from the surgery.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2" style={{ padding: "10px" }}>
                        <Table bordered>
                          <thead>
                            <tr>
                              <th></th>
                              <th>Name</th>
                              <th>Signature</th>
                              <th>Date</th>
                              <th>Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Patient/ Patient Surrogate</td>
                              <td>
                                <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "161px" }}
                                  value={`${userdetail?.Firstname} ${userdetail?.Lastname}`}
                                  // onChange={(e) =>
                                  //   setPatientSurrogate(e.target.value)
                                  // }
                                />
                              </td>
                              <td>
                                {!signature1 ? (
                                  <div
                                    style={{
                                      border: "1px solid #dee2e6",
                                      margin: "10px",
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
                                  <img src={signature1} alt="Signature" />
                                )}
                              </td>
                              <td>
                                <input
                                  type="date"
                                  className="vi_0"
                                  value={Date2}
                                  onChange={(e) => setDate2(e.target.value)}
                                  min={new Date().toISOString().split("T")[0]}
                                />
                              </td>
                              <td>
                                <input
                                  type="time"
                                  className="vi_0"
                                  value={Time1}
                                  onChange={(e) => setTime1(e.target.value)}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Witness</td>
                              <td>
                                <input
                                  type="text"
                                  className="vi_0"
                                  value={Witness1}
                                  onChange={(e) => setWitness1(e.target.value)}
                                  placeholder="Enter Witness Name"
                                />
                              </td>
                              <td>
                                {!WitnessSign ? (
                                  <div
                                    style={{
                                      border: "1px solid #dee2e6",
                                    }}
                                  >
                                    <SignatureCanvas
                                      ref={sigCanvas3}
                                      penColor="black"
                                      canvasProps={{
                                        width: 180,
                                        height: 100,
                                        className: "sigCanvas",
                                      }}
                                    />
                                    <button onClick={clear3}>Clear</button>
                                    <button onClick={save3}>Save</button>
                                  </div>
                                ) : (
                                  <img src={WitnessSign} alt="Signature" />
                                )}
                              </td>
                              <td>
                                <input
                                  type="date"
                                  className="vi_0"
                                  value={Date3}
                                  onChange={(e) => setDate3(e.target.value)}
                                  min={new Date().toISOString().split("T")[0]}
                                />
                              </td>
                              <td>
                                <input
                                  type="time"
                                  className="vi_0"
                                  value={Time2}
                                  onChange={(e) => setTime2(e.target.value)}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Doctor</td>
                              <td>
                                <Form.Select
                                  className="vi_0"
                                  onChange={(e) => setDoctor2(e.target.value)}
                                >
                                  <option>Select Doctor</option>
                                  {userdetail?.assigndocts?.map((item) => {
                                    return (
                                      <option
                                        value={item?.doctorsId?._id}
                                      >{`${item?.doctorsId?.Firstname} ${item?.doctorsId?.Lastname}`}</option>
                                    );
                                  })}
                                </Form.Select>
                              </td>
                              <td>
                                {!signature ? (
                                  <div
                                    style={{
                                      border: "1px solid #dee2e6",
                                    }}
                                  >
                                    <SignatureCanvas
                                      ref={sigCanvas}
                                      penColor="black"
                                      canvasProps={{
                                        width: 180,
                                        height: 100,
                                        className: "sigCanvas",
                                      }}
                                    />
                                    <button onClick={clear}>Clear</button>
                                    <button onClick={save}>Save</button>
                                  </div>
                                ) : (
                                  <img src={signature} alt="Signature" />
                                )}
                              </td>
                              <td>
                                <input
                                  type="date"
                                  className="vi_0"
                                  value={Date4}
                                  onChange={(e) => setDate4(e.target.value)}
                                  min={new Date().toISOString().split("T")[0]}
                                />
                              </td>
                              <td>
                                <input
                                  type="time"
                                  className="vi_0"
                                  value={Time3}
                                  onChange={(e) => setTime3(e.target.value)}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Relative/Legal_guardian (relationship with
                                patient)
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "161px" }}
                                  value={Guardian1}
                                  onChange={(e) => setGuardian1(e.target.value)}
                                  placeholder="Enter Legal_guardian"
                                />
                              </td>
                              <td>
                                {!LegalGuardian ? (
                                  <div
                                    style={{
                                      border: "1px solid #dee2e6",
                                    }}
                                  >
                                    <SignatureCanvas
                                      ref={sigCanvas4}
                                      penColor="black"
                                      canvasProps={{
                                        width: 180,
                                        height: 100,
                                        className: "sigCanvas",
                                      }}
                                    />
                                    <button onClick={clear4}>Clear</button>
                                    <button onClick={save4}>Save</button>
                                  </div>
                                ) : (
                                  <img src={LegalGuardian} alt="Signature" />
                                )}
                              </td>
                              <td>
                                <input
                                  type="date"
                                  className="vi_0"
                                  value={Date5}
                                  onChange={(e) => setDate5(e.target.value)}
                                  min={new Date().toISOString().split("T")[0]}
                                />
                              </td>
                              <td>
                                <input
                                  type="time"
                                  className="vi_0"
                                  value={Time4}
                                  onChange={(e) => setTime4(e.target.value)}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                    <div className="mt-2 d-flex justify-content-center">
                      <Button onClick={() => GeneralConsentForm()}>
                        Submit
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {btn4 ? (
                    <>
                      <div className="mt-2 d-dlex text-center gap-2">
                        <h3>{ConsentFormName}</h3>
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
                            height: "auto",
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
                              <h4
                                className="fw-bold"
                                style={{ fontSize: "25px" }}
                              >
                                JANANI MULTISPECIALITY HOSPITAL AND RESEARCH
                                CENTER
                              </h4>
                              <h6
                                className="fw-bold"
                                style={{ fontSize: "19px" }}
                              >
                                Beside Canara Bank, Jalanagar Main Road, K. K.
                                Colony, Vijaypura-586109
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
                              Consent For Anesthesia / Sedation
                            </h6>
                          </div>
                          <div
                            style={{
                              padding: "30px",
                              textAlign: "justify",
                            }}
                          >
                            <div className="container">
                              <div
                                className="row"
                                style={{ border: "1px solid #20958C" }}
                              >
                                <div className="col-md-4 consentformhd">
                                  <b>Patient Name : </b>
                                  <span>
                                    {`${userdetail?.Firstname} ${userdetail?.Lastname}`}
                                  </span>
                                </div>
                                <div className="col-md-4 consentformhd">
                                  <b>Date : </b>
                                  <span>
                                    {moment(userdetail?.createdAt).format(
                                      "DD-MM-YYYY"
                                    )}
                                  </span>
                                </div>
                                <div className="col-md-4 consentformhd">
                                  <b>Age :</b> <span>{ageOutput}</span>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-4 consentformhd">
                                  <b>OP No : </b> <span>4546fgf</span>
                                </div>
                                <div className="col-md-4 consentformhd">
                                  <b>IP No :</b> <span>asdads34</span>
                                </div>
                                <div className="col-md-4 consentformhd">
                                  <b>Sex : </b>
                                  <span>{userdetail?.Gender}</span>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12 consentformhd">
                                  <b>Diagnosis : </b>
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "845px" }}
                                      value={Diagnosis}
                                      onChange={(e) =>
                                        setDiagnosis(e.target.value)
                                      }
                                      placeholder="Enter Diagnosis Details"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12 consentformhd">
                                  <b> Operative Procedure/ Operation : </b>
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "655px" }}
                                      value={OperativeProce}
                                      onChange={(e) =>
                                        setOperativeProce(e.target.value)
                                      }
                                      placeholder="Enter Operative Procedure/ Operation "
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12 consentformhd">
                                  <b>Type of Anesthesia : </b>
                                  <sapn>
                                    <Checkbox
                                      onChange={(e) =>
                                        setTypeofAnesthesia(
                                          e.target.checked ? "Local" : ""
                                        )
                                      }
                                      checked={TypeofAnesthesia === "Local"}
                                      name="Anesthesia"
                                    />{" "}
                                    Local /
                                    <Checkbox
                                      onChange={(e) =>
                                        setTypeofAnesthesia(
                                          e.target.checked ? "General" : ""
                                        )
                                      }
                                      checked={TypeofAnesthesia === "General"}
                                      name="Anesthesia"
                                    />{" "}
                                    General /
                                    <Checkbox
                                      onChange={(e) =>
                                        setTypeofAnesthesia(
                                          e.target.checked ? "Spinal" : ""
                                        )
                                      }
                                      checked={TypeofAnesthesia === "Spinal"}
                                      name="Anesthesia"
                                    />{" "}
                                    Spinal /
                                    <Checkbox
                                      onChange={(e) =>
                                        setTypeofAnesthesia(
                                          e.target.checked ? "Epidural" : ""
                                        )
                                      }
                                      checked={TypeofAnesthesia === "Epidural"}
                                      name="Anesthesia"
                                    />{" "}
                                    Epidural /
                                    <Checkbox
                                      onChange={(e) =>
                                        setTypeofAnesthesia(
                                          e.target.checked ? "Never Block" : ""
                                        )
                                      }
                                      checked={
                                        TypeofAnesthesia === "Never Block"
                                      }
                                      name="Anesthesia"
                                    />{" "}
                                    Never Block /
                                    <Checkbox
                                      onChange={(e) =>
                                        setTypeofAnesthesia(
                                          e.target.checked ? "Combined" : ""
                                        )
                                      }
                                      checked={TypeofAnesthesia === "Combined"}
                                      name="Anesthesia"
                                    />{" "}
                                    Combined /
                                    <Checkbox
                                      onChange={(e) =>
                                        setTypeofAnesthesia(
                                          e.target.checked ? "MAC" : ""
                                        )
                                      }
                                      checked={TypeofAnesthesia === "MAC"}
                                      name="Anesthesia"
                                    />{" "}
                                    MAC /
                                  </sapn>
                                </div>
                              </div>
                              <div className="row">
                                <div
                                  className="col-md-12 "
                                  style={{
                                    border: "1px solid #20958C",
                                  }}
                                >
                                  <div
                                    className="mt-3"
                                    style={{ fontSize: "17px" }}
                                  >
                                    I,{" "}
                                    <span>
                                      <input
                                        type="text"
                                        className="vi_0"
                                        style={{ width: "301px" }}
                                        value={`${userdetail?.Firstname} ${userdetail?.Lastname}`}
                                      />
                                    </span>
                                    &nbsp; (Patient Name), give my full consent
                                    out of my own free will to undergo the
                                    following surgery / procedure&nbsp;
                                    <span>
                                      <input
                                        className="vi_0 mt-2"
                                        style={{ width: "331px" }}
                                        value={NameOfSurgery}
                                        onChange={(e) =>
                                          setNameOfSurgery(e.target.value)
                                        }
                                      placeholder="Enter Surgery Name"
                                      />      
                                      &nbsp; at Janani Multispeciality Hospital
                                      I understand that the above mentioned
                                      procedure necessitates the administration
                                      of local/sedation/ regional/general
                                      anesthesia or any combination there of to
                                      provide the required anesthesia service.
                                    </span>{" "}
                                  </div>

                                  <div
                                    style={{
                                      fontSize: "17px",
                                      marginTop: "10px",
                                    }}
                                  >
                                    I, understand that anesthetic agent zould be
                                    administered by injecting in to the
                                    bloodstream (IV LINE), breathed in to the
                                    lungs, myected through a needle/catheter
                                    placed either directly in to the spinal
                                    canal er immediate outside the spinal canal
                                    block is achieved by injecting the
                                    anesthetic agent near the nerves.
                                  </div>
                                  <div
                                    style={{
                                      fontSize: "17px",
                                      marginTop: "10px",
                                    }}
                                  >
                                    I, undentand results and effects of
                                    anesthesia depends on the type administered
                                    and it decreasedless of feeling/numbness,
                                    loss of movement to tatal unconscious state.
                                    <div className="mt-2">
                                      I, have been explained that all forms of
                                      anesthesia invalve some risks and no
                                      guarantees or promises can the results of
                                      the procedure/treatments, I understand
                                      that there of aesthesia Theses include
                                      Bruising, pain made concerning some
                                      infrequent complications that can occur
                                      due to use ome injuryst the side of
                                      injections, temporary breathing
                                      difficulties, temporary nerve damage
                                      muscle paint, asthmatic reactions,
                                      headaches, the possibility of sensation
                                      during the operation (especially with
                                      Caesarean section and some emergency
                                      procedures), damage to teeth and dental
                                      prostheses, lip and tongue, temperare, but
                                      nous complications including, heart
                                      attack, stroke, severe allergic ar
                                      sensitivity reactions, brain camage,
                                      kidney o failure, lung damage, paraplegia
                                      or quadriplegie, permanent nerve e or
                                      blood vessel damage, eye eye injury,
                                      damage, to the larynx Ivoice boa) and
                                      vocal cards perumania and infaction bom
                                      blood transfusion The possibility of more
                                      serious complications including death is
                                      quite remote, but it does exists.
                                    </div>
                                    <div className="mt-2">
                                      I, have been explained language known &
                                      understood by about the nature of the
                                      surgery/procedure, type of anarsthesia
                                      used, and it's benefits, and costs, inks
                                      associated with it, other alternatives and
                                      its prognosis.
                                    </div>
                                    <div className="mt-2">
                                      I, understand that local anaesthesia with
                                      or without sedation may not be successful
                                      and therefor an altenative method may be
                                      used as deemend necessary.
                                    </div>
                                    <div>
                                      I hereby absolve Janani Multispeciailty
                                      Hospital.
                                      <span>
                                        <input
                                          value={NameOfSurgery2}
                                          onChange={(e) =>
                                            setNameOfSurgery2(e.target.value)
                                          }
                                          className="vi_0"
                                          style={{ width: "331px" }}
                                        />
                                      </span>
                                      and its surgical team & hospital staff of
                                      anyliability for consequences arising
                                      because of the above-mentioned
                                      surgery/procedure.
                                    </div>
                                    <div className="mt-2">
                                      Consent of Patient
                                      Rapresentative/Surrogate
                                    </div>
                                    <div>
                                      The patient is unable to give consent
                                      because he/she is minor/Unconscious{" "}
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "331px" }}
                                          value={`${userdetail?.Firstname} ${userdetail?.Lastname}`}
                                        />
                                      </span> &nbsp;
                                      hence I,{" "}
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "331px" }}
                                          value={userdetail?.relativeName}
                                        />
                                      </span>{" "}
                                      (Name /relationship with Patient)
                                      therefore give my consent an behalf of the
                                      patient after discussion with the Doctor
                                      for the above mentioned
                                      Surgery/operative/Invasive Proceudre.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-2" style={{ padding: "10px" }}>
                            <Table bordered>
                              <thead>
                                <tr>
                                  <th></th>
                                  <th>Name</th>
                                  <th>Signature</th>
                                  <th>Date</th>
                                  <th>Time</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Patient/ Patient Surrogate</td>
                                  <td>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                      value={`${userdetail?.Firstname} ${userdetail?.Lastname}`}         
                                    />
                                  </td>
                                  <td>
                                    {!signature1 ? (
                                      <div
                                        style={{
                                          border: "1px solid #dee2e6",
                                          margin: "10px",
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
                                      <img src={signature1} alt="Signature" />
                                    )}
                                  </td>
                                  <td>
                                    <input
                                      type="date"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                      value={Date2}
                                      onChange={(e) => setDate2(e.target.value)}
                                      min={
                                        new Date().toISOString().split("T")[0]
                                      }
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="time"
                                      className="vi_0"
                                      value={Time1}
                                      onChange={(e) => setTime1(e.target.value)}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>Witness</td>
                                  <td>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                      value={Witness1}
                                      onChange={(e) =>
                                        setWitness1(e.target.value)
                                      }
                                      placeholder="Enter Witness Name"
                                    />
                                  </td>
                                  <td>
                                    {!WitnessSign ? (
                                      <div
                                        style={{
                                          border: "1px solid #dee2e6",
                                        }}
                                      >
                                        <SignatureCanvas
                                          ref={sigCanvas3}
                                          penColor="black"
                                          canvasProps={{
                                            width: 180,
                                            height: 100,
                                            className: "sigCanvas",
                                          }}
                                        />
                                        <button onClick={clear3}>Clear</button>
                                        <button onClick={save3}>Save</button>
                                      </div>
                                    ) : (
                                      <img src={WitnessSign} alt="Signature" />
                                    )}
                                  </td>
                                  <td>
                                    <input
                                      type="date"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                      value={Date3}
                                      onChange={(e) => setDate3(e.target.value)}
                                      min={
                                        new Date().toISOString().split("T")[0]
                                      }
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="time"
                                      className="vi_0"
                                      value={Time2}
                                      onChange={(e) => setTime2(e.target.value)}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>Doctor</td>
                                  <td>
                                    <Form.Select
                                      className="vi_0"
                                      onChange={(e) =>
                                        setDoctor2(e.target.value)
                                      }
                                    >
                                      <option>Select Doctor</option>
                                      {userdetail?.assigndocts?.map((item) => {
                                        return (
                                          <option
                                            value={item?.doctorsId?._id}
                                          >{`${item?.doctorsId?.Firstname} ${item?.doctorsId?.Lastname}`}</option>
                                        );
                                      })}
                                    </Form.Select>
                                  </td>
                                  <td>
                                    {!signature ? (
                                      <div
                                        style={{
                                          border: "1px solid #dee2e6",
                                        }}
                                      >
                                        <SignatureCanvas
                                          ref={sigCanvas}
                                          penColor="black"
                                          canvasProps={{
                                            width: 180,
                                            height: 100,
                                            className: "sigCanvas",
                                          }}
                                        />
                                        <button onClick={clear}>Clear</button>
                                        <button onClick={save}>Save</button>
                                      </div>
                                    ) : (
                                      <img src={signature} alt="Signature" />
                                    )}
                                  </td>
                                  <td>
                                    <input
                                      type="date"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                      value={Date4}
                                      onChange={(e) => setDate4(e.target.value)}
                                      min={
                                        new Date().toISOString().split("T")[0]
                                      }
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="time"
                                      className="vi_0"
                                      value={Time3}
                                      onChange={(e) => setTime3(e.target.value)}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Relative/Legal_guardian (relationship with
                                    patient)
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                      value={Guardian1}
                                      onChange={(e) =>
                                        setGuardian1(e.target.value)
                                      }
                                      placeholder="Enter Legal_guardian"
                                    />
                                  </td>
                                  <td>
                                    {!LegalGuardian ? (
                                      <div
                                        style={{
                                          border: "1px solid #dee2e6",
                                        }}
                                      >
                                        <SignatureCanvas
                                          ref={sigCanvas4}
                                          penColor="black"
                                          canvasProps={{
                                            width: 180,
                                            height: 100,
                                            className: "sigCanvas",
                                          }}
                                        />
                                        <button onClick={clear4}>Clear</button>
                                        <button onClick={save4}>Save</button>
                                      </div>
                                    ) : (
                                      <img
                                        src={LegalGuardian}
                                        alt="Signature"
                                      />
                                    )}
                                  </td>
                                  <td>
                                    <input
                                      type="date"
                                      className="vi_0"
                                      value={Date5}
                                      onChange={(e) => setDate5(e.target.value)}
                                      min={
                                        new Date().toISOString().split("T")[0]
                                      }
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="time"
                                      className="vi_0"
                                      value={Time4}
                                      onChange={(e) => setTime4(e.target.value)}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="mt-2 d-flex justify-content-center">
                          <Button onClick={() => GeneralConsentForm()}>
                            Submit
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default IPDConsentFroms;
