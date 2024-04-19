import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  FloatingLabel,
  Form,
  FormLabel,
  Modal,
} from "react-bootstrap";
import axios from "axios";
import { Headerpharmacy } from "./headerpharmacy";

export const PharmacyMyProfile = () => {
  let pharmacyUser = sessionStorage.getItem("pharmacyUser");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const hadleShow = () => setShow(true);

  const passwordClose = () => setShow1(false);
  const passwordShow = () => setShow1(true);
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
  useEffect(() => {
    if (!pharmacyUser) {
      return alert("Please login first!!!");
    } else {
      getWishlist();
      getCartItems();
    }
  }, [pharmacyUser]);
  return (
    <div>
      <Headerpharmacy
        wishlistData={wishlistData}
        CartItemsList={CartItemsList}
      />
      <Container className="mt-3">
        <div className="row justify-content-evenly">
          <Card
            style={{ boxShadow: "0px 8px 32px 0px rgba(19, 19, 20, 0.37)" }}
            className="col-lg-4 text-center mb-2"
          >
            <Card.Body>
              <img className="mb-2" src="./img/profile.png" alt="" />
              <p className="fw-bold text-dark">Shruti</p>
            </Card.Body>
          </Card>

          <Card
            style={{ boxShadow: "0px 8px 32px 0px rgba(19, 19, 20, 0.37)" }}
            className="col-lg-6"
          >
            <Card.Body>
              <div className="row">
                <div className="col-lg-6 mb-2">
                  <p className="fw-bold text-dark ">Full Name</p>
                  <p>Shruthi</p>
                </div>

                <div className="col-lg-6 mb-2">
                  <p className="fw-bold text-dark">Mobile Number</p>
                  <p>+215121545</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-2">
                  <p className="fw-bold text-dark">Email</p>
                  <p>Shruti@gmail.com</p>
                </div>

                {/* <div className='col-lg-6 mb-2'>
                                    <p className='fw-bold text-dark'>Address</p>
                                    <p>Singapoor Layout Banglore 512455</p>
                                </div> */}
              </div>

              <div className="d-flex gap-3">
                <Button onClick={hadleShow} className="all-bg-green">
                  Edit Profile
                </Button>
                <Button onClick={passwordShow} className="all-bg-green">
                  Change Password
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>

      {/* EDIT PROFILE */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#208b8c" }}>UPDATE PROFILE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormLabel className="fw-bold text-dark">Full Name*</FormLabel>
          <FloatingLabel
            className="mb-3"
            style={{ width: "100%" }}
            label="Name"
          >
            <Form.Control type="text" placeholder="Name" />
          </FloatingLabel>

          <FormLabel className="fw-bold text-dark">Email*</FormLabel>
          <FloatingLabel
            className="mb-3"
            style={{ width: "100%" }}
            controlId="floatingEmail"
            label="Email"
          >
            <Form.Control type="email" placeholder="Email" />
          </FloatingLabel>

          <FormLabel className="fw-bold text-dark">Phone Number*</FormLabel>
          <FloatingLabel
            className="mb-3"
            style={{ width: "100%" }}
            label="Number"
          >
            <Form.Control type="number" placeholder="Number" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="all-bg-green" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* CHANGE PASSWORD */}

      <Modal show={show1} onHide={passwordClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#208b8c" }}>UPDATE PROFILE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormLabel className="fw-bold text-dark">New Password*</FormLabel>
          <FloatingLabel
            className="mb-3"
            style={{ width: "100%" }}
            label="Enter Your Passoword"
          >
            <Form.Control type="password" placeholder="Enter Your Passoword" />
          </FloatingLabel>

          <FormLabel className="fw-bold text-dark">
            Confirm New Password*
          </FormLabel>
          <FloatingLabel
            className="mb-3"
            style={{ width: "100%" }}
            controlId="floatingEmail"
            label="Enter Your Passoword"
          >
            <Form.Control type="password" placeholder="Enter Your Passoword" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={passwordClose}>
            Close
          </Button>
          <Button className="all-bg-green" onClick={passwordClose}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
