import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import {
  AiFillDelete,
  AiOutlineFastBackward,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import {
  BsFillEyeFill,
  BsFillImageFill,
  BsImages,
  BsNewspaper,
} from "react-icons/bs";
import { MdEdit, MdEmojiEvents } from "react-icons/md";
import {
  FaBed,
  FaBlog,
  FaBuilding,
  FaEye,
  FaUserMd,
  FaWpforms,
} from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";

import { ImLab } from "react-icons/im";
import { IoBedSharp } from "react-icons/io";

import {
  RiGalleryFill,
  RiHospitalFill,
  RiPresentationFill,
} from "react-icons/ri";

import { IoMdAdd, IoMdImages, IoMdPersonAdd } from "react-icons/io";
import { GrCircleInformation, GrGallery } from "react-icons/gr";
import AddBanner from "./Addbanners";
import AddAboutUS from "./AddAboutUS";
import AddLatestNews from "./AddLatestNews";
import Addgallery from "./Addgallery";
import Addblog from "./Addblog";
import Addevents from "./Addevents";
import Subadmin from "./Subadmin";
import { StaffAttendance } from "./StaffAttendance";
import Inpatientlist from "./Inpatientlist";
import { Outlet } from "react-router-dom";
import Outpatientlist from "./Outpatientlist";
import axios from "axios";
import { FaPen } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Bedmanagement() {
  const [show99, setShow99] = useState(false);
  const handleClose99 = () => setShow99(false);
  const handleShow99 = () => setShow99(true);

  const [showUpdateWardModal, setshowUpdateWardModal] = useState(false);
  const handleCloseUpdateWardModal = () => setshowUpdateWardModal(false);
  const handleshowUpdateWardModal = () => setshowUpdateWardModal(true);

  const [showDeleteWardModal, setshowDeleteWardModal] = useState(false);
  const handleCloseDeleteWardModal = () => setshowDeleteWardModal(false);
  const handleshowDeleteWardModal = () => setshowDeleteWardModal(true);

  const [showupdateBuildingModal, setshowupdateBuildingModal] = useState(false);
  const handleCloseupdateBuildingModal = () =>
    setshowupdateBuildingModal(false);
  const handleshowupdateBuildingModal = () => setshowupdateBuildingModal(true);

  const [showDeleteBuildingModal, setshowDeleteBuildingModal] = useState(false);
  const handleCloseDeleteBuildingModal = () =>
    setshowDeleteBuildingModal(false);
  const handleshowDeleteBuildingModal = () => setshowDeleteBuildingModal(true);

  const [allBedList99, setallBedList99] = useState([]);
  const [addBedInput, setaddBedInput] = useState(false);
  const [updateBedCostInput, setupdateBedCostInput] = useState(false);

  const [BedDetails98, setBedDetails98] = useState({});
  const [show98, setShow98] = useState(false);
  const handleClose98 = () => setShow98(false);
  const handleShow98 = () => setShow98(true);

  const [show96, setShow96] = useState(false);
  const handleClose96 = () => setShow96(false);
  const handleShow96 = () => setShow96(true);

  const [show97, setShow97] = useState(false);
  const handleClose97 = () => setShow97(false);
  const handleShow97 = () => setShow97(true);
  const [individualPatient, setindividualPatient] = useState({});
  // let individualPatient = {};
  function CheckShow97() {
    const details = IPDPatients.find(
      (obj) => obj._id.toString() === BedDetails98?.patientId?.toString()
    );
    console.log("details2222@: ", details);
    setindividualPatient({ ...details });
    // individualPatient = { ...details };
  }

  const [AddBuildingModal, setAddBuildingModal] = useState(false);
  const [AddFloorModal, setAddFloorModal] = useState(false);
  const [AddRoomModal, setAddRoomModal] = useState(false);
  const [CheckAvailability, setCheckAvailability] = useState(false);

  const handleCloseBuildingModal = () => setAddBuildingModal(false);
  const handleShowBuildingModal = () => setAddBuildingModal(true);

  const handleCloseAddFloorModal = () => setAddFloorModal(false);
  const handleShowAddFloorModal = () => setAddFloorModal(true);

  const handleCloseAddRoomModal = () => setAddRoomModal(false);
  const handleShowAddRoomModal = () => setAddRoomModal(true);

  const handleCloseCheckAvailability = () => setCheckAvailability(false);
  const handleShowCheckAvailability = () => setCheckAvailability(true);

  const [ViewModal, setViewModal] = useState();
  const [View, setView] = useState(false);
  const [ViewFloors, setViewFloors] = useState(false);

  const [ViewRooms, setViewRooms] = useState(false);
  const [ViewBeds, setViewBeds] = useState(false);
  const [ViewBedsStatus, setViewBedsStatus] = useState();
  const [SelectedbedInfo, setSelectedbedInfo] = useState();

  console.log(ViewBedsStatus, "bedstatus");
  console.log(SelectedbedInfo, "SelectedbedInfo");

  const [SelectedBuildingId, setSelectedBuildingId] = useState();
  const [SelectedFloorId, setSelectedFloorId] = useState();
  const [SelectedRoomType, setSelectedRoomType] = useState();
  const [SelectedSubRoomType, setSelectedSubRoomType] = useState();
  const [deleteBedInfoModal, setdeleteBedInfoModal] = useState(false);

  console.log("SelectedFloorId: ", SelectedFloorId);

  const [RoomNo, setRoomNo] = useState();
  const [NoOfBeds, setNoOfBeds] = useState();
  const [bedCostInsurance, setbedCostInsurance] = useState();
  const [bedCostNonInsurance, setbedCostNonInsurance] = useState();

  const SetBuildingId = (item) => {
    setSelectedBuildingId(item?._id);
    setAddFloorModal(true);
  };

  const SetBuildingId1 = (item) => {
    setSelectedBuildingId(item?._id);
    handleShowAddRoomModal();
  };
  const [CauseBillHospitalService, setCauseBillHospitalService] = useState();
  const [causeBillBuildingid, setcauseBillBuildingid] = useState();
  const CheckAvailabity = (item) => {
    setCauseBillHospitalService(item?.buildingName);
    setcauseBillBuildingid(item?._id);
    setCheckAvailability(true);
    setSelectedBuildingId(item?._id);
  };

  const [buildingName, setbuildingName] = useState();
  const [FloorName, setFloorName] = useState();

  const Addbuilding = async (e) => {
    e.preventDefault();

    try {
      const config = {
        url: "/admin/addBuilding",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          buildingName: buildingName,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getBuildingList();
        alert("Building Added");
        setAddBuildingModal(false);
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [IPDPatients, setIPDPatients] = useState([]);
  const [updatedIPDPatients, setupdatedIPDPatients] = useState([]);
  const [selectedIPDObj, setselectedIPDObj] = useState({});
  const handleselectedIPDChange = (event, value) => {
    setselectedIPDObj(value);
    // Do something with the selected medicine value
  };
  const getPatients = () => {
    axios
      .get("http://localhost:8521/api/user/getPatientList")
      .then(function (response) {
        // handle success
        setIPDPatients(
          response.data.UsersInfo?.filter(
            (val) => val?.registrationType === "IPD"
          )
        );
        const newArr = [
          ...response.data.UsersInfo?.filter(
            (val) => val?.registrationType === "IPD"
          )?.map((val) => {
            return { ...val, label: `${val.PatientId} ${val.Firstname}` };
          }),
        ];
        setupdatedIPDPatients(newArr);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const [BuildingList, setBuildingList] = useState([]);

  const getBuildingList = () => {
    axios
      .get("http://localhost:8521/api/admin/getBuildingList")
      .then(function (response) {
        // handle success
        setBuildingList(response.data.buildinglist);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const [FloorList, setFloorList] = useState([]);

  const getFloorList = () => {
    axios
      .get(
        "http://localhost:8521/api/admin/getFloorsList/" + SelectedBuildingId
      )
      .then(function (response) {
        // handle success
        setFloorList(response.data.buildinglist);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  console.log("floorlistAAA: ", FloorList);
  useEffect(() => {
    getPatients();
  }, []);
  useEffect(() => {
    getFloorList();
  }, [SelectedBuildingId]);

  const [AllRoomTypeList, setAllRoomTypeList] = useState([]);

  const getAllRoomTypeList = () => {
    axios
      .get("http://localhost:8521/api/admin/getAllRoomType")
      .then(function (response) {
        // handle success
        setAllRoomTypeList(response.data.roomTypeList);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const [AllsubRoomTypeList, setAllsubRoomTypeList] = useState([]);

  const getAllsubRoomTypeList = () => {
    axios
      .get("http://localhost:8521/api/admin/getAllsubRoomType")
      .then(function (response) {
        // handle success
        setAllsubRoomTypeList(response.data.subroomTypeList);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const Addfloor = async (e) => {
    e.preventDefault();
    // if (!patientfirstname | !patientlastname | !conpassword | !gender | !DOB | !) {
    //   alert("Please Fill All The Field");
    // } else if (password !== conpassword) {
    //   alert("Password and ConfirmPassword should be same");
    // } else {
    try {
      const config = {
        url: "/admin/addFloor",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          buildingid: SelectedBuildingId,
          floorName: FloorName,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        // getBuildingList();
        getFloorList();
        alert("Floor Added");
        handleCloseAddFloorModal();
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  // This is like adding the bed cost in the billing
  const [IpdCause, setIpdCause] = useState({});
  const addcauseBill = async () => {
    console.log("abasfasfdafsdfdsafsafdasd: ", IpdCause);
    // if (!patientfirstname | !patientlastname | !conpassword | !gender | !DOB | !) {
    //   alert("Please Fill All The Field");
    // } else if (password !== conpassword) {
    //   alert("Password and ConfirmPassword should be same");
    // } else {
    try {
      const config = {
        url: "/user/addHospitalUsedServices/" + selectedIPDObj?._id,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          causeid: JSON.parse(IpdCause)?._id,
          hospitalServices: `Bed ${BedDetails98?.bedName} ${allBedList99?.roomno} ${CauseBillHospitalService}`,
          quantity: 1,
          hospitalServicesAmt: selectedIPDObj?.haveInsurance
            ? BedDetails98?.bedCostInsurance
            : BedDetails98?.bedCostNonInsurance,
          amtStatus: "UNPAID",
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert("Patient assigned");
        getBuildingList();
        handleCloseAddFloorModal();
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const AddRooms_Beds = async (e) => {
    e.preventDefault();

    try {
      const config = {
        url: "/admin/addRooms",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          buildingid: SelectedBuildingId,
          floorid: SelectedFloorId,
          roomno: RoomNo,
          roomType: SelectedRoomType,
          noOfBeds: NoOfBeds,
          bedCostInsurance: bedCostInsurance,
          bedCostNonInsurance: bedCostNonInsurance,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        window.location.reload(true);
        setAddRoomModal(false);
        alert("Room & beds Added");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };
  const [FlooridAssignBed, setFlooridAssignBed] = useState("");
  // edit bed information
  const assignBedToPatient = () => {
    try {
      const config = {
        url: `/admin/editBed`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          buildingid: causeBillBuildingid,
          floorid: FlooridAssignBed,
          roomid: allBedList99?._id,
          bedid: BedDetails98?._id,
          patientId: selectedIPDObj?._id,
        },
      };
      axios(config)
        .then((res) => {
          if (res.status === 200) {
            addcauseBill();
            alert("Bed is assigned to the patient");
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteBedInfo = () => {
    try {
      const config = {
        url: `/admin/remBedsfromRoom`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          buildingid: causeBillBuildingid,
          floorid: FlooridAssignBed,
          roomid: allBedList99?._id,
          bedid: BedDetails98?._id,
        },
      };
      axios(config)
        .then((res) => {
          if (res.status === 200) {
            // addcauseBill();
            setdeleteBedInfoModal(false);
            handleClose99();
            handleClose98();
            getFloorList();
            alert("Deleted the bed Information");
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // maintainance or available
  // const [bedstatusData, setbedstatusData] = useState("");
  const ChangeBedStatus = (bedstatusData) => {
    try {
      const config = {
        url: `/admin/ChangeBedStatus`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          buildingid: causeBillBuildingid,
          floorid: FlooridAssignBed,
          roomid: allBedList99?._id,
          bedid: BedDetails98?._id,
          bedstatus: bedstatusData,
        },
      };
      axios(config)
        .then((res) => {
          if (res.status === 200) {
            // addcauseBill();
            handleClose98();
            handleClose99();
            getFloorList();
            alert("Updated the bed status");
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [addBednoForRoom, setaddBednoForRoom] = useState(0);
  const [addBedInsForRoom, setaddBedInsForRoom] = useState(0);
  const [addBednonInsForRoom, setaddBednonInsForRoom] = useState(0);
  const addBedsToTheRoom = () => {
    try {
      const config = {
        url: `/admin/addBedsInRoom`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          buildingid: causeBillBuildingid,
          floorid: FlooridAssignBed,
          roomid: allBedList99?._id,
          noOfBeds: addBednoForRoom,
          bedCostInsurance: addBedInsForRoom,
          bedCostNonInsurance: addBednonInsForRoom,
        },
      };
      axios(config)
        .then((res) => {
          if (res.status === 200) {
            // addcauseBill();
            setaddBednoForRoom(0);
            setaddBedInsForRoom(0);
            setaddBednonInsForRoom(0);
            handleClose98();
            handleClose99();
            getFloorList();
            alert("Added the beds successfully...");
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [updateBedInsForRoom, setupdateBedInsForRoom] = useState(0);
  const [updateBednonInsForRoom, setupdateBednonInsForRoom] = useState(0);
  const updateCostOfEachBed = () => {
    try {
      const config = {
        url: `/admin/updateCostOfEachBed`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          buildingid: causeBillBuildingid,
          floorid: FlooridAssignBed,
          roomid: allBedList99?._id,
          bedCostInsurance: updateBedInsForRoom,
          bedCostNonInsurance: updateBednonInsForRoom,
        },
      };
      axios(config)
        .then((res) => {
          if (res.status === 200) {
            // addcauseBill();
            setupdateBedInsForRoom(0);
            setupdateBednonInsForRoom(0);
            handleClose98();
            handleClose99();
            getFloorList();
            alert(res.data.success);
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [updatedWardno, setupdatedWardno] = useState("");
  const [updatedWard, setupdatedWard] = useState("");
  const updateWardInfo = () => {
    try {
      const config = {
        url: `/admin/updateWardInfo`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          buildingid: causeBillBuildingid,
          floorid: FlooridAssignBed,
          roomid: allBedList99?._id,
          roomno: updatedWardno,
          roomType: updatedWard,
        },
      };
      axios(config)
        .then((res) => {
          if (res.status === 200) {
            // addcauseBill();
            setupdatedWardno();
            setupdatedWard();
            handleCloseUpdateWardModal();
            handleClose99();
            getFloorList();
            alert(res.data.success);
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWardInfo = () => {
    try {
      const config = {
        url: `/admin/deleteWardInfo`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          buildingid: causeBillBuildingid,
          floorid: FlooridAssignBed,
          roomid: allBedList99?._id,
        },
      };
      axios(config)
        .then((res) => {
          if (res.status === 200) {
            handleCloseDeleteWardModal();
            handleClose99();
            getFloorList();
            alert(res.data.success);
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [updatedBuildingName, setupdatedBuildingName] = useState("");
  const updateBuildingInfo = () => {
    try {
      const config = {
        url: `/admin/editBuilding`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          buildingid: causeBillBuildingid,
          buildingName: updatedBuildingName,
        },
      };
      axios(config)
        .then((res) => {
          if (res.status === 200) {
            setupdatedBuildingName("");
            handleCloseupdateBuildingModal();
            handleCloseCheckAvailability();
            getBuildingList();
            alert(res.data.success);
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBuildingInfo = () => {
    try {
      const config = {
        url: `/admin/deleteBuilding`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          buildingid: causeBillBuildingid,
        },
      };
      axios(config)
        .then((res) => {
          if (res.status === 200) {
            handleCloseDeleteBuildingModal();
            handleCloseCheckAvailability();
            getBuildingList();
            alert(res.data.success);
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
          handleCloseDeleteBuildingModal();
        });
    } catch (error) {
      console.log(error);
      handleCloseDeleteBuildingModal();
    }
  };

  useEffect(() => {
    getBuildingList();
    getAllRoomTypeList();
    getAllsubRoomTypeList();
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
          <h6
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "grey",
            }}
          >
            BED MANAGEMENT
          </h6>
          <div style={{ justifyContent: "space-around" }}>
            <button
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "white",
                backgroundColor: "#20958c",
                border: "none",
                borderRadius: "0px",
                marginRight: "10px",
                height: "39px",
                width: "121px",
              }}
              onClick={() => setAddBuildingModal(true)}
            >
              + ADD BUILDING
            </button>

            {/* <button
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "white",
                backgroundColor: "#20958c",
                border: "none",
                borderRadius: "0px",
              }}
              onClick={() => setShow1(true)}
            >
              ADD FLOOR
            </button> */}
          </div>
        </div>
        {View ? (
          ViewModal
        ) : (
          <div className="row">
            {BuildingList?.map((item) => {
              return (
                <div className="col-lg-6">
                  <div
                    className="websiteMcards"
                    // onClick={() => {
                    //   setViewModal(<Subadmin />);
                    //   setView(true);
                    // }}
                  >
                    <FaBuilding className="WebMI" />
                    {item?.buildingName}
                    <div className="row" style={{ marginTop: "2%" }}>
                      <div
                        className="col-lg-3"
                        style={{ padding: "10px", border: "1px solid white" }}
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <button
                              style={{
                                fontSize: "14px",
                                fontWeight: "bold",
                                width: "100%",
                              }}
                              onClick={() => SetBuildingId(item)}
                            >
                              + Floor
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-3"
                        style={{ padding: "10px", border: "1px solid white" }}
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <button
                              style={{
                                fontSize: "14px",
                                fontWeight: "bold",
                                width: "100%",
                              }}
                              onClick={() => SetBuildingId1(item)}
                            >
                              + Room
                            </button>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-lg-6"
                        style={{ padding: "10px", border: "1px solid white" }}
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <button
                              style={{
                                fontSize: "14px",
                                fontWeight: "bold",
                                width: "100%",
                              }}
                              onClick={() => {
                                CheckAvailabity(item);
                              }}
                            >
                              Check Availability
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Modal
        size="md"
        show={AddBuildingModal}
        onHide={handleCloseBuildingModal}
      >
        <Modal.Header>
          <Modal.Title>Add Building </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <input
                placeholder="Enter Building"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setbuildingName(e.target.value)}
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
              onClick={() => setAddBuildingModal(false)}
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
              onClick={(e) => Addbuilding(e)}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal size="md" show={AddFloorModal} onHide={handleCloseAddFloorModal}>
        <Modal.Header>
          <Modal.Title>Add Floors </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <input
                placeholder="Enter Floor Number"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setFloorName(e.target.value)}
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
              onClick={() => handleCloseAddFloorModal()}
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
                Addfloor(e);
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal size="md" show={AddRoomModal} onHide={handleCloseAddRoomModal}>
        <Modal.Header>
          <Modal.Title>Add Room </Modal.Title>
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
                onChange={(e) => setSelectedFloorId(e.target.value)}
              >
                <option> Select Floor</option>
                {FloorList?.map((item) => (
                  <option value={item?._id}> {item?.floorName}</option>
                ))}
              </select>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="Enter Ward Number"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setRoomNo(e.target.value)}
              ></input>
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
                onChange={(e) => setSelectedRoomType(e.target.value)}
              >
                <option> Select Ward</option>
                <option value="GENERAL"> General</option>
                <option value="SPECIAL"> Special</option>
                <option value="ICU"> ICU</option>
              </select>
            </div>

            {/* <div className="col-lg-12">
              <select
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setSelectedSubRoomType(e.target.value)}
              >
                <option> Select Sub RoomType</option>
                {AllsubRoomTypeList?.map((item) => {
                  return (
                    <option value={item?._id}> {item?.subroomType}</option>
                  );
                })}
              </select>
            </div> */}

            <div className="col-lg-12">
              <input
                placeholder="Enter Number of Beds"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setNoOfBeds(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="Enter Bed Cost (insurance patients)"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setbedCostInsurance(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="Enter Bed Cost (Non insurance patients)"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setbedCostNonInsurance(e.target.value)}
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
              onClick={() => setAddRoomModal(false)}
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
                AddRooms_Beds(e);
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        size="lg"
        show={CheckAvailability}
        onHide={handleCloseCheckAvailability}
      >
        <Modal.Header>
          <Modal.Title>Check Availability </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              backgroundColor: "white",
              height: "400px",
              overflow: "hidden",
              overflowY: "scroll",
            }}
          >
            {/* floor list */}
            {FloorList.map((floors) => {
              return (
                <div
                  style={{
                    border: "2px solid black",
                    textAlign: "center",
                    margin: "10px",
                  }}
                >
                  <div
                    style={{ color: "white", backgroundColor: "#20958c" }}
                    onClick={() => setViewFloors(true)}
                  >
                    {floors?.floorName}
                  </div>
                  <div
                    className="row"
                    style={{ display: ViewFloors ? "" : "none" }}
                  >
                    <div
                      style={{
                        margin: "10px",
                        color: "#20958c",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <b>Wards</b>
                    </div>
                    {floors?.Room?.map((item) => {
                      return (
                        <div className="col-lg-6">
                          <div
                            className="websiteMcards"
                            onClick={() => {
                              // setViewFloors(false);
                              setViewRooms(true);
                              setViewBeds(false);
                              setFlooridAssignBed(floors?._id);
                              setSelectedFloorId(item._id);
                              setallBedList99(item);
                              handleShow99();
                            }}
                          >
                            <div className="d-flex justify-content-end">
                              <div>
                                <b>{item?.roomType}</b>
                                <div>
                                  {/* only available beds will show here */}(
                                  {
                                    item?.bedsinfo?.filter(
                                      (data) => data.bedOccupied === "available"
                                    )?.length
                                  }
                                  )
                                </div>
                              </div>
                            </div>
                            <FaBuilding className="WebMI" />
                            {item?.roomno}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            style={{
              fontSize: "12px",
              fontWeight: "600",
              backgroundColor: "#3b71ca",
              color: "white",
              border: "none",
              borderRadius: "0px",
              marginRight: "10px",
              height: "39px",
              width: "121px",
            }}
            onClick={handleshowupdateBuildingModal}
          >
            Update
          </button>
          <button
            style={{
              fontSize: "12px",
              fontWeight: "600",
              backgroundColor: "#dc4c64",
              color: "white",
              border: "none",
              borderRadius: "0px",
              marginRight: "10px",
              height: "39px",
              width: "121px",
            }}
            onClick={handleshowDeleteBuildingModal}
          >
            Delete
          </button>
          <button
            style={{
              fontSize: "12px",
              fontWeight: "600",
              backgroundColor: "white",
              color: "#20958c",
              border: "none",
              borderRadius: "0px",
              marginRight: "10px",
              height: "39px",
              width: "121px",
            }}
            onClick={handleCloseCheckAvailability}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        size="md"
        show={showupdateBuildingModal}
        onHide={handleCloseupdateBuildingModal}
      >
        <Modal.Header>
          <Modal.Title>Update Building Information </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div style={{ color: "white" }}>
              <b>Building Name: </b>
            </div>
            <div>
              <input
                placeholder={CauseBillHospitalService}
                value={updatedBuildingName}
                style={{ width: "100%" }}
                onChange={(e) => setupdatedBuildingName(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            style={{
              fontSize: "12px",
              fontWeight: "600",
              backgroundColor: "#3b71ca",
              color: "white",
              border: "none",
              borderRadius: "0px",
              marginRight: "10px",
              height: "39px",
              width: "121px",
            }}
            onClick={updateBuildingInfo}
          >
            Update
          </button>

          <button
            style={{
              fontSize: "12px",
              fontWeight: "600",
              backgroundColor: "white",
              color: "#20958c",
              border: "none",
              borderRadius: "0px",
              marginRight: "10px",
              height: "39px",
              width: "121px",
            }}
            onClick={handleCloseupdateBuildingModal}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        size="md"
        show={showDeleteBuildingModal}
        onHide={handleCloseDeleteBuildingModal}
      >
        <Modal.Header>
          <Modal.Title>Delete Building Information </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <b style={{ color: "white" }}>
              Are You sure? You want to{" "}
              <span style={{ color: "#dc4c64" }}>delete</span> the information
              of the building?
            </b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            style={{
              fontSize: "12px",
              fontWeight: "600",
              backgroundColor: "#dc4c64",
              color: "white",
              border: "none",
              borderRadius: "0px",
              marginRight: "10px",
              height: "39px",
              width: "121px",
            }}
            onClick={deleteBuildingInfo}
          >
            Delete
          </button>

          <button
            style={{
              fontSize: "12px",
              fontWeight: "600",
              backgroundColor: "white",
              color: "#20958c",
              border: "none",
              borderRadius: "0px",
              marginRight: "10px",
              height: "39px",
              width: "121px",
            }}
            onClick={handleCloseDeleteBuildingModal}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show99}
        size="lg"
        onHide={() => {
          handleClose99();
          setaddBedInput(false);
          setupdateBedCostInput(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Beds list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ color: "White", textAlign: "center" }}>
            <b>
              Ward no: {allBedList99?.roomno} ({allBedList99?.roomType})
            </b>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px",
            }}
          >
            <div style={{ display: "flex", gap: "5px", marginRight: "20px" }}>
              <div
                style={{
                  border: "2px solid white",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  backgroundColor: "#008000",
                }}
              ></div>
              <div style={{ color: "white" }}>
                <b>
                  Available(
                  {
                    allBedList99?.bedsinfo?.filter(
                      (val) => val.bedOccupied === "available"
                      //  ||
                      //   val.bedOccupied === "maintenance"
                    )?.length
                  }
                  )
                </b>
              </div>
            </div>

            <div style={{ display: "flex", gap: "5px", marginRight: "20px" }}>
              <div
                style={{
                  border: "2px solid white",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                }}
              ></div>
              <div style={{ color: "white" }}>
                <b>
                  Unavailable(
                  {
                    allBedList99?.bedsinfo?.filter(
                      (val) => val.bedOccupied === "unavailable"
                    )?.length
                  }
                  )
                </b>
              </div>
            </div>

            <div style={{ display: "flex", gap: "5px", marginRight: "20px" }}>
              <div
                style={{
                  border: "2px solid white",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  backgroundColor: "blue",
                }}
              ></div>
              <div style={{ color: "white" }}>
                <b>
                  Maintenance(
                  {
                    allBedList99?.bedsinfo?.filter(
                      (val) => val.bedOccupied === "maintenance"
                    )?.length
                  }
                  )
                </b>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              margin: "10px",
            }}
          >
            {!updateBedCostInput &&
            allBedList99?.bedsinfo?.filter(
              (val) =>
                val.bedOccupied === "available" ||
                val.bedOccupied === "maintenance"
            )?.length === allBedList99?.bedsinfo?.length ? (
              <Button
                variant="primary"
                style={{ marginRight: "10px" }}
                onClick={() => setupdateBedCostInput(true)}
              >
                Update Bed Cost
              </Button>
            ) : (
              <></>
            )}
            {!addBedInput ? (
              <Button
                variant="primary"
                style={{ marginRight: "10px" }}
                onClick={() => setaddBedInput(true)}
              >
                Add Beds
              </Button>
            ) : (
              <></>
            )}
            {allBedList99?.bedsinfo?.filter(
              (val) =>
                val.bedOccupied === "available" ||
                val.bedOccupied === "maintenance"
            )?.length === allBedList99?.bedsinfo?.length ? (
              <div>
                <Button
                  variant="primary"
                  style={{ marginRight: "10px" }}
                  onClick={() => handleshowUpdateWardModal()}
                >
                  Update Ward
                </Button>
                <Button
                  variant="danger"
                  style={{ marginRight: "10px" }}
                  onClick={() => handleshowDeleteWardModal()}
                >
                  Delete Ward
                </Button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="row text-center"
            style={{
              height: "300px",
              overflow: "hidden",
              overflowY: "scroll",
            }}
          >
            {allBedList99?.bedsinfo?.map((val) => {
              return (
                <div
                  className="col-lg-6 denis-border"
                  style={{ backgroundColor: "white" }}
                  onClick={() => {
                    setBedDetails98(val);
                    if (val?.bedOccupied === "unavailable") {
                      CheckShow97();
                      handleShow97();
                    } else if (
                      val?.bedOccupied === "available" ||
                      val?.bedOccupied === "maintenance"
                    ) {
                      handleShow98();
                    }
                  }}
                >
                  <div className="denis-borders">
                    <FaBed
                      style={{
                        color:
                          val?.bedOccupied === "available"
                            ? "green"
                            : val?.bedOccupied === "unavailable"
                            ? "red"
                            : val?.bedOccupied === "maintenance"
                            ? "blue"
                            : "orange",

                        fontSize: "70px",
                      }}
                    />{" "}
                    <span>
                      <b>{val?.bedName}</b>
                    </span>
                  </div>
                  {/* <span className="col-md-2">{val?.bedCostInsurance}/-</span>

                    <span className="col-md-2">
                      {val?.bedCostNonInsurance}/-
                    </span> */}
                </div>
              );
            })}

            {updateBedCostInput &&
            allBedList99?.bedsinfo?.filter(
              (val) =>
                val.bedOccupied === "available" ||
                val.bedOccupied === "maintenance"
            )?.length === allBedList99?.bedsinfo?.length ? (
              <div
                className="col-md-12"
                style={{
                  backgroundColor: "white",
                  marginTop: "10px",
                  padding: "10px",
                }}
              >
                <div>
                  <b>Update Beds Cost</b>
                </div>
                <Table bordered>
                  <tbody>
                    <tr>
                      {/* <td>
                        <div>
                          <b>
                            <label>Number of Beds Needed</label>
                            <div>
                              <input
                                type="number"
                                placeholder="Number of Beds Needed"
                                style={{ width: "213px", height: "45px" }}
                                onChange={(e) =>
                                  setaddBednoForRoom(e.target.value)
                                }
                              ></input>
                            </div>
                          </b>
                        </div>
                      </td> */}

                      <td>
                        <div>
                          <b>
                            <label>Bed cost(Insurance)</label>
                            <div>
                              <input
                                type="number"
                                placeholder="Bed cost(Insurance)"
                                style={{ width: "213px", height: "45px" }}
                                onChange={(e) =>
                                  setupdateBedInsForRoom(e.target.value)
                                }
                              ></input>
                            </div>
                          </b>
                        </div>
                      </td>

                      <td>
                        <div>
                          <b>
                            <label>Bed cost(Non-Insurance)</label>
                            <div>
                              <input
                                type="number"
                                placeholder="Bed cost(Non-Insurance)"
                                style={{ width: "213px", height: "45px" }}
                                onChange={(e) =>
                                  setupdateBednonInsForRoom(e.target.value)
                                }
                              ></input>
                            </div>
                          </b>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            ) : (
              <></>
            )}

            {addBedInput ? (
              <div
                className="col-md-12"
                style={{
                  backgroundColor: "white",
                  marginTop: "10px",
                  padding: "10px",
                }}
              >
                <div>
                  <b>Add Beds</b>
                </div>
                <Table bordered>
                  <tbody>
                    <tr>
                      <td>
                        <div>
                          <b>
                            <label>Number of Beds Needed</label>
                            <div>
                              <input
                                type="number"
                                placeholder="Number of Beds Needed"
                                style={{ width: "213px", height: "45px" }}
                                onChange={(e) =>
                                  setaddBednoForRoom(e.target.value)
                                }
                              ></input>
                            </div>
                          </b>
                        </div>
                      </td>
                      {!allBedList99?.bedsinfo?.length ? (
                        <td>
                          <div>
                            <b>
                              <label>Bed cost(Insurance)</label>
                              <div>
                                <input
                                  type="number"
                                  placeholder="Bed cost(Insurance)"
                                  style={{ width: "213px", height: "45px" }}
                                  onChange={(e) =>
                                    setaddBedInsForRoom(e.target.value)
                                  }
                                ></input>
                              </div>
                            </b>
                          </div>
                        </td>
                      ) : (
                        <></>
                      )}
                      {!allBedList99?.bedsinfo?.length ? (
                        <td>
                          <div>
                            <b>
                              <label>Bed cost(Non-Insurance)</label>
                              <div>
                                <input
                                  type="number"
                                  placeholder="Bed cost(Non-Insurance)"
                                  style={{ width: "213px", height: "45px" }}
                                  onChange={(e) =>
                                    setaddBednonInsForRoom(e.target.value)
                                  }
                                ></input>
                              </div>
                            </b>
                          </div>
                        </td>
                      ) : (
                        <></>
                      )}
                    </tr>
                  </tbody>
                </Table>
              </div>
            ) : (
              <></>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose99();
              setaddBedInput(false);
              setupdateBedCostInput(false);
            }}
          >
            Close
          </Button>
          {addBedInput ? (
            <Button variant="primary" onClick={addBedsToTheRoom}>
              Add Beds
            </Button>
          ) : (
            <></>
          )}

          {updateBedCostInput &&
          allBedList99?.bedsinfo?.filter(
            (val) =>
              val.bedOccupied === "available" ||
              val.bedOccupied === "maintenance"
          )?.length === allBedList99?.bedsinfo?.length ? (
            <Button variant="primary" onClick={updateCostOfEachBed}>
              Update Bed Cost
            </Button>
          ) : (
            <></>
          )}
        </Modal.Footer>
      </Modal>

      <Modal
        show={showUpdateWardModal}
        size="md"
        onHide={() => {
          handleCloseUpdateWardModal();
          setupdatedWardno("");
          setupdatedWard("");
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Ward Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <tbody>
              <tr>
                <td>
                  <div>
                    <b style={{ color: "white" }}>Ward no:</b>
                  </div>
                </td>
                <td>
                  <input
                    type="text"
                    style={{ width: "268px", height: "40px" }}
                    placeholder={allBedList99?.roomno}
                    value={updatedWardno}
                    onChange={(e) => setupdatedWardno(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <b style={{ color: "white" }}>
                      Ward: {updatedWard ? updatedWard : allBedList99?.roomType}
                    </b>
                  </div>
                </td>
                <td>
                  <select
                    style={{ width: "268px", height: "40px" }}
                    onChange={(e) => setupdatedWard(e.target.value)}
                  >
                    <option value={allBedList99?.roomType}>Choose Ward</option>
                    <option value="GENERAL">General</option>
                    <option value="SPECIAL">Special</option>
                    <option value="ICU">ICU</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleCloseUpdateWardModal();
              setupdatedWardno("");
              setupdatedWard("");
            }}
          >
            Close
          </Button>

          <Button variant="primary" onClick={updateWardInfo}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showDeleteWardModal}
        size="md"
        onHide={() => {
          handleCloseDeleteWardModal();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Ward Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <b style={{ color: "white" }}>
              Are You sure? You want to{" "}
              <span style={{ color: "red" }}>delete</span> the ward details?
            </b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleCloseDeleteWardModal();
            }}
          >
            NO
          </Button>

          <Button variant="danger" onClick={deleteWardInfo}>
            YES
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show98} size="lg" onHide={handleClose98}>
        <Modal.Header closeButton>
          <Modal.Title>Bed Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              backgroundColor: "white",
              textAlign: "center",
              border: "1px solid black",
              margin: "10px",
            }}
          >
            <div>
              <b>Update Information</b>
            </div>
            <div style={{ margin: "10px" }}>
              <Table bordered>
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      <div>
                        <label>
                          <b>Bed Name</b>
                        </label>
                        <div>{BedDetails98?.bedName}</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <label>
                          <b>Bed Status</b>
                        </label>
                        <div>{BedDetails98?.bedOccupied}</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <label>
                          <b>Insurance amount</b>
                        </label>
                        <div>{BedDetails98?.bedCostInsurance}</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div style={{ margin: "10px" }}>
              <Table bordered>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <label>
                          <b>Non-Insurance amount</b>
                        </label>
                        <div>{BedDetails98?.bedCostNonInsurance}</div>
                      </div>
                    </td>
                    {BedDetails98?.bedOccupied === "available" ? (
                      <td>
                        <div>
                          <label>
                            <b>Assign Patient</b>
                          </label>
                          <div>
                            <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={updatedIPDPatients}
                              // sx={{ width: 300 }}
                              value={selectedIPDObj}
                              onChange={handleselectedIPDChange}
                              renderInput={(params) => (
                                <TextField {...params} label="patient" />
                              )}
                            />
                          </div>
                        </div>
                      </td>
                    ) : (
                      <></>
                    )}
                  </tr>
                </tbody>
              </Table>
            </div>

            <div style={{ margin: "10px" }}>
              <Table bordered>
                <tbody>
                  <tr>
                    {BedDetails98?.bedOccupied === "available" ? (
                      <td>
                        <div>
                          <label>
                            <b>Reason</b>
                          </label>
                          <div>
                            <select
                              style={{ width: "220px", height: "42px" }}
                              onChange={(e) => setIpdCause(e.target.value)}
                            >
                              <option>Choose</option>
                              {selectedIPDObj?.cause?.map((item) => {
                                return (
                                  <option value={JSON.stringify(item)}>
                                    {item?.CauseName}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </td>
                    ) : (
                      <></>
                    )}
                    {BedDetails98?.bedOccupied === "available" ? (
                      <td>
                        <Button variant="primary" onClick={assignBedToPatient}>
                          Assign Patient
                        </Button>
                      </td>
                    ) : (
                      <></>
                    )}
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => setdeleteBedInfoModal(true)}
                      >
                        Delete Bed
                      </Button>
                    </td>
                    <td>
                      {BedDetails98?.bedOccupied === "available" ? (
                        <Button
                          variant="primary"
                          onClick={() => ChangeBedStatus("maintenance")}
                        >
                          Change to Maintainance
                        </Button>
                      ) : BedDetails98?.bedOccupied === "maintenance" ? (
                        <Button
                          variant="success"
                          onClick={() => ChangeBedStatus("available")}
                        >
                          Change to Available
                        </Button>
                      ) : (
                        <></>
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose98}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show97} size="lg" onHide={handleClose97}>
        <Modal.Header closeButton>
          <Modal.Title>Beds Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ backgroundColor: "white", textAlign: "center" }}>
            <Table>
              <thead>
                <th>Bed Name</th>
                <th>Bed Occupied</th>
                <th>Insurance amount</th>
                <th>Non-insurance amount</th>
                <th>Patient</th>
              </thead>
              <tbody>
                <tr>
                  <td>{BedDetails98?.bedName}</td>
                  <td>{BedDetails98?.bedOccupied}</td>
                  <td>₹{BedDetails98?.bedCostInsurance}</td>
                  <td>₹{BedDetails98?.bedCostNonInsurance}</td>

                  <td>
                    {/* <FaPen style={{ color: "#20958C" }} /> */}

                    <FaEye onClick={handleShow96} />
                  </td>
                  {/* <td>
                    <select onChange={(e) => setIpdCause(e.target.value)}>
                      <option>Choose</option>
                      {selectedIPDObj?.cause?.map((item) => {
                        return <option value={item}>{item?.CauseName}</option>;
                      })}
                    </select>
                  </td> */}
                </tr>
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose97}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={assignBedToPatient}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

      <Modal show={show96} size="lg" onHide={handleClose96}>
        <Modal.Header closeButton>
          <Modal.Title>Patients Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row" style={{ backgroundColor: "white" }}>
            <div className="col-md-6">
              <label>Patient ID </label>
              <span>
                <b> {individualPatient?.PatientId}</b>
              </span>
            </div>
            <div className="col-md-6">
              <label>Patient Name </label>
              <span>
                <b> {individualPatient?.Firstname}</b>
              </span>
            </div>
            <div className="col-md-6">
              <label>Gender </label>
              <span>
                <b> {individualPatient?.Gender}</b>
              </span>
            </div>
            <div className="col-md-6">
              <label>Phone Number </label>
              <span>
                <b> {individualPatient?.PhoneNumber}</b>
              </span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose96}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={assignBedToPatient}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

      <Modal
        show={deleteBedInfoModal}
        size="lg"
        onHide={() => setdeleteBedInfoModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Bed Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <b style={{ color: "white" }}>
              Are you sure? You want to{" "}
              <span style={{ color: "red" }}>Delete</span> the bed information.
            </b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setdeleteBedInfoModal(false)}
          >
            No
          </Button>
          <Button variant="secondary" onClick={() => DeleteBedInfo()}>
            YES
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
