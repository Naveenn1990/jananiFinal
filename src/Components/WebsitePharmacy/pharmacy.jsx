import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  faSliders,
  faHospital,
  faPrescriptionBottleMedical,
  faHouseMedical,
  faCapsules,
  faAnglesRight,
  faStethoscope,
  faBars,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { Headerpharmacy } from "./headerpharmacy";

export const Pharmacy = () => {
  let pharmacyUser = JSON.parse(sessionStorage.getItem("pharmacyUser"));

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

  useEffect(() => {
    getAllCategory();
    getAllSubCategory();
    getAllProducts();
    getWishlist();
    getCartItems();
  }, []);

  console.log("CartItemsList2@@: ", CartItemsList);

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
            style={{ backgroundColor: "#fff " }}
          >
            <a href="/pharmacy">
              <h4 className="fw-bold ps-4 text-dark">
                <FontAwesomeIcon icon={faBars} /> Category{" "}
              </h4>
            </a>
            <ul className="category-list" style={{ listStyle: "none" }}>
              {categoryList?.map((item) => {
                return (
                  <li>
                    <a href="/pharmacy"> {item?.categoryName} </a>
                  </li>
                );
              })}
              {/* <li><a href="/pharmacy"> Health condition </a></li>
                            <li> <a href="/pharmacy">Personal care</a> </li>
                            <li> <a href="/pharmacy"> covid essentials</a> </li>
                            <li> <a href="/pharmacy"> Fitness</a> </li>
                            <li> <a href="/pharmacy"> Treatment</a> </li>
                            <li> <a href="/pharmacy"> Personal</a> </li>
                            <li> <a href="/pharmacy">essentials</a> </li> */}
            </ul>

            <div className="mb-4">
              <ul className="category-list" style={{ listStyle: "none" }}>
                <li>
                  <FontAwesomeIcon
                    icon={faHospital}
                    className=" me-2 p-2 "
                    style={{
                      backgroundColor: "#41cdcf",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  />
                  <a href="/pharmacy"> Medicine </a>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faStethoscope}
                    className="me-2 p-2"
                    style={{
                      backgroundColor: "#f54f9a",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  />
                  <a href="/pharmacy"> Wellness</a>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faHouseMedical}
                    className="me-2 p-2"
                    style={{
                      backgroundColor: "#83c847",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  />
                  <a href="/diagnostic"> Diagnostic</a>{" "}
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCapsules}
                    className="me-2 p-2"
                    style={{
                      backgroundColor: "#51acf6",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  />{" "}
                  <a href="/pharmacy"> Health corener</a>{" "}
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faHouseMedical}
                    className="me-2 p-2"
                    style={{
                      backgroundColor: "#ffb61b",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  />{" "}
                  <a href="/pharmacy"> Other</a>{" "}
                </li>
              </ul>
            </div>

            <div className="mb-5">
              <h4 className="fw-bold ps-4 text-dark"> Popular Brands </h4>
              <ul className="category-list" style={{ listStyle: "none" }}>
                <li>
                  <a href="/pharmacy"> Premier Value </a>
                </li>
                <li>
                  <a href="/pharmacy"> Sunmark </a>
                </li>
                <li>
                  {" "}
                  <a href="/pharmacy">Nature value</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/pharmacy"> Cover girl</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/pharmacy"> Natures beauty</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/pharmacy"> Sport aid</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/pharmacy"> Neutrogena</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/pharmacy">View all</a>{" "}
                </li>
              </ul>
            </div>

            <div className="mb-5">
              <h4 className="fw-bold ps-4 text-dark">Hot Deals </h4>
              <Card
                className="col-lg-4 m-auto mb-3 p-0"
                style={{ width: "16rem" }}
              >
                <Card.Img
                  variant="top"
                  src="./img/pharmacy-img-15.png"
                  alt="pharmacy-img"
                />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <a
                      className="fw-semibold"
                      style={{ textDecoration: "none", color: "black" }}
                      href="/pharmacy"
                    >
                      Waterpik WP-100 Dental Care
                    </a>{" "}
                  </Card.Title>
                  <Card.Text>
                    Covid essentials, device health condition
                  </Card.Text>

                  <Card.Text
                    className="fw-bolder fs-4"
                    style={{ color: "#eb3a7b" }}
                  >
                    $82.00
                  </Card.Text>

                  <a href="/pharmacy">
                    <Button className="green-btn-1"></Button>{" "}
                  </a>
                </Card.Body>
              </Card>
            </div>

            <div className="mb-5">
              <h4 className="fw-bold ps-4 text-dark"> Hot Products</h4>
              <ul className="category-list" style={{ listStyle: "none" }}>
                <li>
                  <div className="d-flex">
                    <div>
                      <img
                        className="img-fluid"
                        style={{ width: "100%", height: "100px" }}
                        src="./img/pharmacy-img-16.png"
                        alt=""
                      />
                    </div>
                    <div className="p-2">
                      <a href="/pharmacy"> Organic salmon collagen </a>
                      <p
                        className="fw-bolder fs-4"
                        style={{ color: "#eb3a7b" }}
                      >
                        $124.98
                      </p>
                    </div>
                  </div>
                </li>

                <li>
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
                      <a href="/pharmacy"> Nutrilite Memory bulider </a>
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
                      <a href="/pharmacy"> Himalaya evecare </a>
                      <p
                        className="fw-bolder fs-4"
                        style={{ color: "#eb3a7b" }}
                      >
                        $137.00
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Baar */}

          <div className="col-lg-9">
            <Carousel fade>
              <Carousel.Item className="pharmacy-slide">
                <img
                  className="d-block w-100 img-fluid"
                  style={{ height: "450px" }}
                  src="./img/pharmacy-slide-1.jpg"
                  alt="First slide"
                />
                <Carousel.Caption className="text-dark">
                  <Container>
                    <div className="d-flex gap-2 align-items-center justify-content-between">
                      <div className="  m-auto text-light fw-bold  ">
                        <p className=" pharmacy-slide-text">PRODUCTS</p>
                        <h3 className="fw-bold  pharmacy-slide-text">
                          FLAT 25% OFF <br /> MEDICINE ORDER
                        </h3>
                        <p className=" pharmacy-slide-text">
                          Orignal Price $29.99
                        </p>
                      </div>
                      <div className="">
                        <img
                          className="img-fluid pharmacy-slide-img"
                          style={{ width: "100%", height: "300px" }}
                          src="./img/pharmacy-img-2.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </Container>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className="pharmacy-slide">
                <img
                  className="d-block w-100 "
                  style={{ height: "450px" }}
                  src="./img/pharmacy-slide-2.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption className="text-dark">
                  <Container>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className=" text-light fw-bold pharmacy-slide-text ">
                        <p className=" pharmacy-slide-text">PRODUCTS</p>
                        <h3 className=" fw-bold  pharmacy-slide-text">
                          FLAT 25% OFF <br /> MEDICINE ORDER
                        </h3>
                        <p className=" pharmacy-slide-text">
                          Orignal Price $29.99
                        </p>
                      </div>
                      <div>
                        <img
                          className="img-fluid pharmacy-slide-img"
                          style={{ width: "100%", height: "400px" }}
                          src="./img/pharmacy-img-4.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </Container>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            <Container className="mt-2">
              <div className="row justify-content-between">
                <div className="col-lg-6 mb-3 mobile-padding-0 ">
                  <div
                    className="text-light d-flex align-items-center radius-img"
                    style={{
                      backgroundImage: "url(./img/pharmacy-img-11.png)",
                      width: "100%",
                      height: "300px",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      borderRadius: "30px",
                    }}
                  >
                    <div className="ms-3">
                      <h3 className="fw-bold">
                        Medlife <br /> products
                      </h3>
                      <p className="mb-2">up to 30% off</p>
                      <a
                        href="/pharmacy"
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
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mobile-padding-0">
                  <div
                    className="text-light d-flex align-items-center radius-img"
                    style={{
                      backgroundImage: "url(./img/pharmacy-img-12.png)",
                      width: "100%",
                      height: "300px",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      borderRadius: "30px",
                    }}
                  >
                    <div className="ms-3">
                      <h3 className="fw-bold">
                        Medlife <br /> products
                      </h3>
                      <p className="mb-2">up to 30% off</p>
                      <a
                        href="/pharmacy"
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
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Container>

            <Container className="mt-4">
              <h4
                className="fw-bold  ms-3 "
                style={{ color: "rgb(32 139 140)" }}
              >
                Health Products
              </h4>

              <div className="row">
                {ProductList?.map((item) => {
                  return (
                    <Card
                      className="col-lg-4 m-auto mb-3 p-0"
                      style={{ width: "17rem", height: "420px" }}
                    >
                      <Card.Img
                        variant="top"
                        style={{
                          width: "100%",
                          height: "200px",
                          padding: "10px",
                        }}
                        src={`http://localhost:8521/AdminInventory/${item?.productImgs[0]}`}
                        alt="pharmacy-img"
                      />
                      <Card.Body style={{ padding: "6px" }}>
                        <Card.Title className="row" style={{ height: "75px" }}>
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
                        <Card.Text
                          className="fw-bolder fs-4"
                          style={{ color: "#eb3a7b" }}
                        >
                          ₹
                          {item?.productPrice -
                            item?.productPrice / item?.discount}
                          <strike></strike>
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
                <div className="col-lg-6 mb-3 mobile-padding-0">
                  <div
                    className=" text-light  d-flex align-items-center radius-img"
                    style={{
                      backgroundImage: "url(./img/pharmacy-img-13.png)",
                      width: "100%",
                      height: "300px",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      borderRadius: "30px",
                    }}
                  >
                    <div className="ms-3">
                      <h3 className="fw-bold">
                        Medlife <br /> products
                      </h3>
                      <p className="mb-2">up to 30% off</p>
                      <a
                        href="/pharmacy"
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
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mobile-padding-0">
                  <div
                    className=" text-light  d-flex align-items-center radius-img"
                    style={{
                      backgroundImage: "url(./img/pharmacy-img-14.png)",
                      width: "100%",
                      height: "300px",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      borderRadius: "30px",
                    }}
                  >
                    <div className="ms-3">
                      <h3 className="fw-bold">
                        Medlife <br /> products
                      </h3>
                      <p className="mb-2">up to 30% off</p>
                      <a
                        href="/pharmacy"
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
                      </a>
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
                      <a href="/pharmacy" className="text-dark">
                        <img
                          src={`http://localhost:8521/productcategory/${item?.catImg}`}
                          alt=""
                          style={{ width: "150px", height: "150px" }}
                        />
                        <h6 className="fw-bold">{item?.categoryName}</h6>
                      </a>
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
                <div className=" col-lg-6 d-flex align-items-center flex-1">
                  <img
                    className="img-fluid"
                    src="/img/pharmacy-img-19.png"
                    alt=""
                  />
                  <div>
                    <h6>
                      {" "}
                      <a
                        className="fw-semibold"
                        style={{ textDecoration: "none", color: "black" }}
                        href="/pharmacy"
                      >
                        {" "}
                        Water pik-Dental Care{" "}
                      </a>
                    </h6>
                    <p className="pb-0">
                      Covid essentials, device <br /> health condition
                    </p>
                    <p className="fw-bolder fs-4 " style={{ color: "#eb3a7b" }}>
                      $124.98
                    </p>
                    <a href="/pharmacy">
                      <Button className="green-btn-1"></Button>{" "}
                    </a>
                  </div>
                </div>

                <div className=" col-lg-6 d-flex align-items-center flex-1">
                  <img
                    className="img-fluid"
                    src="/img/pharmacy-img-20.png"
                    alt=""
                  />
                  <div>
                    <h6>
                      {" "}
                      <a
                        className="fw-semibold"
                        style={{ textDecoration: "none", color: "black" }}
                        href="/pharmacy"
                      >
                        {" "}
                        Water pik-Dental Care{" "}
                      </a>
                    </h6>
                    <p className="pb-0">
                      Covid essentials, device <br /> health condition
                    </p>
                    <p className="fw-bolder fs-4 " style={{ color: "#eb3a7b" }}>
                      $124.98
                    </p>
                    <a href="/pharmacy">
                      <Button className="green-btn-1"></Button>{" "}
                    </a>
                  </div>
                </div>
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
