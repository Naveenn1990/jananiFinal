import React from "react";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

const HourlyObservChart = () => {
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
          HOUSLY OBSERVATION CHART
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
              HOUSLY OBSERVATION CHART
            </h6>
          </div>
          <div
            style={{
              paddingLeft: "42px",
              paddingRight: "42px",
              textAlign: "justify",
            }}
          >
            <Table>
              <tbody>
                <tr>
                  <td
                    colSpan={4}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Name:{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    ID No :{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Sex
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={4}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    DOA:{" "}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Age & Day:
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Unit Dr. :
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    Time
                  </th>
                  <th style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    HR/MIN
                  </th>
                  <th style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    RR/MIN
                  </th>
                  <th style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    SPO2
                  </th>
                  <th style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    BP
                  </th>
                  <th style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    GRBS
                  </th>
                  <th style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    O2
                  </th>
                  <th style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    Sign
                  </th>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    1
                  </td>
                  <td style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    2
                  </td>
                  <td style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    3
                  </td>
                  <td style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    4
                  </td>
                  <td style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    5
                  </td>
                  <td style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    6
                  </td>
                  <td style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    7
                  </td>
                  <td style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    sign
                  </td>
                </tr>
              </tbody>
            </Table>
            {/* <p style={{ fontSize: "17px" }}>
              <div className="container">
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-6"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    Name:{" "}
                    <span>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="vi_0"
                        style={{ width: "428px" }}
                      />
                    </span>
                  </div>
                  <div
                    className="col-md-3"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    ID No:{" "}
                    <span>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="vi_0"
                        style={{ width: "187px" }}
                      />
                    </span>
                  </div>
                  <div
                    className="col-md-3"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Sex:{" "}
                    <span>
                      <input type="checkbox" name="" id="" className="vi_0" />
                      Male &nbsp;&nbsp;&nbsp;
                      <input type="checkbox" name="" id="" className="vi_0" />
                      Female{" "}
                    </span>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-6"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    DOA:{" "}
                    <span>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="vi_0"
                        style={{ width: "438px" }}
                      />
                    </span>
                  </div>
                  <div
                    className="col-md-3"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    Age & Day:{" "}
                    <span>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="vi_0"
                        style={{ width: "149px" }}
                      />
                    </span>
                  </div>
                  <div
                    className="col-md-3"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Unit Dr:{" "}
                    <span>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="vi_0"
                        style={{ width: "180px" }}
                      />
                    </span>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Time
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        HR/ MIN
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        RR/ MIN
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        SPO2
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        BP
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        GRBS
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        O2
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Sign
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: "1px solid #20958C",
                  }}
                >
                  <div
                    className="col-md-12"
                    style={{
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "122px",
                          border: "1px solid #20958C",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          name=""
                          id=""
                          className="vi_0"
                          style={{ width: "118px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HourlyObservChart;
