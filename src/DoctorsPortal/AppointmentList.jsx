import React, { useEffect } from "react";
import { Container, Navbar, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  faCalendarDays,
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
  faBandage,
  faCheck,
  faCancel,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";

export const AppointmentList = () => {
  const doctor = JSON.parse(sessionStorage.getItem("DoctorDetails"));
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [appointmentCompleted, setappointmentCompleted] = useState(false);
  const [data, setdata] = useState([]);
  const getAppointmentList = () => {
    axios
      .get("http://localhost:8521/api/user/getlist")
      .then(function (response) {
        const data = response.data.Info.filter(
          (item) => item?.ConsultantDoctor?._id == doctor?._id
        );
        setdata(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log("data: fdsaf", data);

  useEffect(() => {
    getAppointmentList();
  }, []);

  const CaseStudy = (Id) => {
    sessionStorage.setItem("CaseStudy", Id);
    window.location.assign("/doctorscasestudy");
  };

  const [DateFilter, setDateFilter] = useState("");

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = data.filter((o) =>
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

  const [fileName, setfileName] = useState("Doctors");

  const ExportToExcel = () => {
    if (fileName) {
      if (data.length != 0) {
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

  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#dae1f3" }}>
        <Container fluid>
          <Navbar.Brand className="fw-bold" href="#">
            Appointment
          </Navbar.Brand>

          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex gap-5">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleFilter}
                />
                {/* <Button variant="outline-primary">Search</Button> */}
              </Form>
              <div className="d-flex gap-3 align-items-center">
                <label style={{ width: "68%" }}>Select Date : </label>
                <Form.Control
                  type="date"
                  className="me-2"
                  onChange={(e) => setDateFilter(e.target.value)}
                />
                <Button onClick={() => setDateFilter("")} variant="danger">
                  Clear
                </Button>
              </div>
              {/* <div className="d-flex gap-1 align-items-center">
                <label style={{ width: "68%" }}>Filter : </label>
                <Form.Select
                  // type="date"
                  className="me-2"
                  onChange={(e) => setappointmentCompleted(e.target.value)}
                >
                  <option value={"false"}>Pending</option>
                  <option value={"true"}>Completed</option>
                </Form.Select>
              </div> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mb-5">
        <Table responsive className="table" bordered>
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold">Sl No.</th>
              <th className="fw-bold">Patient Name</th>
              <th className="fw-bold">Date & Time</th>
              <th className="fw-bold">Email</th>
              <th className="fw-bold">Mobile</th>
              <th className="fw-bold">Disease</th>
              <th className="fw-bold">Actions </th>
              <th className="fw-bold">View Reports </th>
            </tr>
          </thead>
          <tbody>
            {DateFilter
              ? data
                  ?.filter(
                    (item) =>
                      !DateFilter || item?.Dateofappointment === DateFilter
                  )
                  ?.filter(
                    (val) =>
                      val?.isAppointmentCompleted.toString() ===
                      appointmentCompleted.toString()
                  )
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, index) => {
                    return (
                      <tr className="admin-table-row">
                        <td>{usersPerPage * pageNumber + index + 1}</td>
                        <td>
                          {item?.Firstname}&nbsp;{item?.Lastname}
                        </td>
                        <td>
                          {item?.Dateofappointment} <br />
                          {item?.starttime} {item?.endtime}{" "}
                        </td>
                        <td>{item?.Email}</td>

                        <td>{item?.PhoneNumber}</td>
                        <td>
                          {item?.Condition ? (
                            <div
                              className="Diseases-btn"
                              style={{ color: "red", border: "1px solid red" }}
                            >
                              {item?.Condition}
                            </div>
                          ) : (
                            "-"
                          )}
                        </td>

                        {!item.isAppointmentCompleted ? (
                          <td>
                            {item?.payment === "unpaid" ? (
                              <>
                                <p>Payment Pending</p>
                              </>
                            ) : (
                              <>
                                <button
                                  className="table-details-btn"
                                  onClick={() => CaseStudy(item?._id)}
                                >
                                  Case Study
                                </button>
                              </>
                            )}
                          </td>
                        ) : (
                          <div style={{ textAlign: "center" }}>--/--</div>
                        )}
                        <td>
                          <div
                            onClick={() =>
                              navigate("/patientcasestudy", {
                                state: { item: item },
                              })
                            }
                          >
                            <Button>View Reports</Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
              : search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, index) => {
                    return (
                      <tr className="admin-table-row">
                        <td>{usersPerPage * pageNumber + index + 1}</td>
                        <td>
                          {item?.Firstname}&nbsp;{item?.Lastname}
                        </td>
                        <td>
                          {item?.Dateofappointment} <br />
                          {item?.starttime} {item?.endtime}{" "}
                        </td>
                        <td>{item?.Email}</td>

                        <td>{item?.PhoneNumber}</td>
                        <td>
                          {item?.Condition ? (
                            <div
                              className="Diseases-btn"
                              style={{ color: "red", border: "1px solid red" }}
                            >
                              {item?.Condition}
                            </div>
                          ) : (
                            "-"
                          )}
                        </td>

                        {!item.isAppointmentCompleted ? (
                          <td>
                            {item?.payment === "unpaid" ? (
                              <>
                                <p>Payment Pending</p>
                              </>
                            ) : (
                              <>
                                <button
                                  className="table-details-btn"
                                  onClick={() => CaseStudy(item?._id)}
                                >
                                  Case Study
                                </button>
                              </>
                            )}
                          </td>
                        ) : (
                          <div style={{ textAlign: "center" }}>--/--</div>
                        )}
                        <td>
                          <div
                            onClick={() =>
                              navigate("/patientcasestudy", {
                                state: { item: item },
                              })
                            }
                          >
                            <Button>View Reports</Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, index) => {
                    return (
                      <tr className="admin-table-row">
                        <td>{usersPerPage * pageNumber + index + 1}</td>
                        <td>
                          {item?.Firstname}&nbsp;{item?.Lastname}
                        </td>
                        <td>
                          {item?.Dateofappointment} <br />
                          {item?.starttime} {item?.endtime}{" "}
                        </td>
                        <td>{item?.Email}</td>

                        <td>{item?.PhoneNumber}</td>
                        <td>
                          {item?.Condition ? (
                            <div
                              className="Diseases-btn"
                              style={{ color: "red", border: "1px solid red" }}
                            >
                              {item?.Condition}
                            </div>
                          ) : (
                            "-"
                          )}
                        </td>

                        {!item.isAppointmentCompleted ? (
                          <td>
                            {item?.payment === "unpaid" ? (
                              <>
                                <p>Payment Pending</p>
                              </>
                            ) : (
                              <>
                                <button
                                  className="table-details-btn"
                                  onClick={() => CaseStudy(item?._id)}
                                >
                                  Case Study
                                </button>
                              </>
                            )}
                          </td>
                        ) : (
                          <div style={{ textAlign: "center" }}>--/--</div>
                        )}
                        <td>
                          <div
                            onClick={() =>
                              navigate("/patientcasestudy", {
                                state: { item: item },
                              })
                            }
                          >
                            <Button>View Reports</Button>
                          </div>
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
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center gap-3 mb-3">
              <img
                style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                src="./img/Our-doctors-img-1.jpg"
                alt=""
              />
              <h4 className="fw-bold">Jhon Deo</h4>
            </div>
            <div
              className="Diseases-btn"
              style={{ color: "green", border: "1px solid green" }}
            >
              Patient
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=" mb-3 fs-5">
            <FontAwesomeIcon icon={faCalendarDays} className="me-2" />
            February 25, 2018 19:52
          </div>

          <div className=" mb-3 fs-5">
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            test@email.com
          </div>

          <div className=" mb-3 fs-5">
            <FontAwesomeIcon icon={faPhoneVolume} className="me-2" />
            123456789
          </div>

          <div className=" mb-3 fs-5">
            <FontAwesomeIcon icon={faLocationDot} className="me-2" />
            God creature is sixth was abundantly and sea gathered
          </div>

          <div className=" mb-3 fs-5">
            <FontAwesomeIcon icon={faBandage} className="me-2" />
            <span
              className="Diseases-btn"
              style={{ color: "red", border: "1px solid red" }}
            >
              Infection
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger">
            <FontAwesomeIcon icon={faCancel} className="fs-5 me-2" />
            Reject
          </Button>
          <Button variant="success">
            <FontAwesomeIcon icon={faCheck} className="fs-5 me-2" />
            Approve
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
