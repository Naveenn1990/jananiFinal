import React, { useState } from "react";
import { AiOutlineAppstore, AiOutlineFastBackward } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";
import { PiTestTubeFill } from "react-icons/pi";
import Hospitallab from "./Hospitallab";
import HospitallabCategory from "./HospitallabCategory";
import { GiTestTubes } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import Hospitallabtestlist from "./HospitalLabTest";
import Hospitallabtestreport from "./Hospitallabreport";
import TotalHLabRevenue from "./TotalHlabRevenue";
import HLabProfile from "./HLabProfile";
import BookedLabTest from "./BookedLabTest";
import SampleHospitalLab from "./SampleHospitalLab";
import ReportHospitalLab from "./ReportHospitalLab";
export default function HospitalLabPanel() {
  const admin = JSON.parse(sessionStorage.getItem("adminDetails"));
  const [ViewModal, setViewModal] = useState();
  const [Title, setTitle] = useState("Hospital Lab management");

  const [View, setView] = useState(false);

  return (
    <div>
      <div style={{ padding: "1%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
            {Title}
          </h6>
          {View ? (
            <button
              style={{
                fontSize: "16px",
                color: "white",
                backgroundColor: "#20958c",
                border: "none",
                borderRadius: "0px",
              }}
              onClick={() => {
                setView(false);
                setTitle("Hospital Lab management");
              }}
            >
              <AiOutlineFastBackward style={{ fontSize: "22px" }} /> BACK
            </button>
          ) : null}
        </div>
        {View ? (
          ViewModal
        ) : (
          <div className="row">
            {admin?.labTechnician ? (
              <>
                <div className="col-lg-4">
                  {" "}
                  <div
                    className="websiteMcards"
                    onClick={() => {
                      setViewModal(<SampleHospitalLab />);
                      setView(true);
                      setTitle("Sample Collection");
                    }}
                  >
                    <AiOutlineAppstore className="WebMI" />
                    Sample Collection
                  </div>
                </div>
                <div className="col-lg-4">
                  {" "}
                  <div
                    className="websiteMcards"
                    onClick={() => {
                      setViewModal(<ReportHospitalLab />);
                      setView(true);
                      setTitle("Reports");
                    }}
                  >
                    <AiOutlineAppstore className="WebMI" />
                    Report
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-lg-4">
                  <div
                    className="websiteMcards"
                    onClick={() => {
                      setViewModal(<HospitallabCategory />);
                      setView(true);
                      setTitle("ADD-LAB-TEST-CATEGORY");
                    }}
                  >
                    <PiTestTubeFill
                      className="WebMI"
                      style={{ color: "white" }}
                    />
                    ADD-LAB-TEST-CATEGORY
                  </div>
                </div>

                <div className="col-lg-4">
                  <div
                    className="websiteMcards"
                    onClick={() => {
                      setViewModal(<Hospitallab />);
                      setView(true);
                      setTitle("ADD-LAB-TEST");
                    }}
                  >
                    <PiTestTubeFill
                      className="WebMI"
                      style={{ color: "white" }}
                    />
                    ADD-LAB-TEST
                  </div>
                </div>

                <div className="col-lg-4">
                  {" "}
                  <div
                    className="websiteMcards"
                    onClick={() => {
                      setViewModal(<Hospitallabtestlist />);
                      setTitle("HEALTH PACKAGE");
                      setView(true);
                    }}
                  >
                    <GiTestTubes className="WebMI" />
                    HEALTH-PACKAGE
                  </div>
                </div>

                <div className="col-lg-4">
                  {" "}
                  <div
                    className="websiteMcards"
                    onClick={() => {
                      setViewModal(<Hospitallabtestreport />);
                      setView(true);
                      setTitle("LAB TEST-REPORT");
                    }}
                  >
                    <TbReportSearch className="WebMI" />
                    LAB TEST-REPORT
                  </div>
                </div>

                <div className="col-lg-4">
                  {" "}
                  <div
                    className="websiteMcards"
                    onClick={() => {
                      setViewModal(<TotalHLabRevenue />);
                      setView(true);
                      setTitle("TOTAL REVENUE");
                    }}
                  >
                    <BsCurrencyRupee className="WebMI" />
                    TOTAL REVENUE
                  </div>
                </div>

                <div className="col-lg-4">
                  {" "}
                  <div
                    className="websiteMcards"
                    onClick={() => {
                      setViewModal(<HLabProfile />);
                      setView(true);
                      setTitle("LAB PROFILE");
                    }}
                  >
                    <AiOutlineAppstore className="WebMI" />
                    ADD LAB PROFILE
                  </div>
                </div>

                <div className="col-lg-4">
                  {" "}
                  <div
                    className="websiteMcards"
                    onClick={() => {
                      setViewModal(<BookedLabTest />);
                      setView(true);
                      setTitle("BOOKED LAB TEST");
                    }}
                  >
                    <AiOutlineAppstore className="WebMI" />
                    Booked Lab Test
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
