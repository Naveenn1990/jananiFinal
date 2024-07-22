import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaBackward } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const MedicationChartAdd = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const { patientdetails, cause } = location.state || {};
  
  console.log("patientdetails", patientdetails);
  console.log("cause", cause);

  const dobString = patientdetails?.DOB;
  const dob = new Date(dobString);
  const currentDate = new Date();
  const differenceMs = currentDate - dob;
  const ageYears = Math.floor(differenceMs / (1000 * 60 * 60 * 24 * 365.25));

  let ageOutput;
  if (ageYears < 1) {
    const ageMonths = Math.floor(ageYears * 12);
    ageOutput = `${ageMonths} months`;
  } else {
    ageOutput = `${ageYears} years`;
  }

  // Add Druges

  const [Drugname, setDrugname] = useState("");
  const [DrugDate, setDrugDate] = useState("");
  const [DrugTime, setDrugTime] = useState("");

  const [Drug, setDrug] = useState([])

  const adddrug = async()=>{
   const newDrug = {
    causename:cause?.CauseName,
    Drugname:Drugname,
    DrugDate:DrugDate,
    DrugTime:DrugTime,
   }
   setDrug((prevDrug) => [...prevDrug, newDrug]);
  }
  const deleteDrug = async (indexToDelete) => {
    const updatedDrugList = Drug.filter((_, index) => index !== indexToDelete);
    setDrug(updatedDrugList);
  };

const [causeName, setcauseName] = useState("")

console.log("causeName",causeName);
  const submitalldurgs = async()=>{
    try {
      const config ={
        url:"/adddrug",
        method:"put",
        baseURL:"http://localhost:8521/api/staff",
        headers:{"content-type":"application/json"},
        data:{
          patientId:patientdetails?._id,
          causeId:cause?._id,
          Drug:Drug
        }
      }
      let res = await axios(config);
      if(res.status === 200){
        alert(res.data.success)
      }
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  
  return (
    <div>
      <div>
        <button
          className="mt-2"
          style={{
            border:"#20958c",
            padding: "8px",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "6px",
             boxShadow: " 8px 8px 16px #20958c,-8px -8px 16px #20958c",
           
          }}
          onClick={() => window.history.go(-1)}
        >
         <FaBackward />  &nbsp;      
         Back
        </button>
      </div>

      <div className="text-center mt-1">
        {" "}
        <h6
          className="fw-bold mt-2"
          style={{ color: "#20958C", fontSize: "30px" }}
        >
          MEDICATION CHART
        </h6>
      </div>
      <div
        id="pdf"
        style={{
          padding: "15px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "5px",
            border: "2px solid #20958C",
            margin: "auto",
            borderRadius: "20px",
          }}
        >
          <div className="d-flex align-items-center mb-1 justify-content-around ps-5 pe-5 pt-4">
            <div className="d-flex align-items-center">
              <img src="/Images/logo.jpg" alt="" style={{ width: "100px" }} />
            </div>
            <div className="text-center">
              <h4 className="fw-bold" style={{ fontSize: "25px" }}>
                JANANI MULTISPECIALITY HOSPITAL AND RESEARCH CENTER
              </h4>
              <h6 className="fw-bold" style={{ fontSize: "19px" }}>
                Beside Canara Bank, Jalanagar Main Road, K. K. Colony,
                Vijaypura-586109
              </h6>
              <h6 style={{ fontSize: "16px" }}>
                Tel:08352-277077 Cell:9606031158, 7090831204
                Email:jananihospital2018@gmail.com
              </h6>
            </div>
          </div>
          <div className="text-center mt-1">
            {" "}
            <h6
              className="fw-bold mt-2"
              style={{ color: "#20958C", fontSize: "30px" }}
            >
              MEDICATION CHART
            </h6>
          </div>
          <div
            style={{
              paddingLeft: "42px",
              paddingRight: "42px",
              textAlign: "justify",
            }}
          >
            <p style={{ fontSize: "17px" }}>
              <div className="container">
                <div className="row" style={{ border: "1px solid #20958C" }}>
                  <div
                    className="col-md-7 consentformhd">
                    Patient Name:{" "}
                    <span>
                      {`${patientdetails?.Firstname} ${patientdetails?.Lastname} `}
                    </span>
                  </div>
                  <div
                    className="col-md-2 consentformhd">
                    Age: <span>{ageOutput}</span>
                  </div>
                  <div
                    className="col-md-3"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Sex: <span>{patientdetails?.Gender}</span>
                  </div>
                </div>
                <div className="row" style={{ border: "1px solid #20958C" }}>
                  <div
                    className="col-md-6"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    PID: <span>{patientdetails?.PatientId}</span>
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    Doctors Name: <span>jk</span>
                  </div>
                </div>
                <div className="mt-2">
                  <Table className="text-center" bordered>
                    <thead>
                      <tr>
                        <th>Cause</th>
                        <th>Drug Name</th>
                        <th>Date </th>
                        <th>Time</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 
                          {cause?.CauseName}
                          </td>
                        <td>
                          <textarea
                            className="vi_0"
                            value={Drugname}
                           onChange={(e)=>setDrugname(e.target.value)}
                          ></textarea>
                        </td>
                        <td>
                        <input
                          type="date"                       
                          className="vi_0" 
                          value={DrugDate}
                          onChange={(e)=>setDrugDate(e.target.value)}                        
                        />
                        </td>
                        <td>
                        <input
                          type="time"                       
                          className="vi_0"
                          value={DrugTime}
                          onChange={(e)=>setDrugTime(e.target.value)}                         
                        />
                        </td>
                        <td>
                       <Button 
                       onClick={adddrug}
                       >
                       <IoMdAdd />
                        </Button> 
                        </td>
                      </tr>
{Drug?.map((item,i)=>{
  return(
    <tr>
    <td>{item?.causename}</td>
    <td>{item?.Drugname}</td>
    <td>{item?.DrugDate}</td>
    <td>{item?.DrugTime}</td>
    <td>
      <MdDelete 
      onClick={()=>deleteDrug(i)}
      style={{
      cursor:"pointer" , 
      color:"red"}} />
      </td>
  </tr>
  )
})}
                     
                    </tbody>
                  </Table>
                </div>              
              </div>
            </p>
          </div>
        </div>
      </div>
    
      <div className="text-center mt-2 mb-2">
        <button 
        className="btn btn-success"
        onClick={submitalldurgs}
        >Submit</button>
      </div>
    </div>
  );
};

export default MedicationChartAdd;
