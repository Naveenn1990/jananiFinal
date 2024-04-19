import React, { useEffect, useState } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

export const BlogDetails = () => {
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

  useEffect(() => {
    GetBlog();
  }, []);

  return (
    <div>
      <div
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
          <h1 className="text-dark pt-5 fw-light">Events</h1>
        </Container>
      </div>

      <Container className="margin-top">
        <div>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              className="d-flex gap-1 breadcrumb-hover"
              color="inherit"
              to="/"
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
              Blog
            </Typography>
          </Breadcrumbs>
        </div>

        <h4
          className="text-center fw-bold mb-5"
          style={{ color: "rgb(32 139 140)" }}
        >
          Blogs
        </h4>
        <div className="row">
          {BlogDetails?.map((item) => (
            <>
              <Card
                className="col-lg-3 m-auto mb-3 p-0"
                style={{ width: "15rem" }}
              >
                <Card.Img
                  variant="top"
                  src={`http://localhost:8521/Blog/${item?.BlogImg}`}
                  alt="service-img"
                  className="card_img_0"
                />
                <Card.Body>
                  <Card.Text>
                    {" "}
                    <Link
                      to="/eventBlog"
                      state={{ item: item }}
                      className="fw-semibold"
                      style={{
                        textDecoration: "none",
                        color: "rgb(32 139 140)",
                      }}
                      href="/eventBlog"
                    >
                      {item?.BlogTag}
                    </Link>{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </>
          ))}
        </div>
      </Container>
    </div>
  );
};
