  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import {
    Button,
    Container,
    Modal,
    Table,
  } from "react-bootstrap";
  import { BsFillPatchCheckFill } from "react-icons/bs";
  import { MdCancel } from "react-icons/md";
  
  import { useNavigate } from "react-router-dom";
function ProductStatus() {
    const Vendor = JSON.parse(sessionStorage.getItem("VendorDetails"));
  
    const [show, setShow] = useState(false);
    const viewClose = () => setShow(false);
    const viewShow = () => setShow(true);
    
    const [show2, setShow2] = useState(false);
  

  
    // const handleClose = () => setShow1(false);
    // const handleShow = () => setShow1(true);
  
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
          setOrderList(response.data.allVendorOrders);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  
    console.log(OrderList, "jnjnjnjnjnjnj");
  
    useEffect(() => {
      getProductList();
      getOrderList();
    }, []);
  
    const AcceptOrder = async (data) => {
      try {
        
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
        <h4>Accept Order Details List</h4>
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
            <th className="fw-bold" style={{}}>
              productName
            </th>
            <th className="fw-bold">productPrice</th>
            <th className="fw-bold">currencyFormat</th>
            <th className="fw-bold">productType</th>

            <th className="fw-bold">Quantity </th>
            <th className="fw-bold">Action </th>
          </tr>
        </thead>

        <tbody>
          {OrderList?.filter(
            (data) => data.orderStatus == "PLACED_ORDER"
          )?.map((item) => {
            return (
              <tr className="admin-table-row">
                <td>{item?.productName}</td>
                <td>{item?.productPrice}</td>
                <td>{item?.currencyFormat}</td>
                <td>{item?.productType}</td>

                <td>{item?.stock}</td>
                <td>
                  <button
                    onClick={() => {
                      AcceptOrder(item);
                    }}
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      borderRadius: "20px",
                    }}
                  >
                    ACCEPT
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
        style={{
          width: "100%",
          display: ViewOutForDelivery ? "block" : "none",
        }}
      >
        {" "}
        <thead>
          <tr className="admin-table-head">
            <th className="fw-bold">productName</th>
            <th className="fw-bold">productPrice</th>
            <th className="fw-bold">currencyFormat</th>
            <th className="fw-bold">productType</th>
            <th className="fw-bold">Quantity </th>
            <th className="fw-bold">Action </th>
          </tr>
        </thead>
        <tbody>
          {OrderList?.filter(
            (data) => data.orderStatus == "OUT_FOR_DELIVERY"
          )?.map((item) => {
            return (
              <tr className="admin-table-row">
                <td>{item?.productName}</td>
                <td>{item?.productPrice}</td>
                <td>{item?.currencyFormat}</td>
                <td>{item?.productType}</td>

                <td>{item?.stock}</td>
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
            <th className="fw-bold" style={{}}>
              productName
            </th>
            <th className="fw-bold">productPrice</th>
            <th className="fw-bold">currencyFormat</th>
            <th className="fw-bold">productType</th>

            <th className="fw-bold">Quantity </th>
            <th className="fw-bold">Payment </th>
          </tr>
        </thead>
        <tbody>
          {OrderList?.filter((data) => data.orderStatus == "DELIVERED")?.map(
            (item) => {
              return (
                <tr className="admin-table-row">
                  <td>{item?.productName}</td>
                  <td>{item?.productPrice}</td>
                  <td>{item?.currencyFormat}</td>
                  <td>{item?.productType}</td>

                  <td>{item?.stock}</td>
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
                          MakePayment(item);
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
        <Button variant="success" onClick={DeliverOrder}>
          DELIVER
        </Button>

        {/* <Button variant="success"><FontAwesomeIcon icon={faCheck} className='fs-5 me-2' />Save</Button> */}
      </Modal.Footer>
    </Modal>
  </div>
  )
}

export default ProductStatus