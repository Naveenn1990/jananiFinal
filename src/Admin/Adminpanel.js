import React from "react";
import Adminheader from "./Adminheader";
import Sidebar1 from "./Sidebar1";

export default function Adminpanel({ children }) {
  var darkmode = sessionStorage.getItem("darkmode");

  return (
    <div>
      <Adminheader />
      <div className="row me-0">
        <div
          style={{
            backgroundColor: darkmode ? "black" : "white",
            color: darkmode ? "white" : "black",

            padding: "0px 0% 0% 0%",
            width: "18%",
            boxShadow: "10px 3px 12px -7px rgba(32,149,140,0.28)",
          }}
        >
          <Sidebar1 />
        </div>
        <div
          style={{
            width: "82%",
            height: "550px",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
