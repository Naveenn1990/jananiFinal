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
import moment from "moment";

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
    // onTimeRangeSelected: async (args) => {
    //   handleShow();
    //   // console.log("Dekho bhai kya hal chal",args);
    //   //   const dp = calendarRef.current.control;
    //   //   const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
    //   //   dp.clearSelection();
    //   //   if (!modal.result) { return; }
    //   //   dp.events.add({
    //   //     start: args.start,
    //   //     end: args.end,
    //   //     id: DayPilot.guid(),
    //   //     text: modal.result
    //   //   });
    // },
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

  console.log("AppointmentList", AppointmentList);

  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (AppointmentList?.length > 0) {
      const newEvents = [];

      for (let i = 0; i < AppointmentList?.length; i++) {
        const startDateTime = moment(
          `${AppointmentList[i].Dateofappointment} ${AppointmentList[i].starttime}`,
          "YYYY-MM-DD hh:mm A"
        ).format("YYYY-MM-DDTHH:mm:ss");

        const endDateTime = moment(
          `${AppointmentList[i].Dateofappointment} ${AppointmentList[i].endtime}`,
          "YYYY-MM-DD hh:mm A"
        ).format("YYYY-MM-DDTHH:mm:ss");

        newEvents.push({
          id: AppointmentList[i]._id,
          text: `Appointment :${AppointmentList[i].starttime}-${AppointmentList[i].endtime}`,
          start: startDateTime,
          end: endDateTime,
          backColor: "#20958c", // example color
          fontColor: "#ffffff", // example font color
          borderColor: "#343a40",
        });
      }

      // Update state only once after the loop
      setEvents(newEvents);
    }
  }, [AppointmentList]);

  useEffect(() => {
    if (calendarRef.current) {
      const dp = calendarRef.current.control;
      dp.update({ events: events });
    }
  }, [events]);

  console.log("events", events);

  return (
    <div style={styles.wrap}>
      <div style={styles.left}>
        <DayPilotNavigator
          selectMode={"Week"}
          showMonths={3}
          skipMonths={3}
          // onClick={handleShow}
          events={events}
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
          // onClick={handleShow}
          {...calendarConfig}
          ref={calendarRef}
          events={events}
        />
      </div>
      x
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
