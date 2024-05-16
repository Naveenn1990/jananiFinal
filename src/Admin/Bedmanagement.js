import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
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
  const [allBedList99, setallBedList99] = useState([]);

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
  // const top100Films = [
  //   { label: "The Shawshank Redemption", year: 1994 },
  //   { label: "The Godfather", year: 1972 },
  //   { label: "The Godfather: Part II", year: 1974 },
  //   { label: "The Dark Knight", year: 2008 },
  //   { label: "12 Angry Men", year: 1957 },
  //   { label: "Schindler's List", year: 1993 },
  //   { label: "Pulp Fiction", year: 1994 },
  //   {
  //     label: "The Lord of the Rings: The Return of the King",
  //     year: 2003,
  //   },
  //   { label: "The Good, the Bad and the Ugly", year: 1966 },
  //   { label: "Fight Club", year: 1999 },
  //   {
  //     label: "The Lord of the Rings: The Fellowship of the Ring",
  //     year: 2001,
  //   },
  //   {
  //     label: "Star Wars: Episode V - The Empire Strikes Back",
  //     year: 1980,
  //   },
  //   { label: "Forrest Gump", year: 1994 },
  //   { label: "Inception", year: 2010 },
  //   {
  //     label: "The Lord of the Rings: The Two Towers",
  //     year: 2002,
  //   },
  //   { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  //   { label: "Goodfellas", year: 1990 },
  //   { label: "The Matrix", year: 1999 },
  //   { label: "Seven Samurai", year: 1954 },
  //   {
  //     label: "Star Wars: Episode IV - A New Hope",
  //     year: 1977,
  //   },
  //   { label: "City of God", year: 2002 },
  //   { label: "Se7en", year: 1995 },
  //   { label: "The Silence of the Lambs", year: 1991 },
  //   { label: "It's a Wonderful Life", year: 1946 },
  //   { label: "Life Is Beautiful", year: 1997 },
  //   { label: "The Usual Suspects", year: 1995 },
  //   { label: "Léon: The Professional", year: 1994 },
  //   { label: "Spirited Away", year: 2001 },
  //   { label: "Saving Private Ryan", year: 1998 },
  //   { label: "Once Upon a Time in the West", year: 1968 },
  //   { label: "American History X", year: 1998 },
  //   { label: "Interstellar", year: 2014 },
  //   { label: "Casablanca", year: 1942 },
  //   { label: "City Lights", year: 1931 },
  //   { label: "Psycho", year: 1960 },
  //   { label: "The Green Mile", year: 1999 },
  //   { label: "The Intouchables", year: 2011 },
  //   { label: "Modern Times", year: 1936 },
  //   { label: "Raiders of the Lost Ark", year: 1981 },
  //   { label: "Rear Window", year: 1954 },
  //   { label: "The Pianist", year: 2002 },
  //   { label: "The Departed", year: 2006 },
  //   { label: "Terminator 2: Judgment Day", year: 1991 },
  //   { label: "Back to the Future", year: 1985 },
  //   { label: "Whiplash", year: 2014 },
  //   { label: "Gladiator", year: 2000 },
  //   { label: "Memento", year: 2000 },
  //   { label: "The Prestige", year: 2006 },
  //   { label: "The Lion King", year: 1994 },
  //   { label: "Apocalypse Now", year: 1979 },
  //   { label: "Alien", year: 1979 },
  //   { label: "Sunset Boulevard", year: 1950 },
  //   {
  //     label:
  //       "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
  //     year: 1964,
  //   },
  //   { label: "The Great Dictator", year: 1940 },
  //   { label: "Cinema Paradiso", year: 1988 },
  //   { label: "The Lives of Others", year: 2006 },
  //   { label: "Grave of the Fireflies", year: 1988 },
  //   { label: "Paths of Glory", year: 1957 },
  //   { label: "Django Unchained", year: 2012 },
  //   { label: "The Shining", year: 1980 },
  //   { label: "WALL·E", year: 2008 },
  //   { label: "American Beauty", year: 1999 },
  //   { label: "The Dark Knight Rises", year: 2012 },
  //   { label: "Princess Mononoke", year: 1997 },
  //   { label: "Aliens", year: 1986 },
  //   { label: "Oldboy", year: 2003 },
  //   { label: "Once Upon a Time in America", year: 1984 },
  //   { label: "Witness for the Prosecution", year: 1957 },
  //   { label: "Das Boot", year: 1981 },
  //   { label: "Citizen Kane", year: 1941 },
  //   { label: "North by Northwest", year: 1959 },
  //   { label: "Vertigo", year: 1958 },
  //   {
  //     label: "Star Wars: Episode VI - Return of the Jedi",
  //     year: 1983,
  //   },
  //   { label: "Reservoir Dogs", year: 1992 },
  //   { label: "Braveheart", year: 1995 },
  //   { label: "M", year: 1931 },
  //   { label: "Requiem for a Dream", year: 2000 },
  //   { label: "Amélie", year: 2001 },
  //   { label: "A Clockwork Orange", year: 1971 },
  //   { label: "Like Stars on Earth", year: 2007 },
  //   { label: "Taxi Driver", year: 1976 },
  //   { label: "Lawrence of Arabia", year: 1962 },
  //   { label: "Double Indemnity", year: 1944 },
  //   {
  //     label: "Eternal Sunshine of the Spotless Mind",
  //     year: 2004,
  //   },
  //   { label: "Amadeus", year: 1984 },
  //   { label: "To Kill a Mockingbird", year: 1962 },
  //   { label: "Toy Story 3", year: 2010 },
  //   { label: "Logan", year: 2017 },
  //   { label: "Full Metal Jacket", year: 1987 },
  //   { label: "Dangal", year: 2016 },
  //   { label: "The Sting", year: 1973 },
  //   { label: "2001: A Space Odyssey", year: 1968 },
  //   { label: "Singin' in the Rain", year: 1952 },
  //   { label: "Toy Story", year: 1995 },
  //   { label: "Bicycle Thieves", year: 1948 },
  //   { label: "The Kid", year: 1921 },
  //   { label: "Inglourious Basterds", year: 2009 },
  //   { label: "Snatch", year: 2000 },
  //   { label: "3 Idiots", year: 2009 },
  //   { label: "Monty Python and the Holy Grail", year: 1975 },
  // ];

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
    setAddRoomModal(true);
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
        console.log(res.data);
        console.log(res.data.success);
        alert("Building Added");
        setAddBuildingModal(false);
        getBuildingList();
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
        console.log(res.data);
        console.log(res.data.success);
        alert("Floor Added");
        getBuildingList();
        setAddFloorModal(false);
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
        setAddFloorModal(false);
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const AddRooms_Beds = async (e) => {
    console.log(SelectedFloorId, "floorId");
    e.preventDefault();
    // if (!patientfirstname | !patientlastname | !conpassword | !gender | !DOB | !) {
    //   alert("Please Fill All The Field");
    // } else if (password !== conpassword) {
    //   alert("Password and ConfirmPassword should be same");
    // } else {
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
          subroomType: SelectedSubRoomType,
          noOfBeds: NoOfBeds,
          bedCostInsurance: bedCostInsurance,
          bedCostNonInsurance: bedCostNonInsurance,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data);
        console.log(res.data.success);
        alert("Room & beds Added");
        setAddFloorModal(false);
        getBuildingList();
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
            alert("Bed is assigned to the patient");
            addcauseBill();
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
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
              onClick={() => setAddFloorModal(false)}
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
                <option> Select RoomType</option>
                {AllRoomTypeList?.map((item) => {
                  return <option value={item?._id}> {item?.roomType}</option>;
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
                onChange={(e) => setSelectedSubRoomType(e.target.value)}
              >
                <option> Select Sub RoomType</option>
                {AllsubRoomTypeList?.map((item) => {
                  return (
                    <option value={item?._id}> {item?.subroomType}</option>
                  );
                })}
              </select>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="Enter Room Number"
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
          <div style={{ backgroundColor: "white" }}>
            {/* <div className="row" style={{ display: ViewFloors ? "" : "none" }}>
              {FloorList[0]?.Room?.map((item) => {
                return (
                  <div className="col-lg-6">
                    <div
                      className="websiteMcards"
                      onClick={() => {
                        setViewFloors(false);
                        setViewRooms(true);
                        setViewBeds(false);
                        setSelectedFloorId(item._id);
                      }}
                    >
                      <FaBuilding className="WebMI" />
                      {item?.floorName}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="row" style={{ display: ViewRooms ? "" : "none" }}>
              {FloorList[0]?.Room?.filter(
                (data) => data?._id == SelectedFloorId
              ).map((item) => {
                return (
                  <div className="col-lg-6">
                    {item?.Room.map((item) => {
                      return (
                        <div className="websiteMcards">
                          <RiHospitalFill className="WebMI" />
                          <span style={{ fontSize: "24px" }}>
                            ROOM NO : {item?.roomno}
                          </span>
                          <div
                            className="row"
                            style={{
                              backgroundColor: "white",
                              marginTop: "2%",
                            }}
                          >
                            <div
                              className="col-lg-6"
                              style={{ borderRight: "1px solid grey" }}
                              onClick={() => {
                                setViewFloors(false);
                                setViewRooms(false);
                                setViewBeds(true);
                                setViewBedsStatus("available");
                                setSelectedbedInfo(item?.bedsinfo);
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "14px",
                                  color: "green",
                                  fontWeight: "700",
                                  textAlign: "center",
                                }}
                              >
                                BEDS AVAILABLE
                              </span>
                              <div className="row">
                                <div className="col-lg-6">
                                  {" "}
                                  <FaBed
                                    style={{
                                      color: "green",
                                      fontSize: "30px",
                                    }}
                                  />{" "}
                                </div>

                                <div className="col-lg-6">
                                  <span
                                    style={{
                                      color: "green",
                                      fontSize: "20px",
                                    }}
                                  >
                                    {
                                      item?.bedsinfo?.filter(
                                        (item) =>
                                          item?.bedOccupied == "available"
                                      ).length
                                    }
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <span
                                style={{
                                  fontSize: "14px",
                                  color: "red",
                                  fontWeight: "700",
                                  textAlign: "center",
                                }}
                                onClick={() => {
                                  setViewFloors(false);
                                  setViewRooms(false);
                                  setViewBeds(true);
                                  setViewBedsStatus("unavailable");
                                  setSelectedbedInfo(item?.bedsinfo);
                                }}
                              >
                                BEDS UNAVAILABLE
                              </span>
                              <div className="row">
                                <div className="col-lg-6">
                                  {" "}
                                  <FaBed
                                    style={{
                                      color: "red",
                                      fontSize: "30px",
                                    }}
                                  />{" "}
                                </div>

                                <div className="col-lg-6">
                                  <span
                                    style={{
                                      color: "red",
                                      fontSize: "20px",
                                    }}
                                  >
                                    {
                                      item?.bedsinfo?.filter(
                                        (item) =>
                                          item?.bedOccupied == "unavailable"
                                      ).length
                                    }
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            <div
              className="row"
              style={{ display: ViewBeds ? "" : "none", padding: "20px" }}
            >
              {ViewBedsStatus == "available" ? (
                <div>
                  {SelectedbedInfo?.filter(
                    (data) => data.bedOccupied == ViewBedsStatus
                  ).map((item) => {
                    return (
                      <div
                        className="col-lg-6"
                        style={{ border: "1px solid #20958c" }}
                      >
                        <div className="row">
                          <div className="col-lg-2">
                            <FaBed
                              style={{
                                color: "green",
                                fontSize: "50px",
                              }}
                            />
                          </div>

                          <div className="col-lg-7">
                            <span
                              style={{
                                color: "#20958c",
                                fontWeight: "600",
                                fontSize: "15px",
                              }}
                            >
                              <span
                                style={{ color: "grey", fontWeight: "600" }}
                              >
                                Bed Name :
                              </span>{" "}
                              {item?.bedName}
                            </span>
                            <br></br>
                            <span
                              style={{ color: "#20958c", fontWeight: "600" }}
                            >
                              <span
                                style={{ color: "grey", fontWeight: "600" }}
                              >
                                Bed Cost :
                              </span>{" "}
                              INR {item?.bedCost}
                            </span>
                          </div>
                          <div className="col-lg-2">
                            <button
                              style={{
                                marginTop: "30%",
                                backgroundColor: "#20958c",
                                border: "none",
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "white",
                                padding: "4px",
                                borderRadius: "10px",
                              }}
                            >
                              ADMIT
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>
                  {SelectedbedInfo?.filter(
                    (data) => data.bedOccupied == ViewBedsStatus
                  ).map((item) => {
                    return (
                      <div
                        className="col-lg-6"
                        style={{ border: "1px solid #20958c" }}
                      >
                        <div className="row">
                          <div className="col-lg-2">
                            <FaBed
                              style={{
                                color: "red",
                                fontSize: "50px",
                              }}
                            />
                          </div>

                          <div className="col-lg-7">
                            <span
                              style={{
                                color: "#20958c",
                                fontWeight: "600",
                                fontSize: "15px",
                              }}
                            >
                              <span
                                style={{ color: "grey", fontWeight: "600" }}
                              >
                                Bed Name :
                              </span>{" "}
                              {item?.bedName}
                            </span>
                            <br></br>
                            <span
                              style={{ color: "#20958c", fontWeight: "600" }}
                            >
                              <span
                                style={{ color: "grey", fontWeight: "600" }}
                              >
                                Bed Cost :
                              </span>{" "}
                              INR {item?.bedCost}
                            </span>
                          </div>
                          <div className="col-lg-2">
                            <button
                              style={{
                                marginTop: "30%",
                                backgroundColor: "#20958c",
                                border: "none",
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "white",
                                padding: "4px",
                                borderRadius: "10px",
                              }}
                            >
                              REMOVE
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div> */}
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
                  <div onClick={() => setViewFloors(true)}>
                    {floors?.floorName}
                  </div>
                  <div style={{ display: ViewFloors ? "" : "none" }}>
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
      </Modal>

      <Modal show={show99} size="lg" onHide={handleClose99}>
        <Modal.Header closeButton>
          <Modal.Title>Beds list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ color: "White", textAlign: "center" }}>
            <b>Room no: {allBedList99?.roomno}</b>
          </div>

          <div className="row text-center">
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
                    } else {
                      handleShow98();
                    }
                  }}
                >
                  {/* {item?.Room.map((item) => {
                    return (
                      <div className="websiteMcards">
                        <RiHospitalFill className="WebMI" />
                        <span style={{ fontSize: "24px" }}>
                          ROOM NO : {item?.roomno}
                        </span>
                        <div
                          className="row"
                          style={{
                            backgroundColor: "white",
                            marginTop: "2%",
                          }}
                        >
                          <div
                            className="col-lg-6"
                            style={{
                              borderRight: "1px solid grey",
                            }}
                            onClick={() => {
                              setViewFloors(false);
                              setViewRooms(false);
                              setViewBeds(true);
                              setViewBedsStatus("available");
                              setSelectedbedInfo(item?.bedsinfo);
                            }}
                          >
                            <span
                              style={{
                                fontSize: "14px",
                                color: "green",
                                fontWeight: "700",
                                textAlign: "center",
                              }}
                            >
                              BEDS AVAILABLE
                            </span>
                            <div className="row">
                              <div className="col-lg-6">
                                {" "}
                                <FaBed
                                  style={{
                                    color: "green",
                                    fontSize: "30px",
                                  }}
                                />{" "}
                              </div>

                              <div className="col-lg-6">
                                <span
                                  style={{
                                    color: "green",
                                    fontSize: "20px",
                                  }}
                                >
                                  {
                                    item?.bedsinfo?.filter(
                                      (item) => item?.bedOccupied == "available"
                                    ).length
                                  }
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <span
                              style={{
                                fontSize: "14px",
                                color: "red",
                                fontWeight: "700",
                                textAlign: "center",
                              }}
                              onClick={() => {
                                setViewFloors(false);
                                setViewRooms(false);
                                setViewBeds(true);
                                setViewBedsStatus("unavailable");
                                setSelectedbedInfo(item?.bedsinfo);
                              }}
                            >
                              BEDS UNAVAILABLE
                            </span>
                            <div className="row">
                              <div className="col-lg-6">
                                {" "}
                                <FaBed
                                  style={{
                                    color: "red",
                                    fontSize: "30px",
                                  }}
                                />{" "}
                              </div>

                              <div className="col-lg-6">
                                <span
                                  style={{
                                    color: "red",
                                    fontSize: "20px",
                                  }}
                                >
                                  {
                                    item?.bedsinfo?.filter(
                                      (item) =>
                                        item?.bedOccupied == "unavailable"
                                    ).length
                                  }
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })} */}
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
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose99}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose99}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

      <Modal show={show98} size="lg" onHide={handleClose98}>
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
                <th>Assign Patient</th>
                <th>Reason</th>
              </thead>
              <tbody>
                <tr>
                  <td>{BedDetails98?.bedName}</td>
                  <td>{BedDetails98?.bedOccupied}</td>
                  <td>₹{BedDetails98?.bedCostInsurance}</td>
                  <td>₹{BedDetails98?.bedCostNonInsurance}</td>

                  <td>
                    {/* <FaPen style={{ color: "#20958C" }} /> */}
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
                  </td>
                  <td>
                    <select onChange={(e) => setIpdCause(e.target.value)}>
                      <option>Choose</option>
                      {selectedIPDObj?.cause?.map((item) => {
                        return (
                          <option value={JSON.stringify(item)}>
                            {item?.CauseName}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose98}>
            Close
          </Button>
          <Button variant="primary" onClick={assignBedToPatient}>
            Save Changes
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
    </div>
  );
}
