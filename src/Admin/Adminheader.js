import React, { useEffect, useState } from "react";
import { FaUserShield } from "react-icons/fa";
import { BsFillMoonStarsFill, BsSun, BsFillEyeFill } from "react-icons/bs";
import "./Adminheader.css";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
// import Sidebar1 from "./Sidebar1";
import { Button, Modal, Table } from "react-bootstrap";
import axios from "axios";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faTag,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import moment from "moment/moment";

export default function Adminheader() {
  let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
  // let Subadmin = JSON.parse(sessionStorage.getItem("Subadmin"));
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
  var darkmode = sessionStorage.getItem("darkmode");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const DarkMode = () => {
    sessionStorage.setItem("darkmode", true);

    window.location.reload();
  };

  const LightMode = () => {
    sessionStorage.removeItem("darkmode");

    window.location.reload();
  };

  // Inventory

  const [catid, setcatid] = useState("");
  const [subcatid, setsubcatid] = useState("");
  const [categoryList, setcategoryList] = useState([]);
  const [prodid, setprodid] = useState("");
  const [ChosenProd, setChosenProd] = useState({});
  const [stock, setstock] = useState(null);
  const [price, setprice] = useState(0);
  const [discount, setdiscount] = useState(0);
  const [afterDiscountPrice, setafterDiscountPrice] = useState(0);
  const [productImgs, setproductImgs] = useState([]);
  const [showproductImgs, setshowproductImgs] = useState([]);
  const [productInfo, setproductInfo] = useState([]);
  const getAllCategory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getcategoryList"
      );
      if (res.status === 200) {
        setcategoryList(res.data.allcategory);
      }
    } catch (error) {
      console.log(error);
      setcategoryList(error.response.data.allcategory);
    }
  };

  const [subcategoryList, setsubcategoryList] = useState([]);
  const getAllSubCategory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getsubcategoryList"
      );
      if (res.status === 200) {
        setsubcategoryList(res.data.allsubcategory);
      }
    } catch (error) {
      console.log(error);
      setsubcategoryList(error.response.data.allsubcategory);
    }
  };
  const [orderedProductsList, setorderedProductsList] = useState([]);
  const listOfOrderedProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8521/api/vendor/getAllAdminOrders/${adminDetails?._id}`
      );
      if (res.status === 200) {
        let seen = {};
        setorderedProductsList(
          res.data.allAdminOrders.filter((obj) => {
            if (
              !seen[obj.productId] &&
              obj.orderStatus === "DELIVERED" &&
              obj.orderPayment === "DONE"
            ) {
              seen[obj.productId] = true;
              return true;
            }
            return false;
          })
        );
      }
    } catch (error) {
      console.log(error);
      setorderedProductsList([]);
    }
  };

  console.log("mkk ", orderedProductsList);

  const [inventoryList, setinventoryList] = useState([]);
  async function getInventoryList() {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/inventoryList"
      );
      if (res.status === 200) {
        setinventoryList(
          res.data.inventoryList
          // .filter((item) => item.stock <= 10)
        );
      }
    } catch (error) {
      setinventoryList([]);
    }
  }
  console.log("header inventory list: ", inventoryList);

  useEffect(() => {
    // getProductList();
    // getAllVendors();
    getAllCategory();
    getAllSubCategory();
    listOfOrderedProducts();
    getInventoryList();
  }, []);

  useEffect(() => {
    setafterDiscountPrice(
      Number((price - (price * discount) / 100).toFixed(1))
    );
  }, [price, discount]);

  return (
    <div>
      <div
        className={darkmode ? "Adminheaderdarkmode" : "Adminheaderlightmode"}
      >
        <div className="row">
          <div className="col-lg-2 d-flex justify-content-center">
            <img
              alt=""
              src="../Images/logo.png"
              style={{ width: "70%", height: "70px" }}
            />
          </div>
          <div className="col-lg-5"></div>
          <div className="col-lg-2 d-flex align-items-center justify-content-center">
            <Button
              className="min-stock-alert-button"
              onClick={() => {
                handleShow();
              }}
            >
              Min Stock Alert
            </Button>
          </div>
          <div className="col-lg-2" style={{ textAlign: "center" }}>
            {darkmode ? (
              <button
                style={{
                  marginTop: "10%",
                  textAlign: "center",
                  borderRadius: "1px solid grey",
                  // borderRadius: "4px",
                  backgroundColor: "transparent",
                }}
                onClick={() => {
                  LightMode();
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    marginRight: "10px",
                    fontWeight: "500",
                    color: darkmode ? "white" : "black",
                  }}
                >
                  LIGHT MODE
                </span>
                <BsSun
                  style={{
                    color: darkmode ? "white" : "black",
                  }}
                />
              </button>
            ) : (
              <button
                style={{
                  marginTop: "10%",
                  textAlign: "center",
                  borderRadius: "1px solid grey",
                  // borderRadius: "4px",
                  backgroundColor: "transparent",
                }}
                onClick={() => {
                  DarkMode();
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    marginRight: "10px",
                    fontWeight: "500",
                    color: darkmode ? "white" : "black",
                  }}
                >
                  DARK MODE
                </span>
                <BsFillMoonStarsFill
                  style={{
                    color: darkmode ? "white" : "black",
                  }}
                />
              </button>
            )}
          </div>

          <div className="col-lg-1">
            <FaUserShield style={{ fontSize: "40px", marginTop: "10px" }} />
          </div>
        </div>

        <Modal
          show={show}
          size="lg"
          onHide={handleClose}
          animation={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Minimum stock Alert</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table responsive style={{ marginTop: "1%" }}>
              <thead>
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <th>Inventory Id</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Subcategory</th>
                  <th>Amount</th>
                  <th>Discount</th>
                  <th>Offer Amount</th>
                  <th>Stock Availability</th>

                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {inventoryList
                  ?.filter(
                    (item) => item.stock <= 10 || item.stock <= item.minstock
                  )
                  ?.map((details) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>#{details?.inventoryid}</td>
                        <td>{details?.productName}</td>
                        <td>{details?.categoryid?.categoryName}</td>
                        <td>{details?.subcategoryid?.subcategoryName}</td>
                        <td style={{ textAlign: "center" }}>
                          {details?.currencyFormat}
                          {details?.productPrice}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {details?.discount}
                        </td>
                        <td>
                          {(
                            details?.productPrice -
                            (details?.productPrice * details?.discount) / 100
                          ).toFixed(1)}
                        </td>
                        <td style={{ textAlign: "center", color: "red" }}>
                          {details?.stock}
                        </td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              textAlign: "center",
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

                            {/* <button
                          style={{
                            fontSize: "12px",
                            border: "none",
                            backgroundColor: "#20958c",
                            color: "white",
                            fontWeight: "600",
                            borderRadius: "4px",
                          }}
                        >
                          BLOCK
                        </button> */}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>

        {/* information of specific product */}
        <Modal size="lg" show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Product Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              {/* <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  Vendor:
                </label>
                <span
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  #{productInfo?.vendorId?.vendorId}{" "}
                  {productInfo?.vendorId?.fname} {productInfo?.vendorId?.lname}
                </span>
              </div> */}
              {/* <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  Category:
                </label>
                <span
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  {productInfo?.categoryid?.categoryName}
                </span>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  Subcategory:
                </label>
                <span
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  {productInfo?.subcategoryid?.subcategoryName}
                </span>
              </div> */}
              {/* <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  Total Amount:
                </label>
                <span
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  {productInfo?.totalPaidPrice}
                </span>
              </div> */}
              {/* <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  Payment Option:
                </label>
                <span
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  {productInfo?.paymentOption}
                </span>
              </div> */}
              {/* <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  Order Status:
                </label>
                <span
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  {productInfo?.orderStatus}
                </span>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  Order Payment:
                </label>
                <span
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                    color:
                      productInfo.orderPayment === "PENDING" ? "red" : "green",
                  }}
                >
                  {productInfo?.orderPayment}
                </span>
              </div> */}
              <div style={{ padding: "13px 13px" }}>
                <div
                  className="col-lg-12 col-sm-12 mt-2 "
                  style={{
                    border: "1px solid #ebebeb",
                    padding: "8px 20px",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  {/* <h5 style={{ color: "#808084" }}>Description: </h5> */}
                  <p
                    style={{
                      color: "rgb(69 69 72)",
                      fontWeight: "600",
                      marginBottom: "0px",
                    }}
                  >
                    {productInfo?.productName}
                  </p>
                  <div
                    style={{
                      color: "#4A4A4D",
                      fontWeight: "600",
                    }}
                  >
                    ₹
                    {(
                      productInfo?.productPrice -
                      (productInfo?.productPrice * productInfo?.discount) / 100
                    ).toFixed(1)}{" "}
                    <span
                      style={{
                        color: "#4A4A4D",
                        fontWeight: "600",
                        textDecoration: "line-through",
                      }}
                    >
                      ₹{productInfo?.productPrice}
                    </span>{" "}
                    <span>{productInfo?.discount}% off</span>
                    <FontAwesomeIcon
                      icon={faTag}
                      shake
                      style={{ color: "#f24318", paddingLeft: "6px" }}
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Category: {productInfo?.categoryid?.categoryName}
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Subcategory: {productInfo?.subcategoryid?.subcategoryName}
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Stock: {productInfo?.stock}
                    </div>
                    {productInfo?.productType ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Product Type: {productInfo?.productType}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.productSize ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Product Size: {productInfo?.productSize}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.packSize ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Pack Size: {productInfo?.packSize}
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Manufacturing Date:{" "}
                      {moment(productInfo?.manufacturingDate).format(
                        "DD-MM-YYYY"
                      )}
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Expiry Date:{" "}
                      {moment(productInfo?.expiryDate).format("DD-MM-YYYY")}
                    </div>
                    {productInfo?.colour ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Colour: {productInfo?.colour}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.flavour ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Flavour: {productInfo?.flavour}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.fragrance ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Fragrance: {productInfo?.fragrance}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.variant ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Varient: {productInfo?.variant}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.brand ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Brand: {productInfo?.brand}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.countryOfOrigin ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Country Of Origin: {productInfo?.countryOfOrigin}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.manufacturercompanyname ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Manufacturer Company:{" "}
                        {productInfo?.manufacturercompanyname}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.manufactureraddress ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Manufacturer Address: {productInfo?.manufactureraddress}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="mt-3">
                    <Carousel responsive={responsive}>
                      {productInfo?.productImgs?.map((imgName) => {
                        return (
                          <div>
                            <img
                              src={`http://localhost:8521/AdminInventory/${imgName}`}
                              alt=""
                              style={{
                                width: "200px",
                                height: "200px",
                              }}
                            />
                          </div>
                        );
                      })}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
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
