import { Checkbox } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const NursingAssessOnAdmit = () => {
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

  // NURSING ASSESSMENT ON ADMISSION

  const [DTNursingInitialAssesment, setDTNursingInitialAssesment] = useState("");
  const [ConsentSign, setConsentSign] = useState("");
  const [VSTemp, setVSTemp] = useState("");
  const [VSPulse, setVSPulse] = useState("");
  const [Resp, setResp] = useState("");
  const [BP, setBP] = useState("");
  const [Weight, setWeight] = useState("");
  const [BloodGroup, setBloodGroup] = useState("");
  const [Spo2, setSpo2] = useState("");
  const [GRBS, setGRBS] = useState("");
  const [Complaints, setComplaints] = useState("");
  const [Oriented, setOriented] = useState("");
  const [Speech1, setSpeech1] = useState("");
  const [Speech2, setSpeech2] = useState("");
  const [Consciousness, setConsciousness] = useState("");
  const [Impairment, setImpairment] = useState("");
  const [Extremity, setExtremity] = useState("");
  const [Pupils, setPupils] = useState("");
  const [HearingImpairment, setHearingImpairment] = useState("");
  const [Pain, setPain] = useState("");
  const [Location1, setLocation1] = useState("");
  const [PainScale, setPainScale] = useState();
  const [Airway, setAirway] = useState("");
  const [Dyspnea, setDyspnea] = useState("");
  const [Wheezing, setWheezing] = useState("");
  const [Hemoptysis, setHemoptysis] = useState("");
  const [Cough, setCough] = useState("");
  const [Sputum, setSputum] = useState("");
  const [Edema , setEdema ] = useState("");
  const [Loactionofedema , setLoactionofedema ] = useState("");
  const [Skinperfusion , setSkinperfusion ] = useState("");
  const [Capillaryrefill , setCapillaryrefill ] = useState("");
  const [Pacemaker , setPacemaker ] = useState("");
  const [SkinColor , setSkinColor ] = useState("");
  const [Turgor , setTurgor ] = useState("");
  const [Temperature , setTemperature ] = useState("");
  const [Mucousmembrane , setMucousmembrane ] = useState("");
  const [Moisture , setMoisture ] = useState("");
  const [Condition , setCondition ] = useState("");
  const [PressureSore , setPressureSore ] = useState("");
  const [Stage, setStage] = useState("");
  const [LossofAppetite, setLossofAppetite] = useState("");
  const [Abdomen, setAbdomen] = useState("");
  const [Swallowingdiffulty, setSwallowingdiffulty] = useState("");
  const [Dysuria, setDysuria] = useState("");
  const [Haemeturia, setHaemeturia] = useState("");
  const [Frequency, setFrequency] = useState("");
  const [FoleyCatheter, setFoleyCatheter] = useState("");
  const [Incontinence, setIncontinence] = useState("");
  const [Insertedon, setInsertedon] = useState("");
  const [LMP, setLMP] = useState("");
  const [EDD, setEDD] = useState("");
  const [DatingScan, setDatingScan] = useState("");
  const [POG, setPOG] = useState("");
  const [AnyDrugAllergy, setAnyDrugAllergy] = useState("");
  const [formfillTime, setformfillTime] = useState("");
  const [FormfillDate, setFormfillDate] = useState("");
 


  const submitNursingAssesment = async () => {
    try {
      const config = {
        url: "/addnursingassessment",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "content-type": "application/json" },
        data: {
          patientId: patientdetails?._id,
          causeId: cause?._id,
          DTNursingInitialAssesment:DTNursingInitialAssesment,
          ConsentSign:ConsentSign,
          VSTemp:VSTemp,
          VSPulse:VSPulse,
          Resp:Resp,
          BP:BP,
          Weight:Weight,
          BloodGroup:BloodGroup,
          Spo2:Spo2,
          GRBS:GRBS,
          Complaints:Complaints,
          Oriented:Oriented,
          Speech1:Speech1,
          Speech2:Speech2,
          Consciousness:Consciousness,
          Impairment:Impairment,
          Extremity:Extremity,
          Pupils:Pupils,
          HearingImpairment:HearingImpairment,
          Pain:Pain,
          Location1:Location1,
          PainScale:PainScale,
          Airway:Airway,
          Dyspnea:Dyspnea,
          Wheezing:Wheezing,
          Hemoptysis:Hemoptysis,
          Cough:Cough,
          Sputum:Sputum,
          Edema:Edema,
          Loactionofedema:Loactionofedema,
          Skinperfusion:Skinperfusion,
          Capillaryrefill:Capillaryrefill,
          Pacemaker:Pacemaker,
          SkinColor:SkinColor,
          Turgor:Turgor,
          Temperature:Temperature,
          Mucousmembrane:Mucousmembrane,
          Moisture:Moisture,
          Condition:Condition,
          PressureSore:PressureSore,
          Stage:Stage,
          LossofAppetite:LossofAppetite,
          Abdomen:Abdomen,
          Swallowingdiffulty:Swallowingdiffulty,
          Dysuria:Dysuria,
          Haemeturia:Haemeturia,
          Frequency:Frequency,
          FoleyCatheter:FoleyCatheter,
          Incontinence:Incontinence,
          Insertedon:Insertedon,
          LMP:LMP,
          EDD:EDD,
          DatingScan:DatingScan,
          POG:POG,
          AnyDrugAllergy:AnyDrugAllergy,
          formfillTime:formfillTime,
          FormfillDate:FormfillDate,
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
        {" "}
        <h6
          className="fw-bold mt-2"
          style={{
            color: "#20958C",
            fontSize: "30px",
          }}
        >
          NURSING ASSESSMENT ON ADMISSION
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
          <div
            className="text-center"
            style={{
              borderBottom: "1px solid #20958C",
              width: "100%",
              textAlign: "center",
            }}
          ></div>
          <div className="text-center mt-1">
            {" "}
            <h6
              className="fw-bold mt-2"
              style={{
                color: "#20958C",
                fontSize: "30px",
              }}
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
                    Patient Name:{" "}
                    {`${patientdetails?.Firstname} ${patientdetails?.Lastname} `}
                  </td>

                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                    UHID No : {patientdetails?.PatientId}
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} style={{ border: "2px  solid #20958C" }}>
                    Date & Time of Nursing Initial Assessment:
                    <input
                      type="datetime-local"
                      value={DTNursingInitialAssesment}
                      onChange={(e) =>
                        setDTNursingInitialAssesment(e.target.value)
                      }
                      className="vi_0"
                      style={{ width: "240px" }}
                      min={new Date().toISOString().slice(0, 16)}
                    />
                  </td>
                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                    General Consent Signed: Yes
                    <Checkbox
                      onChange={(e) =>
                        setConsentSign(e.target.checked ? "YES" : "")
                      }
                      checked={ConsentSign === "YES"}
                      name="ConsentSign"
                    />
                    No
                    <Checkbox
                      onChange={(e) =>
                        setConsentSign(e.target.checked ? "NO" : "")
                      }
                      checked={ConsentSign === "NO"}
                      name="ConsentSign"
                    />
                  </td>
                </tr>

                <tr>
                  <th
                    style={{
                      textAlign: "center",
                      width: "20%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    Vital Signs
                  </th>
                  <td style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ width: "45%" }}>Temp :</div>
                    <input
                      type="text"
                      className="vi_0"
                      value={VSTemp}
                      onChange={(e) => setVSTemp(e.target.value)}
                    />
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    <div className="d-flex gap-1 align-items-center">
                      <div>Pulse:</div>
                      <input
                        type="text"
                        className="vi_0"
                        value={VSPulse}
                        onChange={(e) => setVSPulse(e.target.value)}
                      />
                      <div>/Min</div>
                    </div>
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    <div className="d-flex gap-1 align-items-center">
                      <div>Resp:</div>
                      <input
                        type="text"
                        className="vi_0"
                        value={Resp}
                        onChange={(e) => setResp(e.target.value)}
                      />
                      <div>/Min</div>
                    </div>
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    <div className="d-flex align-items-center">
                      <div style={{ width: "27%" }}>BP :</div>
                      <input
                        value={BP}
                        onChange={(e) => setBP(e.target.value)}
                        type="text"
                        className="vi_0"
                      />
                    </div>
                  </td>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Height
                  </th>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Weight
                    <input
                      type="text"
                      value={Weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="vi_0"
                    />
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Blood Group
                    <input
                      value={BloodGroup}
                      onChange={(e) => setBloodGroup(e.target.value)}
                      type="text"
                      className="vi_0"
                    />
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Spo2(if required)
                    <input
                      value={Spo2}
                      onChange={(e) => setSpo2(e.target.value)}
                      type="text"
                      className="vi_0"
                    />
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    GRBS(if required)
                    <input
                      value={GRBS}
                      onChange={(e) => setGRBS(e.target.value)}
                      type="text"
                      className="vi_0"
                    />
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ border: "2px  solid #20958C" }}>
                    Complaints during admission and it's duration
                  </th>
                  <td colSpan={4} style={{ border: "2px  solid #20958C" }}>
                    <textarea
                      value={Complaints}
                      onChange={(e) => setComplaints(e.target.value)}
                      rows={3}
                      className="vi_0"
                    />
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ border: "2px  solid #20958C" }}>Neurological</th>
                  <td colSpan={4} style={{ border: "2px  solid #20958C" }}>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        Oriented : Yes
                        <Checkbox 
                        onChange={(e)=>setOriented(e.target.checked ? "YES":"")}
                        checked={Oriented==="YES"}
                        /> No
                        <Checkbox 
                         onChange={(e)=>setOriented(e.target.checked ? "NO":"")}
                         checked={Oriented==="NO"}
                        />
                      </td>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        Speech:
                        <br />
                        Clear : <Checkbox
                         onChange={(e)=>setSpeech1(e.target.checked ? "Clear":"")}
                         checked={Speech1==="Clear"}
                        /> <br />
                        Slurred : <Checkbox 
                         onChange={(e)=>setSpeech1(e.target.checked ? "Slurred":"")}
                         checked={Speech1==="Slurred"}
                        />
                      </td>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        Speech:
                        <br />
                        Clear : <Checkbox 
                         onChange={(e)=>setSpeech2(e.target.checked ? "Clear":"")}
                         checked={Speech2==="Clear"}
                        /> <br />
                        Slurred : <Checkbox 
                          onChange={(e)=>setSpeech2(e.target.checked ? "Slurred":"")}
                          checked={Speech2==="Slurred"}
                        />
                      </td>
                    </tr>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        <b>Level of Consciousness </b>
                        Conscious <Checkbox
                          onChange={(e)=>setConsciousness(e.target.checked ? "Conscious":"")}
                          checked={Consciousness==="Conscious"}
                        />
                        Semiconscious <Checkbox 
                          onChange={(e)=>setConsciousness(e.target.checked ? "Semiconscious":"")}
                          checked={Consciousness==="Semiconscious"}
                        />
                        Unconscious <Checkbox 
                          onChange={(e)=>setConsciousness(e.target.checked ? "Unconscious":"")}
                          checked={Consciousness==="Unconscious"}
                        />
                      </td>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        <b>Visual Impairment</b> <br />
                        None <Checkbox 
                          onChange={(e)=>setImpairment(e.target.checked ? "None":"")}
                          checked={Impairment==="None"}
                        /> <br />
                        Wear Spectacles <Checkbox 
                          onChange={(e)=>setImpairment(e.target.checked ? "Wear Spectacles":"")}
                          checked={Impairment==="Wear Spectacles"}
                        /> <br />
                        BLind -L-R
                        <Checkbox 
                          onChange={(e)=>setImpairment(e.target.checked ? "BLind -L-R":"")}
                          checked={Impairment==="BLind -L-R"}
                        />
                      </td>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        <b>Extremity strength </b>
                        <br />
                        Equal
                        <Checkbox 
                          onChange={(e)=>setExtremity(e.target.checked ? "Equal":"")}
                          checked={Extremity==="Equal"}
                        />
                        <br />
                        Unequal
                        <Checkbox 
                          onChange={(e)=>setExtremity(e.target.checked ? "Unequal":"")}
                          checked={Extremity==="Unequal"}
                        />
                      </td>
                    </tr>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        <b>Pupils</b> <br />
                        Equal <Checkbox 
                          onChange={(e)=>setPupils(e.target.checked ? "Equal":"")}
                          checked={Pupils==="Equal"}
                        />
                        <br />
                        Unqual <Checkbox 
                          onChange={(e)=>setPupils(e.target.checked ? "Unqual":"")}
                          checked={Pupils==="Unqual"}
                        />
                        <br />
                        Reactive <Checkbox 
                          onChange={(e)=>setPupils(e.target.checked ? "Reactive":"")}
                          checked={Pupils==="Reactive"}
                        />
                        <br />
                        Sluggish <Checkbox 
                          onChange={(e)=>setPupils(e.target.checked ? "Sluggish":"")}
                          checked={Pupils==="Sluggish"}
                        />
                      </td>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        <b>Hearing Impairment </b> <br />
                        None
                        <Checkbox 
                          onChange={(e)=>setHearingImpairment(e.target.checked ? "None":"")}
                          checked={HearingImpairment==="None"}
                        />
                        <br />
                        Uses Aids <Checkbox 
                          onChange={(e)=>setHearingImpairment(e.target.checked ? "Uses Aids":"")}
                          checked={HearingImpairment==="Uses Aids"}
                        />
                        <br />
                        Deaf-L-R
                        <Checkbox 
                          onChange={(e)=>setHearingImpairment(e.target.checked ? "Deaf-L-R":"")}
                          checked={HearingImpairment==="Deaf-L-R"}
                        />
                      </td>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        <b>Pain :</b> Yes
                        <Checkbox 
                          onChange={(e)=>setPain(e.target.checked ? "Yes":"")}
                          checked={Pain==="Yes"}
                        />
                        No.
                        <Checkbox 
                          onChange={(e)=>setPain(e.target.checked ? "No":"")}
                          checked={Pain==="No"}
                        />
                        <br />
                        Location:
                        <input 
                        value={Location1}
                        onChange={(e)=>setLocation1(e.target.value)}
                        type="text" className="vi_0" />
                      </td>
                    </tr>
                  </td>
                </tr>

                <tr>
                  <th
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                    }}
                  >
                    Pain Scale
                  </th>
                  <th colSpan={4} style={{ border: "2px  solid #20958C" }}>
                    <div className="d-flex justify-content-between">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div >
                        <img
                        onClick={()=>setPainScale(0)}
                          src="/Images/PainScale0.png"
                          alt=""
                          style={{ width: "75px", height: "70px" }}
                        />
                        </div>
                        
                        <span>0</span>
                        <div 
                       
                        style={{ fontSize: "15px", textAlign: "center" }}>
                          No Pain
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <img
                        onClick={()=>setPainScale(2)}
                          src="/Images/PainScale2.png"
                          alt=""
                          style={{ width: "75px", height: "70px" }}
                        />
                        <span>2</span>
                        <div style={{ fontSize: "15px", textAlign: "center" }}>
                          Little Pain
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <img
                         onClick={()=>setPainScale(4)}
                          src="/Images/PainScale4.png"
                          alt=""
                          style={{ width: "75px", height: "70px" }}
                        />
                        <span>4</span>
                        <div style={{ fontSize: "15px", textAlign: "center" }}>
                          Mild Pain
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <img
                         onClick={()=>setPainScale(6)}
                          src="/Images/PainScale6.png"
                          alt=""
                          style={{ width: "75px", height: "70px" }}
                        />
                        <span>6</span>
                        <div style={{ fontSize: "15px", textAlign: "center" }}>
                          Moderate Pain
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <img
                         onClick={()=>setPainScale(8)}
                          src="/Images/PainScale8.png"
                          alt=""
                          style={{ width: "75px", height: "70px" }}
                        />
                        <span>8</span>
                        <div style={{ fontSize: "15px", textAlign: "center" }}>
                          Severe Pain
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <img
                         onClick={()=>setPainScale(10)}
                          src="/Images/PainScale10.png"
                          alt=""
                          style={{ width: "75px", height: "70px" }}
                        />
                        <span>10</span>
                        <div style={{ fontSize: "15px", textAlign: "center" }}>
                          Worst Pain
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <tr
                  style={{
                    textAlign: "center",
                  }}
                >
                  <th style={{ border: "2px  solid #20958C" }}>Respiratory</th>
                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                    <tr
                      style={{
                        textAlign: "center",
                        border: ".5px  solid #20958C",
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <b>Airway:</b>

                        <div className="d-flex align-items-center">
                          Clear <Checkbox
                            onChange={(e)=>setAirway(e.target.checked ? "Clear":"")}
                            checked={Airway==="Clear"}
                          />{" "}
                        </div>
                        <div className="d-flex align-items-center">
                          Obstructed <Checkbox 
                            onChange={(e)=>setAirway(e.target.checked ? "Obstructed":"")}
                            checked={Airway==="Obstructed"}
                          />
                        </div>
                      </div>
                    </tr>
                    <tr
                      style={{
                        textAlign: "center",
                        border: ".5px  solid #20958C",
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <b>Dyspnea:</b>

                        <div className="d-flex align-items-center">
                          Present <Checkbox 
                             onChange={(e)=>setDyspnea(e.target.checked ? "Present":"")}
                             checked={Dyspnea==="Present"}
                          />{" "}
                        </div>
                        <div className="d-flex align-items-center">
                          Absent <Checkbox
                             onChange={(e)=>setDyspnea(e.target.checked ? "Absent":"")}
                             checked={Dyspnea==="Absent"}
                          />{" "}
                        </div>
                      </div>
                    </tr>
                    <tr
                      style={{
                        textAlign: "center",
                        border: ".5px  solid #20958C",
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <b>Wheezing:</b>

                        <div className="d-flex align-items-center">
                          Yes <Checkbox 
                            onChange={(e)=>setWheezing(e.target.checked ? "Yes":"")}
                            checked={Wheezing==="Yes"}
                          />{" "}
                        </div>
                        <div className="d-flex align-items-center">
                          No <Checkbox 
                            onChange={(e)=>setWheezing(e.target.checked ? "No":"")}
                            checked={Wheezing==="No"}
                          />{" "}
                        </div>
                      </div>
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
                        Yes 
                        <Checkbox 
                         onChange={(e)=>setHemoptysis(e.target.checked ? "Yes":"")}
                         checked={Hemoptysis==="Yes"}
                        /> No 
                        <Checkbox 
                        onChange={(e)=>setHemoptysis(e.target.checked ? "No":"")}
                        checked={Hemoptysis==="No"}
                        />
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
                        Yes <Checkbox 
                         onChange={(e)=>setCough(e.target.checked ? "Yes":"")}
                         checked={Cough==="Yes"}
                        /> No <Checkbox
                        onChange={(e)=>setCough(e.target.checked ? "No":"")}
                        checked={Cough==="No"}
                        />
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
                        Yes <Checkbox
                         onChange={(e)=>setSputum(e.target.checked ? "Yes":"")}
                         checked={Sputum==="Yes"}
                        /> No <Checkbox 
                        onChange={(e)=>setSputum(e.target.checked ? "No":"")}
                        checked={Sputum==="No"}
                        />
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
                        Present <Checkbox 
                         onChange={(e)=>setEdema(e.target.checked ? "Present":"")}
                         checked={Edema==="Present"}
                        /> Absent <Checkbox 
                        onChange={(e)=>setEdema(e.target.checked ? "Absent":"")}
                        checked={Edema==="Absent"}
                        />
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
                        <input type="text" 
                        value={Loactionofedema}
                        onChange={(e)=>setLoactionofedema(e.target.value)}
                        className="vi_0" />
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
                        Warm
                        <Checkbox 
                         onChange={(e)=>setSkinperfusion(e.target.checked ? "Warm":"")}
                         checked={Skinperfusion==="Warm"}
                        />
                        <br />
                        Dry <Checkbox 
                         onChange={(e)=>setSkinperfusion(e.target.checked ? "Dry":"")}
                         checked={Skinperfusion==="Dry"}
                        />
                        <br />
                        Coll <Checkbox 
                         onChange={(e)=>setSkinperfusion(e.target.checked ? "Coll":"")}
                         checked={Skinperfusion==="Coll"}
                        />
                        <br />
                        Diaphoretic
                        <Checkbox 
                         onChange={(e)=>setSkinperfusion(e.target.checked ? "Diaphoretic":"")}
                         checked={Skinperfusion==="Diaphoretic"}
                        />
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
                        &lt; 3 Secs
                        <Checkbox 
                         onChange={(e)=>setCapillaryrefill(e.target.checked ? "< 3 Secs":"")}
                         checked={Capillaryrefill==="< 3 Secs"}
                        />
                        <br /> &gt;3 Secs 
                        <Checkbox 
                         onChange={(e)=>setCapillaryrefill(e.target.checked ? ">3 Secs":"")}
                         checked={Capillaryrefill===">3 Secs"}
                        />
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
                        Yes <Checkbox 
                         onChange={(e)=>setPacemaker(e.target.checked ? "Yes":"")}
                         checked={Pacemaker==="Yes"}
                        /> No <Checkbox 
                        onChange={(e)=>setPacemaker(e.target.checked ? "No":"")}
                        checked={Pacemaker==="No"}
                        />
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
                          <b>Color : </b> Normal
                          <Checkbox 
                           onChange={(e)=>setSkinColor(e.target.checked ? "Normal":"")}
                           checked={SkinColor==="Normal"}
                          />, Pale <Checkbox 
                          onChange={(e)=>setSkinColor(e.target.checked ? "Pale":"")}
                          checked={SkinColor==="Pale"}
                          /> <br />
                          Flushed <Checkbox 
                           onChange={(e)=>setSkinColor(e.target.checked ? "Flushed":"")}
                           checked={SkinColor==="Flushed"}
                          /> Cyanotic <Checkbox 
                          onChange={(e)=>setSkinColor(e.target.checked ? "Cyanotic":"")}
                          checked={SkinColor==="Cyanotic"}
                          />
                          <br />
                          Jaundiced
                          <Checkbox 
                           onChange={(e)=>setSkinColor(e.target.checked ? "Jaundiced":"")}
                           checked={SkinColor==="Jaundiced"}
                          />
                        </td>
                        <td
                          style={{
                            width: "50%",
                            border: ".5px  solid #20958C",
                          }}
                        >
                          <b>Turgor : </b>
                          Good <Checkbox 
                           onChange={(e)=>setTurgor(e.target.checked ? "Good":"")}
                           checked={Turgor==="Good"}
                          /> Fair <Checkbox 
                          onChange={(e)=>setTurgor(e.target.checked ? "Fair":"")}
                          checked={Turgor==="Fair"}
                          /> Poor <Checkbox 
                          onChange={(e)=>setTurgor(e.target.checked ? "Poor":"")}
                          checked={Turgor==="Poor"}
                          />
                        </td>
                      </tr>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{
                            width: "50%",
                            border: ".5px  solid #20958C",
                          }}
                        >
                          <b>Temp : </b>
                          Cool <Checkbox 
                           onChange={(e)=>setTemperature(e.target.checked ? "Cool":"")}
                           checked={Temperature==="Cool"}
                          /> Warm <Checkbox 
                          onChange={(e)=>setTemperature(e.target.checked ? "Warm":"")}
                          checked={Temperature==="Warm"}
                          /> Hot <Checkbox 
                          onChange={(e)=>setTemperature(e.target.checked ? "Hot":"")}
                          checked={Temperature==="Hot"}
                          />
                        </td>
                        <td
                          style={{
                            width: "50%",
                            border: ".5px  solid #20958C",
                          }}
                        >
                          <b>Mucous membrane : </b> Intact <Checkbox 
                           onChange={(e)=>setMucousmembrane(e.target.checked ? "Intact":"")}
                           checked={Mucousmembrane==="Intact"}
                          /> <br />
                          impaired <Checkbox 
                           onChange={(e)=>setMucousmembrane(e.target.checked ? "impaired":"")}
                           checked={Mucousmembrane==="impaired"}
                          />
                        </td>
                      </tr>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{
                            width: "50%",
                            border: ".5px  solid #20958C",
                          }}
                        >
                          <b>Moisture : </b> Dry <Checkbox 
                           onChange={(e)=>setMoisture(e.target.checked ? "Dry":"")}
                           checked={Moisture==="Dry"}
                          /> Clammy{" "}
                          <Checkbox 
                           onChange={(e)=>setMoisture(e.target.checked ? "Clammy":"")}
                           checked={Moisture==="Clammy"}
                          />
                        </td>
                        <td
                          style={{
                            width: "50%",
                            border: ".5px  solid #20958C",
                          }}
                        >
                          <b>Condition : </b> Pink <Checkbox 
                           onChange={(e)=>setCondition(e.target.checked ? "Pink":"")}
                           checked={Condition==="Pink"}
                          /> <br />
                          Pale
                          <Checkbox 
                           onChange={(e)=>setCondition(e.target.checked ? "Pale":"")}
                           checked={Condition==="Pale"}
                          /> Moist Dry
                          <Checkbox 
                           onChange={(e)=>setCondition(e.target.checked ? "Moist Dry":"")}
                           checked={Condition==="Moist Dry"}
                          />
                        </td>
                      </tr>
                    </div>
                    <div>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{
                            border: "0.5px  solid #20958C",
                            width: "19%",
                          }}
                        >
                          <b>Pressure Sore:</b> <br />
                          present
                          <Checkbox 
                           onChange={(e)=>setPressureSore(e.target.checked ? "present":"")}
                           checked={PressureSore==="present"}
                          />
                          <br />
                          No
                          <Checkbox 
                           onChange={(e)=>setPressureSore(e.target.checked ? "No":"")}
                           checked={PressureSore==="No"}
                          />
                        </td>
                        <td
                          style={{
                            border: "0.5px  solid #20958C",
                            width: "20%",
                          }}
                        >
                          <div>
                            Stage 1 <Checkbox 
                             onChange={(e)=>setStage(e.target.checked ? "Stage 1":"")}
                             checked={Stage==="Stage 1"}
                            />
                          </div>
                          <div>(Red Coloration)</div>
                        </td>
                        <td
                          style={{
                            border: "0.5px  solid #20958C",
                            width: "20%",
                          }}
                        >
                          <div>
                            {" "}
                            Stage II <Checkbox 
                             onChange={(e)=>setStage(e.target.checked ? "Stage II":"")}
                             checked={Stage==="Stage II"}
                            />
                          </div>
                          <div>(Skin Break only)</div>
                        </td>
                        <td
                          style={{
                            border: "0.5px  solid #20958C",
                            width: "20%",
                          }}
                        >
                          <div>
                            {" "}
                            Stage III <Checkbox 
                             onChange={(e)=>setStage(e.target.checked ? "Stage III":"")}
                             checked={Stage==="Stage III"}
                            />
                          </div>
                          <div>(Fat exposed)</div>
                        </td>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          <div>
                            {" "}
                            Stage IV <Checkbox 
                             onChange={(e)=>setStage(e.target.checked ? "Stage IV":"")}
                             checked={Stage==="Stage IV"}
                            />
                          </div>
                          <div>(Muscle/ Bone exposed)</div>
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
                        <b>Loss of Appetite : </b> Yes
                        <Checkbox 
                         onChange={(e)=>setLossofAppetite(e.target.checked ? "Yes":"")}
                         checked={LossofAppetite==="Yes"}
                        />
                        <br /> No
                        <Checkbox 
                         onChange={(e)=>setLossofAppetite(e.target.checked ? "No":"")}
                         checked={LossofAppetite==="No"}
                        />
                        Nausea <Checkbox 
                         onChange={(e)=>setLossofAppetite(e.target.checked ? "Nausea":"")}
                         checked={LossofAppetite==="Nausea"}
                        /> Vomiting <Checkbox 
                        onChange={(e)=>setLossofAppetite(e.target.checked ? "Vomiting":"")}
                        checked={LossofAppetite==="Vomiting"}
                        /> <br />
                        Diarrhoea
                        <Checkbox 
                         onChange={(e)=>setLossofAppetite(e.target.checked ? "Diarrhoea":"")}
                         checked={LossofAppetite==="Diarrhoea"}
                        /> Contipation
                        <Checkbox 
                         onChange={(e)=>setLossofAppetite(e.target.checked ? "Contipation":"")}
                         checked={LossofAppetite==="Contipation"}
                        />
                      </td>
                      <td
                        style={{ width: "33%", border: "0.5px  solid #20958C" }}
                      >
                        <b>Abdomen : </b> Soft
                        <Checkbox 
                         onChange={(e)=>setAbdomen(e.target.checked ? "Soft":"")}
                         checked={Abdomen==="Soft"}
                        /> <br />
                        Firm
                        <Checkbox 
                         onChange={(e)=>setAbdomen(e.target.checked ? "Firm":"")}
                         checked={Abdomen==="Firm"}
                        /> Teacher
                        <Checkbox 
                         onChange={(e)=>setAbdomen(e.target.checked ? "Teacher":"")}
                         checked={Abdomen==="Teacher"}
                        />
                        <br />
                        Distended <Checkbox 
                         onChange={(e)=>setAbdomen(e.target.checked ? "Distended":"")}
                         checked={Abdomen==="Distended"}
                        /> <br />
                        Expelling Flatus <Checkbox 
                         onChange={(e)=>setAbdomen(e.target.checked ? "Expelling Flatus":"")}
                         checked={Abdomen==="Expelling Flatus"}
                        />
                      </td>
                      <td
                        rowSpan={3}
                        style={{ width: "33%", border: "0.5px  solid #20958C" }}
                      >
                        Swallowing diffulty: Yes
                        <Checkbox 
                         onChange={(e)=>setSwallowingdiffulty(e.target.checked ? "Yes":"")}
                         checked={Swallowingdiffulty==="Yes"}
                        />
                        <br /> No
                        <Checkbox 
                         onChange={(e)=>setSwallowingdiffulty(e.target.checked ? "No":"")}
                         checked={Swallowingdiffulty==="No"}
                        />
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
                        <b>Dysuria : </b> Yes
                        <Checkbox 
                             onChange={(e)=>setDysuria(e.target.checked ? "Yes":"")}
                             checked={Dysuria==="Yes"}
                        />
                        <br /> No
                        <Checkbox 
                             onChange={(e)=>setDysuria(e.target.checked ? "No":"")}
                             checked={Dysuria==="No"}
                        />
                      </td>
                      <td
                        style={{ width: "50%", border: "0.5px  solid #20958C" }}
                      >
                        <b>Haemeturia : </b> Yes
                        <Checkbox 
                          onChange={(e)=>setHaemeturia(e.target.checked ? "Yes":"")}
                          checked={Haemeturia==="Yes"}
                        />
                        <br /> No
                        <Checkbox 
                          onChange={(e)=>setHaemeturia(e.target.checked ? "No":"")}
                          checked={Haemeturia==="No"}
                        />
                      </td>
                    </tr>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "50%", border: "0.5px  solid #20958C" }}
                      >
                        Frequency : 
                        <input 
                        type="text" 
                        className="vi_0" 
                        value={Frequency}
                        onChange={(e)=>setFrequency(e.target.value)}
                        />
                      </td>
                      <td
                        style={{ width: "50%", border: "0.5px  solid #20958C" }}
                      >
                        <b> Foley's Catheter : </b> Yes
                        <Checkbox 
                        onChange={(e)=>setFoleyCatheter(e.target.checked ? "Yes":"")}
                        checked={FoleyCatheter==="Yes"}
                        />
                        <br /> No
                        <Checkbox 
                        onChange={(e)=>setFoleyCatheter(e.target.checked ? "No":"")}
                        checked={FoleyCatheter==="No"}
                        />
                      </td>
                    </tr>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "50%", border: "0.5px  solid #20958C" }}
                      >
                        <b> Incontinence : </b> Yes
                        <Checkbox 
                          onChange={(e)=>setIncontinence(e.target.checked ? "Yes":"")}
                          checked={Incontinence==="Yes"}
                        />
                        <br /> No
                        <Checkbox 
                          onChange={(e)=>setIncontinence(e.target.checked ? "No":"")}
                          checked={Incontinence==="No"}
                        />
                      </td>
                      <td
                        style={{ width: "50%", border: "0.5px  solid #20958C" }}
                      >
                        Inserted on : 
                        <input 
                        type="text" 
                        className="vi_0"
                        value={Insertedon}
                        onChange={(e)=>setInsertedon(e.target.value)}
                        />
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
                        <div className="d-flex align-items-center">
                          <b style={{ width: "26%" }}>LMP : </b>
                          <input type="text" className="vi_0"
                          value={LMP}
                          onChange={(e)=>setLMP(e.target.value)}
                          />
                        </div>
                      </td>
                      <td
                        style={{ width: "50%", border: "0.5px  solid #20958C" }}
                      >
                        <div className="d-flex align-items-center">
                          <b style={{ width: "26%" }}>EDD : </b>
                          <input type="text" className="vi_0" 
                          value={EDD}
                          onChange={(e)=>setEDD(e.target.value)}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "50%", border: "0.5px  solid #20958C" }}
                      >
                        <div className="d-flex align-items-center">
                          <b> Dating Scan(11 to 14 Weeks) : </b>
                          <input type="text" className="vi_0" 
                            value={DatingScan}
                            onChange={(e)=>setDatingScan(e.target.value)}
                          />
                        </div>
                      </td>
                      <td
                        style={{ width: "50%", border: "0.5px  solid #20958C" }}
                      >
                        <div className="d-flex align-items-center">
                          <b style={{ width: "26%" }}>POG : </b>
                          <input type="text" className="vi_0" 
                          value={POG}
                          onChange={(e)=>setPOG(e.target.value)}
                          />
                        </div>
                      </td>
                    </tr>
                  </td>
                </tr>

                <tr>
                  <th style={{ border: "2px  solid #20958C" }}>
                    Any Drug Allergy
                  </th>
                  <td style={{ border: "2px  solid #20958C" }} colSpan={4}>
                    <input type="text" className="vi_0"
                    value={AnyDrugAllergy}
                    onChange={(e)=>setAnyDrugAllergy(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <th colSpan={3}>Name & Signature of Nurse:</th>
                  <th>
                    <div className="d-flex align-items-center">
                      <div style={{ width: "40%" }}>Date : </div>
                      <input type="date" className="vi_0" 
                      onChange={(e)=>setFormfillDate(e.target.value)}
                      value={FormfillDate}
                      />
                    </div>
                  </th>
                  <th>
                    <div className="d-flex align-items-center">
                      <div style={{ width: "40%" }}>Time : </div>
                      <input type="time" className="vi_0" 
                      onChange={(e)=>setformfillTime(e.target.value)}
                      value={formfillTime}
                      />
                    </div>
                  </th>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <div className="text-center mt-2 mb-2">
        <button 
        className="btn btn-success"
        onClick={()=>submitNursingAssesment()}
        >Submit</button>
      </div>
    </div>
  );
};

export default NursingAssessOnAdmit;
