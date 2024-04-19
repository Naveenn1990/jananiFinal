import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillEyeFill, BsFillPlusCircleFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";

export default function Accounts() {
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
            Accounts
          </h6>
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              style={{
                border: "none",
                color: "white",
                backgroundColor: "#20958c",
              }}
            >
              Debited Amount
            </button>
            <button>Credited Amount</button>
          </div> */}
        </div>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Payment Type</th>
              <th>Amount</th>
              <th>Paid for</th>
              <th>Credited/Debited</th>

              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <td>online</td>
              <td>10,000</td>

              <td>salary</td>
              <td>Debited</td>
              <td>Salary to john</td>
            </tr>

            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <td>online</td>
              <td>1,000</td>

              <td>Doctor appointment</td>
              <td>Credited</td>
              <td>For Dr.Smith Doctor appointment</td>
            </tr>

            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <td>Cash</td>
              <td>20000</td>

              <td>Surgery</td>
              <td>Credited</td>
              <td>For Dr.Smith Doctor Surgery</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
