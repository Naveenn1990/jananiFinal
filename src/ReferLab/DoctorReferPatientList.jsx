import React from "react";
import { useState } from "react";
import { Button, Container, Dropdown, Form, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import {
  faAngleLeft,
  faAngleRight,
  faBarcode,
  faEye,
  faFilePdf,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination, Stack } from "@mui/material";
function DoctorReferPatientList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
      //Pagination
      const [pagination, setPagination] = useState([]);
      const [pageNumber, setPageNumber] = useState(0);
      const usersPerPage = 5;
      const pagesVisited = pageNumber * usersPerPage;
      const pageCount = Math.ceil(pagination?.length / usersPerPage);
      const changePage = ( selected ) => {
          setPageNumber(selected);
      };
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
              <th className="fw-bold">TEST NUMBER</th>
              <th className="fw-bold">PATIENT NAME</th>
              <th className="fw-bold">MOBILE </th>
              <th className="fw-bold">EMAIL</th>
              <th className="fw-bold">TEST NAME</th>
              <th className="fw-bold">Actions </th>
            </tr>
          </thead>
          <tbody>
            <tr className="admin-table-row">
              <td>1</td>
              <td>#24621</td>
              <td>Sheetal</td>
              <td>1224531545</td>
              <td>test@gmail.com</td>
              <td>
                <div
                  className="Diseases-btn"
                  style={{ color: "purple", border: "1px solid purple" }}
                >
                  GA-SH
                </div>
              </td>

              <td className="d-flex gap-2 align-items-center">
                <button className="table-details-btn" onClick={handleShow}>
                  <FontAwesomeIcon icon={faEye} />
                </button>
                <FontAwesomeIcon
                  icon={faPrint}
                  style={{
                    color: "#dc5309",
                    fontSize: "24px",
                    cursor: "pointer",
                  }}
                />
                <FontAwesomeIcon
                  icon={faBarcode}
                  style={{
                    color: "#161718",
                    fontSize: "24px",
                    cursor: "pointer",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="my-3 d-flex justify-end">
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
    </div>
  );
}

export default DoctorReferPatientList;
