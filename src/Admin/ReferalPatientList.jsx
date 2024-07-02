import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";

function ReferalPatientList() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [LabPatientList, setLabPatientList] = useState([]);
  const getlabregisterpatient = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/ClinicLab/allreferalpatients"
      );
      setLabPatientList(res.data.patientList);
      setPagination(res.data.patientList);
    } catch (error) {
      console.log(error);
    }
  };
  const [SearchItem, setSearchItem] = useState("");
  const [PatientDetails, setPatientDetails] = useState("");

  const bookLabTest = async () => {
    const obj = {
      patientname: ` ${PatientDetails?.LabPatientsFname} ${PatientDetails?.LabPatientsLname}`,
      Phoneno: PatientDetails?.PhoneNumber,
      email: PatientDetails?.Email,
      testDate: PatientDetails?.AppointmentDate,
      patientType: "REFERRAL-LAB",
      Labtests: PatientDetails?.Labtests,
      ReferLabId: PatientDetails?.LabId?._id,
      ReferLabName: PatientDetails?.LabId?.ClinicLabName,
    };

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
        handleClose();
        getlabregisterpatient();
        LabTestApprove()
      }
    } catch (error) {
      console.log(error);
      return alert(error.response.data.error);
    }
  };

  const LabTestApprove = async()=>{
    try {
      const config = {
        url:"/labtestapproved/" + PatientDetails?._id,
        method:"put",
        baseURL:"http://localhost:8521/api/ClinicLab",
        headers:{"content-type":"application/json"}
      }
      const res = await axios(config);
      if(res.status === 200){
        getlabregisterpatient();
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Pagination
  const [pagination, setPagination] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 2;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(pagination?.length / usersPerPage);
  const changePage = (selected) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    getlabregisterpatient();
  }, []);
  return (
    <div>
      <hr />
      <div className="container">
        <div className="col-lg-8  d-flex gap-2 mb-3">
          <Form className="">
            <Form.Control
              style={{ width: "400px" }}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </Form>
        </div>
        <div style={{ overflowX: "scroll" }}>
          <Table bordered>
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Lab Name</th>
                <th>Test Name</th>
                <th>Patient Name</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Mobile</th>
                <th>Age</th>
                <th>Blood Group </th>
                <th>Diesease </th>
                <th>Approve </th>
              </tr>
            </thead>
            <tbody>
              {LabPatientList?.filter((ele) => ele?.isRefer === true)?.slice(pagesVisited, pagesVisited + usersPerPage)?.map(
                (item, i) => {
                  if (
                    SearchItem === "" ||
                    Object.values(item).some((value) =>
                      String(value)
                        .toLowerCase()
                        .includes(SearchItem.toLowerCase())
                    )
                  )
                    return (
                      <tr className="admin-table-row">
                        <td>{i + 1} </td>
                        <td>
                          <p style={{ color: "red", fontWeight: "800" }}>
                            {item?.LabId?.ClinicLabName}
                          </p>{" "}
                        </td>
                        <td>
                          {item?.Labtests?.map((item1, i) => {
                            return (
                              <p>
                                <span>{i + 1}).</span>
                                <b>{item1?.testName}</b>
                              </p>
                            );
                          })}
                        </td>
                        <td>{`${item?.LabPatientsFname} ${item?.LabPatientsLname}`}</td>
                        <td>{item?.Gender}</td>
                        <td>{item?.Address}</td>
                        <td>{item?.PhoneNumber}</td>
                        <td>{item?.Age}</td>
                        <td>{item?.BloodGroup}</td>
                        <td>
                          <div
                            className="Diseases-btn"
                            style={{ color: "red", border: "1px solid green" }}
                          >
                            {item?.InjuryCondition}
                          </div>
                        </td>
                        <td>
                          {item?.isApproved === false ? (
                            <Button
                            variant="success"
                            onClick={() => {
                              handleShow();
                              setPatientDetails(item);
                            }}
                          >                              
                            Approve
                          </Button>
                          ):(
                            <p>Approve Successfully</p>
                          )}
                            
                          
                        </td>
                      </tr>
                    );
                }
              )}
            </tbody>
          </Table>
          <div style={{float:"right"}} className="my-3 d-flex justify-end">
                        <Stack spacing={2}>
                            <Pagination
                                count={pageCount}
                                onChange={(event, value)=>{
                                    changePage(value-1)
                                  }}
                                color="primary"                          
                            />
                        </Stack>
                    </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Approve Lab Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: "center", padding: "20px" }}>
            <p style={{ fontSize: "18px", color: "white" }}>
              Are you sure you want to approve fo Lab Test &nbsp;
              <b style={{ color: "white" }}>
                "{" "}
                {`${PatientDetails?.LabPatientsFname} ${PatientDetails?.LabPatientsLname}`}
                "
              </b>
              &nbsp; ?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={() => bookLabTest()}>
            <FontAwesomeIcon icon={faCheck} className="fs-5 me-2" />
            Approve
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ReferalPatientList;
