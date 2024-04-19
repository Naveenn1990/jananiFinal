import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";

export default function ProductOrders() {
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
            Orders
          </h6>
          <input
            placeholder="Search Orders"
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

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Product Name</th>
              <th>Vendor Name</th>

              <th>User Name</th>
              <th>Email</th>
              <th>Contact</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <td>Product-1</td>
              <td>Smith</td>

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
              <td>Product-1</td>
              <td>Smith</td>

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
