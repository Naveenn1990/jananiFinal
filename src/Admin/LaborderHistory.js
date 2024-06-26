import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import moment from "moment/moment";
import { Link } from "react-router-dom";

export default function LaborderHistory() {
  let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
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

  const [orderedProductsList, setorderedProductsList] = useState([]);
  const [SelectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    listOfOrderedProducts();
  }, []);

  const listOfOrderedProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8521/api/admin/getAllLaborder/${adminDetails?._id}`
      );
      if (res.status === 200) {
        setorderedProductsList(res.data.allLaborders);
      }
    } catch (error) {
      console.log(error);
      setorderedProductsList([]);
    }
  };

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);

  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = orderedProductsList.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      settableFilter([...filterTable]);
    } else {
      setSearch(e.target.value);
      setorderedProductsList([...orderedProductsList]);
    }
  };

  const AddLabInventory = async (item) => {
    try {
      const config = {
        url: "/lab/addlabInventory",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          vendorProductId: item?.productId?._id,
          VendorPrice: item?.VendorPrice,
          AdminPrice: item?.AdminPrice,
          totalPrice: item?.totalPrice,
          quantity: item?.quantity,
        },
      };
      let res = await axios(config);
      if (res === 201) {
        alert("Product added to inventory");
        window.location.reload();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  console.log("orderedProductsList", orderedProductsList);
  console.log("SelectedProduct", SelectedProduct);

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
          <input
            placeholder="Search Orders"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
            onChange={handleFilter}
          />
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
              <AiOutlinePlusCircle
                className="AddIcon1"
                onClick={() => setShow(true)}
              />
            </div> */}
        </div>

        <Table
          className="table "
          responsive
          style={{ width: "1500px" }}
          bordered
        >
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Order id</th>
              <th>Order Date</th>
              <th>Vendor Name</th>
              <th>Vendor Id</th>
              <th>No.of products</th>
              <th>Total Amount</th>
              <th>Payment Detils</th>
              <th>Status</th>
              <th>Details</th>
              <th>invoice</th>
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? tableFilter?.map((val) => {
                  return (
                    <tr style={{ fontSize: "15px", textAlign: "center" }}>
                      <td>{val?._id}</td>
                      <td>{val?.productId?.productName}</td>
                      <td>{val.VendorPrice}</td>
                      <td> {val.AdminPrice}</td>
                      <td>{val.quantity}</td>
                      <td>{val.totalPrice}</td>
                      <td>
                        <div
                          style={{
                            fontWeight: "600",
                            color:
                              val.orderPayment === "PENDING" ? "red" : "green",
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
                      {/* <td>{val.totalPaidPrice}</td> */}
                      <td>
                        <Button>Invoice</Button>{" "}
                      </td>
                    </tr>
                  );
                })
              : orderedProductsList?.map((val) => {
                  return (
                    <tr style={{ fontSize: "15px", textAlign: "center" }}>
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
                              val.orderPayment === "PENDING" ? "red" : "green",
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
                        <Link
                          to="/admin/LabProductInvoice"
                          state={{ val: val }}
                        >
                          <Button>Invoice</Button>
                        </Link>
                      </td>
                      {/* <td>{val.totalPaidPrice}</td> */}
                    </tr>
                  );
                })}
          </tbody>
        </Table>
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
                alt=""
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
                <Table className="table" responsive bordered>
                  <thead>
                    <tr className="admin-table-head">
                      <th className="fw-bold">Product Image</th>
                      <th className="fw-bold">Product ID</th>
                      <th className="fw-bold">HSN No.</th>
                      <th className="fw-bold">Batch No.</th>
                      <th className="fw-bold">Product Name</th>
                      <th className="fw-bold">Vendor Price</th>
                      <th className="fw-bold">Admin Price</th>
                      <th className="fw-bold">Quantity</th>
                      <th className="fw-bold">Total</th>
                      <th className="fw-bold">Add Inventory</th>
                    </tr>
                  </thead>

                  <tbody>
                    {SelectedProduct?.items?.map((item, index) => (
                      <tr className="admin-table-row" key={index}>
                        <td>
                          <img
                            alt=""
                            src={`http://localhost:8521/VendorProduct/${item?.productId?.productImgs[0]}`}
                            style={{ width: "50%" }}
                          />
                        </td>
                        <td>{item?.productId?._id}</td>
                        <td>{item?.productId?.HSN}</td>
                        <td>{item?.productId?.Batch}</td>
                        <td>{item?.productId?.productName}</td>
                        <td>₹ {item?.VendorPrice}</td>
                        <td>₹ {item?.AdminPrice}</td>
                        <td>{item?.quantity}</td>
                        <td>₹ {item?.totalPrice}</td>
                        <td>
                          {SelectedProduct?.orderStatus === "DELIVERED" ? (
                            <Button onClick={() => AddLabInventory(item)}>
                              Add
                            </Button>
                          ) : (
                            <p>PENDING</p>
                          )}
                        </td>
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
    </div>
  );
}
