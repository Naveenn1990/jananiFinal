import React from "react";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

const PreOperative = () => {
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
          PRE-OPERATIVE CHECK LIST
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
            // width: "1073px",
            margin: "auto",
            borderRadius: "20px",
            // height: "1700px",
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
              PRE-OPERATIVE CHECK LIST
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
                border: "1px  solid #20958C",
                borderCollapse: "collapse",
                width: "100%",
                margin: "auto",
              }}
            >
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th
                    colSpan={5}
                    style={{ width: "100%", border: "1px  solid #20958C" }}
                  >
                    PRE-OPERATIVE CHECK LIST
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Name:{" "}
                  </td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Age:{" "}
                  </td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Sex:{" "}
                  </td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    IP ID:{" "}
                  </td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Ward:
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={1}
                    style={{ width: "40%", border: "2px  solid #20958C" }}
                  >
                    Dept:{" "}
                  </td>
                  <td
                    colSpan={4}
                    style={{ width: "60%", border: "2px  solid #20958C" }}
                  >
                    Doctor:{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={1}
                    style={{ width: "40%", border: "2px  solid #20958C" }}
                  >
                    HB:{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "30%", border: "2px  solid #20958C" }}
                  >
                    Wt:{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "30%", border: "2px  solid #20958C" }}
                  >
                    Allergies:{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={5}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Procedure:{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={5}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Date/Time:{" "}
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                margin: "auto",
                marginBottom: "20px",
              }}
            >
              <tbody>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Sl.No.{" "}
                  </th>
                  <th style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Item{" "}
                  </th>
                  <th style={{ width: "15%", border: "2px  solid #20958C" }}>
                    YES{" "}
                  </th>
                  <th style={{ width: "15%", border: "2px  solid #20958C" }}>
                    No{" "}
                  </th>
                  <th style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Remarks
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    1{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Consent Signed{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    2{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Pre Medication Given{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    3{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Antibiotics Adminstered{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    4{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Blood Products Available{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    5{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Lab Results Present{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    6{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Radiology Films/ CD Present{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    7{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Saving / Skin Preparation Done{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    8{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Bath / Oral Hygeine Done{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    9{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Patient Voided{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    11{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Theatre Gown Worn{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    12{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    RT Inserted{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    13{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Pregnancy Test{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    14{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    HIV, HBsAg, HCV Tests{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                  </th>
                  <th style={{ width: "40%", border: "2px  solid #20958C" }}>
                    REMOVABLE ITEMS{" "}
                  </th>
                  <th style={{ width: "15%", border: "2px  solid #20958C" }}>
                    PRESENT
                  </th>
                  <th style={{ width: "15%", border: "2px  solid #20958C" }}>
                    REMOVED
                  </th>
                  <th style={{ width: "20%", border: "2px  solid #20958C" }}>
                    REMARKS
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    1{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Dentures: Upper / Lower / Partial (Specify){" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    2{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Contact Lenses{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    3{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Nail Polish{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th
                    style={{
                      width: "10%",
                      border: "2px  solid #20958C",
                      textAlign: "center",
                    }}
                  >
                    4{" "}
                  </th>
                  <td style={{ width: "40%", border: "2px  solid #20958C" }}>
                    Jewellery / Others{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    colSpan={5}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Any Message to Theatre Staff:{" "}
                  </td>
                </tr>

                <br />

                <tr>
                  <th
                    colSpan={2}
                    style={{
                      width: "50%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    Endorsed By (Ward Staff)
                  </th>
                  <th
                    colSpan={3}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Received By (OT Staff){" "}
                  </th>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{
                      width: "50%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    Name :
                  </td>
                  <td
                    colSpan={3}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Signature:
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{
                      width: "50%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    Name :
                  </td>
                  <td
                    colSpan={3}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Signature:
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreOperative;
