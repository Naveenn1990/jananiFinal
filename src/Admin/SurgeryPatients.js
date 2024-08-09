import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsFillEyeFill, BsImages } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { IoMdImages } from "react-icons/io";
import axios from "axios";
import parse from "html-react-parser";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";

export default function SurgeryPatients() {
  const [SelectedData, setSelectedData] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setSelectedData(item);
  };

  // Get Data
  const [data, setdata] = useState([]);
  const [Department, setDepartment] = useState([]);

  const [SelectedDepartment, setSelectedDepartment] = useState();
  const [SurgeryDate, setSurgeryDate] = useState();
  const [SurgeryTime, setSurgeryTime] = useState();
  const [SelectedSurgeon, setSelectedSurgeon] = useState();
  const [SelectedAssistant1, setSelectedAssistant1] = useState();
  const [SelectedAssistant2, setSelectedAssistant2] = useState();
  const [SelectedAnaesthetist, setSelectedAnaesthetist] = useState();
  const [SelectedScrubNurse, setSelectedScrubNurse] = useState();
  const [SelectedCircNurse, setSelectedCircNurse] = useState();
  const [SelectedOTRoom, setSelectedOTRoom] = useState();
  const [Note, setNote] = useState();

  const GetSurgeryPatients = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/GetSurgeryPatients"
      );
      if (res.status === 200) {
        setdata(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetSurgeryPatients();
    GetDepartment();
  }, []);

  const GetDepartment = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getDepartment"
      );
      if (res.status === 200) {
        setDepartment(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  const [fileName, setfileName] = useState("Blog");

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
            surgery
          </h6>
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
        </div>

        <Table responsive style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.No</th>
              <th>Patient Name</th>
              <th>PatientId</th>
              <th>Cause Name</th>
              <th>Surgery Name</th>
              <th>Department</th>
              <th>Refered By</th>
              <th>Refered To</th>
              <th>Reason For Surgery</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, i) => {
                    return (
                      <>
                        <tr style={{ fontSize: "15px", textAlign: "center" }}>
                          <td>{i + 1}</td>
                          <td>{item?.PatientName}</td>
                          <td>{item?.PatientId?.PatientId}</td>
                          <td>{item?.CauseName}</td>
                          <td>{item?.SurgeryName}</td>
                          <td>{item?.DepartmentName}</td>
                          <td>{item?.ReferedDoctorName}</td>
                          <td>{item?.DoctorName}</td>
                          <td>{item?.ReasonForSurgery}</td>
                          <td>
                            <div className="d-flex gap-5 fs-5">
                              <MdEdit
                                style={{ color: "#20958c" }}
                                onClick={() => {
                                  //   handleShow1(item);
                                }}
                              />
                              <AiFillDelete
                                // onClick={() => DeleteBlog(item?._id)}
                                style={{ color: "red" }}
                              />
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, i) => {
                    return (
                      <>
                        <tr style={{ fontSize: "15px", textAlign: "center" }}>
                          <td>{i + 1}</td>
                          <td>{item?.PatientName}</td>
                          <td>{item?.PatientId?.PatientId}</td>
                          <td>{item?.CauseName}</td>
                          <td>{item?.SurgeryName}</td>
                          <td>{item?.DepartmentName}</td>
                          <td>{item?.ReferedDoctorName}</td>
                          <td>{item?.DoctorName}</td>
                          <td>{item?.ReasonForSurgery}</td>
                          <td>
                            <div className="d-flex gap-5 fs-5">
                              <Button
                                style={{ backgroundColor: "#20958c" }}
                                onClick={() => handleShow(item)}
                              >
                                Accept
                              </Button>
                              <Button>Reject</Button>
                            </div>
                          </td>
                        </tr>
                      </>
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
      </div>

      {/* Add Modal */}
      <Modal
        size="md"
        show={show}
        onHide={handleClose}
        className="custom-modal"
      >
        <Modal.Header>
          <Modal.Title>Confirm surgery </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row" style={{ padding: "10px" }}>
            <Row>
              <Col md={6}>
                <label style={{ color: "white" }}>Select Department</label>
                <Form.Select
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>select Department</option>
                  {Department?.map((item) => {
                    return (
                      <option value={item?.DepartmentName}>
                        {item?.DepartmentName}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col md={6}>
                <Row>
                  <Col md={6}>
                    <label style={{ color: "white" }}>
                      Select Surgery Date
                    </label>
                    <Form.Control
                      onChange={(e) => setSurgeryDate(e.target.value)}
                      aria-label="Default select example"
                      type="date"
                    />
                  </Col>
                  <Col md={6}>
                    {" "}
                    <label style={{ color: "white" }}>
                      Select Surgery Time
                    </label>
                    <Form.Select
                      onChange={(e) => setSurgeryTime(e.target.value)}
                      aria-label="Default select example"
                    >
                      <option>select Surgery Time</option>
                      {SelectedData?.cause?.map((item) => {
                        return (
                          <option value={`${item?._id}-${item?.CauseName}`}>
                            {item?.CauseName}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <label style={{ color: "white" }}>Select Surgeon</label>
                <Form.Select
                  onChange={(e) => setSelectedSurgeon(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>select Surgeon</option>
                  {SelectedData?.cause?.map((item) => {
                    return (
                      <option value={`${item?._id}-${item?.CauseName}`}>
                        {item?.CauseName}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col md={6}>
                <label style={{ color: "white" }}>Select Assistant-1</label>
                <Form.Select
                  onChange={(e) => setSelectedAssistant1(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>select Assistant-1</option>
                  {SelectedData?.cause?.map((item) => {
                    return (
                      <option value={`${item?._id}-${item?.CauseName}`}>
                        {item?.CauseName}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <label style={{ color: "white" }}>Select Assistant-2</label>
                <Form.Select
                  onChange={(e) => setSelectedAssistant2(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>select Assistant-2</option>
                  {SelectedData?.cause?.map((item) => {
                    return (
                      <option value={`${item?._id}-${item?.CauseName}`}>
                        {item?.CauseName}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col md={6}>
                <label style={{ color: "white" }}>Select Anaesthetist</label>
                <Form.Select
                  onChange={(e) => setSelectedAnaesthetist(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>select Anaesthetist</option>
                  {SelectedData?.cause?.map((item) => {
                    return (
                      <option value={`${item?._id}-${item?.CauseName}`}>
                        {item?.CauseName}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                {" "}
                <label style={{ color: "white" }}>Select Scrub Nurse</label>
                <Form.Select
                  onChange={(e) => setSelectedScrubNurse(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>select Scrub Nurse</option>
                  {SelectedData?.cause?.map((item) => {
                    return (
                      <option value={`${item?._id}-${item?.CauseName}`}>
                        {item?.CauseName}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col md={6}>
                <label style={{ color: "white" }}>Select Circ Nurse</label>
                <Form.Select
                  onChange={(e) => setSelectedCircNurse(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>select Circ Nurse</option>
                  {SelectedData?.cause?.map((item) => {
                    return (
                      <option value={`${item?._id}-${item?.CauseName}`}>
                        {item?.CauseName}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <label style={{ color: "white" }}>Select OT Room</label>
                <Form.Select
                  onChange={(e) => setSelectedOTRoom(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>select OT Room</option>
                  {SelectedData?.cause?.map((item) => {
                    return (
                      <option value={`${item?._id}-${item?.CauseName}`}>
                        {item?.CauseName}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col md={6}></Col>
            </Row>

            <label style={{ color: "white" }}>Note</label>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                onChange={(e) => setNote(e.target.value)}
                className="vi_0"
                style={{ height: "100px" }}
              />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cancel
            </Button>
            <Button variant="warning">Add</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
