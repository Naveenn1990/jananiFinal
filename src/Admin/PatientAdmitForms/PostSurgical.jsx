import axios from "axios";
import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaBackward } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const PostSurgical = () => {
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

  // POST SURGICAL MONITORING CHART

  const [MonitoringTime, setMonitoringTime] = useState("");
  const [MonitoringHR, setMonitoringHR] = useState("");
  const [MonitoringBP, setMonitoringBP] = useState("");
  const [MSPo2, setMSPo2] = useState("");
  const [MRR, setMRR] = useState("");
  const [MTemp, setMTemp] = useState("");
  const [MUterine, setMUterine] = useState("");
  const [MBleeding, setMBleeding] = useState("");
  const [MLegMessage, setMLegMessage] = useState("");

  const [PostSurgicalMonitoring, setPostSurgicalMonitoring] = useState([]);

  const AddPostSurgicalMont = async () => {
    const newNote = {
      causename: cause?.CauseName,
      MonitoringTime: MonitoringTime,
      MonitoringHR: MonitoringHR,
      MonitoringBP: MonitoringBP,
      MSPo2: MSPo2,
      MRR: MRR,
      MTemp: MTemp,
      MUterine: MUterine,
      MBleeding: MBleeding,
      MLegMessage: MLegMessage,
    };
    setPostSurgicalMonitoring((prevDrug) => [...prevDrug, newNote]);
  };
  const deleteMonitorChat = async (indexToDelete) => {
    const updatedDrugList = PostSurgicalMonitoring.filter(
      (_, index) => index !== indexToDelete
    );
    setPostSurgicalMonitoring(updatedDrugList);
  };

  const submitpostsurgical = async () => {
    if(!MonitoringTime){
      return alert ("select monitoring time")
    }
    if(!MonitoringHR){
      return alert ("Write monitoring HR")
    }
    if(!MonitoringBP){
      return alert ("Write monitoring BP")
    }
    if(!MSPo2){
      return alert ("Write MSPo2")
    }
    if(!MRR){
      return alert ("Write RR")
    }
    if(!MTemp){
      return   alert ("Write Temp")
    }
    if(!MUterine){
      return alert ("Write Uterine Height")
    }
    if(!MBleeding){
      return alert ("Write Bleeding p/v")
    }
    if(!MLegMessage){
     return alert ("Write Leg Massage")
    }
    try {
      const config = {
        url: "/addpostmonitoring",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "content-type": "application/json" },
        data: {
          patientId: patientdetails?._id,
          causeId: cause?._id,
          MonitoringTime:MonitoringTime,
          MonitoringHR:MonitoringHR,
          MonitoringBP:MonitoringBP,
          MSPo2:MSPo2,
          MRR:MRR,
          MTemp:MTemp,
          MUterine:MUterine,
          MBleeding:MBleeding,
          MLegMessage:MLegMessage,
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
  return (
    <div>
     <div>
        <button
          className="mt-2"
          style={{
            border: "#20958c",
            padding: "8px",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "6px",
            boxShadow: " 8px 8px 16px #20958c,-8px -8px 16px #20958c",
          }}
          onClick={() => window.history.go(-1)}
        >
          <FaBackward /> &nbsp; Back
        </button>
      </div>

      <div className="text-center mt-1">
        {" "}
        <h6
          className="fw-bold mt-2"
          style={{ color: "#20958C", fontSize: "30px" }}
        >
          POST SURGICAL MONITORING CHART
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
              POST SURGICAL MONITORING CHART <span style={{color:"red"}}></span>
            </h6>
          </div>
          <div
            style={{
              paddingLeft: "42px",
              paddingRight: "42px",
              textAlign: "justify",
            }}
          >
            <Table bordered>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>HR</th>
                  <th>BP</th>
                  <th>SPo2</th>
                  <th>RR</th>
                  <th>TEMP</th>
                  <th>Uterine Height</th>
                  <th>Bleeding p/v</th>
                  <th>Leg Massage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="time"
                      className="vi_0"
                      value={MonitoringTime}
                      onChange={(e) => setMonitoringTime(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="vi_0"
                      value={MonitoringHR}
                      onChange={(e) => setMonitoringHR(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="vi_0"
                      value={MonitoringBP}
                      onChange={(e) => setMonitoringBP(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="vi_0"
                      value={MSPo2}
                      onChange={(e) => setMSPo2(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="vi_0"
                      value={MRR}
                      onChange={(e) => setMRR(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="vi_0"
                      value={MTemp}
                      onChange={(e) => setMTemp(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="vi_0"
                      value={MUterine}
                      onChange={(e) => setMUterine(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="vi_0"
                      value={MBleeding}
                      onChange={(e) => setMBleeding(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="vi_0"
                      value={MLegMessage}
                      onChange={(e) => setMLegMessage(e.target.value)}
                    />
                  </td>
                  {/* <td>
                    <Button onClick={AddPostSurgicalMont}>Add</Button>
                  </td> */}
                </tr>
              
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <div className="text-center mt-2 mb-2">
        <button 
        className="btn btn-success"
        onClick={submitpostsurgical}
        >Submit</button>
      </div>
    </div>
  );
};

export default PostSurgical;
