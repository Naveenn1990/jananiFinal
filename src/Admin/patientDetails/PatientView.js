import React, { useEffect, useState } from "react";
import IpBillingSheet from "./IpBillingSheet";
import DoctorTreatment from "./DoctorTreatment";
import DoctorNotes from "./DoctorNotes";
import MedicationChart from "./MedicationChart";
import NurseNotes from "./NurseNotes";
import HourlyObservChart from "./HourlyObservChart";
import IntakeOutputChart from "./IntakeOutputChart";
import PreOperative from "./PreOperative";
import SurgeryReport from "./SurgeryReport";
import SurgicalCount from "./SurgicalCount";
import PostSurgeryChart from "./PostSurgeryChart";
import PreAnaestheticAsses from "./PreAnaestheticAsses";
import NursingAssessment from "./NursingAssessment";
import AnaesthesiaRecord from "./AnaesthesiaRecord";
import SafetyCheckList from "./SafetyCheckList";

const PatientView = ({ SelectCause, patientdetail }) => {
  const [IPBilling, setIPBilling] = useState(false);
  const [DocTreatmentChart, setDocTreatmentChart] = useState(false);
  const [DocNotes, setDocNotes] = useState(false);
  const [medication, setMedicationChart] = useState(false);
  const [NursingAssessmentOnAdmisssion, setNursingAssessmentOnAdmisssion] =
    useState(false);
  const [NursesNotes, setNursesNotes] = useState(false);
  const [HouslyObservChart, setHouslyObservChart] = useState(false);
  const [IntakeOutput, setIntakeOutput] = useState(false);
  const [preOperative, setPreOperative] = useState(false);
  const [surgery, setSurgery] = useState(false);
  const [surgicalCount, setSurgicalCount] = useState(false);
  const [postSurgeryChary, setPostSurgeryChart] = useState(false);
  const [preAnaestheticAsses, setPreAnaestheticAsses] = useState(false);
  const [safetyCheck, setSafetyCheck] = useState(false);

  console.log("patientdetail", patientdetail);
  console.log("SelectCause", SelectCause);

  return (
    <div className="patient">
      <div>
        {SelectCause?.CauseName ? (
          <div className="mt-3">
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
                  borderRadius: "0px",
                }}
                onClick={() => {
                  setIPBilling(true);
                  setDocTreatmentChart(false);
                  setDocNotes(false);
                  setMedicationChart(false);
                  setNursesNotes(false);
                  setHouslyObservChart(false);
                  setNursingAssessmentOnAdmisssion(false);
                  setIntakeOutput(false);
                  setPreOperative(false);
                  setSurgery(false);
                  setSurgicalCount(false);
                  setPostSurgeryChart(false);
                  setPreAnaestheticAsses(false);
                  setSafetyCheck(false);
                }}
              >
                IP Billing Sheet
              </button>
              {SelectCause?.doctorstreatment?.length > 0 ? (
                <button
                  style={{
                    padding: "6px",
                    border: "1px solid white",
                    backgroundColor: "#20958c",
                    color: "white",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setIPBilling(false);
                    setDocTreatmentChart(true);
                    setDocNotes(false);
                    setMedicationChart(false);
                    setNursesNotes(false);
                    setHouslyObservChart(false);
                    setNursingAssessmentOnAdmisssion(false);
                    setIntakeOutput(false);
                    setPreOperative(false);
                    setSurgery(false);
                    setSurgicalCount(false);
                    setPostSurgeryChart(false);
                    setPreAnaestheticAsses(false);
                    setSafetyCheck(false);
                  }}
                >
                  Doctor Treatment Chart (
                  {SelectCause?.doctorstreatment?.length})
                </button>
              ) : (
                ""
              )}

              {SelectCause?.doctorstreatment?.length > 0 ? (
                <button
                  style={{
                    padding: "6px",
                    border: "1px solid white",
                    backgroundColor: "#20958c",
                    color: "white",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setIPBilling(false);
                    setDocTreatmentChart(false);
                    setDocNotes(true);
                    setMedicationChart(false);
                    setNursesNotes(false);
                    setHouslyObservChart(false);
                    setNursingAssessmentOnAdmisssion(false);
                    setIntakeOutput(false);
                    setPreOperative(false);
                    setSurgery(false);
                    setSurgicalCount(false);
                    setPostSurgeryChart(false);
                    setPreAnaestheticAsses(false);
                    setSafetyCheck(false);
                  }}
                >
                  Doctors Notes ({SelectCause?.doctorsnotes?.length})
                </button>
              ) : (
                ""
              )}

              {SelectCause?.drug?.length > 0 ? (
               ""
              ) : (
                ""
              )}
               <button
                  style={{
                    padding: "6px",
                    border: "1px solid white",
                    backgroundColor: "#20958c",
                    color: "white",
                    borderRadius: "0px",
                  }}
                  onClick={() => {
                    setIPBilling(false);
                    setDocTreatmentChart(false);
                    setDocNotes(false);
                    setMedicationChart(true);
                    setNursesNotes(false);
                    setHouslyObservChart(false);
                    setNursingAssessmentOnAdmisssion(false);
                    setIntakeOutput(false);
                    setPreOperative(false);
                    setSurgery(false);
                    setSurgicalCount(false);
                    setPostSurgeryChart(false);
                    setPreAnaestheticAsses(false);
                    setSafetyCheck(false);
                  }}
                >
                  Medication Chart ({SelectCause?.drug?.length})
                </button>

              {SelectCause?.nursingassessment?.length > 0 ? (
                <button
                  style={{
                    padding: "6px",
                    border: "1px solid white",
                    backgroundColor: "#20958c",
                    color: "white",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setIPBilling(false);
                    setDocTreatmentChart(false);
                    setDocNotes(false);
                    setMedicationChart(false);
                    setNursesNotes(false);
                    setHouslyObservChart(false);
                    setNursingAssessmentOnAdmisssion(true);
                    setIntakeOutput(false);
                    setPreOperative(false);
                    setSurgery(false);
                    setSurgicalCount(false);
                    setPostSurgeryChart(false);
                    setPreAnaestheticAsses(false);
                    setSafetyCheck(false);
                  }}
                >
                  Nursing Assessment On Admission (
                  {SelectCause?.nursingassessment?.length})
                </button>
              ) : (
                ""
              )}
              {SelectCause?.nursenote?.length > 0 ? (
                <button
                  style={{
                    padding: "6px",
                    border: "1px solid white",
                    backgroundColor: "#20958c",
                    color: "white",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setIPBilling(false);
                    setDocTreatmentChart(false);
                    setDocNotes(false);
                    setMedicationChart(false);
                    setNursesNotes(true);
                    setHouslyObservChart(false);
                    setNursingAssessmentOnAdmisssion(false);
                    setIntakeOutput(false);
                    setPreOperative(false);
                    setSurgery(false);
                    setSurgicalCount(false);
                    setPostSurgeryChart(false);
                    setPreAnaestheticAsses(false);
                    setSafetyCheck(false);
                  }}
                >
                  Nurse Notes ({SelectCause?.nursenote?.length})
                </button>
              ) : (
                ""
              )}

              {SelectCause?.hourlynote?.length > 0 ? (
                <button
                  style={{
                    padding: "6px",
                    border: "1px solid white",
                    backgroundColor: "#20958c",
                    color: "white",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setIPBilling(false);
                    setDocTreatmentChart(false);
                    setDocNotes(false);
                    setMedicationChart(false);
                    setNursesNotes(false);
                    setHouslyObservChart(true);
                    setNursingAssessmentOnAdmisssion(false);
                    setSurgicalCount(false);
                    setIntakeOutput(false);
                    setPreOperative(false);
                    setSurgery(false);
                    setPostSurgeryChart(false);
                    setPreAnaestheticAsses(false);
                    setSafetyCheck(false);
                  }}
                >
                  Hourly Observation Chart ({SelectCause?.hourlynote?.length})
                </button>
              ) : (
                ""
              )}
            </div>
            <div
              className="d-flex gap-2"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {SelectCause?.intakeout?.length > 0 ? (
                <button
                  style={{
                    padding: "6px",
                    border: "1px solid white",
                    backgroundColor: "#20958c",
                    color: "white",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setIPBilling(false);
                    setDocTreatmentChart(false);
                    setDocNotes(false);
                    setMedicationChart(false);
                    setNursesNotes(false);
                    setHouslyObservChart(false);
                    setNursingAssessmentOnAdmisssion(false);
                    setIntakeOutput(true);
                    setPreOperative(false);
                    setSurgery(false);
                    setSurgicalCount(false);
                    setPostSurgeryChart(false);
                    setPreAnaestheticAsses(false);
                    setSafetyCheck(false);
                  }}
                >
                  INTAKE/ OUTPUT Chart ({SelectCause?.intakeout?.length})
                </button>
              ) : (
                ""
              )}
              {SelectCause?.preoperativelist?.length > 0 ? (
                <button
                  style={{
                    padding: "6px",
                    border: "1px solid white",
                    backgroundColor: "#20958c",
                    color: "white",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setIPBilling(false);
                    setDocTreatmentChart(false);
                    setDocNotes(false);
                    setMedicationChart(false);
                    setNursesNotes(false);
                    setHouslyObservChart(false);
                    setNursingAssessmentOnAdmisssion(false);
                    setSurgicalCount(false);
                    setIntakeOutput(false);
                    setPreOperative(true);
                    setSurgery(false);
                    setPostSurgeryChart(false);
                    setPreAnaestheticAsses(false);
                    setSafetyCheck(false);
                  }}
                >
                  Pre-Observation checklist (
                  {SelectCause?.preoperativelist?.length})
                </button>
              ) : (
                ""
              )}
              {SelectCause?.preanesthetica?.length > 0 ? (
                <button
                  style={{
                    padding: "6px",
                    border: "1px solid white",
                    backgroundColor: "#20958c",
                    color: "white",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setIPBilling(false);
                    setDocTreatmentChart(false);
                    setDocNotes(false);
                    setMedicationChart(false);
                    setNursesNotes(false);
                    setHouslyObservChart(false);
                    setNursingAssessmentOnAdmisssion(false);
                    setSurgicalCount(false);
                    setIntakeOutput(false);
                    setPreOperative(false);
                    setSurgery(false);
                    setPostSurgeryChart(false);
                    setPreAnaestheticAsses(true);
                    setSafetyCheck(false);
                  }}
                >
                  Pre-Anesthesia Assessment (
                  {SelectCause?.preanesthetica?.length})
                </button>
              ) : (
                ""
              )}

              <button
                style={{
                  padding: "6px",
                  border: "1px solid white",
                  backgroundColor: "#20958c",
                  color: "white",
                  borderRadius: "0px",
                }}
                onClick={() => {
                  setIPBilling(false);
                  setDocTreatmentChart(false);
                  setDocNotes(false);
                  setMedicationChart(false);
                  setNursesNotes(false);
                  setHouslyObservChart(false);
                  setNursingAssessmentOnAdmisssion(false);
                  setSurgicalCount(true);
                  setIntakeOutput(false);
                  setPreOperative(false);
                  setSurgery(false);
                  setPostSurgeryChart(false);
                  setPreAnaestheticAsses(false);
                  setSafetyCheck(false);
                }}
              >
                Checklist for surgical count/ swab/ needle count
              </button>
              {SelectCause?.surgicalsafety?.length > 0 ? (
                <button
                  style={{
                    padding: "6px",
                    border: "1px solid white",
                    backgroundColor: "#20958c",
                    color: "white",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setIPBilling(false);
                    setDocTreatmentChart(false);
                    setDocNotes(false);
                    setMedicationChart(false);
                    setNursesNotes(false);
                    setHouslyObservChart(false);
                    setNursingAssessmentOnAdmisssion(false);
                    setSurgicalCount(false);
                    setIntakeOutput(false);
                    setPreOperative(false);
                    setSurgery(false);
                    setPostSurgeryChart(false);
                    setPreAnaestheticAsses(false);
                    setSafetyCheck(true);
                  }}
                >
                  Surgical Safety(
                  {SelectCause?.surgicalsafety?.length})
                </button>
              ) : (
                ""
              )}
            </div>
            <div
              className="d-flex gap-2"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                style={{
                  padding: "20px",
                  border: "1px solid white",
                  backgroundColor: "#20958c",
                  color: "white",
                  borderRadius: "7px",
                }}
                onClick={() => {
                  setIPBilling(false);
                  setDocTreatmentChart(false);
                  setDocNotes(false);
                  setMedicationChart(false);
                  setNursesNotes(false);
                  setHouslyObservChart(false);
                  setNursingAssessmentOnAdmisssion(false);
                  setSurgicalCount(false);
                  setIntakeOutput(false);
                  setPreOperative(false);
                  setSurgery(false);
                  setPostSurgeryChart(true);
                  setPreAnaestheticAsses(false);
                  setSafetyCheck(false);
                }}
              >
                Post surgical monitoring chart (
                {SelectCause?.postsurgicalmonitor?.length})
              </button>
              <button
                style={{
                  padding: "20px",
                  border: "1px solid white",
                  backgroundColor: "#20958c",
                  color: "white",
                  borderRadius: "7px",
                }}
                onClick={() => {
                  setIPBilling(false);
                  setDocTreatmentChart(false);
                  setDocNotes(false);
                  setMedicationChart(false);
                  setNursesNotes(false);
                  setHouslyObservChart(false);
                  setNursingAssessmentOnAdmisssion(false);
                  setSurgicalCount(false);
                  setIntakeOutput(false);
                  setPreOperative(false);
                  setSurgery(true);
                  setPostSurgeryChart(false);
                  setPreAnaestheticAsses(false);
                  setSafetyCheck(false);
                }}
              >
                Surgery Report ({SelectCause?.surgeryreport?.length})
              </button>
            </div>
          </div>
        ) : (
          ""
        )}

        {IPBilling ? (
          <IpBillingSheet />
        ) : DocTreatmentChart ? (
          <DoctorTreatment
            cause={SelectCause}
            DoctTreatmentChat={SelectCause?.doctorstreatment}
            patientdetail={patientdetail}
          />
        ) : DocNotes ? (
          <DoctorNotes
            cause={SelectCause}
            DoctorsNotes={SelectCause?.doctorsnotes}
            patientdetail={patientdetail}
          />
        ) : medication ? (
          <MedicationChart />
        ) : NursesNotes ? (
          <NurseNotes
            cause={SelectCause}
            NursingNote={SelectCause?.nursenote}
            patientdetail={patientdetail}
          />
        ) : HouslyObservChart ? (
          <HourlyObservChart
            hourlynote={SelectCause?.hourlynote}
            patientdetail={patientdetail}
          />
        ) : NursingAssessmentOnAdmisssion ? (
          <NursingAssessment
            NursingAssessments={SelectCause?.nursingassessment}
            patientdetail={patientdetail}
          />
        ) : surgery ? (
          <SurgeryReport />
        ) : IntakeOutput ? (
          <IntakeOutputChart
            cause={SelectCause}
            Intakeoutlist={SelectCause?.intakeout}
            patientdetail={patientdetail}
          />
        ) : preOperative ? (
          <PreOperative
            cause={SelectCause}
            CHECKLIST={SelectCause?.preoperativelist}
            patientdetail={patientdetail}
          />
        ) : surgicalCount ? (
          <SurgicalCount />
        ) : postSurgeryChary ? (
          <PostSurgeryChart
            postsurgicalmonitor={SelectCause?.postsurgicalmonitor}
            patientdetail={patientdetail}
          />
        ) : preAnaestheticAsses ? (
          <>
            <PreAnaestheticAsses
              cause={SelectCause}
              preanesthetica={SelectCause?.preanesthetica}
              patientdetail={patientdetail}
            />
            {/* <AnaesthesiaRecord /> */}
          </>
        ) : safetyCheck ? (
          <SafetyCheckList
            cause={SelectCause}
            safetyChckList={SelectCause?.surgicalsafety}
            patientdetail={patientdetail}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PatientView;
