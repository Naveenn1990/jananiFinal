import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function OPDtoIPDBedAssign() {
  const { state } = useLocation();
  const [ChoosedCause, setChoosedCause] = useState({});
  return (
    <div style={{ padding: "20px" }}>
      <div>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          OPD TO IPD Transfer
        </h6>
      </div>
      <div>
        <label style={{ marginTop: "10px" }}>
          <b>Choose Cause</b>
        </label>
        <div style={{ marginLeft: "20px" }}>
          {state?.PatientDetailsView?.cause?.map((item, i) => {
            return (
              <div className="d-flex mt-2">
                <div>
                  <input
                    type="radio"
                    name="fav_language"
                    id={`cause${i}`}
                    value="HTML"
                    // checked={ChoosedCause}
                    onClick={() => setChoosedCause(item)}
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>{item?.CauseName}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>
          <b>Recommendation By: </b>
        </label>
        <Table bordered style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Doctor ID</th>
              <th>Doctor Name</th>
              <th>Designation</th>
              <th>Recommendation Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{state?.PatientDetailsView?.requestedDoc?.DoctorId}</td>
              <td>
                {state?.PatientDetailsView?.requestedDoc?.Firstname}{" "}
                {state?.PatientDetailsView?.requestedDoc?.Lastname}
              </td>
              <td>{state?.PatientDetailsView?.requestedDoc?.Designation}</td>
              <td>{`${new Date(
                state?.PatientDetailsView?.requestedDocDate
              ).getDate()}-${
                new Date(
                  state?.PatientDetailsView?.requestedDocDate
                ).getMonth() + 1
              }-${new Date(
                state?.PatientDetailsView?.requestedDocDate
              ).getFullYear()}`}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>
          <b>Assign Bed: </b>
        </label>
      </div>
    </div>
  );
}
