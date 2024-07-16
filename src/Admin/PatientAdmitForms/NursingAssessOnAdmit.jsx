import { Checkbox } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { FaBackward } from "react-icons/fa";
import { useLocation} from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
const NursingAssessOnAdmit = () => {
  const location = useLocation();
  const { patientdetails, cause } = location.state || {};

  // NURSING ASSESSMENT ON ADMISSION

  const [DTNursingInitialAssesment, setDTNursingInitialAssesment] = useState("");
  const [ConsentSign, setConsentSign] = useState("");
  const [VSTemp, setVSTemp] = useState("");
  const [VSPulse, setVSPulse] = useState("");
  const [Resp, setResp] = useState("");
  const [BP, setBP] = useState("");
  const [Height, setHeight] = useState("")
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
    if(!DTNursingInitialAssesment){
      return alert("Please Select Date and Time")
    }
    if(!ConsentSign){
      return alert("Please Check General Consent Signed or Not")
    }
    if(!VSTemp){
      return alert("Enter temperature")
    }
    if(!VSPulse){
      return alert("Enter Pulse")
    }
    if(!Resp){
      return alert("Enter Resp")
    }
    if(!BP){
      return alert("Enter BP ")
    }
    if(!Height){
      return alert("Enter Height ")
    }
    if(!Weight){
      return alert("Enter Weight ")
    }
    if(!BloodGroup){
      return alert("Enter BloodGroup ")
    }
    if(!Complaints){
      return alert("Enter Complaints during admission and it's duration ")
    }
    if(!Oriented){
      return alert("Check Oriented ")
    }
    if(!Speech1){
      return alert("Check Speech ")
    }
    if(!Speech2){
      return alert("Check Speech ")
    }
    if(!Consciousness){
      return alert("Check Level of Consciousness  ")
    }
    if(!Impairment){
      return alert("Check Visual Impairment  ")
    }
    if(!Extremity){
      return alert("Check Extremity strength  ")
    }
    if(!Pupils){
      return alert("Check Pupils  ")
    }
    if(!HearingImpairment){
      return alert("Check Hearing Impairment  ")
    }
    if(!Pain){
      return alert("Check Pain  ")
    }
    if(Pain === "Yes"){
      if(!Location1){
      return  alert("Enter Pain Location")
      }
      if(!PainScale){
      return alert("Rate the pain scale")
      }      
    }
    if(!Airway){
     return alert("Check Airway  ")
    }
    if(!Dyspnea){
     return alert("Check Dyspnea  ")
    }
    if(!Wheezing){
     return alert("Check Wheezing  ")
    }
    if(!Hemoptysis){
     return alert("Check Hemoptysis  ")
    }
    if(!Cough){
     return alert("Check Cough  ")
    }
    if(!Sputum){
     return alert("Check Sputum  ")
    }
    if(!Edema){
     return alert("Check Edema  ")
    }
    if(Edema === "Present"){
      if(!Loactionofedema){
        return alert("Enter Loaction of edema ")
      }
    }
    if(!Skinperfusion){
      return alert("Check Skin perfusion  ")
     }
    if(!Capillaryrefill){
      return alert("Check Capillary refill  ")
     }
    if(!Pacemaker){
      return alert("Check Pacemaker  ")
     }
    if(!SkinColor){
      return alert("Check Skin-Color  ")
     }
    if(!Turgor){
      return alert("Check Turgor  ")
     }
    if(!Temperature){
      return alert("Check Temperature  ")
     }
    if(!Mucousmembrane){
      return alert("Check Mucous membrane  ")
     }
    if(!Moisture){
      return alert("Check Moisture  ")
     }
    if(!Condition){
      return alert("Check Condition  ")
     }
    if(!PressureSore){
      return alert("Check Pressure Sore  ")
     }
    if( PressureSore === "present"){
      if(!Stage){
        return alert("Check Stage")
       }
     }
     if(!LossofAppetite){
      return alert("Check Loss of Appetite")
     }
     if(!Abdomen){
      return alert("Check Abdomen")
     }
     if(!Swallowingdiffulty){
      return alert("Check  Swallowing diffulty")
     }
     if(!Dysuria){
      return alert("Check Dysuria")
     }
     if(!Haemeturia){
      return alert("Check Haemeturia")
     }
     if(!Frequency){
      return alert("Enter Frequency")
     }
     if(!FoleyCatheter){
      return alert("Check Foley's Catheter")
     }
     if(!Incontinence){
      return alert("Check Incontinence")
     }
     if(!Insertedon){
      return alert("Enter Inserted")
     }
     if(!LMP){
      return alert("Enter LMP")
     }
     if(!EDD){
      return alert("Enter EDD")
     }
     if(!DatingScan){
      return alert("Enter Dating Scan(11 to 14 Weeks)")
     }
     if(!POG){
      return alert("Enter POG")
     }
     if(!AnyDrugAllergy){
      return alert("Enter Drug Allergy")
     }
     if(!NurseSignature){
      return alert("Nurse Sign is pending...!")
     }
     if(!FormfillDate){
      return alert("Select date...!")
     }
     if(!formfillTime){
      return alert("Select time...!")
     }

     const formdata= new FormData();
     const Nursesign = await fetch(NurseSignature).then((res) => res.blob());
    
     formdata.append("patientId", patientdetails?._id);
formdata.append("causeId", cause?._id);
formdata.append("DTNursingInitialAssesment", DTNursingInitialAssesment);
formdata.append("ConsentSign", ConsentSign);
formdata.append("VSTemp", VSTemp);
formdata.append("VSPulse", VSPulse);
formdata.append("Resp", Resp);
formdata.append("BP", BP);
formdata.append("Height", Height);
formdata.append("Weight", Weight);
formdata.append("BloodGroup", BloodGroup);
formdata.append("Spo2", Spo2);
formdata.append("GRBS", GRBS);
formdata.append("Complaints", Complaints);
formdata.append("Oriented", Oriented);
formdata.append("Speech1", Speech1);
formdata.append("Speech2", Speech2);
formdata.append("Consciousness", Consciousness);
formdata.append("Impairment", Impairment);
formdata.append("Extremity", Extremity);
formdata.append("Pupils", Pupils);
formdata.append("HearingImpairment", HearingImpairment);
formdata.append("Pain", Pain);
formdata.append("Location1", Location1);
formdata.append("PainScale", PainScale);
formdata.append("Airway", Airway);
formdata.append("Dyspnea", Dyspnea);
formdata.append("Wheezing", Wheezing);
formdata.append("Hemoptysis", Hemoptysis);
formdata.append("Cough", Cough);
formdata.append("Sputum", Sputum);
formdata.append("Edema", Edema);
formdata.append("Loactionofedema", Loactionofedema);
formdata.append("Skinperfusion", Skinperfusion);
formdata.append("Capillaryrefill", Capillaryrefill);
formdata.append("Pacemaker", Pacemaker);
formdata.append("SkinColor", SkinColor);
formdata.append("Turgor", Turgor);
formdata.append("Temperature", Temperature);
formdata.append("Mucousmembrane", Mucousmembrane);
formdata.append("Moisture", Moisture);
formdata.append("Condition", Condition);
formdata.append("PressureSore", PressureSore);
formdata.append("Stage", Stage);
formdata.append("LossofAppetite", LossofAppetite);
formdata.append("Abdomen", Abdomen);
formdata.append("Swallowingdiffulty", Swallowingdiffulty);
formdata.append("Dysuria", Dysuria);
formdata.append("Haemeturia", Haemeturia);
formdata.append("Frequency", Frequency);
formdata.append("FoleyCatheter", FoleyCatheter);
formdata.append("Incontinence", Incontinence);
formdata.append("Insertedon", Insertedon);
formdata.append("LMP", LMP);
formdata.append("EDD", EDD);
formdata.append("DatingScan", DatingScan);
formdata.append("POG", POG);
formdata.append("AnyDrugAllergy", AnyDrugAllergy);
formdata.append("formfillTime", formfillTime);
formdata.append("FormfillDate", FormfillDate);
formdata.append("NurseSignature", Nursesign,"nurse-signature.png");
     try {
      const config = {
        url: "/addnursingassessment",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "Content-Type": "multipart/form-data" },
        data:  formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const [NurseSignature, setNurseSignature] = useState(null);
  const sigCanvas1 = useRef({});

  const clear1 = () => sigCanvas1.current.clear();

  const save1 = () => {
    const NurseSignature = sigCanvas1.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    setNurseSignature(NurseSignature);
  };
  return (
    <div>
      <div>
      <button
          className="mt-2"
          style={{
            border:"#20958c",
            padding: "8px",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "6px",
             boxShadow: " 8px 8px 16px #20958c,-8px -8px 16px #20958c",
           
          }}
          onClick={() => window.history.go(-1)}
        >
         <FaBackward />  &nbsp;      
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
                   <b>Patient Name :</b> {" "}
                    {`${patientdetails?.Firstname} ${patientdetails?.Lastname} `}
                  </td>

                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                   <b>UHID No : </b> {patientdetails?.PatientId}
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} style={{ border: "2px  solid #20958C" }}>
                   <div className="d-flex gap-2">
                   <b>Date & Time of Nursing Initial Assessment : </b>
                   <div>
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
                   </div>
                   </div>
                  
                   
                  </td>
                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                   <b>General Consent Signed : </b>  Yes
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
                    <b>Vital Signs</b>
                  </th>
                  <td>
                    <div  className="d-flex align-items-center">
                    <div style={{ width: "64%",fontWeight:"bold" }}>Temp : </div>
                    <input
                      type="text"
                      className="vi_0"
                      value={VSTemp}
                      onChange={(e) => setVSTemp(e.target.value)}
                    />
                    </div>
                   
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C",
                    fontWeight:"bold" }}>
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
                  <td style={{ width: "20%", border: "2px  solid #20958C",
                    fontWeight:"bold"
                   }}>
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
                  <td style={{ width: "20%", border: "2px  solid #20958C", fontWeight:"bold" }}>
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

                <tr style={{ textAlign: "center" ,fontWeight:"bold"}}>
                  <th style={{ width: "20%", border: "2px  solid #20958C",fontWeight:"bold" }}>
                    Height
                    <input
                      type="text"
                      value={Height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="vi_0"
                    />
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
                  <th style={{ border: "2px  solid #20958C",fontWeight:"bold" }}>
                    Complaints during admission and it's duration
                  </th>
                  <td colSpan={4} style={{ border: "2px  solid #20958C" }}>
                    <textarea
                      value={Complaints}
                      onChange={(e) => setComplaints(e.target.value)}
                      rows={3}
                      className="vi_0"
                      placeholder="Complaints during admission and it's duration"
                    />
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ border: "2px  solid #20958C",fontWeight:"bold" }}>Neurological</th>
                  <td colSpan={4} style={{ border: "2px  solid #20958C" }}>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                       <b>Oriented : </b>  Yes
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
                       <b>Speech : </b> 
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
                       <b>Speech : </b> 
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
                        <b>Level of Consciousness : </b>
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
                        <b>Visual Impairment : </b> <br />
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
                        <b>Extremity strength : </b>
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
                        <b>Pupils : </b> <br />
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
                        <b>Hearing Impairment : </b> <br />
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
                       <b>Location : </b> 
                        <input 
                        value={Location1}
                        onChange={(e)=>setLocation1(e.target.value)}
                        type="text" className="vi_0"
                        placeholder="pain location"
                         />
                      </td>
                    </tr>
                  </td>
                </tr>

                <tr>
                  <th
                    style={{
                      textAlign: "center",
                      border: "2px  solid #20958C",
                      fontWeight:"bold"
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
                          src="/Images/PainScale0.png"
                          alt=""
                          style={{ width: "75px", height: "70px" }}
                        />
                        </div>                        
                        <span>0</span>
                       
                        <div                        
                        style={{ fontSize: "15px", textAlign: "center" }}>
                          No Pain <Checkbox 
                           onChange={(e)=>setPainScale(e.target.checked ? "0": "")}
                           checked={PainScale === "0"}
                          />
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
                          src="/Images/PainScale2.png"
                          alt=""
                          style={{ width: "75px", height: "70px" }}
                        />
                        <span>2</span>
                        <div style={{ fontSize: "15px", textAlign: "center" }}>
                          Little Pain<Checkbox 
                          onChange={(e)=>setPainScale(e.target.checked ? "2":"")}
                          checked={PainScale=== "2"}
                          />
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
                          src="/Images/PainScale4.png"
                          alt=""
                          style={{ width: "75px", height: "70px" }}
                        />
                        <span>4</span>
                        <div style={{ fontSize: "15px", textAlign: "center" }}>
                          Mild Pain<Checkbox 
                           onChange={(e)=>setPainScale(e.target.checked ? "4":"")}
                           checked={PainScale=== "4"}
                          />
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
                          src="/Images/PainScale6.png"
                          alt=""
                          style={{ width: "75px", height: "70px" }}
                        />
                        <span>6</span>
                        <div style={{ fontSize: "15px", textAlign: "center" }}>
                          Moderate Pain<Checkbox 
                           onChange={(e)=>setPainScale(e.target.checked ? "6":"")}
                           checked={PainScale=== "6"}
                          />
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
                          src="/Images/PainScale8.png"
                          alt=""
                          style={{ width: "75px", height: "70px" }}
                        />
                        <span>8</span>
                        <div style={{ fontSize: "15px", textAlign: "center" }}>
                          Severe Pain<Checkbox 
                           onChange={(e)=>setPainScale(e.target.checked ? "8":"")}
                           checked={PainScale==="8"}
                          />
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
                          src="/Images/PainScale10.png"
                          alt=""
                          style={{ width: "75px", height: "70px" }}
                        />
                        <span>10</span>
                        <div style={{ fontSize: "15px", textAlign: "center" }}>
                          Worst Pain<Checkbox 
                           onChange={(e)=>setPainScale(e.target.checked ? "10":"")}
                           checked={PainScale=== "10"}
                          />
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
                  <th style={{ border: "2px  solid #20958C",fontWeight:"bold" }}>Respiratory</th>
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
                       <b>Hemoptysis : </b> 
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
                       <b>Cough :{" "}</b> 
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
                       <b>Sputum : </b> 
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
                  <th style={{ border: "2px  solid #20958C",fontWeight:"bold" }}>
                    Cardiovascular
                  </th>
                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "50%", border: ".5px  solid #20958C",fontWeight:"bold" }}
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
                        style={{ width: "50%", border: ".5px  solid #20958C",fontWeight:"bold" }}
                      >
                        Loaction of edema :{" "}
                      </td>
                      <td
                        style={{ width: "50%", border: ".5px  solid #20958C" }}
                      >
                        <input type="text" 
                        value={Loactionofedema}
                        onChange={(e)=>setLoactionofedema(e.target.value)}
                        className="vi_0"
                        placeholder=" Loaction of edema"
                        />
                      </td>
                    </tr>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "50%", border: ".5px  solid #20958C" }}
                      >
                      <b>Skin perfusion : </b>  
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
                        style={{fontWeight:"bold", width: "50%", border: ".5px  solid #20958C" }}
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
                        style={{fontWeight:"bold", width: "50%", border: ".5px  solid #20958C" }}
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
                  <th style={{ border: "2px  solid #20958C",fontWeight:"bold" }}>
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
                  <th style={{ border: "2px  solid #20958C",fontWeight:"bold" }}>
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
                        style={{fontWeight:"bold", width: "33%", border: "0.5px  solid #20958C" }}
                      >
                        Swallowing diffulty : Yes
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
                  <th style={{fontWeight:"bold", border: "2px  solid #20958C" }}>
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
                        placeholder="Frequency"
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
                        placeholder="Inserted"
                        />
                      </td>
                    </tr>
                  </td>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <th style={{ border: "2px  solid #20958C",fontWeight:"bold" }}>Obstetric</th>
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
                            placeholder="LMP"
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
                          placeholder="EDD"
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
                            placeholder="Dating Scan"
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
                          placeholder="POG"
                          />
                        </div>
                      </td>
                    </tr>
                  </td>
                </tr>

                <tr>
                  <th style={{fontWeight:"bold", border: "2px  solid #20958C" }}>
                    Any Drug Allergy
                  </th>
                  <td style={{ border: "2px  solid #20958C" }} colSpan={4}>
                    <input type="text" className="vi_0"
                    value={AnyDrugAllergy}
                    onChange={(e)=>setAnyDrugAllergy(e.target.value)}
                    placeholder="  Any Drug Allergy"
                    />
                  </td>
                </tr>

                <tr>
                  <th>Name & Signature of Nurse:</th>
                  <th>
                  {!NurseSignature ? (
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
                                  <img src={NurseSignature} alt="Signature" />
                                )}
                  </th>
                 
                  <th>
                    <div className="d-flex align-items-center">
                      <div style={{ width: "40%" }}>Date : </div>
                      <input type="date" className="vi_0" 
                      onChange={(e)=>setFormfillDate(e.target.value)}
                      value={FormfillDate}
                      min={new Date().toISOString().split('T')[0]} 
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
