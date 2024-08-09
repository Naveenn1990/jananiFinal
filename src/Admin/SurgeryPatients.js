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

  const [REasonForRejection, setREasonForRejection] = useState();
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (item) => {
    setShow1(true);
    setSelectedData(item);
  };

  const [showaccepted, setShowaccepted] = useState(false);
  const handleCloseaccepted = () => setShowaccepted(false);
  const handleShowaccepted = (item) => {
    setShowaccepted(true);
    setSelectedData(item);
  };

  const [showrejected, setShowrejected] = useState(false);
  const handleCloserejected = () => setShowrejected(false);
  const handleShowrejected = (item) => {
    setShowrejected(true);
    setSelectedData(item);
  };

  // Get Data
  const allTimes = [
    { settime: "12:00 AM", gettime: "12:30 AM" },
    { settime: "12:30 AM", gettime: "1:00 AM" },
    { settime: "1:00 AM", gettime: "1:30 AM" },
    { settime: "1:30 AM", gettime: "2:00 AM" },
    { settime: "2:00 AM", gettime: "2:30 AM" },
    { settime: "2:30 AM", gettime: "3:00 AM" },
    { settime: "3:00 AM", gettime: "3:30 AM" },
    { settime: "3:30 AM", gettime: "4:00 AM" },
    { settime: "4:00 AM", gettime: "4:30 AM" },
    { settime: "4:30 AM", gettime: "5:00 AM" },
    { settime: "5:00 AM", gettime: "5:30 AM" },
    { settime: "5:30 AM", gettime: "6:00 AM" },
    { settime: "6:00 AM", gettime: "6:30 AM" },
    { settime: "6:30 AM", gettime: "7:00 AM" },
    { settime: "7:00 AM", gettime: "7:30 AM" },
    { settime: "7:30 AM", gettime: "8:00 AM" },
    { settime: "8:00 AM", gettime: "8:30 AM" },
    { settime: "8:30 AM", gettime: "9:00 AM" },
    { settime: "9:00 AM", gettime: "9:30 AM" },
    { settime: "9:30 AM", gettime: "10:00 AM" },
    { settime: "10:00 AM", gettime: "10:30 AM" },
    { settime: "10:30 AM", gettime: "11:00 AM" },
    { settime: "11:00 AM", gettime: "11:30 AM" },
    { settime: "11:30 AM", gettime: "12:00 PM" },
    { settime: "12:00 PM", gettime: "12:30 PM" },
    { settime: "12:30 PM", gettime: "1:00 PM" },
    { settime: "1:00 PM", gettime: "1:30 PM" },
    { settime: "1:30 PM", gettime: "2:00 PM" },
    { settime: "2:00 PM", gettime: "2:30 PM" },
    { settime: "2:30 PM", gettime: "3:00 PM" },
    { settime: "3:00 PM", gettime: "3:30 PM" },
    { settime: "3:30 PM", gettime: "4:00 PM" },
    { settime: "4:00 PM", gettime: "4:30 PM" },
    { settime: "4:30 PM", gettime: "5:00 PM" },
    { settime: "5:00 PM", gettime: "5:30 PM" },
    { settime: "5:30 PM", gettime: "6:00 PM" },
    { settime: "6:00 PM", gettime: "6:30 PM" },
    { settime: "6:30 PM", gettime: "7:00 PM" },
    { settime: "7:00 PM", gettime: "7:30 PM" },
    { settime: "7:30 PM", gettime: "8:00 PM" },
    { settime: "8:00 PM", gettime: "8:30 PM" },
    { settime: "8:30 PM", gettime: "9:00 PM" },
    { settime: "9:00 PM", gettime: "9:30 PM" },
    { settime: "9:30 PM", gettime: "10:00 PM" },
    { settime: "10:00 PM", gettime: "10:30 PM" },
    { settime: "10:30 PM", gettime: "11:00 PM" },
    { settime: "11:00 PM", gettime: "11:30 PM" },
    { settime: "11:30 PM", gettime: "12:00 AM" },
  ];
  const [data, setdata] = useState([]);
  const [Department, setDepartment] = useState([]);
  const [Surgeon, setSurgeon] = useState([]);
  const [OtRooms, setOtRooms] = useState([]);

  const [AvailabelNurse, setAvailabelNurse] = useState([]);
  const [AvailabelDoctor, setAvailabelDoctor] = useState([]);
  const [AnaesthetistDoctors, setAnaesthetistDoctors] = useState([]);
  const [AvailabelOtRooms, setAvailabelOtRooms] = useState([]);

  const [SelectedDepartment, setSelectedDepartment] = useState();
  const [SurgeryDate, setSurgeryDate] = useState();
  const [StartTime, setStartTime] = useState();
  const [EndTime, setEndTime] = useState();
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
    getDoctors();
    GetOtRooms();
  }, []);

  const GetDepartment = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getDepartment"
      );
      if (res.status === 200) {
        setDepartment(
          res.data.success.filter((data) => data.DepartmentName !== "Nursing")
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDoctors = () => {
    axios
      .get("http://localhost:8521/api/Doctor/getDoctorsList")
      .then(function (response) {
        // handle success
        setSurgeon(
          response.data.DoctorsInfo?.filter(
            (data) => data.DoctorType === "Surgery"
          )
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const GetOtRooms = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/admin/GetOtRooms");
      if (res.status === 200) {
        setOtRooms(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("OtRooms", OtRooms);

  useEffect(() => {
    if ((SelectedDepartment, SurgeryDate, StartTime, EndTime)) {
      const xyz = Surgeon?.filter(
        (item) =>
          item?.Department === SelectedDepartment &&
          item?.scheduleList?.find(
            (tim) =>
              tim.startTime === StartTime &&
              tim.endTime === EndTime &&
              tim.scheduleDate === SurgeryDate &&
              tim.bookingstatus === "Vacant"
          )
      );
      setAvailabelDoctor(xyz);
    }
  }, [SelectedDepartment, SurgeryDate, StartTime, EndTime]);

  useEffect(() => {
    if ((SurgeryDate, StartTime, EndTime)) {
      const bhbg = Surgeon?.filter(
        (item) =>
          item?.Department === "Anaesthetist" &&
          item?.scheduleList?.find(
            (tim) =>
              tim.startTime === StartTime &&
              tim.endTime === EndTime &&
              tim.scheduleDate === SurgeryDate &&
              tim.bookingstatus === "Vacant"
          )
      );
      setAnaesthetistDoctors(bhbg);
    }
  }, [SurgeryDate, StartTime, EndTime]);

  useEffect(() => {
    if ((SurgeryDate, StartTime, EndTime)) {
      const sdfg = Surgeon?.filter(
        (item) =>
          item?.Department === "Nursing" &&
          item?.scheduleList?.find(
            (tim) =>
              tim.startTime === StartTime &&
              tim.endTime === EndTime &&
              tim.scheduleDate === SurgeryDate &&
              tim.bookingstatus === "Vacant"
          )
      );
      setAvailabelNurse(sdfg);
    }
  }, [SurgeryDate, StartTime, EndTime]);

  useEffect(() => {
    if ((SurgeryDate, StartTime, EndTime)) {
      const sdfg = OtRooms?.filter((item) =>
        item?.scheduleList?.find(
          (tim) =>
            tim.startTime === StartTime &&
            tim.endTime === EndTime &&
            tim.scheduleDate === SurgeryDate &&
            tim.bookingstatus === "Vacant"
        )
      );
      setAvailabelOtRooms(sdfg);
    }
  }, [SurgeryDate, StartTime, EndTime]);

  console.log(
    "SelectedSurgeon",
    SelectedSurgeon,
    SelectedAssistant1,
    SelectedAssistant2,
    SelectedAnaesthetist,
    SelectedScrubNurse,
    SelectedCircNurse,
    SelectedOTRoom
  );

  const confirmSurgery = async (e) => {
    e.preventDefault();
    if (
      !SelectedDepartment ||
      !SurgeryDate ||
      !StartTime ||
      !EndTime ||
      !Note ||
      !SelectedSurgeon ||
      !SelectedAssistant1 ||
      !SelectedAssistant2 ||
      !SelectedAnaesthetist ||
      !SelectedScrubNurse ||
      !SelectedCircNurse ||
      !SelectedOTRoom
    ) {
      alert("Please fill all the fields");
    }
    {
      const SSurgeon = SelectedSurgeon?.split("-");
      const SAssistant1 = SelectedAssistant1?.split("-");
      const SAssistant2 = SelectedAssistant2?.split("-");
      const SAnaesthetist = SelectedAnaesthetist?.split("-");
      const SScrubNurse = SelectedScrubNurse?.split("-");
      const SCircNurse = SelectedCircNurse?.split("-");
      try {
        const config = {
          url: `/admin/confirmSurgery`,
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "Content-Type": "application/json" },
          data: {
            id: SelectedData?._id,
            causeId: SelectedData?.CauseId,
            causename: SelectedData?.CauseName,
            Department: SelectedDepartment,
            SurgeryDate: SurgeryDate,
            StartTime: StartTime,
            EndTime: EndTime,
            Note: Note,
            Surgeon: SSurgeon[0],
            Assistant1: SAssistant1[0],
            Assistant2: SAssistant2[0],
            Anaesthetist: SAnaesthetist[0],
            ScrubNurse: SScrubNurse[0],
            CircNurse: SCircNurse[0],
            OTRoom: SelectedOTRoom,
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          GetOtRooms();
          alert(res?.data?.success);
          window.location.reload();
          // setScheduleList("");
        }
      } catch (error) {
        console.log(error);
        alert(error.response.data.message);
      }
    }
  };

  const rejectSurgery = async (e) => {
    e.preventDefault();
    if (!REasonForRejection) {
      alert("Please enter reason for rejection");
    } else {
      try {
        const config = {
          url: `/admin/RejectSurgery`,
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "Content-Type": "application/json" },
          data: {
            id: SelectedData?._id,
            REasonForRejection: REasonForRejection,
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          alert(res?.data?.success);
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
        alert(error.response.data.message);
      }
    }
  };

  console.log("AvailabelDoctor", AvailabelDoctor);

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
                            {item?.Status === "Accepted" ? (
                              <>
                                <button
                                  style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                  }}
                                  onClick={() => handleShowaccepted(item)}
                                >
                                  <i class="fas fa-eye"></i>
                                </button>
                              </>
                            ) : item?.Status === "Rejected" ? (
                              <>
                                <button
                                  style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                  }}
                                  onClick={() => handleShowrejected(item)}
                                >
                                  <i
                                    class="fas fa-eye"
                                    style={{ color: "red" }}
                                  ></i>
                                </button>
                              </>
                            ) : (
                              <>
                                <div className="d-flex gap-5 fs-5">
                                  <Button
                                    style={{ backgroundColor: "#20958c" }}
                                    onClick={() => handleShow(item)}
                                  >
                                    Accept
                                  </Button>
                                  <Button onClick={() => handleShow1(item)}>
                                    Reject
                                  </Button>
                                </div>
                              </>
                            )}
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
                <Row>
                  <Col md={4}>
                    <label style={{ color: "white" }}>
                      Select Surgery Date
                    </label>
                    <Form.Control
                      onChange={(e) => setSurgeryDate(e.target.value)}
                      aria-label="Default select example"
                      type="date"
                    />
                  </Col>
                  <Col md={4}>
                    <label style={{ color: "white" }}>Select start Time</label>
                    <Form.Select
                      onChange={(e) => setStartTime(e.target.value)}
                      aria-label="Default select example"
                    >
                      <option>select Time</option>
                      {allTimes?.map((item) => {
                        return (
                          <option value={item?.settime}>{item?.settime}</option>
                        );
                      })}
                    </Form.Select>
                  </Col>
                  <Col md={4}>
                    <label style={{ color: "white" }}>Select End Time</label>
                    <Form.Select
                      onChange={(e) => setEndTime(e.target.value)}
                      aria-label="Default select example"
                    >
                      <option>select Time</option>
                      {allTimes?.map((item) => {
                        return (
                          <option value={item?.settime}>{item?.settime}</option>
                        );
                      })}
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
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
            </Row>
            <Row>
              <Col md={6}>
                <label style={{ color: "white" }}>Select Surgeon</label>
                <Form.Select
                  onChange={(e) => setSelectedSurgeon(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>select Surgeon</option>
                  {AvailabelDoctor?.map((item) => {
                    return (
                      <option
                        value={`${item?._id}-${item?.Firstname} ${item?.Lastname}`}
                      >
                        {item?.Firstname}&nbsp;{item?.Lastname}&nbsp;-&nbsp;
                        {item?.DoctorId}
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
                  {AvailabelDoctor?.map((item) => {
                    return (
                      <option
                        value={`${item?._id}-${item?.Firstname} ${item?.Lastname}`}
                      >
                        {item?.Firstname}&nbsp;{item?.Lastname}&nbsp;-&nbsp;
                        {item?.DoctorId}
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
                  {AvailabelDoctor?.map((item) => {
                    return (
                      <option
                        value={`${item?._id}-${item?.Firstname} ${item?.Lastname}`}
                      >
                        {item?.Firstname}&nbsp;{item?.Lastname}&nbsp;-&nbsp;
                        {item?.DoctorId}
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
                  {AnaesthetistDoctors?.map((item) => {
                    return (
                      <option
                        value={`${item?._id}-${item?.Firstname} ${item?.Lastname}`}
                      >
                        {item?.Firstname}&nbsp;{item?.Lastname}&nbsp;-&nbsp;
                        {item?.DoctorId}
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
                  {AvailabelNurse?.map((item) => {
                    return (
                      <option
                        value={`${item?._id}-${item?.Firstname} ${item?.Lastname}`}
                      >
                        {item?.Firstname}&nbsp;{item?.Lastname}&nbsp;-&nbsp;
                        {item?.DoctorId}
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
                  {AvailabelNurse?.map((item) => {
                    return (
                      <option
                        value={`${item?._id}-${item?.Firstname} ${item?.Lastname}`}
                      >
                        {item?.Firstname}&nbsp;{item?.Lastname}&nbsp;-&nbsp;
                        {item?.DoctorId}
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
                  {AvailabelOtRooms?.map((item) => {
                    return <option value={item?._id}>{item?.Name}</option>;
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
            <Button variant="warning" onClick={(e) => confirmSurgery(e)}>
              Add
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal size="md" show={show1} onHide={handleClose1}>
        <Modal.Header>
          <Modal.Title>Reject surgery </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row" style={{ padding: "10px" }}>
            <label style={{ color: "white" }}>Enter reason for rejection</label>
            <Form.Control
              onChange={(e) => setREasonForRejection(e.target.value)}
              aria-label="Default select example"
              type="text"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={() => setShow1(false)}>
              Cancel
            </Button>
            <Button variant="warning" onClick={(e) => rejectSurgery(e)}>
              Reject
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        size="md"
        show={showaccepted}
        onHide={handleCloseaccepted}
        className="custom-modal"
      >
        <Modal.Header>
          <Modal.Title>Surgery Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row" style={{ padding: "10px" }}>
            <Row>
              <Col md={6}>
                <Row>
                  <Col md={4}>
                    <label style={{ color: "white" }}>Surgery Date</label>
                    <Form.Control
                      value={SelectedData?.SurgeryDate}
                      aria-label="Default select example"
                    />
                  </Col>
                  <Col md={4}>
                    <label style={{ color: "white" }}>Start Time</label>

                    <Form.Control
                      value={SelectedData?.StartTime}
                      aria-label="Default select example"
                    />
                  </Col>
                  <Col md={4}>
                    <label style={{ color: "white" }}>End Time</label>

                    <Form.Control
                      value={SelectedData?.EndTime}
                      aria-label="Default select example"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <label style={{ color: "white" }}>Department</label>

                <Form.Control
                  value={SelectedData?.DepartmentName}
                  aria-label="Default select example"
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <label style={{ color: "white" }}>Surgeon</label>

                <Form.Control
                  value={`${SelectedData?.Surgeon?.Firstname} ${SelectedData?.Surgeon?.Lastname}`}
                  aria-label="Default select example"
                />
              </Col>
              <Col md={6}>
                <label style={{ color: "white" }}>Assistant-1</label>

                <Form.Control
                  value={`${SelectedData?.Assistant1?.Firstname} ${SelectedData?.Assistant1?.Lastname}`}
                  aria-label="Default select example"
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <label style={{ color: "white" }}> Assistant-2</label>

                <Form.Control
                  value={`${SelectedData?.Assistant2?.Firstname} ${SelectedData?.Assistant2?.Lastname}`}
                  aria-label="Default select example"
                />
              </Col>
              <Col md={6}>
                <label style={{ color: "white" }}>Anaesthetist</label>

                <Form.Control
                  value={`${SelectedData?.Anaesthetist?.Firstname} ${SelectedData?.Anaesthetist?.Lastname}`}
                  aria-label="Default select example"
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <label style={{ color: "white" }}>Scrub Nurse</label>
                <Form.Control
                  value={`${SelectedData?.ScrubNurse?.Firstname} ${SelectedData?.ScrubNurse?.Lastname}`}
                  aria-label="Default select example"
                />
              </Col>
              <Col md={6}>
                <label style={{ color: "white" }}>Circ Nurse</label>

                <Form.Control
                  value={`${SelectedData?.CircNurse?.Firstname} ${SelectedData?.CircNurse?.Lastname}`}
                  aria-label="Default select example"
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <label style={{ color: "white" }}>OT Room</label>

                <Form.Control
                  value={SelectedData?.OTRoom?.Name}
                  aria-label="Default select example"
                />
              </Col>
              <Col md={6}></Col>
            </Row>

            <label style={{ color: "white" }}>Note</label>
            <Form.Group className="mb-3">
              <Form.Control
                value={SelectedData?.Note}
                aria-label="Default select example"
              />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={() => setShowaccepted(false)}>
              Cancel
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal size="md" show={showrejected} onHide={handleCloserejected}>
        <Modal.Header>
          <Modal.Title>Rejection reason for surgery </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row" style={{ padding: "10px" }}>
            <p style={{ color: "white" }}>{SelectedData?.REasonForRejection}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={() => setShowrejected(false)}>
              Cancel
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
