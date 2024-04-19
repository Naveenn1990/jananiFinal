import React from 'react'
import PharmacySidebar from './PharmacySidebar'
import { PharmacyHeader } from './PharmacyHeader'

export const PharmacyCommanDashboard = (props) => {
  return (
    <div>
 <div className="dash">
      <div className="row me-0">
        <div className="col-md-2 p-0">
          <div className="left-side">
            < PharmacySidebar />
          </div>
        </div>

        <div className="col-md-10 p-0 right-h ">
          <PharmacyHeader />
          {props.children}
        </div>
      </div>
    </div>

    </div>
  )
}
