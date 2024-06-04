import React, { useState, useRef, useEffect } from "react";
import {
  DayPilot,
  DayPilotCalendar,
  DayPilotNavigator,
} from "@daypilot/daypilot-lite-react";
import {
  Button,
  FloatingLabel,
  Form,
  InputGroup,
  Modal,
} from "react-bootstrap";
import axios from "axios";

const styles = {
  wrap: {
    display: "flex",
  },
  left: {
    marginRight: "10px",
  },
  main: {
    flexGrow: "1",
  },
};

export const DoctorsCalender = () => {
  const doctor = JSON.parse(sessionStorage.getItem("DoctorDetails"));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const calendarRef = useRef();
  const [calendarConfig, setCalendarConfig] = useState({
    viewType: "Week",
    durationBarVisible: false,
    timeRangeSelectedHandling: "Enabled",
    onTimeRangeSelected: async (args) => {
      handleShow();
      // console.log("Dekho bhai kya hal chal",args);
      //   const dp = calendarRef.current.control;
      //   const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
      //   dp.clearSelection();
      //   if (!modal.result) { return; }
      //   dp.events.add({
      //     start: args.start,
      //     end: args.end,
      //     id: DayPilot.guid(),
      //     text: modal.result
      //   });
    },
    eventDeleteHandling: "Update",
    // onClick={ handleShow }

    // onEventClick: async args => {
    //     const dp = calendarRef.current.control;
    //     const modal = await DayPilot.Modal.prompt("Update event text:", args.e.text());
    //     if (!modal.result) { return; }
    //     const e = args.e;
    //     e.data.text = modal.result;
    //     dp.events.update(e);
    // },
  });

  const [AppointmentList, setAppointmentList] = useState([]);
  const getAppointmentList = () => {
    axios
      .get("http://localhost:8521/api/user/getlist")
      .then(function (response) {
        const data = response.data.Info.filter(
          (item) => item?.ConsultantDoctor?._id == doctor?._id
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

  console.log("AppointmentList",AppointmentList);

  useEffect(() => {
    const events = [
      {
        id: 1,
        text: "Event 1",
        start: "2023-10-02T10:30:00",
        end: "2023-10-02T13:00:00",
      },
      {
        id: 2,
        text: "Event 2",
        start: "2023-10-03T09:30:00",
        end: "2023-10-03T11:30:00",
        backColor: "#6aa84f",
      },
      {
        id: 3,
        text: "Event 3",
        start: "2023-10-03T12:00:00",
        end: "2023-10-03T15:00:00",
        backColor: "#f1c232",
      },
      {
        id: 4,
        text: "Event 4",
        start: "2023-10-01T11:30:00",
        end: "2023-10-01T14:30:00",
        backColor: "#cc4125",
      },
    ];

    const startDate = "2024-10-02";

    calendarRef.current.control.update({ startDate, events });
  }, []);

  return (
    <div style={styles.wrap}>
      <div style={styles.left}>
        <DayPilotNavigator
          selectMode={"Week"}
          showMonths={3}
          skipMonths={3}
          onClick={handleShow}
          startDate={"2024-06-02"}
          selectionDay={"2024-06-02"}
          onTimeRangeSelected={(args) => {
            calendarRef.current.control.update({
              startDate: args.day,
            });
          }}
        />
      </div>
      <div style={styles.main}>
        <DayPilotCalendar
          onClick={handleShow}
          {...calendarConfig}
          ref={calendarRef}
        />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <label className="fw-bold text-dark">Title</label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Title"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>

            <div className="col-lg-6">
              <label className="fw-bold text-dark">Location</label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Location"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <label className="fw-bold text-dark">Start</label>
              <InputGroup className="mb-3">
                <Form.Control type="date" aria-describedby="basic-addon1" />
              </InputGroup>
            </div>

            <div className="col-lg-6">
              <label className="fw-bold text-dark">End</label>
              <InputGroup className="mb-3">
                <Form.Control type="date" aria-describedby="basic-addon1" />
              </InputGroup>
            </div>
          </div>

          <div className="mb-3">
            <label className="fw-bold text-dark">Repeat</label>
            <Form.Select aria-label="Default select example">
              <option value="1">Never</option>
              <option value="2">Daily</option>
              <option value="3">Weekly</option>
              <option value="4">Monthly</option>
              <option value="5">Yearly</option>
            </Form.Select>
          </div>

          <div>
            <label className="fw-bold text-dark">Description</label>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="all-bg-green">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
