import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  faHospital,
  faHouseMedical,
  faCapsules,
  faStethoscope,
  faBars,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Headerpharmacy } from "./headerpharmacy";

export const Pharmacy = () => {
  const navigate = useNavigate();
  let pharmacyUser = JSON.parse(sessionStorage.getItem("pharmacyUser"));

  const [GetPharmBanner, setGetPharmBanner] = useState([]);
  const getPharmacyBan = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getPharmacyBan"
      );
      if (res.status === 200) {
        setGetPharmBanner(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [brands, setbrands] = useState([]);
  const getBrands = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/admin/brandsList");
      if (res.status === 200) {
        setbrands(res.data.list);
      }
    } catch (error) {
      console.log(error);
      setbrands(error.response.data.list);
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

  const [ProductList, setProductList] = useState([]);
  const getAllProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/inventoryList"
      );
      if (res.status === 200) {
        setProductList(res.data.inventoryList);
      }
    } catch (error) {
      console.log(error);
      setProductList(error.response.data.inventoryList);
    }
  };

  const AddToCart = async (item) => {
    if (!pharmacyUser) {
      return alert("Please login first");
    }
    try {
      const config = {
        url: "/pharmacy/addtocart",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          patientid: pharmacyUser?._id,
          productid: item?._id,
          quantity: 1,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getCartItems();
        alert(res.data.success);
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const AddToWishlist = async (item) => {
    try {
      if (!pharmacyUser) {
        return alert("Please login first");
      }
      const config = {
        url: "/pharmacy/addtowishlist",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          patientid: pharmacyUser?._id,
          productid: item?._id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getWishlist();
        alert("Product Added to Wishlist");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert("Something went wrong with the data...");
      }
    }
  };

  const [wishlistData, setWishlistData] = useState({});
  const getWishlist = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8521/api/pharmacy/getWishlist/" + pharmacyUser?._id
      );
      if (res.status === 200) {
        setWishlistData(JSON.parse(res.data.msg));
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        // alert(error.response.data.error);
        setWishlistData({});
      }
    }
  };

  const removeFromWishlist = async (item) => {
    try {
      const config = {
        url: "/pharmacy/removeFromWishlist",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          patientid: pharmacyUser?._id,
          productid: item?._id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getWishlist();
        alert("Remove product from wishlist");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert("Something went wrong with the data...");
      }
    }
  };
  const [CartItemsList, setCartItemsList] = useState({});
  const getCartItems = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8521/api/pharmacy/getCartList/${pharmacyUser?._id}`
      );
      if (res.status === 200) {
        setCartItemsList(res.data.cartlist);
      }
    } catch (error) {
      setCartItemsList({});
    }
  };

  const [GetPharmCatBan, setGetPharmCatBan] = useState([]);
  const getPharmacyCatBan = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/GetPharmacyCategoryBan"
      );
      if (res.status === 200) {
        setGetPharmCatBan(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPharmacyBan();
    getAllCategory();
    getBrands();
    getAllSubCategory();
    getAllProducts();
    getWishlist();
    getCartItems();
    getPharmacyCatBan();
    Allorders();
  }, []);

  const highestDiscountProduct = ProductList?.reduce((max, obj) => {
    return obj.discount > max.discount ? obj : max;
  }, ProductList[0]);

  const xyz = [];
  for (let i = ProductList?.length - 1; i >= 0; --i) {
    xyz.push(ProductList[i]);
  }

  const [Orders, setOrders] = useState([]);
  const Allorders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/pharmacy/orderList"
      );
      if (res.status === 200) {
        setOrders(
          res.data.orderList?.filter(
            (order) => order?.orderStatus === "DELIVERED"
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const productCount = {};

  // Count occurrences of each vendorIdProductId and store the associated data
  Orders.forEach((order) => {
    order.orderedItems.forEach((item) => {
      const id = item.productid.vendorIdProductId;
      if (productCount[id]) {
        productCount[id].count++;
      } else {
        productCount[id] = { ...item.productid, count: 1 };
      }
    });
  });

  // Convert the productCount object to an array of objects for sorting
  const productCountArray = Object.values(productCount);

  // Sort the array based on the count in descending order
  productCountArray.sort((a, b) => b.count - a.count);

  // Get the top 2 repeated products
  const top2RepeatedProducts = productCountArray.slice(0, 2);

  console.log(top2RepeatedProducts, "gsfdg");
  console.log("Orders", Orders);

  console.log("ProductList", ProductList);

  return (
    <div>
      <Headerpharmacy
        wishlistData={wishlistData}
        CartItemsList={CartItemsList}
      />
      <Container fluid>
        {/* Left baar */}

        <div className="row ">
          <div
            className="col-lg-3 p-4 mb-4 pharmacy-left-col"
            style={{ backgroundColor: "#208B8C" }}
          >
            <br />
            <br />
            <div>
              <h4 className="fw-bold ps-4 text-light">
                <FontAwesomeIcon icon={faBars} /> Category{" "}
              </h4>

              <ul
                className="category-list"
                style={{
                  listStyle: "none",
                  height: "400px",
                  overflowX: "scroll",
                }}
              >
                {categoryList?.map((item) => {
                  return (
                    <li>
                      <Link
                        to="/PharmacyCategoryProducts"
                        state={{ CategoryName: item?.categoryName }}
                        className="text-light"
                      >
                        {item?.categoryName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mb-5">
              <br />
              <br />
              <h4 className="fw-bold ps-4 text-light">
                <FontAwesomeIcon icon={faBars} /> Popular Brands{" "}
              </h4>
              <ul
                className="category-list"
                style={{
                  listStyle: "none",
                  height: "400px",
                  overflowX: "scroll",
                }}
              >
                {brands?.map((brans) => (
                  <li>
                    <Link
                      to="/PharmacyBrandProducts"
                      state={{ BrandName: brans?.brandName }}
                      className="text-light"
                    >
                      {brans?.brandName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-5">
              <br />
              <h4 className="fw-bold ps-4 text-light">
                Hot Deals - {highestDiscountProduct?.discount}% Off
              </h4>
              <Card
                className="col-lg-4 m-auto mb-3 p-0"
                style={{ width: "16rem" }}
              >
                <Card.Img
                  variant="top"
                  src={`http://localhost:8521/VendorProduct/${highestDiscountProduct?.vendorIdProductId?.productImgs[0]}`}
                  alt="pharmacy-img"
                />
                <Card.Body>
                  <Card.Title>
                    {/* <a
                      className="fw-semibold"
                      style={{ textDecoration: "none", color: "black" }}
                      href="/pharmacy"
                    > */}
                    <Link
                      to="/pharmacydesc"
                      className="fw-semibold"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "15px",
                      }}
                      state={{ item: highestDiscountProduct }}
                    >
                      {highestDiscountProduct?.productName}
                    </Link>
                    {/* </a>{" "} */}
                  </Card.Title>
                  <Card.Text>
                    {highestDiscountProduct?.description?.slice(0, 60)}
                  </Card.Text>

                  <Card.Text
                    className="fw-bolder fs-4"
                    style={{ color: "#eb3a7b" }}
                  >
                    {highestDiscountProduct?.currencyFormat}
                    {highestDiscountProduct?.productPrice -
                      (highestDiscountProduct?.productPrice *
                        highestDiscountProduct?.discount) /
                        100}{" "}
                    <strike style={{ fontSize: "18px", color: "black" }}>
                      {highestDiscountProduct?.productPrice}
                    </strike>
                  </Card.Text>

                  <a onClick={() => AddToCart(highestDiscountProduct)}>
                    <Button className="green-btn-1"></Button>{" "}
                  </a>
                </Card.Body>
              </Card>
            </div>

            <div className="mb-5">
              <br />
              <h4 className="fw-bold ps-4 text-light"> Hot Products</h4>
              <ul className="category-list" style={{ listStyle: "none" }}>
                {xyz?.slice(0, 4)?.map((abc) => (
                  <li>
                    <div className="d-flex">
                      <div>
                        <Link
                          to="/pharmacydesc"
                          className="text-light"
                          style={{
                            textDecoration: "none",
                          }}
                          state={{ item: abc }}
                        >
                          <img
                            className="img-fluid"
                            style={{
                              width: "100%",
                              height: "100px",
                              backgroundColor: "white",
                            }}
                            src={`http://localhost:8521/VendorProduct/${abc?.vendorIdProductId?.productImgs[0]}`}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="p-2">
                        <Link
                          to="/pharmacydesc"
                          className="text-light"
                          style={{
                            textDecoration: "none",
                          }}
                          state={{ item: abc }}
                        >
                          {abc?.productName}
                        </Link>
                        <p
                          className="fw-bolder fs-4"
                          style={{ color: "#eb3a7b" }}
                        >
                          {abc?.currencyFormat}
                          {abc?.productPrice -
                            (abc?.productPrice * abc?.discount) / 100}{" "}
                          <strike style={{ fontSize: "18px", color: "white" }}>
                            {abc?.productPrice}
                          </strike>
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
                {/* <li>
                  <div className="d-flex">
                    <div>
                      <img
                        className="img-fluid"
                        style={{ width: "100%", height: "100px" }}
                        src="./img/pharmacy-img-17.png"
                        alt=""
                      />
                    </div>
                    <div className="p-2">
                      <a href="/pharmacy" className="text-light">
                        {" "}
                        Nutrilite Memory bulider{" "}
                      </a>
                      <p
                        className="fw-bolder fs-4"
                        style={{ color: "#eb3a7b" }}
                      >
                        $194.08
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="d-flex">
                    <div>
                      <img
                        className=""
                        style={{ width: "100%", height: "100px" }}
                        src="./img/pharmacy-img-18.png"
                        alt=""
                      />
                    </div>
                    <div className="p-2">
                      <a href="/pharmacy" className="text-light">
                        {" "}
                        Himalaya evecare{" "}
                      </a>
                      <p
                        className="fw-bolder fs-4"
                        style={{ color: "#eb3a7b" }}
                      >
                        $137.00
                      </p>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Right Baar */}

          <div className="col-lg-9">
            <Carousel fade>
              {GetPharmBanner?.map((banner) => (
                <Carousel.Item className="pharmacy-slide">
                  <img
                    className="d-block w-100 img-fluid"
                    style={{ height: "450px" }}
                    src={`http://localhost:8521/PharmacyBanner/${banner?.PharmacyBanImg}`}
                    alt="First slide"
                  />
                  <Carousel.Caption className="text-dark">
                    <Container>
                      <div className="d-flex gap-2 align-items-center justify-content-between">
                        <div className="  m-auto text-light fw-bold  ">
                          <p className=" pharmacy-slide-text">
                            {" "}
                            {banner?.PharmacySubTitle}
                          </p>
                          <h3 className="fw-bold  pharmacy-slide-text">
                            {banner?.PharmacyTitle}
                          </h3>
                          {/* <p className=" pharmacy-slide-text">
                          Orignal Price $29.99
                        </p> */}
                        </div>
                        <div className="">
                          <img
                            className="img-fluid pharmacy-slide-img"
                            style={{ width: "100%", height: "300px" }}
                            src={`http://localhost:8521/PharmacyBanner/${banner?.pharmacyImage}`}
                            alt=""
                          />
                        </div>
                      </div>
                    </Container>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>

            <Container className="mt-2">
              <div className="row justify-content-between">
                <div className="col-lg-6 mb-3 mobile-padding-0 ">
                  <div
                    className="text-light d-flex align-items-center radius-img"
                    style={{
                      backgroundImage: `url(
                        http://localhost:8521/PharmacyCategoryBanner/${GetPharmCatBan[0]?.pharmacyCatbannerImage}
                      )`,
                      width: "100%",
                      height: "300px",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      borderRadius: "30px",
                    }}
                  >
                    <div className="ms-3">
                      <h3 className="fw-bold" style={{ width: "250px" }}>
                        {GetPharmCatBan[0]?.PharmacyCatName}
                      </h3>
                      <p className="mb-2">
                        up to {GetPharmCatBan[0]?.PharmacyCatDiscount}% off
                      </p>
                      <Link
                        to="/PharmacyCategoryProducts"
                        state={{
                          CategoryName: GetPharmCatBan[0]?.PharmacyCatName,
                        }}
                        className="text-light d-flex align-items-center gap-2"
                      >
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          style={{
                            backgroundColor: "#fff",
                            color: "#000",
                            padding: "10px",
                            borderRadius: "10px",
                          }}
                        />
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-3 mobile-padding-0 ">
                  <div
                    className="text-light d-flex align-items-center radius-img"
                    style={{
                      backgroundImage: `url(
                        http://localhost:8521/PharmacyCategoryBanner/${GetPharmCatBan[1]?.pharmacyCatbannerImage}
                      )`,
                      width: "100%",
                      height: "300px",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      borderRadius: "30px",
                    }}
                  >
                    <div className="ms-3">
                      <h3 className="fw-bold" style={{ width: "250px" }}>
                        {GetPharmCatBan[1]?.PharmacyCatName}
                      </h3>
                      <p className="mb-2">
                        up to {GetPharmCatBan[1]?.PharmacyCatDiscount}% off
                      </p>

                      <Link
                        to="/PharmacyCategoryProducts"
                        state={{
                          CategoryName: GetPharmCatBan[1]?.PharmacyCatName,
                        }}
                        className="text-light d-flex align-items-center gap-2"
                      >
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          style={{
                            backgroundColor: "#fff",
                            color: "#000",
                            padding: "10px",
                            borderRadius: "10px",
                          }}
                        />
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Container>

            <Container className="mt-4">
              <div className="d-flex justify-content-between">
                <h3
                  className="fw-bold  ms-3 "
                  style={{ color: "rgb(32 139 140)" }}
                >
                  Health Products
                </h3>
                <div>
                  <Button
                    className="green-btn-1-viewmore"
                    onClick={() => {
                      navigate("/pharmacyproducts");
                    }}
                  ></Button>
                </div>
              </div>

              <div className="row">
                {ProductList?.slice(0, 4)?.map((item) => {
                  return (
                    <Card
                      className="col-lg-4 m-auto mb-3 p-0"
                      style={{ width: "17rem", height: "443px" }}
                    >
                      <Card.Img
                        variant="top"
                        style={{
                          width: "100%",
                          height: "200px",
                          padding: "10px",
                        }}
                        src={`http://localhost:8521/VendorProduct/${item?.vendorIdProductId?.productImgs[0]}`}
                        alt="pharmacy-img"
                      />
                      <Card.Body style={{ padding: "6px" }}>
                        <Card.Title className="row" style={{ height: "25px" }}>
                          <div className="col-md-10">
                            <Link
                              to="/pharmacydesc"
                              className="fw-semibold"
                              style={{
                                textDecoration: "none",
                                color: "black",
                                fontSize: "15px",
                              }}
                              state={{ item: item }}
                            >
                              {/* <a> */}
                              {item?.productName.slice(0, 70)} ...
                              {/* </a> */}
                            </Link>
                          </div>

                          <div className="col-md-2">
                            {wishlistData?.wishlistItems?.some(
                              (val) => val.productid?._id === item?._id
                            ) ? (
                              <IoMdHeart
                                // className="wishlist-icon"
                                style={{ color: "red" }}
                                onClick={() => removeFromWishlist(item)}
                              />
                            ) : (
                              <IoMdHeartEmpty
                                style={{ color: "red" }}
                                onClick={() => AddToWishlist(item)}
                              />
                            )}
                          </div>
                        </Card.Title>

                        <Card.Text>
                          by {item?.manufacturercompanyname}
                        </Card.Text>
                        <Card.Text>
                          {item?.description.slice(0, 60)} ...
                        </Card.Text>
                        <Card.Text
                          className="fw-bolder fs-4"
                          style={{ color: "#eb3a7b" }}
                        >
                          {item?.currencyFormat}
                          {item?.productPrice -
                            (item?.productPrice * item?.discount) / 100}
                          <strike
                            style={{ color: "black", marginLeft: "10px" }}
                          >
                            {item?.productPrice}
                          </strike>
                        </Card.Text>
                        <a onClick={() => AddToCart(item)}>
                          <Button className="green-btn-1"></Button>{" "}
                        </a>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </Container>

            <Container className="mt-2">
              <div className="row justify-content-between">
                <div className="col-lg-6 mb-3 mobile-padding-0 ">
                  <div
                    className="text-light d-flex align-items-center radius-img"
                    style={{
                      backgroundImage: `url(
                        http://localhost:8521/PharmacyCategoryBanner/${GetPharmCatBan[2]?.pharmacyCatbannerImage}
                      )`,
                      width: "100%",
                      height: "300px",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      borderRadius: "30px",
                    }}
                  >
                    <div className="ms-3">
                      <h3 className="fw-bold" style={{ width: "250px" }}>
                        {GetPharmCatBan[2]?.PharmacyCatName}
                      </h3>
                      <p className="mb-2">
                        up to {GetPharmCatBan[2]?.PharmacyCatDiscount}% off
                      </p>
                      <Link
                        to="/PharmacyCategoryProducts"
                        state={{
                          CategoryName: GetPharmCatBan[2]?.PharmacyCatName,
                        }}
                        className="text-light d-flex align-items-center gap-2"
                      >
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          style={{
                            backgroundColor: "#fff",
                            color: "#000",
                            padding: "10px",
                            borderRadius: "10px",
                          }}
                        />
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-3 mobile-padding-0 ">
                  <div
                    className="text-light d-flex align-items-center radius-img"
                    style={{
                      backgroundImage: `url(
                        http://localhost:8521/PharmacyCategoryBanner/${GetPharmCatBan[3]?.pharmacyCatbannerImage}
                      )`,
                      width: "100%",
                      height: "300px",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      borderRadius: "30px",
                    }}
                  >
                    <div className="ms-3">
                      <h3 className="fw-bold" style={{ width: "250px" }}>
                        {GetPharmCatBan[3]?.PharmacyCatName}
                      </h3>
                      <p className="mb-2">
                        up to {GetPharmCatBan[3]?.PharmacyCatDiscount}% off
                      </p>
                      <Link
                        to="/PharmacyCategoryProducts"
                        state={{
                          CategoryName: GetPharmCatBan[3]?.PharmacyCatName,
                        }}
                        className="text-light d-flex align-items-center gap-2"
                      >
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          style={{
                            backgroundColor: "#fff",
                            color: "#000",
                            padding: "10px",
                            borderRadius: "10px",
                          }}
                        />
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Container>

            <Container className="mt-5">
              <h4
                className="fw-bold  ms-3 mb-4 "
                style={{ color: "rgb(32 139 140)" }}
              >
                Popular category
              </h4>
              <div className="row text-center">
                {categoryList?.map((item) => {
                  return (
                    <div className="col-lg-3 mb-2">
                      <Link
                        to="/PharmacyCategoryProducts"
                        state={{
                          CategoryName: item?.categoryName,
                        }}
                        className="text-dark"
                      >
                        <img
                          src={`http://localhost:8521/productcategory/${item?.catImg}`}
                          alt=""
                          style={{ width: "150px", height: "150px" }}
                        />
                        <h6 className="fw-bold">{item?.categoryName}</h6>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </Container>

            <Container className="mt-5">
              <h4
                className="fw-bold  ms-3 mb-4 "
                style={{ color: "rgb(32 139 140)" }}
              >
                Popular Products
              </h4>
              <div className="row">
                {top2RepeatedProducts?.map((PProduct) => (
                  <div className=" col-lg-6 d-flex align-items-center flex-1">
                    <div className="col-lg-6">
                      <Link
                        to="/pharmacydesc"
                        className="fw-semibold"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontSize: "15px",
                        }}
                        state={{ item: PProduct }}
                      >
                        <img
                          className="img-fluid"
                          src={`http://localhost:8521/VendorProduct/${PProduct?.vendorIdProductId?.productImgs[0]}`}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="col-lg-6">
                      <h6>
                        {" "}
                        <Link
                          to="/pharmacydesc"
                          className="fw-semibold"
                          style={{
                            textDecoration: "none",
                            color: "black",
                            fontSize: "15px",
                          }}
                          state={{ item: PProduct }}
                        >
                          {PProduct?.productName}
                        </Link>
                      </h6>
                      <p className="pb-0">
                        {PProduct?.description?.slice(0, 60)}...
                      </p>
                      <p
                        className="fw-bolder fs-4 "
                        style={{ color: "#eb3a7b" }}
                      >
                        {PProduct?.currencyFormat}
                        {PProduct?.productPrice -
                          (PProduct?.productPrice * PProduct?.discount) / 100}
                        <strike style={{ color: "black", marginLeft: "10px" }}>
                          {PProduct?.productPrice}
                        </strike>
                      </p>
                      <a onClick={() => AddToCart(PProduct)}>
                        <Button className="green-btn-1"></Button>{" "}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </div>

          <Container fluid className="">
            <div className="row align-items-center justify-content-center ">
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src="./img/pharmacy-img-3.png"
                  alt=""
                />
              </div>

              <div className="col-lg-6">
                <h6
                  className="fw-bold  mt-3 "
                  style={{ color: "rgb(32 139 140)" }}
                >
                  WELCOME TO HOSPITAL
                </h6>
                <h2 className="fw-semibold">
                  We make healthcar Understandable, Accessible and Affordable.
                </h2>
                <p className="fw-light">
                  Medilazar brings to you an online platform, which can be
                  accessed for all your health needs. We are trying to make
                  healthcare a hassle-free experience for you. Get your
                  allopathic, ayurvedic, homeopathic medicines, vitamins &
                  nutrition supplements and other health-related products
                  delivered at home.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </Container>

      {/* <div className='row' style={{padding:"10%"}}>
                <div className='col-lg-4' style={{}}>
                <div style={{backgroundColor:count == 1 ? "red" :"grey",width:"60%",height:"200px",margin:"10% 20%"}}>

                </div>

                
                    
                </div>

                <div className='col-lg-4' style={{}}>
                <div style={{backgroundColor:count == 2 ? "red" :"grey",width:"60%",height:"200px",margin:"10% 20%"}}>

                </div>

                
                    
                </div>

                <div className='col-lg-4' style={{}}>
                <div style={{backgroundColor:count == 3 ? "red" :"grey",width:"60%",height:"200px",margin:"10% 20%"}}>

                </div>

                
                    
                </div>

                <div className='col-lg-4' style={{}}>
                <div style={{backgroundColor:count == 4 ? "red" :"grey",width:"60%",height:"200px",margin:"10% 20%"}}>

                </div>

                
                    
                </div>

                <div className='col-lg-4' style={{}}>
                <div style={{backgroundColor:count == 5 ? "red" :"grey",width:"60%",height:"200px",margin:"10% 20%"}}>

                </div>

                
                    
                </div>

                <div className='col-lg-4' style={{}}>
                <div style={{backgroundColor:count == 6 ? "red" :"grey",width:"60%",height:"200px",margin:"10% 20%"}}>

                </div>

                
                    
                </div>
            </div>

            {<p></p>} */}
    </div>
  );
};
