import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Container, Table, Button, Modal, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTag } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import moment from "moment/moment";
import { useReactToPrint } from "react-to-print";
import { toWords } from "number-to-words";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";

export default function ProductCustomerOrder() {
  let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [placedOrder, setplacedOrder] = useState(true);
  const [Outfordeliveryorder, setOutfordeliveryorder] = useState(false);
  const [Cancelledorder, setCancelledorder] = useState(false);
  const [Deliveredorder, setDeliveredorder] = useState(false);
  const [currStatus, setcurrStatus] = useState("PLACED_ORDER");
  const [orderInfo, setorderInfo] = useState({});
  const [orders, setOrders] = useState([]);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "PharmacyOrderInvoice",
    // onAfterPrint: () => alert("print successfully"),
  });

  const orderList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/pharmacy/orderList"
      );
      if (res.status === 200) {
        setOrders(res.data.orderList);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("orders: ", orders);

  //   change order status...For Delivery
  const changeorderStatus = async (orderid, orderStatus) => {
    try {
      const config = {
        url: "/pharmacy/updateorder",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          orderid: orderid,
          orderStatus: orderStatus,
        },
      };
      const res = await axios(config);
      if (res.status === 200) {
        // setOrders(res.data.updateStatus);
        orderList();
        alert("Order Status changed successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
    if (!adminDetails) {
      return alert("Access Denied!!!");
    } else {
      orderList();
    }
  }, []);

  const [ViewNewOrder, setViewNewOrder] = useState(true);
  const [ViewOutForDelivery, setViewOutForDelivery] = useState(false);
  const [ViewDelivered, setViewDelivered] = useState(false);
  const [Selecteddata, setSelecteddata] = useState({});

  const [data, setdata] = useState([]);

  useEffect(() => {
    if (currStatus && orders?.length > 0) {
      const xyz = orders?.filter((data) => data.orderStatus == currStatus);
      setdata(xyz);
    }
  }, [currStatus]);

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

  const [fileName, setfileName] = useState("Customer-Order");

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

  const [Invoice, setInvoice] = useState({});
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
    char.toUpperCase()
  );

  const roundedTotalAmount = Math.round(totalamount);
  const roundOffAmount = (totalamount - roundedTotalAmount).toFixed(2);

  console.log("Invoice", Invoice);
  console.log("totalamount", totalamount);

  return (
    <div>
      <Container className="p-3">
        <div className="d-flex justify-content-between p-2">
          <h4 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
            Orders
          </h4>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              style={{
                color: placedOrder ? "#ffffff" : "#20958C",
                backgroundColor: placedOrder ? "#20958C" : "#ffffff",
                border: "1px solid #20958C",
              }}
              onClick={() => {
                setplacedOrder(true);
                setOutfordeliveryorder(false);
                setCancelledorder(false);
                setDeliveredorder(false);
                setcurrStatus("PLACED_ORDER");
              }}
            >
              Placed Order
            </Button>
            <Button
              style={{
                color: Outfordeliveryorder ? "#ffffff" : "#20958C",
                backgroundColor: Outfordeliveryorder ? "#20958C" : "#ffffff",
                border: "1px solid #20958C",
              }}
              onClick={() => {
                setplacedOrder(false);
                setOutfordeliveryorder(true);
                setCancelledorder(false);
                setDeliveredorder(false);
                setcurrStatus("OUT_FOR_DELIVERY");
              }}
            >
              Out For Delivery
            </Button>
            <Button
              style={{
                color: Cancelledorder ? "#ffffff" : "#20958C",
                backgroundColor: Cancelledorder ? "#20958C" : "#ffffff",
                border: "1px solid #20958C",
              }}
              onClick={() => {
                setplacedOrder(false);
                setOutfordeliveryorder(false);
                setCancelledorder(true);
                setDeliveredorder(false);
                setcurrStatus("CANCELLED_ORDER");
              }}
            >
              Cancelled Orders
            </Button>
            <Button
              style={{
                color: Deliveredorder ? "#ffffff" : "#20958C",
                backgroundColor: Deliveredorder ? "#20958C" : "#ffffff",
                border: "1px solid #20958C",
              }}
              onClick={() => {
                setplacedOrder(false);
                setOutfordeliveryorder(false);
                setCancelledorder(false);
                setDeliveredorder(true);
                setcurrStatus("DELIVERED");
              }}
            >
              Delivered
            </Button>
          </div>
        </div>
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
        <div>
          <Table responsive bordered>
            <thead>
              <th>OrderId</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Total Items</th>
              <th>Payment Option</th>
              <th>Order Status</th>
              <th>Payment Status</th>
              <th>Total Price</th>
              <th>Details</th>
              <th>Action</th>
            </thead>
            <tbody>
              {orders
                .filter((val) => val?.orderStatus === currStatus)
                .map((details) => {
                  return (
                    <tr key={details._id}>
                      <td>{details?._id}</td>
                      <td>
                        {details?.patientid?.Firstname}{" "}
                        {details?.patientid?.Lastname}
                      </td>
                      <td>
                        {details?.shippingAddress}, {details?.city},{" "}
                        {details?.zipcode}
                      </td>
                      <td>{details?.totalOrderedItems}</td>
                      <td>{details?.paymentOption}</td>
                      <td>{details?.orderStatus}</td>
                      <td
                        style={{
                          fontWeight: "600",
                          color:
                            details?.orderPayment === "PENDING"
                              ? "red"
                              : "green",
                        }}
                      >
                        {details?.orderPayment}
                      </td>
                      <td>{details?.totalOrderedPrice}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faCircleInfo}
                          style={{ color: "#20958c", fontSize: "25px" }}
                          onClick={() => {
                            setorderInfo(details);
                            handleShow1();
                          }}
                        />
                      </td>
                      <td>
                        {details?.orderStatus === "PLACED_ORDER" ? (
                          <div>
                            <Button
                              style={{
                                color: "#ffffff",
                                backgroundColor: "#20958C",
                                border: "1px solid #20958C",
                                marginTop: "2px",
                              }}
                              onClick={() => {
                                changeorderStatus(
                                  details?._id,
                                  "OUT_FOR_DELIVERY"
                                );
                              }}
                            >
                              Out For Delivery
                            </Button>
                            <Button
                              style={{
                                color: "#ffffff",
                                backgroundColor: "#FF0000",
                                border: "1px solid #FF0000",
                                marginTop: "2px",
                              }}
                              onClick={() => {
                                changeorderStatus(
                                  details?._id,
                                  "CANCELLED_ORDER"
                                );
                              }}
                            >
                              Cancel Order
                            </Button>
                          </div>
                        ) : details?.orderStatus === "OUT_FOR_DELIVERY" ? (
                          <Button
                            style={{
                              color: "#ffffff",
                              backgroundColor: "#00fc43",
                              border: "1px solid #00fc43",
                            }}
                            onClick={() => {
                              changeorderStatus(details?._id, "DELIVERED");
                            }}
                          >
                            Delivered
                          </Button>
                        ) : details?.orderStatus === "DELIVERED" ? (
                          <Button
                            onClick={() => {
                              handleShow2();
                              setInvoice(details);
                            }}
                          >
                            Invoice
                          </Button>
                        ) : null}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>

          <Modal size="lg" show={show1} onHide={handleClose1}>
            <Modal.Header>
              <Modal.Title>Order Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                {orderInfo?.orderedItems?.map((value) => {
                  return (
                    <div style={{ padding: "13px 13px", margin: "5px 5px" }}>
                      <div
                        className="col-lg-12 col-sm-12 mt-2 "
                        style={{
                          border: "1px solid #ebebeb",
                          padding: "8px 20px",
                          backgroundColor: "#ebebeb",
                        }}
                      >
                        <p
                          style={{
                            color: "rgb(69 69 72)",
                            fontWeight: "600",
                            marginBottom: "0px",
                          }}
                        >
                          {value?.productid?.productName}
                        </p>
                        <div
                          style={{
                            color: "#4A4A4D",
                            fontWeight: "600",
                          }}
                        >
                          ₹
                          {(
                            value?.productid?.productPrice -
                            (value?.productid?.productPrice *
                              value?.productid?.discount) /
                              100
                          ).toFixed(1)}{" "}
                          <span
                            style={{
                              color: "#4A4A4D",
                              fontWeight: "600",
                              textDecoration: "line-through",
                            }}
                          >
                            ₹{value?.productid?.productPrice}
                          </span>{" "}
                          <span>{value?.productid?.discount}% off</span>
                          <FontAwesomeIcon
                            icon={faTag}
                            shake
                            style={{ color: "#f24318", paddingLeft: "6px" }}
                          />
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-sm-12 mt-2 CZ">
                            Order status: {value?.orderDataStatus}
                          </div>
                          <div className="col-lg-6 col-sm-12 mt-2 CZ">
                            Quantity: {value?.quantity}
                          </div>
                          <div className="col-lg-6 col-sm-12 mt-2 CZ">
                            Stock: {value?.productid?.stock}
                          </div>
                          {value?.productid?.productType ? (
                            <div className="col-lg-6 col-sm-12 mt-2 CZ">
                              Product Type: {value?.productid?.productType}
                            </div>
                          ) : (
                            <></>
                          )}
                          {value?.productid?.productSize ? (
                            <div className="col-lg-6 col-sm-12 mt-2 CZ">
                              Product Size: {value?.productid?.productSize}
                            </div>
                          ) : (
                            <></>
                          )}
                          {value?.productid?.packSize ? (
                            <div className="col-lg-6 col-sm-12 mt-2 CZ">
                              Pack Size: {value?.productid?.packSize}
                            </div>
                          ) : (
                            <></>
                          )}
                          <div className="col-lg-6 col-sm-12 mt-2 CZ">
                            Manufacturing Date:{" "}
                            {moment(value?.productid?.manufacturingDate).format(
                              "DD-MM-YYYY"
                            )}
                          </div>
                          <div className="col-lg-6 col-sm-12 mt-2 CZ">
                            Expiry Date:{" "}
                            {moment(value?.productid?.expiryDate).format(
                              "DD-MM-YYYY"
                            )}
                          </div>
                          {value?.productid?.colour ? (
                            <div className="col-lg-6 col-sm-12 mt-2 CZ">
                              Colour: {value?.productid?.colour}
                            </div>
                          ) : (
                            <></>
                          )}
                          {value?.productid?.flavour ? (
                            <div className="col-lg-6 col-sm-12 mt-2 CZ">
                              Flavour: {value?.productid?.flavour}
                            </div>
                          ) : (
                            <></>
                          )}
                          {value?.productid?.fragrance ? (
                            <div className="col-lg-6 col-sm-12 mt-2 CZ">
                              Fragrance: {value?.productid?.fragrance}
                            </div>
                          ) : (
                            <></>
                          )}
                          {value?.productid?.variant ? (
                            <div className="col-lg-6 col-sm-12 mt-2 CZ">
                              Varient: {value?.productid?.variant}
                            </div>
                          ) : (
                            <></>
                          )}
                          {value?.productid?.brand ? (
                            <div className="col-lg-6 col-sm-12 mt-2 CZ">
                              Brand: {value?.productid?.brand}
                            </div>
                          ) : (
                            <></>
                          )}
                          {value?.productid?.countryOfOrigin ? (
                            <div className="col-lg-6 col-sm-12 mt-2 CZ">
                              Country Of Origin:{" "}
                              {value?.productid?.countryOfOrigin}
                            </div>
                          ) : (
                            <></>
                          )}
                          {value?.productid?.manufacturercompanyname ? (
                            <div className="col-lg-6 col-sm-12 mt-2 CZ">
                              Manufacturer Company:{" "}
                              {value?.productid?.manufacturercompanyname}
                            </div>
                          ) : (
                            <></>
                          )}
                          {value?.productid?.manufactureraddress ? (
                            <div className="col-lg-6 col-sm-12 mt-2 CZ">
                              Manufacturer Address:{" "}
                              {value?.productid?.manufactureraddress}
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="mt-3">
                          <Carousel responsive={responsive}>
                            {value?.productid?.productImgs?.map((imgName) => {
                              return (
                                <div>
                                  <img
                                    src={`http://localhost:8521/AdminInventory/${imgName}`}
                                    alt=""
                                    style={{
                                      width: "200px",
                                      height: "200px",
                                    }}
                                  />
                                </div>
                              );
                            })}
                          </Carousel>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
                  onClick={() => setShow1(false)}
                >
                  CANCEL
                </button>

                {/* <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={(e) => {
                  orderProducts(e);
                }}
              >
                SUBMIT
              </button> */}
              </div>
            </Modal.Footer>
          </Modal>
          {/* <Modal show={show2} onHide={handleClose2} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div ref={componentRef}>
                <div style={{ overflow: "hidden", overflowX: "scroll" }}>
                  <div
                    className="invoice-rspns"
                    style={{
                      boxShadow: " 0px 8px 32px 0px rgba(19, 19, 20, 0.37)",
                      background: "#f5f6fa",
                      backdropFilter: "blur(4px)",
                      padding: "50px",
                    }}
                  >
                    <div className="">
                      <div className="mb-5">
                        <img
                          style={{ width: "40px", height: "40px" }}
                          className="logo me-2 "
                          src="/img/logo.jpg"
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
                        <span>+91 9921299334</span>
                        <br />
                        <span>Singapur Layout, Banglore</span>
                        <br />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mb-5">
                      <div className="">
                        <span className="fw-bold text-dark">BILL TO:</span>{" "}
                        <br />
                        <span>{Invoice?.name}</span>
                        <br />
                        <span>{Invoice?.number}</span>
                        <br />
                        <span>
                          {Invoice?.shippingAddress},{Invoice?.city},
                          {Invoice?.zipcode}
                        </span>
                      </div>

                      <div className="">
                        <span className="fw-bold text-dark">
                          Order Details:
                        </span>
                        <br />
                        <p>
                          <span className="fw-bold">INVOICE DATE : </span>{" "}
                          {moment(Invoice?.updatedAt).format("DD/MM/YYYY")}
                        </p>
                        <p>
                          <span className="fw-bold">INVOICE NUMBER : </span>
                          {Invoice?._id}
                        </p>
                      </div>
                    </div>

                    <table className="table table-bordered border-dark">
                      <thead>
                        <tr className="admin-table-head">
                          <th className="fw-bold">SL No</th>
                          <th className="fw-bold">Item</th>
                          <th className="fw-bold">Price</th>
                          <th className="fw-bold">Quantity</th>
                          <th className="fw-bold">Amount</th>
                        </tr>
                      </thead>

                      <tbody>
                        {Invoice?.orderedItems?.map((item, i) => {
                          return (
                            <tr>
                              <td>{i + 1}</td>
                              <td>{item?.productid?.productName}</td>
                              <td>&#8377;{item?.productid?.productPrice}</td>
                              <td>{item?.quantity}</td>
                              <td>₹5025</td>
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
                            <td className="fw-bold p-0 text-start">
                              Total Quantity :
                            </td>
                            <td className="p-0 text-end">
                              {Invoice?.totalOrderedItems}
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-bold p-0 text-start">Total :</td>
                            <td className="p-0 text-end">
                              &#8377;{Invoice?.totalOrderedPrice}
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
          </Modal> */}
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
                          Patient Name: {Invoice?.patientid?.Firstname}&nbsp;
                          {Invoice?.patientid?.Lastname}
                        </p>
                        <p>
                          Patient Address:{Invoice?.patientid?.Address1},
                          {Invoice?.patientid?.Address2},
                          {Invoice?.patientid?.City} -{" "}
                          {Invoice?.patientid?.Zipcode}
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
                              Invoice No:{" "}
                              {Invoice?._id?.slice(-9)?.toUpperCase()}
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
                                <td>
                                  {item?.productid?.vendorIdProductId?.HSN}
                                </td>
                                <td>
                                  {item?.productid?.vendorIdProductId?.Batch}
                                </td>
                                <td>
                                  {moment(
                                    item?.productid?.vendorIdProductId
                                      ?.expiryDate
                                  ).format("DD/MM/YY")}
                                </td>
                                <td>{item?.quantity}</td>
                                <td>
                                  {item?.productid?.vendorIdProductId?.MRP}
                                </td>
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
                                <p>
                                  All disputes subject to jurisdication only.
                                </p>
                                <p>
                                  Prescribed Sales Tax declaration will be
                                  given.
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
        </div>
      </Container>
    </div>
  );
}
