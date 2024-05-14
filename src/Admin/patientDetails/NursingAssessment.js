import React from "react";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

const NursingAssessment = () => {
  return (
    <>
      <div className="mt-2 d-dlex text-end gap-2">
        <Button
          style={{
            padding: "6px",
            border: "none",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
            marginRight: "20px",
          }}
        >
          Print <FiDownload />
        </Button>
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
                  </td>

                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                    UHID No :
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} style={{ border: "2px  solid #20958C" }}>
                    Date & Time of Nursing Initial Assessment:{" "}
                  </td>
                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                    General Consent Signed: yes/No. :
                  </td>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Vital Signs
                  </th>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Temp
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Pulse ../Min
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Resp: ../Min
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    BP:
                  </td>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Height
                  </th>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Weight
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Blood Group
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Spo2(if required)
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    GRBS(if required)
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ border: "2px  solid #20958C" }}>
                    Complaints during admission and it's duration
                  </th>
                  <td colSpan={4} style={{ border: "2px  solid #20958C" }}></td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ border: "2px  solid #20958C" }}>Neurological</th>
                  <td colSpan={4} style={{ border: "2px  solid #20958C" }}>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        Oriented : yes/no
                      </td>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        Speech: Clear / Slurred
                      </td>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        Speech: Clear / Slurred{" "}
                      </td>
                    </tr>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        Level of Consciousness (Conscious / Semiconscious /
                        Unconscious)
                      </td>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        Visual Impairment None / Wear Spectacles /BLind -L-R{" "}
                      </td>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        Extremity strength Equal / Unequal
                      </td>
                    </tr>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        Pupils Equal / Unqual / Reactive / Sluggish
                      </td>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        Hearing Impairment None/ Uses Aids / Deaf-L-R
                      </td>
                      <td
                        style={{ width: "33%", border: ".5px  solid #20958C" }}
                      >
                        Pain : Yes / No. <br /> Location:
                      </td>
                    </tr>
                  </td>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <th style={{ border: "2px  solid #20958C" }}>Pain Scale</th>
                  <th colSpan={4} style={{ border: "2px  solid #20958C" }}></th>
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
                        Airway :
                      </td>
                      <td
                        style={{ width: "50%", border: ".5px  solid #20958C" }}
                      >
                        Clear / Obstructed
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
                        Present / Absent
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
                        Yes/no
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
                        Yes / No
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
                        Yes / No
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
                        Yes/no
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
                        Present / Absent
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
                        ..........
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
                        Warm/ Dry / Coll / Diaphoretic
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
                        Yes / No
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
                          Color: Normal / Pale / Flushed / Cyanotic / Jaundiced
                        </td>
                        <td
                          style={{
                            width: "50%",
                            border: ".5px  solid #20958C",
                          }}
                        >
                          Turgor : Good / Fair / Poor
                        </td>
                      </tr>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{
                            width: "50%",
                            border: ".5px  solid #20958C",
                          }}
                        >
                          Temp : Cool / Warm / Hot
                        </td>
                        <td
                          style={{
                            width: "50%",
                            border: ".5px  solid #20958C",
                          }}
                        >
                          Mucous membrane: Intact / impaired
                        </td>
                      </tr>
                      <tr style={{ textAlign: "left" }}>
                        <td
                          style={{
                            width: "50%",
                            border: ".5px  solid #20958C",
                          }}
                        >
                          Moisture : Dry / Clammy
                        </td>
                        <td
                          style={{
                            width: "50%",
                            border: ".5px  solid #20958C",
                          }}
                        >
                          Condition : Pink / Pale / Moist Dry
                        </td>
                      </tr>
                    </div>
                    <div>
                      <tr style={{ textAlign: "left" }}>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          Pressure Sore: <br /> present/No
                        </td>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          Stage 1 <br /> (Red Coloration)
                        </td>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          Stage II <br /> (Skin Break only)
                        </td>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          Stage III <br />
                          (Fat exposed)
                        </td>
                        <td style={{ border: "0.5px  solid #20958C" }}>
                          Stage IV <br /> (Muscle/ Bone exposed)
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
                        Loss of Appetite: yes/ no
                      </td>
                      <td
                        style={{ width: "33%", border: "0.5px  solid #20958C" }}
                      >
                        Abdomen : Soft/ Firm/ Teacher{" "}
                      </td>
                      <td
                        rowSpan={3}
                        style={{ width: "33%", border: "0.5px  solid #20958C" }}
                      >
                        Swallowing diffulty: yes: no
                      </td>
                    </tr>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "33%", border: "0.5px  solid #20958C" }}
                      >
                        Nausea / Vomiting / Diarrhoea/
                      </td>
                      <td
                        rowSpan={2}
                        style={{ width: "33%", border: "0.5px  solid #20958C" }}
                      >
                        Distended / Expelling Flatus:{" "}
                      </td>
                    </tr>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "33%", border: "0.5px  solid #20958C" }}
                      >
                        Contipation
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
                        Dysuria: Yes/No
                      </td>
                      <td
                        style={{ width: "50%", border: "0.5px  solid #20958C" }}
                      >
                        Haemeturia : yes/ No
                      </td>
                    </tr>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "50%", border: "0.5px  solid #20958C" }}
                      >
                        Frequency :
                      </td>
                      <td
                        style={{ width: "50%", border: "0.5px  solid #20958C" }}
                      >
                        Foley's Catheter : yes/ No
                      </td>
                    </tr>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "50%", border: "0.5px  solid #20958C" }}
                      >
                        Incontinence : Yes/No
                      </td>
                      <td
                        style={{ width: "50%", border: "0.5px  solid #20958C" }}
                      >
                        Inserted on :
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
                        LMP
                      </td>
                      <td
                        style={{ width: "50%", border: "0.5px  solid #20958C" }}
                      >
                        EDD:{" "}
                      </td>
                    </tr>
                    <tr style={{ textAlign: "left" }}>
                      <td
                        style={{ width: "50%", border: "0.5px  solid #20958C" }}
                      >
                        Dating Scan(11 to 14 Weeks) :
                      </td>
                      <td
                        style={{ width: "50%", border: "0.5px  solid #20958C" }}
                      >
                        POG :{" "}
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
                  <th colSpan={3}>Name & Signature of Nurse:</th>
                  <th>Date: </th>
                  <th>Time: </th>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default NursingAssessment;
