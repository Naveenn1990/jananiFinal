import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function VendorAdminInv() {
  const location = useLocation();
  let { ProductDetails } = location["state"];
  console.log("sabval: ", ProductDetails);
  // to print the pdf ----->
  const createPDF = async () => {
    // setRotate(360);
    const pdf = new jsPDF("potrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Invoice.pdf");
  };
  return (
    <Container className="mt-3">
      <div className="mb-3">
        <Button
          className="all-bg-green"
          onClick={async () => await createPDF()}
        >
          <FontAwesomeIcon icon={faPrint} className="me-2" /> Print Invoice
        </Button>
      </div>

      <div id="pdf" style={{ overflow: "hidden", overflowX: "scroll" }}>
        <div
          className="invoice-rspns"
          style={{
            //   background: "#f5f6fa",
            backdropFilter: "blur(4px)",
            padding: "60px",
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="mb-5">
              <img
                style={{ width: "40px", height: "40px" }}
                className="logo me-2 "
                src="../img/logo.jpg"
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
              <span className="fw-bold text-dark">FROM:</span> <br />
              <span>
                {ProductDetails?.vendorId?.fname}{" "}
                {ProductDetails?.vendorId?.lname}
              </span>
              <br />
              <span>{ProductDetails?.vendorId?.vendorId}</span>
              <br />
              <span>{ProductDetails?.vendorId?.phone}</span>
              <br />
              <br />
              <span>
                <b>Invoice No: {ProductDetails?.invoiceno}</b>
              </span>
              <br />
            </div>
            <div className="">
              <br />
              <br />
              <br />
              <span className="fw-bold text-dark">TO:</span> <br />
              <span>JananiHospital@gmail.com</span>
              <br />
              <span>+1999212993</span>
              <br />
              <span>Singapur Layout, Banglore</span>
            </div>
          </div>
          <div className="mb-3"></div>

          <h6 className="fw-bold text-dark">BILL</h6>
          <table className="table table-bordered border-dark">
            <thead>
              <tr className="admin-table-head text-center">
                <th className="fw-bold">SL No</th>
                <th className="fw-bold">Product Name</th>
                <th className="fw-bold">Vendor Price</th>
                <th className="fw-bold">Admin Price</th>
                <th className="fw-bold">Discount</th>
                <th className="fw-bold">Quantity</th>
                <th className="fw-bold">Total Price</th>
                {/* <th className="fw-bold">Amount Status</th> */}
              </tr>
            </thead>

            <tbody>
              <tr className="text-center">
                <td>1.</td>
                <td>{ProductDetails?.productId?.productName}</td>
                <td>{ProductDetails?.VendorPrice}</td>
                <td>{ProductDetails?.AdminPrice}</td>
                <td>{ProductDetails?.productId?.discount}%</td>
                <td>{ProductDetails?.quantity}</td>
                <td>{ProductDetails?.totalPrice}</td>
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
                  <td className="fw-bold p-0 text-start">Grand Total: </td>
                  <td className="p-0 text-end">
                    {ProductDetails?.totalPrice}₹
                  </td>
                </tr>

                <tr>
                  <td className="fw-bold p-0 text-start">Status: </td>
                  <td
                    className="p-0 text-end"
                    style={{
                      color: `${
                        ProductDetails.orderPayment === "DONE" ? "green" : "red"
                      }`,
                    }}
                  >
                    {ProductDetails.orderPayment}
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
    </Container>
  );
}
