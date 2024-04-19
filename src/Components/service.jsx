import React, { useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Aos from "aos";
import { Breadcrumbs, Typography } from "@mui/material";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

export const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
    getService();
  }, []);

  // Get Servicrs
  const [Service, setService] = useState([]);
  const getService = () => {
    axios
      .get("http://localhost:8521/api/admin/getService")
      .then(function (response) {
        // handle success
        setService(response.data.Service);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  console.log("fasfjasjafdafdafdsasdf", Service);

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
            Services
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
              to="/home"
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
              Services
            </Typography>
          </Breadcrumbs>
        </div>

        <div>
          <h4
            className="text-center fw-bold mb-5"
            style={{ color: "rgb(32 139 140)" }}
          >
            OUR SERVICES
          </h4>
          <div className="row">
            {Service?.map((item) => (
              <>
                <Card
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="col-lg-3 col-md-6 m-auto mb-3 p-0"
                  style={{ width: "15rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={`http://localhost:8521/ServiceManagement/${item?.ServiceImage}`}
                    alt="service-img"
                  />
                  <Card.Body>
                    <Card.Title>
                      <Link
                        className="fw-semibold"
                        style={{
                          textDecoration: "none",
                          color: "rgb(32 139 140)",
                        }}
                        to="/service_details"
                        state={{ item: item }}
                      >
                        {item?.ServiceTitle}
                      </Link>
                    </Card.Title>
                    <Card.Text>
                      {parse(
                        `<div>${item?.ServiceDescription?.slice(
                          0,
                          115
                        )}...</div>`
                      )}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
