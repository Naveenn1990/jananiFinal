import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillEyeFill, BsFillPlusCircleFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";

export default function Enquiry() {
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
            All Enquiry & Complaints
          </h6>
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
              <th>User Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Enquiry</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <td>Sachin</td>
              <td>Sachin@gmail.com</td>

              <td>9565326532</td>
              <td>User Enquiry here</td>
            </tr>

            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <td>Sachin</td>
              <td>Sachin@gmail.com</td>

              <td>9565326532</td>
              <td>User Enquiry here</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
