import React from "react";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

const DoctorTreatment = () => {
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
                marginBottom: "10px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    colSpan={3}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Name:{" "}
                  </td>
                  <td
                    colSpan={3}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  ></td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Age
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    IP No:{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "33%", border: "2px  solid #20958C" }}
                  >
                    Ward:{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Doctor Incharge:{" "}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Treatment Given:{" "}
                  </td>
                  <td
                    style={{ width: "16%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "16%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "16%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "16%", border: "2px  solid #20958C" }}
                  ></td>
                  <td
                    style={{ width: "16%", border: "2px  solid #20958C" }}
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

export default DoctorTreatment;
