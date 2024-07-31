import { Checkbox } from '@mui/material';
import moment from 'moment';
import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaBackward } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { useLocation } from 'react-router-dom';

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
                        {/* <th >SIGN IN</th>
                        <th ></th> */}
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
                            <Checkbox/>
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
                        > <Checkbox/></td>
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
                        > <Checkbox/></td>
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
                        > <Checkbox/></td>
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
                         Yes <Checkbox/>
                         No <Checkbox/>
                      </tr>
                      <tr
                       style={{
                        // width: "90%",
                        border: "0.5px  solid #20958C",
                      }}
                      >
                        Surgeon, anaesthesia professional..?
                         Yes <Checkbox/>
                         No <Checkbox/>
                      </tr>
                      <tr
                       style={{
                        border: "0.5px  solid #20958C",
                      }}
                      >
                        <ul>
                            <li>Surgeon, anaesthesia professional..? <Checkbox/></li>
                            <li>Surgeon, anaesthesia professional..? <Checkbox/></li>
                            <li>Surgeon, anaesthesia professional..? <Checkbox/></li>
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
                        ></td>
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
                        ></td>
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
                        ></td>
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
                        ></td>
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
                        ></td>
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
                            ></td>
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
                            ></td>
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
                            ></td>
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
                            ></td>
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
                          Nurse Verbaly confirms with team
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
                        ></td>
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
                        ></td>
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
                        ></td>
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
                        ></td>
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
                  </p>
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
                  </p>
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
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default SafetyCheckList