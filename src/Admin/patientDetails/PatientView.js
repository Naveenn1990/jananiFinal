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

const PatientView = ({ SelectCause,patientdetail }) => {

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

  return (
    <div className="patient">
      <div>
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
              Doctor Treatment Chart ({SelectCause?.doctorstreatment?.length})
            </button>
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
              Nursing Assessment On Admission ({SelectCause?.nursingassessment?.length})
            </button>
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
              Hously Observation Chart ({SelectCause?.hourlynote?.length})
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
                setSurgicalCount(false);
                setIntakeOutput(false);
                setPreOperative(true);
                setSurgery(false);
                setPostSurgeryChart(false);
                setPreAnaestheticAsses(false);
                setSafetyCheck(false);
              }}
            >
              Pre-Observation checklist ({SelectCause?.preoperativelist?.length})
            </button>
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
                setSurgicalCount(false);
                setIntakeOutput(false);
                setPreOperative(false);
                setSurgery(false);
                setPostSurgeryChart(false);
                setPreAnaestheticAsses(true);
                setSafetyCheck(false);
              }}
            >
              Pre-Anesthesia Assessment ({SelectCause?.preanesthetica?.length})
            </button>
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
                setSurgicalCount(false);
                setIntakeOutput(false);
                setPreOperative(false);
                setSurgery(false);
                setPostSurgeryChart(false);
                setPreAnaestheticAsses(false);
                setSafetyCheck(true);
              }}
            >
              Surgical Safety
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
                setSurgicalCount(false);
                setIntakeOutput(false);
                setPreOperative(false);
                setSurgery(false);
                setPostSurgeryChart(true);
                setPreAnaestheticAsses(false);
                setSafetyCheck(false);
              }}
            >
              Post surgical monitoring chart ({SelectCause?.postsurgicalmonitor?.length})
            </button>
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

        {IPBilling ? (
          <IpBillingSheet />
        ) : DocTreatmentChart ? (
          <DoctorTreatment DoctTreatmentChat = {SelectCause?.doctorstreatment} patientdetail={patientdetail} />
        ) : DocNotes ? (
          <DoctorNotes DoctorsNotes = {SelectCause?.doctorsnotes} patientdetail={patientdetail} />
        ) : medication ? (
          <MedicationChart />
        ) : NursesNotes ? (
          <NurseNotes />
        ) : HouslyObservChart ? (
          <HourlyObservChart />
        ) : NursingAssessmentOnAdmisssion ? (
          <NursingAssessment NursingAssessments = {SelectCause?.nursingassessment} patientdetail={patientdetail} />
        ) : surgery ? (
          <SurgeryReport />
        ) : IntakeOutput ? (
          <IntakeOutputChart />
        ) : preOperative ? (
          <PreOperative CHECKLIST = {SelectCause?.preoperativelist} patientdetail={patientdetail} />
        ) : surgicalCount ? (
          <SurgicalCount />
        ) : postSurgeryChary ? (
          <PostSurgeryChart />
        ) : preAnaestheticAsses ? (
          <>
            <PreAnaestheticAsses />
            <AnaesthesiaRecord />
          </>
        ) : safetyCheck ? (
          <SafetyCheckList />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PatientView;
