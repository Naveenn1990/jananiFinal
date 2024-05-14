import React from "react";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

const SurgicalCount = () => {
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
          CHECKLIST FOR SURGICAL COUNT / SWAB / NEEDLE COUNT
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
              CHECKLIST FOR SURGICAL COUNT / SWAB / NEEDLE COUNT
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
                border: "2px  solid #20958C",
              }}
            >
              <tbody>
                <tr>
                  <td
                    colSpan={4}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Patient Name:{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    IP Number:
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Date:
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={4}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    OT No.:
                  </td>
                  <td
                    colSpan={4}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Surgery Performed:
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={4}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Surgeon:
                  </td>
                  <td
                    colSpan={4}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Assistant:
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Anaesthetist:
                  </td>
                  <td
                    colSpan={3}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Scrub Nurse:
                  </td>
                  <td
                    colSpan={3}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Circulating Nurse:
                  </td>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Item{" "}
                  </th>
                  <th style={{ width: "7.5%", border: "2px  solid #20958C" }}>
                    No.
                  </th>
                  <th style={{ width: "7.5%", border: "2px  solid #20958C" }}>
                    Plus
                  </th>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Total
                  </th>
                  <th style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Item
                  </th>
                  <th style={{ width: "7.5%", border: "2px  solid #20958C" }}>
                    No.
                  </th>
                  <th style={{ width: "7.5%", border: "2px  solid #20958C" }}>
                    Plus
                  </th>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Total
                  </th>
                </tr>
                <tr>
                  <th style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Instruments{" "}
                  </th>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Others
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Sponge Halders{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Towel Clips{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Allis Forcesps{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Babcock forceps{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    BP Handle{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Dissecting forceps - Toothed{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Dissecting forceps- Non-toothed{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Mosquito forceps- Curved{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Mosquito forceps- Straight{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Kelly's artery forceps- Curved{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Kelly's artery forceps- Straight{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Artery forceps 8"- Straight{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Artery forceps 8"- Straight{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Kocher's forceps-{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Needle{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <br />

                <tr>
                  <th style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Scissors{" "}
                  </th>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Mayo- Curved{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Mayo- Straight{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Metzenbaum- Curved{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Metzenbaum- Straight{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <br />

                <tr>
                  <th style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Retractors{" "}
                  </th>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Devers{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Doyen{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Langhanbeck
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Langhenbeck - small{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Self retaining abdominal{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <br />

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Wrigley's outlet forceps{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <br />

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Swabs{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Radio opaque 4" x 4"{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Radio opaque 12" x 12"{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Wound dressing{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <br />

                <tr>
                  <th style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Suture Needles{" "}
                  </th>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    1/2 curve cutting{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <td style={{ width: "25%", border: "2px  solid #20958C" }}>
                    Atraumatic Needles{" "}
                  </td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7.5%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
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
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <br />

                <tr>
                  <th colSpan={3}>Count</th>
                  <th colSpan={2}>Correct</th>
                  <th colSpan={3}>Not Correct</th>
                </tr>

                <tr>
                  <th colSpan={8}>Remarks</th>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurgicalCount;
