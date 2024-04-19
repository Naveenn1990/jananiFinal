import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";

import { FaUserMd } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi";
import { TbBrandBooking } from "react-icons/tb";
import { GiToken } from "react-icons/gi";
export default function Clinicaldoctors() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [show5, setShow5] = useState(false);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);
  return (
    <div>
      <div style={{ padding: "1%" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Clinical doctors
        </h6>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <input
            placeholder="Search Clinical doctors"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FaUserMd className="AddIcon1" onClick={() => setShow(true)} />
            {/* 
            <button
              style={{
                border: "none",
                fontSize: "14px",
                fontWeight: "600",
                backgroundColor: "#20958c",
                margin: "0px 10px",
                borderRadius: "4px",
                color: "white",
              }}
              onClick={() => setShow1(true)}
            >
              {" "}
              + MAKE A PAYMENT
            </button>

            <button
              style={{
                border: "none",
                fontSize: "14px",
                fontWeight: "600",
                backgroundColor: "#20958c",
                borderRadius: "4px",

                color: "white",
              }}
              onClick={() => setShow2(true)}
            >
              {" "}
              + ADD APPOINTMENT CHARGE
            </button> */}
          </div>
        </div>

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Clinical doctors</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <input
                  placeholder="First name"
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
                  placeholder="Last Name"
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
                    marginTop: "4%",
                  }}
                ></input>
              </div>

              <div className="col-lg-6">
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
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Confirm password"
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
                  placeholder="Designation"
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
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                >
                  <option>Select Department</option>
                  <option>Department-1</option>
                  <option>Department-2</option>
                </select>
              </div>

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
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Mobile number"
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
                  <div className="col-lg-4">
                    <h6 style={{ marginTop: "20px", color: "white" }}>
                      Date of birth :
                    </h6>
                  </div>
                  <div className="col-lg-8">
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
                <textarea
                  placeholder="Address"
                  rows="4"
                  cols="50"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></textarea>
              </div>

              <div className="col-lg-6">
                <textarea
                  placeholder="Education"
                  rows="4"
                  cols="50"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></textarea>
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

              <div className="col-lg-6">
                <label
                  style={{ fontWeight: "500", marginTop: "4%", color: "white" }}
                >
                  Upload document
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
                  border: "1px solid white",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow(false);
                  alert("Doctor Added");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="lg" show={show4} onHide={handleClose4}>
          <Modal.Header>
            <Modal.Title>Edit Clinical doctors</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <input
                  placeholder="First name"
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
                  placeholder="Last Name"
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
                    marginTop: "4%",
                  }}
                ></input>
              </div>

              <div className="col-lg-6">
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
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Confirm password"
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
                  placeholder="Designation"
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
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                >
                  <option>Select Department</option>
                  <option>Department-1</option>
                  <option>Department-2</option>
                </select>
              </div>

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
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Mobile number"
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
                  <div className="col-lg-4">
                    <h6 style={{ marginTop: "20px", color: "white" }}>
                      Date of birth :
                    </h6>
                  </div>
                  <div className="col-lg-8">
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
                <textarea
                  placeholder="Address"
                  rows="4"
                  cols="50"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></textarea>
              </div>

              <div className="col-lg-6">
                <textarea
                  placeholder="Education"
                  rows="4"
                  cols="50"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></textarea>
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

              <div className="col-lg-6">
                <label
                  style={{ fontWeight: "500", marginTop: "4%", color: "white" }}
                >
                  Upload document
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
                  marginRight: "20px",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow4(false);
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
                  border: "1px solid white",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow4(false);
                  alert("Doctor Updated");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Make a payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  <option>Select doctor</option>
                  <option>John</option>
                  <option>John</option>
                </select>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Salary amount"
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

              <div className="col-lg-6">
                <input
                  placeholder="Remark"
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
                onClick={() => setShow1(false)}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  border: "1px solid white",
                  borderRadius: "4px",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow1(false);
                  alert("Salary added");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Appointment Charge</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  <option>Select doctor</option>
                  <option>John</option>
                  <option>John</option>
                </select>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Appoinment Charge"
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
                  setShow2(false);
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
                  border: "1px solid white",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow2(false);
                  alert("Appoinment Charge Added");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="lg" show={show5} onHide={handleClose5}>
          <Modal.Body style={{ padding: "0%" }}>
            <div className="row">
              <div className="col-lg-4">
                <img
                  src="/Images/doctor1.jpg"
                  style={{ width: "100%", height: "260px" }}
                />
                <p
                  style={{
                    textAlign: "justify",
                    padding: "3% 3%",
                    fontSize: "14px",
                    color: "white",
                  }}
                >
                  A doctor is responsible for all sides of care of a patient.
                  They diagnose, educate, and treat patients to ensure that they
                  have the best possible care. A few of the main duties of a
                  doctor are performing diagnostic tests, recommending
                  specialists for patients, document patient's medical history,
                  and educating patients.
                </p>
              </div>

              <div className="col-lg-8">
                <div
                  style={{
                    margin: "2% 0%",
                    padding: "2% 0%",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  <h6 style={{ fontSize: "18px", color: "lightgrey" }}>
                    PROFILE
                  </h6>
                  <h4>Dr.John</h4>
                  <h5>Paediatric Surgeon</h5>
                  <h6>M.S,M.Ch(Paediatric Surgery)</h6>
                  <span>banashankari(bangalore)</span>
                </div>

                <div>
                  <div className="row" style={{ color: "white" }}>
                    <div className="col-lg-3">
                      <HiCurrencyRupee
                        style={{ fontSize: "25px", marginRight: "1%" }}
                      />
                      <span>Salary</span>
                      <h6 style={{ textAlign: "center" }}>30000/month</h6>
                    </div>
                    <div className="col-lg-4">
                      {" "}
                      <TbBrandBooking
                        style={{ fontSize: "25px", marginRight: "1%" }}
                      />
                      <span>Total Appointment</span>
                      <h6 style={{ textAlign: "center" }}>25 Appointment</h6>
                    </div>
                    <div className="col-lg-5">
                      <GiToken
                        style={{ fontSize: "25px", marginRight: "1%" }}
                      />
                      <span>Appointment Charge</span>
                      <h6 style={{ textAlign: "center" }}>300 / person</h6>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    margin: "3% 2%",

                    border: "1px solid white",
                  }}
                >
                  <h6
                    style={{
                      backgroundColor: "white",
                      padding: "2%",
                      color: "#20958c",
                    }}
                  >
                    Personal Details
                  </h6>

                  <div style={{ padding: "2%" }}>
                    <span>EMAIL : </span>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Sl.No</th>
              <th>Profile</th>
              <th> Name</th>
              <th>Email-Id</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Contact</th>
              <th>D-O-B</th>
              <th>Document</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <td>1</td>
              <td>
                <img
                  src="/Images/doctor1.jpg"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              </td>
              <td>John</td>
              <td>John@gmail.com</td>
              <td>Cardiologists</td>
              <td>Cardiology</td>
              <td>9565325632</td>
              <td>06/10/1987</td>
              <td>
                <a href="/Images/doc.png" target="blank">
                  <GrDocumentText />
                </a>
              </td>
              <td>
                <div class="btn-group pull-right">
                  <button
                    class="btn deepPink-bgcolor btn-circle btn-outline dropdown-toggle"
                    data-bs-toggle="dropdown"
                    style={{ backgroundColor: "#20958c", color: "white" }}
                  >
                    View
                    {/* <i class="fa fa-angle-down"style={{marginRight:"2%"}}></i> */}
                  </button>
                  <ul
                    class="dropdown-menu pull-right"
                    style={{
                      textAlign: "left",
                      padding: "14%",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#20958c",
                    }}
                  >
                    <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                        onClick={() => setShow5(true)}
                      >
                        <i
                          class="fa fa-user-circle"
                          style={{ marginRight: "2%" }}
                        ></i>
                        View Profile{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                        onClick={() => setShow2(true)}
                      >
                        <i
                          class="	fa fa-database"
                          style={{ marginRight: "2%" }}
                        ></i>{" "}
                        Add Charge{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                        onClick={() => setShow1(true)}
                      >
                        <i
                          class="fa fa-university"
                          style={{ marginRight: "2%" }}
                        ></i>{" "}
                        Add Salary{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                        onClick={() => setShow4(true)}
                      >
                        <i
                          class="fa fa-pencil-square-o"
                          style={{ marginRight: "2%" }}
                        ></i>{" "}
                        Edit{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                      >
                        <i
                          class="fa fa-trash-o"
                          style={{ marginRight: "2%" }}
                        ></i>{" "}
                        Delete{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                      >
                        <i
                          class="	fa fa-unlock"
                          style={{ marginRight: "2%" }}
                        ></i>{" "}
                        Block{" "}
                      </a>
                    </li>

                    {/* <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                      >
                        <i class="fa fa-file-excel-o"style={{marginRight:"2%"}}></i> Export to Excel{" "}
                      </a>
                    </li> */}
                  </ul>
                </div>
              </td>
            </tr>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <td>2</td>
              <td>
                <img
                  src="/Images/doctor1.jpg"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              </td>
              <td>John</td>
              <td>John@gmail.com</td>
              <td>Cardiologists</td>
              <td>Cardiology</td>
              <td>9565325632</td>
              <td>06/10/1987</td>
              <td>
                <a href="/Images/doc.png" target="blank">
                  <GrDocumentText />
                </a>
              </td>
              <td>
                <div class="btn-group pull-right">
                  <button
                    class="btn deepPink-bgcolor btn-circle btn-outline dropdown-toggle"
                    data-bs-toggle="dropdown"
                    style={{ backgroundColor: "#20958c", color: "white" }}
                  >
                    View
                    {/* <i class="fa fa-angle-down"style={{marginRight:"2%"}}></i> */}
                  </button>
                  <ul
                    class="dropdown-menu pull-right"
                    style={{
                      textAlign: "left",
                      padding: "14%",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#20958c",
                    }}
                  >
                    <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                        onClick={() => setShow5(true)}
                      >
                        <i
                          class="fa fa-user-circle"
                          style={{ marginRight: "2%" }}
                        ></i>
                        View Profile{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                        onClick={() => setShow2(true)}
                      >
                        <i
                          class="	fa fa-database"
                          style={{ marginRight: "2%" }}
                        ></i>{" "}
                        Add Charge{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                        onClick={() => setShow1(true)}
                      >
                        <i
                          class="fa fa-university"
                          style={{ marginRight: "2%" }}
                        ></i>{" "}
                        Add Salary{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                        onClick={() => setShow4(true)}
                      >
                        <i
                          class="fa fa-pencil-square-o"
                          style={{ marginRight: "2%" }}
                        ></i>{" "}
                        Edit{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                      >
                        <i
                          class="fa fa-trash-o"
                          style={{ marginRight: "2%" }}
                        ></i>{" "}
                        Delete{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                      >
                        <i
                          class="	fa fa-unlock"
                          style={{ marginRight: "2%" }}
                        ></i>{" "}
                        Block{" "}
                      </a>
                    </li>

                    {/* <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                      >
                        <i class="fa fa-file-excel-o"style={{marginRight:"2%"}}></i> Export to Excel{" "}
                      </a>
                    </li> */}
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
