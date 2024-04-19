import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
export const YourAppointment = () => {
  const patientMedicalRecordObj = JSON.parse(
    sessionStorage.getItem("PatientUser")
  );
  const [AppointmentList, setAppointmentList] = useState([]);

  const getAppointmentList = () => {
    axios
      .get("http://localhost:8521/api/user/getlist")
      .then(function (response) {
        // handle success
        setAppointmentList(
          response.data.Info?.filter(
            (item) =>
              item?.PatientId === patientMedicalRecordObj?._id &&
              moment(item?.Dateofappointment).format("DD-MM-YYYY") >=
                moment(new Date()).format("DD-MM-YYYY")
          )
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getAppointmentList();
  }, []);

  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mt-2">
        Upcoming Appointment
      </h4>

      <Container>
        <div className="row">
          {AppointmentList?.map((item) => {
            return (
              <div className="col-lg-6">
                <div
                  className="d-flex your-appointment-respns"
                  style={{
                    width: "400px",
                    borderRadius: "15px",
                    boxShadow: "0px 8px 32px 0px rgba(19, 19, 20, 0.37)",
                  }}
                >
                  <div className="d-flex gap-2 pt-2 ">
                    <img
                      style={{ width: "70px", height: "70px" }}
                      src="./img/patientdashboard-img-1.png"
                      alt=""
                    />
                    <div>
                      <p className="mb-2 fw-bold">
                        {item?.Firstname} {item?.Dateofappointment} {item?.Time}
                      </p>
                      <p className="mb-2 fw-bold">Hospital service</p>
                      <p className="mb-2 fw-bold">{item?.Condition}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
