import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
// import useRazorpay from "react-razorpay";
import { Link, useNavigate } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import { Headerpharmacy } from "./headerpharmacy";
import { MdDelete } from "react-icons/md";

export const PharmacyCheckOut = () => {
  const pharmacyUser = JSON.parse(sessionStorage.getItem("pharmacyUser"));

  const [Address, setAddress] = useState(true);
  const [EditAddress, setEditAddress] = useState(false);
  const [PaymentType, setPaymentType] = useState();
  const navigate = useNavigate();
  // console.log(PaymentType,"payment type");

  const [SelectedAddress, setSelectedAddress] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [Name, setName] = useState();
  const [number, setnumber] = useState();
  const [email, setemail] = useState();
  const [houseno, sethouseno] = useState();
  const [landmark, setlandmark] = useState();
  const [state, setstate] = useState();
  const [city, setcity] = useState();
  const [Pincode, setPincode] = useState();

  const AddAddress = async () => {
    try {
      const config = {
        url: "/pharmacy/addAddress",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          patientid: pharmacyUser?._id,
          Name: Name,
          number: number,
          email: email,
          houseno: houseno,
          landmark: landmark,
          state: state,
          city: city,
          Pincode: Pincode,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data);
        console.log(res.data.success);
        alert("Address Added");
        getAllAddress();
        setShow(false);
        setName();
        setnumber();
        setemail();
        sethouseno();
        setlandmark();
        setstate();
        setcity();
        setPincode();
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [AddressList, setAddressList] = useState([]);
  const getAllAddress = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/pharmacy/addressList/" + pharmacyUser?._id
      );
      if (res.status === 200) {
        setAddressList(res.data.addressList);
      }
    } catch (error) {
      console.log(error);
      setAddressList(error.response.data.addressList);
    }
  };

  const [CartList, setCartList] = useState({});
  const getAllCartList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/pharmacy/getCartList/" + pharmacyUser?._id
      );
      if (res.status === 200) {
        setCartList(res.data.cartlist);
      }
    } catch (error) {
      console.log(error);
      setCartList({});
    }
  };
  const [wishlistData, setWishlistData] = useState({});
  const getWishlist = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8521/api/pharmacy/getWishlist/" + pharmacyUser?._id
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

  const updateAddress = async () => {
    try {
      const config = {
        url: "/pharmacy/updateAddress",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          patientid: pharmacyUser?._id,
          addressid: EditAddress._id,
          Name: Name,
          number: number,
          email: email,
          houseno: houseno,
          landmark: landmark,
          state: state,
          city: city,
          Pincode: Pincode,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getAllAddress();
        handleClose1();
        setName();
        setnumber();
        setemail();
        sethouseno();
        setlandmark();
        setstate();
        setcity();
        setPincode();
      }
    } catch (error) {
      console.log(error);
      return alert("Something went wrong!");
    }
  };

  const deleteAddress = async () => {
    try {
      const config = {
        url: "/pharmacy/deleteAddressFromPatient",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          patientid: pharmacyUser?._id,
          addressid: EditAddress._id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getAllAddress();
        handleClose2();
      }
    } catch (error) {
      console.log(error);
      return alert("Something went wrong!");
    }
  };

  useEffect(() => {
    getAllAddress();
    getAllCartList();
    getWishlist();
    getAllCartList();
  }, []);

  const deleteCart = async () => {
    try {
      const config = {
        url: "/pharmacy/makecartempty",
        method: "delete",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          patientid: pharmacyUser?._id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        // alert(res.data.success);
        getAllCartList();
      }
    } catch (error) {
      console.log(error);
      return alert("Something went wrong");
    }
  };

  const Placeorder = async () => {
    console.log("SelectedAddress: ", Object.keys(SelectedAddress).length);
    if (!Object.keys(SelectedAddress).length) {
      return alert("Please select the address");
    }
    try {
      const config = {
        url: "/pharmacy/placeorder",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          patientid: pharmacyUser?._id,
          zipcode: SelectedAddress?.Pincode,
          shippingAddress:
            SelectedAddress?.houseno +
            "," +
            SelectedAddress?.landmark +
            "," +
            SelectedAddress?.state,
          city: SelectedAddress?.city,
          name: SelectedAddress?.Name,
          number: SelectedAddress?.number,
          email: SelectedAddress?.email,
          paymentOption: PaymentType,
          orderStatus: "PLACED_ORDER",
          orderPayment: PaymentType === "PAY_ONLINE" ? "DONE" : "PENDING",
          orderedItems: CartList?.cartItems,
          totalOrderedItems: CartList?.totalItems,
          totalOrderedPrice: CartList?.totalAmt,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        deleteCart();
        alert("Order Placed");
        getAllAddress();
        setShow(false);
        navigate("/pharmacytrackorder");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <div>
      <Headerpharmacy wishlistData={wishlistData} CartItemsList={CartList} />
      <Container className="mt-4">
        <div className="row">
          <div className="col-lg-8">
            <div>
              <b>1) Address</b>
            </div>

            <>
              <>
                <div className="address">
                  <div className="address-01">
                    <div>Address List</div>
                    <div className="mb-2">
                      <Button className="all-bg-green" onClick={handleShow}>
                        Add Address +
                      </Button>
                    </div>
                    <div>
                      {AddressList?.address?.map((item) => {
                        return (
                          <div>
                            <div className="row">
                              <div className="col-md-1">
                                <input
                                  onClick={() => setSelectedAddress(item)}
                                  name="Address"
                                  type="radio"
                                />
                              </div>
                              <div className="col-md-10">
                                <span>
                                  <b>Name :</b> {item?.Name},{" "}
                                  <b>Contact Number :</b> {item?.number},{" "}
                                  <b>Email :</b> {item?.email}, <b>Address :</b>{" "}
                                  {item?.houseno}, {item?.landmark},{" "}
                                  {item?.state}, {item?.city}, <b>Pincode :</b>{" "}
                                  {item?.Pincode}
                                </span>
                              </div>

                              <div className="col-md-1">
                                <div className="d-flex">
                                  {" "}
                                  <FaEdit
                                    style={{
                                      color: "#208B8C",
                                      cursor: "pointer",
                                      fontSize: "20px",
                                    }}
                                    onClick={() => {
                                      setEditAddress(item);
                                      handleShow1();
                                    }}
                                  />{" "}
                                  <MdDelete
                                    style={{
                                      color: "red",
                                      cursor: "pointer",
                                      fontSize: "20px",
                                    }}
                                    onClick={() => {
                                      setEditAddress(item);
                                      handleShow2();
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    {/* <Button
                      className="all-bg-green"
                      onClick={() => {
                        setEditAddress(false);
                        setAddress(true);
                      }}
                    >
                      <TiDeleteOutline
                        style={{ color: "#fff", fontSize: "20px" }}
                      />
                    </Button> */}
                  </div>
                </div>
              </>
            </>

            <br />

            <br />

            <div>
              <b>3) Select Payment Method</b>
            </div>
            <div className="payment-method">
              <div>
                <input
                  type="radio"
                  name="payment"
                  onChange={() => setPaymentType("PAY_ONLINE")}
                />
                <label>&nbsp;&nbsp; Online payment</label>
              </div>
              <br />
              <div>
                <input
                  type="radio"
                  name="payment"
                  onChange={() => setPaymentType("PAY_ON_DELIVERY")}
                />
                <label>&nbsp;&nbsp; Cash On Delivery</label>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-3">
            <div className="table-rspn">
              <Table>
                <thead className="all-bg-green">
                  <tr style={{ textAlign: "center" }}>
                    <th className="text-light fw-bold">Sl.No</th>
                    <th className="text-light fw-bold">Image</th>
                    <th className="text-light fw-bold">Quantity</th>
                    <th className="text-light fw-bold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {CartList?.cartItems?.map((item, index) => {
                    return (
                      <tr style={{ textAlign: "center" }}>
                        <td>{index + 1}</td>
                        <td>
                          <Image
                            className="check-img"
                            src={`http://localhost:8521/AdminInventory/${item?.productid.productImgs[0]}`}
                          />
                        </td>
                        <td>{item?.quantity}</td>
                        <td> ₹{item?.totalPrice}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
            <div className="paymentsummery">
              <div>
                <b>Payment Summary</b>
              </div>
              {/* <div>
                                <b> Total MRP: </b> <span>₹6018.00</span>
                            </div> */}
              <hr />
              <div>
                <b>Total : </b> <span>₹{CartList?.totalAmt}</span>
              </div>
            </div>
            <br />
            <div className="text-center">
              <Button className="all-bg-green" onClick={() => Placeorder()}>
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Add Address */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="inputdesign"
                type="text"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control
                className="inputdesign"
                type="text"
                placeholder="Enter Your Mobile No."
                onChange={(e) => setnumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Id:</Form.Label>
              <Form.Control
                className="inputdesign"
                type="text"
                placeholder="Enter Your Email Id."
                onChange={(e) => setemail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>House No.</Form.Label>
              <Form.Control
                className="inputdesign"
                type="text"
                placeholder="Enter Your House No."
                onChange={(e) => sethouseno(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Landmark</Form.Label>
              <Form.Control
                className="inputdesign"
                type="text"
                placeholder="Enter Your landmark"
                onChange={(e) => setlandmark(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control
                className="inputdesign"
                type="text"
                placeholder="Enter Your State"
                onChange={(e) => setstate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                className="inputdesign"
                type="text"
                placeholder="Enter Your City"
                onChange={(e) => setcity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                className="inputdesign"
                type="text"
                placeholder="Enter Your Pincode"
                onChange={(e) => setPincode(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => AddAddress()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Update Address */}

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Update Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="inputdesign"
                type="text"
                placeholder={EditAddress.Name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control
                className="inputdesign"
                type="text"
                placeholder={EditAddress.number}
                onChange={(e) => setnumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Id:</Form.Label>
              <Form.Control
                className="inputdesign"
                type="text"
                placeholder={EditAddress.email}
                onChange={(e) => setemail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>House No.</Form.Label>
              <Form.Control
                className="inputdesign"
                type="text"
                placeholder={EditAddress.houseno}
                onChange={(e) => sethouseno(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Landmark</Form.Label>
              <Form.Control
                className="inputdesign"
                type="text"
                placeholder={EditAddress.landmark}
                onChange={(e) => setlandmark(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control
                className="inputdesign"
                type="text"
                placeholder={EditAddress.state}
                onChange={(e) => setstate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                className="inputdesign"
                type="text"
                placeholder={EditAddress.city}
                onChange={(e) => setcity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                className="inputdesign"
                type="text"
                placeholder={EditAddress.Pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={updateAddress}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Are you sure? you want to{" "}
            <span style={{ color: "red" }}>
              <b>delete</b>
            </span>{" "}
            the address.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteAddress}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
