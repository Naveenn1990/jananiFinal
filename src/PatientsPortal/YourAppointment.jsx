import axios from "axios";
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

  const [AppointmentList, setAppointmentList] = useState([]);
  const getAppointmentList = () => {
    axios
      .get("http://localhost:8521/api/user/getlist")
      .then(function (response) {
        // handle success
        setAppointmentList(
          // response.data.Info?.filter(
          //   (item) =>
          //     item?.PatientId === patientMedicalRecordObj?._id &&
          //     moment(item?.Dateofappointment).format("DD-MM-YYYY") >=
          //       moment(new Date()).format("DD-MM-YYYY")
          // )
          response.data.Info
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const [AppointmentId, setAppointmentId] = useState({});
  const [DateofApp, setDateofApp] = useState("");
  const [StatrtTime, setStatrtTime] = useState(null);
  const [SelectedTime, setSelectedTime] = useState({})
  useEffect(() => {
    if(StatrtTime){
      setSelectedTime(JSON?.parse(StatrtTime))
    }    
  }, [StatrtTime])
  const UpdateBookingAppointment = async () => {
    try {
      const config = {
        url: "/user/rescheduleapp",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          Id: AppointmentId?._id,
          doctorId:AppointmentId?.ConsultantDoctor?._id,         
          Dateofappointment: DateofApp,
          starttime:SelectedTime?.startTime,
          endtime:SelectedTime?.endTime,       
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

  useEffect(() => {
    getAppointmentList();
    getDoctors();
  }, []);

  console.log("AppointmentList",AppointmentList);
  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mt-2">
        Upcoming Appointment
      </h4>

      <Container>
        <div className="row">
          {AppointmentList?.filter((ele)=>ele?.PatientId === user?._id)?.map((item) => {
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
                      <p className="mb-2 fw-bold">
                        {item?.Firstname} {item?.Dateofappointment} 
                        
                      </p>
                      <p className="mb-2 fw-bold">                        
                     Time:    {item?.starttime} to {item?.endtime}
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
              {[
                    ...new Set(
                      Doctors.filter(
                        (ele) => ele?._id === AppointmentId?.ConsultantDoctor?._id
                      ).flatMap((doctor) =>
                        doctor?.scheduleList?.map(
                          (scheduleItem) => scheduleItem?.scheduleDate
                        )
                      )
                    ),
                  ].map((uniqueDate, index) => (
                    <option key={index} value={uniqueDate}>
                      {uniqueDate}
                    </option>
                  ))}
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
              {Doctors?.filter((ele) => ele?._id === AppointmentId?.ConsultantDoctor?._id)?.flatMap(
                    (doctor) =>
                      doctor?.scheduleList
                        ?.filter((ele) => ele.scheduleDate === DateofApp)
                        ?.map((scheduleItem, index) => (
                          <option
                            key={index}
                            // value={scheduleItem?.startTime}
                            value={JSON.stringify(scheduleItem)}
                          >
                            {`${scheduleItem?.startTime} to ${scheduleItem?.endTime}`}
                          </option>
                        ))
                  )}
            </Form.Select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button 
          onClick={UpdateBookingAppointment} 
          variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
