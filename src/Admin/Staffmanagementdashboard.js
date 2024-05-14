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
import { FaBlog, FaUserMd, FaWpforms } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";

import { ImLab } from "react-icons/im";
import { RiGalleryFill, RiPresentationFill } from "react-icons/ri";

import { IoMdImages, IoMdPersonAdd } from "react-icons/io";
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

export default function Staffmanagementdashboard() {
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
          <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
            Staff management
          </h6>
          {View ? (
            <button
              style={{
                fontSize: "16px",
                color: "white",
                backgroundColor: "#20958c",
                border: "none",
                borderRadius: "0px",
              }}
              onClick={() => setView(false)}
            >
              <AiOutlineFastBackward style={{ fontSize: "22px" }} /> BACK
            </button>
          ) : null}
        </div>
        {View ? (
          ViewModal
        ) : (
          <div className="row">
            <div className="col-lg-6">
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<Subadmin />);
                  setView(true);
                }}
              >
                <IoMdPersonAdd className="WebMI" />
                ADD-STAFF
              </div>
            </div>
            <div className="col-lg-6">
              {" "}
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<StaffAttendance />);
                  setView(true);
                }}
              >
                <RiPresentationFill className="WebMI" />
                ATTENDANCE
              </div>
            </div>
            {/* <div className="col-lg-4">
              {" "}
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<AddLatestNews />);
                  setView(true);
                }}
              >
                <FaWpforms className="WebMI" />
                BED MANAGEMENT
              </div>
            </div> */}
            <div className="col-lg-6">
              {" "}
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<Outpatientlist />);
                  setView(true);
                }}
              >
                <FaWpforms className="WebMI" />
                OUT-PATIENT FORM
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<Inpatientlist />);
                  setView(true);
                }}
              >
                {" "}
                <FaWpforms className="WebMI" />
                IN-PATIENT FORM
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
