import React, { useEffect, useState } from 'react'
import {
    faHospital,
    faHouseMedical,
    faCapsules,
    faStethoscope,
    faBars,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Headerpharmacy } from "./headerpharmacy";
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

const PharmacyProducts = ({min, max}) => {
    const navigate = useNavigate();
    let pharmacyUser = JSON.parse(sessionStorage.getItem("pharmacyUser"));

    // bar
    const handleSliderChange = (value) => {
      // const filtered = StaysDetails2.filter(
      //   (item) => item.startingprice <= value
      // );
      // setStaysDetails(filtered);
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
    console.log("ProductList",ProductList);
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
      }, []);
  return (
    <div>
         <Headerpharmacy
        wishlistData={wishlistData}
        CartItemsList={CartItemsList}
      />
       <div className="container-fluid" style={{backgroundColor:"#208B8C",padding:"20px"}}>
        <div className="row">
            {/* {Left bar} */}
            <div
            className="col-lg-3 p-4 mb-4 pharmacy-left-col"
            style={{ backgroundColor: "#fff ",borderLeft:"1px solid #208B8C",borderRight:"1px solid #208B8C",boxShadow:"rgba(32, 149, 140, 0.28) -10px 0px 12px -7px,rgba(32, 149, 140, 0.28) 10px 0px 12px -7px" }}
          >
           {/* bar */}
           <Box sx={{ width: 260 }}>
                          
                            <Slider
                              min={0}
                              max={10000}
                              step={1}
                              defaultValue={0}
                              aria-label="Default"
                              valueLabelDisplay="auto"
                              onChange={(e) =>
                                handleSliderChange(e.target.value)
                              }
                            />
                          </Box>
                          <div
                            className="d-flex justify-content-between me-4 "
                            style={{ marginTop: "-10px" }}
                          >
                            <span>₹ 0</span>
                            <span>₹ 10000</span>
                          </div>
                          <br />
           {/* bar */}
            <div className="mb-5">
              <h4 className="fw-bold ps-4 " style={{color:"#208B8C"}}> Popular Brands </h4>
              <ul className="category-list" style={{ listStyle: "none" }}>
                <li>
                  <a href="/pharmacyproducts"> Premier Value </a>
                </li>
                <li>
                  <a href="/pharmacyproducts"> Sunmark </a>
                </li>
                <li>
                  {" "}
                  <a href="/pharmacyproducts">Nature value</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/pharmacyproducts"> Cover girl</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/pharmacyproducts"> Natures beauty</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/pharmacyproducts"> Sport aid</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/pharmacyproducts"> Neutrogena</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/pharmacyproducts">View all</a>{" "}
                </li>
              </ul>
            </div>
            <a href="/pharmacyproducts">
              <h4 className="fw-bold ps-4 text-dark">
                <FontAwesomeIcon icon={faBars} style={{color:"#208B8C"}}/> <span style={{color:"#208B8C"}}>Category</span>{" "}
              </h4>
            </a>
            <ul className="category-list" style={{ listStyle: "none" }}>
              {categoryList?.map((item) => {
                return (
                  <li>
                    <a href="/pharmacyproducts"> {item?.categoryName} </a>
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
                  <a href="/pharmacyproducts"> Medicine </a>
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
                  <a href="/pharmacyproducts"> Wellness</a>
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
                  <a href="/pharmacyproducts"> Health corener</a>{" "}
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
                  <a href="/pharmacyproducts"> Other</a>{" "}
                </li>
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
                Health Products
              </h3>
             
              <div className="row">
                {ProductList?.map((item) => {
                  return (
                    <Card
                      className="col-lg-4 m-auto mb-3 p-0"
                      style={{ width: "17rem", height: "391px" }}
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
                          <div className="col-md-9">
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

                          <div className="col-md-3">
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
                            <FontAwesomeIcon icon={faCartShopping}  style={{ color: "#208B8C",fontSize:"17px" }} onClick={() => AddToCart(item)}/>
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
                          {/* <Button className="green-btn-1"></Button>{" "} */}
                        </a>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </Container>
            </div>
        </div>
       </div>
    </div>
  )
}

export default PharmacyProducts