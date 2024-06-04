import React, { useEffect, useState } from "react";
import { Modal, Table, Form, Button } from "react-bootstrap";
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

export default function AdminBookProductCart() {
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

  useEffect(() => {
    adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
    if (!adminDetails) {
      return alert("Access Denied!!!");
    } else {
      getAdmincartproduct();
      getPatientList();
    }
  }, []);

  const [PatientType, setPatientType] = useState("");
  const [PatientId, setPatientId] = useState();

  const [PaymentMethod, setPaymentMethod] = useState("");

  const [CartProducts, setCartProducts] = useState([]);
  const [PatientList, setPatientList] = useState([]);
  const [selectedPateint, setselectedPateint] = useState([]);

  const [PatientName, setPatientName] = useState("");
  const [PatientContactNumber, setPatientContactNumber] = useState();
  const [PatientAddress, setPatientAddress] = useState("");

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  useEffect(() => {
    if (PatientId) {
      const patient = PatientList?.filter(
        (patient) =>
          patient?.PatientId === PatientId &&
          patient?.registrationType === PatientType
      );
      setselectedPateint(patient);
    }
  }, [PatientId]);

  const getAdmincartproduct = () => {
    axios
      .get("http://localhost:8521/api/admin/getAdmincartproduct")
      .then(function (response) {
        setCartProducts(response.data.getdata);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getPatientList = () => {
    axios
      .get("http://localhost:8521/api/user/getPatientList")
      .then(function (response) {
        setPatientList(response.data.UsersInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const incresequantity = async (item) => {
    try {
      const config = {
        url: "/admin/updateAdmincartproductquantity",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          id: item?._id,
          quantity: item?.quantity + 1,
          Totalamount:
            (item?.productPrice - (item?.productPrice * item?.discount) / 100) *
            (item?.quantity + 1),
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getAdmincartproduct();
      }
    } catch (error) {
      console.log("error", error);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const drecressquantity = async (item) => {
    if (item?.quantity <= 1) {
      alert("Minimum quanitity is 1");
    } else {
      try {
        const config = {
          url: "/admin/updateAdmincartproductquantity",
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            id: item?._id,
            quantity: item?.quantity - 1,
            Totalamount:
              (item?.productPrice -
                (item?.productPrice * item?.discount) / 100) *
              (item?.quantity - 1),
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          getAdmincartproduct();
        }
      } catch (error) {
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  const deletecart = async (item) => {
    try {
      const config = {
        url: "/admin/deleteAdmincart",
        method: "delete",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          id: item?._id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getAdmincartproduct();
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const addBooking = async () => {
    if (PatientType === "OPD" || PatientType === "IPD") {
      if (!PatientId) {
        alert("Please Enter Patient Id");
      } else {
        try {
          const config = {
            url: "/admin/AdminOrder",
            method: "post",
            baseURL: "http://localhost:8521/api",
            // headers: { "content-type": "multipart/form-data" },
            data: {
              PatientID: PatientId,
              PatientType: PatientType,
              PaymentMethod: PaymentMethod,
              PatientName:
                selectedPateint[0]?.Firstname +
                "" +
                selectedPateint[0]?.Lastname,
              PatientContactNumber: selectedPateint[0]?.PhoneNumber,
              PatientAddress:
                selectedPateint[0]?.Address1 +
                "," +
                selectedPateint[0]?.Zipcode,
              Products: CartProducts,
            },
          };
          let res = await axios(config);
          if (res.status === 200) {
            getAdmincartproduct();
            setselectedPateint([]);
            alert("Booking done successfully");
            window.location.reload();
          }
        } catch (error) {
          if (error.response) {
            alert(error.response.data.error);
          }
        }
      }
    } else if (PatientType === "General") {
      if (!PatientName || !PatientContactNumber || !PatientAddress) {
        alert("Please fill all the fields");
      } else {
        try {
          const config = {
            url: "/admin/AdminOrder",
            method: "post",
            baseURL: "http://localhost:8521/api",
            // headers: { "content-type": "multipart/form-data" },
            data: {
              PatientID: "",
              PatientType: PatientType,
              PaymentMethod: PaymentMethod,
              PatientName: PatientName,
              PatientContactNumber: PatientContactNumber,
              PatientAddress: PatientAddress,
              Products: CartProducts,
            },
          };
          console.log("config", config);
          let res = await axios(config);
          if (res.status === 200) {
            getAdmincartproduct();
            setselectedPateint([]);
            alert("Booking done successfully");
            window.location.reload();
          }
        } catch (error) {
          if (error.response) {
            alert(error.response.data.error);
          }
        }
      }
    }
  };

  console.log("CartProducts", CartProducts);
  // console.log("PatientType", PatientType);
  console.log("selectedPateint", selectedPateint);
  return (
    <div>
      <div style={{ padding: "1%" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Cart Products
        </h6>
        <div className="py-3 py-1">
          <Link to="/admin/AdminBookProduct">
            <Button variant="primary">Go back</Button>
          </Link>
        </div>

        <Table
          className="table "
          responsive
          style={{ width: "1000px", marginTop: "1%" }}
          bordered
        >
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Product Image</th>
              <th>Product Name</th>
              {/* <th>Category</th>
              <th>Subcategory</th> */}
              <th>Amount</th>
              <th>Discount</th>
              <th>Offer Amount</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {CartProducts?.map((details) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>
                    <img
                      src={`http://localhost:8521/VendorProduct/${details?.productId?.productImgs[0]}`}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </td>
                  <td>{details?.productName}</td>
                  {/* <td>{details?.categoryid?.categoryName}</td>
                  <td>{details?.subcategoryid?.subcategoryName}</td> */}
                  <td style={{ textAlign: "center" }}>
                    {details?.currencyFormat}
                    {details?.productPrice}
                  </td>
                  <td style={{ textAlign: "center" }}>{details?.discount}</td>
                  <td style={{ textAlign: "center" }}>
                    {details?.productPrice -
                      (details?.productPrice * details?.discount) / 100}
                  </td>

                  <td>
                    <div className="d-flex">
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                        onClick={(e) => drecressquantity(details)}
                      >
                        <RemoveIcon />
                      </button>
                      <Form.Group
                        className="mb-1"
                        controlId="exampleForm.ControlInput1"
                      >
                        <p
                          style={{
                            border: "1px solid black",
                            padding: "5px 10px",
                            margin: "5px",
                            marginTop: "-5px",
                          }}
                        >
                          {details?.quantity}
                        </p>
                      </Form.Group>
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                        onClick={() => incresequantity(details)}
                      >
                        <AddIcon />
                      </button>
                    </div>
                  </td>
                  <td>
                    {(
                      (details?.productPrice -
                        (details?.productPrice * details?.discount) / 100) *
                      details?.quantity
                    )?.toFixed(2)}
                    {/* {details?.Totalamount} */}
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
                      /
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                        onClick={() => deletecart(details)}
                      >
                        <i class="fas fa-trash" style={{ color: "red" }}></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>
            Total Amount :{" "}
            {CartProducts?.reduce((a, b) => a + b.Totalamount, 0)}
          </p>
          <button
            style={{
              border: "none",
              backgroundColor: "#20958c",
              color: "white",
            }}
            onClick={handleShow1}
          >
            Add Patient Details
          </button>
        </div>
        {/* information of specific product */}
        <Modal size="lg" show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Product Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div style={{ padding: "13px 13px" }}>
                <div
                  className="col-lg-12 col-sm-12 mt-2 "
                  style={{
                    border: "1px solid #ebebeb",
                    padding: "8px 20px",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  {/* <h5 style={{ color: "#808084" }}>Description: </h5> */}
                  <p
                    style={{
                      color: "rgb(69 69 72)",
                      fontWeight: "600",
                      marginBottom: "0px",
                    }}
                  >
                    {productInfo?.productName}
                  </p>
                  <div
                    style={{
                      color: "#4A4A4D",
                      fontWeight: "600",
                    }}
                  >
                    ₹
                    {(
                      productInfo?.productPrice -
                      (productInfo?.productPrice * productInfo?.discount) / 100
                    )?.toFixed(1)}
                    <span
                      style={{
                        color: "#4A4A4D",
                        fontWeight: "600",
                        textDecoration: "line-through",
                      }}
                    >
                      ₹{productInfo?.productPrice}
                    </span>
                    <span>{productInfo?.discount}% off</span>
                    <FontAwesomeIcon
                      icon={faTag}
                      shake
                      style={{ color: "#f24318", paddingLeft: "6px" }}
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Category: {productInfo?.categoryid?.categoryName}
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Subcategory: {productInfo?.subcategoryid?.subcategoryName}
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Stock: {productInfo?.productId?.stock}
                    </div>
                    {productInfo?.productType ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Product Type: {productInfo?.productId?.productType}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.productId?.productSize ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Product Size: {productInfo?.productId?.productSize}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.productId?.packSize ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Pack Size: {productInfo?.productId?.packSize}
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Manufacturing Date:{" "}
                      {moment(productInfo?.productId?.manufacturingDate).format(
                        "DD-MM-YYYY"
                      )}
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Expiry Date:{" "}
                      {moment(productInfo?.productId?.expiryDate).format(
                        "DD-MM-YYYY"
                      )}
                    </div>
                    {productInfo?.colour ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Colour: {productInfo?.productId?.colour}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.productId?.flavour ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Flavour: {productInfo?.productId?.flavour}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.productId?.fragrance ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Fragrance: {productInfo?.productId?.fragrance}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.productId?.variant ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Varient: {productInfo?.productId?.variant}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.productId?.brand ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Brand: {productInfo?.productId?.brand}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.productId?.countryOfOrigin ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Country Of Origin:{" "}
                        {productInfo?.productId?.countryOfOrigin}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.productId?.manufacturercompanyname ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Manufacturer Company:{" "}
                        {productInfo?.productId?.manufacturercompanyname}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.productId?.manufactureraddress ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Manufacturer Address:{" "}
                        {productInfo?.productId?.manufactureraddress}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="mt-3">
                    <Carousel responsive={responsive}>
                      {productInfo?.productId?.productImgs?.map((imgName) => {
                        return (
                          <div>
                            <img
                              src={`http://localhost:8521/VendorProduct/${imgName}`}
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

        <Modal size="lg" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Add patient details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6 col-sm-12 mt-2">
                <label style={{ color: "white" }}>Select patient type :</label>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <select
                  style={{
                    width: "94%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    // marginLeft: "20px",
                  }}
                  onChange={(e) => {
                    setPatientType(e.target.value);
                    setPatientId();
                  }}
                >
                  <option>Select</option>
                  <option value="OPD">OPD</option>
                  <option value="IPD">IPD</option>
                  <option value="General">General (Offline order)</option>
                </select>
              </div>
              {PatientType === "OPD" ? (
                <div className="row">
                  <div className="col-lg-6 col-sm-12 mt-2">
                    <label style={{ color: "white" }}>Patient Id :</label>
                  </div>
                  <div className="col-lg-6 col-sm-12 mt-2">
                    <input
                      placeholder="Patient Id"
                      value={PatientId}
                      style={{
                        width: "96%",
                        padding: "8px 25px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                        marginLeft: "15px",
                      }}
                      onChange={(event) => setPatientId(event.target.value)}
                    ></input>
                  </div>
                  {selectedPateint?.length > 0 && PatientId ? (
                    <div
                      className="row mt-4"
                      style={{
                        backgroundColor: "#ebebeb",
                        marginLeft: "auto",
                        // marginRight: "auto",
                      }}
                    >
                      <p
                        style={{
                          color: "#20958c",
                          textDecorationLine: "underline",
                        }}
                      >
                        Patient Details
                      </p>
                      <div className="col-lg-6 col-sm-12 mt-2">
                        <div className="row">
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>Name :</p>
                          </div>
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>
                              {selectedPateint[0]?.Firstname +
                                "" +
                                selectedPateint[0]?.Lastname}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12 mt-2">
                        <div className="row">
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>
                              {" "}
                              Contact Number :{" "}
                            </p>
                          </div>
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>
                              {selectedPateint[0]?.PhoneNumber}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-12 mt-2">
                        <div className="row">
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>Gender : </p>
                          </div>
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>
                              {selectedPateint[0]?.Gender}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12 mt-2">
                        <div className="row">
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>
                              {" "}
                              Marital Status :{" "}
                            </p>
                          </div>
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>
                              {selectedPateint[0]?.MaritalStatus}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12 mt-2">
                        <div className="row">
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}> DOB :</p>
                          </div>
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>
                              {selectedPateint[0]?.DOB}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12 mt-2">
                        <div className="row">
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>Address :</p>
                          </div>
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>
                              {selectedPateint[0]?.Address1},
                              {selectedPateint[0]?.Zipcode}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="col-lg-6 col-sm-12 mt-2">
                    <label style={{ color: "white" }}>
                      Select payment method :
                    </label>
                  </div>
                  <div className="col-lg-6 col-sm-12 mt-2">
                    <select
                      style={{
                        width: "98%",
                        padding: "8px 20px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                        marginLeft: "10px",
                      }}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <option>Select</option>
                      <option value="Online payment">Online payment</option>
                      <option value="Cash">Cash</option>
                    </select>
                  </div>
                </div>
              ) : PatientType === "IPD" ? (
                <div className="row">
                  <div className="col-lg-6 col-sm-12 mt-2">
                    <label style={{ color: "white" }}>Patient Id :</label>
                  </div>
                  <div className="col-lg-6 col-sm-12 mt-2">
                    <input
                      placeholder="Patient Id"
                      value={PatientId}
                      style={{
                        width: "96%",
                        padding: "8px 25px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                        marginLeft: "15px",
                      }}
                      onChange={(event) => setPatientId(event.target.value)}
                    ></input>
                  </div>
                  {selectedPateint?.length > 0 && PatientId ? (
                    <div
                      className="row mt-4"
                      style={{
                        backgroundColor: "#ebebeb",
                        marginLeft: "auto",
                        // marginRight: "auto",
                      }}
                    >
                      <p
                        style={{
                          color: "#20958c",
                          textDecorationLine: "underline",
                        }}
                      >
                        Patient Details
                      </p>
                      <div className="col-lg-6 col-sm-12 mt-2">
                        <div className="row">
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>Name :</p>
                          </div>
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>
                              {selectedPateint[0]?.Firstname +
                                "" +
                                selectedPateint[0]?.Lastname}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12 mt-2">
                        <div className="row">
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>
                              {" "}
                              Contact Number :{" "}
                            </p>
                          </div>
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>
                              {selectedPateint[0]?.PhoneNumber}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-12 mt-2">
                        <div className="row">
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>Gender : </p>
                          </div>
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>
                              {selectedPateint[0]?.Gender}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12 mt-2">
                        <div className="row">
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>
                              {" "}
                              Marital Status :{" "}
                            </p>
                          </div>
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>
                              {selectedPateint[0]?.MaritalStatus}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12 mt-2">
                        <div className="row">
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}> DOB :</p>
                          </div>
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>
                              {selectedPateint[0]?.DOB}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12 mt-2">
                        <div className="row">
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>Address :</p>
                          </div>
                          <div className="col-lg-6 col-sm-12 mt-2">
                            <p style={{ color: "#20958c" }}>
                              {selectedPateint[0]?.Address1},
                              {selectedPateint[0]?.Zipcode}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="col-lg-6 col-sm-12 mt-2">
                    <label style={{ color: "white" }}>
                      Select payment method :
                    </label>
                  </div>
                  <div className="col-lg-6 col-sm-12 mt-2">
                    <select
                      style={{
                        width: "98%",
                        padding: "8px 20px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                        marginLeft: "10px",
                      }}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <option>Select</option>
                      <option value="Online payment">Online payment</option>
                      <option value="Cash">Cash</option>
                      <option value="Pay later">Pay later</option>
                    </select>
                  </div>
                </div>
              ) : PatientType === "General" ? (
                <div className="row">
                  <p style={{ color: "white" }}>Patient Details</p>
                  <div className="col-lg-6 col-sm-12 mt-2">
                    <input
                      placeholder="Name"
                      value={PatientName}
                      style={{
                        width: "100%",
                        padding: "8px 25px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                      }}
                      onChange={(event) => setPatientName(event.target.value)}
                    ></input>
                  </div>
                  <div className="col-lg-6 col-sm-12 mt-2">
                    <input
                      placeholder="Contact Number"
                      value={PatientContactNumber}
                      style={{
                        width: "100%",
                        padding: "8px 25px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                      }}
                      onChange={(event) =>
                        setPatientContactNumber(event.target.value)
                      }
                    ></input>
                  </div>
                  <div className="mt-3">
                    <textarea
                      style={{
                        width: "100%",
                        padding: "8px 25px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                      }}
                      placeholder="Address"
                      value={PatientAddress}
                      onChange={(e) => setPatientAddress(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="col-lg-6 col-sm-12 mt-2">
                    <label style={{ color: "white" }}>
                      Select payment method :
                    </label>
                  </div>
                  <div className="col-lg-6 col-sm-12 mt-2">
                    <select
                      style={{
                        width: "100%",
                        padding: "8px 20px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                      }}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <option>Select</option>
                      <option value="Online payment">Online payment</option>
                      <option value="Cash">Cash</option>
                    </select>
                  </div>
                </div>
              ) : (
                ""
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
                onClick={() => {
                  setShow1(false);
                  setselectedPateint([]);
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
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={(e) => {
                  addBooking(e);
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
