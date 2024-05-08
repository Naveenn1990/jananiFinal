import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Form} from "react-bootstrap";
import { Checkbox } from "@mui/material";

const DoctorForms = () => {
  const navigate = useNavigate();

  const [DocTreatChart, setDocTreatChart] = useState(true);
  const [DocNotes, setDocNotes] = useState(false);
  const [SurgeryReport, setSurgeryReport] = useState(false);

  const [Drug, setDrug] = useState([]);
  return (
    <div>
      <div className="d-flex justify-content-around p-5">
        <button
          style={{
            padding: "6px",
            border: "1px solid white",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
          }}
          onClick={() => {
            setDocTreatChart(true);
            setDocNotes(false);
            setSurgeryReport(false)
          }}
        >
          <div>
            {/* <RiBillFill style={{fontSize:"38px"}}/>   */}
            Doctor Treatment Chart
          </div>
        </button>

        <button
          style={{
            padding: "6px",
            border: "1px solid white",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
          }}
          onClick={() => {
            setDocTreatChart(false);
            setDocNotes(true);
            setSurgeryReport(false)
          }}
        >
          Doctors Notes
        </button>
        <button
              style={{
                padding: "6px",
                border: "1px solid white",
                backgroundColor: "#20958c",
                color: "white",
                borderRadius: "0px",
              }}
              onClick={() => {
                setDocTreatChart(false);
                setDocNotes(false);
                setSurgeryReport(true)
              }}
            >
              Surgical Safety
            </button>
      </div>

      {DocTreatChart ? (
        <>
          <div className="text-center mt-1">
            {" "}
            <h6
              className="fw-bold mt-2"
              style={{ color: "#20958C", fontSize: "30px" }}
            >
              DOCTORS TREATMENT CHART
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
                  <img src="/img/logo.jpg" alt="" style={{ width: "100px" }} />
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
                  DOCTORS TREATMENT CHART
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
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{ width: "33%", border: "2px  solid #20958C" }}
                      >
                        Name:{" "} Sheetal
                      </td>
                      <td
                        style={{ width: "33%", border: "2px  solid #20958C" }}
                      >
                        Age:{" "} 22
                       
                      </td>
                      <td
                        style={{ width: "33%", border: "2px  solid #20958C" }}
                      >
                        Sex:{" "} Female
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Table
                  style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    margin: "auto",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ width: "50%", border: "2px solid #20958C" }}>
                        Pt ID:{" "} 098787656
                      </td>
                      <td style={{ width: "50%", border: "2px solid #20958C" }}>
                        Ward:{" "} 26/32
                      </td>
                    </tr>
                    <tr>
                      <td
                        colSpan={2}
                        style={{ width: "100%", border: "2px  solid #20958C" }}
                      >
                        Doctor Incharge:{" "}
                        <span>
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "90%" }}
                          />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Table
                  style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    margin: "auto",
                  }}
                >
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th style={{ width: "10%", border: "2px solid #20958C" }}>
                        Date
                      </th>
                      <th style={{ width: "10%", border: "2px solid #20958C" }}>
                        Time
                      </th>
                      <th style={{ width: "50%", border: "2px solid #20958C" }}>
                        Notes
                      </th>
                      <th style={{ width: "20%", border: "2px solid #20958C" }}>
                        Doctor's sign
                      </th>
                      <th style={{ width: "20%", border: "2px solid #20958C" }}>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ textAlign: "center" }}>
                      <td style={{ width: "10%", border: "2px solid #20958C" }}>
                        {" "}
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "86%" }}
                        />
                      </td>
                      <td style={{ width: "10%", border: "2px solid #20958C" }}>
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "86%" }}
                        />
                      </td>
                      <td style={{ width: "50%", border: "2px solid #20958C" }}>
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "97%" }}
                        />
                      </td>
                      <td
                        style={{ width: "20%", border: "2px  solid #20958C" }}
                      >
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "86%" }}
                        />
                      </td>
                      <td
                        style={{ width: "10%", border: "2px  solid #20958C" }}
                      >
                        <Button
                        //    onClick={adddrug}
                        >
                          <IoMdAdd />
                        </Button>
                      </td>
                    </tr>
                    {Drug?.map((item, i) => {
                      return (
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <MdDelete
                              //   onClick={() => deleteDrug(i)}
                              style={{
                                cursor: "pointer",
                                color: "red",
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className="text-center mt-2 mb-2">
        <button className="btn btn-success">Submit</button>
      </div>
        </>
      ) : (<>{DocNotes?(<>
       <div className="text-center mt-1">
        {" "}
        <h6
          className="fw-bold mt-2"
          style={{ color: "#20958C", fontSize: "30px" }}
        >
          DOCTORS NOTES
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
              <img src="/img/logo.jpg" alt="" style={{ width: "100px" }} />
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
              DOCTORS NOTES
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
              }}
            >
              <tbody>
                <tr>
                  <td style={{ width: "33%", border: "2px  solid #20958C" }}>
                    Name:{" "}  Sheetal
                  </td>
                  <td style={{ width: "33%", border: "2px  solid #20958C" }}>
                    Age:{" "} 22
                  </td>
                  <td style={{ width: "33%", border: "2px  solid #20958C" }}>
                    Sex:{" "} Female
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                margin: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Pt ID:{" "} 9097768656
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Ward: 32/23
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Dept:{" "} Neurologists
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Doctor:{" "} Unknown
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    DOA:{" "} jsdgdf
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Known Drug Allergies:{" "} <span>
                      <input type="text" className="vi_0" style={{width:"70%"}}/>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Diagnosis: <span>
                      <input type="text" className="vi_0" style={{width:"92%"}}/>
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                margin: "auto",
              }}
            >
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Date
                  </th>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Time
                  </th>
                  <th style={{ width: "60%", border: "2px  solid #20958C" }}>
                    Notes
                  </th>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Doctor's sign
                  </th>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                  
                      <input type="text" className="vi_0" style={{width:"100%"}}/>
                   
                  </td>
                  <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                  <input type="text" className="vi_0" style={{width:"100%"}}/>
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                  <input type="text" className="vi_0" style={{width:"100%"}}/>
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                  <input type="file" className="vi_0" style={{width:"100%"}}/>
                  </td>
                  <td
                        style={{ width: "10%", border: "2px  solid #20958C" }}
                      >
                        <Button
                        //    onClick={adddrug}
                        >
                          <IoMdAdd />
                        </Button>
                      </td>
                </tr>
              </tbody>
            </Table>
            
          </div>
        </div>
      </div>
      <div className="text-center mt-2 mb-2">
        <button className="btn btn-success">Submit</button>
      </div>
      </>):(<>
      {SurgeryReport?(<>
        <div className="text-center mt-1">
        {" "}
        <h6
          className="fw-bold mt-2"
          style={{ color: "#20958C", fontSize: "30px" }}
        >
          SURGERY REPORT
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
              <img src="/img/logo.jpg" alt="" style={{ width: "100px" }} />
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
              SURGERY REPORT
            </h6>
          </div>
          <div
            className="text-center"
            style={{
              borderBottom: "1px solid #20958C",
              width: "100%",
              textAlign: "center",
            }}
          ></div>
          <div
          className="mt-2"
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
              <tbody>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Name:{" "} Sheetal Aily
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Age:{" "} 22
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Sex:{" "} Female
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={3}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Pt ID:{" "} 908866756
                  </td>
                  <td
                    colSpan={3}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Ward: 33
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Pre-Operative Diagnosis: <span>
                      <input type="text" className="vi_0" style={{width:"85%"}}/>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Surgeon:{" "} Rahul
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Assistant-1:{" "} Xyz1
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Assistant-2:{" "} Xyz2
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Anaesthetist:{" "} sadasdasddf
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Scrub Nurse:{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Circ Nurse:{" "}
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "16.6%", border: "2px  solid #20958C" }}>
                    Skin Wound Condition:{" "}
                  </td>
                  <td style={{ width: "16.6%", border: "2px  solid #20958C" }}>
                    Clean:{" "}
                  </td>
                  <td style={{ width: "16.6%", border: "2px  solid #20958C" }}>
                    Slightly Contaminated:{" "}
                  </td>
                  <td
                    style={{ width: "16.6%", border: "2px  solid #20958C" }}
                  ></td>
                  <td style={{ width: "16.6%", border: "2px  solid #20958C" }}>
                    Heavily COntaminated:{" "}
                  </td>
                  <td
                    style={{ width: "16.6%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    colSpan={6}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Name of Operaton{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    {/* Procedure:{" "} */}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Procedure</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    {/* Findings :{" "} */}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Findings</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                    Swab / Instruments{" "}
                  </td>
                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                  <Checkbox /> <Checkbox /> <hr />
                  </td>
                  <td colSpan={2} style={{ border: "2px  solid #20958C" }}>
                    Doctor's Signature
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <div className="text-center mt-2 mb-2">
        <button className="btn btn-success">Submit</button>
      </div>
      </>):(<></>)}
      </>)}</>)}
    </div>
  );
};

export default DoctorForms;
