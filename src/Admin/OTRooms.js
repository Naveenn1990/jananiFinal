import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
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
import { MdDelete } from "react-icons/md";
import {
  BsFillCalendar2PlusFill,
  BsFillCalendarCheckFill,
} from "react-icons/bs";

export default function OTRooms() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Tdata, setTdata] = useState({});
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (item) => {
    setShow1(true);
    setTdata(item);
  };

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = (item) => {
    setShow2(true);
    setTdata(item);
  };

  // Add data
  const [Name, setName] = useState("");
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

  const [scheduleDate, setScheduleDate] = useState("");
  const [timeInterval, settimeInterval] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [scheduleList, setScheduleList] = useState([]);
  const AddSchedule = () => {
    if (!scheduleDate) {
      return alert("Select date..!");
    }
    if (!startTime) {
      return alert("Select start time..!");
    }
    if (!endTime) {
      return alert("Select end time..!");
    }
    const newSchedule = {
      scheduleDate,
      startTime,
      endTime,
      bookingstatus: "Vacant",
    };
    // Temporarily add to the list, then update state and alert
    const updatedList = [...scheduleList, newSchedule];
    setScheduleList(updatedList);
    alert("Added successfully..!");

    // Clear the input fields after state update
    setScheduleDate("");
    settimeInterval("");
  };
  // console.log("SeheduleList", scheduleList);
  const deleteSchedule = (indexToDelete) => {
    const updatedScheduleList = scheduleList.filter(
      (_, index) => index !== indexToDelete
    );
    setScheduleList(updatedScheduleList);
  };

  const AddOTRooms = async () => {
    if (!Name) {
      alert("Please enter OT Room Name");
    } else {
      try {
        const config = {
          url: "/AddOtRooms",
          baseURL: "http://localhost:8521/api/admin",
          method: "post",
          headers: { "content-type": "application/json" },
          data: {
            Name: Name,
          },
        };
        axios(config).then((res) => {
          if (res.status === 200) {
            alert(res.data.success);
            handleClose();
            GetOtRooms();
          }
        });
      } catch (error) {
        console.log(error);
        alert(error.response.data.error);
      }
    }
  };

  const addTimeSlot = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: `/admin/addTimeSlot/${Tdata?._id}`,
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "Content-Type": "application/json" },
        data: {
          scheduleList: scheduleList,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        GetOtRooms();
        alert(res.data.success);
        window.location.reload();
        // setScheduleList("");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  // Get Data
  const [data, setdata] = useState([]);
  const GetOtRooms = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/admin/GetOtRooms");
      if (res.status === 200) {
        setdata(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Data
  const DeleteOtRoom = async (id) => {
    try {
      const config = {
        url: "admin/DeletOtRooms/" + id,
        baseURL: "http://localhost:8521/api",
        method: "delete",
        headers: { "content-type": "application-json" },
      };
      await axios(config).then((res) => {
        if (res.status === 200) {
          alert(res.data.success);
          GetOtRooms();
        }
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const DeleteOtRoomSlots = async (RoomId, slotId) => {
    try {
      const config = {
        url: "admin/DeleteOtRoomSlots/" + RoomId + "/" + slotId,
        baseURL: "http://localhost:8521/api",
        method: "delete",
        headers: { "content-type": "application-json" },
      };
      await axios(config).then((res) => {
        if (res.status === 200) {
          alert(res.data.success);
          GetOtRooms();
          window.location.reload();
        }
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    GetOtRooms();
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
            OT Rooms
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AiOutlinePlusCircle
              className="AddIcon1"
              onClick={() => setShow(true)}
            />
          </div>
        </div>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.No</th>
              <th>Name</th>
              <th>Add Time Slots</th>
              <th>View Time Slots</th>
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
                          <td>{item?.Name}</td>
                          <td>
                            <BsFillCalendar2PlusFill
                              style={{
                                color: "#20958c",
                                fontSize: "24px",
                                cursor: "pointer",
                              }}
                              onClick={() => handleShow1(item)}
                            />
                          </td>
                          <td>
                            <button
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                                color: "#20958c",
                              }}
                            >
                              <i class="fas fa-eye"></i>
                            </button>
                          </td>
                          <td>
                            <div className="d-flex gap-5 fs-5">
                              <AiFillDelete
                                onClick={() => DeleteOtRoom(item?._id)}
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
                          <td>{item?.Name}</td>
                          <td>
                            <BsFillCalendar2PlusFill
                              style={{
                                color: "#20958c",
                                fontSize: "24px",
                                cursor: "pointer",
                              }}
                              onClick={() => handleShow1(item)}
                            />
                          </td>
                          <td>
                            <button
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                                color: "#20958c",
                              }}
                              onClick={() => handleShow2(item)}
                            >
                              <i class="fas fa-eye"></i>
                            </button>
                          </td>
                          <td>
                            <div className="d-flex gap-5 fs-5">
                              <AiFillDelete
                                onClick={() => DeleteOtRoom(item?._id)}
                                style={{ color: "red" }}
                              />
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
      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add OT Rooms </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <input
                placeholder="OT Room Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cancel
            </Button>
            <Button variant="warning" onClick={AddOTRooms}>
              Add
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={show1} onHide={handleClose1}>
        <Modal.Header>
          <Modal.Title>Add Time Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ padding: "10px", backgroundColor: "white" }}>
            <Table bordered>
              <thead>
                <tr>
                  <th> Date </th>
                  <th> Start Time </th>
                  <th> End Time </th>
                  <th> Action </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Group className="mb-3">
                      <Form.Control
                        onChange={(e) => setScheduleDate(e.target.value)}
                        className="vi_0"
                        type="date"
                        value={scheduleDate}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group className="mb-3">
                      <Form.Select
                        value={startTime}
                        className="vi_0"
                        onChange={(e) => setStartTime(e.target.value)}
                      >
                        <option value="">Select Time</option>
                        {allTimes?.map((item) => {
                          return (
                            <option value={item?.settime}>
                              {item?.settime}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group className="mb-3">
                      <Form.Select
                        value={endTime}
                        className="vi_0"
                        onChange={(e) => setEndTime(e.target.value)}
                      >
                        <option value="">Select Time</option>
                        {allTimes?.map((item) => {
                          return (
                            <option value={item?.settime}>
                              {item?.settime}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>
                  </td>
                  <td>
                    <Button onClick={AddSchedule}>Add</Button>
                  </td>
                </tr>
                {scheduleList?.map((item, i) => {
                  return (
                    <tr>
                      <td>{item?.scheduleDate}</td>
                      <td>{item?.startTime}</td>
                      <td>{item?.endTime}</td>
                      <td>
                        <MdDelete
                          onClick={() => deleteSchedule(i)}
                          style={{ color: "red" }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: "flex" }}>
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                borderRadius: "4px",
                fontWeight: "600",
                marginRight: "20px",
                border: "1px solid white",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow1(false);
              }}
            >
              CANCEL
            </button>

            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                borderRadius: "4px",
                border: "1px solid white",
                fontWeight: "600",
                padding: "4px 10px",
              }}
              onClick={(e) => {
                addTimeSlot(e);
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={show2} onHide={handleClose2}>
        <Modal.Header>
          <Modal.Title>OT Time Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table style={{ backgroundColor: "white" }} bordered>
            <thead>
              <tr>
                <th>Date</th>
                <th>Start Time </th>
                <th>End Time</th>
                <th>Schedule</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Tdata?.scheduleList?.map((item, i) => {
                return (
                  <tr>
                    <td>{item?.scheduleDate}</td>
                    <td>{item?.startTime}</td>
                    <td>{item?.endTime}</td>
                    <td>
                      {item?.bookingstatus === "Vacant" ? (
                        <>
                          <b style={{ color: "green" }}>
                            {item?.bookingstatus}
                          </b>
                        </>
                      ) : (
                        <>
                          <b style={{ color: "red", fontSize: "20px" }}>
                            {item?.bookingstatus}
                          </b>
                        </>
                      )}
                    </td>
                    <td>
                      <MdDelete
                        style={{ color: "red" }}
                        onClick={() => DeleteOtRoomSlots(Tdata?._id, item?._id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
