import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import {
  AiFillDelete,
  AiOutlineAppstore,
  AiOutlineAppstoreAdd,
  AiOutlineFastBackward,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import {
  BsCurrencyRupee,
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

import { PiTestTubeFill } from "react-icons/pi";
import { GrCircleInformation, GrDocumentTest, GrGallery } from "react-icons/gr";
import AddBanner from "./Addbanners";
import AddAboutUS from "./AddAboutUS";
import AddLatestNews from "./AddLatestNews";
import Addgallery from "./Addgallery";
import Addblog from "./Addblog";
import Addevents from "./Addevents";
import Hospitallab from "./Hospitallab";
import { GiTestTubes } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import Hospitallabtestlist from "./HospitalLabTest";
import Hospitallabtestreport from "./Hospitallabreport";
import TotalHLabRevenue from "./TotalHlabRevenue";
import  HLabProfile from "./HLabProfile";
export default function HospitalLabPanel() {
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
  const [Title, setTitle] = useState("Hospital Lab management");

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
            {Title}
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
              onClick={() => {
                setView(false);
                setTitle("Hospital Lab management");
              }}
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
                  setViewModal(<Hospitallab />);
                  setView(true);
                  setTitle("ADD-LAB-TEST");
                }}
              >
                <PiTestTubeFill className="WebMI" style={{ color: "white" }} />
                ADD-LAB-TEST
              </div>
            </div>

            <div className="col-lg-4">
              {" "}
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<Hospitallabtestlist />);
                  setTitle("LAB TEST-LIST");
                  setView(true);
                }}
              >
                <GiTestTubes className="WebMI" />
                LAB TEST-LIST
              </div>
            </div>

            <div className="col-lg-4">
              {" "}
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<Hospitallabtestreport />);
                  setView(true);
                  setTitle("LAB TEST-REPORT");
                }}
              >
                <TbReportSearch className="WebMI" />
                LAB TEST-REPORT
              </div>
            </div>

            <div className="col-lg-4">
              {" "}
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<TotalHLabRevenue />);
                  setView(true);
                  setTitle("TOTAL REVENUE");
                }}
              >
                <BsCurrencyRupee className="WebMI" />
                TOTAL REVENUE
              </div>
            </div>

            <div className="col-lg-4">
              {" "}
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<HLabProfile />);
                  setView(true);
                  setTitle("LAB PROFILE");
                }}
              >
                <AiOutlineAppstore className="WebMI" />
                ADD LAB PROFILE
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
