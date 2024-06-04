import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTag } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Carousel from "react-multi-carousel";
import moment from "moment/moment";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function VendorAddedProductsStatus() {
  const navigate = useNavigate();
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
  useEffect(() => {
    adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
    if (!adminDetails) {
      return alert("Access Denied!!!");
    } else {
    }
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [orderedProductsList, setorderedProductsList] = useState([]);
  const [SelectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    listOfOrderedProducts();
  }, []);

  const listOfOrderedProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8521/api/vendor/getAllAdminOrders/${adminDetails?._id}`
      );
      if (res.status === 200) {
        setorderedProductsList(res.data.allAdminOrders);
      }
    } catch (error) {
      console.log(error);
      setorderedProductsList([]);
    }
  };

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);

  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = orderedProductsList.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      settableFilter([...filterTable]);
    } else {
      setSearch(e.target.value);
      setorderedProductsList([...orderedProductsList]);
    }
  };

  // console.log("orderedProductsList", orderedProductsList);
  // console.log("SelectedProduct", SelectedProduct);
  console.log("adminInvoice44: ", orderedProductsList);
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
            Order History
          </h6>
          <input
            placeholder="Search Orders"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
            onChange={handleFilter}
          />
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
              <AiOutlinePlusCircle
                className="AddIcon1"
                onClick={() => setShow(true)}
              />
            </div> */}
        </div>

        <Table
          className="table "
          responsive
          style={{ width: "1500px" }}
          bordered
        >
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Order id</th>
              <th>Product Name</th>
              <th>Vendor Price</th>
              <th>Admin Price</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Payment Detils</th>
              <th>Status</th>
              <th>Details</th>
              <th>Invoice</th>

              {/* <th>Contact</th>

              <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? tableFilter.map((val) => {
                  return (
                    <tr style={{ fontSize: "15px", textAlign: "center" }}>
                      <td>{val?._id}</td>
                      <td>{val?.productId?.productName}</td>
                      <td>{val.VendorPrice}</td>
                      <td> {val.AdminPrice}</td>
                      <td>{val.quantity}</td>
                      <td>{val.totalPrice}</td>
                      <td>
                        <div
                          style={{
                            fontWeight: "600",
                            color:
                              val.orderPayment === "PENDING" ? "red" : "green",
                          }}
                        >
                          {val.orderPayment}
                        </div>
                      </td>
                      <td>{val.orderStatus}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faCircleInfo}
                          style={{ color: "#20958c", fontSize: "25px" }}
                          onClick={() => {
                            handleShow();
                            setSelectedProduct(val);
                          }}
                        />
                      </td>
                      <td>
                        {val.orderStatus === "DELIVERED" ? (
                          <FaFileInvoiceDollar
                            style={{ fontSize: "30px", color: "#20958C" }}
                            onClick={() =>
                              navigate("/admin/Vendor-Admin-Inv", {
                                state: {
                                  ProductDetails: val,
                                },
                              })
                            }
                          />
                        ) : (
                          <></>
                        )}
                      </td>
                      {/* <td>{val.totalPaidPrice}</td> */}
                    </tr>
                  );
                })
              : orderedProductsList.map((val) => {
                  return (
                    <tr style={{ fontSize: "15px", textAlign: "center" }}>
                      <td>{val?._id}</td>
                      <td>{val?.productId?.productName}</td>
                      <td>{val.VendorPrice}</td>
                      <td> {val.AdminPrice}</td>
                      <td>{val.quantity}</td>
                      <td>{val.totalPrice}</td>
                      <td>
                        <div
                          style={{
                            fontWeight: "600",
                            color:
                              val.orderPayment === "PENDING" ? "red" : "green",
                          }}
                        >
                          {val.orderPayment}
                        </div>
                      </td>
                      <td>{val.orderStatus}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faCircleInfo}
                          style={{ color: "#20958c", fontSize: "25px" }}
                          onClick={() => {
                            handleShow();
                            setSelectedProduct(val);
                          }}
                        />
                      </td>
                      <td>
                        {val.orderStatus === "DELIVERED" ? (
                          <FaFileInvoiceDollar
                            style={{ fontSize: "30px", color: "#20958C" }}
                            onClick={() =>
                              navigate("/admin/Vendor-Admin-Inv", {
                                state: {
                                  ProductDetails: val,
                                },
                              })
                            }
                          />
                        ) : (
                          <></>
                        )}
                      </td>
                      {/* <td>{val.totalPaidPrice}</td> */}
                    </tr>
                  );
                })}
          </tbody>
        </Table>
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header className="all-bg-green text-light">
          <Modal.Title>Product Details</Modal.Title>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body className="all-bg-green ">
          <div className="row" style={{ color: "white" }}>
            <div className="col-lg-4">
              <img
                src={`http://localhost:8521/Vendor/${SelectedProduct?.vendorId?.profilePic}`}
                style={{ width: "50%" }}
              />
              <div style={{ border: "1px solid lightgrey" }}>
                <h6
                  style={{
                    textAlign: "center",
                    padding: "4% 0%",
                    backgroundColor: "lightblue",
                  }}
                >
                  ABOUT VENDOR
                </h6>

                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>NAME</b> :{SelectedProduct?.vendorId?.fname}&nbsp;
                  {SelectedProduct?.vendorId?.lname}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>EmailID</b> : {SelectedProduct?.vendorId?.email}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Mobile</b> : {SelectedProduct?.vendorId?.phone}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>vendor Id</b> : {SelectedProduct?.vendorId?.vendorId}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Address</b> : {SelectedProduct?.vendorId?.address1},
                  {SelectedProduct?.vendorId?.city} -{" "}
                  {SelectedProduct?.vendorId?.pincode}
                </h6>
              </div>
            </div>
            <div className="col-lg-8">
              <div style={{ border: "1px solid lightgrey", padding: "2%" }}>
                <Row>
                  {SelectedProduct?.productId?.productImgs?.length > 0 ? (
                    <Col md={2}>
                      <img
                        src={`http://localhost:8521/VendorProduct/${SelectedProduct?.productId?.productImgs[0]}`}
                        style={{ width: "100%" }}
                      />
                    </Col>
                  ) : (
                    ""
                  )}
                  <Col md={10}>
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "justify",
                        fontWeight: "600",
                      }}
                    >
                      {SelectedProduct?.productId?.productName}
                    </p>
                    {/* <p>
                      ({SelectedProduct?.categoryid?.categoryName} -{" "}
                      {SelectedProduct?.subcategoryid?.subcategoryName})
                    </p> */}
                  </Col>
                </Row>

                <hr></hr>
                <p style={{ textAlign: "justify" }}>
                  {SelectedProduct?.productId?.description}
                </p>
                <Row>
                  <Col md={6}>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Product Type :
                    </span>
                  </Col>
                  <Col md={6}>{SelectedProduct?.productId?.productType}</Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Manufacturer company name :
                    </span>
                  </Col>
                  <Col md={6}>
                    {SelectedProduct?.productId?.manufacturercompanyname}
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Manufacturer company Address :
                    </span>
                  </Col>
                  <Col md={6}>
                    {SelectedProduct?.productId?.manufactureraddress}
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Manufacturing Date :
                    </span>
                  </Col>
                  <Col md={6}>
                    {SelectedProduct?.productId?.manufacturingDate}
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Brand:
                    </span>
                  </Col>
                  <Col md={6}>{SelectedProduct?.productId?.brand}</Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Colour :
                    </span>
                  </Col>
                  <Col md={6}>{SelectedProduct?.productId?.colour}</Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Country Of Origin :
                    </span>
                  </Col>
                  <Col md={6}>
                    {SelectedProduct?.productId?.countryOfOrigin}
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Flavour :
                    </span>
                  </Col>
                  <Col md={6}>{SelectedProduct?.productId?.flavour}</Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Fragrance :
                    </span>
                  </Col>
                  <Col md={6}>{SelectedProduct?.productId?.fragrance}</Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Colour :
                    </span>
                  </Col>
                  <Col md={6}>{SelectedProduct?.productId?.colour}</Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Manufacturing Date :
                    </span>
                  </Col>
                  <Col md={6}>
                    {moment(
                      SelectedProduct?.productId?.manufacturingDate
                    )?.format("DD-MM-YYYY")}
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Expiry Date :
                    </span>
                  </Col>
                  <Col md={6}>
                    {moment(SelectedProduct?.productId?.expiryDate)?.format(
                      "DD-MM-YYYY"
                    )}
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <span style={{ fontSize: "14px", fontWeight: "600" }}>
                          Product Price :
                        </span>
                      </Col>
                      <Col md={6}>
                        {SelectedProduct?.productId?.productPrice} &nbsp;
                        {SelectedProduct?.productId?.currencyFormat}
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <span style={{ fontSize: "14px", fontWeight: "600" }}>
                          Discount :
                        </span>
                      </Col>
                      <Col md={6}>
                        {SelectedProduct?.productId?.discount}&nbsp;
                        {SelectedProduct?.productId?.currencyFormat}
                      </Col>
                    </Row>
                  </Col>
                </Row>

                {/* <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    Heart Beat
                  </span>
                  <ProgressBar
                    variant="success"
                    style={{ height: "6px" }}
                    now={40}
                  />

                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    Blood Pressure
                  </span>
                  <ProgressBar
                    variant="info"
                    style={{ height: "6px" }}
                    now={60}
                  />

                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    Sugar
                  </span>
                  <ProgressBar
                    variant="warning"
                    style={{ height: "6px" }}
                    now={60}
                  />

                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    Haemoglobin
                  </span>
                  <ProgressBar
                    variant="danger"
                    style={{ height: "6px" }}
                    now={60}
                  /> */}
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <div style={{ display: "flex" }}>
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                marginRight: "20px",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow(false);
              }}
            >
              CANCEL
            </button>

            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow(false);
                alert("Doctor Added");
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}
