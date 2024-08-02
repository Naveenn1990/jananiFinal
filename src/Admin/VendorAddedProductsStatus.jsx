import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTag } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Carousel from "react-multi-carousel";
import moment from "moment/moment";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import { AiFillFileExcel } from "react-icons/ai";
import { useReactToPrint } from "react-to-print";
import { toWords } from "number-to-words";

export default function VendorAddedProductsStatus() {
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
  useEffect(() => {
    adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
    if (!adminDetails) {
      return alert("Access Denied!!!");
    } else {
    }
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setdata] = useState([]);
  const [SelectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    listOfOrderedProducts();
  }, []);

  const listOfOrderedProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8521/api/vendor/getAllAdminOrders/${adminDetails?._id}`
      );
      if (res.status === 200) {
        setdata(res.data.allAdminOrders);
      }
    } catch (error) {
      console.log(error);
      setdata([]);
    }
  };

  const [Invoice, setInvoice] = useState({});
  const [showInvoice, setShowInvoice] = useState(false);
  const handleCloseInvoice = () => setShowInvoice(false);
  const handleShowInvoice = (item) => {
    setShowInvoice(true);
    setInvoice(item);
  };

  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "PharmacyOrderInvoice",
    // onAfterPrint: () => alert("print successfully"),
  });

  // console.log("orderedProductsList9090: ", orderedProductsList);

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data?.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = data?.filter((o) =>
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

  const [fileName, setfileName] = useState("Doctors");

  const ExportToExcel = () => {
    if (fileName) {
      if (data?.length != 0) {
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

  // console.log("orderedProductsList", orderedProductsList);
  // console.log("SelectedProduct", SelectedProduct);

  return (
    <div>
      <div style={{ padding: "1%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
            Order History
          </h6>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
            marginBottom: "2%",
          }}
        >
          <input
            placeholder="Search"
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
          style={{ width: "1500px" }}
          bordered
        >
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Sl No.</th>
              <th>Order id</th>
              <th>Order Date</th>
              <th>Vendor Name</th>
              <th>Vendor Id</th>
              <th>No.of products</th>
              <th>Total Amount</th>
              <th>Payment Detils</th>
              <th>Status</th>
              <th>Details</th>
              <th>Invoice</th>
              {/* <th>Contact</th>

              <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((val, index) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{index + 1}</td>
                        <td>{val?._id}</td>
                        <td>{moment(val?.createdAt)?.format("DD-MM-YYYY")}</td>
                        <td>
                          {val.vendorId?.fname}&nbsp;{val.vendorId?.lname}
                        </td>
                        <td> {val.vendorId?.vendorId}</td>
                        <td>{val.items?.length}</td>
                        <td>{val.totalAmount}</td>
                        <td>
                          <div
                            style={{
                              fontWeight: "600",
                              color:
                                val.orderPayment === "PENDING"
                                  ? "red"
                                  : "green",
                            }}
                          >
                            {val.orderPayment}
                          </div>
                        </td>
                        <td>{val.orderStatus}</td>
                        <td>
                          <FontAwesomeIcon
                            icon={faCircleInfo}
                            style={{ color: "#20958c", fontSize: "25px" }}
                            onClick={() => {
                              handleShow();
                              setSelectedProduct(val);
                            }}
                          />
                        </td>
                        <td>
                          <button
                            style={{
                              border: "none",
                              backgroundColor: "transparent",
                            }}
                            onClick={() => handleShowInvoice(val)}
                          >
                            <i
                              class="fas fa-eye"
                              style={{ color: "#20958c", fontSize: "22px" }}
                            ></i>
                          </button>
                        </td>
                        {/* <td>{val.totalPaidPrice}</td> */}
                      </tr>
                    );
                  })
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((val, index) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{index + 1}</td>
                        <td>{val?._id}</td>
                        <td>{moment(val?.createdAt)?.format("DD-MM-YYYY")}</td>
                        <td>
                          {val.vendorId?.fname}&nbsp;{val.vendorId?.lname}
                        </td>
                        <td> {val.vendorId?.vendorId}</td>
                        <td>{val.items?.length}</td>
                        <td>{val.totalAmount}</td>
                        <td>
                          <div
                            style={{
                              fontWeight: "600",
                              color:
                                val.orderPayment === "PENDING"
                                  ? "red"
                                  : "green",
                            }}
                          >
                            {val.orderPayment}
                          </div>
                        </td>
                        <td>{val.orderStatus}</td>
                        <td>
                          <FontAwesomeIcon
                            icon={faCircleInfo}
                            style={{ color: "#20958c", fontSize: "25px" }}
                            onClick={() => {
                              handleShow();
                              setSelectedProduct(val);
                            }}
                          />
                        </td>
                        <td>
                          {val.orderStatus === "DELIVERED" &&
                          val.orderPayment === "DONE" &&
                          val?.Invoice ? (
                            <button
                              style={{
                                border: "none",
                                backgroundColor: "transparent",
                              }}
                              onClick={() => handleShowInvoice(val)}
                            >
                              <i
                                class="fas fa-eye"
                                style={{ color: "#20958c", fontSize: "22px" }}
                              ></i>
                            </button>
                          ) : val.orderStatus === "CANCELLED_ORDER" ? (
                            "-"
                          ) : val.orderPayment === "PENDING" ? (
                            "Waiting for payment"
                          ) : (
                            "Waiting for Invoice"
                          )}
                        </td>
                        {/* <td>{val.totalPaidPrice}</td> */}
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
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header className="all-bg-green text-light">
          <Modal.Title>Product Details</Modal.Title>
          <Button variant="secondary" onClick={handleClose}>
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
              ABOUT VENDOR
            </h6>
            <div className="col-lg-4">
              <img
                src={`http://localhost:8521/Vendor/${SelectedProduct?.vendorId?.profilePic}`}
                style={{ width: "70%" }}
              />
            </div>
            <div className="col-lg-4">
              <div style={{ border: "1px solid lightgrey" }}>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>NAME</b> :{SelectedProduct?.vendorId?.fname}&nbsp;
                  {SelectedProduct?.vendorId?.lname}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>EmailID</b> : {SelectedProduct?.vendorId?.email}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Mobile</b> : {SelectedProduct?.vendorId?.phone}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>vendor Id</b> : {SelectedProduct?.vendorId?.vendorId}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Address</b> : {SelectedProduct?.vendorId?.address1},
                  {SelectedProduct?.vendorId?.city} -{" "}
                  {SelectedProduct?.vendorId?.pincode}
                </h6>
              </div>
            </div>
          </div>
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
        {/* <Modal.Footer>
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
              }}
              onClick={() => {
                setShow(false);
              }}
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
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow(false);
                alert("Doctor Added");
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer> */}
      </Modal>

      <Modal show={showInvoice} onHide={handleCloseInvoice} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Invoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="500px"
            src={`http://localhost:8521/OrderAdmin/${Invoice?.Invoice}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{
              backgroundColor: "#D9E7EA",
              padding: "5px",
              borderRadius: "20px",
            }}
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInvoice}>
            Close
          </Button>
          <Button variant="primary" onClick={handleprint}>
            Print
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
