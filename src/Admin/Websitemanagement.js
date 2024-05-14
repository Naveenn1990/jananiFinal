import React, { useState } from "react";
import {
  AiOutlineFastBackward,
} from "react-icons/ai";
import {
  BsFillImageFill,
  BsPeople,
} from "react-icons/bs";
import {
  FaBlog,
  FaClinicMedical,
  FaRegHospital,
} from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";

import { RiGalleryFill } from "react-icons/ri";

import AddBanner from "./Addbanners";
import AddAboutUS from "./AddAboutUS";
import Addgallery from "./Addgallery";
import Addblog from "./Addblog";
import AddClinicalExecellence from "./AddClinicalExecellence";
import AddBestHospital from "./AddBestHospital";
import { GoTrophy } from "react-icons/go";
import AddHospitalDepartment from "./AddHospitalDepart";
import AddTestimonial from "./AddTestimonial";

export default function Websitemanagement() {
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
                BLOG / LATEST NEWS
              </div>
            </div>

            <div className="col-lg-4">
              {" "}
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<AddHospitalDepartment />);
                  setView(true);
                }}
              >
                <FaRegHospital className="WebMI" />
                HOSPITAL-DEPARMENT
              </div>
            </div>

            <div className="col-lg-4">
              {" "}
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<AddTestimonial />);
                  setView(true);
                }}
              >
                <BsPeople className="WebMI" />
                ADD-TESTIMONIAL
              </div>
            </div>

            <div className="col-lg-4">
              {" "}
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<AddClinicalExecellence />);
                  setView(true);
                }}
              >
                <GoTrophy className="WebMI" />
                CLINICAL-EXECELLENCE
              </div>
            </div>

            <div className="col-lg-4">
              {" "}
              <div
                className="websiteMcards"
                onClick={() => {
                  setViewModal(<AddBestHospital />);
                  setView(true);
                }}
              >
                <FaClinicMedical className="WebMI" />
                BEST-HOSPITAL-TOWN
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
