import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";

export const Prescription = () => {
  const user = JSON.parse(sessionStorage.getItem("PatientUser"));

  const [AppointmentList, setAppointmentList] = useState([]);
  const getAppointmentList = () => {
    axios
      .get("http://localhost:8521/api/user/getlist")
      .then(function (response) {
        const data = response.data.Info;
        // .filter(
        //   (item) => user?._id === item?.PatientId
        // );
        setAppointmentList(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getAppointmentList();
  }, []);



  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const [modaldata, setmodaldata] = useState({});

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <h4
        style={{ backgroundColor: "#dae1f3" }}
        className="p-4 fw-bold mb-4 mt-2"
      >
        Prescription
      </h4>
      <Container>
        <Table bordered responsive style={{ width: "" }}>
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold">#</th>
              <th className="fw-bold">Title</th>
              <th className="fw-bold">Created by</th>
              <th className="fw-bold">Date</th>
              <th className="fw-bold">Disease</th>
              <th className="fw-bold">Actions </th>
            </tr>
          </thead>
          <tbody>
            {AppointmentList?.map((item, index) => {
              return (
                <tr className="admin-table-row">
                  <td>{item?._id.slice(0, 6)}</td>
                  <td className=" ">Prescription {index + 1}</td>
                  <td> Dr.{item?.ConsultantDoctor?.Firstname}</td>
                  <td>{moment(item.createdAt).format("DD/MM/YYYY")} </td>
                  <td>
                    <div
                      className="Diseases-btn"
                      style={{ color: "red", border: "1px solid red" }}
                    >
                      {item?.medicalReason}
                    </div>
                  </td>

                  <td>
                    <div className="d-flex gap-2">
                      {/* <button
                        className="me-2 fs-5"
                        style={{ border: "none", color: "Orange" }}
                      >
                        <FontAwesomeIcon icon={faFilePdf} />
                      </button> */}

                      <button
                        className="fs-5"
                        style={{ border: "none", color: "green" }}
                        onClick={() => {
                          setShow(true);
                          setmodaldata(item);
                        }}
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {/* <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <span className="pagination" style={{ float: "right" }}>
                <button className="btn2">Previous</button>
                <button className="btn1">1</button>
                <button className="btn3">Next</button>
              </span>
            </div>
          </div>
        </div> */}
      </Container>

      <Modal
        className="model-teri"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Prescription</Modal.Title>
        </Modal.Header>
        <Modal.Body ref={componentRef}>
          <div style={{backgroundColor:"white",padding:"5px"}}>
            <h5>Consultant Doctor</h5>
            <h6 style={{ fontWeight: "bold" }}>
              Dr.{modaldata?.ConsultantDoctor?.Firstname}
            </h6>
            <h6>Contact : {modaldata?.ConsultantDoctor?.PhoneNumber}</h6>
            <h6>
              Appointment Date :{" "}
              {moment(modaldata?.createdAt).format("DD/MM/YYYY")}
            </h6>
            <h6>Patient Name : {modaldata?.Firstname}</h6>
          </div>
          <Table bordered style={{backgroundColor:"white"}}>
            <thead className="all-bg-green">
              <tr>
                <th className="text-light fw-bold" width="5%">
                  S. No
                </th>
                <th className="text-light fw-bold" width="10%">
                  Type
                </th>
                {/* <th className="text-light fw-bold" width="15%">
                  Name
                </th> */}
                <th className="text-light fw-bold" width="15%">
                  Generic Name
                </th>
                <th className="text-light fw-bold" width="10%">
                  Dosage
                </th>
                <th className="text-light fw-bold" width="15%">
                  Frequency
                </th>
                <th className="text-light fw-bold" width="10%">
                  Duration
                </th>
                <th className="text-light fw-bold" width="15%">
                  Instruction
                </th>
                {/* <th className='text-light fw-bold' width="10%">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {modaldata?.medicineInfo?.map((item, index) => {
                return (
                  <tr className="admin-table-row">
                    <td>{index + 1}</td>
                    <td className=" me-2">{item?.medicineType}</td>
                    {/* <td>{item?.medicineName}</td> */}
                    <td>{item?.genericName}</td>
                    <td>{item?.dosage} </td>

                    <td>
                      {item?.morningDose}-{item?.noonDose}-{item?.eveDose}-
                      {item?.nightDose}
                    </td>

                    <td>
                      {item?.duration} {item?.days}
                    </td>

                    <td>{item?.medicineTakingTime}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button 
          variant="success"
          onClick={handlePrint}
          >Print</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
