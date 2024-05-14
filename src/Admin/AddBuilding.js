import React, { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
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
import { FaBlog, FaBuilding, FaUserMd, FaWpforms } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";

import { ImLab } from "react-icons/im";
import { RiGalleryFill, RiPresentationFill } from "react-icons/ri";

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

export default function AddBuilding() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [ViewModal, setViewModal] = useState();
  const [View, setView] = useState(false);

  const [buildingName, setbuildingName] = useState();

  const Addbuilding = async (e) => {
    e.preventDefault();
    // if (!patientfirstname | !patientlastname | !conpassword | !gender | !DOB | !) {
    //   alert("Please Fill All The Field");
    // } else if (password !== conpassword) {
    //   alert("Password and ConfirmPassword should be same");
    // } else {
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
        setShow(false);
        getBuildingList();
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
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

  console.log(BuildingList, "buildinglist");

  useEffect(() => {
    getBuildingList();
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
            BUILDING DETAILS
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
              onClick={() => setShow(true)}
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
                <div className="col-lg-4">
                  <div
                    className="websiteMcards"
                    onClick={() => {
                      setViewModal(<Subadmin />);
                      setView(true);
                    }}
                  >
                    <FaBuilding className="WebMI" />
                    {item?.buildingName}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Modal size="md" show={show} onHide={handleClose}>
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
              onClick={(e) => Addbuilding(e)}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal size="md" show={show1} onHide={handleClose1}>
        <Modal.Header>
          <Modal.Title>Add Floors </Modal.Title>
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
                <option value="">Select Building</option>
                <option value=""> Building-1</option>
                <option value=""> Building-2</option>
              </select>
            </div>

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
              onClick={(e) => {
                setShow1(false);
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
