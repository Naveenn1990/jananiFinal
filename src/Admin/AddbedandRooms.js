import React, { useState } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";

export default function AddbedandRooms() {
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
          <h6 style={{ fontSize: "18px", fontWeight: "600", color: "grey" }}>
            ROOMS DETAILS
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
              ADD ROOMS
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
            <div className="col-lg-4">
              <div
                className="websiteMcards"
                onClick={() => {
                  setShow1(true);
                }}
              >
                <FaBuilding className="WebMI" />
                ROOM-1
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="websiteMcards"
                onClick={() => {
                  setShow1(true);
                }}
              >
                <FaBuilding className="WebMI" />
                ROOM-2
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="websiteMcards"
                onClick={() => {
                  setShow1(true);
                }}
              >
                <FaBuilding className="WebMI" />
                ROOM-3
              </div>
            </div>
          </div>
        )}
      </div>

      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Floor </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
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
                <option>Select Building</option>
                <option>Building-1</option>
                <option>Building-2</option>
              </select>
            </div>

            <div className="col-lg-6">
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
                <option>Select Floor</option>
                <option>Floor-1</option>
                <option>Floor-2</option>
              </select>
            </div>

            <div className="col-lg-6">
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
                <option>Select Ward</option>
                <option>Ward-1</option>
                <option>Ward-2</option>
              </select>
            </div>

            <div className="col-lg-6">
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
                <option>Select Sub-ward</option>
                <option>Sub-ward-1</option>
                <option>Sub-ward-2</option>
              </select>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Enter Room No"
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

            <div className="col-lg-6">
              <input
                placeholder="Enter No Beds"
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
                placeholder="Enter Bed Charge"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "2%",
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
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={show1} onHide={handleClose1}>
        <Modal.Header>
          <Modal.Title>Bed Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            <div className="d-flex align-items-center gap-5 justify-content-center mb-3">
              <span
                className="bed-green-details"
                style={{ color: "green", fontSize: "20px" }}
              >
                <FontAwesomeIcon
                  icon={faBed}
                  className="bed-green"
                  style={{ fontSize: "30px" }}
                />{" "}
                <br />
                <span className="fw-bold">301 (a)</span> <br />
              </span>
              <span
                className="bed-green-details"
                style={{ color: "green", fontSize: "20px" }}
              >
                <FontAwesomeIcon
                  icon={faBed}
                  className="bed-green"
                  style={{ fontSize: "30px" }}
                />{" "}
                <br />
                <span className="fw-bold">302 (a)</span> <br />
              </span>

              <span
                className="bed-green-details"
                style={{ color: "red", fontSize: "20px" }}
              >
                <FontAwesomeIcon
                  icon={faBed}
                  className="bed-green"
                  style={{ fontSize: "30px" }}
                />{" "}
                <br />
                <span className="fw-bold">303 (a)</span> <br />
              </span>

              <span
                className="bed-green-details"
                style={{ color: "green", fontSize: "20px" }}
              >
                <FontAwesomeIcon
                  icon={faBed}
                  className="bed-green"
                  style={{ fontSize: "30px" }}
                />{" "}
                <br />
                <span className="fw-bold">304 (a)</span> <br />
              </span>
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
