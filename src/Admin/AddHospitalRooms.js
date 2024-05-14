import React, { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit, MdOutlineBedroomParent } from "react-icons/md";
import { FaBed, FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { TbBed, TbBedOff } from "react-icons/tb";
import { IoIosAddCircle, IoMdAddCircle } from "react-icons/io";
import axios from "axios";

export default function AddHospitalRooms() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  // subward modal
  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  // add room
  const [roomno, setroomno] = useState("");
  const [roomType, setroomType] = useState("");
  const [floor, setfloor] = useState("");
  const [noOfBeds, setnoOfBeds] = useState("");
  const [bedCost, setbedCost] = useState("");
  const [roomList, setroomList] = useState([]);
  const [subroomList, setsubroomList] = useState([]);
  const [View, setView] = useState({});
  const [roomStatus, setroomStatus] = useState(false);
  const [roomTypeList, setroomTypeList] = useState([]);
  const [wardid, setwardid] = useState("");
  const [subwardname, setsubwardname] = useState("");

  const [wardroomid, setwardroomid] = useState("");
  const [subwardroomid, setsubwardroomid] = useState("");

  const addRoom = (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/admin/addRoom",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          roomno: roomno,
          roomType: wardroomid,
          subroomType: subwardroomid,
          floor: floor,
          noOfBeds: noOfBeds,
          bedCost: bedCost,
        },
      };
      axios(config)
        .then((res) => {
          if (res.status === 201) {
            alert(res.data.success);
            setroomno("");
            setroomType("");
            setfloor("");
            setnoOfBeds("");
            setbedCost("");
            setwardroomid("");
            setsubwardroomid("");
            handleClose();
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  // get rooms details
  const getAllRooms = async () => {
    try {
      const allRooms = await axios.get(
        "http://localhost:8521/api/admin/getAllRooms"
      );
      if (allRooms.status === 200) {
        setroomList(allRooms.data.roomsList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // edit bed information
  const addBedInfor = (data) => {
    try {
      const config = {
        url: `/admin/editBedInfo/${View?._id}`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          noOfBeds: noOfBeds,
          bedCost: bedCost,
          bedStatus: data,
          roomStatus: roomStatus ? "available" : "unavailable",
        },
      };
      axios(config)
        .then((res) => {
          if (res.status === 200) {
            alert(res.data.success);
            setnoOfBeds("");
            setbedCost("");
            handleClose2();
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addRoomType = (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/admin/addRoomType",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          roomType: roomType,
        },
      };
      axios(config)
        .then((res) => {
          if (res.status === 201) {
            alert(res.data.success);
            setroomType("");
            handleClose3();
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addsubRoomType = (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/admin/addsubRoomType",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          roomTypeid: wardid,
          subroomType: subwardname,
        },
      };
      axios(config)
        .then((res) => {
          if (res.status === 201) {
            alert(res.data.success);
            setroomType("");
            handleClose4();
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // get rooms details
  const getAllRoomsTypes = async () => {
    try {
      const RoomDataList = await axios.get(
        "http://localhost:8521/api/admin/getAllRoomType"
      );
      if (RoomDataList.status === 200) {
        setroomTypeList(RoomDataList.data.roomTypeList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // get rooms details
  const getAllsubRoomsTypes = async () => {
    try {
      const subRoomDataList = await axios.get(
        "http://localhost:8521/api/admin/getAllsubRoomType"
      );
      if (subRoomDataList.status === 200) {
        setsubroomList(subRoomDataList.data.subroomTypeList);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllRooms();
    getAllRoomsTypes();
    getAllsubRoomsTypes();
  }, []);

  // console.log("fdd: ", roomList);

  return (
    <div>
      <div style={{ padding: "1%" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Add Hospitals Rooms
        </h6>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <input
            placeholder="Search Rooms"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MdOutlineBedroomParent
              className="AddIcon1"
              onClick={() => setShow(true)}
            />
          </div>

          <div>
            <button
              style={{
                backgroundColor: "#20958c",
                color: "white",
                border: "none",
                fontSize: "12px",
                borderRadius: "4px",
                marginLeft: "4px",
              }}
              onClick={() => handleShow3()}
            >
              Add Ward
            </button>

            <button
              style={{
                backgroundColor: "#20958c",
                color: "white",
                border: "none",
                fontSize: "12px",
                borderRadius: "4px",
                marginLeft: "4px",
              }}
              onClick={() => handleShow4()}
            >
              Add Subward
            </button>

            <button
              style={{
                backgroundColor: "#20958c",
                color: "white",
                border: "none",
                fontSize: "12px",
                borderRadius: "4px",
                marginLeft: "4px",
              }}
            >
              EXPORT <AiFillFileExcel />
            </button>
          </div>
        </div>

        <Modal size="md" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Rooms </Modal.Title>
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
                  onChange={(event) => setwardroomid(event.target.value)}
                >
                  <option value="">Select Ward</option>
                  {roomTypeList?.map((item) => {
                    return <option value={item?._id}>{item?.roomType}</option>;
                  })}
                </select>
              </div>

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
                  onChange={(event) => setsubwardroomid(event.target.value)}
                >
                  <option value="">Select Sub ward</option>
                  {subroomList
                    ?.filter((val) => val.roomTypeid._id === wardroomid)
                    ?.map((item) => {
                      return (
                        <option value={item?._id}>{item?.subroomType}</option>
                      );
                    })}
                </select>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Room Number"
                  value={roomno}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(event) => setroomno(event.target.value)}
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Floor"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={floor}
                  onChange={(event) => setfloor(event.target.value)}
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Number of beds"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={noOfBeds}
                  onChange={(event) => setnoOfBeds(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-12">
                <input
                  placeholder="Each bed cost"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={bedCost}
                  onChange={(event) => setbedCost(event.target.value)}
                ></input>
              </div>

              {/* <div className="col-lg-12">
                <label
                  style={{
                    marginTop: "3%",
                    marginLeft: "4%",
                  }}
                >
                  Room Image
                </label>
                <input
                  type="file"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div> */}
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
                  marginRight: "20px",
                  padding: "4px 10px",
                  border: "1px solid white",
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
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={(e) => {
                  setShow(false);
                  addRoom(e);
                  // alert("Room Added");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Edit Rooms </Modal.Title>
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
                  <option>Select Room Type</option>
                  <option>4-Beds</option>
                  <option>3-Beds</option>
                  <option>2-Beds</option>
                  <option>1-Beds</option>
                  <option>Special Rooms</option>
                </select>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Number of Rooms"
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
                  placeholder="Price Per Room"
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
                <label
                  style={{
                    marginTop: "3%",
                    marginLeft: "4%",
                  }}
                >
                  Room Image
                </label>
                <input
                  type="file"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
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
                  marginRight: "20px",
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => setShow1(false)}
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
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => {
                  setShow1(false);
                  alert("Rooms updated");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Add Beds </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <input
                  placeholder="Number of Beds"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={noOfBeds}
                  onChange={(event) => setnoOfBeds(event.target.value)}
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Price Per Bed"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={bedCost}
                  onChange={(event) => setbedCost(event.target.value)}
                ></input>
              </div>
              {View?.roomStatus === "unavailable" ? (
                <div className="col-lg-6 mt-2">
                  <input
                    className="mr-2"
                    type="checkbox"
                    checked={roomStatus}
                    onChange={(e) => setroomStatus(e.target.checked)}
                  ></input>
                  <span
                    style={{
                      color: "white",
                    }}
                  >
                    Room Available
                  </span>
                </div>
              ) : (
                <></>
              )}
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
                  marginRight: "20px",
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => setShow2(false)}
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
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => {
                  addBedInfor("ADD");
                }}
              >
                ADD
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show3} onHide={handleClose3}>
          <Modal.Header>
            <Modal.Title>Add Ward </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-lg-12">
              <input
                placeholder="Room Type"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                value={roomType}
                onChange={(event) => setroomType(event.target.value)}
              ></input>
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
                  marginRight: "20px",
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => setShow3(false)}
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
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={(e) => {
                  addRoomType(e);
                }}
              >
                ADD
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show4} onHide={handleClose4}>
          <Modal.Header>
            <Modal.Title>Add Sub ward </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-lg-12">
              {/* <input
                placeholder="Room Type"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                value={roomType}
                onChange={(event) => setroomType(event.target.value)}
              ></input> */}
              <select
                className="subward-select"
                onChange={(e) => setwardid(e.target.value)}
              >
                <option>Select One ward</option>
                {roomTypeList?.map((item) => {
                  return <option value={item?._id}>{item?.roomType}</option>;
                })}
              </select>

              <input
                placeholder="Sub ward Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                value={subwardname}
                onChange={(event) => setsubwardname(event.target.value)}
              ></input>
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
                  marginRight: "20px",
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => setShow3(false)}
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
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={(e) => {
                  addsubRoomType(e);
                }}
              >
                ADD
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Ward</th>
              <th>SubWard</th>
              <th>Room Number</th>

              <th>Floor</th>
              <th>Total Beds</th>

              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {roomList?.map((roomDetails) => (
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                <td>{roomDetails?.roomType?.roomType}</td>
                <td>{roomDetails?.subroomType?.subroomType}</td>
                <td>{roomDetails?.roomno}</td>
                <td>{roomDetails?.floor}</td>
                <td>
                  {/* <h6>
                  <FaBed style={{ color: "grey", fontSize: "25px" }} />
                </h6> */}

                  <h6>Total Beds : {roomDetails?.bedsinfo?.length}</h6>
                  <h6>
                    <TbBed style={{ color: "green", fontSize: "25px" }} /> :{" "}
                    {
                      roomDetails?.bedsinfo?.filter(
                        (data) => data.bedOccupied === "available"
                      )?.length
                    }
                    &nbsp;&nbsp;{" "}
                    <TbBedOff style={{ color: "red", fontSize: "25px" }} /> :{" "}
                    {
                      roomDetails?.bedsinfo?.filter(
                        (data) => data.bedOccupied !== "available"
                      )?.length
                    }
                  </h6>
                  <button
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "none",
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      setView(roomDetails);
                      setShow2(true);
                    }}
                  >
                    ADD BED{" "}
                    <IoMdAddCircle
                      style={{ color: "white", fontSize: "20px" }}
                    />
                  </button>
                </td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <MdEdit
                      style={{ color: "#20958c", marginRight: "1%" }}
                      onClick={() => setShow1(true)}
                    />
                    <AiFillDelete style={{ color: "red" }} />

                    {roomDetails?.roomStatus === "available" ? (
                      <button
                        style={{
                          fontSize: "12px",
                          border: "none",
                          backgroundColor: "green",
                          color: "white",
                          fontWeight: "600",
                          borderRadius: "4px",
                        }}
                      >
                        AVAILABLE
                      </button>
                    ) : (
                      <button
                        style={{
                          fontSize: "12px",
                          border: "none",
                          backgroundColor: "red",
                          color: "white",
                          fontWeight: "600",
                          borderRadius: "4px",
                        }}
                      >
                        UNAVAILABLE
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
