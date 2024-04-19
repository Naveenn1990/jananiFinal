import React from 'react'
import ReferDoctorsSidebar from './ReferDoctorSidebar'
import { ReferDoctorsHeader } from './ReferDoctorHeader'

export const ReferDoctorCommanDashboard = (props) => {
  return (
    <div>
 <div className="dash">
      <div className="row me-0">
        <div className="col-md-2 p-0">
          <div className="left-side">
            < ReferDoctorsSidebar />
          </div>
        </div>

        <div className="col-md-10 p-0 right-h ">
          <ReferDoctorsHeader />
          {props.children}
        </div>
      </div>
    </div>

    </div>
  )
}
