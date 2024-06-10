import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';

function LabProductInvoice() {

    const location = useLocation();
    const { val } = location.state || {};
    console.log("val",val);
  return (
    <div>
    <Container className="mt-3">
      {/* <div className="mb-3">
        <Button
          className="all-bg-green"
        >
          <FontAwesomeIcon icon={faPrint} className="me-2" /> Print Invoice
        </Button>
      </div> */}

      <div id="pdf" style={{ overflow: "hidden", overflowX: "scroll" }}>
        <div
          className="invoice-rspns"
          style={{
            //   background: "#f5f6fa",
            backdropFilter: "blur(4px)",
            padding: "25px",
          }}
        >
          <div className="">
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
              <span>JananiHospital@gmail.com</span>
              <br />
              <span>+91 9982129937</span>
              <br />
              <span>Singapur Layout, Banglore</span>
              <br />
            </div>
          </div>
          <div className="d-flex justify-content-between mb-5" 
          style={{
            border:"1px solid",
            borderRadius:"5px",
            padding:"5px"
            }}>
            <div className="">
              <span className="fw-bold text-dark">Vendor Details:</span> <br />
              <span><b>Name : </b>{`${val?.vendorId?.fname} ${val?.vendorId?.lname}`}</span>
              <span>
                {val?.vendorId?.address1} , 
                {val?.vendorId?.city} , 
                {val?.vendorId?.state}, 
                {val?.vendorId?.pincode}
                </span>
            </div>           
            <div className="">
              <span className="fw-bold text-dark">Vendor Details:</span> <br />
              <span><b>Name : </b>{`${val?.vendorId?.fname} ${val?.vendorId?.lname}`}</span>
              <span>
                {val?.vendorId?.address1} , 
                {val?.vendorId?.city} , 
                {val?.vendorId?.state}, 
                {val?.vendorId?.pincode}
                </span>
            </div>           
          </div>

          <h6 className="fw-bold text-dark">BILL</h6>
          <table className="table table-bordered border-dark">
            <thead>
              <tr className="admin-table-head">
                <th className="fw-bold">SL No</th>
                <th className="fw-bold">Services</th>
                <th className="fw-bold">Quantity</th>
                <th className="fw-bold">Price</th>
                <th className="fw-bold">Amount Status</th>
              </tr>
            </thead>

            <tbody>
              {/* {patientCauseInfo.causeBillDetails?.map((item, i) => {
                return (
                  <tr>
                    <td>{++i}</td>
                    <td>{item.hospitalServices}</td>
                    <td>{item.quantity}</td>
                    <td>{item.hospitalServicesAmt}</td>
                    <td>{item.amtStatus}</td>
                  </tr>
                );
              })} */}
            </tbody>
          </table>

          <div className=" d-flex justify-content-end">
            <table
              className="table table-borderless"
              style={{ width: "200px" }}
            >
              <tbody>
                <tr>
                  <td className="fw-bold p-0 text-start">Total Paid: </td>
                  <td className="p-0 text-end">
                    {/* {patientCauseInfo.paidAmt}₹ */}
                  </td>
                </tr>
                <tr>
                  <td className="fw-bold p-0 text-start">
                    Total Remaining:{" "}
                  </td>
                  <td className="p-0 text-end">
                    {/* {patientCauseInfo.remainingAmt}₹ */}
                  </td>
                </tr>
                {/* <tr>
                  <td className="fw-bold p-0 text-start">Gst: </td>
                  <td className="p-0 text-end">$20</td>
                </tr> */}
                <tr>
                  <td className="fw-bold p-0 text-start">Discount: </td>
                  <td className="p-0 text-end">
                    {/* {patientCauseInfo.adminFinalDiscount}₹ */}
                  </td>
                </tr>
                <tr>
                  <td className="fw-bold p-0 text-start">Grand Total: </td>
                  <td className="p-0 text-end">
                    {/* {patientCauseInfo.totalBillAmt}₹ */}
                  </td>
                </tr>
                {/* <tr>
                  <td className="fw-bold p-0 text-start">Status: </td>
                  <td
                    className="p-0 text-end"
                    style={{
                      color: `${
                        patientCauseInfo.billStatus === "PENDING"
                          ? "red"
                          : "green"
                      }`,
                    }}
                  >
                    {patientCauseInfo.billStatus}
                  </td>
                </tr> */}
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
  </div>
  )
}

export default LabProductInvoice