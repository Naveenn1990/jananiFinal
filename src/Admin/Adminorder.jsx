import React, { useEffect, useState } from "react";
import { Modal, Table, Form, Button } from "react-bootstrap";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faTag,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Carousel from "react-multi-carousel";
import moment from "moment/moment";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function Adminorder() {
  let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [productInfo, setproductInfo] = useState([]);
  const [AdminOrders, setAdminOrders] = useState([]);

  useEffect(() => {
    adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
    if (!adminDetails) {
      return alert("Access Denied!!!");
    } else {
      getAdminOrder();
    }
  }, []);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const getAdminOrder = () => {
    axios
      .get("http://localhost:8521/api/admin/getAdminOrder")
      .then(function (response) {
        setAdminOrders(response.data.allAdminOrders);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log("setAdminOrders", AdminOrders);

  return (
    <div>
      <div style={{ padding: "1%" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Admin Order History
        </h6>

        <Table
          className="table "
          responsive
          style={{ width: "1000px", marginTop: "1%" }}
          bordered
        >
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Order ID</th>
              <th>Patient Name</th>
              <th>Patient Contact Number</th>
              <th>Patient Type</th>
              <th>Pateint Address</th>
              <th>Payment Method</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {AdminOrders?.map((details) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>{details?._id}</td>
                  <td>{details?.PatientName}</td>
                  <td style={{ textAlign: "center" }}>
                    {details?.PatientContactNumber}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {details?.PatientType}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {details?.PatientAddress}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {details?.PaymentMethod}
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faCircleInfo}
                        style={{ color: "#20958c", fontSize: "25px" }}
                        onClick={() => {
                          setproductInfo(details);
                          handleShow2();
                        }}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {/* information of specific product */}
        <Modal
          //   size="lg"
          show={show2}
          onHide={handleClose2}
          className="modalAdmin"
        >
          <Modal.Header>
            <Modal.Title>Product Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                backgroundColor: "white",
                width: "100%",
                padding: "3%",
              }}
            >
              <Table
                className="table "
                responsive
                style={{ width: "1000px", marginTop: "1%" }}
                bordered
              >
                <thead>
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Quantity</th>
                    <th>Totalamount</th>
                  </tr>
                </thead>
                <tbody>
                  {productInfo?.Products?.map((details) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{details?.productName}</td>
                        <td style={{ textAlign: "center" }}>
                          {details?.productPrice}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {details?.discount}%
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {details?.quantity}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {details?.Totalamount}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                //   border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  marginRight: "20px",
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => setShow2(false)}
              >
                CANCEL
              </button>

              {/* <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={(e) => {
                  orderProducts(e);
                }}
              >
                SUBMIT
              </button> */}
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}