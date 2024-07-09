import axios from "axios";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";

function ReportsList() {
  let details = JSON.parse(sessionStorage.getItem("PatientUser"));
  const [PatientLabReport, setPatientLabReport] = useState([]);
  const patientInfo = async () => {
    try {
      const info = await axios.get(
        "http://localhost:8521/api/user/getlabtestbyid/" + details?._id
      );
      if (info.status === 200) {
        setPatientLabReport(info.data.list);
      }
    } catch (error) {
      console.log(error);
    //   alert(error.response.data.error);
    }
  };
  useEffect(() => {
    patientInfo();
  }, []);



  console.log("PatientLabReport",PatientLabReport);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Labtests, setLabtests] = useState({});
  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "LabTestInvoice",
  });

  
  const dobString = Labtests?.patientid?.DOB;
  const dob = new Date(dobString);
  const currentDate = new Date();
  const differenceMs = currentDate - dob;
  const ageYears = Math.floor(differenceMs / (1000 * 60 * 60 * 24 * 365.25));

  let ageOutput;
  if (ageYears < 1) {
    const ageMonths = Math.floor(ageYears * 12);
    ageOutput = `${ageMonths} months`;
  } else {
    ageOutput = `${ageYears} years`;
  }
  
  return (
    <div>
      <h4
        style={{ backgroundColor: "#dae1f3" }}
        className="p-4 fw-bold mb-4 mt-2"
      >
        Lab Report
      </h4>

      <Table responsive bordered>
        <thead>
          <tr className="admin-table-head">
            <th className="fw-bold">S.no.</th>
            <th className="fw-bold">Patient Name</th>
            <th className="fw-bold">Phone No</th>
            <th className="fw-bold">Email Id</th>
            <th className="fw-bold">Date</th>
            <th className="fw-bold">Actions </th>
          </tr>
        </thead>
        <tbody>
            {PatientLabReport?.map((item,i)=>{
                return(
                    <tr>
                        <td>{i+1}</td>
                        <td>{item?.patientname}</td>
                        <td>{item?.Phoneno}</td>
                        <td>{item?.email}</td>
                        <td>{moment(item?.testDate).format("DD/MM/YYYY")}</td>
                        <td><Button
                        onClick={()=>{
                            handleShow();
                            setLabtests(item);
                        }}
                        >View Report</Button></td>
                    </tr>
                )
            })}
        </tbody>
      </Table>
      <div>
      <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Lab Report</Modal.Title>
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
                      <span>+91 9921299308</span>
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
                        <b>Patient Name : </b> {`${Labtests?.patientid?.Firstname} ${Labtests?.patientid?.Lastname}`}
                      </div>
                      <div>
                        <b>Patient Age : </b> {ageOutput}
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div>
                        <b>Patient ID : </b> {Labtests?.patientid?.PatientId}
                      </div>
                      <div>
                        <b>Gender : </b> {Labtests?.patientid?.Gender}
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
                        {/* {Labtests?.Labtests?.filter(
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
                        })} */}
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
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleprint}>
              Print
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default ReportsList;
