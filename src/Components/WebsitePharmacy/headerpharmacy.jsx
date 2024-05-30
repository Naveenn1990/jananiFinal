import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoGooglePlus,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoPinterest,
  BiLogoYoutube,
} from "react-icons/bi";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
export const Headerpharmacy = React.memo(({ wishlistData, CartItemsList }) => {
  const pharmacyUser = sessionStorage.getItem("pharmacyUser");
  //   const [wishlistData, setWishlistData] = useState({});
  //   const getWishlist = async () => {
  //     try {
  //       let res = await axios.get(
  //         "http://localhost:8521/api/pharmacy/getWishlist/" +
  //           JSON.parse(pharmacyUser)?._id
  //       );
  //       if (res.status === 200) {
  //         setWishlistData(JSON.parse(res.data.msg));
  //       }
  //     } catch (error) {
  //       console.log(error.response);
  //       if (error.response) {
  //         // alert(error.response.data.error);
  //         setWishlistData({});
  //       }
  //     }
  //   };

  //   const [CartItemsList, setCartItemsList] = useState({});
  //   const getCartItems = async () => {
  //     try {
  //       const res = await axios.get(
  //         `http://localhost:8521/api/pharmacy/getCartList/${
  //           JSON.parse(pharmacyUser)?._id
  //         }`
  //       );
  //       if (res.status === 200) {
  //         setCartItemsList(res.data.cartlist);
  //       }
  //     } catch (error) {
  //       setCartItemsList({});
  //     }
  //   };

  console.log("asfasfalksfasf: ", wishlistData, CartItemsList);
  const logout =()=>{
    sessionStorage.removeItem("pharmacyUser")
    window.location.href = "/pharmacy";
  }
  return (
    <div>
      <Navbar
        className="text-light navbar-height all-bg-green"
        data-bs-theme="dark"
      >
        <Container>
          <Nav.Link href="/contact" className="lab-pharma-contact">
            Contact: 1-8700-900 Emergency: 1-8700-900
          </Nav.Link>

          <Nav className="ms-auto fs-5  ">
            <Nav.Link className="text-light nav-icons" href="#facebook">
              <BiLogoFacebook />
            </Nav.Link>
            <Nav.Link className="text-light nav-icons" href="#twitter">
              <BiLogoTwitter />
            </Nav.Link>
            <Nav.Link className="text-light nav-icons" href="#google">
              <BiLogoGooglePlus />
            </Nav.Link>
            <Nav.Link className="text-light nav-icons" href="#instagram">
              <BiLogoInstagram />
            </Nav.Link>
            <Nav.Link className="text-light nav-icons" href="#Linkedin">
              <BiLogoLinkedin />
            </Nav.Link>
            <Nav.Link className="text-light nav-icons" href="#pinterest">
              <BiLogoPinterest />
            </Nav.Link>
            <Nav.Link className="text-light nav-icons" href="#youtube">
              <BiLogoYoutube />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">
            <img className="logo " src="./img/logo.jpg" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className=" d-flex align-items-center gap-2 ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form className="d-flex search-width">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  style={{ width: "500px", borderRadius: "30px" }}
                  // style={{marginLeft:"-200px"}}
                  aria-label="Search"
                />
                <a href="#">
                  <Button className="red-btn-7 search-btn"></Button>
                </a>
              </Form>

              {JSON.parse(pharmacyUser) ? (
                <Dropdown>
                  <Dropdown.Toggle
                    className="all-bg-green"
                    variant="success"
                    id="dropdown-basic"
                  >
                    {JSON.parse(pharmacyUser)?.Firstname}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/pharmacytrackorder">
                      My Order
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="/pharmacymyprofile">Profile</Dropdown.Item> */}
                    <Dropdown.Item
                      onClick={() =>logout()}
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : null}
              {JSON.parse(pharmacyUser) ? null : (
                <>
                  <Nav.Link
                    className="pharmacy-navigation"
                    href="/loginpharmacy"
                  >
                    SIGN IN{" "}
                  </Nav.Link>
                  <Nav.Link
                    className="pharmacy-navigation"
                    href="/registerpharmacy"
                  >
                    SIGN UP
                  </Nav.Link>{" "}
                </>
              )}
              {JSON.parse(pharmacyUser) ? (
                <>
                  <Nav.Link
                    className="pharmacy-navigation-icon"
                    href="/pharmacycart"
                  >
                    <div
                      style={{
                        border: "1px solid red",
                        borderRadius: "25px",
                        width: "15px",
                        backgroundColor: "red",
                        height: "15px",

                        fontSize: "12px",
                        textAlign: "center",
                        position: "absolute",
                        top: "30px",
                        right: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: "white" }}>
                        {Object.keys(CartItemsList).length === 0
                          ? 0
                          : CartItemsList?.cartItems?.length > 9
                          ? "9+"
                          : CartItemsList?.cartItems?.length}
                      </span>
                    </div>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </Nav.Link>
                  <Nav.Link
                    className="pharmacy-navigation-icon"
                    href="/pharmacywishlist"
                  >
                    <div
                      style={{
                        border: "1px solid red",
                        borderRadius: "25px",
                        width: "15px",
                        backgroundColor: "red",
                        height: "15px",
                        color: "white",
                        fontSize: "12px",
                        textAlign: "center",
                        position: "absolute",
                        top: "32px",
                        right: "7px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: "white" }}>
                        {Object.keys(wishlistData).length === 0
                          ? 0
                          : wishlistData?.wishlistItems?.length > 9
                          ? "9+"
                          : wishlistData?.wishlistItems?.length}
                      </span>
                    </div>
                    <FontAwesomeIcon icon={faHeart} />
                  </Nav.Link>
                </>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
});
