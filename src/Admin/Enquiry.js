import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import {
  AiFillFileExcel,
  AiFillDelete,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsFillEyeFill, BsFillPlusCircleFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import axios from "axios";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";

export default function Enquiry() {
  const [selectedData, setselectedData] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setselectedData(item);
  };

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (item) => {
    setShow1(true);
    setselectedData(item);
  };

  const [Message, setMessage] = useState("");

  const [data, setdata] = useState([]);
  // const [enqid, setenqid] = useState("");
  // const [isResolved, setisResolved] = useState("");
  const allEnquiries = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/enq/enqList");
      if (res.status === 200) {
        setdata(res.data.enqList);
      }
    } catch (error) {
      console.log(error.response.data.error);
      setdata(error.response.enqList);
    }
  };

  console.log("selectedData", data, selectedData);
  const resolveIssue = async () => {
    if (!Message) {
      alert("Please enter Message");
    } else {
      try {
        const config = {
          url: "/email/ReplytoEnquiry",
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            id: selectedData?._id,
            email: selectedData?.enqGenEmail,
            message: Message,
            name: selectedData?.enqGenName,
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
    }
  };

  useEffect(() => {
    allEnquiries();
  }, []);

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data?.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = data?.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      settableFilter([...filterTable]);
    } else {
      setSearch(e.target.value);
      setdata([...data]);
    }
  };

  const exportType = "xls";

  const [fileName, setfileName] = useState("Notification");

  const ExportToExcel = () => {
    if (fileName) {
      if (data?.length != 0) {
        exportFromJSON({ data, fileName, exportType });
        // setfileName("");
      } else {
        alert("There is no data to export");
        // setfileName("");
      }
    } else {
      alert("Enter file name to export");
    }
  };

  console.log("data", data);

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

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
            marginBottom: "2%",
          }}
        >
          <input
            placeholder="Search"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
            onChange={handleFilter}
          />
          <button
            style={{
              backgroundColor: "#20958c",
              color: "white",
              border: "none",
              fontSize: "12px",
              borderRadius: "4px",
            }}
            onClick={ExportToExcel}
          >
            EXPORT <AiFillFileExcel />
          </button>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AiOutlinePlusCircle
              className="AddIcon1"
              onClick={() => handleShow()}
            />
          </div>
        </div>

        <Table responsive style={{ marginTop: "1%" }}>
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
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, i) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{++i}</td>
                        <td>{item?.enqGenName}</td>
                        <td>{item?.enqGenEmail}</td>
                        <td>{item?.enqGenContact}</td>
                        <td>{item?.enquiryBody}</td>
                        <td>
                          {item?.isResolved ? (
                            <button
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                              }}
                              onClick={() => handleShow1(item)}
                            >
                              <i
                                class="fas fa-eye"
                                style={{ color: "#20958c" }}
                              ></i>
                            </button>
                          ) : (
                            <Button
                              className="btn btn-success"
                              onClick={() => handleShow(item)}
                            >
                              Resolve
                            </Button>
                          )}
                        </td>
                      </tr>
                    );
                  })
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, i) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{++i}</td>
                        <td>{item?.enqGenName}</td>
                        <td>{item?.enqGenEmail}</td>
                        <td>{item?.enqGenContact}</td>
                        <td>{item?.enquiryBody}</td>
                        <td>
                          {item?.isResolved ? (
                            <button
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                              }}
                              onClick={() => handleShow1(item)}
                            >
                              <i
                                class="fas fa-eye"
                                style={{ color: "#20958c" }}
                              ></i>
                            </button>
                          ) : (
                            <Button
                              className="btn btn-success"
                              onClick={() => handleShow(item)}
                            >
                              Resolve
                            </Button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
          </tbody>
        </Table>
        <div style={{ display: "flex" }}>
          <p style={{ width: "100%", marginTop: "20px" }}>
            Total Count: {data?.length}
          </p>
          <ReactPaginate
            previousLabel={"Back"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Send Notification</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={resolveIssue}>
              Send reply
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>Replied Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{ color: "white" }}>{selectedData?.Reply}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
