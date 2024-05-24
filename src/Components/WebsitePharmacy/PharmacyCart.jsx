import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Container,
  FloatingLabel,
  Form,
  Table,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Headerpharmacy } from "./headerpharmacy";

let timeout;
export const PharmacyCart = () => {
  let pharmacyUser = JSON.parse(sessionStorage.getItem("pharmacyUser"));
  const navigate = useNavigate();
  const [sampleCartDetails, setsampleCartDetails] = useState({});
  const incrementCount = (index, productitem) => {
    //debouncing logic
    let value =
      productitem?.productid?.maxOrderlimit <
      sampleCartDetails["cartItems"][index]["quantity"] + 1;
    if (value) {
      return alert("Maximum Order limit exceeds");
    }
    sampleCartDetails["cartItems"][index]["quantity"] += 1;
    setsampleCartDetails(JSON.parse(JSON.stringify(sampleCartDetails)));

    updateQuantityWithDebounce();
  };

  function CartItemCountChange(index, value, productitem) {
    let data = productitem?.productid?.maxOrderlimit < value;
    if (data) {
      return alert("Maximum Order limit exceeds");
    }
    sampleCartDetails["cartItems"][index]["quantity"] = value;
    setsampleCartDetails(JSON.parse(JSON.stringify(sampleCartDetails)));

    updateQuantityWithDebounce();
  }

  const decrementCount = (index) => {
    //debouncing logic
    if (sampleCartDetails["cartItems"][index]["quantity"] > 1) {
      sampleCartDetails["cartItems"][index]["quantity"] -= 1;
    }
    setsampleCartDetails(JSON.parse(JSON.stringify(sampleCartDetails)));
    updateQuantityWithDebounce();
  };

  function updateQuantityWithDebounce() {
    // tried but de-bouncing is not working because of this line:
    // setsampleCartDetails(JSON.parse(JSON.stringify(sampleCartDetails)));
    // it re-renders the component and the irony is that I want the updated data so
    // it should re-render again and again. But if we re-render the component then the timer also creates
    // so every time I am doing like
    /* 
  
    clearTimeout(undefined);
    timeout = setTimeout(() => {
      updateQuantity();
    }, 100);

    so it is not taking the previous timeout because timeout variable is also available inside the component , 
    so every time it re-renders it set to undefined.

    but after that one thought came into my mind that if the component is re-rendering again and again ,
    what if I just move my timeout variable outside the component. so if the re-render happens then it will 
    not change/manipulate the value of the timeout which is set to the previous settimeoutid.

  
    So I just moved it outside the component and it is working...
  */
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      updateQuantity();
    }, 800);
  }

  // update the quantity
  const updateQuantity = async () => {
    try {
      const config = {
        url: "/pharmacy/updateQuantity",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          sampleCartDetails: JSON.stringify(sampleCartDetails),
          CartItemsList: JSON.stringify(CartItemsList),
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getCartItems();
        alert(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
      getCartItems();
    }
  };

  // update the quantity
  const RemovefromCart = async (cartitemid) => {
    try {
      const config = {
        url: "/pharmacy/removeFromCart",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          cartid: CartItemsList?._id,
          cartitemid: cartitemid,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getCartItems();
        alert(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
      getCartItems();
    }
  };

  //Get the list of all the items present in the cart.
  const [CartItemsList, setCartItemsList] = useState({});
  const getCartItems = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8521/api/pharmacy/getCartList/${pharmacyUser?._id}`
      );
      if (res.status === 200) {
        setCartItemsList(JSON.parse(JSON.stringify(res.data.cartlist)));
        setsampleCartDetails(JSON.parse(JSON.stringify(res.data.cartlist)));
      }
    } catch (error) {
      setCartItemsList({});
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

  useEffect(() => {
    pharmacyUser = JSON.parse(sessionStorage.getItem("pharmacyUser"));
    if (!pharmacyUser) {
      return alert("Please login first!!!");
    } else {
      getCartItems();
      getWishlist();
    }
  }, []);
  console.log("sampleCartDetails: ", sampleCartDetails);
  return (
    <div>
      <Headerpharmacy
        wishlistData={wishlistData}
        CartItemsList={CartItemsList}
      />
      <Container className="mt-3">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item href="/pharmacy">Pharmacy</Breadcrumb.Item>
          <Breadcrumb.Item active>Cart</Breadcrumb.Item>
        </Breadcrumb>

        <h3 className="fw-bold mb-3" style={{ color: "#208b8c" }}>
          Cart
        </h3>

        <div className="d-flex">
          <div className="mb-4">
            <Table responsive style={{ width: "860px" }} size="lg">
              <tbody>
                {sampleCartDetails?.cartItems?.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}.</td>
                      <td>
                        <img
                          src={`http://localhost:8521/AdminInventory/${item?.productid?.productImgs[0]}`}
                          alt=""
                          style={{ width: "auto", height: "100px" }}
                        />
                      </td>
                      <td>{item?.productid?.productName}</td>
                      <td>
                        <div
                          className="d-flex gap-3 align-items-center justify-content-evenly fs-6"
                          style={{
                            border: "1px solid #0000003d",
                            borderRadius: "20px",
                            width: "130px",
                            padding: "5px",
                          }}
                        >
                          <FontAwesomeIcon
                            style={{ cursor: "pointer" }}
                            icon={faMinus}
                            onClick={() => decrementCount(index)}
                          />
                          <input
                            style={{ width: "40px", textAlign: "center" }}
                            value={item?.quantity}
                            onChange={(e) =>
                              CartItemCountChange(index, e.target.value, item)
                            }
                          />
                          <FontAwesomeIcon
                            style={{ cursor: "pointer" }}
                            icon={faPlus}
                            onClick={() => {
                              incrementCount(index, item);
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        {(
                          (Number(item?.totalPrice) /
                            Number(
                              CartItemsList["cartItems"][index]["quantity"]
                            )) *
                          Number(item?.quantity)
                        ).toFixed(2)}
                      </td>
                      <td>
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "#da0b0b", cursor: "pointer" }}
                          onClick={() => RemovefromCart(item?._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <Link to="/pharmacycheckout">
            <Button on style={{ backgroundColor: "#208B8C" }}>
              Checkout
            </Button>
          </Link>
        </div>

        {/* <div className="d-flex gap-2  flex-1 ">
          <label className="fw-bold text-dark">Coupon :</label>
          <input
            style={{ width: "300px" }}
            type="text"
            className="form-control"
            placeholder="Coupon Code"
            aria-label="Coupon Code"
            aria-describedby="basic-addon1"
          />

          <Button className="all-bg-green">Update Cart</Button>
        </div> */}
      </Container>
    </div>
  );
};
