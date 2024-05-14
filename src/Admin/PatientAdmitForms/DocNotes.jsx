import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DocNotes = () => {
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
                        width: "1073px",
                        margin: "auto",
                        borderRadius: "20px",
                        height: "1724px",
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
                            Beside Canara Bank, Jalanagar Main Road, K. K.
                            Colony, Vijaypura-586109
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
                                Pt ID:{" "}
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
                                Ward:{" "}
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
                                Dept:{" "}
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
                                Doctor:{" "}
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
                                className="col-md-7"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                }}
                              >
                                Known Drug Allergies:{" "}
                                <span>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="vi_0"
                                    style={{ width: "392px" }}
                                  />
                                </span>
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
                              <div
                                className="col-md-12"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                }}
                              >
                                Diagnosis:{" "}
                                <span>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="vi_0"
                                    style={{ width: "886px" }}
                                  />
                                </span>
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
                              <div
                                className="col-md-2"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                Date & Time
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                Notes
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
                                  justifyContent: "center",
                                }}
                              >
                                <p>Doctor's Sign </p>
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ border: "1px solid #20958C" }}
                            >
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  border: "1px solid #20958C",
                                  paddingLeft: "unset",
                                  paddingRight: "unset",
                                  fontSize: "17px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "647px" }}
                                />
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
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "160px" }}
                                />
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

export default DocNotes