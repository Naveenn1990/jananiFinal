import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const DoctorForms = () => {
  const navigate = useNavigate();

  const [DocTreatChart, setDocTreatChart] = useState(true);
  const [DocNotes, setDocNotes] = useState(false);

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
          }}
        >
          Doctors Notes
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
                        Name:{" "}
                        <span>
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "86%" }}
                          />
                        </span>
                      </td>
                      <td
                        style={{ width: "33%", border: "2px  solid #20958C" }}
                      >
                        Age:{" "}
                        <span>
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "90%" }}
                          />
                        </span>
                      </td>
                      <td
                        style={{ width: "33%", border: "2px  solid #20958C" }}
                      >
                        Sex:{" "}
                        <span>
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "91%" }}
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
                  <tbody>
                    <tr>
                      <td style={{ width: "50%", border: "2px solid #20958C" }}>
                        Pt ID:{" "}
                        <span>
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "92%" }}
                          />
                        </span>
                      </td>
                      <td style={{ width: "50%", border: "2px solid #20958C" }}>
                        Ward:{" "}
                        <span>
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "92%" }}
                          />
                        </span>
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
        </>
      ) : (
        <>
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
                    Name:{" "} <span>
                      <input type="text" className="vi_0" style={{width:"85%"}}/>
                    </span>
                  </td>
                  <td style={{ width: "33%", border: "2px  solid #20958C" }}>
                    Age:{" "} <span>
                      <input type="text" className="vi_0" style={{width:"90%"}}/>
                    </span>
                  </td>
                  <td style={{ width: "33%", border: "2px  solid #20958C" }}>
                    Sex:{" "} <span>
                      <input type="text" className="vi_0" style={{width:"89%"}}/>
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
              <tbody>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Pt ID:{" "} <span>
                      <input type="text" className="vi_0" style={{width:"90%"}}/>
                    </span>
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Ward: <span>
                      <input type="text" className="vi_0" style={{width:"90%"}}/>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Dept:{" "} <span>
                      <input type="text" className="vi_0" style={{width:"90%"}}/>
                    </span>
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Doctor:{" "} <span>
                      <input type="text" className="vi_0" style={{width:"90%"}}/>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    DOA:{" "} <span>
                      <input type="text" className="vi_0" style={{width:"90%"}}/>
                    </span>
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Known Drug Allergies:{" "} <span>
                      <input type="text" className="vi_0" style={{width:"80%"}}/>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Diagnosis: <span>
                      <input type="text" className="vi_0" style={{width:"70%"}}/>
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
                    Doctor's sign
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                  
                      <input type="text" className="vi_0" style={{width:"70%"}}/>
                   
                  </td>
                  <td style={{ width: "60%", border: "2px  solid #20958C" }}>
                  <input type="text" className="vi_0" style={{width:"70%"}}/>
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                  <input type="file" className="vi_0" style={{width:"70%"}}/>
                  </td>
                </tr>
              </tbody>
            </Table>
            
          </div>
        </div>
      </div>
        </>
      )}
    </div>
  );
};

export default DoctorForms;
