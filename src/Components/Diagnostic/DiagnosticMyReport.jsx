import axios from "axios";
import moment from "moment";
import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {
  Button,
  Card,
  Container,
  FloatingLabel,
  Form,
  FormLabel,
  Modal,
  Table,
} from "react-bootstrap";

export default function DiagnosticMyReport() {
  const labuser = sessionStorage.getItem("labUser");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const hadleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const passwordClose = () => setShow1(false);
  const passwordShow = () => setShow1(true);
  const componentRef1 = useRef();
  const handleprint1 = useReactToPrint({
    content: () => componentRef1.current,
    documentTitle: "LabTestInvoice",
  });

  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "LabTestInvoice",
  });
  const [Labtests, setLabtests] = useState({});
  const [AllTestList, setAllTestList] = useState([]);
  const GetLabtestList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/user/getBookedHospitalLabTest"
      );
      setAllTestList(res.data.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetLabtestList();
  }, []);

  console.log("AllTestList", AllTestList);

  return (
    <div>
      <Container>
        <div>
          <Table className="mt-2" bordered>
            <thead>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                {/* <th>Test Status</th> */}
                <th>Name</th>
                <th>Phone No</th>
                <th>Email</th>
                <th>Test Date</th>
                {/* <th>Test List</th> */}
                <th>Total Amount</th>
                <th>Payment Status</th>
                {/* <th>Add Report</th> */}
                <th>Invoice</th>
                <th>View Report</th>
              </tr>
            </thead>
            <tbody>
              {AllTestList?.filter(
                (val) =>
                  val?.patientid?._id.toString() ===
                    JSON.parse(sessionStorage.getItem(labuser))?._id &&
                  val?.paymentStatus === "PAID"
              )?.map((item, i) => {
                return (
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    {/* <td>
                    {item?.Labtests?.length ===
                      item?.Labtests?.filter((val) => val.patientReportVal)
                        ?.length ? (
                        <b style={{ color: "green" }}>Reports Added</b>
                      ) : (
                        <p>Process</p>
                      )}
                    </td> */}

                    <td>{item?.patientname}</td>
                    <td>{item?.Phoneno}</td>
                    <td>{item?.email}</td>
                    <td>{moment(item?.testDate).format("DD/MM/YYYY")}</td>
                    {/* <td>
                      <Button
                      // onClick={() => {
                      //   handleShow2();
                      //   setLabtests(item);
                      // }}
                      >
                        View
                      </Button>
                    </td> */}
                    <td>
                      {item?.patientid?._id &&
                      item?.patientid?.haveInsurance ? (
                        <>
                          ₹
                          {item?.Labtests?.reduce(
                            (acc, curr) => acc + curr.priceInsurance,
                            0
                          )}
                        </>
                      ) : (
                        <>
                          ₹
                          {item?.Labtests?.reduce(
                            (acc, curr) => acc + curr.priceNonInsurance,
                            0
                          )}
                        </>
                      )}
                    </td>
                    <td>
                      {item?.paymentStatus === "UNPAID" ? (
                        <b style={{ color: "red" }}>UNPAID</b>
                      ) : (
                        <b style={{ color: "green" }}>PAID</b>
                      )}
                    </td>

                    {/* <td>
                      {item?.Labtests?.length ===
                      item?.Labtests?.filter((val) => val.patientReportVal)
                        ?.length ? (
                        <b style={{ color: "green" }}>Reports Added</b>
                      ) : (
                        <Button
                        //   onClick={() => {
                        //     handleShow5();
                        //     setLabtests(item);
                        //   }}
                        >
                          Add Report
                        </Button>
                      )}
                    </td> */}
                    <td>
                      {item?.Labtests?.length ===
                      item?.Labtests?.filter((val) => val.patientReportVal)
                        ?.length ? (
                        <Button
                          onClick={() => {
                            handleShow1();
                            setLabtests(item);
                          }}
                        >
                          Invoice
                        </Button>
                      ) : (
                        <b style={{ color: "red" }}>
                          Invoice are not generated
                        </b>
                      )}
                    </td>
                    <td>
                      {item?.Labtests?.length ===
                      item?.Labtests?.filter((val) => val.patientReportVal)
                        ?.length ? (
                        <Button
                          onClick={() => {
                            handleShow3();
                            setLabtests(item);
                          }}
                        >
                          View Report
                        </Button>
                      ) : (
                        <b style={{ color: "red" }}>
                          Reports are not generated
                        </b>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <Modal show={show1} onHide={handleClose1} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Invoice</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div ref={componentRef}>
              <div style={{ overflow: "hidden", overflowX: "scroll" }}>
                <div
                  className="invoice-rspns"
                  style={{
                    boxShadow: " 0px 8px 32px 0px rgba(19, 19, 20, 0.37)",
                    background: "#f5f6fa",
                    backdropFilter: "blur(4px)",
                    padding: "20px",
                  }}
                >
                  <div className="">
                    <div className="mb-5">
                      <img
                        style={{ width: "40px", height: "40px" }}
                        className="logo me-2 "
                        src="/img/logo.png"
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
                      <span>+91 9992129936</span>
                      <br />
                      <span>Singapur Layout, Banglore</span>
                      <br />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-5">
                    <div className="">
                      <span className="fw-bold text-dark">BILL TO:</span> <br />
                      <span>Bishwajit AD</span>
                      <br />
                      <span>+91 9912278317</span>
                      <br />
                      <span>Singapoor Layout, Banglore 524510</span>
                    </div>

                    <div className="">
                      <span className="fw-bold text-dark">Order Details:</span>
                      <br />
                      <p>
                        <span className="fw-bold">INVOICE DATE : </span>{" "}
                        08/19/2023
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
                        <th className="fw-bold">Test Name</th>
                        <th className="fw-bold">Price</th>
                        {/* <th className="fw-bold">Quantity</th>
                        <th className="fw-bold">Amount</th> */}
                      </tr>
                    </thead>

                    <tbody>
                      {Labtests?.Labtests?.filter(
                        (ele) => ele.patientReportVal
                      )?.map((item, i) => {
                        return (
                          <tr>
                            <td>{i + 1}</td>
                            <td>{item?.testName}</td>
                            <td>
                              {Labtests?.patientid?._id &&
                              Labtests?.patientid?.haveInsurance ? (
                                <>₹{item?.priceInsurance}</>
                              ) : (
                                <>₹{item?.priceNonInsurance}</>
                              )}
                            </td>
                            {/* <td>1</td>
                            <td>₹5025</td> */}
                          </tr>
                        );
                      })}
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
                          <td className="p-0 text-end">
                            {Labtests?.patientid?._id &&
                            Labtests?.patientid?.haveInsurance ? (
                              <>
                                ₹
                                {Labtests?.Labtests?.reduce(
                                  (acc, curr) => acc + curr.priceInsurance,
                                  0
                                )}
                              </>
                            ) : (
                              <>
                                ₹
                                {Labtests?.Labtests?.reduce(
                                  (acc, curr) => acc + curr.priceNonInsurance,
                                  0
                                )}
                              </>
                            )}
                          </td>
                        </tr>
                        {/* <tr>
                          <td className="fw-bold p-0 text-start">Discount :</td>
                          <td className="p-0 text-end">&#8377;20</td>
                        </tr>
                        <tr>
                          <td className="fw-bold p-0 text-start">Gst :</td>
                          <td className="p-0 text-end">&#8377;20</td>
                        </tr> */}
                        {/* <tr>
                          <td className="fw-bold p-0 text-start">
                            Grand Total:
                          </td>
                          <td className="p-0 text-end">&#8377;2020</td>
                        </tr> */}
                        <tr>
                          <td className="fw-bold p-0 text-start">Status :</td>
                          <td className="p-0 text-end">
                            <b
                              style={{
                                color:
                                  Labtests?.paymentStatus === "PAID"
                                    ? "green"
                                    : "red",
                              }}
                            >
                              {Labtests?.paymentStatus}
                            </b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <hr />
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button variant="primary" onClick={handleprint}>
              Print
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={show3} onHide={handleClose3} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Lab Report</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div ref={componentRef1}>
              <div style={{ overflow: "hidden", overflowX: "scroll" }}>
                <div
                  className="invoice-rspns"
                  style={{
                    boxShadow: " 0px 8px 32px 0px rgba(19, 19, 20, 0.37)",
                    background: "#f5f6fa",
                    backdropFilter: "blur(4px)",
                    padding: "20px",
                  }}
                >
                  <div className="">
                    <div className="mb-5">
                      <img
                        style={{ width: "40px", height: "40px" }}
                        className="logo me-2 "
                        src="/img/logo.png"
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

                  <div
                    className="row"
                    style={{ border: "2px solid", padding: "0px" }}
                  >
                    <div className="col-sm-4">
                      <div>
                        <b>Patient Name : </b> {Labtests?.patientname}
                      </div>
                      <div>
                        <b>Patient Age : </b> 45 years
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div>
                        <b>Patient ID : </b> HJKD567
                      </div>
                      <div>
                        <b>Gender : </b> Male
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div>
                        <b>Register Date : </b>
                        {moment(Labtests?.testDate).format("DD/MM/YYYY")}
                      </div>
                      {/* <div>
                        <b>Receiving Date : </b> 12/23/6767
                      </div> */}
                    </div>
                  </div>
                  <div className="row mt-2">
                    <Table bordered>
                      <thead>
                        <tr>
                          <th>Test Name</th>
                          <th>Result</th>
                          <th>Unit</th>
                          <th>Normal Range</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Labtests?.Labtests?.filter(
                          (ele) => ele.patientReportVal
                        )?.map((item, i) => {
                          return (
                            <tr>
                              <td>{item?.testName}</td>
                              <td>{item?.patientReportVal}</td>
                              <td>{item?.unit}</td>
                              <td>{item?.generalRefVal} </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                  <div>
                    <p style={{ textAlign: "center" }}>
                      ---------The end of Report---------
                    </p>
                  </div>
                  <hr />
                  <div className="text-center text-dark ">
                    <p>
                      Sales Invoice Generated By: Janani Hospital, Contact :
                      JananiHospital@gamil.com{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose3}>
              Close
            </Button>
            <Button variant="primary" onClick={handleprint1}>
              Print
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}
