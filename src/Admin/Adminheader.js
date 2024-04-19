import React, { useEffect } from "react";
import { FaUserShield } from "react-icons/fa";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import "./Adminheader.css";

import Sidebar1 from "./Sidebar1";

export default function Adminheader() {
  var darkmode = sessionStorage.getItem("darkmode");

  const DarkMode = () => {
    sessionStorage.setItem("darkmode", true);

    window.location.reload();
  };

  const LightMode = () => {
    sessionStorage.removeItem("darkmode");

    window.location.reload();
  };

  return (
    <div>
      <div
        className={darkmode ? "Adminheaderdarkmode" : "Adminheaderlightmode"}
      >
        <div className="row">
          <div className="col-lg-2 d-flex justify-content-center">
            <img
              src="../Images/logo.png"
              style={{ width: "70%", height: "70px" }}
            />
          </div>
          <div className="col-lg-7"></div>
          <div className="col-lg-2" style={{ textAlign: "center" }}>
            {darkmode ? (
              <button
                style={{
                  marginTop: "10%",
                  textAlign: "center",
                  borderRadius: "1px solid grey",
                  borderRadius: "4px",
                  backgroundColor: "transparent",
                }}
                onClick={() => {
                  LightMode();
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    marginRight: "10px",
                    fontWeight: "500",
                    color: darkmode ? "white" : "black",
                  }}
                >
                  LIGHT MODE
                </span>
                <BsSun
                  style={{
                    color: darkmode ? "white" : "black",
                  }}
                />
              </button>
            ) : (
              <button
                style={{
                  marginTop: "10%",
                  textAlign: "center",
                  borderRadius: "1px solid grey",
                  borderRadius: "4px",
                  backgroundColor: "transparent",
                }}
                onClick={() => {
                  DarkMode();
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    marginRight: "10px",
                    fontWeight: "500",
                    color: darkmode ? "white" : "black",
                  }}
                >
                  DARK MODE
                </span>
                <BsFillMoonStarsFill
                  style={{
                    color: darkmode ? "white" : "black",
                  }}
                />
              </button>
            )}
          </div>
          <div className="col-lg-1">
            <FaUserShield style={{ fontSize: "40px", marginTop: "10px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
