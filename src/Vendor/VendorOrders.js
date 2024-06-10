import {
  faAngleLeft,
  faAngleRight,
  faCancel,
  faCheck,
  faDownload,
  faEllipsis,
  faEye,
  faFilter,
  faHouseUser,
  faPenToSquare,
  faPlus,
  faTrash,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  FloatingLabel,
  Form,
  FormLabel,
  Modal,
  Table,
} from "react-bootstrap";
import { TfiRuler } from "react-icons/tfi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { faCircleInfo, faTag } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export const VendorOrders = () => {
  const navigate = useNavigate();
  const Vendor = JSON.parse(sessionStorage.getItem("VendorDetails"));

  const [show, setShow] = useState(false);

  const viewClose = () => setShow(false);
  const viewShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [SelectedProduct, setSelectedProduct] = useState({});

  const deleteBtnClose = () => {
    setShow(false);
    setPayment();
  };
  const deleteBtnShow = () => setShow2(true);

  const [ProductList, setProductList] = useState([]);

  const getProductList = () => {
    axios
      .get("http://localhost:8521/api/vendor/productList")
      .then(function (response) {
        // handle success
        setProductList(response.data.allProducts);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const [OrderList, setOrderList] = useState([]);

  const getOrderList = () => {
    axios
      .get("http://localhost:8521/api/vendor/getAllVendorOrders/" + Vendor?._id)
      .then(function (response) {
        // handle success
        setOrderList(response.data.allVendorOrders);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  console.log("OrderList",OrderList);
  const getLabOrderList = () => {
    axios
      .get(
        "http://localhost:8521/api/admin/getAllLabVendorOrders/" + Vendor?._id
      )
      .then(function (response) {
        // handle success
        setOrderList(response.data.allVendorOrders);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  console.log(OrderList, "OrderList");

  useEffect(() => {
    getProductList();
    if (Vendor?.VendorType === "Lab") {
      getLabOrderList();
    } else if (Vendor?.VendorType === "Pharmacy") {
      getOrderList();
    }
  }, []);

  const AcceptOrder = async (data) => {
    try {
      {
        const config = {
          url: "/vendor/UpdateOrderInfo",
          method: "put",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            orderid: data?._id,
            vendorId: data?.vendorId,
            orderStatus: "OUT_FOR_DELIVERY",
            orderPayment: "PENDING",
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          console.log(res.data);
          console.log(res.data.success);
          alert("Order Accepted");
          getOrderList();
        }
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const AcceptLabOrder = async (data) => {
    try {
      {
        const config = {
          url: "/admin/changeLabOrderValues",
          method: "put",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            orderid: data?._id,
            vendorId: data?.vendorId,
            orderStatus: "OUT_FOR_DELIVERY",
            orderPayment: "PENDING",
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          console.log(res.data);
          console.log(res.data.success);
          alert("Order Accepted");
          getLabOrderList();
        }
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const CANCELLEDORDER = async (data) => {
    try {
      {
        const config = {
          url: "/vendor/UpdateOrderInfo",
          method: "put",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            orderid: data?._id,
            vendorId: data?.vendorId,
            orderStatus: "CANCELLED_ORDER",
            orderPayment: "PENDING",
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          console.log(res.data);
          console.log(res.data.success);
          alert("Order Accepted");
          getOrderList();
        }
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const CANCELLEDLABORDER = async (data) => {
    try {
      {
        const config = {
          url: "/admin/changeLabOrderValues",
          method: "put",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            orderid: data?._id,
            vendorId: data?.vendorId,
            orderStatus: "CANCELLED_ORDER",
            orderPayment: "PENDING",
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          console.log(res.data);
          console.log(res.data.success);
          alert("Order Accepted");
          getLabOrderList();
        }
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const DeliverOrder = async (data) => {
    if (Payment) {
      try {
        {
          const config = {
            url: "/vendor/UpdateOrderInfo",
            method: "put",
            baseURL: "http://localhost:8521/api",
            headers: { "content-type": "application/json" },
            data: {
              orderid: Selecteddata?._id,
              vendorId: Selecteddata?.vendorId,
              orderStatus: "DELIVERED",
              orderPayment: Payment,
            },
          };
          let res = await axios(config);
          if (res.status === 200) {
            console.log(res.data);
            console.log(res.data.success);
            alert("Order Delivered");
            getOrderList();
            setShow(false);
          }
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    } else {
      alert("Please Confirm Payment");
    }
  };

  const DeliverLabOrder = async (data) => {
    if (Payment) {
      try {
        {
          const config = {
            url: "/admin/changeLabOrderValues",
            method: "put",
            baseURL: "http://localhost:8521/api",
            headers: { "content-type": "application/json" },
            data: {
              orderid: Selecteddata?._id,
              vendorId: Selecteddata?.vendorId,
              orderStatus: "DELIVERED",
              orderPayment: Payment,
            },
          };
          let res = await axios(config);
          if (res.status === 200) {
            console.log(res.data);
            console.log(res.data.success);
            alert("Order Delivered");
            getLabOrderList();
            setShow(false);
          }
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    } else {
      alert("Please Confirm Payment");
    }
  };

  const MakePayment = async (data) => {
    try {
      {
        const config = {
          url: "/vendor/UpdateOrderInfo",
          method: "put",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            orderid: data?._id,
            vendorId: data?.vendorId,
            orderStatus: "DELIVERED",
            orderPayment: "DONE",
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          console.log(res.data);
          console.log(res.data.success);
          alert("Payment Done");
          getOrderList();
        }
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const MakeLabPayment = async (data) => {
    try {
      {
        const config = {
          url: "/admin/changeLabOrderValues",
          method: "put",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            orderid: data?._id,
            vendorId: data?.vendorId,
            orderStatus: "DELIVERED",
            orderPayment: "DONE",
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          console.log(res.data);
          console.log(res.data.success);
          alert("Payment Done");
          getLabOrderList();
        }
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [ViewNewOrder, setViewNewOrder] = useState(true);
  const [ViewOutForDelivery, setViewOutForDelivery] = useState(false);
  const [ViewDelivered, setViewDelivered] = useState(false);
  const [Selecteddata, setSelecteddata] = useState({});

  const [Payment, setPayment] = useState();

  return (
    <div>
      <div
        style={{ backgroundColor: "#dae1f3" }}
        className="row p-4 fw-bold mb-4"
      >
        <div className="col-lg-6 d-flex gap-2">
          <h4>Orders Details</h4>
        </div>
        <div className="col-lg-2 d-flex gap-2">
          <button
            style={{
              backgroundColor: "#208b8c",
              color: "white",
              border: "none",

              borderRadius: "20px",
            }}
            onClick={() => {
              setViewNewOrder(true);
              setViewOutForDelivery(false);
              setViewDelivered(false);
            }}
          >
            New Orders
          </button>
        </div>
        <div className="col-lg-2 d-flex gap-2">
          <button
            style={{
              backgroundColor: "#208b8c",
              color: "white",
              border: "none",
              borderRadius: "20px",
            }}
            onClick={() => {
              setViewNewOrder(false);
              setViewOutForDelivery(true);
              setViewDelivered(false);
            }}
          >
            Out for Delivery
          </button>
        </div>
        <div className="col-lg-2 d-flex gap-2">
          <button
            style={{
              backgroundColor: "#208b8c",
              color: "white",
              border: "none",
              borderRadius: "20px",
            }}
            onClick={() => {
              setViewNewOrder(false);
              setViewOutForDelivery(false);
              setViewDelivered(true);
            }}
          >
            Delivered
          </button>
        </div>
      </div>

      <Container>
        <h3
          style={{
            display: ViewNewOrder ? "block" : "none",
            marginLeft: "2%",
            fontWeight: "600",
          }}
        >
          New Order
        </h3>
        <h3
          style={{
            display: ViewOutForDelivery ? "block" : "none",
            marginLeft: "2%",
            fontWeight: "600",
          }}
        >
          Out For Delivery
        </h3>
        <h3
          style={{
            display: ViewDelivered ? "block" : "none",
            marginLeft: "2%",
            fontWeight: "600",
          }}
        >
          Delivered
        </h3>

        <Table
          className="table "
          responsive
          style={{ width: "100%", display: ViewNewOrder ? "block" : "none" }}
        >
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold">Order id</th>
              <th className="fw-bold">Order Date</th>
              <th className="fw-bold">Admin Name</th>
              <th className="fw-bold">Admin Email</th>
              <th className="fw-bold">No.of products</th>
              <th className="fw-bold">Total Amount</th>
              <th className="fw-bold">Details</th>
              <th className="fw-bold">Action</th>
            </tr>
          </thead>

          <tbody>
            {OrderList?.filter(
              (data) => data.orderStatus == "PLACED_ORDER"
            )?.map((item) => {
              return (
                <>
                  <tr className="admin-table-row">
                    <td>{item?._id}</td>
                    <td>{moment(item?.createdAt)?.format("DD-MM-YYYY")}</td>
                    <td>{item.adminId?.name}</td>
                    <td> {item.adminId?.email}</td>
                    <td>{item.items?.length}</td>
                    <td>{item.totalAmount}</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faCircleInfo}
                        style={{ color: "#20958c", fontSize: "25px" }}
                        onClick={() => {
                          handleShow2();
                          setSelectedProduct(item);
                        }}
                      />
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <button
                          onClick={() => {
                            Vendor?.VendorType === "Lab" ? (
                              AcceptLabOrder(item)
                            ) : Vendor?.VendorType === "Pharmacy" ? (
                              AcceptOrder(item)
                            ) : (
                              <></>
                            );
                          }}
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            border: "none",
                            borderRadius: "20px",
                          }}
                        >
                          ACCEPT
                        </button>{" "}
                        /
                        <button
                          onClick={() => {
                            Vendor?.VendorType === "Lab" ? (
                              CANCELLEDLABORDER(item)
                            ) : Vendor?.VendorType === "Pharmacy" ? (
                              CANCELLEDORDER(item)
                            ) : (
                              <></>
                            );
                          }}
                          style={{
                            backgroundColor: "#d32728",
                            color: "white",
                            border: "none",
                            borderRadius: "20px",
                          }}
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>

        <Table
          className="table "
          responsive
          style={{
            width: "100%",
            display: ViewOutForDelivery ? "block" : "none",
          }}
        >
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold">Order id</th>
              <th className="fw-bold">Order Date</th>
              <th className="fw-bold">Admin Name</th>
              <th className="fw-bold">Admin Email</th>
              <th className="fw-bold">No.of products</th>
              <th className="fw-bold">Total Amount</th>
              <th className="fw-bold">Details</th>
              <th className="fw-bold">Action </th>
            </tr>
          </thead>
          <tbody>
            {OrderList?.filter(
              (data) => data.orderStatus == "OUT_FOR_DELIVERY"
            )?.map((item) => {
              return (
                <tr className="admin-table-row">
                  <td>{item?._id}</td>
                  <td>{moment(item?.createdAt)?.format("DD-MM-YYYY")}</td>
                  <td>{item.adminId?.username}</td>
                  <td> {item.adminId?.email}</td>
                  <td>{item.items?.length}</td>
                  <td>{item.totalAmount}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      style={{ color: "#20958c", fontSize: "25px" }}
                      onClick={() => {
                        handleShow2();
                        setSelectedProduct(item);
                      }}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        // DeliverOrder(item);
                        setShow(true);
                        setSelecteddata(item);
                      }}
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                        borderRadius: "20px",
                      }}
                    >
                      DELIVER
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <Table
          className="table "
          responsive
          style={{ width: "100%", display: ViewDelivered ? "block" : "none" }}
        >
          {" "}
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold">Order id</th>
              <th className="fw-bold">Order Date</th>
              <th className="fw-bold">Admin Name</th>
              <th className="fw-bold">Admin Email</th>
              <th className="fw-bold">No.of products</th>
              <th className="fw-bold">Total Amount</th>
              <th className="fw-bold">Details</th>
              <th className="fw-bold">Action </th>
            </tr>
          </thead>
          <tbody>
            {OrderList?.filter((data) => data.orderStatus == "DELIVERED")?.map(
              (item) => {
                return (
                  <tr className="admin-table-row">
                    <td>{item?._id}</td>
                    <td>{moment(item?.createdAt)?.format("DD-MM-YYYY")}</td>
                    <td>{item.adminId?.username}</td>
                    <td> {item.adminId?.email}</td>
                    <td>{item.items?.length}</td>
                    <td>{item.totalAmount}</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faCircleInfo}
                        style={{ color: "#20958c", fontSize: "25px" }}
                        onClick={() => {
                          handleShow2();
                          setSelectedProduct(item);
                        }}
                      />
                    </td>
                    <td>
                      {item?.orderPayment == "DONE" ? (
                        <button
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            border: "none",
                            borderRadius: "20px",
                          }}
                        >
                          DONE
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            Vendor?.VendorType === "Lab" ? (
                              MakeLabPayment(item)
                            ) : Vendor?.VendorType === "Pharmacy" ? (
                              MakePayment(item)
                            ) : (
                              <></>
                            );
                          }}
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            border: "none",
                            borderRadius: "20px",
                          }}
                        >
                          PENDING
                        </button>
                      )}
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </Table>
      </Container>

      {/* Delete Modal */}

      <Modal
        show={show}
        onHide={deleteBtnClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {/* <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Friend</div> */}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="text-center">
            {/* <h4 className="fw-bold text-dark mb-2">Are You Sure</h4>
            <p>You Will Delivered Order To Customer</p> */}
            {Payment ? (
              Payment == "DONE" ? (
                <BsFillPatchCheckFill
                  style={{ fontSize: "50px", color: "green" }}
                />
              ) : (
                <MdCancel style={{ fontSize: "50px", color: "red" }} />
              )
            ) : (
              <div className="row">
                <div className="col-lg-6">
                  <h4 className="fw-bold text-dark mb-2">Payment</h4>
                </div>
                <div className="col-lg-6">
                  <button
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      borderRadius: "20px",
                      marginRight: "10px",
                      width: "100px",
                    }}
                    onClick={() => setPayment("DONE")}
                  >
                    PAID
                  </button>
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "20px",
                      width: "100px",
                    }}
                    onClick={() => setPayment("PENDING")}
                  >
                    PENDING
                  </button>
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger">CANCEL</Button>
          <Button
            variant="success"
            onClick={() => {
              Vendor?.VendorType === "Lab" ? (
                DeliverLabOrder()
              ) : Vendor?.VendorType === "Pharmacy" ? (
                DeliverOrder()
              ) : (
                <></>
              );
            }}
          >
            DELIVER
          </Button>

          {/* <Button variant="success"><FontAwesomeIcon icon={faCheck} className='fs-5 me-2' />Save</Button> */}
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={show2} onHide={handleClose2}>
        <Modal.Header className="all-bg-green text-light">
          <Modal.Title>Product Details</Modal.Title>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body className="all-bg-green ">
          <div className="row" style={{ color: "white" }}>
            <h6
              style={{
                textAlign: "center",
                padding: "1% 0%",
                backgroundColor: "lightblue",
              }}
            >
              Product details
            </h6>

            <div className="col-lg-12 mt-3">
              <div
                className="Table-container"
                style={{ backgroundColor: "white", padding: "10px" }}
              >
                <Table className="table" responsive>
                  <thead>
                    <tr className="admin-table-head">
                      <th className="fw-bold">Product Image</th>
                      <th className="fw-bold">Product ID</th>
                      <th className="fw-bold">Product Name</th>
                      <th className="fw-bold">Vendor Price</th>
                      <th className="fw-bold">Admin Price</th>
                      <th className="fw-bold">Quantity</th>
                      <th className="fw-bold">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {SelectedProduct?.items?.map((item, index) => (
                      <tr className="admin-table-row" key={index}>
                        <td>
                          <img
                            src={`http://localhost:8521/VendorProduct/${item?.productId?.productImgs[0]}`}
                            style={{ width: "50%" }}
                          />
                        </td>
                        <td>{item?.productId?._id}</td>
                        <td>{item?.productId?.productName}</td>
                        <td>₹ {item?.VendorPrice}</td>
                        <td>₹ {item?.AdminPrice}</td>
                        <td>{item?.quantity}</td>
                        <td>₹ {item?.totalPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <p style={{ textAlign: "right" }}>
                Total Amount : {SelectedProduct?.totalAmount}
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
