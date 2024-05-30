import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FaTablets } from "react-icons/fa";
import axios from "axios";

function PatientDashboard() {
  const user = JSON.parse(sessionStorage.getItem("PatientUser"));

  const [AppointmentList, setAppointmentList] = useState([]);
  const getAppointmentList = () => {
    axios
      .get("http://localhost:8521/api/user/getlist")
      .then(function (response) {
        const data = response.data.Info?.filter(
          (item) => item?.PatientId == user?._id
        );
        setAppointmentList(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getAppointmentList();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#F0F3FB" }}>
        <div className="container pt-3">
          <div className="h-100 rounded shadow-sm bg-white mb-3">
            <div className="row justify-content-between align-items-center ">
              <div className="col-md-4 mb-3 ">
                <img
                  className="img-fluid"
                  src="./img/patient-dashboard-img.png"
                  alt="welcome"
                />
              </div>
              <div className="col-md-8 ">
                <div
                  className="text-start lh-base p-2 "
                  style={{ textAlign: "justify" }}
                >
                  <p>Welcome back</p>
                  <h2 style={{ color: "#2196F3" }}>{user?.Firstname}</h2>
                  <p>
                    We would like to take this opportunity to welcome you to our
                    practice and to thank you for choosing our physicians to
                    participate in your healthcare. We look forward to providing
                    you with personalized, comprehensive health care focusing on
                    wellness and prevention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">          
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card p-4 border-0">
                <img
                  src="./img/patient-dashboard-img-2.png"
                  width="50px"
                  className="mb-3"
                  alt=""
                />
                <div className="card-body text-end">
                  <h5 className="card-title mb-2">Blood Pressure</h5>
                  <h4
                    className="card-subtitle mb-2"
                    style={{ color: "#4caf50" }}
                  >
                    {AppointmentList[0]?.bp}
                  </h4>               
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card p-4 border-0">
                <img
                  src="./img/patient-dashboard-img-3.png"
                  width="50px"
                  className="mb-3"
                  alt=""
                />
                <div className="card-body text-end">
                  <h5 className="card-title mb-2">Glucose Level</h5>
                  <h4
                    className="card-subtitle mb-2"
                    style={{ color: "#4caf50" }}
                  >
                    {AppointmentList[0]?.suger}
                  </h4>
                  <p className="card-text">
                  
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card p-4 border-0">
                <img
                  src="./img/patient-dashboard-img-4.png"
                  width="50px"
                  className="mb-3"
                  alt=""
                />
                <div className="card-body text-end">
                  <h5 className="card-title mb-2">Pulse Rate</h5>
                  <h4
                    className="card-subtitle mb-2"
                    style={{ color: "#4caf50" }}
                  >
                    {AppointmentList[0]?.pulserate}
                  </h4>
                  <p className="card-text">
                    {/* <BiTrendingDown
                      style={{ color: "#FD801B", fontSize: "30px" }}
                    /> */}
                    {/* 22% Less Then Last Month */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>      

        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div class="card border-0 px-3">
                <div class="card-body p-0">
                  <h5 class="card-title text-start mb-3">Medications</h5>
                  {AppointmentList[0]?.medicineInfo?.map((val) => {
                    return (
                      <div className="d-flex justify-content-between">
                        <p class="card-text">
                          <FaTablets
                            className=" fs-5 me-2"
                            style={{ color: "#4CAF50" }}
                          />
                          {val.medicineName}
                        </p>
                        <span style={{ width: "58px" }}>
                          {val.morningDose}-{val.noonDose}-{val.eveDose}-
                          {val.nightDose}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div class="card border-0">
                <div class="card-body">
                  <h5 class="card-title mb-3">Reports/Documents</h5>
                  {AppointmentList[0]?.investigationList.map((val) => {
                    return (
                      <div className="border rounded d-flex justify-content-between p-2 mb-3">
                        <div>
                          <AiOutlineFilePdf
                            className="me-1 fs-4"
                            style={{ color: "#F66043" }}
                          />
                          <a
                            href={`http://localhost:8521/Patient/${val.investigationIncludeInReport}`}
                            target="blank_"
                          >
                            {" "}
                            <span>{val.investigationName}</span>
                          </a>
                        </div>
                        <div className="d-flex gap-2"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientDashboard;
