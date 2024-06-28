import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { faBarcode, faEye, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination, Stack } from "@mui/material";
import axios from "axios";
import { FaUpload } from "react-icons/fa";
import { LuView } from "react-icons/lu";
function DoctorReferPatientList() {
  const ReferalLAB = JSON.parse(sessionStorage.getItem("RLabDetails"));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [ViewData, setViewData] = useState("");
  const [RefPatientList, setRefPatientList] = useState([]);
  const getRefPatientList = () => {
    axios
      .get(
        `http://localhost:8521/api/Clinic/getRefPatientbyid/${ReferalLAB?._id}`
      )
      .then(function (response) {
        setRefPatientList(response.data.getdata);
        setPagination(response.data.getdata);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log("RefPatientList", RefPatientList);
  //Pagination
  const [pagination, setPagination] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(pagination?.length / usersPerPage);
  const changePage = (selected) => {
    setPageNumber(selected);
  };

  const [ViewTestId, setViewTestId] = useState("");
  const [Labreport, setLabreport] = useState("");
  const UploadLabReport = async () => {
    if(!Labreport){
      return alert("Please select lab report")
    }
    try {
      const formdata = new FormData();
      formdata.append("testReport", Labreport);
      formdata.append("testid", ViewTestId?._id);
      const config = {
        url: "/uploadlabreportreport/" + ViewData?._id,
        method: "put",
        baseURL: "http://localhost:8521/api/Clinic",
        headers: { "Content-Type": "multipart/form-data" },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose2();
        getRefPatientList();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getRefPatientList();
  }, []);

  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold">
        Doctor Refer Patient Lab Test List
      </h4>
      <Container>
        <Table bordered>
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold">S.NO</th>
              <th className="fw-bold">PATIENT NAME</th>
              <th className="fw-bold">MOBILE </th>
              <th className="fw-bold">EMAIL</th>
              <th className="fw-bold">Clinic Name</th>
              <th className="fw-bold">TEST List</th>
              <th className="fw-bold">View Report </th>
            </tr>
          </thead>
          <tbody>
            {RefPatientList?.map((item, i) => {
              return (
                <tr className="admin-table-row">
                  <td>{i + 1}</td>
                  <td>{`${item?.Firstname} ${item?.Lastname}`}</td>
                  <td>{item?.PhoneNumber}</td>
                  <td>{item?.Email}</td>
                  <td>{item?.ClinicId?.ClinicName}</td>
                  <td>
                    <Button
                      onClick={() => {
                        handleShow1();
                        setViewData(item);
                      }}
                    >
                      Test List
                    </Button>
                  </td>

                  <td className="d-flex gap-2 align-items-center">
                    {item?.Labtests?.slice(
                      pagesVisited,
                      pagesVisited + usersPerPage
                    )?.map((ele, i) => {
                      return (
                        <div className="d-flex gap-2 align-items-center">
                          {i + 1}. {ele?.testid?.testcatname}
                          {ele?.testReport ? (
                            <>
                              <span>
                                <a
                                  href={`http://localhost:8521/Doctor/${ele?.testReport}`}
                                  target="blank_"
                                >
                                  View Doc
                                </a>
                                <img
                                  src="./img/new.gif"
                                  style={{ width: "40px", height: "30px" }}
                                  alt=""
                                />
                              </span>
                            </>
                          ) : (
                            <>processing</>
                          )}
                        </div>
                      );
                    })}
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
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold text-dark">Test Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table
            className="table-bordered border-secondary"
            responsive="md"
            style={{ marginTop: "1%", backgroundColor: "#F2EFFB" }}
          >
            <thead>
              {/* <tr style={{ fontSize: "15px", textAlign: "center" }}>
                                <th className='fw-bold'>Date</th>
                                <th className='fw-bold'>Refer Doctor</th>
                                <th className='fw-bold'>Department</th>
                                <th className='fw-bold'>Report</th>
                                <th className='fw-bold'>Earning</th>
                            </tr> */}
            </thead>
            <tbody style={{}}>
              <tr style={{ fontSize: "13px" }}>
                <td className="fw-bold">Test Number :</td>
                <td>#2123545</td>

                <td className="fw-bold">Patient Name :</td>
                <td>Anuj Kumar</td>
              </tr>

              <tr style={{ fontSize: "13px" }}>
                <td className="fw-bold">Gender :</td>
                <td>Male</td>

                <td className="fw-bold">Date of birth :</td>
                <td>16/01/1999</td>
              </tr>

              <tr style={{ fontSize: "13px" }}>
                <td className="fw-bold">Mobile Number :</td>
                <td>1232123545</td>

                <td className="fw-bold">Email :</td>
                <td>test@gmail.com</td>
              </tr>

              <tr style={{ fontSize: "13px" }}>
                <td className="fw-bold">Age :</td>
                <td>24</td>

                <td className="fw-bold">Blood Group :</td>
                <td>AB+</td>
              </tr>

              <tr style={{ fontSize: "13px" }}>
                <td className="fw-bold">Test Type :</td>
                <td>HS-1AS</td>

                <td className="fw-bold">Test Name :</td>
                <td>Blood Test</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Done</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Test List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ backgroundColor: "white", padding: "10px" }}>
            <Table bordered>
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Test Name</th>
                  <th>Upload Lab Report</th>
                </tr>
              </thead>
              <tbody>
                {ViewData?.Labtests?.map((item, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item?.testid?.testcatname}</td>
                      <td>
                        <FaUpload
                          style={{ color: "green", fontSize: "20px" }}
                          onClick={() => {
                            handleShow2();
                            setViewTestId(item);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ backgroundColor: "white", padding: "10px" }}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Upload Lab Report</Form.Label>
                <Form.Control
                  onChange={(e) => setLabreport(e.target.files[0])}
                  type="file"
                />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="success" onClick={UploadLabReport}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DoctorReferPatientList;
