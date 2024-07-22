import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination, Stack } from "@mui/material";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";

function ReferFromClinicPatientList() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setdata] = useState([]);
  const getRefPatientList = () => {
    axios
      .get("http://localhost:8521/api/Clinic/allreferalpatientslist")
      .then(function (response) {
        setdata(
          response.data.refpatient?.filter((ele) => ele?.isRefer === true)
        );
      })
      .catch(function (error) {
        console.log(error);
      });
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
          Password: `${PatientDetails?.PatientsFname}@123`,
          ConfirmPassword: `${PatientDetails?.PatientsFname}@123`,
          registrationType: "OPD",
          registeredFrom: "Refer",
          Address1: PatientDetails?.Address1,
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

  const PatientApprove = async () => {
    try {
      const config = {
        url: "/patientapproved/" + PatientDetails?._id,
        method: "put",
        baseURL: "http://localhost:8521/api/Clinic",
      };
      const res = await axios(config);
      if (res.status === 200) {
        getRefPatientList();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRefPatientList();
  }, []);

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = data.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      settableFilter([...filterTable]);
    } else {
      setSearch(e.target.value);
      setdata([...data]);
    }
  };

  const exportType = "xls";

  const [fileName, setfileName] = useState("Clinical-Patient-List");

  const ExportToExcel = () => {
    if (fileName) {
      if (data.length != 0) {
        exportFromJSON({ data, fileName, exportType });
        // setfileName("");
      } else {
        alert("There is no data to export");
        // setfileName("");
      }
    } else {
      alert("Enter file name to export");
    }
  };

  console.log("data", data);

  console.log("data", data);

  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mb-4">
        Clinic-Doctor Refer Patient List
      </h4>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <input
            placeholder="Search"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
            onChange={handleFilter}
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
        </div>
        <div style={{ overflow: "hidden", overflowX: "scroll" }}>
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
              {search.length > 0
                ? tableFilter
                    .slice(pagesVisited, pagesVisited + usersPerPage)
                    ?.map((item, index) => {
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
                            ) : (
                              <p>Refer Approved</p>
                            )}
                          </td>
                        </tr>
                      );
                    })
                : data
                    ?.slice(pagesVisited, pagesVisited + usersPerPage)
                    ?.map((item, index) => {
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
                            ) : (
                              <p>Refer Approved</p>
                            )}
                          </td>
                        </tr>
                      );
                    })}
            </tbody>
          </Table>
        </div>

        <div style={{ display: "flex" }}>
          <p style={{ width: "100%", marginTop: "20px" }}>
            Total Count: {data?.length}
          </p>
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
