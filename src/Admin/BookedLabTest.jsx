import axios from "axios";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Form,
  Modal,
  Table,
  FloatingLabel,
  Row,
} from "react-bootstrap";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { MdDelete, MdDeleteOutline, MdEdit } from "react-icons/md";
import { useReactToPrint } from "react-to-print";
import Select from "react-select";
import exportFromJSON from "export-from-json";
import { Pagination, Stack } from "@mui/material";
import ReactPaginate from "react-paginate";

function BookedLabTest() {
  // Select width
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      // Adjust the width here
      minHeight: "60px", // Adjust the height here
    }),
  };
  const [SpecificTestInfo, setSpecificTestInfo] = useState({});
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

  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  // ================================= Delete lab booking modal =================================
  const [show7, setShow7] = useState(false);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  // ================================= Update lab booking modal =================================
  const [show8, setShow8] = useState(false);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);

  // ================================= list of reports modal =================================
  const [show9, setShow9] = useState(false);
  const handleClose9 = () => setShow9(false);
  const handleShow9 = () => setShow9(true);

  // ================================= report details modal =================================
  const [show11, setShow11] = useState(false);
  const handleClose11 = () => setShow11(false);
  const handleShow11 = () => setShow11(true);

  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "LabTestInvoice",
  });

  const componentRef1 = useRef();
  const handleprint1 = useReactToPrint({
    content: () => componentRef1.current,
    documentTitle: "LabTestReport",
  });

  // Get All Lab Test Requests
  const [AllTestList, setAllTestList] = useState([]);
  const [AllTestList1, setAllTestList1] = useState([]);
  const GetLabtestList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/user/getBookedHospitalLabTest"
      );
      setAllTestList(res.data.list);
      setAllTestList1(res.data.list1);
      setFilteredCatList(res.data.list1);
    } catch (error) {
      console.log(error);
    }
  };

  const [patientlist, setpatientlist] = useState([]);

  const getPatientlist = () => {
    axios
      .get("http://localhost:8521/api/user/getPatientList")
      .then(function (response) {
        setpatientlist(response.data.UsersInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log("patientlist656555: ", patientlist);

  useEffect(() => {
    getPatientlist();
    GetLabtestList();
    HospitallabListFn();
  }, []);

  const [HospitalLabList, setHospitalLabList] = useState([]);
  const HospitallabListFn = () => {
    axios
      .get("http://localhost:8521/api/admin/getHospitalLabTestlist")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          const data = response.data.HospitalLabTests;
          data.forEach((item) => {
            item.label = item.testName;
            item.value = item.testName;
          });
          setHospitalLabList(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setHospitalLabList([]);
      });
  };
  console.log("HospitalLabListtttt", HospitalLabList);
  console.log("AllTestList", AllTestList);

  const [Labtests, setLabtests] = useState({});
  const [Labreport, setLabreport] = useState("");
  const [TestId, setTestId] = useState("");
  const [TestDetails, setTestDetails] = useState({});
  const [View, setView] = useState({});
  const [Bookingid, setBookingid] = useState("");

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

  // const updateBookedLabTests = async () => {
  //   try {
  //     const config = {
  //       url: "/updateBookingDetails/" + View?._id,
  //       method: "put",
  //       baseURL: "http://localhost:8521/api/user",
  //       headers: { "content-type": "application/json" },
  //     };
  //     let res = await axios(config);
  //     if (res.status === 200) {
  //       alert(res.data.success);
  //       GetLabtestList();
  //       handleClose8();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     if (error.response) {
  //       return alert(error.response.data.error);
  //     }
  //     return alert("Server is not responding!");
  //   }
  // };

  const deleteBookedLabTests = async () => {
    try {
      const config = {
        url: "/deleteLabBooking/" + View?._id,
        method: "delete",
        baseURL: "http://localhost:8521/api/user",
        headers: { "content-type": "application/json" },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        GetLabtestList();
        handleClose7();
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        return alert(error.response.data.error);
      }
      return alert("Server is not responding!");
    }
  };

  const makePaymentDone = async () => {
    try {
      const config = {
        url: "/updatePaymentStatus",
        method: "put",
        baseURL: "http://localhost:8521/api/user",
        headers: { "content-type": "application/json" },
        data: {
          bookingid: Bookingid,
          paymentStatus: "PAID",
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        GetLabtestList();
        handleClose6();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const [PatientType, setPatientType] = useState("");
  const [patientObj, setpatientObj] = useState("");
  const [patientname, setpatientname] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [email, setemail] = useState("");
  const [testDate, settestDate] = useState("");
  const [causeid, setcauseid] = useState("");
  // const [patientData, setpatientData] = useState({});
  const [Labtests1, setLabtests1] = useState([]);
  let [selectedOptions, setSelectedOptions] = useState([]);
  const hasSelectedOptions = Labtests1 && Labtests1.length > 0;

  const AddLabTest = (Labtests) => {
    setSelectedOptions(
      Labtests?.map((val) => {
        return {
          testid: val._id,
          testName: val.testName,
          priceNonInsurance: val.priceNonInsurance,
          priceInsurance: val.priceInsurance,
          unit: val.unit,
          generalRefVal: val.generalRefVal,
        };
      })
    );
    setLabtests1(Labtests);
  };
  const bookLabTest = async () => {
    let obj;
    if (PatientType === "IPD") {
      obj = {
        causeid: causeid,
        patientid: patientObj?._id,
        patientname: patientObj?.Firstname,
        Phoneno: patientObj?.PhoneNumber,
        email: patientObj?.Email,
        testDate: testDate,
        Labtests: selectedOptions,
        hospitallabRefferedBy: "SELF",
      };
    } else if (PatientType === "OPD") {
      obj = {
        patientid: patientObj?._id,
        patientname: patientname,
        Phoneno: Phoneno,
        email: email,
        testDate: testDate,
        Labtests: selectedOptions,
        hospitallabRefferedBy: "SELF",
      };
    } else {
      obj = {
        patientname: patientname,
        Phoneno: Phoneno,
        email: email,
        testDate: testDate,
        Labtests: selectedOptions,
        hospitallabRefferedBy: "SELF",
      };
    }
    try {
      const config = {
        url: "/user/bookHospitalLabTest",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: obj,
      };
      let res = await axios(config);
      if (res.status === 200 || res.status === 201) {
        alert(res.data.success);
        GetLabtestList();
        handleClose();
      }
    } catch (error) {
      console.log(error);
      return alert(error.response.data.error);
    }
  };

  // search
  const [search, setSearch] = useState("");
  const [FilteredCatList, setFilteredCatList] = useState([]);
  function handleFilter() {
    if (search != "") {
      // setSearch(search);
      const filterTable = AllTestList1.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(search.toLowerCase())
        )
      );
      setFilteredCatList([...filterTable]);
    } else {
      // setSearch(search);
      // vialList();
      setFilteredCatList([...AllTestList1]);
    }
  }

  useEffect(() => {
    handleFilter();
  }, [search]);

  //===================

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(FilteredCatList?.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const exportType = "xls";

  const [fileName, setfileName] = useState("Booked lab tests");

  const ExportToExcel = () => {
    if (fileName) {
      if (AllTestList1.length != 0) {
        exportFromJSON({
          data: JSON.parse(JSON.stringify(AllTestList1)),
          fileName,
          exportType,
        });
        // setfileName("");
      } else {
        alert("There is no data to export");
        // setfileName("");
      }
    } else {
      alert("Enter file name to export");
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            style={{
              backgroundColor: "#20958c",
              color: "white",
              border: "none",
              fontSize: "12px",
              borderRadius: "4px",
            }}
            onClick={ExportToExcel}
          >
            EXPORT <AiFillFileExcel />
          </button>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AiOutlineUserAdd className="AddIcon1" onClick={handleShow} />
          </div>
        </div>
        <div style={{ overflow: "hidden", overflowX: "scroll" }}>
          <Table className="mt-2" bordered>
            <thead>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                {/* <th>Test Status</th> */}
                <th>Patient ID</th>
                <th>Name</th>
                <th>Phone No</th>
                <th>Email</th>
                <th>Test Date</th>
                <th>Test List</th>
                <th>Total Amount</th>
                <th>Payment Status</th>
                {/* <th>Add Report</th> */}
                <th>Invoice</th>
                {/* <th>View Report</th> */}
                <th>Payment</th>
                <th>Reports</th>
                <th>Status</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {FilteredCatList?.slice(
                pagesVisited,
                pagesVisited + usersPerPage
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
                    <td>
                      {item?.patientid?.PatientId ? (
                        <>
                          {item?.patientid?.PatientId}(
                          {item?.patientid?.registrationType})
                        </>
                      ) : (
                        <>--/--</>
                      )}
                    </td>
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
                      ) : item?.paymentStatus === "PAID" ? (
                        <Button
                          onClick={() => {
                            handleShow5();
                            setLabtests(item);
                          }}
                        >
                          Add Report
                        </Button>
                      ) : (
                        <div style={{ color: "red" }}>
                          <b>Payment not done</b>
                        </div>
                      )}
                    </td> */}
                    <td>
                      {item?.paymentStatus === "PAID" ? (
                        <Button
                          onClick={() => {
                            handleShow1();
                            setLabtests(item);
                          }}
                        >
                          Invoice
                        </Button>
                      ) : (
                        <b style={{ color: "red" }}>Invoice is not generated</b>
                      )}
                    </td>
                    {/* <td>
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
                    </td> */}
                    <td>
                      {item?.paymentStatus === "PAID" ? (
                        <span style={{ color: "green" }}>
                          <b>PAID</b>
                        </span>
                      ) : (
                        <Button
                          onClick={() => {
                            setBookingid(item?._id);
                            handleShow6();
                          }}
                        >
                          Done
                        </Button>
                      )}
                    </td>
                    <td>
                      <b>{item?.labTestBookingStatus}</b>
                    </td>
                    <td>
                      {item?.labTestBookingStatus === "TECHNICIAN DONE" ? (
                        <Button
                          onClick={() => {
                            // handleShow3();
                            handleShow9();
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
                    {/* <td>
                      {item?.paymentStatus === "PAID" ||
                      item?.labTestBookingStatus !== "BOOKED" ? (
                        <></>
                      ) : (
                        <div className="d-flex justify-content-center">
                        
                          <MdDeleteOutline
                            style={{ color: "red", fontSize: "25px" }}
                            onClick={(e) => {
                              setView(item);
                              handleShow7();
                            }}
                          />
                        </div>
                      )}
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div style={{ float: "left" }} className="my-3 d-flex justify-end">
            <ReactPaginate
              previousLabel={"Back"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
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
                      {Labtests?.Labtests
                        // ?.filter(
                        //   (ele) => ele.patientReportVal
                        // )
                        ?.map((item, i) => {
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
                                    ? "GREEN"
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

        {/* <Modal show={show3} onHide={handleClose3} size="lg">
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
        </Modal> */}
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
                              {Labtests?.Labtests?.filter(
                                (val) => !val.patientReportVal
                              )?.map((item) => {
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

        <Modal
          show={show}
          onHide={handleClose}
          // backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "white", fontWeight: "bold" }}>
              Book Your Test
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <FloatingLabel
                className="col-md-6 p-2"
                controlId="floatingName"
                label="Type"
              >
                <Form.Select onChange={(e) => setPatientType(e.target.value)}>
                  <option>Choose Options</option>
                  <option value={"IPD"}>IPD</option>
                  <option value={"OPD"}>OPD</option>
                  {/* <option value={"GENERAL"}>General</option> */}
                </Form.Select>
              </FloatingLabel>

              {PatientType === "IPD" || PatientType === "OPD" ? (
                <FloatingLabel
                  className="col-md-6 p-2"
                  controlId="floatingName"
                  label="Patient List"
                >
                  <Form.Select
                    onChange={(e) => setpatientObj(JSON.parse(e.target.value))}
                  >
                    <option>Choose Options</option>
                    {patientlist
                      ?.filter((item) => item?.registrationType === PatientType)
                      ?.map((val) => {
                        return (
                          <option value={JSON.stringify(val)}>
                            {val?.Firstname} {val?.Lastname}
                          </option>
                        );
                      })}
                  </Form.Select>
                </FloatingLabel>
              ) : (
                <></>
              )}

              {PatientType === "IPD" ? (
                <FloatingLabel
                  className="col-md-6 p-2"
                  controlId="floatingName"
                  label="Cause"
                >
                  <Form.Select onChange={(e) => setcauseid(e.target.value)}>
                    <option>Choose Options</option>
                    {patientObj?.cause?.map((val) => {
                      return <option value={val?._id}>{val?.CauseName}</option>;
                    })}
                  </Form.Select>
                </FloatingLabel>
              ) : (
                <></>
              )}

              <FloatingLabel
                className="col-md-6 p-2"
                controlId="floatingName"
                label="Name"
              >
                {PatientType === "IPD" || PatientType === "OPD" ? (
                  <Form.Control
                    type="text"
                    value={patientObj?.Firstname}
                    placeholder="Name"
                    disabled
                    onChange={(e) => setpatientname(e.target.value)}
                  />
                ) : (
                  <Form.Control
                    type="text"
                    value={patientname}
                    placeholder="Name"
                    onChange={(e) => setpatientname(e.target.value)}
                  />
                )}
              </FloatingLabel>
              <FloatingLabel
                className="  col-md-6 p-2"
                controlId="floatingMobile"
                label="Mobile"
              >
                {PatientType === "IPD" || PatientType === "OPD" ? (
                  <Form.Control
                    type="number"
                    value={patientObj?.PhoneNumber}
                    placeholder="Mobile"
                    disabled
                    onChange={(e) => setPhoneno(e.target.value)}
                  />
                ) : (
                  <Form.Control
                    type="number"
                    value={Phoneno}
                    placeholder="Mobile"
                    onChange={(e) => setPhoneno(e.target.value)}
                  />
                )}
              </FloatingLabel>

              <FloatingLabel
                className="col-md-6 p-2"
                controlId="floatingEmail"
                label="Email"
              >
                {PatientType === "IPD" || PatientType === "OPD" ? (
                  <Form.Control
                    type="email"
                    value={patientObj?.Email}
                    placeholder="Email"
                    disabled
                    onChange={(e) => setemail(e.target.value)}
                  />
                ) : (
                  <Form.Control
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                )}
              </FloatingLabel>
              <FloatingLabel
                className="col-md-6 p-2"
                controlId="floatingName"
                label={hasSelectedOptions ? "" : "Select Lab Tests"}
              >
                <Select
                  isMulti
                  name="labTests"
                  options={HospitalLabList}
                  className="basic-multi-select"
                  classNamePrefix=""
                  value={Labtests1}
                  onChange={AddLabTest}
                  styles={customStyles}
                  placeholder=""
                />
              </FloatingLabel>
              <FloatingLabel
                className="col-md-6 p-2"
                controlId="floatingEmail"
                label=""
              >
                <Form.Control
                  type="date"
                  placeholder=""
                  value={testDate}
                  min={`${new Date().getFullYear()}-${String(
                    new Date().getMonth() + 1
                  ).padStart(2, "0")}-${String(new Date().getDate()).padStart(
                    2,
                    "0"
                  )}`}
                  onChange={(e) => settestDate(e.target.value)}
                />
              </FloatingLabel>
            </Row>

            {/* <Button
              onHide={handleClose}
              className="col-md-12"
              style={{ backgroundColor: "white", color: "#20958C" }}
            >
              Submit
            </Button> */}
          </Modal.Body>
          <Modal.Footer>
            <button
              style={{
                backgroundColor: "gray",
                color: "white",
                width: "90px",
                height: "40px",
                border: "0px",
                borderRadius: "10px",
              }}
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              style={{
                backgroundColor: "#06fa06",
                color: "white",
                width: "90px",
                height: "40px",
                border: "0px",
                borderRadius: "10px",
              }}
              onClick={() => {
                bookLabTest();
              }}
            >
              Submit
            </button>
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

        <Modal size="md" show={show6} onHide={handleClose6}>
          <Modal.Header>
            <Modal.Title>Payment status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <b>
              Are you sure! Payment is{" "}
              <span style={{ color: "green" }}>Done</span>
            </b>
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
                onClick={() => handleClose6()}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  makePaymentDone();
                }}
              >
                DONE
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show7} onHide={handleClose7}>
          <Modal.Header>
            <Modal.Title>Delete Booking</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <b>
              Are you sure! You want to{" "}
              <span style={{ color: "red" }}>Delete</span> the booking?
            </b>
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
                onClick={() => handleClose7()}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  deleteBookedLabTests();
                }}
              >
                DELETE
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        {/* <Modal size="lg" show={show8} onHide={handleClose8}>
          <Modal.Header>
            <Modal.Title>Update Booking Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <FloatingLabel
                className="col-md-6 p-2"
                controlId="floatingName"
                label="Type"
              >
                <Form.Select onChange={(e) => setPatientType(e.target.value)}>
                  <option>Choose Options</option>
                  <option value={"IPD"}>IPD</option>
                  <option value={"OPD"}>OPD</option>
                  <option value={"GENERAL"}>General</option>
                </Form.Select>
              </FloatingLabel>

              {PatientType === "IPD" || PatientType === "OPD" ? (
                <FloatingLabel
                  className="col-md-6 p-2"
                  controlId="floatingName"
                  label="Patient List"
                >
                  <Form.Select
                    onChange={(e) => setpatientObj(JSON.parse(e.target.value))}
                  >
                    <option>Choose Options</option>
                    {patientlist
                      ?.filter((item) => item?.registrationType === PatientType)
                      ?.map((val) => {
                        return (
                          <option value={JSON.stringify(val)}>
                            {val?.Firstname} {val?.Lastname}
                          </option>
                        );
                      })}
                  </Form.Select>
                </FloatingLabel>
              ) : (
                <></>
              )}

              {PatientType === "IPD" ? (
                <FloatingLabel
                  className="col-md-6 p-2"
                  controlId="floatingName"
                  label="Cause"
                >
                  <Form.Select onChange={(e) => setcauseid(e.target.value)}>
                    <option>Choose Options</option>
                    {patientObj?.cause?.map((val) => {
                      return <option value={val?._id}>{val?.CauseName}</option>;
                    })}
                  </Form.Select>
                </FloatingLabel>
              ) : (
                <></>
              )}

              <FloatingLabel
                className="col-md-6 p-2"
                controlId="floatingName"
                label="Name"
              >
                {PatientType === "IPD" || PatientType === "OPD" ? (
                  <Form.Control
                    type="text"
                    value={patientObj?.Firstname}
                    placeholder="Name"
                    disabled
                    onChange={(e) => setpatientname(e.target.value)}
                  />
                ) : (
                  <Form.Control
                    type="text"
                    value={patientname}
                    placeholder="Name"
                    onChange={(e) => setpatientname(e.target.value)}
                  />
                )}
              </FloatingLabel>
              <FloatingLabel
                className="  col-md-6 p-2"
                controlId="floatingMobile"
                label="Mobile"
              >
                {PatientType === "IPD" || PatientType === "OPD" ? (
                  <Form.Control
                    type="number"
                    value={patientObj?.PhoneNumber}
                    placeholder="Mobile"
                    disabled
                    onChange={(e) => setPhoneno(e.target.value)}
                  />
                ) : (
                  <Form.Control
                    type="number"
                    value={Phoneno}
                    placeholder="Mobile"
                    onChange={(e) => setPhoneno(e.target.value)}
                  />
                )}
              </FloatingLabel>

              <FloatingLabel
                className="col-md-6 p-2"
                controlId="floatingEmail"
                label="Email"
              >
                {PatientType === "IPD" || PatientType === "OPD" ? (
                  <Form.Control
                    type="email"
                    value={patientObj?.Email}
                    placeholder="Email"
                    disabled
                    onChange={(e) => setemail(e.target.value)}
                  />
                ) : (
                  <Form.Control
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                )}
              </FloatingLabel>

              <FloatingLabel
                className="col-md-6 p-2"
                controlId="floatingEmail"
                label=""
              >
                <Form.Control
                  type="date"
                  placeholder=""
                  value={testDate}
                  min={`${new Date().getFullYear()}-${String(
                    new Date().getMonth() + 1
                  ).padStart(2, "0")}-${String(new Date().getDate()).padStart(
                    2,
                    "0"
                  )}`}
                  onChange={(e) => settestDate(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel
                className="col-md-12 p-2"
                controlId="floatingName"
                label={hasSelectedOptions ? "" : "Select Lab Tests"}
              >
                <Select
                  isMulti
                  name="labTests"
                  options={HospitalLabList}
                  className="basic-multi-select"
                  classNamePrefix=""
                  value={Labtests1}
                  onChange={AddLabTest}
                  styles={customStyles}
                  placeholder=""
                />
              </FloatingLabel>
            </Row>
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
                onClick={() => handleClose8()}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "#d3d300",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  updateBookedLabTests();
                }}
              >
                Update
              </button>
            </div>
          </Modal.Footer>
        </Modal> */}

        <Modal show={show9} onHide={handleClose9} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Lab Report list</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Table bordered>
                <thead>
                  <th>S.no.</th>
                  <th>Lab Reports</th>
                  <th>Actions</th>
                </thead>
                <tbody>
                  {Labtests?.Labtests?.map((val, i) => {
                    return (
                      <tr>
                        <td>{i + 1}. </td>
                        <td>{val?.testName} </td>
                        <td>
                          <Button
                            variant="primary"
                            onClick={() => {
                              setSpecificTestInfo(val);
                              handleShow11();
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose9}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show11} onHide={handleClose11} size="lg">
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
                    <div
                      className="mb-5 "
                      style={{
                        display: "flex",
                      }}
                    >
                      <div>
                        <img
                          style={{ width: "115px", height: "115px" }}
                          className="logo me-2 "
                          src="/img/logo.png"
                          alt="Logo"
                        />{" "}
                      </div>
                      <div
                        className="text-center"
                        style={{ marginLeft: "30px" }}
                      >
                        <span
                          className="fw-bold fs-4"
                          style={{ color: "rgb(32 139 140)" }}
                        >
                          JANANI CLINICAL LABORATORY
                        </span>
                        <br />
                        <div>
                          <b>
                            Upstair Canara bank , Near BDA Cross, KK Colony,
                            Jalanagar Main Road, Vijayapur--586109
                          </b>
                          <div>
                            Phone:- 08352-277077 ,9606831158 , Email:-
                            jananihospital2018@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="row"
                    style={{
                      borderBottom: "2px solid",
                      padding: "0px",
                      display: "flex",
                      //   justifyContent: "space-between",
                    }}
                  >
                    <div className="col-sm-6">
                      <Table>
                        <tbody>
                          <tr>
                            <td>
                              <b>Patient ID</b>{" "}
                            </td>
                            <td>{Labtests?.patientid?.PatientId}</td>
                          </tr>

                          <tr>
                            <td>
                              <b>Patient Name</b>{" "}
                            </td>
                            <td>
                              {Labtests?.patientid?.Firstname}{" "}
                              {Labtests?.patientid?.Lastname}
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <b>Patient Age</b>{" "}
                            </td>
                            <td>
                              {moment().diff(
                                moment(Labtests?.patientid?.DOB),
                                "years"
                              )}{" "}
                              years
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Gender</b>
                            </td>
                            <td>{Labtests?.patientid?.Gender}</td>
                          </tr>

                          <tr>
                            <td>
                              <b>Email</b>
                            </td>
                            <td> {Labtests?.email}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <div className="col-sm-6">
                      <Table>
                        <tbody>
                          <tr>
                            <td>
                              <b>Phone</b>
                            </td>
                            <td>{Labtests?.patientid?.PhoneNumber}</td>
                          </tr>

                          <tr>
                            <td>
                              <b>Referred By</b>
                            </td>
                            <td>{Labtests?.hospitallabRefferedBy}</td>
                          </tr>

                          <tr>
                            <td>
                              <b>Register Date</b>
                            </td>
                            <td>
                              {moment(Labtests?.testDate).format("DD/MM/YYYY")}
                              years
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Sample No</b>
                            </td>
                            <td> {SpecificTestInfo?.sampleName}</td>
                          </tr>

                          <tr>
                            <td>
                              <b>Collected On</b>{" "}
                            </td>
                            <td>
                              {`${new Date(
                                SpecificTestInfo?.sampleCollectionDateTime
                              ).getDate()} - ${
                                new Date(
                                  SpecificTestInfo?.sampleCollectionDateTime
                                ).getMonth() + 1
                              } - ${new Date(
                                SpecificTestInfo?.sampleCollectionDateTime
                              ).getFullYear()}`}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>

                  <div style={{ marginTop: "20px", marginBottom: "10px" }}>
                    {" "}
                    <h3>{SpecificTestInfo?.testName}</h3>
                  </div>
                  <div className="row mt-2">
                    <Table bordered>
                      <thead>
                        <tr>
                          <th>Test Name</th>
                          <th>Result</th>
                          <th>Unit</th>
                          <th>General Reference Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {SpecificTestInfo?.subTest?.map((item, index) => {
                          return (
                            <tr>
                              <td>{item?.subtestName}</td>
                              <td>
                                <b>{item?.subtestpatientReportVal}</b>
                              </td>
                              <td>{item?.subtestunit}</td>
                              <td>{item?.subtestgeneralRefVal}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>

                  <div>
                    <p>
                      <b>Note: </b>
                      <span>{SpecificTestInfo?.testid?.testDescription}</span>
                    </p>
                    <p>
                      GeneratedBy:{" "}
                      <b>{SpecificTestInfo?.reportByTechnician?.name}</b>
                    </p>
                    <p style={{ textAlign: "center" }}>
                      ---------The end of Report---------
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose11}>
              Close
            </Button>
            <Button variant="primary" onClick={handleprint1}>
              Print
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default BookedLabTest;
