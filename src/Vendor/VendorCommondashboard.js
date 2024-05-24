import React from "react";
import VendorSidebar from "./VendorSidebar";
import { VendorHeader } from "./VendorHeader";

export const VendorCommanDashboard = (props) => {
  return (
    <div>
      <div className="dash">
        <div className="row me-0">
          <div className="col-md-2 p-0">
            <div className="left-side">
              <VendorSidebar />
            </div>
          </div>

          <div className="col-md-10 p-0 right-h ">
            <VendorHeader />
            {props.children}   {/*<VendorOrders />is beign passed as props to it  */}
          </div>
        </div>
      </div>
    </div>
  );
};
