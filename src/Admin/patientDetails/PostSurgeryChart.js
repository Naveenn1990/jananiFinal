import React from "react";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

const PostSurgeryChart = () => {
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
          POST SURGICAL MONITORING CHART
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
              POST SURGICAL MONITORING CHART
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
                <tr style={{ textAlign: "center" }}>
                  <th
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></th>
                  <th style={{ width: "8%", border: "2px  solid #20958C" }}>
                    Time
                  </th>
                  <th style={{ width: "8%", border: "2px  solid #20958C" }}>
                    HR
                  </th>
                  <th style={{ width: "8%", border: "2px  solid #20958C" }}>
                    BP
                  </th>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    SPO2
                  </th>
                  <th style={{ width: "7%", border: "2px  solid #20958C" }}>
                    RR
                  </th>
                  <th style={{ width: "8%", border: "2px  solid #20958C" }}>
                    TEMP
                  </th>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Uterine Height
                  </th>
                  <th style={{ width: "12%", border: "2px  solid #20958C" }}>
                    Bleeding p/v
                  </th>
                  <th style={{ width: "12%", border: "2px  solid #20958C" }}>
                    Urine output
                  </th>
                  <th style={{ width: "12%", border: "2px  solid #20958C" }}>
                    leg massage
                  </th>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    0 hr
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    10 min
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    20 min
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    30 min
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    45 min
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    1 hr
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    1.30 hr
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    2 hr
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    2.30 hr
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    3 hr
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    3.30 hr
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    4 hr
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    6 hr
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    8 hr
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    12 hr
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    16 hr
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    20 hr
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>

                <tr>
                  <th style={{ width: "10%", border: "2px  solid #20958C" }}>
                    24 hr
                  </th>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "7%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "8%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "10%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "12%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostSurgeryChart;
