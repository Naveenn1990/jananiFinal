import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Container, FloatingLabel, Form, Modal } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
export const YourAppointment = () => {
  const patientMedicalRecordObj = JSON.parse(
    sessionStorage.getItem("PatientUser")
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setAppointmentId(item);
  };

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



  const [AppointmentId, setAppointmentId] = useState({});
  const [Time, setTime] = useState("");
  const [DateofApp, setDateofApp] = useState("");

  const UpdateBookingAppointment = async () => {
    try {
      const config = {
        url: "/user/rescheduleapp",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          Id:AppointmentId?._id,
          Time: Time,
          Dateofappointment: DateofApp,
        },
      };

      let res = await axios(config);
      if (res.status === 200) {
        alert("reschedule successfully");
        getAppointmentList();
        handleClose();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getAppointmentList();
  }, []);

  console.log("AppointmentList",AppointmentList);
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
                      <p className="mb-2 fw-bold">Token No : {item?.token}</p>
                      <p className="mb-2 fw-bold">{item?.Condition}</p>
                    </div>
                    <p
                      style={{
                        color: "green",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                    >
                      <FaEdit onClick={() => handleShow(item)} />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h6>Time of Appointment</h6>
            <Form.Select
              className="width-respns width-respns-768px"
              style={{ width: "400px", marginBottom: "20px" }}
              aria-label="Default select example"
              onChange={(e) => setTime(e.target.value)}
            >
              <option>Time</option>
              <option value="10:30 - 11:00">10:30 - 11:00</option>
              <option value="11:00 - 11:30">11:00 - 11:30</option>
              <option value="11:30 - 12:00">11:30 - 12:00</option>
              <option value="12:00 - 12:30">12:00 - 12:30</option>
              <option value="12:30 - 01:00">12:30 - 01:00</option>
              <option value="03:30 - 4:00">03:30 - 4:00</option>
              <option value="04:00 - 4:30">04:00 - 4:30</option>
              <option value="04:30 - 5:00">04:30 - 5:00</option>
            </Form.Select>
          </div>
          <FloatingLabel
            className="width-respns"
            style={{ width: "400px" }}
            controlId="floatingDate"
            label="Date of Appointment"
          >
            <Form.Control
              type="date"
              placeholder="Date of Appointment"
              onChange={(e) => setDateofApp(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={UpdateBookingAppointment} variant="primary">
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
