import React, { useEffect, useState } from "react";
import {
  faHospital,
  faHouseMedical,
  faCapsules,
  faStethoscope,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Headerpharmacy } from "./headerpharmacy";
import { Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

const PharmacyCategoryProducts = ({ min, max }) => {
  const navigate = useNavigate();
  let pharmacyUser = JSON.parse(sessionStorage.getItem("pharmacyUser"));
  const location = useLocation();

  const { CategoryName } = location.state;

  console.log("CategoryName", CategoryName);

  const [value, setValue] = React.useState([0, 1000000]);
  const changePrice = (event, newValue) => {
    setValue(newValue);
  };

  const [SelectedCategory, setSelectedCategory] = useState("");
  const [SelectedBrand, setSelectedBrand] = useState("");

  const [categoryList, setcategoryList] = useState([]);
  const getAllCategory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getcategoryList"
      );
      if (res.status === 200) {
        setcategoryList(
          res.data.allcategory.filter(
            (item, index, self) =>
              index ===
              self.findIndex((t) => t.categoryName === item.categoryName)
          )
        );
      }
    } catch (error) {
      console.log(error);
      // setcategoryList(error.response.data.allcategory);
    }
  };

  const [brands, setbrands] = useState([]);
  const getBrands = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/admin/brandsList");
      if (res.status === 200) {
        setbrands(
          res.data.list.filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.brandName === item.brandName)
          )
        );
      }
    } catch (error) {
      console.log(error);
      setbrands(error.response.data.list);
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
  console.log("ProductList", ProductList);

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
    getAllProducts();
    getWishlist();
    getBrands();
  }, []);

  const [newarray, setnewarray] = useState([]);
  useEffect(() => {
    if (CategoryName) {
      let filteredProducts = ProductList;

      if (SelectedCategory) {
        filteredProducts = filteredProducts?.filter(
          (prod) => prod?.categoryid?.categoryName === SelectedCategory
        );
      } else if (CategoryName) {
        filteredProducts = filteredProducts?.filter(
          (prod) => prod?.categoryid?.categoryName === CategoryName
        );
      }

      if (SelectedBrand) {
        filteredProducts = filteredProducts?.filter(
          (prod) => prod?.brand === SelectedBrand
        );
      }

      if (value && value.length === 2) {
        filteredProducts = filteredProducts?.filter((prod) => {
          const finalPrice =
            prod?.productPrice - (prod?.productPrice * prod?.discount) / 100;
          return value[0] <= finalPrice && value[1] >= finalPrice;
        });
      }
      setnewarray(filteredProducts);
    }
  }, [CategoryName, ProductList, SelectedCategory, SelectedBrand, value]);

  console.log("categoryList", SelectedCategory, SelectedBrand, value);
  console.log("newarray", newarray);
  return (
    <div>
      <Headerpharmacy
        wishlistData={wishlistData}
        CartItemsList={CartItemsList}
      />
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#208B8C",
          padding: "20px",
          marginBottom: "10px",
        }}
      >
        <div className="row">
          {/* {Left bar} */}
          <div
            className="col-lg-3 p-4 mb-4 pharmacy-left-col"
            style={{
              backgroundColor: "#fff ",
              borderLeft: "1px solid #208B8C",
              borderRight: "1px solid #208B8C",
              boxShadow:
                "rgba(32, 149, 140, 0.28) -10px 0px 12px -7px,rgba(32, 149, 140, 0.28) 10px 0px 12px -7px",
            }}
          >
            {/* bar */}
            <Box sx={{ width: 260 }}>
              <Slider
                min={0}
                max={10000}
                step={100}
                defaultValue={0}
                aria-label="Default"
                valueLabelDisplay="auto"
                value={value}
                onChange={changePrice}
              />
            </Box>
            <div
              className="d-flex justify-content-between me-4 "
              style={{ marginTop: "-10px" }}
            >
              <span>₹ 0</span>
              <span>₹ 10000</span>
            </div>
            <p className="mt-2" style={{ fontWeight: "bold" }}>
              Price :{value[0]} /- and {value[1]} /-
            </p>
            <br />
            {/* bar */}
            <div className="mt-4">
              <h4 className="fw-bold ps-4 text-dark">
                <FontAwesomeIcon icon={faBars} style={{ color: "#208B8C" }} />{" "}
                <span style={{ color: "#208B8C" }}>Category</span>{" "}
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
                    <li
                      style={{
                        backgroundColor: SelectedCategory
                          ? SelectedCategory === item?.categoryName
                            ? "#208B8C"
                            : "white"
                          : CategoryName === item?.categoryName
                          ? "#208B8C"
                          : "white",
                        color: SelectedCategory
                          ? SelectedCategory === item?.categoryName
                            ? "white"
                            : "black"
                          : CategoryName === item?.categoryName
                          ? "white"
                          : "black",
                      }}
                      onClick={() =>
                        setSelectedCategory((prev) =>
                          prev === item?.categoryName ? "" : item?.categoryName
                        )
                      }
                    >
                      {item?.categoryName}{" "}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="fw-bold ps-4 text-dark">
                <FontAwesomeIcon icon={faBars} style={{ color: "#208B8C" }} />{" "}
                <span style={{ color: "#208B8C" }}>Popular Brands</span>{" "}
              </h4>

              <ul
                className="category-list"
                style={{
                  listStyle: "none",
                  height: "400px",
                  overflowX: "scroll",
                }}
              >
                {brands?.map((brand) => (
                  <li
                    style={{
                      backgroundColor:
                        SelectedBrand === brand?.brandName
                          ? "#208B8C"
                          : "white",
                      color:
                        SelectedBrand === brand?.brandName ? "white" : "black",
                    }}
                    onClick={() =>
                      setSelectedBrand((prev) =>
                        prev === brand?.brandName ? "" : brand?.brandName
                      )
                    }
                  >
                    {brand?.brandName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Right Bar */}
          <div className="col-lg-9 p-4">
            <Container className="mt-4">
              <h3
                className="fw-bold  ms-3 text-center"
                style={{ color: "white" }}
              >
                Health Products -{" "}
                {SelectedCategory ? SelectedCategory : CategoryName}
                {SelectedBrand ? "-" + SelectedBrand : ""}
              </h3>

              <div className="row">
                {newarray?.length > 0 ? (
                  newarray?.map((item) => {
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
                          <Card.Title
                            className="row"
                            style={{ height: "25px" }}
                          >
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
                            ₹
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
                  })
                ) : (
                  <p
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    No Data found for the selected Category or Brand
                  </p>
                )}
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyCategoryProducts;
