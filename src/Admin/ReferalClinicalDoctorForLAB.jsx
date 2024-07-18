import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Pagination, Stack } from '@mui/material';
import axios from 'axios';
import exportFromJSON from 'export-from-json';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { AiFillFileExcel } from 'react-icons/ai';

function ReferalClinicalDoctorForLAB() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [RefLabHospitalPatientList, setRefLabHospitalPatientList] = useState([]);
    const getallReflabPatientList = () => {
      axios
        .get(
          "http://localhost:8521/api/Clinic/referlabpatientforhospital"
        )
        .then(function (response) {
          setRefLabHospitalPatientList(response.data.alldata);
          setPagination(response.data.alldata);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
console.log("RefLabHospitalPatientList",RefLabHospitalPatientList);
    
    const [SearchItem, setSearchItem] = useState("");
    const [PatientDetails, setPatientDetails] = useState("");
  
    const bookLabTest = async () => {
      const obj = {
        patientname: ` ${PatientDetails?.Firstname} ${PatientDetails?.Lastname}`,
        Phoneno: PatientDetails?.PhoneNumber,
        email: PatientDetails?.Email,
        testDate: PatientDetails?.appointmentdate,
        patientType: "DOCTOR-REFERRAL-LAB",
        Labtests: PatientDetails?.Labtests,
        ReferLabId: PatientDetails?.ClinicId?._id,
        ReferLabName: PatientDetails?.ClinicId?.ClinicName,
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
          getallReflabPatientList()
          LabTestApprove();
        }
      } catch (error) {
        console.log(error);
        return alert(error.response.data.error);
      }
    };
  
    const LabTestApprove = async () => {
      try {
        const config = {
          url: "/labtestapproved/" + PatientDetails?._id,
          method: "put",
          baseURL: "http://localhost:8521/api/ClinicLab",
          headers: { "content-type": "application/json" },
        };
        const res = await axios(config);
        if (res.status === 200) {
          getallReflabPatientList();
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    // Pagination
    const [pagination, setPagination] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 2;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(pagination?.length / usersPerPage);
    const changePage = (selected) => {
      setPageNumber(selected);
    };
  
    const exportType = "xls";
  
    const [fileName, setfileName] = useState("Referral patient-list");
  
    const ExportToExcel = () => {
      if (fileName) {
        if (RefLabHospitalPatientList.length != 0) {
          exportFromJSON({
            data: JSON.parse(JSON.stringify(RefLabHospitalPatientList)),
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
  
    useEffect(() => {
      getallReflabPatientList();
    }, []);
  return (
    <div>
    <hr />
    <div className="container">
      <div className="row">
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
        <div className="col-lg-2  d-flex gap-2 mb-3">
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
        </div>
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
            {RefLabHospitalPatientList?.filter((ele) => ele?.isReferHospital === true)
              ?.slice(pagesVisited, pagesVisited + usersPerPage)
              ?.map((item, i) => {
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
                          {item?.ClinicId?.ClinicName}
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
                      <td>{`${item?.Firstname} ${item?.Lastname}`}</td>
                      <td>{item?.Gender}</td>
                      <td>{item?.Address1}</td>
                      <td>{item?.PhoneNumber}</td>
                      <td>{item?.age}</td>
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
                        {item?.adminapprove === false ? (
                          <Button
                            variant="success"
                            onClick={() => {
                              handleShow();
                              setPatientDetails(item);
                            }}
                          >
                            Approve
                          </Button>
                        ) : (
                          <p>Approve Successfully</p>
                        )}
                      </td>
                    </tr>
                  );
              })}
          </tbody>
        </Table>
        <div style={{ float: "right" }} className="my-3 d-flex justify-end">
          <Stack spacing={2}>
            <Pagination
              count={pageCount}
              onChange={(event, value) => {
                changePage(value - 1);
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
              {`${PatientDetails?.Firstname} ${PatientDetails?.Lastname}`}
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
        <Button variant="success">
          <FontAwesomeIcon icon={faCheck} className="fs-5 me-2" />
          Approve
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  )
}

export default ReferalClinicalDoctorForLAB