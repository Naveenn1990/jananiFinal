import React, { useState } from "react";
import {  AiOutlineFastBackward} from "react-icons/ai";
import { BsCurrencyRupee} from "react-icons/bs";
import {  FaClinicMedical } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import Hospitallabtestlist from "./HospitalLabTest";
import Hospitallabtestreport from "./Hospitallabreport";
import Clinicallab from "./Clinicallab";
import TotalLabRevenue from "./TotalLabRevenue";
import ReferalPatientList from "./ReferalPatientList";
import ReferalClinicalDoctorForLAB from "./ReferalClinicalDoctorForLAB";
export default function ClinicalLabPanel() {

  const [ViewModal, setViewModal] = useState();
  const [Title, setTitle] = useState("Clinical Lab management");
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
            <div className="col-lg-4">
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<Clinicallab />);
                  setView(true);
                  setTitle(" ADD-CLINICAL-LAB");
                }}
              >
                <FaClinicMedical className="WebMI" style={{ color: "white" }} />
                ADD-CLINICAL-LAB
              </div>
            </div>
            <div className="col-lg-4">
              {" "}
              <div
                className="websiteMcards d-flex"
                onClick={() => {
                  setViewModal(<ReferalPatientList />);
                  setTitle("REFERAL LAB PATIENT LIST");
                  setView(true);
                }}
              >
                <GiTestTubes className="WebMI" />
                <p>REFERAL LAB (LAB PATIENTS)</p>
              </div>
            </div>

            <div className="col-lg-4">
              {" "}
              <div
                className="websiteMcards d-flex"
                onClick={() => {
                  setViewModal(<ReferalClinicalDoctorForLAB />);
                  setTitle("REFER CLINIC DOCTOR (LAB PATIENTS)");
                  setView(true);
                }}
              >
                <GiTestTubes className="WebMI" />
               <p>REFER CLINIC DOCTOR (LAB PATIENTS)</p> 
              </div>
            </div>
            {/* <div className="col-lg-4">
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
            </div> */}
            {/* <div className="col-lg-4">
              {" "}
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<TotalLabRevenue />);
                  setView(true);
                  setTitle(" TOTAL REVENUE");
                }}
              >
                <BsCurrencyRupee className="WebMI" />
                TOTAL REVENUE
              </div>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}
