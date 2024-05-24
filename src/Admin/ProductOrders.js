import React, { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
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

export default function ProductOrders() {
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // for placing the order variables
  const [catid, setcatid] = useState("");
  const [subcatid, setsubcatid] = useState("");
  const [venid, setvenid] = useState("");
  const [prodid, setprodid] = useState("");
  const [stock, setstock] = useState(null);
  const [totalPaidPrice, settotalPaidPrice] = useState(0);
  let [priceWithDiscount, setpriceWithDiscount] = useState(null);

  const [VendorList, setVendorList] = useState([]);
  const [orderInfo, setorderInfo] = useState({});
  const getAllVendors = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/vendor/getvendorList"
      );
      if (res.status === 200) {
        setVendorList(res.data.allVendors);
      }
    } catch (error) {
      console.log(error);
      setVendorList([]);
    }
  };

  const [ProductList, setProductList] = useState([]);
  const getProductList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/vendor/productList"
      );
      if (res.status === 200) {
        setProductList(res.data.allProducts);
      }
    } catch (error) {
      console.log(error);
      setProductList([]);
    }
  };

  const [categoryList, setcategoryList] = useState([]);
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

  // order from the vendor
  const orderProducts = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/vendor/postAdminOrders",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          vendorId: venid,
          productId: prodid,
          adminId: adminDetails._id,
          stock: stock,
          categoryid: catid,
          subcategoryid: subcatid,
          totalPaidPrice: totalPaidPrice,
        },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        setcatid("");
        setsubcatid("");
        setvenid("");
        setprodid("");
        setstock(0);
        settotalPaidPrice(0);
        setpriceWithDiscount(0);
        listOfOrderedProducts();
        handleClose();
      }
    } catch (error) {
      console.log(error);
      return alert(error.response.data.error);
    }
  };

  const [orderedProductsList, setorderedProductsList] = useState([]);
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
  useEffect(() => {
    adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
    if (!adminDetails) {
      return alert("Access Denied!!!");
    } else {
      getProductList();
      getAllVendors();
      getAllCategory();
      getAllSubCategory();
      listOfOrderedProducts();
    }
  }, []);
  useEffect(() => {
    ProductList.filter((item) => item._id === prodid).map((val) => {
      priceWithDiscount =
        val?.productPrice -
        ((val?.productPrice * val?.discount) / 100).toFixed(1);
    });
    settotalPaidPrice(priceWithDiscount * stock);
  }, [stock, prodid]);
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
          />
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
              <AiOutlinePlusCircle
                className="AddIcon1"
                onClick={() => setShow(true)}
              />
            </div> */}
        </div>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Order id</th>
              <th>Product Name</th>
              <th>Cost Amount</th>

              <th>Discount</th>
              <th>Stock</th>
              <th>Payment Option</th>
              <th>Order Status</th>
              <th>Order Payment</th>
              <th>Total Amount</th>
              <th>Details</th>

              {/* <th>Contact</th>

              <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {orderedProductsList.map((val) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>{val._id}</td>
                  <td>{val.productName}</td>
                  <td>
                    {val.currencyFormat}
                    {val.productPrice}
                  </td>

                  <td>{val.discount}%</td>
                  <td>{val.stock}</td>
                  <td>{val.paymentOption}</td>
                  <td>{val.orderStatus}</td>
                  <td>
                    <div
                      style={{
                        fontWeight: "600",
                        color: val.orderPayment === "PENDING" ? "red" : "green",
                      }}
                    >
                      {val.orderPayment}
                    </div>{" "}
                  </td>
                  <td>{val.totalPaidPrice}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      style={{ color: "#20958c", fontSize: "25px" }}
                      onClick={() => {
                        setorderInfo(val);
                        handleShow1();
                      }}
                    />
                  </td>
                  {/* <td>John@gmail.com</td>
                  <td>9565326532</td>

                  <td>
                    <div
                      style={{
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <MdEdit style={{ color: "#20958c", marginRight: "1%" }} />
                      <AiFillDelete style={{ color: "red" }} />
                 
                    </div>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <AiOutlinePlusCircle
          className="AddIcon1"
          // id="circleIcon"
          onClick={handleShow}
        />
        {/* <h6 className="placeOrder">Place Order</h6> */}

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Place Order</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6 col-sm-12 mt-2">
                <select
                  style={{
                    width: "100%",
                    backgroundColor: "#EBEBEB",
                    padding: "8px 20px",
                    border: "1px solid #EBEBEB",
                  }}
                  onChange={(e) => setvenid(e.target.value)}
                >
                  <option>Choose Vendors</option>
                  {VendorList?.map((details) => {
                    return (
                      <option value={details._id}>
                        #{details?.vendorId} {details?.fname} {details?.lname}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <select
                  style={{
                    width: "100%",
                    backgroundColor: "#EBEBEB",
                    padding: "8px 20px",
                    border: "1px solid #EBEBEB",
                  }}
                  onChange={(e) => setcatid(e.target.value)}
                >
                  <option>Choose Category</option>
                  {categoryList?.map((item) => {
                    return (
                      <option value={item._id}>{item?.categoryName}</option>
                    );
                  })}
                </select>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <select
                  style={{
                    width: "100%",
                    backgroundColor: "#EBEBEB",
                    padding: "8px 20px",
                    border: "1px solid #EBEBEB",
                  }}
                  onChange={(e) => setsubcatid(e.target.value)}
                >
                  <option>Choose Subategory</option>
                  {subcategoryList
                    .filter((val) => val.categoryid._id === catid)
                    ?.map((item) => {
                      return (
                        <option value={item._id}>
                          {item?.subcategoryName}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <select
                  style={{
                    width: "100%",
                    backgroundColor: "#EBEBEB",
                    padding: "8px 20px",
                    border: "1px solid #EBEBEB",
                  }}
                  onChange={(e) => setprodid(e.target.value)}
                >
                  <option>Choose Products</option>
                  {ProductList.filter(
                    (val) =>
                      val.vendorid._id === venid &&
                      val.categoryid._id === catid &&
                      val.subcategoryid._id === subcatid
                  )?.map((item) => {
                    return (
                      <option value={item._id}>{item?.productName}</option>
                    );
                  })}
                </select>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <input
                  placeholder="Stock Needed"
                  value={stock}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setstock(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <div
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  ₹{totalPaidPrice}
                </div>
              </div>
              {prodid ? (
                <div>
                  {ProductList.filter((item) => item._id === prodid).map(
                    (val) => {
                      return (
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
                              {val?.productName}
                            </p>
                            <div
                              style={{
                                color: "#4A4A4D",
                                fontWeight: "600",
                              }}
                            >
                              ₹
                              {(
                                val?.productPrice -
                                (val?.productPrice * val?.discount) / 100
                              ).toFixed(1)}{" "}
                              <span
                                style={{
                                  color: "#4A4A4D",
                                  fontWeight: "600",
                                  textDecoration: "line-through",
                                }}
                              >
                                ₹{val?.productPrice}
                              </span>{" "}
                              <span>{val?.discount}% off</span>
                              <FontAwesomeIcon
                                icon={faTag}
                                shake
                                style={{ color: "#f24318", paddingLeft: "6px" }}
                              />
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                Stock: {val?.stock}
                              </div>
                              {val?.productType ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  Product Type: {val?.productType}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.productSize ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  Product Size: {val?.productSize}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.packSize ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  Pack Size: {val?.packSize}
                                </div>
                              ) : (
                                <></>
                              )}
                              <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                Manufacturing Date:{" "}
                                {moment(val?.manufacturingDate).format(
                                  "DD-MM-YYYY"
                                )}
                              </div>
                              <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                Expiry Date:{" "}
                                {moment(val?.expiryDate).format("DD-MM-YYYY")}
                              </div>
                              {val?.colour ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  Colour: {val?.colour}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.flavour ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  Flavour: {val?.flavour}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.fragrance ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  Fragrance: {val?.fragrance}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.variant ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  Varient: {val?.variant}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.brand ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  Brand: {val?.brand}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.countryOfOrigin ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  Country Of Origin: {val?.countryOfOrigin}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.manufacturercompanyname ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  Manufacturer Company:{" "}
                                  {val?.manufacturercompanyname}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.manufactureraddress ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  Manufacturer Address:{" "}
                                  {val?.manufactureraddress}
                                </div>
                              ) : (
                                <></>
                              )}
                            </div>
                            <div className="mt-3">
                              <Carousel responsive={responsive}>
                                {val?.productImgs.map((imgName) => {
                                  return (
                                    <div>
                                      <img
                                        src={`http://localhost:8521/VendorProduct/${imgName}`}
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
                      );
                    }
                  )}
                </div>
              ) : (
                <></>
              )}
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
                onClick={() => setShow(false)}
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
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={(e) => {
                  orderProducts(e);
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        {/* information of specific product */}
        <Modal size="lg" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Order Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6 col-sm-12 mt-2">
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
                  #{orderInfo?.vendorId?.vendorId} {orderInfo?.vendorId?.fname}{" "}
                  {orderInfo?.vendorId?.lname}
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
                  {orderInfo?.categoryid?.categoryName}
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
                  {orderInfo?.subcategoryid?.subcategoryName}
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
                  {orderInfo?.totalPaidPrice}
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
                  {orderInfo?.paymentOption}
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
                  {orderInfo?.orderStatus}
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
                      orderInfo.orderPayment === "PENDING" ? "red" : "green",
                  }}
                >
                  {orderInfo?.orderPayment}
                </span>
              </div>
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
                    {orderInfo?.productName}
                  </p>
                  <div
                    style={{
                      color: "#4A4A4D",
                      fontWeight: "600",
                    }}
                  >
                    ₹
                    {(
                      orderInfo?.productPrice -
                      (orderInfo?.productPrice * orderInfo?.discount) / 100
                    ).toFixed(1)}{" "}
                    <span
                      style={{
                        color: "#4A4A4D",
                        fontWeight: "600",
                        textDecoration: "line-through",
                      }}
                    >
                      ₹{orderInfo?.productPrice}
                    </span>{" "}
                    <span>{orderInfo?.discount}% off</span>
                    <FontAwesomeIcon
                      icon={faTag}
                      shake
                      style={{ color: "#f24318", paddingLeft: "6px" }}
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Stock: {orderInfo?.stock}
                    </div>
                    {orderInfo?.productType ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Product Type: {orderInfo?.productType}
                      </div>
                    ) : (
                      <></>
                    )}
                    {orderInfo?.productSize ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Product Size: {orderInfo?.productSize}
                      </div>
                    ) : (
                      <></>
                    )}
                    {orderInfo?.packSize ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Pack Size: {orderInfo?.packSize}
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Manufacturing Date:{" "}
                      {moment(orderInfo?.manufacturingDate).format(
                        "DD-MM-YYYY"
                      )}
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Expiry Date:{" "}
                      {moment(orderInfo?.expiryDate).format("DD-MM-YYYY")}
                    </div>
                    {orderInfo?.colour ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Colour: {orderInfo?.colour}
                      </div>
                    ) : (
                      <></>
                    )}
                    {orderInfo?.flavour ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Flavour: {orderInfo?.flavour}
                      </div>
                    ) : (
                      <></>
                    )}
                    {orderInfo?.fragrance ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Fragrance: {orderInfo?.fragrance}
                      </div>
                    ) : (
                      <></>
                    )}
                    {orderInfo?.variant ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Varient: {orderInfo?.variant}
                      </div>
                    ) : (
                      <></>
                    )}
                    {orderInfo?.brand ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Brand: {orderInfo?.brand}
                      </div>
                    ) : (
                      <></>
                    )}
                    {orderInfo?.countryOfOrigin ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Country Of Origin: {orderInfo?.countryOfOrigin}
                      </div>
                    ) : (
                      <></>
                    )}
                    {orderInfo?.manufacturercompanyname ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Manufacturer Company:{" "}
                        {orderInfo?.manufacturercompanyname}
                      </div>
                    ) : (
                      <></>
                    )}
                    {orderInfo?.manufactureraddress ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Manufacturer Address: {orderInfo?.manufactureraddress}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="mt-3">
                    <Carousel responsive={responsive}>
                      {orderInfo?.productImgs?.map((imgName) => {
                        return (
                          <div>
                            <img
                              src={`http://localhost:8521/VendorProduct/${imgName}`}
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
                onClick={() => setShow1(false)}
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
