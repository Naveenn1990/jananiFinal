import {
  faMoneyBillTransfer,
  faUserGroup,
  faVialVirus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export const ReferDoctorDashboard = () => {
  const ReferralDocDetails = JSON.parse(
    sessionStorage.getItem("RDoctorDetails")
  );
  const [RefHospitalPatientList, setRefHospitalPatientList] = useState([]);
  const getRefHospitalPatientList = () => {
    axios
      .get(
        `http://localhost:8521/api/Clinic/getRefHospitalPatient/${ReferralDocDetails?._id}`
      )
      .then(function (response) {
        setRefHospitalPatientList(response.data.refpatient);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [RefPatientList, setRefPatientList] = useState([]);
  const getRefLabPatientList = () => {
    axios
      .get(
        `http://localhost:8521/api/Clinic/getRefPatientList/${ReferralDocDetails?._id}`
      )
      .then(function (response) {
        setRefPatientList(response.data.UsersInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getRefHospitalPatientList();
    getRefLabPatientList();
  }, []);

  return (
    <div>
      <Container>
        <div
          className="p-4 mb-4 row align-items-center justify-content-between"
          style={{ backgroundColor: "#dae1f3" }}
        >
          <h4 className="fw-bold col-lg-4">Dashboard</h4>

          <div className="col-lg-6 d-flex gap-3 ">
            {/* <Form.Select style={{ width: '200px', marginLeft: 'auto' }} aria-label="Default select example">
                        <option value="1">Last 30 Days</option>
                        <option value="2">Last 6 Months</option>
                        <option value="3">Last 1 Year</option>
                    </Form.Select>
                    <Button className='d-flex gap-2' style={{ backgroundColor: 'rgb(32 139 140)' }}><FontAwesomeIcon icon={faFileInvoice} className='fs-6' /> Report</Button> */}
          </div>
        </div>

        <div className="row justify-content-center">
          <div
            className="col-lg-4 text-light me-3 ms-auto"
            style={{
              backgroundColor: "#fd7e14",
              borderRadius: "20px",
              width: "350px",
            }}
          >
            <div className=" refer-dashboard ">
              <span>
                <FontAwesomeIcon
                  icon={faUserGroup}
                  className="fs-2 p-4  "
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "rgb(247 97 10)",
                  }}
                />
              </span>
              <div>
                <span className="fs-6 fw-bold">HOSPITAL REFERED </span> <br />
                <span className="fs-4 mb-2">
                  {RefHospitalPatientList?.length}
                </span>
                <div className="progress mb-2">
                  <div
                    className="progress-bar"
                    style={{ width: `${RefHospitalPatientList?.length}%` }}
                  ></div>
                </div>
                <span className="">
                  {RefHospitalPatientList?.length}% Increases
                </span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 text-light  me-3"
            style={{
              backgroundColor: "#6f42c1",
              borderRadius: "20px",
              width: "350px",
            }}
          >
            <div className=" refer-dashboard ">
              <span>
                <FontAwesomeIcon
                  icon={faVialVirus}
                  className="fs-2 p-4  "
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "rgb(139 85 211)",
                  }}
                />
              </span>
              <div>
                <span className="fs-6 fw-bold">LAB REFRAL</span> <br />
                <span className="fs-4 mb-2">{RefPatientList?.length}</span>
                <div className="progress mb-2">
                  <div
                    className="progress-bar"
                    style={{ width: `${RefPatientList?.length}%` }}
                  ></div>
                </div>
                <span className="">{RefPatientList?.length}% Increases</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 text-light  me-3"
            style={{
              backgroundColor: "#198754",
              borderRadius: "20px",
              width: "350px",
            }}
          >
            <div className=" refer-dashboard ">
              <span>
                <FontAwesomeIcon
                  icon={faMoneyBillTransfer}
                  className="fs-2 p-4  "
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "rgb(44 149 81)",
                  }}
                />
              </span>
              <div>
                <span className="fs-6 fw-bold">REVENUE</span> <br />
                <span className="fs-4 mb-2">85%</span>
                <div className="progress mb-2">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
                <span className="">60% Increase in 28 Days</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
