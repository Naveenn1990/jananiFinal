import React, { useEffect, useState } from "react";
import { Button, Container, Table, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Headerpharmacy } from "./headerpharmacy";
import axios from "axios";
import moment from "moment";
export const PharmacyTrackOrder = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  let pharmacyUser = sessionStorage.getItem("pharmacyUser");
  const [PlaceOrder, setPlaceOrder] = useState(true);
  const [OutForDelivery, setOutForDelivery] = useState(false);
  const [Cancel, setCancel] = useState(false);
  const [Delivered, setDelivered] = useState(false);
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

  const [orderlistDetails, setorderlistDetails] = useState([]);
  const Orders = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8521/api/pharmacy/orderListbyid/${
          JSON.parse(pharmacyUser)?._id
        }`
      );
      if (res.status === 200) {
        setorderlistDetails(res.data.orderList);
      }
    } catch (error) {
      setorderlistDetails([]);
    }
  };
  const [selectedorderid, setselectedorderid] = useState("");
  const [selectedorderiddetails, setselectedorderiddetails] = useState("");

  const cancelProductOrderStatus = async () => {
    if (!selectedorderid) {
      return alert("selectedorderid");
    }
    if (!selectedorderiddetails) {
      return alert("selectedorderid");
    }
    try {
      const config = {
        url: "/pharmacy/cancelProductOrderStatus",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          orderid: selectedorderid,
          orderitemid: selectedorderiddetails,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        Orders();
        alert(res.data.success);
      }
    } catch (error) {
      console.log(error);
      return alert("Something went wrong!");
    }
  };

  useEffect(() => {
    if (!pharmacyUser) {
      return alert("Please login first!!!");
    } else {
      Orders();
      getWishlist();
      getCartItems();
    }
  }, [pharmacyUser]);
  console.log("orderlistDetails: ", orderlistDetails);
  return (
    <div>
      <Headerpharmacy
        wishlistData={wishlistData}
        CartItemsList={CartItemsList}
      />
      <Container>
        <div className="row gap-2 doctor-login-btn mb-4 mt-4">
          <Button
            onClick={() => {
              setPlaceOrder(true);
              setOutForDelivery(false);
              setCancel(false);
              setDelivered(false);
            }}
            style={{ backgroundColor: "rgb(0 23 153)" }}
            className="col-lg-2 "
          >
            Placed Order
          </Button>

          <Button
            onClick={() => {
              setPlaceOrder(false);
              setOutForDelivery(true);
              setCancel(false);
              setDelivered(false);
            }}
            style={{ backgroundColor: "rgb(233 49 112)" }}
            className="col-lg-2"
          >
            Out For Delivery
          </Button>

          <Button
            onClick={() => {
              setPlaceOrder(false);
              setOutForDelivery(false);
              setCancel(true);
              setDelivered(false);
            }}
            style={{ backgroundColor: "#f44336" }}
            className="col-lg-2 "
          >
            Cancel Order
          </Button>

          <Button
            onClick={() => {
              setPlaceOrder(false);
              setOutForDelivery(false);
              setCancel(false);
              setDelivered(true);
            }}
            style={{ backgroundColor: "#09ab09" }}
            className="col-lg-2 "
          >
            Delivered
          </Button>
        </div>

        {PlaceOrder ? (
          <>
            <div>
              {/* <div
                className="row mb-3 justify-content-evenly all-bg-green"
                style={{ color: "#fff", padding: "10px" }}
              >
                <div className="col-lg-2 col-sm-6">
                  <p className="fw-bold">ORDER PLACED</p>
                  <p>08/19/2023</p>
                  <p>12:35</p>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <p className="fw-bold"> TOTAL PRICE</p>
                  <p>5295.84</p>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <p className="fw-bold">SHIP TO</p>
                  <p>
                    Singapoor Layout, <br /> Banglore 560652
                  </p>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <p className="fw-bold fs-5">PLACED ORDER PRODUCT</p>
                  <p>Order</p>
                  <p>#654Eas54ae454</p>
                </div>
              </div> */}

              {orderlistDetails
                ?.filter((val) => val?.orderStatus === "PLACED_ORDER")
                ?.map((orderVal) => {
                  return (
                    <div className="row align-items-center border border-secondary mt-3">
                      <div className="col-lg-3">
                        <p
                          className="ms-4 fw-bold"
                          style={{
                            color: "#208b8c",
                            textDecoration: "underline",
                          }}
                        >
                          Product Details
                        </p>
                        <ul>
                          <li>
                            Order Placed :{" "}
                            <span>
                              {`${new Date(orderVal?.createdAt).getDate()}-${
                                new Date(orderVal?.createdAt).getMonth() + 1
                              }-${new Date(
                                orderVal?.createdAt
                              ).getFullYear()}`}{" "}
                              {`${new Date(
                                orderVal?.createdAt
                              ).getHours()}:${new Date(
                                orderVal?.createdAt
                              ).getMinutes()}`}
                            </span>
                          </li>
                          <li>
                            Shipping Address :{" "}
                            <span>
                              {orderVal?.shippingAddress}, {orderVal?.zipcode}
                            </span>
                          </li>

                          <li>
                            Total Ordered Items :{" "}
                            <span>{orderVal?.totalOrderedItems}</span>
                          </li>
                          <li>
                            Total Ordered Price :{" "}
                            <span>{orderVal?.totalOrderedPrice}/-</span>
                          </li>
                          <li>
                            Payment Option :{" "}
                            <span>
                              {orderVal?.paymentOption == "PAY_ON_DELIVERY" ? (
                                <>Cash On Delivery</>
                              ) : (
                                <>Online Paid</>
                              )}
                            </span>
                          </li>
                          <li>
                            Payment Status :{" "}
                            <span>
                              {orderVal?.orderPayment == "DONE" ? (
                                <span style={{ color: "green" }}>Paid</span>
                              ) : (
                                <span style={{ color: "red" }}>Not Paid</span>
                              )}
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-7">
                        <Table>
                          <thead>
                            <th
                              style={{
                                textAlign: "center",
                                border: "1px solid black",
                              }}
                            >
                              Product
                            </th>
                            {/* <th
                            style={{
                              textAlign: "center",
                              border: "1px solid black",
                            }}
                          >
                            Price
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              border: "1px solid black",
                            }}
                          >
                            Quantity
                          </th> */}
                            <th
                              style={{
                                textAlign: "center",
                                border: "1px solid black",
                              }}
                            >
                              Total Price
                            </th>
                            <th
                              style={{
                                textAlign: "center",
                                border: "1px solid black",
                              }}
                            >
                              Action
                            </th>
                          </thead>
                          <tbody>
                            {orderVal?.orderedItems?.map((val) => {
                              return (
                                <tr>
                                  <td className="row">
                                    <span className="col-md-2">
                                      <img
                                        style={{ width: "50px" }}
                                        src={`http://localhost:8521/AdminInventory/${val?.productid?.productImgs[0]}`}
                                        alt=""
                                      />
                                    </span>{" "}
                                    <span className="col-md-7 text-center">
                                      {val?.productid?.productName}
                                    </span>
                                  </td>
                                  {/* <td>
                                  {val?.productid?.productPrice -
                                    (val?.productid?.productPrice *
                                      val?.productid?.discount) /
                                      100}
                                  /-
                                </td>
                                <td>{val?.quantity}</td> */}
                                  <td>
                                    {(
                                      (val?.productid?.productPrice -
                                        (val?.productid?.productPrice *
                                          val?.productid?.discount) /
                                          100) *
                                      val?.quantity
                                    ).toFixed(1)}
                                    /-
                                  </td>
                                  <td>
                                    <Button
                                      style={{ backgroundColor: "#d51212" }}
                                      onClick={() => {
                                        setselectedorderid(orderVal?._id);
                                        setselectedorderiddetails(val?._id);
                                        handleShow();
                                      }}
                                    >
                                      Cancel Order
                                    </Button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </div>

                      <div className="col-lg-2">
                        <Button
                          onClick={() =>
                            navigate("/pharmacyvieworder", {
                              state: { orderVal: orderVal },
                            })
                          }
                          style={{
                            backgroundColor: "#208b8c",
                            marginBottom: "10px",
                          }}
                        >
                          View Order
                        </Button>
                        <br />
                        {/* <Button style={{ backgroundColor: "#d51212" }}>
                          Cancel Order
                        </Button> */}
                      </div>
                    </div>
                  );
                })}
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Cancelling product</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <b>
                  Are you really sure you want to{" "}
                  <span style={{ color: "red" }}>cancel</span> the product from
                  your Order?
                </b>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  NO
                </Button>
                <Button
                  className="yesButtonHover"
                  variant="secondary"
                  onClick={cancelProductOrderStatus}
                >
                  YES
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        ) : (
          <>
            {OutForDelivery ? (
              <>
                <div>
                  {/* <div
                  className="row mb-3 justify-content-evenly all-bg-green"
                  style={{ color: "#fff", padding: "10px" }}
                >
                  <div className="col-lg-2 col-sm-6">
                    <p className="fw-bold">ORDER PLACED</p>
                    <p>08/19/2023</p>
                    <p>12:35</p>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                    <p className="fw-bold"> TOTAL PRICE</p>
                    <p>5295.84</p>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                    <p className="fw-bold">SHIP TO</p>
                    <p>
                      Singapoor Layout, <br /> Banglore 560652
                    </p>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <p className="fw-bold fs-5">PLACED ORDER PRODUCT</p>
                    <p>Order</p>
                    <p>#654Eas54ae454</p>
                  </div>
                </div> */}

                  {orderlistDetails
                    ?.filter((val) => val?.orderStatus === "OUT_FOR_DELIVERY")
                    ?.map((orderVal) => {
                      return (
                        <div className="row align-items-center border border-secondary mt-3">
                          <div className="col-lg-3">
                            <p
                              className="ms-4 fw-bold"
                              style={{
                                color: "#208b8c",
                                textDecoration: "underline",
                              }}
                            >
                              Product Details
                            </p>
                            <ul>
                              <li>
                                Order Placed :{" "}
                                <span>
                                  {`${new Date(
                                    orderVal?.createdAt
                                  ).getDate()}-${
                                    new Date(orderVal?.createdAt).getMonth() + 1
                                  }-${new Date(
                                    orderVal?.createdAt
                                  ).getFullYear()}`}{" "}
                                  {`${new Date(
                                    orderVal?.createdAt
                                  ).getHours()}:${new Date(
                                    orderVal?.createdAt
                                  ).getMinutes()}`}
                                </span>
                              </li>
                              <li>
                                Shipping Address :{" "}
                                <span>
                                  {orderVal?.shippingAddress},{" "}
                                  {orderVal?.zipcode}
                                </span>
                              </li>

                              <li>
                                Total Ordered Items :{" "}
                                <span>{orderVal?.totalOrderedItems}</span>
                              </li>
                              <li>
                                Total Ordered Price :{" "}
                                <span>{orderVal?.totalOrderedPrice}/-</span>
                              </li>
                              <li>
                                Payment Option :{" "}
                                <span>
                                  {orderVal?.paymentOption ==
                                  "PAY_ON_DELIVERY" ? (
                                    <>Cash On Delivery</>
                                  ) : (
                                    <>Online Paid</>
                                  )}
                                </span>
                              </li>
                              <li>
                                Payment Status :{" "}
                                <span>
                                  {orderVal?.orderPayment == "DONE" ? (
                                    <span style={{ color: "green" }}>Paid</span>
                                  ) : (
                                    <span style={{ color: "red" }}>
                                      Not Paid
                                    </span>
                                  )}
                                </span>
                              </li>
                            </ul>
                          </div>

                          <div className="col-lg-7">
                            <Table>
                              <thead>
                                <th
                                  style={{
                                    textAlign: "center",
                                    border: "1px solid black",
                                  }}
                                >
                                  Product
                                </th>
                                {/* <th
                              style={{
                                textAlign: "center",
                                border: "1px solid black",
                              }}
                            >
                              Price
                            </th>
                            <th
                              style={{
                                textAlign: "center",
                                border: "1px solid black",
                              }}
                            >
                              Quantity
                            </th> */}
                                <th
                                  style={{
                                    textAlign: "center",
                                    border: "1px solid black",
                                  }}
                                >
                                  Total Price
                                </th>
                                <th
                                  style={{
                                    textAlign: "center",
                                    border: "1px solid black",
                                  }}
                                >
                                  Action
                                </th>
                              </thead>
                              <tbody>
                                {orderVal?.orderedItems?.map((val) => {
                                  return (
                                    <tr>
                                      <td className="row">
                                        <span className="col-md-2">
                                          <img
                                            style={{ width: "50px" }}
                                            src={`http://localhost:8521/AdminInventory/${val?.productid?.productImgs[0]}`}
                                            alt=""
                                          />
                                        </span>{" "}
                                        <span className="col-md-7">
                                          {val?.productid?.productName}
                                        </span>
                                      </td>
                                      {/* <td>
                                    {val?.productid?.productPrice -
                                      (val?.productid?.productPrice *
                                        val?.productid?.discount) /
                                        100}
                                    /-
                                  </td>
                                  <td>{val?.quantity}</td> */}
                                      <td>
                                        {(val?.productid?.productPrice -
                                          (val?.productid?.productPrice *
                                            val?.productid?.discount) /
                                            100) *
                                          val?.quantity}
                                        /-
                                      </td>
                                      <td>
                                        <Button
                                          style={{ backgroundColor: "#d51212" }}
                                          onClick={() => {
                                            // handleShow();
                                            // // cancelProductOrderStatus(
                                            // //   orderVal?._id,
                                            // //   val?._id
                                            // // );
                                          }}
                                        >
                                          Cancel Order
                                        </Button>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </Table>
                          </div>

                          <div className="col-lg-2">
                            {/* <Button
                            onClick={() => navigate("/pharmacyvieworder")}
                            style={{
                              backgroundColor: "#208b8c",
                              marginBottom: "10px",
                            }}
                          >
                            View Order
                          </Button>
                          <br /> */}
                            {/* <Button style={{ backgroundColor: "#d51212" }}>
                            Cancel Order
                          </Button> */}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </>
            ) : (
              <>
                {Cancel ? (
                  <>
                    <div>
                      {/* <div
                      className="row mb-3 justify-content-evenly all-bg-green"
                      style={{ color: "#fff", padding: "10px" }}
                    >
                      <div className="col-lg-2 col-sm-6">
                        <p className="fw-bold">ORDER PLACED</p>
                        <p>08/19/2023</p>
                        <p>12:35</p>
                      </div>
                      <div className="col-lg-2 col-sm-6">
                        <p className="fw-bold"> TOTAL PRICE</p>
                        <p>5295.84</p>
                      </div>
                      <div className="col-lg-2 col-sm-6">
                        <p className="fw-bold">SHIP TO</p>
                        <p>
                          Singapoor Layout, <br /> Banglore 560652
                        </p>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <p className="fw-bold fs-5">PLACED ORDER PRODUCT</p>
                        <p>Order</p>
                        <p>#654Eas54ae454</p>
                      </div>
                    </div> */}

                      {orderlistDetails
                        ?.filter((item) => {
                          if (item?.orderStatus === "CANCELLED_ORDER") {
                            return true;
                          } else {
                            for (let obj1 of item?.orderedItems) {
                              if (obj1.orderDataStatus === "CANCELLED_ORDER") {
                                return true;
                              }
                            }
                            return false;
                          }
                          // return false;
                        })
                        ?.map((orderVal) => {
                          return (
                            <div className="row align-items-center border border-secondary">
                              <div className="col-lg-3">
                                <p
                                  className="ms-4 fw-bold"
                                  style={{
                                    color: "#208b8c",
                                    textDecoration: "underline",
                                  }}
                                >
                                  Product Details
                                </p>
                                <ul>
                                  <li>
                                    Order Placed :{" "}
                                    <span>
                                      {`${new Date(
                                        orderVal?.createdAt
                                      ).getDate()}-${
                                        new Date(
                                          orderVal?.createdAt
                                        ).getMonth() + 1
                                      }-${new Date(
                                        orderVal?.createdAt
                                      ).getFullYear()}`}{" "}
                                      {`${new Date(
                                        orderVal?.createdAt
                                      ).getHours()}:${new Date(
                                        orderVal?.createdAt
                                      ).getMinutes()}`}
                                    </span>
                                  </li>
                                  <li>
                                    Shipping Address :{" "}
                                    <span>
                                      {orderVal?.shippingAddress},{" "}
                                      {orderVal?.zipcode}
                                    </span>
                                  </li>

                                  <li>
                                    Total Ordered Items :{" "}
                                    <span>{orderVal?.totalOrderedItems}</span>
                                  </li>
                                  <li>
                                    Total Ordered Price :{" "}
                                    <span>{orderVal?.totalOrderedPrice}/-</span>
                                  </li>
                                  <li>
                                    Payment Option :{" "}
                                    <span>
                                      {orderVal?.paymentOption ==
                                      "PAY_ON_DELIVERY" ? (
                                        <>Cash On Delivery</>
                                      ) : (
                                        <>Online Paid</>
                                      )}
                                    </span>
                                  </li>
                                  <li>
                                    Payment Status :{" "}
                                    <span>
                                      {orderVal?.orderPayment == "DONE" ? (
                                        <span style={{ color: "green" }}>
                                          Paid
                                        </span>
                                      ) : (
                                        <span style={{ color: "red" }}>
                                          Not Paid
                                        </span>
                                      )}
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div className="col-lg-9">
                                <Table>
                                  <thead>
                                    <th
                                      style={{
                                        textAlign: "center",
                                        border: "1px solid black",
                                      }}
                                    >
                                      Product
                                    </th>
                                    <th
                                      style={{
                                        textAlign: "center",
                                        border: "1px solid black",
                                      }}
                                    >
                                      Price
                                    </th>
                                    <th
                                      style={{
                                        textAlign: "center",
                                        border: "1px solid black",
                                      }}
                                    >
                                      Quantity
                                    </th>
                                    <th
                                      style={{
                                        textAlign: "center",
                                        border: "1px solid black",
                                      }}
                                    >
                                      Total Price
                                    </th>
                                    <th
                                      style={{
                                        textAlign: "center",
                                        border: "1px solid black",
                                      }}
                                    >
                                      Status
                                    </th>
                                  </thead>
                                  <tbody>
                                    {orderVal?.orderedItems?.map((val) => {
                                      return (
                                        <tr>
                                          <td className="row">
                                            <span className="col-md-2">
                                              <img
                                                style={{ width: "50px" }}
                                                src={`http://localhost:8521/AdminInventory/${val?.productid?.productImgs[0]}`}
                                                alt=""
                                              />
                                            </span>{" "}
                                            <span className="col-md-10">
                                              {val?.productid?.productName}
                                            </span>
                                          </td>
                                          <td>
                                            {(
                                              val?.productid?.productPrice -
                                              (val?.productid?.productPrice *
                                                val?.productid?.discount) /
                                                100
                                            ).toFixed(1)}
                                            /-
                                          </td>
                                          <td>{val?.quantity}</td>
                                          <td>
                                            {(
                                              (val?.productid?.productPrice -
                                                (val?.productid?.productPrice *
                                                  val?.productid?.discount) /
                                                  100) *
                                              val?.quantity
                                            ).toFixed(1)}
                                            /-
                                          </td>
                                          <td>
                                            <div
                                              style={{
                                                color:
                                                  val?.orderDataStatus ===
                                                  "PLACED_ORDER"
                                                    ? "green"
                                                    : "#d51212",
                                              }}
                                            >
                                              {val?.orderDataStatus}
                                            </div>
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </Table>
                              </div>

                              {/* <div className="col-lg-2">
                              <Button
                                onClick={() => navigate("/pharmacyvieworder")}
                                style={{
                                  backgroundColor: "#208b8c",
                                  marginBottom: "10px",
                                }}
                              >
                                View Order
                              </Button>
                              <br />
                              <Button style={{ backgroundColor: "#d51212" }}>
                                Cancel Order
                              </Button>
                            </div> */}
                            </div>
                          );
                        })}
                    </div>
                  </>
                ) : (
                  <>
                    {Delivered ? (
                      <>
                        <div>
                          {/* <div
                        className="row mb-3 justify-content-evenly all-bg-green"
                        style={{ color: "#fff", padding: "10px" }}
                      >
                        <div className="col-lg-2 col-sm-6">
                          <p className="fw-bold">ORDER PLACED</p>
                          <p>08/19/2023</p>
                          <p>12:35</p>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                          <p className="fw-bold"> TOTAL PRICE</p>
                          <p>5295.84</p>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                          <p className="fw-bold">SHIP TO</p>
                          <p>
                            Singapoor Layout, <br /> Banglore 560652
                          </p>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <p className="fw-bold fs-5">PLACED ORDER PRODUCT</p>
                          <p>Order</p>
                          <p>#654Eas54ae454</p>
                        </div>
                      </div> */}

                          {orderlistDetails?.map((orderVal) => {
                            return (
                              <div className="row align-items-center border border-secondary">
                                <div className="col-lg-3">
                                  <p
                                    className="ms-4 fw-bold"
                                    style={{
                                      color: "#208b8c",
                                      textDecoration: "underline",
                                    }}
                                  >
                                    Product Details
                                  </p>
                                  <ul>
                                    <li>
                                      Order Placed :{" "}
                                      <span>
                                        {`${new Date(
                                          orderVal?.createdAt
                                        ).getDate()}-${
                                          new Date(
                                            orderVal?.createdAt
                                          ).getMonth() + 1
                                        }-${new Date(
                                          orderVal?.createdAt
                                        ).getFullYear()}`}{" "}
                                        {`${new Date(
                                          orderVal?.createdAt
                                        ).getHours()}:${new Date(
                                          orderVal?.createdAt
                                        ).getMinutes()}`}
                                      </span>
                                    </li>
                                    <li>
                                      Shipping Address :{" "}
                                      <span>
                                        {orderVal?.shippingAddress},{" "}
                                        {orderVal?.zipcode}
                                      </span>
                                    </li>

                                    <li>
                                      Total Ordered Items :{" "}
                                      <span>{orderVal?.totalOrderedItems}</span>
                                    </li>
                                    <li>
                                      Total Ordered Price :{" "}
                                      <span>
                                        {orderVal?.totalOrderedPrice}/-
                                      </span>
                                    </li>
                                    <li>
                                      Payment Option :{" "}
                                      <span>
                                        {orderVal?.paymentOption ==
                                        "PAY_ON_DELIVERY" ? (
                                          <>Cash On Delivery</>
                                        ) : (
                                          <>Online Paid</>
                                        )}
                                      </span>
                                    </li>
                                    <li>
                                      Payment Status :{" "}
                                      <span>
                                        {orderVal?.orderPayment == "DONE" ? (
                                          <span style={{ color: "green" }}>
                                            Paid
                                          </span>
                                        ) : (
                                          <span style={{ color: "red" }}>
                                            Not Paid
                                          </span>
                                        )}
                                      </span>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col-lg-7">
                                  <Table>
                                    <thead>
                                      <th
                                        style={{
                                          textAlign: "center",
                                          border: "1px solid black",
                                        }}
                                      >
                                        Product
                                      </th>
                                      <th
                                        style={{
                                          textAlign: "center",
                                          border: "1px solid black",
                                        }}
                                      >
                                        Price
                                      </th>
                                      <th
                                        style={{
                                          textAlign: "center",
                                          border: "1px solid black",
                                        }}
                                      >
                                        Quantity
                                      </th>
                                      <th
                                        style={{
                                          textAlign: "center",
                                          border: "1px solid black",
                                        }}
                                      >
                                        Total Price
                                      </th>
                                    </thead>
                                    <tbody>
                                      {orderVal?.orderedItems?.map((val) => {
                                        return (
                                          <tr>
                                            <td className="row">
                                              <span className="col-md-2">
                                                <img
                                                  style={{ width: "50px" }}
                                                  src={`http://localhost:8521/AdminInventory/${val?.productid?.productImgs[0]}`}
                                                  alt=""
                                                />
                                              </span>{" "}
                                              <span className="col-md-10">
                                                {val?.productid?.productName}
                                              </span>
                                            </td>
                                            <td>
                                              {val?.productid?.productPrice -
                                                (val?.productid?.productPrice *
                                                  val?.productid?.discount) /
                                                  100}
                                              /-
                                            </td>
                                            <td>{val?.quantity}</td>
                                            <td>
                                              {(val?.productid?.productPrice -
                                                (val?.productid?.productPrice *
                                                  val?.productid?.discount) /
                                                  100) *
                                                val?.quantity}
                                              /-
                                            </td>
                                          </tr>
                                        );
                                      })}
                                    </tbody>
                                  </Table>
                                </div>

                                <div className="col-lg-2">
                                  <Button
                                    onClick={() =>
                                      navigate("/pharmacyorderinvoice")
                                    }
                                    style={{ backgroundColor: "#09ab09" }}
                                  >
                                    Invoice
                                  </Button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </Container>
    </div>
  );
};
