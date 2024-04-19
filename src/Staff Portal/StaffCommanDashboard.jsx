import React from 'react'
import StaffSidebar from './StaffSidebar'
import { StaffHeader } from './StaffHeader'
import { useState } from 'react'


export const StaffCommanDashboard = (props) => {

  const[ side,setsidebar]=useState(true)

  return (
    <div>
 <div className="dash">
      <div className="row me-0">
        <div className="col-md-2 p-0">
          <div className="left-side">
            < StaffSidebar />
          </div>
        </div>

        <div className="col-md-10 p-0 right-h ">
          <StaffHeader />
          {props.children}
        </div>
      </div>
    </div>

    </div>
  )
}
