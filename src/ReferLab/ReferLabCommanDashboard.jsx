import React from 'react'
import ReferLabSidebar from './ReferLabSidebar'
import { ReferLabHeader } from './ReferLabHeader'

export const ReferLabCommanDashboard = (props) => {
  return (
    <div>
 <div className="dash">
      <div className="row me-0">
        <div className="col-md-2 p-0">
          <div className="left-side">
            < ReferLabSidebar />
          </div>
        </div>

        <div className="col-md-10 p-0 right-h ">
          <ReferLabHeader />
          {props.children}
        </div>
      </div>
    </div>

    </div>
  )
}
