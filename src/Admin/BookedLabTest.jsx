import axios from "axios";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlineUserAdd } from "react-icons/ai";
import { MdDelete, MdEdit } from "react-icons/md";
import { useReactToPrint } from "react-to-print";

function BookedLabTest() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "LabTestInvoice",
  });

  const componentRef1 = useRef();
  const handleprint1 = useReactToPrint({
    content: () => componentRef1.current,
    documentTitle: "LabTestInvoice",
  });

  // Get All Lab Test Requests
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
    HospitallabList();
  }, []);

  const [HospitalLabList, setHospitalLabList] = useState([]);
  const HospitallabList = () => {
    axios
      .get("http://localhost:8521/api/admin/getHospitalLabTestlist")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          const data = response.data.HospitalLabTests;
          setHospitalLabList(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setHospitalLabList([]);
      });
  };
  console.log("AllTestList", AllTestList);

  const [Labtests, setLabtests] = useState({});
  const [Labreport, setLabreport] = useState("");
  const [TestId, setTestId] = useState("");
  const [TestDetails, setTestDetails] = useState({});

  // Handle selection change
  const handleTestChange = (e) => {
    const selectedId = e.target.value;
    setTestId(selectedId);

    // Find the details of the selected test
    const selectedTest = Labtests?.Labtests?.find(
      (item) => item._id === selectedId
    );
    setTestDetails(selectedTest || {});
  };

  const addLabReport = async () => {
    try {
      const config = {
        url: "/addlabreport",
        method: "put",
        baseURL: "http://localhost:8521/api/user",
        headers: { "content-type": "application/json" },
        data: {
          hospitallabtestid: Labtests?._id,
          labtestid: TestId,
          patientReportVal: Labreport,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose5();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

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
          <input
            placeholder="Search Hospital Lab"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AiOutlineUserAdd
              className="AddIcon1"
              onClick={() => setShow(true)}
            />
          </div>
        </div>
        <div style={{ overflow: "hidden", overflowX: "scroll" }}>
          <Table className="mt-2" bordered>
            <thead>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                <th>Test Status</th>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Phone No</th>
                <th>Email</th>
                <th>Test Date</th>
                <th>Test List</th>
                <th>Total Amount</th>
                <th>Payment Status</th>
                <th>Add Report</th>
                <th>Invoice</th>
                <th>View Report</th>
              </tr>
            </thead>
            <tbody>
              {AllTestList?.map((item, i) => {
                return (
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>
                      {item?.testCompletion === false ? (
                        <p>Process</p>
                      ) : (
                        <p>Successfully</p>
                      )}
                    </td>
                    <td>#4411</td>
                    <td>{item?.patientname}</td>
                    <td>{item?.Phoneno}</td>
                    <td>{item?.email}</td>
                    <td>{moment(item?.testDate).format("DD/MM/YYYY")}</td>
                    <td>
                      <Button
                        onClick={() => {
                          handleShow2();
                          setLabtests(item);
                        }}
                      >
                        View
                      </Button>
                    </td>
                    <td>2000/-</td>
                    <td>pending</td>

                    <td>
                      <Button
                        onClick={() => {
                          handleShow5();
                          setLabtests(item);
                        }}
                      >
                        Add Report
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          handleShow1();
                          setLabtests(item);
                        }}
                      >
                        Invoice
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          handleShow3();
                          setLabtests(item);
                        }}
                      >
                        View Report
                      </Button>
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
                        <th className="fw-bold">Quantity</th>
                        <th className="fw-bold">Amount</th>
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
                            <td>&#8377;5205</td>
                            <td>1</td>
                            <td>₹5025</td>
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
                          <td className="fw-bold p-0 text-start">
                            Grand Total:
                          </td>
                          <td className="p-0 text-end">&#8377;2020</td>
                        </tr>
                        <tr>
                          <td className="fw-bold p-0 text-start">Status :</td>
                          <td className="p-0 text-end">Paid</td>
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

        <Modal show={show2} onHide={handleClose2} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Test List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row p-3" style={{ backgroundColor: "white" }}>
              <Table bordered>
                <thead className="">
                  <tr>
                    <th>Sl.</th>
                    <th>Test Name</th>
                    <th>Test Price</th>
                    <th>Test Price(Insurance)</th>
                  </tr>
                </thead>
                <tbody>
                  {Labtests?.Labtests?.map((item, i) => {
                    return (
                      <tr>
                        <td>{i + 1}</td>
                        <td>{item?.testName}</td>
                        <td>{item?.priceNonInsurance}</td>
                        <td>{item?.priceInsurance}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
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
        <Modal show={show5} onHide={handleClose5} size="lg">
          <Modal.Header closeButton>
            <Modal.Title> Add Lab Report</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
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
                        {moment(Labtests?.testDate).format("DD-MM-YYYY")}
                      </div>
                      <div></div>
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
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Form.Select
                              className="vi_0"
                              onChange={handleTestChange}
                              value={TestId}
                            >
                              <option>Select Test</option>
                              {Labtests?.Labtests?.map((item) => {
                                return (
                                  <option value={item?._id}>
                                    {item?.testName}
                                  </option>
                                );
                              })}
                            </Form.Select>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="vi_0"
                              onChange={(e) => setLabreport(e.target.value)}
                            />
                          </td>
                          <td>{TestDetails?.unit}</td>
                          <td>{TestDetails?.generalRefVal} </td>
                          <td>
                            <Button onClick={addLabReport}>Submit</Button>{" "}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose5}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Register For Lab Test</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  border: "1px solid white",
                  fontWeight: "600",
                  marginRight: "20px",
                  padding: "4px 10px",
                }}
                onClick={() => setShow(false)}
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
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow(false);
                  alert("Hospital lab test created");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show4} onHide={handleClose4}>
          <Modal.Header>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <input
                  placeholder="Patient ID"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Name"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="SAC"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>

              <div className="col-lg-2" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    marginTop: "14%",
                    marginLeft: "25%",
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Choose
                </label>
              </div>
              <div className="col-lg-8" style={{ marginTop: "4%" }}>
                <input
                  placeholder="Test "
                  type="text"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>

              <div className="col-lg-2" style={{ marginTop: "4%" }}>
                <Button variant="danger">ADD</Button>
              </div>

              <Table
                className="table table-bordered border-light"
                responsive
                style={{ width: "100%", marginTop: "4%" }}
              >
                <thead>
                  <tr className="admin-table-head">
                    <th className="fw-bold" style={{ color: "#fff" }}>
                      #
                    </th>
                    <th
                      className="fw-bold"
                      style={{ color: "#fff", width: "280px" }}
                    >
                      Test
                    </th>
                    <th className="fw-bold" style={{ color: "#fff" }}>
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="admin-table-row">
                    <td>1.</td>

                    <td>AFB - SPUTUM(3Days)</td>
                    <td>
                      <MdDelete
                        style={{ color: "#e01f1f", cursor: "pointer" }}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>

              <div className="col-lg-12">
                <input
                  placeholder="TAT(Unit)"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  // border: "none",
                  borderRadius: "4px",
                  border: "1px solid white",
                  fontWeight: "600",
                  marginRight: "20px",
                  padding: "4px 10px",
                }}
                onClick={() => setShow4(false)}
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
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow(false);
                  alert("Hospital lab test created");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default BookedLabTest;