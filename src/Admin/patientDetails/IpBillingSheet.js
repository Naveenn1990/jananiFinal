import React from "react";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

const IpBillingSheet = () => {
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
          IP BILLING SHEET
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
              style={{ color: "#20958C", fontSize: "30px" }}
            >
              IP BILLING SHEET
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
                    Name:{" "}
                  </td>
                  <td style={{ width: "33%", border: "2px  solid #20958C" }}>
                    Age:{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Sex:{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "40%", border: "2px  solid #20958C" }}
                  >
                    Ph No.:{" "}
                  </td>
                  <td style={{ width: "60%", border: "2px  solid #20958C" }}>
                    IP No.:
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Admitting Doctor:{" "}
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Bed No.:
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "33%", border: "2px  solid #20958C" }}>
                    DOA:{" "}
                  </td>
                  <td style={{ width: "33%", border: "2px  solid #20958C" }}>
                    DOD:
                  </td>
                  <td style={{ width: "33%", border: "2px  solid #20958C" }}>
                    Ward Shift:{" "}
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
                <tr style={{ textAlign: "center" }}>
                  <th
                    rowSpan={7}
                    style={{
                      width: "5%",
                      height: "5px",
                      border: "2px  solid #20958C",
                      // transform: "rotate(90deg)",
                      textAlign: "center",
                    }}
                  >
                    {/* <div
                      style={{
                        textAlign: "center",
                        transform: "rotate(90deg)",
                        border: "1px solid black",
                        width: "150px",
                        height: "5%",
                      }}
                    >
                    </div> */}
                    <span>Amount paid</span>
                  </th>
                  <th style={{ width: "5%", border: "2px  solid #20958C" }}>
                    8
                  </th>
                  <th style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Date
                  </th>
                  <th style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Amount Received
                  </th>
                  <th style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Receipt No.
                  </th>
                  <th style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Date & Time
                  </th>
                  <th style={{ width: "15%", border: "2px  solid #20958C" }}>
                    2
                  </th>
                  <th
                    style={{
                      width: "15%",
                      width: "15%",
                      border: "2px  solid #20958C",
                    }}
                  >
                    1
                  </th>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ width: "5%", border: "2px  solid #20958C" }}>
                    1
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Bed No.
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ width: "5%", border: "2px  solid #20958C" }}>
                    2
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Date & Time
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ width: "5%", border: "2px  solid #20958C" }}>
                    3
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Bed No.
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>4</td>
                  <td
                    style={{ width: "5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Date & Time
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ width: "5%", border: "2px  solid #20958C" }}>
                    5
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Bed No.{" "}
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  >
                    Total
                  </td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
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
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Date
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Total
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Reg. Fees
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    MLC Charges
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Room Rent
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Duty Doctor Charges
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    NSG Charges
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Primary Consultant
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    rowSpan={5}
                    style={{ width: "5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Dressing Charges
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Suturing Charges
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Plastering Charges
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Dialysis Charges
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Delivery Charges
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Ascitic /Pleural Tapping
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Nebulization
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Monitor Charges
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Ventilator Charges
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Day Total
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
              </tbody>
            </Table>
            <br />
            <Table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                border: "2px solid #20958C",
              }}
            >
              <tbody>
                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Date
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Total
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Oxygen
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    CPR
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Blood Transfusion
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Water Bed Charges
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    RBS
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    ECG
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    USG
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    X-Ray
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Echo
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Intubation Charges
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Syringe Pump Charges
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Photo Therapy Charges
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Baby Care Charges
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    CTG
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Hospital Charges
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Other Services
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Day Total
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
              </tbody>
            </Table>
            <br />

            <Table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                margin: "auto",
                border: "2px  solid #20958C",
              }}
            >
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th
                    colSpan={7}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    PROCEDURE CHARGES
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "5%", border: "2px  solid #20958C" }}>
                    Sl.No.
                  </th>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Date
                  </th>
                  <th style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Procedure
                  </th>
                  <th style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Doctor Charges{" "}
                  </th>
                  <th style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Hospital charges{" "}
                  </th>
                  <th style={{ width: "17.5%", border: "2px  solid #20958C" }}>
                    Instrurment Charges, H/S
                  </th>
                  <th style={{ width: "17.5%", border: "2px  solid #20958C" }}>
                    Doctor Name and Initial
                  </th>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "5%", border: "2px  solid #20958C" }}>
                    1
                  </th>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "17.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "17.5%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "5%", border: "2px  solid #20958C" }}>
                    2
                  </th>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "20%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "17.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "17.5%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th colSpan={2}>Remark</th>
                  <th>final Bill : ...</th>
                  <th colSpan={2}>Paid Bill : ....</th>
                  <th>Balance : .......</th>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default IpBillingSheet;
