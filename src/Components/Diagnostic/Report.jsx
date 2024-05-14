import React from 'react'
import { Table} from 'react-bootstrap'

 function Report() {
  return (
    <div>
    
      <Table
          style={{
          borderCollapse: "collapse",
          width: "60%",
          margin: "auto",
          marginBottom: "10px",
          // border:"none"
          }}
        >
          <tbody 
           style={{
            // width:"40px",
            height:"vh",
            // border:"1px solid gray"
           }}
          >
            <tr>
              <td
               colSpan={2}
               style={{borderBottom:"6px solid black",fontWeight:"bolder",fontSize:"22px"}}
             >
                JANANI HOSPITAL
              </td>
              <td 
               colSpan={3}
               style={{borderBottom:"6px solid black",fontWeight:"bolder",fontSize:"22px"}}
             >
              Address
            </td>

            </tr>
           
            <tr>
              <td  style={{borderBottom:"3px solid black"}}>
               <div className='d-flex' >
               <div>
                Yash M.Patel

                </div>
             <div>
             <img src="/img/qr-code-l.png" alt=""  style={{height:"50px",width:"50px", marginLeft:"15px" }}/>
             </div>
               </div>
               
                
              </td>
              <td
                style={{borderBottom:"3px solid black"}}
               >
                Sample Collected At
              </td>
              <td 
               colSpan={2}
               style={{borderBottom:"3px solid black"}}
              >
               Registered
              </td>
            </tr>
            <tr>
              <td
                colSpan={4}
               style={{textAlign:"center",fontSize:"19px",fontWeight:"bold"}}
              >
                 Complete Blood Count
              </td>
            </tr>
            <tr>
              <td 
               style={{fontWeight:"bold"}}
              >
                Investigation
              </td>
              <td
             style={{fontWeight:"bold"}}
              >
                Result
              </td>
              <td
              style={{fontWeight:"bold"}}
              >
                RefValue
              </td>
              <td
                style={{fontWeight:"bold"}}              
              >
                Unit
              </td>
            </tr>
            <tr>
              <td 
               colSpan={1}
              >
                Primary Sample Type:
              </td>
              <td
               colSpan={3}
              >
                Blood
              </td>
            </tr>
             <tr>
              <td
               colSpan={4}
                style={{fontWeight:"bold"}}             
              >HAEMOGLOBIN</td>
              
             </tr>
             <tr>
              <td>haemoglobin</td>
              <td>12.5</td>
              <td>Low 13.0-17.0</td>
              <td>g/dL</td>
             </tr>
             <tr>
              <td
                 colSpan={4}
                style={{fontWeight:"bold"}}             
              >RBC Count</td>
             
             </tr>
             <tr>
              <td>Total RBC Count</td>
              <td>5.2</td>
              <td>4.5-5.5</td>
              <td>mill/cumm</td>
             </tr>
             <tr>
              <td 
               colSpan={4}
                style={{fontWeight:"bold"}}             
              >BLOOD INDICES</td>

             </tr>
             <tr>
              <td>Packed Cell Volume</td>
              <td>37.5</td>
              <td>Low 40-50</td>
              <td>%</td>
             </tr>
             <tr>
              <td>Mean Corpuscular Volume</td>
              <td>72.12</td>
              <td>50-62</td>
              <td>%</td>
             </tr>
             <tr>
              <td colSpan={4}>Calculated</td>

             </tr>
             <tr>
              <td>RDW</td>
              <td>13.6</td>
              <td>11.6-14.0</td>
              <td>%</td>
             </tr>
             <tr>
              <td
               colSpan={4}
                style={{fontWeight:"bold"}}             
              >WBC Count</td>
             
             </tr>
             <tr>
              <td>Total WBC Count</td>
              <td>9000</td>
              <td>4000-11000</td>
              <td>cumm</td>
             </tr>
             <tr>
              <td
               colSpan={4}
                 style={{fontWeight:"bold"}}            
              >DIFFERENTIAL WBC COUNT</td>
              
             </tr>
             <tr>
              <td>Neutrophils</td>
              <td>60</td>
              <td>50-62</td>
              <td>%</td>
             </tr>
             <tr>
              <td>Lymphocytes</td>
              <td>31</td>
              <td>20-40</td>
              <td>%</td>
             </tr>
             <tr>
              <td>Eosinophils</td>
              <td>1</td>
              <td>00-06</td>
              <td>%</td>
             </tr>
             <tr>
              <td>Monocytes</td>
              <td>7</td>
              <td>00-10</td>
              <td>%</td>
             </tr>
             <tr>
              <td>Basophils</td>
              <td>1</td>
              <td>00-02</td>
              <td>%</td>
             </tr>
             <tr>
              <td
                colSpan={4}
                style={{fontWeight:"bold"}}             
              >PLATELET COUNT</td>
             
             </tr>
             <tr>
              <td>Platelet Count</td>
              <td>320000</td>
              <td>150000-410000</td>
              <td>cumm</td>
             </tr>
          </tbody> 
        </Table>
        <h6 style={{marginLeft:"290px"}}>
          <span style={{fontWeight:"bold"}}>Instruments</span>: Fully Automated CellCounter-Mindray 300
        </h6>
        <h6 style={{marginLeft:"290px"}}>
         <span style={{fontWeight:"bold"}}>Interpretation</span>: Further Confirm for Anemia
        </h6>
                  

    
   </div>
  )
}
 export default Report
