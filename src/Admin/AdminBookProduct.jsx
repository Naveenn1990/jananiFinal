import React, { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
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

function AdminBookProduct() {
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

  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }))(Badge);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [productInfo, setproductInfo] = useState([]);

  const [inventoryList, setinventoryList] = useState([]);
  async function getInventoryList() {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/inventoryList"
      );
      if (res.status === 200) {
        setinventoryList(res.data.inventoryList);
      }
    } catch (error) {
      setinventoryList([]);
    }
  }

  useEffect(() => {
    adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
    if (!adminDetails) {
      return alert("Access Denied!!!");
    } else {
      getInventoryList();
      getAdmincartproduct();
    }
  }, []);

  const AddToCart = async (item) => {
    try {
      const config = {
        url: "/admin/Adminaddtocart",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          productId: item?.vendorIdProductId,
          categoryid: item?.categoryid?._id,
          subcategoryid: item?.subcategoryid?._id,
          productName: item?.productName,
          productPrice: item?.productPrice,
          discount: item?.discount,
          Totalamount:
            item?.productPrice - (item?.productPrice * item?.discount) / 100,
          quantity: 1,
          InventroryId: item?._id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getAdmincartproduct();
        alert(res.data.success);
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [CartProducts, setCartProducts] = useState([]);
  const getAdmincartproduct = () => {
    axios
      .get("http://localhost:8521/api/admin/getAdmincartproduct")
      .then(function (response) {
        setCartProducts(response.data.getdata);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);

  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = inventoryList.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      settableFilter([...filterTable]);
    } else {
      setSearch(e.target.value);
      setinventoryList([...inventoryList]);
    }
  };
  return (
    <div>
      <div style={{ padding: "1%" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Products
        </h6>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <input
            placeholder="Search Product"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
            onChange={handleFilter}
          />
          <div className="cart-badge holder col-lg-2 d-flex gap-2  justify-content-end px-2">
            <Link to="../admin/AdminBookProductCart">
              <IconButton aria-label="cart">
                <StyledBadge
                  badgeContent={CartProducts?.length}
                  color="secondary"
                >
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
          </div>
        </div>

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

        <Table
          className="table "
          responsive
          style={{ width: "1500px", marginTop: "1%" }}
          bordered
        >
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Product Image</th>
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
            {search.length > 0
              ? tableFilter
                  ?.filter((val) => val?.stock > 0)
                  ?.map((details) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>
                          <img
                            alt=""
                            src={`http://localhost:8521/AdminInventory/${details?.productImgs[0]}`}
                            style={{ width: "100px", height: "100px" }}
                          />
                        </td>
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
                        <td style={{ textAlign: "center" }}>
                          {details?.stock}
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

                            <button
                              style={{
                                fontSize: "12px",
                                border: "none",
                                backgroundColor: "#14a44d",
                                color: "white",
                                fontWeight: "600",
                                borderRadius: "4px",
                                width: "100px",
                              }}
                              onClick={() => AddToCart(details)}
                            >
                              ADD TO CART
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
              : inventoryList
                  ?.filter((val) => val?.stock > 0)
                  ?.map((details) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>
                          <img
                            alt=""
                            src={`http://localhost:8521/AdminInventory/${details?.productImgs[0]}`}
                            style={{ width: "100px", height: "100px" }}
                          />
                        </td>
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
                        <td style={{ textAlign: "center" }}>
                          {details?.stock}
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

                            <button
                              style={{
                                fontSize: "12px",
                                border: "none",
                                backgroundColor: "#14a44d",
                                color: "white",
                                fontWeight: "600",
                                borderRadius: "4px",
                                width: "100px",
                              }}
                              onClick={() => AddToCart(details)}
                            >
                              ADD TO CART
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AdminBookProduct;
