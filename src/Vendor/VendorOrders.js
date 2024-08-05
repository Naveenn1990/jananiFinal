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
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { FaUserMd } from "react-icons/fa";

export const VendorOrders = () => {
  const navigate = useNavigate();
  const Vendor = JSON.parse(sessionStorage.getItem("VendorDetails"));

  const [show, setShow] = useState(false);

  const viewClose = () => setShow(false);
  const viewShow = () => setShow(true);

  const [replayFor, setreplayFor] = useState({});
  const [showReply, setShowReply] = useState(false);
  const handleCloseReply = () => setShowReply(false);
  const handleShowReply = (item) => {
    setShowReply(true);
    setreplayFor(item);
  };

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [InvoiceDoc, setInvoiceDoc] = useState();
  const [InvoiceData, setInvoiceData] = useState({});
  const [showInvoice, setShowInvoice] = useState(false);
  const handleCloseInvoice = () => setShowInvoice(false);
  const handleShowInvoice = (item) => {
    setShowInvoice(true);
    setInvoiceData(item);
  };

  const [SelectedProduct, setSelectedProduct] = useState({});

  const deleteBtnClose = () => {
    setShow(false);
    setPayment();
  };
  const deleteBtnShow = () => setShow2(true);

  const [ProductList, setProductList] = useState([]);
  const [Reason, setReason] = useState("");

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

  console.log("OrderList", OrderList);
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

  const CANCELLEDORDER = async () => {
    if (!Reason) {
      alert("Please enter reason for rejection");
    } else {
      try {
        {
          const config = {
            url: "/vendor/UpdateOrderInfo",
            method: "put",
            baseURL: "http://localhost:8521/api",
            headers: { "content-type": "application/json" },
            data: {
              orderid: replayFor?._id,
              vendorId: replayFor?.vendorId,
              orderStatus: "CANCELLED_ORDER",
              orderPayment: "PENDING",
              Reason: Reason,
            },
          };
          let res = await axios(config);
          if (res.status === 200) {
            console.log(res.data);
            console.log(res.data.success);
            alert("Order Cancelled");
            getOrderList();
            window.location.reload();
          }
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  const CANCELLEDLABORDER = async (data) => {
    if (!Reason) {
      alert("Please enter reason for rejection");
    } else {
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
              Reason: Reason,
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
  const UploadInvoice = async () => {
    if (!InvoiceDoc) {
      alert("Please select Invoice document");
    } else {
      try {
        {
          const config = {
            url: "/vendor/UploadInvoice",
            method: "post",
            baseURL: "http://localhost:8521/api",
            headers: { "content-type": "multipart/form-data" },
            data: {
              OrderId: InvoiceData?._id,
              Invoice: InvoiceDoc,
            },
          };
          let res = await axios(config);
          if (res.status === 200) {
            console.log(res.data);
            setInvoiceDoc();
            alert("Invoice uploaded sucessfully");
            getOrderList();
          }
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  const UploadLabInvoice = async () => {
    if (!InvoiceDoc) {
      alert("Please select Invoice document");
    } else {
      try {
        {
          const config = {
            url: "/admin/changeLabOrderValues",
            method: "put",
            baseURL: "http://localhost:8521/api",
            headers: { "content-type": "application/json" },
            data: {
              orderid: InvoiceData?._id,
              Invoice: InvoiceDoc,
            },
          };
          let res = await axios(config);
          if (res.status === 200) {
            console.log(res.data);
            alert("Invoice uploaded sucessfully");
            getLabOrderList();
          }
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  const [ViewNewOrder, setViewNewOrder] = useState(true);
  const [ViewOutForDelivery, setViewOutForDelivery] = useState(false);
  const [ViewDelivered, setViewDelivered] = useState(false);
  const [Selecteddata, setSelecteddata] = useState({});

  const [Payment, setPayment] = useState();

  const [data, setdata] = useState([]);

  useEffect(() => {
    if (ViewNewOrder && OrderList?.length > 0) {
      const xyz = OrderList?.filter(
        (data) => data.orderStatus == "PLACED_ORDER"
      );
      setdata(xyz);
    } else if (ViewOutForDelivery && OrderList?.length > 0) {
      const abc = OrderList?.filter(
        (data) => data.orderStatus == "OUT_FOR_DELIVERY"
      );
      setdata(abc);
    } else if (ViewDelivered && OrderList?.length > 0) {
      const srt = OrderList?.filter((data) => data.orderStatus == "DELIVERED");
      setdata(srt);
    }
  }, [ViewNewOrder, ViewOutForDelivery, ViewDelivered]);

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = data.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      settableFilter([...filterTable]);
    } else {
      setSearch(e.target.value);
      setdata([...data]);
    }
  };

  const exportType = "xls";

  const [fileName, setfileName] = useState("Products");

  const ExportToExcel = () => {
    if (fileName) {
      if (data.length != 0) {
        exportFromJSON({ data, fileName, exportType });
        // setfileName("");
      } else {
        alert("There is no data to export");
        // setfileName("");
      }
    } else {
      alert("Enter file name to export");
    }
  };

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

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "2%",
          }}
        >
          <input
            placeholder="Search as per order id"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
            onChange={handleFilter}
          />
          <button
            style={{
              backgroundColor: "#20958c",
              color: "white",
              border: "none",
              fontSize: "12px",
              borderRadius: "4px",
            }}
            onClick={ExportToExcel}
          >
            EXPORT <AiFillFileExcel />
          </button>
        </div>

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
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item) => {
                    return (
                      <>
                        <tr className="admin-table-row">
                          <td>{item?._id}</td>
                          <td>
                            {moment(item?.createdAt)?.format("DD-MM-YYYY")}
                          </td>
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
                                // onClick={() => {
                                //   Vendor?.VendorType === "Lab" ? (
                                //     CANCELLEDLABORDER(item)
                                //   ) : Vendor?.VendorType === "Pharmacy" ? (
                                //     CANCELLEDORDER(item)
                                //   ) : (
                                //     <></>
                                //   );
                                // }}
                                onClick={() => handleShowReply(item)}
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
                  })
              : OrderList?.filter((data) => data.orderStatus == "PLACED_ORDER")
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item) => {
                    return (
                      <>
                        <tr className="admin-table-row">
                          <td>{item?._id}</td>
                          <td>
                            {moment(item?.createdAt)?.format("DD-MM-YYYY")}
                          </td>
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
                                // onClick={() => {
                                //   Vendor?.VendorType === "Lab" ? (
                                //     CANCELLEDLABORDER(item)
                                //   ) : Vendor?.VendorType === "Pharmacy" ? (
                                //     CANCELLEDORDER(item)
                                //   ) : (
                                //     <></>
                                //   );
                                // }}
                                onClick={() => handleShowReply(item)}
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
            {search.length > 0
              ? tableFilter
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item) => {
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
                  })
              : OrderList?.filter(
                  (data) => data.orderStatus == "OUT_FOR_DELIVERY"
                )
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item) => {
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
            {search.length > 0
              ? tableFilter
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item) => {
                    return (
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
                          {item?.orderPayment == "DONE" ? (
                            item?.Invoice ? (
                              <div>
                                <img
                                  src={
                                    "https://cdn-icons-png.flaticon.com/128/202/202298.png"
                                  }
                                  alt="avathar"
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50px",
                                  }}
                                  onClick={() =>
                                    window.open(
                                      `http://localhost:8521/OrderAdmin/${item?.Invoice}`
                                    )
                                  }
                                />
                              </div>
                            ) : (
                              <button
                                style={{
                                  backgroundColor: "transparent",
                                  color: "#20958c",
                                  border: "none",
                                  width: "100%",
                                }}
                                onClick={() => handleShowInvoice(item)}
                              >
                                <FontAwesomeIcon
                                  icon={faUpload}
                                  type="file"
                                  style={{
                                    color: "#20958c",
                                    fontSize: "25px",
                                  }}
                                />{" "}
                                Invoice
                              </button>
                            )
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
                              Make Payment
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })
              : OrderList?.filter((data) => data.orderStatus == "DELIVERED")
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item) => {
                    return (
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
                          {item?.orderPayment == "DONE" ? (
                            item?.Invoice ? (
                              <div>
                                <img
                                  src={
                                    "https://cdn-icons-png.flaticon.com/128/202/202298.png"
                                  }
                                  alt="avathar"
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50px",
                                  }}
                                  onClick={() =>
                                    window.open(
                                      `http://localhost:8521/OrderAdmin/${item?.Invoice}`
                                    )
                                  }
                                />
                              </div>
                            ) : (
                              <button
                                style={{
                                  backgroundColor: "transparent",
                                  color: "#20958c",
                                  border: "none",
                                  width: "100%",
                                }}
                                onClick={() => handleShowInvoice(item)}
                              >
                                <FontAwesomeIcon
                                  icon={faUpload}
                                  type="file"
                                  style={{
                                    color: "#20958c",
                                    fontSize: "25px",
                                  }}
                                />{" "}
                                Invoice
                              </button>
                            )
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
                              Make Payment
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
          </tbody>
        </Table>
        <div style={{ display: "flex" }}>
          <p style={{ width: "100%", marginTop: "20px" }}>
            Total Count: {data?.length}
          </p>
          <ReactPaginate
            previousLabel={"Back"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
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

      <Modal size="lg" show={showInvoice} onHide={handleCloseInvoice}>
        <Modal.Header className="all-bg-green text-light">
          <Modal.Title>Upload Invoice</Modal.Title>
        </Modal.Header>
        <Modal.Body className="all-bg-green ">
          <div className="mt-3">
            <span
              style={{
                fontWeight: "500",
                color: "#ebebeb",
              }}
            >
              Upload Invoice:{" "}
            </span>
            {!InvoiceDoc ? (
              <>
                <input
                  type="file"
                  id="fileInput"
                  accept="application/pdf"
                  hidden
                  multiple
                  onChange={(e) => {
                    setInvoiceDoc(e.target.files[0]);
                  }}
                />
                <label for="fileInput">
                  <FontAwesomeIcon
                    icon={faUpload}
                    type="file"
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  />
                </label>
              </>
            ) : (
              <div className="mt-3">
                <img
                  src={"https://cdn-icons-png.flaticon.com/128/202/202298.png"}
                  alt="avathar"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50px",
                  }}
                  // onClick={() => handleShow4(InvoiceDoc)}
                />
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: "flex" }}>
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                marginRight: "20px",
                padding: "4px 10px",
                border: "1px solid white",
              }}
              onClick={handleCloseInvoice}
            >
              CANCEL
            </button>

            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                border: "1px solid white",
                padding: "4px 10px",
              }}
              onClick={() => {
                Vendor?.VendorType === "Lab" ? (
                  UploadLabInvoice()
                ) : Vendor?.VendorType === "Pharmacy" ? (
                  UploadInvoice()
                ) : (
                  <></>
                );
              }}
            >
              UPLOAD
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal show={showReply} onHide={handleCloseReply}>
        <Modal.Header closeButton>
          <Modal.Title>Reason for rejection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setReason(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseReply}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={() => {
              Vendor?.VendorType === "Lab" ? (
                CANCELLEDLABORDER()
              ) : Vendor?.VendorType === "Pharmacy" ? (
                CANCELLEDORDER()
              ) : (
                <></>
              );
            }}
          >
            Send reply
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
