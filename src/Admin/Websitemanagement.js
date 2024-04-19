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
import { FaBlog, FaUserMd } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";

import { ImLab } from "react-icons/im";
import { RiGalleryFill } from "react-icons/ri";

import { IoMdImages } from "react-icons/io";
import { GrCircleInformation, GrGallery } from "react-icons/gr";
import AddBanner from "./Addbanners";
import AddAboutUS from "./AddAboutUS";
import AddLatestNews from "./AddLatestNews";
import Addgallery from "./Addgallery";
import Addblog from "./Addblog";
import Addevents from "./Addevents";

export default function Websitemanagement() {
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
            Website management
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
            <div className="col-lg-4">
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<AddBanner />);
                  setView(true);
                }}
              >
                <BsFillImageFill className="WebMI" />
                ADD-BANNERS
              </div>
            </div>
            <div className="col-lg-4">
              {" "}
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<AddAboutUS />);
                  setView(true);
                }}
              >
                <HiOutlineInformationCircle className="WebMI" />
                ADD-ABOUT-US
              </div>
            </div>
            <div className="col-lg-4">
              {" "}
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<AddLatestNews />);
                  setView(true);
                }}
              >
                <BsNewspaper className="WebMI" />
                ADD-LATEST-NEWS
              </div>
            </div>
            <div className="col-lg-4">
              {" "}
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<Addgallery />);
                  setView(true);
                }}
              >
                <RiGalleryFill className="WebMI" />
                ADD-GALLERY
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<Addblog />);
                  setView(true);
                }}
              >
                {" "}
                <FaBlog className="WebMI" />
                ADD-BLOG
              </div>
            </div>
            <div className="col-lg-4">
              {" "}
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<Addevents />);
                  setView(true);
                }}
              >
                <MdEmojiEvents className="WebMI" />
                ADD-EVENTS
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
