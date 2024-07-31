import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { FaBackward } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const InatkeOutput = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { patientdetails, cause } = location.state || {};

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

  // Add INTAKE / OUTPUT CHART

  const [IODate, setIODate] = useState("");
  const [IOTime, setIOTime] = useState("");
  const [Parental, setParental] = useState("");
  const [Quantity1, setQuantity1] = useState("");
  const [OralRT, setOralRT] = useState("");
  const [Quantity2, setQuantity2] = useState("");
  const [Urine, setUrine] = useState("");
  const [Drainage, setDrainage] = useState("");
  const [VomitusBowels, setVomitusBowels] = useState("");
  const [RyTubeAspiration, setRyTubeAspiration] = useState("");

  const [IntakeOutP, setIntakeOutP] = useState([]);

  const AddIntakeOutP = async () => {
    const newNote = {
      causename: cause?.CauseName,
      IODate: IODate,
      IOTime: IOTime,
      Parental: Parental,
      Quantity1: Quantity1,
      OralRT: OralRT,
      Quantity2: Quantity2,
      Urine: Urine,
      Drainage: Drainage,
      VomitusBowels: VomitusBowels,
      RyTubeAspiration:RyTubeAspiration,
    };
    setIntakeOutP((prevDrug) => [...prevDrug, newNote]);
  };
  const deleteInOut = async (indexToDelete) => {
    const updatedDrugList = IntakeOutP.filter(
      (_, index) => index !== indexToDelete
    );
    setIntakeOutP(updatedDrugList);
  };
  const [SelectDoctor, setSelectDoctor] = useState("");
  const [DoctorDept, setDoctorDept] = useState([]);
  useEffect(() => {
    if (SelectDoctor) {
      const assignDocDept = patientdetails?.assigndocts?.filter(
        (ele) => ele?.doctorsId?._id === SelectDoctor
      );
      setDoctorDept(assignDocDept);
    }
  }, [SelectDoctor, patientdetails]);

  const submitIntakeOut = async () => {
   
    if(!IODate){
      return alert("Please Select date")
    }
    if(!IOTime){
      return alert("Please Select time")
    }
    if(!Parental){
      return alert(" Enter Parental")
    }
    if(!Quantity1){
      return alert(" Enter Quantity")
    }
    if(!OralRT){
      return alert(" Enter Oral/ RT")
    }
    if(!Quantity2){
      return alert(" Enter Quantity2")
    }
    if(!Urine){
      return alert(" Enter Urine Status")
    }
    if(!Drainage){
      return alert(" Enter Drainage Status")
    }
    if(!VomitusBowels){
      return alert(" Enter Vomitus/ Bowels Status")
    }
    if(!RyTubeAspiration){
      return alert(" EnterRyle's Tube Aspiration Status")
    }
    try {
      const config = {
        url: "/addintakeout",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "content-type": "application/json" },
        data:{
            patientId: patientdetails?._id,
            causeId : cause?._id,
            doctorId : SelectDoctor,
            IODate:IODate,
            IOTime:IOTime,
            Parental:Parental,
            Quantity1:Quantity1,
            OralRT:OralRT,
            Quantity2:Quantity2,
            Urine:Urine,
            Drainage:Drainage,
            VomitusBowels:VomitusBowels,
            RyTubeAspiration:RyTubeAspiration,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const [userdetail, setuserdetail] = useState({});
  const getpatientbyid = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8521/api/user/getPatientDetailByid/${patientdetails?._id}`
      );
      if (res.status === 200) {
        setuserdetail(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getpatientbyid();
  }, []);
  const [SelectedCause, setSelectedCause] = useState([]);
  useEffect(() => {
    if (cause) {
      const findcause = userdetail?.cause?.filter(
        (ele) => ele._id === cause?._id
      );
      setSelectedCause(findcause);
    }
  }, [cause, userdetail]);
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
          style={{
            color: "#20958C",
            fontSize: "30px",
          }}
        >
          INTAKE / OUTPUT CHART
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
              style={{
                color: "#20958C",
                fontSize: "30px",
              }}
            >
              INTAKE / OUTPUT CHART
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
                    className="col-md-6"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
                    Name:{" "}
                    <span>
                      {`${patientdetails?.Firstname} ${patientdetails?.Lastname} `}
                    </span>
                  </div>
                  <div
                    className="col-md-2"
                    style={{
                      border: "1px solid #20958C",
                      paddingLeft: "unset",
                      paddingRight: "unset",
                      fontSize: "17px",
                    }}
                  >
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
                    Pt ID: <span>{patientdetails?.PatientId}</span>
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
                    Ward: <span>
                    {
                      SelectedCause?.[0]?.causeBillDetails?.[0]?.BedBillDetails?.map((item)=>{
                        return(
                         <span> {item?.bedName}</span>
                        )
                      })}
                    </span>
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
                    Dept: <span>
                    {
                      SelectedCause?.[0]?.causeBillDetails?.[0]?.BedBillDetails?.map((item)=>{
                        return(
                         <span> {item?.wardtype}</span>
                        )
                      })}
                    </span>
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
                    Doctor: <br/>
                    {patientdetails?.assigndocts?.map((item,i)=>{
                      return(
                        <div>{i+1}). <span style={{fontWeight:"bold"}}>Dr. {`${item?.doctorsId?.Firstname} ${item?.doctorsId?.Lastname}`}</span></div>
                      )
                    })}
                  </div>
                </div>

               
              </div>
            </p>
          </div>

          <div className="container mt-2" style={{overflow:"hidden",overflowX:"scroll"}}>
                  <Table className="text-center" bordered>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th colspan="4">INTAKE </th>
                        <th colspan="4">OUTPUT</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Parental</td>
                        <td>Quantity</td>
                        <td>Oral/ RT</td>
                        <td>Quantity</td>
                        <td>Urine</td>
                        <td>Drainage</td>
                        <td>Vomitus/ Bowels</td>
                        <td>Ryle's Tube Aspiration</td>                        
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="date"
                            className="vi_0"
                            value={IODate}
                            onChange={(e) => setIODate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]} 
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="vi_0"
                            value={IOTime}
                            onChange={(e) => setIOTime(e.target.value)}
                          />
                        </td>
                        <td>                         
                          <input
                            type="text"
                            className="vi_0"
                            value={Parental}
                            onChange={(e) => setParental(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="vi_0"
                            value={Quantity1}
                            onChange={(e) => setQuantity1(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="vi_0"
                            value={OralRT}
                            onChange={(e) => setOralRT(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="vi_0"
                            value={Quantity2}
                            onChange={(e) => setQuantity2(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="vi_0"
                            value={Urine}
                            onChange={(e) => setUrine(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="vi_0"
                            value={Drainage}
                            onChange={(e) => setDrainage(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="vi_0"
                            value={VomitusBowels}
                            onChange={(e) => setVomitusBowels(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="vi_0"
                            value={RyTubeAspiration}
                            onChange={(e) =>
                              setRyTubeAspiration(e.target.value)
                            }
                          />
                        </td>
                      </tr>
                      {IntakeOutP?.map((item, i) => {
                        return (
                          <tr>
                            <td>{item?.IODate}</td>
                            <td>{item?.IOTime}</td>
                            <td>{item?.Parental}</td>
                            <td>{item?.Quantity1}</td>
                            <td>{item?.OralRT}</td>
                            <td>{item?.Quantity2}</td>
                            <td>{item?.Urine}</td>
                            <td>{item?.Drainage}</td>
                            <td>{item?.VomitusBowels}</td>
                            <td>{item?.RyTubeAspiration}</td>
                            <td>
                              <MdDelete
                                onClick={() => deleteInOut(i)}
                                style={{
                                  cursor: "pointer",
                                  color: "red",
                                }}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
        </div>
      </div>

      <div className="text-center mt-2 mb-2">
        <button className="btn btn-success" onClick={submitIntakeOut}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default InatkeOutput;
