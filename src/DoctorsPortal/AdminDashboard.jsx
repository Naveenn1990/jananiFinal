import React from "react";
import { DoctorDashboard } from "./DoctorDashboard";
import { DoctorsHeader } from "./DoctorsHeader";
import DoctorsSidebar from "./DoctorsSidebar";

function AdminDashboard(props) {
  return (
    <div className="dash">
      <div className="row me-0">
        <div className="col-md-2 p-0">
          <div className="left-side">
            <DoctorsSidebar />
          </div>
        </div>

        <div className="col-md-10 p-0 right-h ">
         <DoctorsHeader/>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard