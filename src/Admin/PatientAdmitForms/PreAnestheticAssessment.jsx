import axios from "axios";
import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const PreAnestheticAssessment = () => {
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

  const [Diagnosis, setDiagnosis] = useState("");
  const [Problem, setProblem] = useState("");
  const [Surgery, setSurgery] = useState("");
  const [CVS, setCVS] = useState("");
  const [RS, setRS] = useState("");
  const [Endocrine, setEndocrine] = useState("");
  const [Renal, setRenal] = useState("");
  const [CNSSkeletal, setCNSSkeletal] = useState("");
  const [GITHematology, setGITHematology] = useState("");
  const [CurrentMedications, setCurrentMedications] = useState("");
  const [PastAnaesthetic, setPastAnaesthetic] = useState("");
  const [Temp, setTemp] = useState("");
  const [Build, setBuild] = useState("");
  const [PR, setPR] = useState("");
  const [Hydrarion, setHydrarion] = useState("");
  const [BP, setBP] = useState("");
  const [Pallor, setPallor] = useState("");
  const [RR, setRR] = useState("");
  const [Icterus, setIcterus] = useState("");
  const [Sp02, setSp02] = useState("");
  const [Cyanosis, setCyanosis] = useState("");
  const [Heart, setHeart] = useState("");
  const [Oedema, setOedema] = useState("");
  const [Lungs, setLungs] = useState("");
  const [Peripheral, setPeripheral] = useState("");
  const [HbPVC, setHbPVC] = useState("");
  const [WBC, setWBC] = useState("");
  const [Plat, setPlat] = useState("");
  const [HIV, setHIV] = useState("");
  const [HBSAg, setHBSAg] = useState("");
  const [HCV, setHCV] = useState("");
  const [FBS, setFBS] = useState("");
  const [PLBS, setPLBS] = useState("");
  const [RBS, setRBS] = useState("");
  const [SCr, setSCr] = useState("");
  const [BUN, setBUN] = useState("");
  const [BdUrea, setBdUrea] = useState("");
  const [Na, setNa] = useState("");
  const [K, setK] = useState("");
  const [Cl, setCl] = useState("");
  const [SBil, setSBil] = useState("");
  const [SGPT, setSGPT] = useState("");
  const [LDH, setLDH] = useState("");
  const [PT, setPT] = useState("");
  const [aPTT, setaPTT] = useState("");
  const [INR, setINR] = useState("");
  const [Others, setOthers] = useState("");
  const [MouthOpening, setMouthOpening] = useState("");
  const [ASAGrading, setASAGrading] = useState("");
  const [Denittion, setDenittion] = useState("");
  const [TMJ, setTMJ] = useState("");
  const [DifficultIntubation, setDifficultIntubation] = useState("");
  const [NeckExtension, setNeckExtension] = useState("");
  const [Mallampati, setMallampati] = useState("");
  const [Regional, setRegional] = useState("");
  const [SpineGrading, setSpineGrading] = useState("");
  const [CheckPRBC, setCheckPRBC] = useState("");
  const [CheckFFP, setCheckFFP] = useState("");
  const [CheckCryo, setCheckCryo] = useState("");
  const [CheckRDP, setCheckRDP] = useState("");
  const [CheckSDP, setCheckSDP] = useState("");
  const [CrossPRBC, setCrossPRBC] = useState("");
  const [CrossFFP, setCrossFFP] = useState("");
  const [CrossCryo, setCrossCryo] = useState("");
  const [CrossRDP, setCrossRDP] = useState("");
  const [CrossSDP, setCrossSDP] = useState("");
  const [IssuePRBC, setIssuePRBC] = useState("");
  const [IssueFFP, setIssueFFP] = useState("");
  const [IssueCryo, setIssueCryo] = useState("");
  const [IssueRDP, setIssueRDP] = useState("");
  const [IssueSDP, setIssueSDP] = useState("");
  const [Maybeposted, setMaybeposted] = useState("");
  const [ReviewPAC, setReviewPAC] = useState("");
  const [PreOPInstructions, setPreOPInstructions] = useState("");
  const [AnaesthesiaPlan, setAnaesthesiaPlan] = useState("");
  const [PostOPInstructions, setPostOPInstructions] = useState("");
  const [PAnesDate, setPAnesDate] = useState("");
  const [PAnesTime, setPAnesTime] = useState("");
  const submitpreAnesthica = async () => {
    try {
      const config = {
        url: "/addpreanaesthetic",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "content-type": "application/json" },
        data: {
          patientId: patientdetails?._id,
          causeId: cause?._id,
          Diagnosis:Diagnosis,
          Problem:Problem,
          Surgery:Surgery,
          CVS:CVS,
          RS:RS,
          Endocrine:Endocrine,
          Renal:Renal,
          CNSSkeletal:CNSSkeletal,
          GITHematology:GITHematology,
          CurrentMedications:CurrentMedications,
          PastAnaesthetic:PastAnaesthetic,
          Temp:Temp,
          Build:Build,
          PR:PR,
          Hydrarion:Hydrarion,
          BP:BP,
          Pallor:Pallor,
          RR:RR,
          Icterus:Icterus,
          Sp02:Sp02,
          Cyanosis:Cyanosis,
          Heart:Heart,
          Oedema:Oedema,
          Lungs:Lungs,
          Peripheral:Peripheral,
          HbPVC:HbPVC,
          WBC:WBC,
          Plat:Plat,
          HIV:HIV,
          HBSAg:HBSAg,
          HCV:HCV,
          FBS:FBS,
          PLBS:PLBS,
          RBS:RBS,
          SCr:SCr,
          BUN:BUN,
          BdUrea:BdUrea,
          Na:Na,
          K:K,
          Cl:Cl,
          SBil:SBil,
          SGPT:SGPT,
          LDH:LDH,
          PT:PT,
          aPTT:aPTT,
          INR:INR,
          Others:Others,
          MouthOpening:MouthOpening,
          ASAGrading:ASAGrading,
          Denittion:Denittion,
          TMJ:TMJ,
          DifficultIntubation:DifficultIntubation,
          NeckExtension:NeckExtension,
          Mallampati:Mallampati,
          Regional:Regional,
          SpineGrading:SpineGrading,
          CheckPRBC:CheckPRBC,
          CheckFFP:CheckFFP,
          CheckCryo:CheckCryo,
          CheckRDP:CheckRDP,
          CheckSDP:CheckSDP,
          CrossPRBC:CrossPRBC,
          CrossFFP:CrossFFP,
          CrossCryo:CrossCryo,
          CrossRDP:CrossRDP,
          CrossSDP:CrossSDP,
          IssuePRBC:IssuePRBC,
          IssueFFP:IssueFFP,
          IssueCryo:IssueCryo,
          IssueRDP:IssueRDP,
          IssueSDP:IssueSDP,
          Maybeposted:Maybeposted,
          ReviewPAC:ReviewPAC,
          PreOPInstructions:PreOPInstructions,
          AnaesthesiaPlan:AnaesthesiaPlan,
          PostOPInstructions:PostOPInstructions,
          PAnesDate:PAnesDate,
          PAnesTime:PAnesTime,

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
          style={{ color: "#20958C", fontSize: "30px" }}
        >
          PRE ANESTHSIA ASSESSMENT
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
              style={{ color: "#20958C", fontSize: "30px" }}
            >
              PRE ANESTHSIA ASSESSMENT{" "}
              <span style={{ color: "red" }}>({cause?.CauseName})</span>
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
                marginBottom: "20px",
              }}
            >
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th colSpan={2}>PRE-ANAESTHETIC ASSESSMENT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    PAC Done by Dr{" "}
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Consultant Surgeon
                  </td>
                </tr>
                <tr style={{ alignContent: "center" }}>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <Table
                      style={{
                        borderCollapse: "collapse",
                        width: "100%",
                        margin: "auto",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td style={{ width: "50%", border: "none" }}>
                            Name :{" "}
                            {`${patientdetails?.Firstname} ${patientdetails?.Lastname} `}
                          </td>
                          <td style={{ width: "50%", border: "none" }}>
                            MR No :
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50%", border: "none" }}>
                            Age & Sex : {ageOutput} ,{patientdetails?.Gender}
                          </td>
                          <td style={{ width: "50%", border: "none" }}>
                            Allergy :
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50%", border: "none" }}>
                            Wt/Ht/BMI:
                          </td>
                          <td style={{ width: "50%", border: "none" }}>
                            Bld Br. :
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <Table
                      style={{
                        borderCollapse: "collapse",
                        width: "100%",
                        margin: "auto",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Diagnosis:
                              <input
                                type="text"
                                className="vi_0"
                                value={Diagnosis}
                                onChange={(e) => setDiagnosis(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Problem:
                              <input
                                type="text"
                                className="vi_0"
                                value={Problem}
                                onChange={(e) => setProblem(e.target.value)}
                              />
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td
                            colSpan={2}
                            style={{
                              width: "100%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Surgery:
                              <input
                                type="text"
                                className="vi_0"
                                value={Surgery}
                                onChange={(e) => setSurgery(e.target.value)}
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <div className="d-flex gap-1 text-aligns-center">
                      CVS:
                      <input
                        type="text"
                        className="vi_0"
                        value={CVS}
                        onChange={(e) => setCVS(e.target.value)}
                      />
                    </div>
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <div className="d-flex gap-1 text-aligns-center">
                      RS:
                      <input
                        type="text"
                        className="vi_0"
                        value={RS}
                        onChange={(e) => setRS(e.target.value)}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <div className="d-flex gap-1 text-aligns-center">
                      Endocrine:
                      <input
                        type="text"
                        className="vi_0"
                        value={Endocrine}
                        onChange={(e) => setEndocrine(e.target.value)}
                      />
                    </div>
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <div className="d-flex gap-1 text-aligns-center">
                      Renal:
                      <input
                        type="text"
                        className="vi_0"
                        value={Renal}
                        onChange={(e) => setRenal(e.target.value)}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <div className="d-flex gap-1 text-aligns-center">
                      CNS / Musclo Skeletal:
                      <input
                        type="text"
                        className="vi_0"
                        value={CNSSkeletal}
                        onChange={(e) => setCNSSkeletal(e.target.value)}
                      />
                    </div>
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <div className="d-flex gap-1 text-aligns-center">
                      GIT / Hematology:
                      <input
                        type="text"
                        className="vi_0"
                        value={GITHematology}
                        onChange={(e) => setGITHematology(e.target.value)}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <div className="d-flex gap-1 text-aligns-center">
                      Current Medications:
                      <input
                        type="text"
                        className="vi_0"
                        value={CurrentMedications}
                        onChange={(e) => setCurrentMedications(e.target.value)}
                      />
                    </div>
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <div className="d-flex gap-1 text-aligns-center">
                      Past Anaesthetic Exposure:
                      <input
                        type="text"
                        className="vi_0"
                        value={PastAnaesthetic}
                        onChange={(e) => setPastAnaesthetic(e.target.value)}
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    GENERAL EXAMINATION
                    <Table
                      style={{
                        borderCollapse: "collapse",
                        width: "100%",
                        margin: "auto",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Temp:
                              <input
                                type="text"
                                className="vi_0"
                                value={Temp}
                                onChange={(e) => setTemp(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Build:
                              <input
                                type="text"
                                className="vi_0"
                                value={Build}
                                onChange={(e) => setBuild(e.target.value)}
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              PR:
                              <input
                                type="text"
                                className="vi_0"
                                value={PR}
                                onChange={(e) => setPR(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Hydrarion:
                              <input
                                type="text"
                                className="vi_0"
                                value={Hydrarion}
                                onChange={(e) => setHydrarion(e.target.value)}
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              BP:
                              <input
                                type="text"
                                className="vi_0"
                                value={BP}
                                onChange={(e) => setBP(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Pallor:
                              <input
                                type="text"
                                className="vi_0"
                                value={Pallor}
                                onChange={(e) => setPallor(e.target.value)}
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              R.R.:
                              <input
                                type="text"
                                className="vi_0"
                                value={RR}
                                onChange={(e) => setRR(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Icterus:
                              <input
                                type="text"
                                className="vi_0"
                                value={Icterus}
                                onChange={(e) => setIcterus(e.target.value)}
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Sp02:
                              <input
                                type="text"
                                className="vi_0"
                                value={Sp02}
                                onChange={(e) => setSp02(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Cyanosis:
                              <input
                                type="text"
                                className="vi_0"
                                value={Cyanosis}
                                onChange={(e) => setCyanosis(e.target.value)}
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Heart:
                              <input
                                type="text"
                                className="vi_0"
                                value={Heart}
                                onChange={(e) => setHeart(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Oedema:
                              <input
                                type="text"
                                className="vi_0"
                                value={Oedema}
                                onChange={(e) => setOedema(e.target.value)}
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Lungs:
                              <input
                                type="text"
                                className="vi_0"
                                value={Lungs}
                                onChange={(e) => setLungs(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Peripheral pules:
                              <input
                                type="text"
                                className="vi_0"
                                 value={Peripheral}
                                 onChange={(e) => setPeripheral(e.target.value)}
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    INVESTIGATIONS
                    <Table
                      style={{
                        borderCollapse: "collapse",
                        width: "100%",
                        margin: "auto",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Hb / PVC:
                              <input
                                type="text"
                                className="vi_0"
                                value={HbPVC}
                                onChange={(e) => setHbPVC(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              WBC:
                              <input
                                type="text"
                                className="vi_0"
                                value={WBC}
                                onChange={(e) => setWBC(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Plat:
                              <input
                                type="text"
                                className="vi_0"
                                value={Plat}
                                onChange={(e) => setPlat(e.target.value)}
                              />
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              HIV:
                              <input
                                type="text"
                                className="vi_0"
                                value={HIV}
                                onChange={(e) => setHIV(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              HBSAg:
                              <input
                                type="text"
                                className="vi_0"
                                value={HBSAg}
                                onChange={(e) => setHBSAg(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              HCV:
                              <input
                                type="text"
                                className="vi_0"
                                value={HCV}
                                onChange={(e) => setHCV(e.target.value)}
                              />
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              FBS:
                              <input
                                type="text"
                                className="vi_0"
                                value={FBS}
                                onChange={(e) => setFBS(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              PLBS:
                              <input
                                type="text"
                                className="vi_0"
                                value={PLBS}
                                onChange={(e) => setPLBS(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              RBS:
                              <input
                                type="text"
                                className="vi_0"
                                value={RBS}
                                onChange={(e) => setRBS(e.target.value)}
                              />
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              S. Cr:
                              <input
                                type="text"
                                className="vi_0"
                                value={SCr}
                                onChange={(e) => setSCr(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              BUN:
                              <input
                                type="text"
                                className="vi_0"
                                value={BUN}
                                onChange={(e) => setBUN(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Bd Urea:
                              <input
                                type="text"
                                className="vi_0"
                                value={BdUrea}
                                onChange={(e) => setBdUrea(e.target.value)}
                              />
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Na:
                              <input
                                type="text"
                                className="vi_0"
                                value={Na}
                                onChange={(e) => setNa(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              k:
                              <input
                                type="text"
                                className="vi_0"
                                value={K}
                                onChange={(e) => setK(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Cl:
                              <input
                                type="text"
                                className="vi_0"
                                value={Cl}
                                onChange={(e) => setCl(e.target.value)}
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              S. Bil:
                              <input
                                type="text"
                                className="vi_0"
                                value={SBil}
                                onChange={(e) => setSBil(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              SGPT:
                              <input
                                type="text"
                                className="vi_0"
                                value={SGPT}
                                onChange={(e) => setSGPT(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              LDH:
                              <input
                                type="text"
                                className="vi_0"
                                value={LDH}
                                onChange={(e) => setLDH(e.target.value)}
                              />
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              PT:
                              <input
                                type="text"
                                className="vi_0"
                                value={PT}
                                onChange={(e) => setPT(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              aPTT:
                              <input
                                type="text"
                                className="vi_0"
                                value={aPTT}
                                onChange={(e) => setaPTT(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              INR:
                              <input
                                type="text"
                                className="vi_0"
                                value={INR}
                                onChange={(e) => setINR(e.target.value)}
                              />
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex gap-1 text-aligns-center">
                              Others:
                              <input
                                type="text"
                                className="vi_0"
                                value={Others}
                                onChange={(e) => setOthers(e.target.value)}
                              />
                            </div>
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          ></td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          ></td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <span style={{ fontWeight: "bold" }}>
                      AIRWAY ASSESSMENT
                    </span>
                    <Table
                      style={{
                        borderCollapse: "collapse",
                        width: "100%",
                        margin: "auto",
                      }}
                    >
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          <div className="d-flex gap-1 text-aligns-center">
                            Mouth Opening:
                            <input
                              type="text"
                              className="vi_0"
                              value={MouthOpening}
                              onChange={(e) => setMouthOpening(e.target.value)}
                            />
                          </div>
                        </td>
                        <th
                          rowSpan={2}
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          <div
                            style={{
                              backgroundColor: "transparent",
                              color: "white",
                            }}
                          >
                            ASA Grading:{" "}
                          </div>

                          <Form.Select 
                          onChange={(e)=>setASAGrading(e.target.value)}
                          value={ASAGrading}
                          className="vi_0 mt-1">
                            <option> select grading</option>
                            <option value="I">I</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                            <option value="E">E</option>
                          </Form.Select>
                        </th>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          <div className="d-flex gap-1 text-aligns-center">
                            Denittion:
                            <input
                              type="text"
                              className="vi_0"
                              value={Denittion}
                              onChange={(e) => setDenittion(e.target.value)}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          <div className="d-flex gap-1 text-aligns-center">
                            TMJ:
                            <input
                              type="text"
                              className="vi_0"
                              value={TMJ}
                              onChange={(e) => setTMJ(e.target.value)}
                            />
                          </div>
                        </td>
                        <th
                          rowSpan={2}
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          <div
                            style={{
                              backgroundColor: "transparent",
                              color: "white",
                            }}
                          >
                            Difficult Intubation:
                          </div>
                          <Form.Select 
                          value={DifficultIntubation}
                          onChange={(e)=>setDifficultIntubation(e.target.value)}
                          className="vi_0 mt-1">
                            <option> select Intubation</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Could be">Could be</option>
                          </Form.Select>
                        </th>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          <div className="d-flex gap-1 text-aligns-center">
                            Neck Extension:
                            <input
                              type="text"
                              className="vi_0"
                              value={NeckExtension}
                              onChange={(e) => setNeckExtension(e.target.value)}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          <div className="d-flex gap-1 text-aligns-center">
                            Mallampati Gt:
                            <input
                              type="text"
                              className="vi_0"
                              value={Mallampati}
                              onChange={(e) => setMallampati(e.target.value)}
                            />
                          </div>
                        </td>
                        <th
                          rowSpan={2}
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          <div
                            style={{
                              backgroundColor: "transparent",
                              color: "white",
                            }}
                          >
                            Difficult Regional:
                          </div>
                          <Form.Select 
                          onChange={(e)=>setRegional(e.target.value)}
                          value={Regional}
                          className="vi_0 mt-1">
                            <option> select regional</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Could be">Could be</option>
                          </Form.Select>
                        </th>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "50%", border: "2px  solid #20958C" }}
                        >
                          <div className="d-flex gap-1 text-aligns-center">
                            Spine Grading:
                            <input
                              type="text"
                              className="vi_0"
                              value={SpineGrading}
                              onChange={(e) => setSpineGrading(e.target.value)}
                            />
                          </div>
                        </td>
                      </tr>
                    </Table>
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    <Table
                      style={{
                        borderCollapse: "collapse",
                        width: "100%",
                        margin: "auto",
                      }}
                    >
                      <tbody>
                        <tr>
                          <th
                            colSpan={6}
                            style={{
                              width: "100%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Blood Products reservation status
                          </th>
                        </tr>
                        <tr>
                          <th
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Component
                          </th>
                          <th
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            PRBC
                          </th>
                          <th
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            FFP
                          </th>
                          <th
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Cryo
                          </th>
                          <th
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            RDP
                          </th>
                          <th
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            SDP
                          </th>
                        </tr>
                        <tr>
                          <th
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Check Availability
                          </th>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              value={CheckPRBC}
                              onChange={(e) => setCheckPRBC(e.target.value)}
                            />
                          </td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              value={CheckFFP}
                              onChange={(e) => setCheckFFP(e.target.value)}
                            />
                          </td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              value={CheckCryo}
                              onChange={(e) => setCheckCryo(e.target.value)}
                            />
                          </td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              value={CheckRDP}
                              onChange={(e) => setCheckRDP(e.target.value)}
                            />
                          </td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              value={CheckSDP}
                              onChange={(e) => setCheckSDP(e.target.value)}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Cross Match & Reserve
                          </th>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              value={CrossPRBC}
                              onChange={(e) => setCrossPRBC(e.target.value)}
                            />
                          </td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              value={CrossFFP}
                              onChange={(e) => setCrossFFP(e.target.value)}
                            />
                          </td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              value={CrossCryo}
                              onChange={(e) => setCrossCryo(e.target.value)}
                            />
                          </td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              value={CrossRDP}
                              onChange={(e) => setCrossRDP(e.target.value)}
                            />
                          </td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              value={CrossSDP}
                              onChange={(e) => setCrossSDP(e.target.value)}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Issue
                          </th>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              value={IssuePRBC}
                              onChange={(e) => setIssuePRBC(e.target.value)}
                            />
                          </td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              value={IssueFFP}
                              onChange={(e) => setIssueFFP(e.target.value)}
                            />
                          </td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              value={IssueCryo}
                              onChange={(e) => setIssueCryo(e.target.value)}
                            />
                          </td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              value={IssueRDP}
                              onChange={(e) => setIssueRDP(e.target.value)}
                            />
                          </td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="text"
                              className="vi_0"
                              value={IssueSDP}
                              onChange={(e) => setIssueSDP(e.target.value)}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      width: "50%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ width: "41%" }}>May be posted :</div>

                      <input
                        type="text"
                        className="vi_0"
                        value={Maybeposted}
                        onChange={(e) => setMaybeposted(e.target.value)}
                      />
                    </span>
                  </td>
                  <td
                    style={{
                      width: "50%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ width: "41%" }}>Review PAC :</div>

                      <input
                        type="text"
                        className="vi_0"
                        value={ReviewPAC}
                        onChange={(e) => setReviewPAC(e.target.value)}
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: "50%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <div style={{ fontWeight: "bold" }}>
                      Pre OP Instructions :{" "}
                    </div>{" "}
                    <input
                      type="text"
                      className="vi_0"
                      value={PreOPInstructions}
                      onChange={(e) => setPreOPInstructions(e.target.value)}
                    />
                  </td>
                  <td
                    style={{
                      width: "36%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <tr>
                      <td
                        style={{
                          width: "50%",
                          border: "2px  solid #20958C",
                        }}
                      >
                        <div style={{ fontWeight: "bold" }}>
                          Anaesthesia Plan :{" "}
                        </div>{" "}
                        <input
                          type="text"
                          className="vi_0"
                          value={AnaesthesiaPlan}
                          onChange={(e) => setAnaesthesiaPlan(e.target.value)}
                        />
                      </td>
                      <td
                        style={{
                          width: "50%",
                          border: "2px  solid #20958C",
                        }}
                      >
                        <div
                          style={{ fontWeight: "bold", textAlign: "justify" }}
                        >
                          Specific Post OP Instructions :{" "}
                        </div>
                        <input
                          type="text"
                          className="vi_0"
                          value={PostOPInstructions}
                          onChange={(e) => setPostOPInstructions(e.target.value)}
                        />
                      </td>
                    </tr>
                  </td>
                </tr>

                <tr>
                  <td
                    colSpan={2}
                    style={{
                      width: "100%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <div className="d-flex gap-1 align-items-center">
                      Date:
                      <input
                        style={{ width: "30%" }}
                        type="date"
                        className="vi_0"
                        value={PAnesDate}
                        onChange={(e) => setPAnesDate(e.target.value)}
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      width: "50%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    <div className="d-flex gap-1 align-items-center">
                      Time:
                      <input
                        style={{ width: "60%" }}
                        type="time"
                        className="vi_0"
                        value={PAnesTime}
                        onChange={(e) => setPAnesTime(e.target.value)}
                      />
                    </div>
                  </td>
                  <td
                    style={{
                      width: "50%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    Signature & Name{" "}
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
        onClick={submitpreAnesthica}
        >Submit</button>
      </div>
    </div>
  );
};

export default PreAnestheticAssessment;
