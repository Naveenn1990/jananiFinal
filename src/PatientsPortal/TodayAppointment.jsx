import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";
import {
  BsCheckCircle,
  BsTrash3,
  BsArrowDownCircle,
  BsFileEarmarkZip,
} from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { PiFileTextLight } from "react-icons/pi";
import {
  AiFillFilePdf,
  AiOutlineFilePdf,
  AiOutlineFileWord,
  AiOutlineFileImage,
} from "react-icons/ai";
import { FaTablets, FaCapsules, FaSyringe, FaPills } from "react-icons/fa";
import axios from "axios";
import moment from "moment";
export const TodayAppointment = () => {
  const today = moment().format("YYYY-MM-DD");

  const [AppointmentList, setAppointmentList] = useState([]);

  const getAppointmentList = () => {
    axios
      .get("http://localhost:8521/api/user/getlist")
      .then(function (response) {
        // handle success
        console.log("fjjfjfjfjf", response.data)
        const data = response.data.Info.filter(
          (item) => item.Dateofappointment === today
        );
        setAppointmentList(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getAppointmentList();
  }, []);

  console.log(AppointmentList, "data", today);

  return (
    <div>
      <h4
        style={{ backgroundColor: "#dae1f3" }}
        className="p-4 fw-bold mb-4 mt-2"
      >
        Todays Appointment
      </h4>

      <Container>
        <Table responsive style={{ width: "1200px" }}>
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold">Patient Name</th>
              <th className="fw-bold">Date & Time</th>
              <th className="fw-bold">Treatment</th>
              <th className="fw-bold">Contact</th>
              <th className="fw-bold">Location</th>
            </tr>
          </thead>
          <tbody>
            {AppointmentList?.map((item) => {
              return (
                <tr className="admin-table-row">
                  <td>
                    {item?.Time} &nbsp; {item?.Dateofappointment}
                  </td>
                  <td>{item?.Condition}</td>
                  <td>+{item?.PhoneNumber}</td>

                  <td>{item?.Address1}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <span className="pagination" style={{ float: "right" }}>
                <button className="btn2">Previous</button>
                <button className="btn1">1</button>
                <button className="btn3">Next</button>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
