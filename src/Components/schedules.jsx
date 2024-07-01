import React, { useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faEnvelope,
  faAnglesRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Breadcrumbs, Typography } from "@mui/material";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

export const Schedules = () => {
  const location = useLocation();
  const { DoctorId } = location.state;

  const [Doctors, setDoctors] = useState();

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = () => {
    axios
      .get("http://localhost:8521/api/Doctor/getDoctorsList")
      .then(function (response) {
        // handle success
        setDoctors(
          response.data.DoctorsInfo?.find(
            (data) => data.DoctorType === "hospital" && data?._id === DoctorId
          )
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setDoctors(error.response.data.DoctorsInfo);
      });
  };

  console.log("DoctorId", Doctors, DoctorId);
  return (
    <div>
      <div
        className="head-back-img"
        style={{
          backgroundImage: "url(./img/all-department-img.jpg)",
          width: "100%",
          height: "150px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <h1 className="text-dark pt-5 fw-light back-img-head">Schedule</h1>
        </Container>
      </div>

      <Container className="mt-5">
        <div className="mb-4">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              className="d-flex gap-1 breadcrumb-hover"
              color="inherit"
              href="/home"
            >
              <FontAwesomeIcon
                icon={faHouse}
                style={{ fontSize: "14px", marginTop: "3px" }}
              />
              Home
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              Schedule result
            </Typography>
          </Breadcrumbs>
        </div>

        <div className="mb-3">
          <h2
            className="fw-bold mb-2"
            style={{ color: "rgb(32 139 140)", fontFamily: "lato" }}
          >
            Dr. {Doctors?.Firstname}&nbsp;{Doctors?.Lastname}
          </h2>
          {/* <a
            className="text-decoration-none fw-light text-dark"
            href="/drNamee"
          > */}
          <Link
            className="text-decoration-none fw-light text-dark"
            to="/Doctor_Details"
            state={{ item: Doctors }}
          >
            <p>
              <FontAwesomeIcon icon={faUser} fade className="me-2" />
              View Profile
            </p>
          </Link>
          {/* </a> */}
        </div>
        <div className="table-responsive">
          <table className="table-bordered border-light ">
            <thead className="text-center">
              <tr style={{ backgroundColor: "#000", color: "#fff" }}>
                <th style={{ minWidth: "220px" }}>Date</th>
                <th style={{ minWidth: "220px" }}>Start Time</th>
                <th style={{ minWidth: "220px" }}>End Time</th>
                <th style={{ minWidth: "220px" }}>Schedule</th>
              </tr>
            </thead>
            <tbody>
              {Doctors?.scheduleList
                ?.filter(
                  (schedd) =>
                    moment(schedd?.scheduleDate).format("DD-MM-YYYY") >=
                    moment().format("DD-MM-YYYY")
                )
                ?.map((shedul) => (
                  <tr style={{ borderColor: "rgb(180, 219, 219)" }}>
                    <td
                      className={
                        shedul?.bookingstatus === "Occupied"
                          ? "available text-center"
                          : "text-center"
                      }
                      style={{ borderColor: "rgb(180, 219, 219)" }}
                    >
                      <div className="tb">{shedul?.scheduleDate}</div>
                    </td>

                    <td
                      className={
                        shedul?.bookingstatus === "Occupied"
                          ? "available text-center"
                          : "text-center"
                      }
                      style={{ borderColor: "rgb(180, 219, 219)" }}
                    >
                      <div class="tb">{shedul?.startTime}</div>
                    </td>

                    <td
                      className={
                        shedul?.bookingstatus === "Occupied"
                          ? "available text-center"
                          : "text-center"
                      }
                      style={{ borderColor: "rgb(180, 219, 219)" }}
                    >
                      <div className="tb">{shedul?.endTime}</div>
                    </td>

                    <td
                      className={
                        shedul?.bookingstatus === "Occupied"
                          ? "available text-center"
                          : "text-center"
                      }
                      style={{ borderColor: "rgb(180, 219, 219)" }}
                    >
                      <div className="tb">{shedul?.bookingstatus}</div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};
