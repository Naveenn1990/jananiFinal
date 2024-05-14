// import { faPrint } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";
// import { Button, Container } from "react-bootstrap";
// import { useLocation } from "react-router-dom";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";

// export function OPDMedicineInvoice() {
//   const location = useLocation();
//   let { patientCauseInfo, patientdetails } = location["state"];
//   console.log("sabval: ", patientCauseInfo, patientdetails);
//   // to print the pdf ----->
//   const createPDF = async () => {
//     // setRotate(360);
//     const pdf = new jsPDF("potrait", "pt", "a4");
//     const data = await html2canvas(document.querySelector("#pdf"));
//     const img = data.toDataURL("image/png");
//     const imgProperties = pdf.getImageProperties(img);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
//     pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("Invoice.pdf");
//   };
//   return (
//     <div>
//       <Container className="mt-3">
//         <div className="mb-3">
//           <Button
//             className="all-bg-green"
//             onClick={async () => await createPDF()}
//           >
//             <FontAwesomeIcon icon={faPrint} className="me-2" /> Print Invoice
//           </Button>
//         </div>

//         <div id="pdf" style={{ overflow: "hidden", overflowX: "scroll" }}>
//           <div
//             className="invoice-rspns"
//             style={{
//               //   background: "#f5f6fa",
//               backdropFilter: "blur(4px)",
//               padding: "60px",
//             }}
//           >
//             <div className="">
//               <div className="mb-5">
//                 <img
//                   style={{ width: "40px", height: "40px" }}
//                   className="logo me-2 "
//                   src="./img/logo.jpg"
//                   alt="Logo"
//                 />{" "}
//                 <br />
//                 <span
//                   className="fw-bold fs-4"
//                   style={{ color: "rgb(32 139 140)" }}
//                 >
//                   JANANI
//                 </span>
//                 <br />
//                 <span>JananiHospital@gmail.com</span>
//                 <br />
//                 <span>+1999212993</span>
//                 <br />
//                 <span>Singapur Layout, Banglore</span>
//                 <br />
//               </div>
//             </div>
//             <div className="d-flex justify-content-between mb-5">
//               <div className="">
//                 <span className="fw-bold text-dark">TO:</span> <br />
//                 <span>{patientdetails.Firstname}</span>
//                 <br />
//                 <span>{patientdetails.PhoneNumber}</span>
//               </div>

//               <div className="">
//                 <div>
//                   <span className="fw-bold text-dark">Service: </span>
//                   <span>
//                     {patientCauseInfo.causeServices},
//                     {patientCauseInfo.causeServiceCat}
//                   </span>
//                 </div>
//                 <div>
//                   <span className="fw-bold text-dark">Reason: </span>
//                   <span>{patientCauseInfo.CauseName}</span>
//                 </div>
//               </div>
//             </div>

//             <h6 className="fw-bold text-dark">BILL</h6>
//             <table className="table table-bordered border-dark">
//               <thead>
//                 <tr className="admin-table-head">
//                   <th className="fw-bold">SL No</th>
//                   <th className="fw-bold">Services</th>
//                   <th className="fw-bold">Quantity</th>
//                   <th className="fw-bold">Price</th>
//                   <th className="fw-bold">Amount Status</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {patientCauseInfo.causeBillDetails?.map((item, i) => {
//                   return (
//                     <tr>
//                       <td>{++i}</td>
//                       <td>{item.hospitalServices}</td>
//                       <td>{item.quantity}</td>
//                       <td>{item.hospitalServicesAmt}</td>
//                       <td>{item.amtStatus}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>

//             <div className=" d-flex justify-content-end">
//               <table
//                 className="table table-borderless"
//                 style={{ width: "200px" }}
//               >
//                 <tbody>
//                   <tr>
//                     <td className="fw-bold p-0 text-start">Total Paid: </td>
//                     <td className="p-0 text-end">
//                       {patientCauseInfo.paidAmt}₹
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="fw-bold p-0 text-start">
//                       Total Remaining:{" "}
//                     </td>
//                     <td className="p-0 text-end">
//                       {patientCauseInfo.remainingAmt}₹
//                     </td>
//                   </tr>
//                   {/* <tr>
//                       <td className="fw-bold p-0 text-start">Gst: </td>
//                       <td className="p-0 text-end">$20</td>
//                     </tr> */}
//                   <tr>
//                     <td className="fw-bold p-0 text-start">Discount: </td>
//                     <td className="p-0 text-end">
//                       {patientCauseInfo.adminFinalDiscount}₹
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="fw-bold p-0 text-start">Grand Total: </td>
//                     <td className="p-0 text-end">
//                       {patientCauseInfo.totalBillAmt}₹
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="fw-bold p-0 text-start">Status: </td>
//                     <td
//                       className="p-0 text-end"
//                       style={{
//                         color: `${
//                           patientCauseInfo.billStatus === "PENDING"
//                             ? "red"
//                             : "green"
//                         }`,
//                       }}
//                     >
//                       {patientCauseInfo.billStatus}
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             <div className="text-center text-dark ">
//               <p>Thanks For Shoping. </p>
//               <p>
//                 Sales Invoice Generated By: Janani Hospital, Contact :
//                 JananiHospital@gamil.com{" "}
//               </p>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }
