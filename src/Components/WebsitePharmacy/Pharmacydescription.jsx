import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { Tooltip } from "antd";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Headerpharmacy } from "./headerpharmacy";
function Pharmacydescription(props) {
  let pharmacyUser = sessionStorage.getItem("pharmacyUser");
  const location = useLocation();
  const { item } = location.state;
  console.log(item, "kmlklkl");

  const [showMore, setShowMore] = useState(false);
  const [RelatedProduct, setRelatedProduct] = useState([]);

  const [qty, setqty] = useState(1);

  console.log("item", item);
  const [previewImg, setPreviewImg] = useState(
    "http://localhost:8521/AdminInventory/" + item?.productImgs[0]
  );
  useEffect(() => {
    setPreviewImg(
      "http://localhost:8521/AdminInventory/" + item?.productImgs[0]
    );
    window.scrollTo(0, 0);
  }, [item]);

  const [acc1, setacc1] = useState(true);
  const [acc2, setacc2] = useState(false);
  const [acc3, setacc3] = useState(false);
  const [acc4, setacc4] = useState(false);

  const [tab, settab] = useState(true);
  const [tab1, settab1] = useState();
  const [tab2, settab2] = useState();
  const [review, setreview] = useState("");

  const [wis, setwis] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const increment = () => {
    console.log("clicked", qty);
    setqty(qty + 1);
  };
  const decrement = () => {
    if (qty > 1) {
      setqty(qty - 1);
    }
  };

  const [wishlistData, setWishlistData] = useState({});
  const getWishlist = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8521/api/pharmacy/getWishlist/" +
          JSON.parse(pharmacyUser)?._id
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
  const [CartItemsList, setCartItemsList] = useState({});
  const getCartItems = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8521/api/pharmacy/getCartList/${
          JSON.parse(pharmacyUser)?._id
        }`
      );
      if (res.status === 200) {
        setCartItemsList(res.data.cartlist);
      }
    } catch (error) {
      setCartItemsList({});
    }
  };
  useEffect(() => {
    if (!pharmacyUser) {
      return alert("Please login first!!!");
    } else {
      getWishlist();
      getCartItems();
    }
  }, [pharmacyUser]);

  return (
    <>
      <Headerpharmacy
        wishlistData={wishlistData}
        CartItemsList={CartItemsList}
      />
      <section style={{ marginTop: "100px" }}>
        <Container>
          <Row>
            <Col lg="9" md="9">
              <div className="singal_hero">
                <Row>
                  <div className="col-md-6">
                    <div className="singal_hero_0">
                      <div className="product__main-img">
                        <img
                          src={previewImg}
                          alt=""
                          className=" w-100"
                          style={{ height: "300px" }}
                        />
                      </div>

                      <div
                        className="product__images mt-3 d-flex"
                        style={{ gap: "10px" }}
                      >
                        <div
                          className={`img__item mb-3 ${
                            acc1 ? "tab-0-active" : ""
                          }`}
                          onClick={() => {
                            setPreviewImg(
                              "http://localhost:8521/AdminInventory/" +
                                item?.productImgs[0]
                            );
                            setacc1(true);
                            setacc2(false);
                            setacc3(false);
                            setacc4(false);
                          }}
                        >
                          <img
                            src={
                              "http://localhost:8521/AdminInventory/" +
                              item?.productImgs[0]
                            }
                            alt=""
                            className=" img-fluid wt-50"
                          />
                        </div>
                        <div
                          className={`img__item mb-3 ${
                            acc2 ? "tab-0-active" : ""
                          }`}
                          onClick={() => {
                            setPreviewImg(
                              "http://localhost:8521/AdminInventory/" +
                                item?.productImgs[1]
                            );
                            setacc1(false);
                            setacc2(true);
                            setacc3(false);
                            setacc4(false);
                          }}
                        >
                          <img
                            src={
                              "http://localhost:8521/AdminInventory/" +
                              item?.productImgs[1]
                            }
                            alt=""
                            className="img-fluid wt-50"
                          />
                        </div>

                        <div
                          className={`img__item mb-3 ${
                            acc3 ? "tab-0-active" : ""
                          }`}
                          onClick={() => {
                            setPreviewImg(
                              "http://localhost:8521/AdminInventory/" +
                                item?.productImgs[2]
                            );
                            setacc1(false);
                            setacc2(false);
                            setacc3(true);
                            setacc4(false);
                          }}
                        >
                          <img
                            src={
                              "http://localhost:8521/AdminInventory/" +
                              item?.productImgs[2]
                            }
                            alt=""
                            className="img-fluid wt-50"
                          />
                        </div>
                        <div
                          className={`img__item mb-3 ${
                            acc4 ? "tab-0-active" : ""
                          }`}
                          onClick={() => {
                            setPreviewImg(
                              "http://localhost:8521/AdminInventory/" +
                                item?.productImgs[3]
                            );
                            setacc1(false);
                            setacc2(false);
                            setacc3(false);
                            setacc4(true);
                          }}
                        >
                          <img
                            src={
                              "http://localhost:8521/AdminInventory/" +
                              item?.productImgs[3]
                            }
                            alt=""
                            className="img-fluid wt-50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product-details">
                      <div className="product_details_info">
                        <div class="product-title">
                          <h2>
                            {item?.productName} - {item?.productSize}
                          </h2>
                        </div>
                        <div className="product-ratting mb-2">
                          <span
                            className="spr-badge"
                            id="spr_badge_6820894441621"
                            data-rating="2.0"
                          >
                            <span class="spr-starrating spr-badge-starrating">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                            </span>
                          </span>
                        </div>
                        <div class="pro-price-label mb-2">
                          <div class="price-box">
                            <span class="new-price" id="ProductPrice">
                              ₹ {(item?.productPrice).toFixed(2)}
                            </span>
                            <span class="old-price" id="ComparePrice">
                              ₹ {(item?.productPrice).toFixed(2)}
                            </span>
                          </div>

                          <div class="product-label">
                            <span class="sale-title" id="ProductDiscount">
                              {item.productdiscount}%
                            </span>
                          </div>
                        </div>
                        <div class="product-inventory d-flex mb-2">
                          <h6>Availability:</h6>

                          <span class="in-stock text-success">
                            {item.producttotalstack < 1 ? (
                              <span style={{ color: "red" }}>
                                OUT OF STOCK{" "}
                              </span>
                            ) : (
                              <span style={{ color: "green" }}> IN STOCK</span>
                            )}
                            <i class="ti-check"></i>
                          </span>
                        </div>

                        <div class="product-inventory d-flex mb-2">
                          <h6>Product Brand:</h6>

                          <span class="in-stock text-success">
                            {item.productbrand ? (
                              <span style={{ color: "green" }}>
                                {item.productbrand}
                              </span>
                            ) : null}
                            <i class="ti-check"></i>
                          </span>
                        </div>

                        <div class="product-description mb-2">
                          <p className="lorem-09">
                            {showMore
                              ? item.productdiscription
                              : `${item.productdiscription?.substring(0, 300)}`}
                            <button
                              className="btn"
                              onClick={() => setShowMore(!showMore)}
                            >
                              {showMore ? "Show less" : "Show more"}
                            </button>
                          </p>
                        </div>
                        {/* <div className="quick-view-select mb-3">
                          <div className="selector-wrapper">
                            <label>Size : </label>
                            <select
                              class="single-option-selector"
                              data-option="option1"
                              id="product-select-qv-option-0"
                            >
                              <option value="1kg">1kg</option>
                              <option value="2kg">2kg</option>
                              <option value="5kg">5kg</option>
                            </select>
                          </div>
                        </div> */}
                        <div className="product-quantity mb-5 mt-5 d-flex">
                          <b>Quantity :</b>{" "}
                          <div className="cart-plus-minus">
                            <div className="dec qtybutton" onClick={decrement}>
                              -
                            </div>
                            <input
                              value={qty}
                              type="text"
                              name="quantity"
                              min="1"
                              pattern="[0-9]*"
                            />
                            <div className="inc qtybutton" onClick={increment}>
                              +
                            </div>
                          </div>
                        </div>
                        <div className="pro-detail-button-0 mb-2">
                          <div className="wish-0911">
                            <Tooltip title="WISHLIST">
                              <span class="add-wishlist-0" id="app-title">
                                <i class="fa fa-heart"></i>
                              </span>
                            </Tooltip>
                          </div>

                          <div className="wish-09111">
                            <Tooltip title="REMOVE-WISHLIST">
                              <span class="add-wishlist-0" id="app-title">
                                <i class="fa fa-heart"></i>
                              </span>
                            </Tooltip>
                          </div>

                          <div className="wish-09">
                            <button
                              style={{
                                border: "none",
                                backgroundColor: "transparent",
                              }}
                            >
                              <span>ADD TO CART</span>
                            </button>
                          </div>
                          {/* <div className="wish-09">
                            <button
                              onClick={cart1}
                              style={{
                                border: "none",
                                backgroundColor: "transparent",
                              }}
                            >
                              <span>BUY NOW</span>
                            </button>
                          </div> */}
                        </div>
                        {/* <div class="product-sku">
                          <h6>SKU:</h6>
                          <span class="variant-sku" id="variantsku">
                            123456
                          </span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </Col>
            <Col lg="3" md="3"></Col>
          </Row>

          <div className="uni-details">
            <div className="uni-details-hero">
              <ul className="presentation">
                <li
                  className={`des-0__0 ${tab ? "pre-active" : ""}`}
                  onClick={() => {
                    settab(true);
                    settab1(false);
                    settab2(false);
                  }}
                >
                  Description
                </li>
                <li
                  className={`des-0__0 ${tab1 ? "pre-active" : ""}`}
                  onClick={() => {
                    settab(false);
                    settab1(true);
                    settab2(false);
                  }}
                >
                  {" "}
                  Additional information
                </li>
                {/* <li
                  className={`des-0__0 ${tab2 ? "pre-active" : ""}`}
                  onClick={() => {
                    settab(false);
                    settab1(false);
                    settab2(true);
                  }}
                >
                  {" "}
                  Reviews
                </li> */}
              </ul>

              <div className="">
                {tab ? (
                  <>
                    <div className="M-0_0 mb-2">
                      <h5 className="des-0__0">More Detail</h5>
                      <ul>
                        <li></li>
                      </ul>
                    </div>

                    <div className="M-0_0  mb-2">
                      <h5 className="des-0__0">Key Specification</h5>
                      <ul>
                        <li></li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    {tab1 ? (
                      <>
                        <Table striped bordered hover>
                          <tbody>
                            <tr>
                              <td>Weight:</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Unit-Price</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </Table>
                      </>
                    ) : (
                      <>
                        {tab2 ? (
                          <>
                            <div className="review-0">
                              <div className="spr-review">
                                <h2 class="spr-header-title">
                                  Customer Reviews
                                </h2>
                                <s
                                  className="write_re"
                                  onClick={() => setreview(!review)}
                                >
                                  Write review
                                </s>
                                <div className="jk_0 mt-3">
                                  {review ? (
                                    <>
                                      <div className="nalla_00">
                                        <div className="">Write a review</div>
                                        <div className="review-filed">
                                          <form>
                                            <div className="review__o mb-2">
                                              <label>Name</label>
                                              <br />
                                              <input
                                                type="text"
                                                placeholder="Name"
                                                className="spr-form-input-text"
                                                required
                                              />
                                            </div>
                                            <div className="review__o mb-2">
                                              <label>Email</label>
                                              <br />
                                              <input
                                                type="email"
                                                placeholder="example@gmail.com"
                                                className="spr-form-input-text"
                                                required
                                              />
                                            </div>
                                            <div className="review__o mb-2">
                                              <label>Review Title</label>
                                              <br />
                                              <input
                                                type="text"
                                                placeholder="Give your review a title"
                                                className="spr-form-input-text"
                                                required
                                              />
                                            </div>
                                            <div className="review__o mb-2">
                                              <label>Body of Review </label>
                                              <br />
                                              <textarea
                                                placeholder="Give your review a title"
                                                className="spr-form-input-text"
                                                style={{ height: "151px" }}
                                                required
                                              />
                                            </div>
                                            <div className="review__o mb-2">
                                              <button
                                                type="submit"
                                                className="write_re__090"
                                                style={{ float: "right" }}
                                              >
                                                Submit Review
                                              </button>
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Pharmacydescription;
