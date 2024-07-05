import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
export const YourAppointment = () => {
  const user = JSON.parse(sessionStorage.getItem("PatientUser"));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setAppointmentId(item);
  };

  const [Doctors, setDoctors] = useState([]);
  const getDoctors = () => {
    axios
      .get("http://localhost:8521/api/Doctor/getDoctorsList")
      .then(function (response) {
        setDoctors(response.data.DoctorsInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
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

  console.log("AppointmentList",AppointmentList);

  const [AppointmentId, setAppointmentId] = useState({});
  const [DateofApp, setDateofApp] = useState("");
  const [StatrtTime, setStatrtTime] = useState(null);
  const [SelectedTime, setSelectedTime] = useState({});
  useEffect(() => {
    if (StatrtTime) {
      setSelectedTime(JSON?.parse(StatrtTime));
    }
  }, [StatrtTime]);

  const UpdateBookingAppointment = async () => {
    try {
      const config = {
        url: "/user/rescheduleapp",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          AppointmentId: AppointmentId?._id,
          starttime: SelectedTime?.startTime,
          endtime: SelectedTime?.endTime,
          rescheduleId:SelectedTime?._id,

          doctorId: AppointmentId?.ConsultantDoctor?._id,
          bookedscheduleId: AppointmentId?.ScheduleId,
          Dateofappointment: DateofApp,
         
        },
      };

      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getAppointmentList();
        handleClose();
       window.location.assign("")
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const Doctorschedule = Doctors?.find(
    (doc) => doc?._id === AppointmentId?.ConsultantDoctor?._id
  );
  const uniqueDates = new Set();

  const [selecteTimearray, setselecteTimearray] = useState([]);
  useEffect(() => {
    if (AppointmentId?.Dateofappointment) {
      const asd = Doctorschedule?.scheduleList.filter(
        (item) =>
          item.scheduleDate == AppointmentId?.Dateofappointment &&
          item.bookingstatus === "Vacant"
      );
      setselecteTimearray(asd);
    }
  }, [AppointmentId?.Dateofappointment]);

  console.log("AppointmentId", AppointmentId);
  useEffect(() => {
    getAppointmentList();
    getDoctors();
  }, []);

  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mt-2">
        Upcoming Appointment
      </h4>

      <Container>
        <div className="row">
          {AppointmentList?.filter((ele) => ele?.patientDBId?._id === user?._id)?.map(
            (item) => {
              return (
                <div className="col-lg-6 mt-3">
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
                        <p className="mb-2">
                         <span style={{fontWeight:"bold"}}>Patient Name :</span> 
                         {`${item?.Firstname} ${item?.Lastname}`}
                        </p>
                        <p className="mb-2">
                         <span style={{fontWeight:"bold"}}>Appointment Date :</span> 
                          {item?.Dateofappointment}
                        </p>
                        <p className="mb-2 ">
                          <span style={{fontWeight:"bold"}}>Time :</span> 
                          {item?.starttime} to {item?.endtime}
                        </p>
                        <p className="mb-2 ">
                          <span style={{fontWeight:"bold"}}>Token No : </span> 
                          {item?.token}
                        </p>
                        <p className="mb-2 ">
                          <span style={{fontWeight:"bold"}}>Reason/Disease : </span> 
                          {item?.medicalReason}
                        </p>
                        <p className="mb-2 ">
                          <span style={{fontWeight:"bold"}}>Injury/Condition : </span> 
                          {item?.Condition}
                        </p>
                        <p className="mb-2 ">
                          <span style={{fontWeight:"bold"}}>Doctor : </span> 
                          {`${item?.ConsultantDoctor?.Firstname} ${item?.ConsultantDoctor?.Lastname}` }
                        </p>                         
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
            }
          )}
        </div>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h6>Date of Appointment</h6>
            <Form.Select
              className="width-respns width-respns-768px"
              style={{ width: "400px", marginBottom: "20px" }}
              aria-label="Default select example"
              onChange={(e) => setDateofApp(e.target.value)}
            >
              <option>Date of Appointment</option>
              {Doctorschedule?.scheduleList
                ?.filter(
                  (schedd) =>
                    moment(schedd?.scheduleDate).isSameOrAfter(
                      moment(),
                      "day"
                    ) && schedd?.bookingstatus === "Vacant"
                )
                ?.map((shedul) => {
                  const formattedDate = moment(shedul?.scheduleDate).format(
                    "DD-MM-YYYY"
                  );
                  if (!uniqueDates.has(formattedDate)) {
                    uniqueDates.add(formattedDate);
                    return (
                      <option
                        value={shedul?.scheduleDate}
                        key={shedul?.scheduleDate}
                      >
                        {formattedDate}
                      </option>
                    );
                  }
                  return null;
                })}
            </Form.Select>
          </div>
          <div>
            <h6>Time of Appointment</h6>
            <Form.Select
              className="width-respns width-respns-768px"
              style={{ width: "400px", marginBottom: "20px" }}
              aria-label="Default select example"
              onChange={(e) => setStatrtTime(e.target.value)}
            >
              <option>Time of Appointment</option>
              {selecteTimearray?.map((shedul) => (
                <option value={JSON.stringify(shedul)}>
                  {shedul?.startTime}-{shedul?.endTime}
                </option>
              ))}
            </Form.Select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={UpdateBookingAppointment} variant="success">
            Reschedule
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
