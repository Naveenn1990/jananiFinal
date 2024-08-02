import React, { useEffect, useRef, useState } from "react";
import { Modal, Table, Form, Button, Row, Col } from "react-bootstrap";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faTag,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Carousel from "react-multi-carousel";
import moment from "moment/moment";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import { useReactToPrint } from "react-to-print";
import { toWords } from "number-to-words";

export default function Adminorder() {
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

  const [productInfo, setproductInfo] = useState([]);
  const [data, setdata] = useState([]);

  useEffect(() => {
    adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
    if (!adminDetails) {
      return alert("Access Denied!!!");
    } else {
      getAdminOrder();
    }
  }, []);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

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

  const getAdminOrder = () => {
    axios
      .get("http://localhost:8521/api/admin/getAdminOrder")
      .then(function (response) {
        setdata(response.data.allAdminOrders);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
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

  const [fileName, setfileName] = useState("Doctors");

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

  const totalamount = Invoice?.Products?.reduce(
    (a, item) => a + item?.Totalamount,
    0
  );

  const textword = totalamount ? toWords(totalamount) : "";

  const capitalizeWords = textword?.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );

  const roundedTotalAmount = Math.round(totalamount);
  const roundOffAmount = (totalamount - roundedTotalAmount).toFixed(2);

  console.log("Data", data);
  console.log("Invoice", Invoice);

  return (
    <div>
      <div style={{ padding: "1%" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Admin Order History
        </h6>

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
          style={{ width: "1000px", marginTop: "1%" }}
          bordered
        >
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Sl No.</th>
              <th>Order ID</th>
              <th>Patient Name</th>
              <th>Patient Contact Number</th>
              <th>Patient Type</th>
              <th>Pateint Address</th>
              <th>Payment Method</th>
              <th>Details</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((details, index) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{index + 1}</td>
                        <td>{details?._id}</td>
                        <td>{details?.PatientName}</td>
                        <td style={{ textAlign: "center" }}>
                          {details?.PatientContactNumber}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {details?.PatientType}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {details?.PatientAddress}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {details?.PaymentMethod}
                        </td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faCircleInfo}
                              style={{ color: "#20958c", fontSize: "25px" }}
                              onClick={() => {
                                setproductInfo(details);
                                handleShow2();
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((details, index) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{index + 1}</td>
                        <td>{details?._id}</td>
                        <td>{details?.PatientName}</td>
                        <td style={{ textAlign: "center" }}>
                          {details?.PatientContactNumber}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {details?.PatientType}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {details?.PatientAddress}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {details?.PaymentMethod}
                        </td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faCircleInfo}
                              style={{ color: "#20958c", fontSize: "25px" }}
                              onClick={() => {
                                setproductInfo(details);
                                handleShow2();
                              }}
                            />
                          </div>
                        </td>
                        <td>
                          <Button
                            onClick={() => {
                              handleShowInvoice(details);
                            }}
                          >
                            Invoice
                          </Button>
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

        {/* information of specific product */}
        <Modal
          show={show2}
          onHide={handleClose2}
          className="modalAdmin custom-modal"
        >
          <Modal.Header>
            <Modal.Title>Product Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                backgroundColor: "white",
                width: "100%",
                padding: "3%",
              }}
            >
              <Table
                className="table "
                responsive
                style={{ width: "1000px", marginTop: "1%" }}
                bordered
              >
                <thead>
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Quantity</th>
                    <th>Totalamount</th>
                  </tr>
                </thead>
                <tbody>
                  {productInfo?.Products?.map((details) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{details?.productName}</td>
                        <td style={{ textAlign: "center" }}>
                          {details?.productPrice}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {details?.discount}%
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {details?.quantity}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {details?.Totalamount}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  //   border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  marginRight: "20px",
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => setShow2(false)}
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

        <Modal
          show={showInvoice}
          onHide={handleCloseInvoice}
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
                        Patient Name: {Invoice?.PatientName}
                      </p>
                      <p>Patient Address:{Invoice?.PatientAddress}</p>
                      <p>
                        Dr Name:
                        {Invoice?.DoctorName ? Invoice?.DoctorName : "-"}
                      </p>
                      <p>
                        Dr Reg No.:{" "}
                        {Invoice?.DoctorID ? Invoice?.DoctorID : "-"}
                      </p>
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
                        {Invoice?.Products?.map((item, index) => {
                          return (
                            <tr style={{ backgroundColor: "white" }}>
                              <td>{index + 1}</td>
                              <td>{item?.VendorProduct?.productName}</td>
                              <td>{item?.VendorProduct?.packSize}</td>
                              <td>{item?.VendorProduct?.HSN}</td>
                              <td>{item?.VendorProduct?.Batch}</td>
                              <td>
                                {moment(item?.VendorProduct?.expiryDate).format(
                                  "DD/MM/YY"
                                )}
                              </td>
                              <td>{item?.quantity}</td>
                              <td>{item?.VendorProduct?.MRP}</td>
                              <td>{item?.discount}</td>
                              <td>{item?.VendorProduct?.SGST}</td>
                              <td>{item?.VendorProduct?.CGST}</td>
                              <td>{item?.Totalamount?.toFixed(2)}</td>
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
                              {Invoice?.Products?.reduce(
                                (a, item) => a + item?.Totalamount,
                                0
                              ).toFixed(2)}
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
            <Button variant="secondary" onClick={handleCloseInvoice}>
              Close
            </Button>
            <Button variant="primary" onClick={handleprint}>
              Print
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
