import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import { Headerpharmacy } from "./headerpharmacy";
import axios from "axios";
export const PharmacyOrderInvoice = () => {
  const componentRef = useRef();
  let pharmacyUser = sessionStorage.getItem("pharmacyUser");
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "PharmacyOrderInvoice",
    // onAfterPrint: () => alert("print successfully"),
  });
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
    <>
      <Headerpharmacy
        wishlistData={wishlistData}
        CartItemsList={CartItemsList}
      />
      {/* <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4 mt-2'>Bill Information</h4> */}
      <Container className="mt-3">
        <div className="mb-3">
          <Button onClick={handleprint} className="all-bg-green">
            <FontAwesomeIcon icon={faPrint} className="me-2" /> Print Invoice
          </Button>
        </div>

        <div ref={componentRef}>
          <div style={{ overflow: "hidden", overflowX: "scroll" }}>
            <div
              className="invoice-rspns"
              style={{
                boxShadow: " 0px 8px 32px 0px rgba(19, 19, 20, 0.37)",
                background: "#f5f6fa",
                backdropFilter: "blur(4px)",
                // border:"1px solid black",
                // height: "100%",
                // width: "100%",
                padding: "50px",
              }}
            >
              <div className="">
                <div className="mb-5">
                  <img
                    style={{ width: "40px", height: "40px" }}
                    className="logo me-2 "
                    src="./img/logo.jpg"
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
                  <span>+1999212993</span>
                  <br />
                  <span>Singapur Layout, Banglore</span>
                  <br />
                </div>
              </div>
              <div className="d-flex justify-content-between mb-5">
                <div className="">
                  <span className="fw-bold text-dark">BILL TO:</span> <br />
                  <span>Ganesh Kalal</span>
                  <br />
                  <span>+1991227831</span>
                  <br />
                  <span>Singapoor Layout, Banglore 524510</span>
                </div>

                <div className="">
                  <span className="fw-bold text-dark">Order Details:</span>
                  <br />
                  <p>
                    <span className="fw-bold">INVOICE DATE : </span> 08/19/2023
                  </p>
                  <p>
                    <span className="fw-bold">INVOICE NUMBER : </span>
                    64e089023f50a41e01c92edf
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
                  <tr>
                    <td>1</td>
                    <td>Water Pick</td>
                    <td>&#8377;5205</td>
                    <td>1</td>
                    <td>₹5025</td>
                  </tr>
                </tbody>
              </table>

              <div className=" d-flex justify-content-end">
                <table
                  className="table table-borderless"
                  style={{ width: "200px" }}
                >
                  <tbody>
                    <tr>
                      <td className="fw-bold p-0 text-start">Total :</td>
                      <td className="p-0 text-end">&#8377;2020</td>
                    </tr>
                    <tr>
                      <td className="fw-bold p-0 text-start">Discount :</td>
                      <td className="p-0 text-end">&#8377;20</td>
                    </tr>
                    <tr>
                      <td className="fw-bold p-0 text-start">Gst :</td>
                      <td className="p-0 text-end">&#8377;20</td>
                    </tr>
                    <tr>
                      <td className="fw-bold p-0 text-start">Grand Total:</td>
                      <td className="p-0 text-end">&#8377;2020</td>
                    </tr>
                    <tr>
                      <td className="fw-bold p-0 text-start">Status :</td>
                      <td className="p-0 text-end">Paid</td>
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
      </Container>
    </>
  );
};
