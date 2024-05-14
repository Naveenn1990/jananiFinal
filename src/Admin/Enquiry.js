import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillEyeFill, BsFillPlusCircleFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import axios from "axios";

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

  const [enqli, setenqli] = useState([]);
  // const [enqid, setenqid] = useState("");
  // const [isResolved, setisResolved] = useState("");
  const allEnquiries = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/enq/enqList");
      if (res.status === 200) {
        setenqli(res.data.enqList);
      }
    } catch (error) {
      console.log(error.response.data.error);
      setenqli(error.response.enqList);
    }
  };

  const resolveIssue = async (enqid, isResolved) => {
    try {
      const config = {
        url: "/enq/updateEnqStatus",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          enqid: enqid,
          isResolved: isResolved,
        },
      };
      const res = await axios(config);
      if (res.data.status === 200) {
        allEnquiries();
        alert(res.data.success);
      }
    } catch (error) {
      console.log(error.response.data.error);
      alert(error.response.data.error);
    }
  };
  useEffect(() => {
    allEnquiries();
  }, []);

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
              <th>S.No.</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Enquiry</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {enqli
              .filter((val) => !val.isResolved)
              .map((item, i) => {
                return (
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>{++i}</td>
                    <td>{item?.enqGenName}</td>
                    <td>{item?.enqGenEmail}</td>
                    <td>{item?.enqGenContact}</td>
                    <td>{item?.enquiryBody}</td>
                    <td>
                      <Button
                        className="btn btn-success"
                        onClick={() => resolveIssue(item._id, true)}
                      >
                        Resolve
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
