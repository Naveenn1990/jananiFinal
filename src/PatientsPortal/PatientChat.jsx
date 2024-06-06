import {
  faCircle,
  faFaceSmile,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { ImAttachment } from "react-icons/im";

export const PatientChat = () => {
  const patientdetails = sessionStorage.getItem("PatientUser");
  const [doclist, setdoclist] = useState([]);
  const [SelectedDoc, setSelectedDoc] = useState({});
  const [chatinput, setchatinput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    async function getDoclist() {
      try {
        const res = await axios.get(
          "http://localhost:8521/api/Doctor/getDoctorsList"
        );
        if (res.status === 200) {
          setdoclist(res.data.DoctorsInfo);
        }
      } catch (error) {
        console.log(error);
        setdoclist([]);
      }
    }
    getDoclist();
  }, []);

  useEffect(() => {
    if (SelectedDoc?._id && patientdetails) {
      getMessages(SelectedDoc?._id);
    }
  }, [SelectedDoc?._id, patientdetails]);

  function docFn(val) {
    setSelectedDoc(val);
    getMessages(val?._id);
  }

  const [MessageDetails, setMessageDetails] = useState({});
  async function getMessages(docid) {
    try {
      const res = await axios.get(
        `http://localhost:8521/api/chat/getChatdata/${docid}/${
          JSON.parse(patientdetails)?._id
        }`
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
          doctorid: SelectedDoc?._id,
          patientid: JSON.parse(patientdetails)?._id,
          chat: chatinput,
          sender: "PATIENT",
          receiver: "DOCTOR",
        },
      };
      const res = await axios(config);
      if (res.status === 201 || res.status === 200) {
        setchatinput("");
        getMessages(SelectedDoc?._id);
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
              {doclist?.map((val) => (
                <li key={val?._id}>
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
                      src={`http://localhost:8521/Doctor/${val?.ProfileImg}`}
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
              ))}
            </ul>
          </div>

          {Object.keys(SelectedDoc).length ? (
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
                    src={`http://localhost:8521/Doctor/${SelectedDoc?.ProfileImg}`}
                    alt=""
                  />
                  <div>
                    <span className="admin-chat fw-bold">
                      {SelectedDoc?.Firstname} {SelectedDoc?.Lastname}
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
                  {MessageDetails?.chatData?.map((val, index) => (
                    <div key={index}>
                      {val.sender === "PATIENT" ? (
                        <div className="row justify-content-end">
                          <div className="col-7">
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
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
              </div>
              <div className="d-flex">
                <ImAttachment
                  // htmlfor
                  style={{
                    left: "534px",
                    position: "absolute",
                    bottom: "15px",
                    borderRadius: "50px",
                    border: "0px",
                    fontSize: "20px",
                  }}
                />
                <input id="upload-file" type="file" />

                <input
                  type="text"
                  placeholder="Enter text here"
                  style={{
                    width: "100%",
                    height: "60px",
                    padding: "10px",
                    marginRight: "10px",
                    paddingLeft: "65px",
                  }}
                  value={chatinput}
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
          ) : (
            <div
              className="col-lg-9"
              style={{
                overflow: "hidden ",
                overflowY: "scroll",
                maxHeight: "600px",
                backgroundColor: "#DAE1F3",
              }}
            >
              <b>NO DATA IS AVAILABLE</b>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
