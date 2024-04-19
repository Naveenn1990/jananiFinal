import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { TbView360 } from "react-icons/tb";
import { BiSolidUserCircle } from "react-icons/bi";

import Modal from "react-bootstrap/Modal";
import { MdEdit } from "react-icons/md";
import { AiFillDelete, AiFillFileExcel } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";

export default function Subadmin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [passwordView, setpasswordView] = useState(false);
  return (
    <div style={{ padding: "1%" }}>
      <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
        Subadmin
      </h6>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
        }}
      >
        <input
          placeholder="Search Subadmin"
          style={{
            padding: "5px 10px",
            border: "1px solid #20958c",
            borderRadius: "0px",
          }}
        />
        <button
          style={{
            backgroundColor: "#20958c",
            color: "white",
            border: "none",
            fontSize: "12px",
            borderRadius: "4px",
          }}
        >
          EXPORT <AiFillFileExcel />
        </button>

        <BiSolidUserCircle className="AddIcon" onClick={() => setShow(true)} />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title style={{ fontSize: "30px", fontWeight: "400" }}>
            {" "}
            Add new subadmin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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

          <input
            placeholder="Email"
            style={{
              width: "100%",
              padding: "8px 20px",
              borderRadius: "0px",
              border: "1px solid #ebebeb",
              backgroundColor: "#ebebeb",
              marginTop: "4%",
            }}
          ></input>

          <input
            placeholder="Password"
            style={{
              width: "100%",
              padding: "8px 20px",
              borderRadius: "0px",
              border: "1px solid #ebebeb",
              backgroundColor: "#ebebeb",
              marginTop: "4%",
            }}
          ></input>

          <div
            style={{
              backgroundColor: "#ebebeb",
              color: "grey",
              padding: "4%",
              marginTop: "4%",
              borderRadius: "0px",
            }}
          >
            <label style={{ fontWeight: "500", marginTop: "2%" }}>
              Assigned Modules
            </label>
            <div className="row">
              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Subadmin
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Doctor management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Staff management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Patient management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Doctors appointment
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Lab management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Pharmacy management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Vendor management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Website management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Service management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Hospital management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Accounts
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Enquiries & Complaints
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <div style={{ backgroundColor: "#20958c", color: "white" }}>
          <div
            style={{
              margin: "2% 2%",
              borderTop: "1px solid lightgrey",
              padding: "4% 4% 2% 4%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                padding: "6px 12px",
                border: "1px solid white",
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
                padding: "6px 12px",
                border: "1px solid white",
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </Modal>

      <Modal show={show4} onHide={handleClose4}>
        <Modal.Header>
          <Modal.Title style={{ fontSize: "30px", fontWeight: "400" }}>
            {" "}
            Edit subadmin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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

          <input
            placeholder="Email"
            style={{
              width: "100%",
              padding: "8px 20px",
              borderRadius: "0px",
              border: "1px solid #ebebeb",
              backgroundColor: "#ebebeb",
              marginTop: "4%",
            }}
          ></input>

          <input
            placeholder="Password"
            style={{
              width: "100%",
              padding: "8px 20px",
              borderRadius: "0px",
              border: "1px solid #ebebeb",
              backgroundColor: "#ebebeb",
              marginTop: "4%",
            }}
          ></input>

          <div
            style={{
              backgroundColor: "#ebebeb",
              color: "grey",
              padding: "4%",
              marginTop: "4%",
              borderRadius: "0px",
            }}
          >
            <label style={{ fontWeight: "500", marginTop: "2%" }}>
              Assigned Modules
            </label>
            <div className="row">
              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Subadmin
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Doctor management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Staff management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Patient management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Doctors appointment
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Lab management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Pharmacy management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Vendor management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Website management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Service management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Hospital management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Accounts
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Enquiries & Complaints
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>

        <div
          style={{
            margin: "2% 2%",
            borderTop: "1px solid lightgrey",
            padding: "4% 4% 2% 4%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              backgroundColor: "orange",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontWeight: "600",
              border: "1px solid white",
              padding: "6px 12px",
            }}
          >
            CANCEL
          </button>

          <button
            style={{
              backgroundColor: "#20958c",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontWeight: "600",
              border: "1px solid white",
              padding: "6px 12px",
            }}
          >
            SUBMIT
          </button>
        </div>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header>
          <Modal.Title style={{ fontSize: "30px", fontWeight: "400" }}>
            {" "}
            Assigned Modules
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              backgroundColor: "#ebebeb",
              color: "grey",
              padding: "4%",
              marginTop: "4%",
              borderRadius: "0px",
            }}
          >
            <label style={{ fontWeight: "500", marginTop: "2%" }}>
              Assigned Modules
            </label>
            <div className="row">
              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Subadmin
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" checked={true}></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Doctor management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Staff management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" checked={true}></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Patient management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Doctors appointment
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Lab management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" checked={true}></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Pharmacy management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Vendor management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Website management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" checked={true}></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Service management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox"></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Hospital management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" checked={true}></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Accounts
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" checked={true}></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Enquiries & Complaints
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Table style={{ marginTop: "1%" }}>
        <thead>
          <tr style={{ fontSize: "15px", textAlign: "center" }}>
            <th>Sl.No</th>
            <th>Subadmin Name</th>
            <th>Email-Id</th>
            <th>Assigned Modules</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ fontSize: "15px", textAlign: "center" }}>
            <td>1</td>
            <td>John</td>
            <td>John@gmail.com</td>
            <td style={{ textAlign: "center" }}>
              <TbView360
                onClick={() => setShow1(true)}
                style={{ color: "#20958c", fontSize: "24px" }}
              />
            </td>
            <td>
              {passwordView ? (
                <>
                  <h6
                    style={{
                      alignItems: "center",
                      color: "#20958c",
                      fontWeight: "600",
                      fontSize: "15px",
                    }}
                  >
                    Password <span style={{ color: "orange" }}>1234</span>
                  </h6>
                  <ImCancelCircle
                    style={{ color: "#20958c", fontSize: "24px" }}
                    onClick={() => setpasswordView(!passwordView)}
                  />
                </>
              ) : (
                <FaEye
                  style={{ color: "#20958c", fontSize: "24px" }}
                  onClick={() => setpasswordView(!passwordView)}
                />
              )}
            </td>
            <td
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <MdEdit
                style={{
                  color: "white",
                  marginRight: "4px",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#20958c",
                  padding: "2px",
                  fontSize: "50px",
                  borderRadius: "4px",
                }}
                onClick={() => setShow4(true)}
              />
              <AiFillDelete
                style={{
                  color: "white",
                  marginRight: "4px",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "red",
                  padding: "2px",
                  fontSize: "50px",
                  borderRadius: "4px",
                }}
              />

              <button
                style={{
                  fontSize: "12px",
                  border: "none",
                  backgroundColor: "#20958c",
                  color: "white",
                  fontWeight: "600",
                  borderRadius: "4px",
                }}
              >
                BLOCK
              </button>
            </td>
          </tr>
          <tr style={{ fontSize: "15px", textAlign: "center" }}>
            <td>1</td>
            <td>John</td>
            <td>John@gmail.com</td>
            <td style={{ textAlign: "center" }}>
              <TbView360
                onClick={() => setShow1(true)}
                style={{ color: "#20958c", fontSize: "24px" }}
              />
            </td>
            <td>
              {passwordView ? (
                <>
                  <h6
                    style={{
                      alignItems: "center",
                      color: "#20958c",
                      fontWeight: "600",
                      fontSize: "15px",
                    }}
                  >
                    Password <span style={{ color: "orange" }}>1234</span>
                  </h6>
                  <ImCancelCircle
                    style={{ color: "#20958c", fontSize: "24px" }}
                    onClick={() => setpasswordView(!passwordView)}
                  />
                </>
              ) : (
                <FaEye
                  style={{ color: "#20958c", fontSize: "24px" }}
                  onClick={() => setpasswordView(!passwordView)}
                />
              )}
            </td>
            <td
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <MdEdit
                style={{
                  color: "white",
                  marginRight: "4px",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#20958c",
                  padding: "2px",
                  fontSize: "50px",
                  borderRadius: "4px",
                }}
                onClick={() => setShow4(true)}
              />
              <AiFillDelete
                style={{
                  color: "white",
                  marginRight: "4px",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "red",
                  padding: "2px",
                  fontSize: "50px",
                  borderRadius: "4px",
                }}
              />

              <button
                style={{
                  fontSize: "12px",
                  border: "none",
                  backgroundColor: "#20958c",
                  color: "white",
                  fontWeight: "600",
                  borderRadius: "4px",
                }}
              >
                BLOCK
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
