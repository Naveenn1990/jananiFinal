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
import { AiFillDelete, AiOutlineUserAdd } from "react-icons/ai";
import { MdDelete, MdEdit } from "react-icons/md";
import { useReactToPrint } from "react-to-print";
import Select from "react-select";

export default function ReportHospitalLab() {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      // Adjust the width here
      minHeight: "60px", // Adjust the height here
    }),
  };

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
  console.log("AllTestList", AllTestList);

  const [Labtests, setLabtests] = useState({});
  const [Labreport, setLabreport] = useState("");
  const [TestId, setTestId] = useState("");
  const [TestDetails, setTestDetails] = useState({});

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
        handleClose5();
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
          // beforeFoodRefVal: val.beforeFoodRefVal,
          // afterFoodRefVal: val.afterFoodRefVal,
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
      };
    } else if (PatientType === "OPD") {
      obj = {
        patientid: patientObj?._id,
        patientname: patientname,
        Phoneno: Phoneno,
        email: email,
        testDate: testDate,
        Labtests: selectedOptions,
      };
    } else {
      obj = {
        patientname: patientname,
        Phoneno: Phoneno,
        email: email,
        testDate: testDate,
        Labtests: selectedOptions,
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
        alert("Lab test booked");
        // thankyouShow();
      }
    } catch (error) {
      console.log(error);
      return alert(error.response.data.error);
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
                <th>Add Report</th>
                <th>View Report</th>
              </tr>
            </thead>
            <tbody>
              {AllTestList?.map((item, i) => {
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
                      {item?.patientid?._id ? (
                        <>
                          {item?.patientid?._id}(
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

                    <td>
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
                    </td>

                    <td>
                      {item?.paymentStatus === "PAID" ? (
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
      </div>
    </div>
  );
}
