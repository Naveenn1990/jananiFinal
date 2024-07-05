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
import AddVials from "./AddVials";
import CollectingSampleslist from "./CollectingSampleslist";

export default function HospitalLabSampleCollector() {
  const admin = JSON.parse(sessionStorage.getItem("adminDetails"));
  const [ViewModal, setViewModal] = useState();
  const [Title, setTitle] = useState("Hospital Lab Sample Collector");

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
                setTitle("Hospital Lab Reception");
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
            {admin?.labSampleCollector ? (
              <>
                <div className="col-lg-4">
                  {" "}
                  <div
                    className="websiteMcards"
                    onClick={() => {
                      setViewModal(<CollectingSampleslist />);
                      setView(true);
                      setTitle("LAB SAMPLES");
                    }}
                  >
                    <AiOutlineAppstore className="WebMI" />
                    Lab Samples
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
