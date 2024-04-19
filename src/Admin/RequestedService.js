import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";

export default function RequestedService() {
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
            Requested Service
          </h6>
          <input
            placeholder="Search  Requested Service"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
          />
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AiOutlinePlusCircle
              className="AddIcon1"
              onClick={() => setShow(true)}
            />
          </div> */}
        </div>

        <Modal size="md" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Service </Modal.Title>
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
                  <option>Select Category</option>
                  <option>Category-1</option>
                  <option>Category-2</option>
                </select>
              </div>
              <div className="col-lg-12">
                <input
                  placeholder="Service Title"
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
                  placeholder="Service Price"
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
                  placeholder="Service Details"
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
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow(false);
                  alert("Service created");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Service Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Contact</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <td>Service-1</td>
              <td>John</td>
              <td>John@gmail.com</td>
              <td>9565326532</td>

              <td>
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <MdEdit style={{ color: "#20958c", marginRight: "1%" }} />
                  <AiFillDelete style={{ color: "red" }} />
                  {/* <button
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
                  </button> */}
                </div>
              </td>
            </tr>

            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <td>Service-2</td>
              <td>John</td>
              <td>John@gmail.com</td>
              <td>9565326532</td>

              <td>
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <MdEdit style={{ color: "#20958c", marginRight: "1%" }} />
                  <AiFillDelete style={{ color: "red" }} />
                  {/* <button
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
                  </button> */}
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
