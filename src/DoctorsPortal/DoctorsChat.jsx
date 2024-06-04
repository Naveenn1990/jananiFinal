import {
  faCircle,
  faFaceSmile,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Form } from "react-bootstrap";

export const DoctorsChat = () => {
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
              overflow: "hidden",
              overflowY: "scroll",
              height: "auto",
              maxHeight: "470px",
              border:"1px solid",
              padding:"5px",
              borderRadius:"5px"
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
              <li>
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      margin: "8px",
                    }}
                    src="./img/admin-doctors-list-1.jpg"
                    alt=""
                  />
                  <div>
                    <span className="admin-chat">William Smith</span> <br />
                    <span className="admin-chat-online">
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{
                          color: "red",
                          marginRight: "4px",
                          fontSize: "8px",
                        }}
                      />
                      left 7 mins ago
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      margin: "8px",
                    }}
                    src="./img/admin-doctors-list-2.jpg"
                    alt=""
                  />
                  <div>
                    <span className="admin-chat">William William </span> <br />
                    <span className="admin-chat-online">
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{
                          color: "red",
                          marginRight: "5px",
                          fontSize: "8px",
                        }}
                      />
                      Online
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      margin: "8px",
                    }}
                    src="./img/admin-doctors-list-3.jpg"
                    alt=""
                  />
                  <div>
                    <span className="admin-chat">Martha Williams</span> <br />
                    <span className="admin-chat-online">
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{
                          color: "green",
                          marginRight: "5px",
                          fontSize: "8px",
                        }}
                      />
                      Online
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      margin: "8px",
                    }}
                    src="./img/admin-doctors-list-4.jpg"
                    alt=""
                  />
                  <div>
                    <span className="admin-chat">Nancy Taylor</span> <br />
                    <span className="admin-chat-online">
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{
                          color: "green",
                          marginRight: "5px",
                          fontSize: "8px",
                        }}
                      />
                      Online
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      margin: "8px",
                    }}
                    src="./img/admin-doctors-list-5.jpg"
                    alt=""
                  />
                  <div>
                    <span className="admin-chat">Margaret Wilson</span> <br />
                    <span className="admin-chat-online">
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{
                          color: "red",
                          marginRight: "5px",
                          fontSize: "8px",
                        }}
                      />
                      Online
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      margin: "8px",
                    }}
                    src="./img/admin-doctors-list-6.jpg"
                    alt=""
                  />
                  <div>
                    <span className="admin-chat">Jane Brown</span> <br />
                    <span className="admin-chat-online">
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{
                          color: "green",
                          marginRight: "5px",
                          fontSize: "8px",
                        }}
                      />
                      Online
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      margin: "8px",
                    }}
                    src="./img/admin-doctors-list-1.jpg"
                    alt=""
                  />
                  <div>
                    <span className="admin-chat">Eliza Johnson</span> <br />
                    <span className="admin-chat-online">
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{
                          color: "green",
                          marginRight: "5px",
                          fontSize: "8px",
                        }}
                      />
                      Online
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      margin: "8px",
                    }}
                    src="./img/admin-doctors-list-2.jpg"
                    alt=""
                  />
                  <div>
                    <span className="admin-chat">Mike Clark</span> <br />
                    <span className="admin-chat-online">
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{
                          color: "green",
                          marginRight: "5px",
                          fontSize: "8px",
                        }}
                      />
                      Online
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      margin: "8px",
                    }}
                    src="./img/admin-doctors-list-4.jpg"
                    alt=""
                  />
                  <div>
                    <span className="admin-chat">Ann Henry</span> <br />
                    <span className="admin-chat-online">
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{
                          color: "green",
                          marginRight: "5px",
                          fontSize: "8px",
                        }}
                      />
                      Online
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      margin: "8px",
                    }}
                    src="./img/admin-doctors-list-3.jpg"
                    alt=""
                  />
                  <div>
                    <span className="admin-chat">Nancy Smith</span> <br />
                    <span className="admin-chat-online">
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{
                          color: "red",
                          marginRight: "5px",
                          fontSize: "8px",
                        }}
                      />
                      Online
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div
            className="col-lg-9"
            style={{ 
                overflow: "hidden ", 
                overflowY: "scroll" ,
                height:"470px"
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
                src="./img/admin-doctors-list-4.jpg"
                alt=""
              />
              <div>
                <span className="admin-chat fw-bold">Maria Smith</span> <br />
                <span className="admin-chat-online">2 New massages</span>
              </div>
            </div>

            <hr />

            <div className="row justify-content-end">
              <div className="col-7">
                <p
                  style={{
                    marginLeft: "400px",
                    marginBottom: "0px",
                    fontWeight: "bold",
                  }}
                >
                  Maria
                </p>
                <p
                  style={{
                    backgroundColor: "#d9e7ea",
                    fontSize: "14px",
                    padding: "15px",
                    borderRadius: "10px",
                  }}
                >
                  Hi Robert , how are you? How is your work going on?
                </p>
              </div>
            </div>

            <div className="col-7">
              <p style={{ marginBottom: "0px", fontWeight: "bold" }}>Robert</p>
              <p
                style={{
                  backgroundColor: "#e8e8e8",
                  fontSize: "14px",
                  padding: "15px",
                  borderRadius: "10px",
                }}
              >
                Its good. We completed almost all task assign by our manager.
              </p>
            </div>

            <div className="col-7">
              <p style={{ marginBottom: "0px", fontWeight: "bold" }}>Robert</p>
              <p
                style={{
                  backgroundColor: "#e8e8e8",
                  fontSize: "14px",
                  padding: "26px",
                  borderRadius: "10px",
                }}
              >
                How are you feel today? What's about vacation?.
              </p>
            </div>

            <div className="row justify-content-end">
              <div className="col-7  mb-4">
                <p
                  style={{
                    marginLeft: "400px",
                    marginBottom: "0px",
                    fontWeight: "bold",
                  }}
                >
                  Maria
                </p>
                <p
                  style={{
                    backgroundColor: "#d9e7ea",
                    fontSize: "14px",
                    padding: "26px",
                    borderRadius: "10px",
                  }}
                >
                  I am good, We think for next weekend.
                </p>
              </div>
            </div>

            <input
              type="text"
              placeholder="Enter text here"
              style={{ width: "100%", height: "60px", padding: "10px" }}
            />
            <button
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
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
