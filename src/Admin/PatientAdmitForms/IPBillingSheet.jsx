
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const IPBillingSheet = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div>
        <button
        className="mt-2"
              style={{
                padding: "6px",
                border: "1px solid white",
                backgroundColor: "#20958c",
                color: "white",
                borderRadius: "0px",
              }}
              onClick={()=>navigate("/admin/patientform")}
            >
              Back
            </button>
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
                width: "1073px",
                margin: "auto",
                borderRadius: "20px",
                height: "1769px",
              }}
            >
              <div className="d-flex align-items-center mb-1 justify-content-around ps-5 pe-5 pt-4">
                <div className="d-flex align-items-center">
                  <img
                    src="/Images/logo.jpg"
                    alt=""
                    style={{ width: "100px" }}
                  />
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
                <p style={{ fontSize: "17px" }}>
                  <div className="container">
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-7"
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
                            style={{ width: "511px" }}
                          />
                        </span>
                      </div>
                      <div
                        className="col-md-2"
                        style={{
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        Age:{" "}
                        <span>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="vi_0"
                            style={{ width: "120px" }}
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
                          <input
                            type="checkbox"
                            name=""
                            id=""
                          />
                          Male &nbsp;&nbsp;&nbsp;
                          <input
                            type="checkbox"
                            name=""
                            id=""
                          />
                          Female{" "}
                        </span>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
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
                        Ph no:{" "}
                        <span>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="vi_0"
                            style={{ width: "431px" }}
                          />
                        </span>
                      </div>
                      <div
                        className="col-md-6"
                        style={{
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        IP no:{" "}
                        <span>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="vi_0"
                            style={{ width: "431px" }}
                          />
                        </span>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
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
                        Admitting Doctor:{" "}
                        <span>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="vi_0"
                            style={{ width: "350px" }}
                          />
                        </span>
                      </div>
                      <div
                        className="col-md-6"
                        style={{
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        Bed no:{" "}
                        <span>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="vi_0"
                            style={{ width: "420px" }}
                          />
                        </span>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-5"
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
                            style={{ width: "357px" }}
                          />
                        </span>
                      </div>
                      <div
                        className="col-md-5"
                        style={{
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        DOD:{" "}
                        <span>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="vi_0"
                            style={{ width: "357px" }}
                          />
                        </span>
                      </div>
                      <div
                        className="col-md-2"
                        style={{
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        Ward Shift
                      </div>
                    </div>

                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div className="col-md-7">
                        <div
                          className="row text-center"
                          style={{ backgroundColor: "#20958C", height: "13px" }}
                        >
                          <p
                            style={{
                              color: "white",
                              fontWeight: "600",
                              fontSize: "11px",
                            }}
                          >
                            AMOUNT PAID
                          </p>
                        </div>
                        <div
                          className="row"
                          style={{ border: "1px solid #20958C" }}
                        >
                          <div
                            className="col-md-1"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "17px",
                            }}
                          ></div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "17px",
                            }}
                          >
                            Date:{" "}
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "17px",
                            }}
                          >
                            Amount Recieved:{" "}
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "17px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Reciept No
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-md-1"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            1
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-md-1"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            2
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-md-1"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            3
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-md-1"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            4
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-md-1"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            5
                          </div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{ border: "1px solid #20958C" }}
                        >
                          <div
                            className="col-md-1"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "17px",
                            }}
                          ></div>
                          <div
                            className="col-md-3"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "17px",
                            }}
                          >
                            Total
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "17px",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              fontSize: "17px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "188px" }}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row">
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Date & Time
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "133px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "133px" }}
                              />
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Bed no.
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "133px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "133px" }}
                              />
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Date & Time
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "133px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "133px" }}
                              />
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Bed no.
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "133px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "133px" }}
                              />
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Date & Time
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "133px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "133px" }}
                              />
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Bed no.
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "133px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "133px" }}
                              />
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "133px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "133px" }}
                              />
                            </span>
                          </div>
                          <div
                            className="col-md-4"
                            style={{
                              border: "1px solid #20958C",
                              paddingLeft: "unset",
                              paddingRight: "unset",
                            }}
                          >
                            <span>
                              <input
                                type="text"
                                className="vi_0"
                                style={{ width: "133px" }}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Date
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          Total
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Reg Fees
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          MLC Charges
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Room Rent
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Duty Doctor Charges
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          NSG Charges
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Primary Consultant
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row text-center"
                      style={{ backgroundColor: "#20958C", height: "15px" }}
                    >
                      <p
                        style={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: "11px",
                        }}
                      >
                        CROSS CONSULTATION
                      </p>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "188px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "188px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "188px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "188px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "188px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Dressing Charges
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Situring Charges
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Plastering charges
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Dialysis Charges
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Delivery Charges
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Ascitic/pleural Tapping
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Nebulization
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Monitor Charges
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Ventilator Charges
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Day Total
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
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
                width: "1073px",
                margin: "auto",
                borderRadius: "20px",
                height: "1700px",
              }}
            >
              <div
                style={{
                  paddingTop: "30px",
                  paddingLeft: "42px",
                  paddingRight: "42px",
                  textAlign: "justify",
                }}
              >
                <p style={{ fontSize: "17px" }}>
                  <div className="container">
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Date
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          Total
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Oxygen
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          CPR
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Blood Transfusion
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Water Bed Charges
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          RBS
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          ECG
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          USG
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          X-Ray
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Echo
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Intubation Charges
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Syringe Pump Charges
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Photo Therapy Charges
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Baby Care Charges
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          CTG
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Hospital Charges
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Other Services
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "188px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "188px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "188px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "188px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "188px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "188px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                        }}
                      >
                        <div
                          style={{
                            width: "12rem",
                            border: "1px solid #20958C",
                          }}
                        >
                          Day Total
                        </div>
                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "6rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "89px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{ width: "7rem", border: "1px solid #20958C" }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "99px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row text-center"
                      style={{ backgroundColor: "#20958C", height: "23px" }}
                    >
                      <p
                        style={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: "15px",
                        }}
                      >
                        Procedure Charges
                      </p>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "3rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          Sl.No
                        </div>
                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          Date
                        </div>

                        <div
                          style={{
                            width: "18rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          Procedure
                        </div>

                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          Doctor Charges
                        </div>

                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          Hospital Charges
                        </div>

                        <div
                          style={{
                            width: "10rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          Instrument Charges, H/S
                        </div>

                        <div
                          style={{
                            width: "9rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          Doctor name & initial
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "3rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "38px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "109px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "18rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "283px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "107px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "107px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "10rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "155px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "9rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "140px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "3rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "38px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "109px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "18rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "283px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "107px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "107px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "10rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "155px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "9rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "140px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "3rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "38px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "109px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "18rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "283px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "107px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "107px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "10rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "155px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "9rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "140px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "3rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "38px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "109px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "18rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "283px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "107px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "107px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "10rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "155px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "9rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "140px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "3rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "38px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "109px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "18rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "283px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "107px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "7rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "107px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "10rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "155px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "9rem",
                            border: "1px solid #20958C",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "140px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row"
                      style={{ border: "1px solid #20958C" }}
                    >
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          border: "1px solid #20958C",
                          paddingLeft: "unset",
                          paddingRight: "unset",
                          fontSize: "17px",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "11rem",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          Remarks
                        </div>
                        <div
                          style={{
                            width: "17rem",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          Final Bill :{" "}
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "109px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "38rem",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          Total Amount Paid :{" "}
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "283px" }}
                            />
                          </span>
                        </div>

                        <div
                          style={{
                            width: "19rem",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          Balance :{" "}
                          <span>
                            <input
                              type="text"
                              className="vi_0"
                              style={{ width: "107px" }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-2 mb-2">
            <button className="btn btn-success">Submit</button>
          </div>
    </div>
  )
}

export default IPBillingSheet