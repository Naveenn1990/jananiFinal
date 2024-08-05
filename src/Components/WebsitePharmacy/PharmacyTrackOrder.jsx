import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Container,
  Table,
  Modal,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Headerpharmacy } from "./headerpharmacy";
import axios from "axios";
import moment from "moment";
import { useReactToPrint } from "react-to-print";
import { toWords } from "number-to-words";

export const PharmacyTrackOrder = () => {
  const [deleteData, setdeleteData] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setdeleteData(item);
  };

  const navigate = useNavigate();
  let pharmacyUser = sessionStorage.getItem("pharmacyUser");
  console.log("pharmacyUser", pharmacyUser);
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

  // const cancelProductOrderStatus = async () => {
  //   if (!selectedorderid) {
  //     return alert("selectedorderid");
  //   }
  //   if (!selectedorderiddetails) {
  //     return alert("selectedorderid");
  //   }
  //   try {
  //     const config = {
  //       url: "/pharmacy/cancelProductOrderStatus",
  //       method: "put",
  //       baseURL: "http://localhost:8521/api",
  //       headers: { "content-type": "application/json" },
  //       data: {
  //         orderid: selectedorderid,
  //         orderitemid: selectedorderiddetails,
  //       },
  //     };
  //     let res = await axios(config);
  //     if (res.status === 200) {
  //       Orders();
  //       alert(res.data.success);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     return alert("Something went wrong!");
  //   }
  // };
  const [ReasonForRejection, setReasonForRejection] = useState("");
  const cancelProductOrderStatus = async (orderid) => {
    if (!ReasonForRejection) {
      alert("Please enter reason for rejection");
    } else {
      try {
        const config = {
          url: "/pharmacy/cancelProductOrderStatus",
          method: "put",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            orderid: orderid?._id,
            ReasonForRejection: ReasonForRejection,
          },
        };
        const res = await axios(config);
        if (res.status === 200) {
          // setOrders(res.data.updateStatus);
          Orders();
          alert("Order canceled successfully");
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
        alert(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    Orders();
    getWishlist();
    getCartItems();
  }, []);

  const [Invoice, setInvoice] = useState({});
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "PharmacyOrderInvoice",
    // onAfterPrint: () => alert("print successfully"),
  });

  const totalamount = Invoice?.orderedItems?.reduce(
    (a, item) =>
      a +
      (item?.productid?.vendorIdProductId?.MRP -
        (item?.productid?.vendorIdProductId?.MRP *
          item?.productid?.vendorIdProductId?.discount) /
          100) *
        item?.quantity,
    0
  );

  const textword = totalamount ? toWords(totalamount) : "";

  const capitalizeWords = textword?.replace(/\b\w/g, (char) =>
    char?.toUpperCase()
  );

  const roundedTotalAmount = Math.round(totalamount);
  const roundOffAmount = (totalamount - roundedTotalAmount).toFixed(2);

  console.log("Invoice", Invoice);
  console.log("totalamount", totalamount);
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
                              {orderVal?.shippingAddress},{orderVal?.city} -
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
                        <Button
                          style={{ backgroundColor: "#d51212" }}
                          onClick={() => {
                            setselectedorderid(orderVal?._id);
                            handleShow(orderVal);
                          }}
                        >
                          Cancel Order
                        </Button>
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
                              Product Name
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
                              Discount
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
                              View Product details
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
                                  <td>
                                    {val?.productid?.productPrice}
                                    /-
                                  </td>
                                  <td>{val?.productid?.discount}%</td>
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
                                    <Link
                                      style={{
                                        border: "none",
                                        backgroundColor: "transparent",
                                      }}
                                      to="/pharmacydesc"
                                      state={{ item: val?.productid }}
                                    >
                                      <i
                                        class="fas fa-eye"
                                        style={{ color: "#208b8c" }}
                                      ></i>
                                    </Link>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </div>

                      {/* <div className="col-lg-2">
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
                          View Invoice
                        </Button>
                        <br />
                      
                      </div> */}
                    </div>
                  );
                })}
            </div>
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
                                  {orderVal?.shippingAddress},{orderVal?.city} -
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
                            <div>
                              <Button
                                style={{ backgroundColor: "#d51212" }}
                                // onClick={() => {
                                //   setselectedorderid(orderVal?._id);
                                //   handleShow(orderVal);
                                // }}
                                onClick={() => handleShow(orderVal)}
                              >
                                Cancel Order
                              </Button>
                            </div>
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
                                  Product Name
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
                                  Discount
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
                                  View Product details
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
                                      <td>
                                        {val?.productid?.productPrice}
                                        /-
                                      </td>
                                      <td>{val?.productid?.discount}%</td>

                                      <td>{val?.quantity}</td>
                                      <td>
                                        {(val?.productid?.productPrice -
                                          (val?.productid?.productPrice *
                                            val?.productid?.discount) /
                                            100) *
                                          val?.quantity}
                                        /-
                                      </td>
                                      <td>
                                        <Link
                                          style={{
                                            border: "none",
                                            backgroundColor: "transparent",
                                          }}
                                          to="/pharmacydesc"
                                          state={{ item: val?.productid }}
                                        >
                                          <i
                                            class="fas fa-eye"
                                            style={{ color: "#208b8c" }}
                                          ></i>
                                        </Link>
                                      </td>
                                      {/* <td>
                                        <Button
                                          style={{ backgroundColor: "#d51212" }}
                                          onClick={() => {
                                            handleShow();
                                            // cancelProductOrderStatus(
                                            //   orderVal?._id,
                                            //   val?._id
                                            // );
                                          }}
                                        >
                                          Cancel Order
                                        </Button>
                                      </td> */}
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
                                      {orderVal?.shippingAddress},
                                      {orderVal?.city} -{orderVal?.zipcode}
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
                                      Discount
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
                                            {val?.productid?.productPrice.toFixed(
                                              1
                                            )}
                                            /-
                                          </td>
                                          <td>{val?.productid?.discount}%</td>
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
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </Table>
                              </div>
                              <div
                                style={{
                                  color: "#d51212",
                                }}
                              >
                                <p style={{ textAlign: "center" }}>
                                  {" "}
                                  {orderVal?.ReasonForRejection}
                                </p>
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

                          {orderlistDetails
                            ?.filter(
                              (item) => item?.orderStatus === "DELIVERED"
                            )
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
                                          {orderVal?.shippingAddress},
                                          {orderVal?.city} -{orderVal?.zipcode}
                                        </span>
                                      </li>

                                      <li>
                                        Total Ordered Items :{" "}
                                        <span>
                                          {orderVal?.totalOrderedItems}
                                        </span>
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
                                          Discount
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
                                                {val?.productid?.productPrice}
                                                /-
                                              </td>
                                              <td>{val?.quantity}</td>

                                              <td>
                                                {val?.productid?.discount}%
                                              </td>
                                              <td>
                                                {(val?.productid?.productPrice -
                                                  (val?.productid
                                                    ?.productPrice *
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
                                    {/* <Button
                                      onClick={() =>
                                        navigate("/pharmacyorderinvoice")
                                      }
                                      style={{ backgroundColor: "#09ab09" }}
                                    >
                                      Invoice
                                    </Button> */}
                                    <Button
                                      // onClick={() =>
                                      //   navigate("/pharmacyvieworder", {
                                      //     state: { orderVal: orderVal },
                                      //   })
                                      // }

                                      onClick={() => {
                                        handleShow2();
                                        setInvoice(orderVal);
                                      }}
                                      style={{
                                        backgroundColor: "#208b8c",
                                        marginBottom: "10px",
                                      }}
                                    >
                                      View Invoice
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

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cancelling product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <b>
              Are you really sure you want to{" "}
              <span style={{ color: "red" }}>cancel</span>
              your Order?, Than Enter reason for cancel
            </b>
            <Form>
              <Form.Group className="mb-3">
                {/* <Form.Label>Message</Form.Label> */}
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => setReasonForRejection(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              NO
            </Button>
            <Button
              className="yesButtonHover"
              variant="secondary"
              onClick={() => cancelProductOrderStatus(deleteData)}
            >
              YES
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={show2}
          onHide={handleClose2}
          size="lg"
          className="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Invoice</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div ref={componentRef}>
              <div style={{ padding: "10px", backgroundColor: "white" }}>
                <div
                  style={{
                    padding: "5px",
                    border: "2px solid black",
                  }}
                >
                  <Row>
                    <Col md={6}>
                      <div style={{ display: "flex" }}>
                        <img
                          style={{ width: "30px", height: "30px" }}
                          className="logo me-2 "
                          src="/img/logo.jpg"
                          alt="Logo"
                        />
                        <p style={{ fontWeight: "bold" }}>JANANI PHARMA</p>
                      </div>
                      <p>SY NO 98/A PLOT NO 71, GROUND FLOOR, SHOP NO</p>
                      <p>SYNDICATE BANK RIGHT SIDE, KK NAGAR, VIJAYAPU</p>
                    </Col>
                    <Col md={6}>
                      <p style={{ fontWeight: "bold" }}>
                        Patient Name: {JSON.parse(pharmacyUser)?.Firstname}
                        &nbsp;
                        {JSON.parse(pharmacyUser)?.Lastname}
                      </p>
                      <p>
                        Patient Address:{JSON.parse(pharmacyUser)?.Address1},
                        {JSON.parse(pharmacyUser)?.Address2},
                        {JSON.parse(pharmacyUser)?.City} -{" "}
                        {JSON.parse(pharmacyUser)?.Zipcode}
                      </p>
                      <p>Dr Name:</p>
                      <p>Dr Reg No.:</p>
                    </Col>
                  </Row>
                  <div style={{ overflow: "hidden", marginTop: "3%" }}>
                    <Table striped bordered>
                      <thead>
                        <tr>
                          <td colSpan={3}>GSTN : 29DKAPP9547L1ZB</td>
                          <td style={{ fontWeight: "bold" }} colSpan={4}>
                            GST INVOICE
                          </td>
                          <td colSpan={5}>
                            Invoice No: {Invoice?._id?.slice(-9)?.toUpperCase()}
                            &nbsp;Date:
                            {moment(Invoice?.createdAt).format("DD-MM-YYYY")}
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: "#f2f2f2" }}>
                          <td style={{ fontWeight: "bold" }}>SN.</td>
                          <td style={{ fontWeight: "bold" }}>PRODUCT NAME</td>
                          <td style={{ fontWeight: "bold" }}>PACK</td>
                          <td style={{ fontWeight: "bold" }}>HSN</td>
                          <td style={{ fontWeight: "bold" }}>BATCH</td>
                          <td style={{ fontWeight: "bold" }}>EXP.</td>
                          <td style={{ fontWeight: "bold" }}>QTY</td>
                          <td style={{ fontWeight: "bold" }}>MRP</td>
                          <td style={{ fontWeight: "bold" }}>Discount</td>
                          <td style={{ fontWeight: "bold" }}>SGST</td>
                          <td style={{ fontWeight: "bold" }}>CGST</td>
                          <td style={{ fontWeight: "bold" }}>AMOUNT</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Invoice?.orderedItems?.map((item, index) => {
                          return (
                            <tr style={{ backgroundColor: "white" }}>
                              <td>{index + 1}</td>
                              <td>{item?.productid?.productName}</td>
                              <td>
                                {item?.productid?.vendorIdProductId?.packSize}
                              </td>
                              <td>{item?.productid?.vendorIdProductId?.HSN}</td>
                              <td>
                                {item?.productid?.vendorIdProductId?.Batch}
                              </td>
                              <td>
                                {moment(
                                  item?.productid?.vendorIdProductId?.expiryDate
                                ).format("DD/MM/YY")}
                              </td>
                              <td>{item?.quantity}</td>
                              <td>{item?.productid?.vendorIdProductId?.MRP}</td>
                              <td>
                                {item?.productid?.vendorIdProductId?.discount}
                              </td>
                              <td>
                                {item?.productid?.vendorIdProductId?.SGST}
                              </td>
                              <td>
                                {item?.productid?.vendorIdProductId?.CGST}
                              </td>
                              <td>
                                {(item?.productid?.vendorIdProductId?.MRP -
                                  (item?.productid?.vendorIdProductId?.MRP *
                                    item?.productid?.vendorIdProductId
                                      ?.discount) /
                                    100) *
                                  item?.quantity}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                  <Row
                    style={{
                      borderTop: "2px solid black",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <Col md={8}>
                      <div style={{ borderRight: "1px solid #e0e0e0" }}>
                        <div style={{ borderBottom: "1px solid #e0e0e0" }}>
                          <p>GST 28223.7*0%=0SGST, **GET WELL SOON**</p>
                        </div>
                        <div>
                          <Row>
                            <Col md={8}>
                              <p
                                style={{
                                  fontWeight: "bold",
                                  textDecorationLine: "underline",
                                }}
                              >
                                Terms & Conditions
                              </p>
                              <p>
                                Goods once sold will not be taken back or
                                exchanged.
                              </p>
                              <p>
                                Bills not paid due date will attract 24%
                                interest.
                              </p>
                              <p>All disputes subject to jurisdication only.</p>
                              <p>
                                Prescribed Sales Tax declaration will be given.
                              </p>
                              <p style={{ height: "60px" }}>Remark :</p>
                              <p>
                                Rs.{" "}
                                {capitalizeWords
                                  ? capitalizeWords + " " + "Only"
                                  : ""}
                              </p>
                            </Col>
                            <Col md={4}>
                              <p style={{ marginTop: "30%" }}>
                                For JANANI PHARMA
                              </p>
                              <p style={{ marginTop: "30%" }}>
                                Authorised Signatory
                              </p>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div>
                        <Row>
                          <Col md={6}>
                            <p style={{ fontWeight: "bold" }}>SUB TOTAL</p>
                          </Col>
                          <Col md={6}>
                            <p style={{ fontWeight: "bold" }}>
                              {totalamount?.toFixed(2)}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <p>Roundoff</p>
                          </Col>
                          <Col md={6}>
                            {roundOffAmount ? roundOffAmount : 0}
                          </Col>
                        </Row>
                        <Row
                          style={{
                            marginTop: "40%",
                            borderTop: "1px solid #e0e0e0",
                          }}
                        >
                          <Col md={6}>
                            <p style={{ fontWeight: "bold" }}>GRAND TOTAL</p>
                          </Col>
                          <Col md={6}>
                            <p style={{ fontWeight: "bold" }}>
                              {roundedTotalAmount?.toFixed(2)}
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
            <Button variant="primary" onClick={handleprint}>
              Print
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};
