import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit, MdOutlineBedroomParent } from "react-icons/md";
import { FaBed, FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { TbBed, TbBedOff } from "react-icons/tb";
import { IoIosAddCircle, IoMdAddCircle } from "react-icons/io";

export default function AddHospitalRooms() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <div>
      <div style={{ padding: "1%" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Add Hospitals Rooms
        </h6>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <input
            placeholder="Search Rooms"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MdOutlineBedroomParent
              className="AddIcon1"
              onClick={() => setShow(true)}
            />
          </div>

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
        </div>

        <Modal size="md" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Rooms </Modal.Title>
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
                    marginTop: "4%",
                  }}
                >
                  <option>Select Room Type</option>
                  <option>4-Beds</option>
                  <option>3-Beds</option>
                  <option>2-Beds</option>
                  <option>1-Beds</option>
                  <option>Special Rooms</option>
                </select>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Number of Rooms"
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

              <div className="col-lg-12">
                <input
                  placeholder="Price Per Room"
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

              <div className="col-lg-12">
                <label
                  style={{
                    marginTop: "3%",
                    marginLeft: "4%",
                  }}
                >
                  Room Image
                </label>
                <input
                  type="file"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
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
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => setShow(false)}
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
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => {
                  setShow(false);
                  alert("Room Added");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Edit Rooms </Modal.Title>
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
                    marginTop: "4%",
                  }}
                >
                  <option>Select Room Type</option>
                  <option>4-Beds</option>
                  <option>3-Beds</option>
                  <option>2-Beds</option>
                  <option>1-Beds</option>
                  <option>Special Rooms</option>
                </select>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Number of Rooms"
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

              <div className="col-lg-12">
                <input
                  placeholder="Price Per Room"
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

              <div className="col-lg-12">
                <label
                  style={{
                    marginTop: "3%",
                    marginLeft: "4%",
                  }}
                >
                  Room Image
                </label>
                <input
                  type="file"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
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
                  padding: "4px 10px",
                  border: "1px solid white",
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
                  borderRadius: "4px",
                  fontWeight: "600",
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => {
                  setShow1(false);
                  alert("Rooms updated");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Add Beds </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <input
                  placeholder="Number of Beds"
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

              <div className="col-lg-12">
                <input
                  placeholder="Price Per Bed"
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
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => setShow2(false)}
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
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => {
                  setShow1(false);
                  alert("Bed Added");
                }}
              >
                ADD
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Room Type</th>
              <th>Room Number</th>

              <th>Floor</th>
              <th>Total Beds</th>

              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <td>General</td>
              <td>100</td>
              <td>1st floor</td>
              <td>
                {/* <h6>
                  <FaBed style={{ color: "grey", fontSize: "25px" }} />
                </h6> */}

                <h6>Total Beds : 10</h6>
                <h6>
                  <TbBed style={{ color: "green", fontSize: "25px" }} /> : 4
                  &nbsp;&nbsp;{" "}
                  <TbBedOff style={{ color: "red", fontSize: "25px" }} /> : 6
                </h6>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    fontSize: "12px",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "10px",
                  }}
                  onClick={() => setShow2(true)}
                >
                  ADD BED{" "}
                  <IoMdAddCircle style={{ color: "white", fontSize: "20px" }} />
                </button>
              </td>

              <td>
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <MdEdit
                    style={{ color: "#20958c", marginRight: "1%" }}
                    onClick={() => setShow1(true)}
                  />
                  <AiFillDelete style={{ color: "red" }} />
                  <button
                    style={{
                      fontSize: "12px",
                      border: "none",
                      backgroundColor: "red",
                      color: "white",
                      fontWeight: "600",
                      borderRadius: "4px",
                    }}
                  >
                    UNAVAILABLE
                  </button>
                </div>
              </td>
            </tr>

            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <td>General</td>
              <td>100</td>
              <td>1st floor</td>
              <td>
                {/* <h6>
                  <FaBed style={{ color: "grey", fontSize: "25px" }} />
                </h6> */}

                <h6>Total Beds : 10 </h6>
                <h6>
                  <TbBed style={{ color: "green", fontSize: "25px" }} /> : 4
                  &nbsp;&nbsp;{" "}
                  <TbBedOff style={{ color: "red", fontSize: "25px" }} /> : 6
                </h6>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    fontSize: "12px",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "10px",
                  }}
                >
                  ADD BED{" "}
                  <IoMdAddCircle style={{ color: "white", fontSize: "20px" }} />
                </button>
              </td>
              <td>
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <MdEdit
                    style={{ color: "#20958c", marginRight: "1%" }}
                    onClick={() => setShow1(true)}
                  />
                  <AiFillDelete style={{ color: "red" }} />
                  <button
                    style={{
                      fontSize: "12px",
                      border: "none",
                      backgroundColor: "green",
                      color: "white",
                      fontWeight: "600",
                      borderRadius: "4px",
                    }}
                  >
                    AVAILABLE
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
