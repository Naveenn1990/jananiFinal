import { Checkbox } from '@mui/material';
import axios from 'axios';
import moment from 'moment';
import React, { useRef, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaBackward } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { useLocation } from 'react-router-dom';
import SignatureCanvas from "react-signature-canvas";
function SafetyCheckList() {
    const location = useLocation();
    const { patientdetails, cause } = location.state || {};
  
    console.log("patientdetails", patientdetails);
    console.log("cause", cause);

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

    const [SurgeonSignature, setSurgeonSignature] = useState(null);
    const sigCanvas = useRef({});
    const clear = () => sigCanvas.current.clear();
    const save = () => {
      const SurgeonSignature = sigCanvas.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
      setSurgeonSignature(SurgeonSignature);
    };

    const [AnesthesiologistSignature, setAnesthesiologistSignature] = useState(null);
    const sigCanvas1 = useRef({});
    const clear1 = () => sigCanvas1.current.clear();
    const save1 = () => {
      const AnesthesiologistSignature = sigCanvas1.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
      setAnesthesiologistSignature(AnesthesiologistSignature);
    };

    const [NurseSignature, setNurseSignature] = useState(null);
    const sigCanvas2 = useRef({});
    const clear2 = () => sigCanvas2.current.clear();
    const save2 = () => {
      const NurseSignature = sigCanvas2.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
      setNurseSignature(NurseSignature);
    };

    const [Signin1, setSignin1] = useState("")
    const [Signin2, setSignin2] = useState("")
    const [Signin3, setSignin3] = useState("")
    const [Signin4, setSignin4] = useState("")
    const [Signin5, setSignin5] = useState("")
    const [Signin6, setSignin6] = useState("")
    const [Signin7, setSignin7] = useState("")
    const [Signin8, setSignin8] = useState("")
    const [Signin9, setSignin9] = useState("")

    const [TimeOut1, setTimeOut1] = useState("")
    const [TimeOut2, setTimeOut2] = useState("")
    const [TimeOut3, setTimeOut3] = useState("")
    const [TimeOut4, setTimeOut4] = useState("")
    const [TimeOut5, setTimeOut5] = useState("")
    const [TimeOut6, setTimeOut6] = useState("")
    const [TimeOut7, setTimeOut7] = useState("")

    const [Signout1, setSignout1] = useState("")
    const [Signout2, setSignout2] = useState("")
    const [Signout3, setSignout3] = useState("")
    const [Signout4, setSignout4] = useState("")

    const submitSafteyChecklist = async () => {  
   
      try {
        const formdata = new FormData();
        const Surgeonsign = await fetch(SurgeonSignature).then((res) => res.blob());
        const Anesthesiologistsign = await fetch(AnesthesiologistSignature).then((res) => res.blob());
        const Nursesign = await fetch(NurseSignature).then((res) => res.blob());
        formdata.set("patientId", patientdetails?._id);
        formdata.set("causeId", cause?._id);
        formdata.set("Signin1", Signin1);
        formdata.set("Signin2", Signin2);
        formdata.set("Signin3", Signin3);
        formdata.set("Signin4", Signin4);
        formdata.set("Signin5", Signin5);
        formdata.set("Signin6", Signin6);
        formdata.set("Signin7", Signin7);
        formdata.set("Signin8", Signin8);
        formdata.set("Signin9", Signin9);
        formdata.set("TimeOut1", TimeOut1);
        formdata.set("TimeOut2", TimeOut2);
        formdata.set("TimeOut3", TimeOut3);
        formdata.set("TimeOut4", TimeOut4);
        formdata.set("TimeOut5", TimeOut5);
        formdata.set("TimeOut6", TimeOut6);
        formdata.set("TimeOut7", TimeOut7);
        formdata.set("Signout1", Signout1);
        formdata.set("Signout2", Signout2);
        formdata.set("Signout3", Signout3);
        formdata.set("Signout4", Signout4);

        formdata.set("SurgeonSignature", Surgeonsign, "surgeon-signature.png");
        formdata.set("AnesthesiologistSignature", Anesthesiologistsign, "anesthesiologist-signature.png");
        formdata.set("NurseSignature", Nursesign, "nurse-signature.png");
        const config = {
          url: "/addsurgicalsafety",
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
  <>
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
        {" "}
        <h6
          className="fw-bold mt-2"
          style={{ color: "#20958C", fontSize: "30px" }}
        >
          SURGICAL SAFETY CHECKLIST
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
              style={{ color: "#20958C", fontSize: "30px" }}
            >
              SURGICAL SAFETY CHECKLIST
            </h6>
          </div>
          <div
            style={{
              // paddingLeft: "42px",
              // paddingRight: "42px",
              textAlign: "justify",
            }}
          >
            <div className="checkList">
              <div
                className="header"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: "1px solid #20958C",
                  padding: "5px",
                }}
              >
                <p>Patient Name :  {`${patientdetails?.Firstname} ${patientdetails?.Lastname} `}</p>
                <p>IP No. : {patientdetails?.PatientId}</p>
                <p>Date :  {moment(patientdetails?.createdAt).format("DD-MM-YYYY")}</p>
                <p>Age : {ageOutput}</p>
                <p>Sex: {patientdetails?.Gender}</p>
              </div>

              <div
                className="container"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <div
                  className="signin"
                  style={{
                    flex: "1",
                    padding: "5px",
                    margin: "3px",
                  }}
                >
                  <p>anaesthesia ........</p>
                  <Table>
                    <thead>
                      <tr style={{ textAlign: "center" }}>
                        <th >SIGN IN</th>
                        <th ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          Nurse Verbaly confirms with team
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                            <Checkbox
                            onChange={(e)=>setSignin1(e.target.checked ? 'Yes' : '')}
                            checked ={Signin1==="Yes"}
                            />
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          The name of the procedure recorded
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        > <Checkbox
                        onChange={(e)=>setSignin2(e.target.checked ? 'Yes' : '')}
                        checked ={Signin2==="Yes"}
                        /></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          That instrument, sponge and needle counts are
                          correct(or not applicable)
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        > 
                        <Checkbox
                        onChange={(e)=>setSignin3(e.target.checked ? 'Yes' : '')}
                        checked ={Signin3==="Yes"}
                        /></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          How the specimen is lebelled (including patient name)
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        > <Checkbox
                        onChange={(e)=>setSignin4(e.target.checked ? 'Yes' : '')}
                        checked ={Signin4==="Yes"}
                        /></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                            fontWeight:"bold"
                          }}
                        >
                          Whether there are any 
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        ></td>
                      </tr>
                      <tr
                       style={{
                        // width: "90%",
                        border: "0.5px  solid #20958C",
                      }}
                      >
                        Surgeon, anaesthesia professional..?
                         Yes <Checkbox
                            onChange={(e)=>setSignin5(e.target.checked ? 'Yes' : '')}
                            checked ={Signin5==="Yes"}
                         />
                         No <Checkbox
                            onChange={(e)=>setSignin5(e.target.checked ? 'No' : '')}
                            checked ={Signin5==="No"}
                         />
                      </tr>
                      <tr
                       style={{
                        // width: "90%",
                        border: "0.5px  solid #20958C",
                      }}
                      >
                        Surgeon, anaesthesia professional..?
                         Yes <Checkbox
                            onChange={(e)=>setSignin6(e.target.checked ? 'Yes' : '')}
                            checked ={Signin6==="Yes"}
                         />
                         No 
                         <Checkbox
                           onChange={(e)=>setSignin6(e.target.checked ? 'No' : '')}
                           checked ={Signin6==="No"}
                         />
                      </tr>
                      <tr
                       style={{
                        border: "0.5px  solid #20958C",
                      }}
                      >                        
                        <ul>
                            <li>Surgeon, anaesthesia professional..? 
                              <Checkbox 
                                onChange={(e)=>setSignin7(e.target.checked ? 'Yes' : '')}
                                checked ={Signin7==="Yes"}
                              /></li>
                            <li>Surgeon, anaesthesia professional..? 
                              <Checkbox
                                onChange={(e)=>setSignin8(e.target.checked ? 'Yes' : '')}
                                checked ={Signin8==="Yes"}
                              /></li>
                            <li>Surgeon, anaesthesia professional..? 
                              <Checkbox
                               onChange={(e)=>setSignin9(e.target.checked ? 'Yes' : '')}
                               checked ={Signin9==="Yes"}
                              /></li>
                        </ul>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div
                  className="timeout"
                  style={{
                    flex: "1",
                    padding: "5px",
                    margin: "3px",
                  }}
                >
                  <p>Before skin Incision.....</p>
                  <Table>
                    <thead>
                      <tr style={{ textAlign: "center" }}>
                        <th colSpan={2}>TIME OUT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          Confirm all team members have introduced themselves by
                          name and role
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          <Checkbox
                          onChange={(e)=>setTimeOut1(e.target.checked ? 'Yes':'')}
                          checked={TimeOut1==="Yes"}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          Surgeon,anaesthesia professional and nurse Verbaly
                          confirm Patient Site Procedure
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        ><Checkbox
                        onChange={(e)=>setTimeOut2(e.target.checked ? 'Yes':'')}
                        checked={TimeOut2==="Yes"}
                        /></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          Anticipated critical events
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        ><Checkbox
                        onChange={(e)=>setTimeOut3(e.target.checked ? 'Yes':'')}
                        checked={TimeOut3==="Yes"}
                        /></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          Surgeon reviews: What are the critical or unexpected
                          steps, operative duration, anticipated blood loos?
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        ><Checkbox
                        onChange={(e)=>setTimeOut4(e.target.checked ? 'Yes':'')}
                        checked={TimeOut4==="Yes"}
                        /></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          Anaesthesia team reviews : Are there any
                          patient-specific concerns ?
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        ></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          Nursing/ OT technician reviews: Has
                          sterility(Including indicator results ) been
                          confirmed? <br />
                          Are there equipment issues or any conserns?
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        ><Checkbox
                        onChange={(e)=>setTimeOut5(e.target.checked ? 'Yes':'')}
                        checked={TimeOut5==="Yes"}
                        /></td>
                      </tr>

                      <tr>
                        <td
                          colSpan={2}
                          style={{
                            width: "100%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          Has antibiotic prophylaxis been given within the last
                          60 minutes ?
                          <tr>
                            <td
                              style={{
                                border: "0.5px  solid #20958C",
                              }}
                            >
                              Yes
                            </td>
                            <td
                              style={{
                                border: "0.5px  solid #20958C",
                              }}
                            ><Checkbox
                            onChange={(e)=>setTimeOut6(e.target.checked ? 'Yes':'')}
                            checked={TimeOut6==="Yes"}
                            /></td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                border: "0.5px  solid #20958C",
                              }}
                            >
                              Not applicable
                            </td>
                            <td
                              style={{
                                border: "0.5px  solid #20958C",
                              }}
                            ><Checkbox
                            onChange={(e)=>setTimeOut6(e.target.checked ? 'No':'')}
                            checked={TimeOut6==="No"}
                            /></td>
                          </tr>
                        </td>
                      </tr>

                      <tr>
                        <td
                          colSpan={2}
                          style={{
                            width: "100%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          Is essential imaging displayed ?
                          <tr>
                            <td
                              style={{
                                border: "0.5px  solid #20958C",
                              }}
                            >
                              Yes
                            </td>
                            <td
                              style={{
                                border: "0.5px  solid #20958C",
                              }}
                            ><Checkbox
                            onChange={(e)=>setTimeOut7(e.target.checked ? 'Yes':'')}
                            checked={TimeOut7==="Yes"}
                            /></td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                border: "0.5px  solid #20958C",
                              }}
                            >
                              Not applicable
                            </td>
                            <td
                              style={{
                                border: "0.5px  solid #20958C",
                              }}
                            ><Checkbox
                            onChange={(e)=>setTimeOut7(e.target.checked ? 'No':'')}
                            checked={TimeOut7==="No"}
                            /></td>
                          </tr>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div
                  className="signout"
                  style={{
                    flex: "1",
                    padding: "5px",
                    margin: "3px",
                  }}
                >
                  <p>Before verbaly confirms with the team...</p>
                  <Table>
                    <thead>
                      <tr style={{ textAlign: "center" }}>
                        <th colSpan={2}>SIGN OUT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          Nurse Verbaly confirms with team :
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        ></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          The name of the procedure recorded
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        ><Checkbox
                        onChange={(e)=>setSignout1(e.target.checked ? 'Yes':'')}
                        checked={Signout1==="Yes"}
                        /></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          That instrument, sponge and needle counts are
                          correct(or not applicable)
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        ><Checkbox
                        onChange={(e)=>setSignout2(e.target.checked ? 'Yes':'')}
                        checked={Signout2==="Yes"}
                        /></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          How the specimen is lebelled (including patient name)
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        ><Checkbox
                        onChange={(e)=>setSignout3(e.target.checked ? 'Yes':'')}
                        checked={Signout3==="Yes"}
                        /></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          Whether there are any equipment problems to be
                          addressed
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        ></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "90%",
                            border: "0.5px  solid #20958C",
                          }}
                        >
                          Surgeon, anaesthesia professional and nurse review the
                          key concerns for Recovery and management of the
                          patient
                        </td>
                        <td
                          style={{
                            width: "10%",
                            border: "0.5px  solid #20958C",
                          }}
                        ><Checkbox
                        onChange={(e)=>setSignout4(e.target.checked ? 'Yes':'')}
                        checked={Signout4==="Yes"}
                        /></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>

              <div
                className="container"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <div
                  className="signin"
                  style={{
                    flex: "1",
                    padding: "5px",
                    margin: "3px",
                  }}
                >
                  <p style={{ textAlign: "center" }}>
                    <b>Signature of Surgeon </b>
                  </p><br/>
                  {!SurgeonSignature ? (
                            <div
                              style={{
                                border: "1px solid #dee2e6",
                                margin: "10px",
                              }}
                            >
                              <SignatureCanvas
                                ref={sigCanvas}
                                penColor="black"
                                canvasProps={{
                                  width: 300,
                                  height: 100,
                                  className: "sigCanvas",
                                }}
                              />
                              <div className="d-flex gap-3">
                                <button onClick={clear}>Clear</button>
                                <button onClick={save}>Save</button>
                              </div>
                            </div>
                          ) : (
                            <img style={{marginLeft:"69px"}} src={SurgeonSignature} alt="Signature" />
                          )}

                </div>

                <div
                  className="timeout"
                  style={{
                    flex: "1",
                    padding: "5px",
                    margin: "3px",
                  }}
                >
                  <p style={{ textAlign: "center" }}>
                    <b>Signature of Anesthesiologist</b>
                  </p><br/>
                  {!AnesthesiologistSignature ? (
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
                                  width: 300,
                                  height: 100,
                                  className: "sigCanvas",
                                }}
                              />
                              <div className="d-flex gap-3">
                                <button onClick={clear1}>Clear</button>
                                <button onClick={save1}>Save</button>
                              </div>
                            </div>
                          ) : (
                            <img style={{marginLeft:"69px"}} src={AnesthesiologistSignature} alt="Signature" />
                          )}
                </div>

                <div
                  className="signout"
                  style={{
                    flex: "1",
                    padding: "5px",
                    margin: "3px",
                  }}
                >
                  <p style={{ textAlign: "center" }}>
                    <b>Signature of Nurse</b>
                  </p><br/>
                  {!NurseSignature ? (
                            <div
                              style={{
                                border: "1px solid #dee2e6",
                                margin: "10px",
                              }}
                            >
                              <SignatureCanvas
                                ref={sigCanvas2}
                                penColor="black"
                                canvasProps={{
                                  width: 300,
                                  height: 100,
                                  className: "sigCanvas",
                                }}
                              />
                              <div className="d-flex gap-3">
                                <button onClick={clear2}>Clear</button>
                                <button onClick={save2}>Save</button>
                              </div>
                            </div>
                          ) : (
                            <img style={{marginLeft:"69px"}} src={NurseSignature} alt="Signature" />
                          )}
                </div>
              </div>
              <div className='text-center'>
                <Button onClick={submitSafteyChecklist}>Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default SafetyCheckList