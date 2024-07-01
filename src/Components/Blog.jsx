import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import { BiTime } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn, CiCalendarDate } from "react-icons/ci";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import Aos from "aos";
import { Breadcrumbs, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import parse from "html-react-parser";

export const Blog = () => {
  const location = useLocation();
  const { item } = location.state;
  console.log("itemm", item);

  useEffect(() => {
    Aos.init({ duration: 2500 });
    GetBlog();
  }, []);

  // Get BlogDetails
  const [BlogDetails, setBlogDetails] = useState([]);
  const GetBlog = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/admin/getBlog");
      if (res.status === 200) {
        setBlogDetails(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
            className="text-dark pt-5 fw-light back-img-head"
          >
            Blog
          </h1>
        </Container>
      </div>

      <Container className="mt-5">
        <div>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              className="d-flex gap-1 breadcrumb-hover"
              color="inherit"
              href="/"
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
              {item?.BlogTag}
            </Typography>
          </Breadcrumbs>
        </div>

        <h4
          className="text-center fw-bold mb-4"
          style={{ color: "rgb(32 139 140)" }}
        >
          {item?.BlogTag}
        </h4>
        <div>
          <div data-aos="fade-up" className="row mt-4 ">
            <div
              className="col-md-6 col-lg-8 mb-3"
              style={{ fontSize: "14px" }}
            >
              <p style={{ textAlign: "justify" }}>
                {parse(`<div>${item?.BlogDescription}</div>`)}
              </p>
            </div>

            <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-3 ">
              <div>
                {/* <h6 className='fw-bold mb-2 text-center mb-4' style={{ color: "rgb(32 139 140)" }}> Details </h6> */}
                <img
                  className="img-fluid mb-2"
                  src={`http://localhost:8521/Blog/${item?.BlogImg}`}
                  alt=""
                  style={{
                    width: "300px",
                    height: "315px",
                    imageRendering: "pixelated",
                  }}
                />
                {/* <p><span className='fw-bold'>Date : </span>Friday 28 Octobern 2023</p>
                                <p><span className='fw-bold'>Time : </span>12:00 PM</p>
                                <p><span className='fw-bold'>Location : </span>Jalan Kintamani Raya No.2, <br /> Kawasan Daan Mogot Baru, Daerah <br /> Khusus Ibukota Jakarta</p>
                                <p><span className='fw-bold'>Organizer : </span>Hermina Events</p>
                                <p><span className='fw-bold'>Phone : </span>012 2346 2343</p> */}
              </div>
            </div>
          </div>

          {/* <div data-aos='fade-right' className='col-lg-5 text-light p-5 mb-5 all-bg-green'>
                        <p> <CiCalendarDate /> October 28, 2023</p>
                        <p><BiTime /> 12.00-end</p>
                        <p> <AiOutlineMail /> events@hospitak.com</p>
                        <p> <CiLocationOn /> Jalan Kintamani Raya No.2, Kawasan Daan Mogot Baru, Daerah Khusus Ibukota Jakarta</p>
                    </div> */}

          <div>
            <h3
              className="fw-bold mb-2 text-center"
              style={{ color: "rgb(32 139 140)" }}
            >
              {" "}
              Related Blogs{" "}
            </h3>
            <Slider className="slick-slidder" {...settings}>
              {BlogDetails?.filter((blg) => blg?._id !== item?._id)?.map(
                (item) => {
                  return (
                    <>
                      <div>
                        <Card
                          data-aos="fade-up"
                          data-aos-duration="1500"
                          className="m-auto"
                          style={{ width: "15rem", minHeight: "250px" }}
                        >
                          <Link
                            onClick={window.scrollTo(0, 0)}
                            state={{ item: item }}
                            to="/eventBlog"
                          >
                            <img
                              style={{ width: "100%", height: "150px" }}
                              src={`http://localhost:8521/Blog/${item?.BlogImg}`}
                              alt="Doctor-img"
                            />
                          </Link>
                          <Card.Body className="p-3">
                            <Card.Text>
                              {" "}
                              <Link
                                onClick={window.scrollTo(0, 0)}
                                state={{ item: item }}
                                className="fw-semibold"
                                style={{
                                  textDecoration: "none",
                                  color: "rgb(32 139 140)",
                                }}
                                to="/eventBlog"
                              >
                                {item?.BlogTag}
                              </Link>
                            </Card.Text>
                            {/* <p className='fw-light'>June 8 20223</p> */}
                          </Card.Body>
                        </Card>
                      </div>
                    </>
                  );
                }
              )}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};
