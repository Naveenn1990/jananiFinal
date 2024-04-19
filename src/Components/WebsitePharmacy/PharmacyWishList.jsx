import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Container,
  FloatingLabel,
  Form,
  Table,
} from "react-bootstrap";
import { Headerpharmacy } from "./headerpharmacy";
import axios from "axios";
export const PharmacyWishList = () => {
  let pharmacyUser = sessionStorage.getItem("pharmacyUser");
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
  const AddToCart = async (proid) => {
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
          patientid: JSON.parse(pharmacyUser)?._id,
          productid: proid,
          quantity: 1,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getCartItems();
        removeFromWishlist(proid);
        alert(res.data.success);
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const removeFromWishlist = async (proid) => {
    try {
      const config = {
        url: "/pharmacy/removeFromWishlist",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          patientid: JSON.parse(pharmacyUser)?._id,
          productid: proid,
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

  useEffect(() => {
    if (!pharmacyUser) {
      return alert("Please login first!!!");
    } else {
      getWishlist();
      getCartItems();
    }
  }, [pharmacyUser]);
  return (
    <div>
      <Headerpharmacy
        wishlistData={wishlistData}
        CartItemsList={CartItemsList}
      />
      <Container className="mt-3">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item href="/pharmacy">Pharmacy</Breadcrumb.Item>
          <Breadcrumb.Item active>Wishlist</Breadcrumb.Item>
        </Breadcrumb>

        <h3 className="fw-bold mb-3" style={{ color: "#208b8c" }}>
          My Wishlist
        </h3>

        <div className="mb-4">
          <Table responsive style={{ width: "800px" }} size="lg">
            <tbody>
              {wishlistData?.wishlistItems?.map((val, index) => {
                return (
                  <tr>
                    <td>{++index} .</td>
                    <td>
                      <img
                        src={`http://localhost:8521/AdminInventory/${val["productid"]["productImgs"][0]}`}
                        alt=""
                        style={{ width: "auto", height: "100px" }}
                      />
                    </td>
                    <td>{val?.productid?.productName} </td>

                    <td>
                      <div className="d-flex gap-2">
                        <Button
                          className="wishlist-cart-btn"
                          onClick={() => AddToCart(val["productid"]["_id"])}
                        >
                          Add To Cart
                        </Button>
                        <Button
                          className="wishlist-remove-btn"
                          onClick={() =>
                            removeFromWishlist(val["productid"]["_id"])
                          }
                        >
                          Remove
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};
