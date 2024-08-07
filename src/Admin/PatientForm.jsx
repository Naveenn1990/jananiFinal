import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PatientForm() {
  const navigate = useNavigate();

  const location = useLocation();
  const { item, selectCause } = location.state || {};

  console.log("viewCause", item);
  console.log("selectCause", selectCause);

  return (
    <div>
      <div className="mt-3 d-flex gap-4">
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Admit Forms
        </h6>

        <h6
          style={{
            fontSize: "22px",
            fontWeight: "600",
            color: "grey",
          }}
        >
          Cause Name :{" "}
          <span style={{ color: "red" }}>({selectCause?.CauseName})</span>
        </h6>
      </div>

      <div>
        <div
          className="mt-3"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "13px",
          }}
        >
          <div
            className="d-flex gap-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              style={{
                padding: "6px",
                border: "1px solid white",
                backgroundColor: "#4d8580",
                color: "white",
                borderRadius: "16px 0px 15px 0px",
                width: "210px",
              }}
              onClick={() => navigate("/admin/IPBillingSheet")}
            >
              <div className="d-flex align-items-center">
                <img
                  style={{ width: "34px", height: "41px" }}
                  src="/Images/ip-1.gif"
                  alt=""
                />
                <div>IP_BILLING_SHEET</div>
              </div>
            </button>

            <button
              style={{
                padding: "6px",
                border: "1px solid white",
                backgroundColor: "#4d8580",
                color: "white",
                borderRadius: "16px 0px 15px 0px",
                width: "210px",
              }}
              onClick={() =>
                navigate("/admin/medicationchartadd", {
                  state: {
                    patientdetails: item,
                    cause: selectCause,
                  },
                })
              }
            >
              <div className="d-flex align-items-center">
                <img
                  style={{ width: "34px", height: "41px" }}
                  src="/Images/medi.gif"
                  alt=""
                />
                <div>MEDICATION_CHART</div>
              </div>
            </button>
            <button
              style={{
                padding: "6px",
                border: "1px solid white",
                backgroundColor: "#20958c",
                color: "white",
                borderRadius: "16px 0px 15px 0px",
                width: "210px",
              }}
              // onClick={() => navigate("/admin/NursingAssessOnAdmit")}
              onClick={() =>
                navigate("/admin/NursingAssessOnAdmit", {
                  state: {
                    patientdetails: item,
                    cause: selectCause,
                  },
                })
              }
            >
              Nursing Assessment On Admission
            </button>
            <button
              style={{
                padding: "6px",
                border: "1px solid white",
                backgroundColor: "#4d8580",
                color: "white",
                borderRadius: "16px 0px 15px 0px",
                width: "210px",
              }}
              onClick={() =>
                navigate("/admin/NursesNotes", {
                  state: {
                    patientdetails: item,
                    cause: selectCause,
                  },
                })
              }
            >
              <div className="d-flex align-items-center">
                <img
                  style={{ width: "34px", height: "41px" }}
                  src="/Images/note.gif"
                  alt=""
                />
                <div>NURSE_NOTES</div>
              </div>
            </button>
            <button
              style={{
                padding: "6px",
                border: "1px solid white",
                backgroundColor: "#4d8580",
                color: "white",
                borderRadius: "16px 0px 15px 0px",
                width: "210px",
              }}
              onClick={() =>
                navigate("/admin/HouslyObserveChart", {
                  state: {
                    patientdetails: item,
                    cause: selectCause,
                  },
                })
              }
            >
              <div className="d-flex align-items-center">
                <img
                  style={{ width: "34px", height: "41px" }}
                  src="/Images/time.gif"
                  alt=""
                />
                <div> Hously Observation Chart</div>
              </div>
            </button>
          </div>

          <div
            className="d-flex gap-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              style={{
                padding: "6px",
                border: "1px solid white",
                backgroundColor: "#4d8580",
                color: "white",
                borderRadius: "16px 0px 15px 0px",
                width: "210px",
              }}
              onClick={() =>
                navigate("/admin/InatkeOutput", {
                  state: {
                    patientdetails: item,
                    cause: selectCause,
                  },
                })
              }
            >
              <div className="d-flex align-items-center">
                <img
                  style={{ width: "34px", height: "41px" }}
                  src="/Images/intake.gif"
                  alt=""
                />
                <div> INTAKE/ OUTPUT Chart</div>
              </div>
            </button>
            <button
              style={{
                padding: "6px",
                border: "1px solid white",
                backgroundColor: "#20958c",
                color: "white",
                borderRadius: "16px 0px 15px 0px",
              }}
              onClick={() =>
                navigate("/admin/PreOperativeChecklist", {
                  state: {
                    patientdetails: item,
                    cause: selectCause,
                  },
                })
              }
            >
              Pre-Operative checklist
            </button>
            <button
              style={{
                padding: "6px",
                border: "1px solid white",
                backgroundColor: "#20958c",
                color: "white",
                borderRadius: "16px 0px 15px 0px",
                width: "210px",
              }}
              onClick={() =>
                navigate("/admin/PreAnestheticAssessment", {
                  state: {
                    patientdetails: item,
                    cause: selectCause,
                  },
                })
              }
            >
              Pre-Anesthesia Assessment
            </button>
            <button
              style={{
                padding: "6px",
                border: "1px solid white",
                backgroundColor: "#20958c",
                color: "white",
                borderRadius: "16px 0px 15px 0px",
                width: "210px",
              }}
              onClick={() =>
                navigate("/admin/ChecklistForSurgical", {
                  state: {
                    patientdetails: item,
                    cause: selectCause,
                  },
                })
              }
            >
              Checklist for surgical count/ swab/ needle count
            </button>
          </div>
          <div
            className="d-flex gap-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              style={{
                padding: "6px",
                border: "1px solid white",
                backgroundColor: "#20958c",
                color: "white",
                borderRadius: "16px 0px 15px 0px",
                width: "210px",
              }}
              onClick={() =>
                navigate("/admin/PostSurgical", {
                  state: {
                    patientdetails: item,
                    cause: selectCause,
                  },
                })
              }
            >
              Post surgical monitoring chart
            </button>
            <button
              style={{
                padding: "12px",
                border: "1px solid white",
                backgroundColor: "#20958c",
                color: "white",
                borderRadius: "16px 0px 15px 0px",
                width: "210px",
              }}
              onClick={() =>
                navigate("/admin/safetychecklist", {
                  state: {
                    patientdetails: item,
                    cause: selectCause,
                  },
                })
              }
            >
              Surgical Safety Checklist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientForm;
