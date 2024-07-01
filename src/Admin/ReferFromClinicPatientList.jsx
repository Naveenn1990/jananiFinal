import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination, Stack } from "@mui/material";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";

function ReferFromClinicPatientList() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [RefHospitalPatientList, setRefHospitalPatientList] = useState([]);
  const getRefPatientList = () => {
    axios
      .get("http://localhost:8521/api/Clinic/allreferalpatientslist")
      .then(function (response) {
        setRefHospitalPatientList(response.data.refpatient);
        setPagination(response.data.refpatient);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [SearchItem, setSearchItem] = useState("");
  // Pagination
  const [pagination, setPagination] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(pagination?.length / usersPerPage);
  const changePage = (selected) => {
    setPageNumber(selected);
  };

  const [PatientDetails, setPatientDetails] = useState("");

  const ReferpatientOPDregister = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/user/addPatient",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          Firstname: PatientDetails?.PatientsFname,
          Lastname: PatientDetails?.PatientsLname,
          Gender: PatientDetails?.Gender,
          DOB: PatientDetails?.DOB,
          Email: PatientDetails?.Email,
          Password:`${PatientDetails?.PatientsFname}@123`,
          ConfirmPassword: `${PatientDetails?.PatientsFname}@123`,
          registrationType: "OPD",
          registeredFrom : "Refer",
          Address1 : PatientDetails?.Address1,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert("Refer Patient Successfully");
        handleClose();
        PatientApprove();
      }
    } catch (error) {
        alert(error.response.data.error);    
    }
  };

  const PatientApprove = async()=>{
    try {
      const config = {
        url:"/patientapproved/" + PatientDetails?._id,
        method:"put",
        baseURL:"http://localhost:8521/api/Clinic"
      }
      const res = await axios(config);
      if(res.status === 200){
        getRefPatientList();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRefPatientList();
  }, []);



  console.log("RefHospitalPatientList", RefHospitalPatientList);

  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mb-4">
        Clinic-Doctor Refer Patient List
      </h4>
      <div className="container">
        <div>
          <Form className="mb-3">
            <Form.Control
              style={{ width: "400px" }}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchItem(e.target.value)}
            />
            {/* <Button variant="outline-primary">Search</Button> */}
          </Form>
        </div>
        <Table bordered>
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold">Name</th>
              <th className="fw-bold">Gender</th>
              <th className="fw-bold">Address</th>
              <th className="fw-bold">Mobile</th>
              <th className="fw-bold">DOB</th>
              <th className="fw-bold">Blood Group </th>
              <th className="fw-bold">Diesease </th>
              <th className="fw-bold">Approve </th>
            </tr>
          </thead>

          <tbody>
            {RefHospitalPatientList?.slice(
              pagesVisited,
              pagesVisited + usersPerPage
            )
              ?.filter((ele) => ele?.isRefer === true)
              ?.map((item) => {
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
                      <td>{`${item?.PatientsFname} ${item?.PatientsLname}`}</td>
                      <td>{item?.Gender}</td>
                      <td>{item?.Address1}</td>
                      <td>{item?.PhoneNumber}</td>
                      <td>{moment(item?.DOB).format("DD-MM-YYYY")}</td>
                      <td>{item?.BloodGroup}</td>
                      <td>
                        <div
                          className="Diseases-btn"
                          style={{
                            color: "red",
                            border: "1px solid green",
                          }}
                        >
                          {item?.InjuryCondition}
                        </div>
                      </td>
                      <td>
                        {item?.isApproved === false ? (
                          <Button
                          onClick={() => {
                            handleShow();
                            setPatientDetails(item);
                          }}
                          variant="success"
                        >
                          Approve
                        </Button>
                        ):(
                          <p>Refer Approved</p>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Approve Referal Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: "center", padding: "20px" }}>
            <p style={{ fontSize: "18px", color: "white" }}>
              Are you sure you want to approve for Hospital Patient &nbsp;
              <b style={{ color: "white" }}>
                {`${PatientDetails?.PatientsFname} ${PatientDetails?.PatientsLname}`}
              </b>
              &nbsp; ?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={(e) => ReferpatientOPDregister(e)}>
            <FontAwesomeIcon icon={faCheck} className="fs-5 me-2" />
            Approve
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ReferFromClinicPatientList;
