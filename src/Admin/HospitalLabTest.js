import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlineBarcode } from "react-icons/ai";
import { BsEyeFill, BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { BiSolidFilePdf } from "react-icons/bi";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Barcode from "react-barcode";
export default function Hospitallabtestlist() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const createPDF = async () => {
    // setRotate(360);
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Invoice.pdf");
  };

  const createPdf11 = () => {
    createPDF();
  };
  return (
    <div>
      <div style={{ padding: "1%" }}>
        {/* <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Hospital Lab
        </h6> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <input
            placeholder="Search Lab Test"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
          />
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ImLab className="AddIcon1" onClick={() => setShow(true)} />

            <button
              style={{
                border: "none",
                fontSize: "14px",
                fontWeight: "600",
                backgroundColor: "#20958c",
                margin: "0px 10px",
                borderRadius: "4px",
                color: "white",
              }}
              onClick={() => setShow1(true)}
            >
              {" "}
              + ADD LAB PRICE
            </button>

            <button
              style={{
                border: "none",
                fontSize: "14px",
                fontWeight: "600",
                backgroundColor: "#20958c",
                borderRadius: "4px",
                color: "white",
              }}
              onClick={() => setShow2(true)}
            >
              {" "}
              + LAB TOTAL REVENUE
            </button>
          </div> */}
        </div>

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Test Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table responsive="lg" style={{ marginTop: "1%" }}>
              <tbody>
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td
                    style={{
                      border: "1px solid lightgrey",
                      backgroundColor: "#20958c",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Test Number :
                  </td>
                  <td style={{ border: "1px solid lightgrey" }}>#20958c</td>
                  <td
                    style={{
                      border: "1px solid lightgrey",
                      backgroundColor: "#20958c",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Patient Name :
                  </td>
                  <td style={{ border: "1px solid lightgrey" }}>Anuj Kumar</td>
                </tr>
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td
                    style={{
                      border: "1px solid lightgrey",
                      backgroundColor: "#20958c",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Gender :
                  </td>
                  <td style={{ border: "1px solid lightgrey" }}>Male</td>
                  <td
                    style={{
                      border: "1px solid lightgrey",
                      backgroundColor: "#20958c",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Date of birth :
                  </td>
                  <td style={{ border: "1px solid lightgrey" }}>16/01/1999</td>
                </tr>

                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td
                    style={{
                      border: "1px solid lightgrey",
                      backgroundColor: "#20958c",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Mobile Number :
                  </td>
                  <td style={{ border: "1px solid lightgrey" }}>1232123545</td>
                  <td
                    style={{
                      border: "1px solid lightgrey",
                      backgroundColor: "#20958c",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Email :
                  </td>
                  <td style={{ border: "1px solid lightgrey" }}>
                    test@gmail.com
                  </td>
                </tr>

                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td
                    style={{
                      border: "1px solid lightgrey",
                      backgroundColor: "#20958c",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Age :
                  </td>
                  <td style={{ border: "1px solid lightgrey" }}>24</td>
                  <td
                    style={{
                      border: "1px solid lightgrey",
                      backgroundColor: "#20958c",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Blood Group :
                  </td>
                  <td style={{ border: "1px solid lightgrey" }}>AB+</td>
                </tr>

                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td
                    style={{
                      border: "1px solid lightgrey",
                      backgroundColor: "#20958c",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Test Type :
                  </td>
                  <td style={{ border: "1px solid lightgrey" }}>HS-1AS</td>
                  <td
                    style={{
                      border: "1px solid lightgrey",
                      backgroundColor: "#20958c",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Test Name :
                  </td>
                  <td style={{ border: "1px solid lightgrey" }}>Blood Test</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>

        <Modal size="md" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Lab test Price</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  <option>Select Lab Test</option>
                  <option>Test-1</option>
                  <option>Test-2</option>
                </select>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Lab Test Price"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  marginRight: "20px",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => setShow1(false)}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow1(false);
                  alert("lab test price added");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Lab Total Revenue</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  <option>Select Lab test</option>
                  <option>Test-1</option>
                  <option>Test-2</option>
                </select>
              </div>

              <div
                style={{
                  borderRadius: "0px",
                  backgroundColor: "#20958c",
                  color: "white",
                  margin: "5% 20% 2% 20%",
                  width: "60%",
                  padding: "4%",
                }}
              >
                <h6 style={{ textAlign: "center", fontSize: "20px" }}>
                  Total Revenue
                </h6>
                <h6 style={{ textAlign: "center", fontSize: "30px" }}>
                  ₹ 12000
                </h6>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal size="lg" show={show4} onHide={handleClose4}>
          <Modal.Body>
            <div id="pdf" style={{ padding: "4%" }}>
              <h5 style={{ textAlign: "center", marginBottom: "2%" }}>
                Lab Test Details
              </h5>
              <Table responsive="lg" style={{ marginTop: "1%" }}>
                <tbody>
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Test Number :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>#20958c</td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Patient Name :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>
                      Anuj Kumar
                    </td>
                  </tr>
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Gender :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>Male</td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Date of birth :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>
                      16/01/1999
                    </td>
                  </tr>

                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Mobile Number :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>
                      1232123545
                    </td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Email :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>
                      test@gmail.com
                    </td>
                  </tr>

                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Age :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>24</td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Blood Group :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>AB+</td>
                  </tr>

                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Test Type :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>HS-1AS</td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Test Name :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>
                      Blood Test
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  marginRight: "20px",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => setShow4(false)}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  border: "1px solid white",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={createPDF}
              >
                PRINT PDF
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.NO</th>
              <th>TEST NUMBER</th>
              <th>PATIENT NAME</th>
              <th>MOBILE</th>
              <th>EMAIL</th>
              <th>TEST NAME</th>

              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <td>1</td>
              <td>#20958c</td>
              <td>Anuj Kumar</td>
              <td>1224531545</td>
              <td> test@gmail.com</td>
              <td>
                {" "}
                <button
                  style={{
                    color: "red",
                    border: "1px solid red",
                    borderRadius: "10px",
                    backgroundColor: "white",
                  }}
                >
                  Blood test
                </button>
              </td>

              <td>
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <BsEyeFill
                    style={{
                      color: "#20958c",
                      marginRight: "1%",
                      fontSize: "24px",
                    }}
                    onClick={() => setShow(true)}
                  />
                  <BiSolidFilePdf
                    style={{ color: "red", fontSize: "24px" }}
                    onClick={() => setShow4(true)}
                  />
                  <AiOutlineBarcode
                    style={{
                      fontSize: "24px",
                    }}
                  />
                </div>
              </td>
            </tr>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <td>2</td>
              <td>#20958c</td>
              <td>Anuj Kumar</td>
              <td>1224531545</td>
              <td> test@gmail.com</td>
              <td>
                {" "}
                <button
                  style={{
                    color: "red",
                    border: "1px solid red",
                    borderRadius: "10px",
                    backgroundColor: "white",
                  }}
                >
                  Blood test
                </button>
              </td>

              <td>
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <BsEyeFill
                    style={{
                      color: "#20958c",
                      marginRight: "1%",
                      fontSize: "24px",
                    }}
                    onClick={() => setShow(true)}
                  />
                  <BiSolidFilePdf
                    style={{ color: "red", fontSize: "24px" }}
                    onClick={() => setShow4(true)}
                  />
                  <AiOutlineBarcode
                    style={{
                      fontSize: "24px",
                    }}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
