import {
  faCircle,
  faFaceSmile,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";

export const DoctorsChat = () => {
  const doctordetails = sessionStorage.getItem("DoctorDetails");
  const [Patientlist, setPatientlist] = useState([]);
  const [SelectedPatient, setSelectedPatient] = useState({});
  const [chatinput, setchatinput] = useState("");

  const chatEndRef = useRef(null);
  useEffect(() => {
    async function getPatientlist() {
      try {
        const res = await axios.get(
          "http://localhost:8521/api/user/getPatientList"
        );
        if (res.status === 200) {
          setPatientlist(res.data.UsersInfo);
        }
      } catch (error) {
        console.log(error);
        setPatientlist([]);
      }
    }
    getPatientlist();
  }, []);

  useEffect(() => {
    getMessages(SelectedPatient?._id);
  }, [SelectedPatient?._id, doctordetails?._id]);

  function docFn(val) {
    setSelectedPatient(val);
    getMessages(val?._id);
  }

  const [MessageDetails, setMessageDetails] = useState({});
  async function getMessages(patientid) {
    console.log("patientid: ", patientid);
    try {
      const res = await axios.get(
        `http://localhost:8521/api/chat/getChatdata/${
          JSON.parse(doctordetails)?._id
        }/${patientid}`
      );
      if (res.status === 200) {
        setchatinput("");
        setMessageDetails(res.data);
      }
    } catch (error) {
      console.log(error);
      setMessageDetails("No Data Available");
    }
  }

  async function sendMessage() {
    try {
      const config = {
        url: "/chat/addMessage",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: {
          "content-type": "application/json",
        },
        data: {
          doctorid: JSON.parse(doctordetails)?._id,
          patientid: SelectedPatient?._id,
          chat: chatinput,
          sender: "DOCTOR",
          receiver: "PATIENT",
        },
      };
      const res = await axios(config);
      if (res.status === 201 || res.status === 200) {
        setchatinput("");
        getMessages(SelectedPatient?._id);
      }
    } catch (error) {
      console.log(error);
      alert("Message is not sent!");
    }
  }

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [MessageDetails]);
  console.log("MessageDetails: ", MessageDetails);

  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold">
        Chat
      </h4>
      <Container>
        <div className="row">
          <div
            className="col-lg-3"
            style={{
              overflow: "hidden ",
              overflowY: "scroll",
              maxHeight: "600px",
            }}
          >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
              {Patientlist?.map((val) => {
                return (
                  <li>
                    <div
                      className="d-flex align-items-center"
                      onClick={() => {
                        docFn(val);
                      }}
                    >
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          margin: "8px",
                        }}
                        src={`http://localhost:8521/PatientREG/${val?.profilepic}`}
                        alt=""
                      />
                      <div>
                        <span className="admin-chat">
                          {val?.Firstname} {val?.Lastname}
                        </span>{" "}
                        <br />
                        {/* <span className="admin-chat-online">
                          <FontAwesomeIcon
                            icon={faCircle}
                            style={{
                              color: "red",
                              marginRight: "4px",
                              fontSize: "8px",
                            }}
                          />
                          left 7 mins ago
                        </span> */}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {Object.keys(SelectedPatient).length ? (
            <>
              <div className="col-lg-9">
                <div
                  style={{
                    padding: "10px",
                  }}
                >
                  <div className="d-flex align-items-center">
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        margin: "8px",
                      }}
                      src={`http://localhost:8521/PatientREG/${SelectedPatient?.profilepic}`}
                      alt=""
                    />
                    <div>
                      <span className="admin-chat fw-bold">
                        {SelectedPatient?.Firstname} {SelectedPatient?.Lastname}
                      </span>{" "}
                      <br />
                      {/* <span className="admin-chat-online">2 New massages</span> */}
                    </div>
                  </div>

                  <hr />
                  <div
                    style={{
                      overflow: "hidden",
                      height: "500px",
                      overflowY: "scroll",
                    }}
                  >
                    {MessageDetails?.chatData?.map((val) => {
                      return (
                        <>
                          {val.sender === "DOCTOR" ? (
                            <div className="row justify-content-end">
                              <div className="col-7">
                                {/* <p
                        className="d-flex justify-content-end"
                        style={{ marginBottom: "0px", fontWeight: "bold" }}
                      >
                        Maria
                      </p> */}
                                <p
                                  style={{
                                    backgroundColor: "#d9e7ea",
                                    fontSize: "14px",
                                    padding: "26px",
                                    borderRadius: "10px",
                                    margin: "10px",
                                  }}
                                >
                                  {val?.chat}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="col-7">
                              <p
                                style={{
                                  backgroundColor: "#e8e8e8",
                                  fontSize: "14px",
                                  padding: "26px",
                                  borderRadius: "10px",
                                  margin: "10px",
                                }}
                              >
                                {val?.chat}
                              </p>
                            </div>
                          )}
                        </>
                      );
                    })}
                    <div ref={chatEndRef} />
                  </div>
                </div>
                <div className="d-flex">
                  <input
                    type="text"
                    placeholder="Enter text here"
                    style={{
                      width: "100%",
                      height: "60px",
                      padding: "10px",
                      marginRight: "10px",
                    }}
                    onChange={(e) => setchatinput(e.target.value)}
                  />
                  <button onClick={sendMessage}>Send</button>
                </div>
                {/* <button
                className="fw-bold fs-4  mt-3 me-4 "
                style={{
                  float: "right",
                  border: "none",
                  borderRadius: "50%",
                  backgroundColor: "orange",
                  color: "white",
                }}
              >
                {" "}
                <FontAwesomeIcon icon={faPaperclip} />
              </button>
              <button
                className="fw-bold fs-4  mt-3 me-2"
                style={{
                  float: "right",
                  border: "none",
                  borderRadius: "50%",
                  backgroundColor: "orange",
                  color: "white",
                }}
              >
                {" "}
                <FontAwesomeIcon icon={faFaceSmile} />
              </button> */}
              </div>
            </>
          ) : (
            <>
              <div
                className="col-lg-9"
                style={{
                  overflow: "hidden ",
                  overflow: "scroll",
                  maxHeight: "600px",
                  maxWidth: "",
                  backgroundColor: "#DAE1F3",
                }}
                // style={{
                //   backgroundColor: "blue",
                //   height: "100vh",
                //   display: "flex",
                //   justifyItems: "center",
                //   alignItems: "center",
                // }}
              >
                <b>NO DATA IS AVAILABLE</b>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};
