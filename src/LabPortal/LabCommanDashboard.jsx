import React from 'react'
import { useState } from 'react'
import LabSidebar from './LabSidebar'
import { LabHeader } from './LabHeader'


export const LabCommanDashboard = (props) => {

    const [side, setsidebar] = useState(true)

    return (
        <div>
            <div className="dash">
                <div className="row me-0">
                    <div className="col-md-2 p-0">
                        <div className="left-side">
                            < LabSidebar />
                        </div>
                    </div>

                    <div className="col-md-10 p-0 right-h ">
                        <LabHeader />
                        {props.children}
                    </div>
                </div>
            </div>

        </div>
    )
}
