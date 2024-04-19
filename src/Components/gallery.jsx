import React, { useEffect, useState } from "react";
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Aos from "aos";
import Carousel from "react-grid-carousel";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
    GetGallery();
  }, []);

  // Get Gallery
  const [GalleryDetails, setGalleryDetails] = useState([]);
  const GetGallery = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/admin/getGallery");
      if (res.status === 200) {
        setGalleryDetails(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("GalleryDetails: ", GalleryDetails);

  return (
    <>
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
            Gallery
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
              {/* <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" /> */}
              Gallery
            </Typography>
          </Breadcrumbs>
        </div>

        <div className="container mt-4">
          <Carousel cols={4} rows={2} gap={10} loop>
            {GalleryDetails?.map((item, index) => (
              <Carousel.Item
                key={index}
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Card
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="col-3"
                  style={{ width: "14rem" }}
                >
                  <Card.Img variant="top" />
                  <img
                    style={{ width: "100%", height: "180px" }}
                    src={`http://localhost:8521/Gallery/${item?.GalleryImg}`}
                    alt="Doctor-img"
                  />
                  <Card.Body>
                    <p className="fw-semibold m-0">{item?.GalleryTitle}</p>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
          {/* <a href="/oldpost"> <Button className="red-btn-5 m-5"></Button> </a> */}
        </div>
      </Container>
    </>
  );
};

export default Gallery;
