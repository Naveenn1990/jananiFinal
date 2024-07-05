import React from "react";
import PatientHeader from "./patientHeader";
import PatientsSidebar from "./PatientsSidebar";

function PatientsCommanDashboard(props) {

  
  return (
    <div className="dash">
      <div className="row me-0">
        <div className=" col-lg-2 left-side" style={{height:"100%"}}>
            <PatientsSidebar  />
        </div>

        <div className="col-lg-10  ">
          {/* <PatientHeader /> */}
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default PatientsCommanDashboard