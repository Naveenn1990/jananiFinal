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

export default function AddProductInvetory() {
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

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [catid, setcatid] = useState("");
  const [subcatid, setsubcatid] = useState("");
  const [categoryList, setcategoryList] = useState([]);
  const [prodid, setprodid] = useState("");
  const [ChosenProd, setChosenProd] = useState({});
  const [stock, setstock] = useState(null);
  const [minstock, setminstock] = useState(null);
  const [maxOrderlimit, setmaxOrderlimit] = useState(null);
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

  // ======================== Add Product in the inventory========================
  async function addToInventory() {
    try {
      const obj = {
        categoryid: catid,
        subcategoryid: subcatid,
        stock: stock,
        minstock: minstock,
        maxOrderlimit: maxOrderlimit,
        productPrice: price,
        discount: discount,
        productImgs: productImgs,
        vendorIdProductId: ChosenProd.productId,
        productName: ChosenProd.productName,
        currencyFormat: ChosenProd.currencyFormat,
        productType: ChosenProd.productType,
        manufacturingDate: ChosenProd.manufacturingDate,
        expiryDate: ChosenProd.expiryDate,
        shortexpiryDate: ChosenProd.shortexpiryDate,
        description: ChosenProd.description,
        brand: ChosenProd.brand,
        productSize: ChosenProd.productSize,
        packSize: ChosenProd.packSize,
        colour: ChosenProd.colour,
        flavour: ChosenProd.flavour,
        fragrance: ChosenProd.fragrance,
        variant: ChosenProd.variant,
        countryOfOrigin: ChosenProd.countryOfOrigin,
        manufacturercompanyname: ChosenProd.manufacturercompanyname,
        manufactureraddress: ChosenProd.manufactureraddress,
      };
      const config = {
        url: "/admin/addToInventory",
        method: "post",
        headers: { "content-type": "multipart/form-data" },
        baseURL: "http://localhost:8521/api",
        data: obj,
      };
      await axios(config)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            alert(res.data.success);
          }
        })
        .catch((err) => {
          console.log(err);
          return alert(err.response.data.error);
        });
    } catch (error) {
      console.log(error);
      return alert("Error: Product is not added to the inventory!!!");
    }
  }

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
      // getProductList();
      // getAllVendors();
      getAllCategory();
      getAllSubCategory();
      listOfOrderedProducts();
      getInventoryList();
    }
  }, []);

  useEffect(() => {
    setafterDiscountPrice(
      Number((price - (price * discount) / 100).toFixed(1))
    );
  }, [price, discount]);
  return (
    <div>
      <div style={{ padding: "1%" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Inventory
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
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AiOutlinePlusCircle
              className="AddIcon1"
              onClick={() => setShow(true)}
            />
          </div>

          <button
            style={{
              backgroundColor: "#20958c",
              color: "white",
              border: "none",
              fontSize: "12px",
              borderRadius: "4px",
            }}
          >
            EXPORT <AiFillFileExcel />
          </button>
        </div>

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add To Inventory</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              {/* <div className="col-lg-6 col-sm-12 mt-2">
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
              </div> */}
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
                  onChange={(e) => {
                    setChosenProd(JSON.parse(e.target.value));
                    setprodid(JSON.parse(e.target.value)._id);
                  }}
                >
                  <option>Choose Products</option>
                  {orderedProductsList
                    .filter(
                      (val) =>
                        // val.vendorid._id === venid &&
                        val.categoryid._id === catid &&
                        val.subcategoryid._id === subcatid
                    )
                    ?.map((item) => {
                      return (
                        <option value={JSON.stringify(item)}>
                          {item?.productName}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <input
                  placeholder="Stocks Available"
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
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Price
                </label>
                <input
                  placeholder="Price"
                  value={price}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setprice(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Discount
                </label>
                <input
                  placeholder="Discount"
                  value={discount}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setdiscount(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Price After Discount
                </label>
                <div
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  ₹{afterDiscountPrice}
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Minimum alert stock
                </label>
                <input
                  placeholder="Minimum count"
                  value={minstock}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setminstock(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Maximum Order limit
                </label>
                <input
                  placeholder="Maximum order limit"
                  value={maxOrderlimit}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setmaxOrderlimit(event.target.value)}
                ></input>
              </div>
              {prodid ? (
                <div>
                  {orderedProductsList
                    .filter((item) => item._id === prodid)
                    .map((val) => {
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
                            <p
                              style={{
                                color: "rgb(69 69 72)",
                                fontWeight: "600",
                                marginBottom: "0px",
                              }}
                            >
                              {val?.productName}
                            </p>

                            {/* <div
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
                            </div> */}
                            <div className="row">
                              {/* <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                Stock: {val?.stock}
                              </div> */}
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
                              <span
                                style={{
                                  fontWeight: "500",
                                  color: "#20958c",
                                }}
                              >
                                Upload Images:{" "}
                              </span>
                              <input
                                type="file"
                                id="fileInput"
                                accept="image/*"
                                hidden
                                multiple
                                onChange={(e) => {
                                  setshowproductImgs([...e.target.files]);
                                  setproductImgs(e.target.files);
                                }}
                              />
                              <label for="fileInput">
                                <FontAwesomeIcon
                                  icon={faUpload}
                                  type="file"
                                  style={{
                                    color: "#20958c",
                                    fontSize: "25px",
                                    border: "0px solid #20958c",
                                    // borderRadius: "15px",
                                  }}
                                />
                              </label>
                            </div>
                            {showproductImgs.length ? (
                              <div className="mt-3">
                                <Carousel responsive={responsive}>
                                  {showproductImgs?.map((obj) => {
                                    return (
                                      <div>
                                        <img
                                          src={URL.createObjectURL(obj)}
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
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      );
                    })}
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
                onClick={() => {
                  addToInventory();
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Edit Product </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                >
                  <option>Select Category</option>
                  <option>Category-1</option>
                  <option>Category-2</option>
                </select>
              </div>

              <div className="col-lg-12">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                >
                  <option>Select Vendor</option>
                  <option>Vendor-1</option>
                  <option>Vendor-2</option>
                </select>
              </div>
              <div className="col-lg-12">
                <input
                  placeholder="Product Name"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Product Price"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Product Details"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>

              <div className="col-lg-12">
                <label
                  style={{
                    marginTop: "3%",
                    marginLeft: "4%",
                  }}
                >
                  Product Image
                </label>
                <input
                  type="file"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
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

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => {
                  setShow1(false);
                  alert("Product updated");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
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

        <Table responsive="md" style={{ marginTop: "1%" }}>
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
              ?.filter((val) => val?.stock > 0)
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
                    <td style={{ textAlign: "center" }}>{details?.discount}</td>
                    <td>
                      {(
                        details?.productPrice -
                        (details?.productPrice * details?.discount) / 100
                      ).toFixed(1)}
                    </td>
                    <td style={{ textAlign: "center" }}>{details?.stock}</td>
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
                        <MdEdit
                          style={{
                            color: "#20958c",
                            fontSize: "25px",
                            marginRight: "1%",
                          }}
                          onClick={() => setShow1(true)}
                        />
                        <AiFillDelete
                          style={{ color: "red", fontSize: "25px" }}
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
      </div>
    </div>
  );
}
