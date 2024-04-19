import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Headerpharmacy } from "./headerpharmacy";
import axios from "axios";
import { useLocation } from "react-router-dom";
export const PharmacyViewOrder = () => {
  let pharmacyUser = sessionStorage.getItem("pharmacyUser");
  const location = useLocation();
  const { orderVal } = location.state;
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
    <div>
      <Headerpharmacy
        wishlistData={wishlistData}
        CartItemsList={CartItemsList}
      />
      {/* <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4 mt-2'>Bill Information</h4> */}
      <Container className="mt-3">
        {/* <div className='mb-3'>
                    <Button style={{ backgroundColor: 'rgb(32 139 140)' }}>
                        <FontAwesomeIcon icon={faPrint} className='me-2' /> Print Invoice
                    </Button>
                </div> */}

        <div style={{ overflow: "hidden", overflowX: "scroll" }}>
          <div
            className="invoice-rspns"
            style={{
              boxShadow: " 0px 8px 32px 0px rgba(19, 19, 20, 0.37)",
              background: "#f5f6fa",
              backdropFilter: "blur(4px)",
              // border:"1px solid black",
              // height: "100%",
              // width: "100%",
              padding: "50px",
            }}
          >
            <div className="">
              <div className="mb-5">
                <img
                  style={{ width: "40px", height: "40px" }}
                  className="logo me-2 "
                  src="./img/logo.jpg"
                  alt="Logo"
                />{" "}
                <br />
                <span
                  className="fw-bold fs-4"
                  style={{ color: "rgb(32 139 140)" }}
                >
                  JANANI
                </span>
                <br />
                <span>JananiPharmacy@gmail.com</span>
                <br />
                <span>+1999212993</span>
                <br />
                <span>Singapur Layout, Banglore</span>
                <br />
              </div>
            </div>
            <div className="d-flex justify-content-between mb-5">
              <div style={{ width: "300px" }}>
                <span className="fw-bold text-dark">BILL TO:</span> <br />
                <span>{orderVal?.name}</span>
                <br />
                <span>{orderVal?.number}</span>
                <br />
                <span>
                  {orderVal?.shippingAddress}, {orderVal?.city},{" "}
                  {orderVal?.zipcode}
                </span>
              </div>

              <div className="">
                <span className="fw-bold text-dark">Order Details:</span>
                <br />
                <p>
                  <span className="fw-bold">ORDER DATE : </span>{" "}
                  {`${new Date(orderVal?.createdAt).getDate()}/${
                    new Date(orderVal?.createdAt).getMonth() + 1
                  }/${new Date(orderVal?.createdAt).getFullYear()}`}
                </p>
                <p>
                  <span className="fw-bold">ORDER NUMBER : </span>#
                  {orderVal?._id.slice(
                    orderVal?._id?.length - 6,
                    orderVal?._id?.length + 1
                  )}
                </p>
                <p>
                  <span className="fw-bold">STATUS : </span>Order Placed
                </p>
                <p>
                  <span className="fw-bold">Payment option : </span>
                  {orderVal?.paymentOption === "PAY_ONLINE"
                    ? "Paid online"
                    : "Cash on Delivery"}
                </p>
              </div>
            </div>

            <table className="table table-bordered border-dark">
              <thead>
                <tr className="admin-table-head">
                  <th className="fw-bold">SL No</th>
                  <th className="fw-bold">Item</th>
                  <th className="fw-bold">Price</th>
                  <th className="fw-bold">Discount</th>
                  <th className="fw-bold">Actual Price</th>
                  <th className="fw-bold">Quantity</th>
                  <th className="fw-bold">Amount</th>
                </tr>
              </thead>

              <tbody>
                {orderVal?.orderedItems?.map((val, index) => {
                  return (
                    <tr>
                      <td>{index + 1}.</td>
                      <td>{val?.productid?.productName}</td>
                      <td>{val?.productid?.productPrice}</td>
                      <td>{val?.productid?.discount}</td>
                      <td>
                        ₹
                        {val?.productid?.productPrice -
                          (val?.productid?.productPrice *
                            val?.productid?.discount) /
                            100}
                      </td>
                      <td>{val?.quantity}</td>
                      <td>
                        ₹
                        {(val?.productid?.productPrice -
                          (val?.productid?.productPrice *
                            val?.productid?.discount) /
                            100) *
                          val?.quantity}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className=" d-flex justify-content-end">
              <table
                className="table table-borderless"
                style={{ width: "200px" }}
              >
                <tbody>
                  <tr>
                    <td className="fw-bold p-0 text-start">Total Quantity :</td>
                    <td className="p-0 text-end">
                      {orderVal?.totalOrderedItems}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold p-0 text-start">Total Price :</td>
                    <td className="p-0 text-end">
                      ₹{orderVal?.totalOrderedPrice}
                    </td>
                  </tr>
                  {/* <tr>
                    <td className="fw-bold p-0 text-start">Gst :</td>
                    <td className="p-0 text-end">$20</td>
                  </tr>
                  <tr>
                    <td className="fw-bold p-0 text-start">Grand Total:</td>
                    <td className="p-0 text-end">$2020</td>
                  </tr> */}
                  <tr>
                    <td className="fw-bold p-0 text-start">Status :</td>
                    <td className="p-0 text-end">
                      {orderVal?.orderPayment === "DONE" ? (
                        <span style={{ color: "green" }}>Paid</span>
                      ) : (
                        <span style={{ color: "red" }}>Not Paid</span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center text-dark ">
              <p>Thanks For Shoping. </p>
              <p>
                Sales Invoice Generated By: Janani Hospital, Contact :
                JananiHospital@gamil.com{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
