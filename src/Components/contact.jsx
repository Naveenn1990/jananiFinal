import React, { useEffect, useState } from "react";
import { AiFillFolder } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  BiSolidPhone,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { Breadcrumb, Container } from "react-bootstrap";
import Aos from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const Contact = () => {
  const [enqGenName, setenqGenName] = useState("");
  const [enqGenEmail, setenqGenEmail] = useState("");
  const [enqGenContact, setenqGenContact] = useState("");
  const [enquiryBody, setenquiryBody] = useState("");

  const submitEnq = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/enq/postEnquiry",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          enqGenName: enqGenName,
          enqGenEmail: enqGenEmail,
          enqGenContact: enqGenContact,
          enquiryBody: enquiryBody,
        },
      };
      let res = await axios(config);
      if (res.status === 201) {
        setenqGenName("");
        setenqGenEmail("");
        setenqGenContact("");
        setenquiryBody("");
        alert(res.data.success);
        return;
      } else {
        return alert("something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div>
      <div
        className="head-back-img"
        style={{
          backgroundImage: "url(./img/all-department-img.jpg)",
          width: "100%",
          height: "150px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <h1
            data-aos="fade-right"
            data-aos-duration="3000"
            className="text-dark fw-light pt-5 back-img-head"
          >
            Contact
          </h1>
        </Container>
      </div>

      <Container className="mt-5">
        <div className="mb-4">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              className="d-flex gap-1 breadcrumb-hover"
              color="inherit"
              href="/home"
            >
              <FontAwesomeIcon
                icon={faHouse}
                style={{ fontSize: "14px", marginTop: "3px" }}
              />
              Home
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              Contact
            </Typography>
          </Breadcrumbs>
        </div>

        {/* <div>
          <div className="row ">
            <div data-aos="fade-right" className="col-md-7 col-lg-8 mb-4">
              <iframe
                className="google-map"
                style={{ width: "100%", height: "470px" }}
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62204.26732246079!2d77.54815197220961!3d12.986767844032252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbenglore%20hospital%20plus!5e0!3m2!1sen!2sin!4v1689742702947!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div data-aos="fade-right" className="col-md-5 col-lg-4 px-2 mb-4 ">
              <form className="mb-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search Here..."
                />
              </form>
              <div className="mb-4">
                <p className="text-start mb-4 fw-bold">BLOG CATEGORIES</p>
                <div>
                  <div className="d-flex justify-content-between">
                    <a
                      className="nav-link"
                      style={{ color: "#8E8A93" }}
                      href="#"
                    >
                      <AiFillFolder className=" fs-5 me-2" />
                      Blog
                    </a>
                    <span className="fw-light">(10)</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <a
                      className="nav-link"
                      style={{ color: "#8E8A93" }}
                      href="#"
                    >
                      <AiFillFolder className=" fs-5 me-2" />
                      Couseling
                    </a>
                    <span className="fw-light">(1)</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <a
                      className="nav-link"
                      style={{ color: "#8E8A93" }}
                      href="#"
                    >
                      <AiFillFolder className=" fs-5 me-2" />
                      Health
                    </a>
                    <span className="fw-light">(4)</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <a
                      className="nav-link"
                      style={{ color: "#8E8A93" }}
                      href="#"
                    >
                      <AiFillFolder className=" fs-5 me-2" />
                      Kids
                    </a>
                    <span className="fw-light">(3)</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-start fw-bold">BLOG TAGS</p>
                <div className="text-start">
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-2 mb-2"
                  >
                    Beach
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-2 mb-2"
                  >
                    Health
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-2 mb-2"
                  >
                    Holiday
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-2 mb-2"
                  >
                    Information
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-2 mb-2"
                  >
                    Nature
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-2 mb-2"
                  >
                    Music
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-2 mb-2"
                  >
                    RandomStuff
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-2 mb-2"
                  >
                    Kids
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-2 mb-2"
                  >
                    Rocks
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* form coding */}

        <div data-aos="fade-up" className="container">
          <div className="row">
            <div className="col-md-6 all-bg-green text-light p-3">
              <div className="mb-4">
                <h3 className="mb-4">Get In Touch</h3>
                <p style={{ textAlign: "justify" }}>
                  This is Herman Brooks. Herman is just like the rest of us.
                  Everyday he has to make all kinds of decisions like what to
                  wear, whom to date and when to panic.
                </p>

                <p style={{ textAlign: "justify" }}>
                  Now these decisions should be easy but if you take a look
                  inside Herman’s head, you’ll see why he sometimes has trouble
                  making up his mind. Sometimes they agree… usually they don’t.
                  But the struggle is going on inside all of us and it’s all
                  going on inside Herman’s head.
                </p>
              </div>
              <div>
                <h5 className="text-start mb-4">CONTACT INFO</h5>
                <div
                  className="text-start mb-5 text-light"
                  style={{ color: "#6E868C" }}
                >
                  <p>
                    <MdOutlineMailOutline />
                    info@hospitalplus.com
                  </p>
                  <p>
                    <BiSolidPhone />
                    +3212345678
                  </p>
                  <p>
                    <BiSolidPhone />
                    +3212345678
                  </p>
                </div>
              </div>
              <hr className="mb-4" />
              <div className="d-flex fs-5 mb-4 px-1 gap-2 ">
                <a href="#" className="nav-link  contact-icon">
                  <BiLogoFacebook />
                </a>
                <a href="#" className="nav-link contact-icon">
                  <BiLogoTwitter />
                </a>
                <a href="#" className="nav-link contact-icon">
                  <BiLogoLinkedin />
                </a>
                <a href="#" className="nav-link contact-icon">
                  <TfiYoutube />
                </a>
                <a href="#" className="nav-link contact-icon">
                  <TiSocialGooglePlus />
                </a>
                <a href="#" className="nav-link contact-icon">
                  <ImInstagram />
                </a>
              </div>
              <hr className="mb-4" />
            </div>
            <div className="col-md-6 ">
              <form onSubmit={(e) => submitEnq(e)}>
                <div className="mb-4 text-start fs-5">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    FullName{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    id="exampleFormControlInput1"
                    placeholder="Enter Name"
                    onChange={(e) => setenqGenName(e.target.value)}
                  />
                </div>
                <div className="mb-4 text-start fs-5">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email Address{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control py-2"
                    id="exampleFormControlInput1"
                    placeholder="Enter Email id"
                    onChange={(e) => setenqGenEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4 text-start fs-5">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Mobile No{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    id="exampleFormControlInput1"
                    placeholder="Enter mobile no"
                    onChange={(e) => setenqGenContact(e.target.value)}
                  />
                </div>
                <div className="mb-5 text-start fs-5">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control py-2"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    cols="50"
                    onChange={(e) => setenquiryBody(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-4 text-start fs-5">
                  <button type="submit" className="btn btn-danger w-100 py-2">
                    Submit{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
