import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { GiAmbulance } from "react-icons/gi";
import { MdEdit } from "react-icons/md";
import { RiStethoscopeLine } from "react-icons/ri";
import { Audio, Hearts, Puff } from "react-loading-icons";
export default function DoctorsAppointment() {
  const data = [
    {
      name: "john",
      email: "john@gmail.com",
      designation: "cardiologists",
      department: "cardiology",
      contact: 9878987899,
      dob: "12/2/1998",
    },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = (item) => {
    setShow1(true);
    setAppointmentId(item);
  };

  const generateRandomNumber = () => {
    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return randomNumber;
  };

  const prefix = "JAN";
  const randomNumber = generateRandomNumber();

  const [patientfirstname, setpatientfirstname] = useState("");
  const [patientlastname, setpatientlastname] = useState("");
  const [gender, setgender] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState();
  const [Address, setAddress] = useState();
  const [ConsultantDr, setConsultantDr] = useState();
  const [DateofApp, setDateofApp] = useState();
  const [Time, setTime] = useState();
  const [Condition, setCondition] = useState();
  const [Note, setNote] = useState();
  const [Document, setDocument] = useState();
  const [medicalReason, setmedicalReason] = useState();

  const formdata = new FormData();

  const BookAppointment = async (e) => {
    e.preventDefault();
    formdata.append("token", prefix + randomNumber);
    formdata.append("PatientId", "Admin");
    formdata.append("Firstname", patientfirstname);
    formdata.append("Lastname", patientlastname);
    formdata.append("Gender", gender);
    formdata.append("DOB", DOB);
    formdata.append("PhoneNumber", mobileno);
    formdata.append("Email", email);
    formdata.append("Address1", Address);
    formdata.append("ConsultantDoctor", ConsultantDr);
    formdata.append("Dateofappointment", DateofApp);
    formdata.append("Time", Time);
    formdata.append("Condition", Condition);
    formdata.append("Note", Note);
    formdata.append("Document", Document);
    formdata.append("medicalReason", medicalReason);

    try {
      const config = {
        url: "/user/addappointment",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "multipart/form-data" },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data);
        console.log(res.data.success);
        setShow(false);
        alert("Appointment Added");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [AppointmentList, setAppointmentList] = useState([]);

  const getAppointmentList = () => {
    axios
      .get("http://localhost:8521/api/user/getlist")
      .then(function (response) {
        // handle success
        setAppointmentList(response.data.Info);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  console.log("AppointmentList", AppointmentList);
  const [Doctors, setDoctors] = useState([]);

  const getDoctors = () => {
    axios
      .get("http://localhost:8521/api/Doctor/getDoctorsList")
      .then(function (response) {
        // handle success
        setDoctors(response.data.DoctorsInfo);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const [AppointmentId, setAppointmentId] = useState({});

  const UpdateBookingAppointment = async () => {
    try {
      const config = {
        url: "/user/rescheduleapp",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          Id: AppointmentId?._id,
          Time: Time,
          Dateofappointment: DateofApp,
        },
      };

      let res = await axios(config);
      if (res.status === 200) {
        alert("reschedule successfully");
        getAppointmentList();
        handleClose1();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getDoctors();
    getAppointmentList();
  }, []);
  return (
    <div>
      <div style={{ padding: "1%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
            Doctors Appointment
          </h6>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <RiStethoscopeLine
              className="AddIcon1"
              onClick={() => setShow(true)}
            />
            <input
              placeholder="Search Appointment"
              style={{
                padding: "5px 10px",
                border: "1px solid #20958c",
                borderRadius: "0px",
              }}
            />
          </div>
        </div>

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title> Add Appointment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <input
                  placeholder="First Name"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setpatientfirstname(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-6">
                <input
                  placeholder="Last Name"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setpatientlastname(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-6">
                <input
                  placeholder="Email"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "2%",
                  }}
                  onChange={(e) => setemail(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Email"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "2%",
                  }}
                  onChange={(e) => setDOB(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-6">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "2%",
                  }}
                  onChange={(e) => setgender(e.target.value)}
                >
                  <option>select gender</option>
                </select>
              </div>

              <div className="col-lg-6">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-lg-6">
                    <h6 style={{ marginTop: "20px", color: "white" }}>
                      Date of Appointment :
                    </h6>
                  </div>
                  <div className="col-lg-6">
                    {" "}
                    <input
                      type="date"
                      style={{
                        width: "100%",
                        padding: "8px 20px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                        marginTop: "4%",
                      }}
                      onChange={(e) => setDateofApp(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Mobile"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setmobileno(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-lg-6">
                    <h6 style={{ marginTop: "20px", color: "white" }}>
                      Appointment Time :
                    </h6>
                  </div>
                  <div className="col-lg-6">
                    {" "}
                    <input
                      type="time"
                      style={{
                        width: "100%",
                        padding: "8px 20px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                        marginTop: "4%",
                      }}
                      onChange={(e) => setTime(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-6">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-lg-6">
                    <h6 style={{ marginTop: "20px", color: "white" }}>
                      Appointment To :
                    </h6>
                  </div>
                  <div className="col-lg-6">
                    {" "}
                    <input
                      type="time"
                      style={{
                        width: "100%",
                        padding: "8px 20px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                        marginTop: "4%",
                      }}
                    ></input>
                  </div>
                </div>
              </div> */}

              <div className="col-lg-6">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setConsultantDr(e.target.value)}
                >
                  <option>Consulting Doctor</option>
                  {Doctors?.map((item) => {
                    return (
                      <option value={item?._id}>
                        {item?.Firstname}&nbsp;{item?.Lastname}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Injury/Condition"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setCondition(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="medicalReason"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setmedicalReason(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Address"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <textarea
                  placeholder="Note"
                  cols={7}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>

              <div className="col-lg-6">
                <label
                  style={{ fontWeight: "500", marginTop: "4%", color: "white" }}
                >
                  Document
                </label>
                <br></br>
                <input
                  type="file"
                  style={{
                    width: "100%",
                    padding: "2%",
                    border: "1px solid lightgrey",
                  }}
                  onChange={(e) => setDocument(e.target.files[0])}
                ></input>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  marginRight: "20px",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow(false);
                }}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={(e) => BookAppointment(e)}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        {/* <Modal size="lg" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title> Edit Appointment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <input
                  placeholder="Name"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>
              <div className="col-lg-6">
                <input
                  placeholder="Email"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>

              <div className="col-lg-6">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-lg-6">
                    <h6 style={{ marginTop: "20px", color: "white" }}>
                      Date of Appointment :
                    </h6>
                  </div>
                  <div className="col-lg-6">
                    {" "}
                    <input
                      type="date"
                      style={{
                        width: "100%",
                        padding: "8px 20px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                        marginTop: "4%",
                      }}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Mobile"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>

              <div className="col-lg-6">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-lg-6">
                    <h6 style={{ marginTop: "20px", color: "white" }}>
                      Appointment From :
                    </h6>
                  </div>
                  <div className="col-lg-6">
                    {" "}
                    <input
                      type="time"
                      style={{
                        width: "100%",
                        padding: "8px 20px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                        marginTop: "4%",
                      }}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-lg-6">
                    <h6 style={{ marginTop: "20px", color: "white" }}>
                      Appointment To :
                    </h6>
                  </div>
                  <div className="col-lg-6">
                    {" "}
                    <input
                      type="time"
                      style={{
                        width: "100%",
                        padding: "8px 20px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                        marginTop: "4%",
                      }}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Consulting Doctor"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Injury/Condition"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>

              <div className="col-lg-6">
                <label
                  style={{ fontWeight: "500", marginTop: "4%", color: "white" }}
                >
                  Profile Image
                </label>
                <br></br>
                <input
                  type="file"
                  style={{
                    width: "100%",
                    padding: "2%",
                    border: "1px solid lightgrey",
                  }}
                ></input>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  marginRight: "20px",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow1(false);
                }}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow1(false);
                  alert("Appointment Updated");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal> */}
        <div 
     style={{overflow:"hidden",overflowX:"scroll"}}
        >
          <Table responsive="md" style={{ marginTop: "1%" }}>
            <thead>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                {/* <th>Profile</th> */}
                <th> Sl.No</th>
                <th> Name</th>
                <th>Email-Id</th>
                <th>Date of Appointment</th>
                <th>From / To</th>
                <th>Mobile</th>
                <th>Injury/Condition</th>
                <th>Token</th>
                <th>Reschedule</th>
              </tr>
            </thead>
            <tbody>
              {AppointmentList?.map((item, i) => {
                return (
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>{i + 1}</td>
                    <td>
                      {item?.Firstname} {item?.Lastname}
                    </td>
                    <td>{item?.Email}</td>
                    <td>{item?.Dateofappointment}</td>
                    <td>{item?.Time}</td>
                    <td>{item?.PhoneNumber}</td>

                    <td>{item?.medicalReason}</td>
                    <td>{item?.token}</td>
                    <td>
                      {" "}
                      <p
                        style={{
                          color: "green",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                      >
                        <FaEdit onClick={() => handleShow1(item)} />
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>

      <Modal
        show={show1}
        onHide={handleClose1}
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
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button onClick={UpdateBookingAppointment} variant="primary">
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
