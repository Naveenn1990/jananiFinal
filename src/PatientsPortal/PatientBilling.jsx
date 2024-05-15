import {
  faEye,
  faFilePdf,
  faPrint,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const PatientBilling = () => {
  const [show, setShow] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  let details = JSON.parse(sessionStorage.getItem("PatientUser"));

  const [patientdetails, setpatientdetails] = useState({});
  //   const [patientCauseInfoObj, setpatientCauseInfoObj] = useState({});
  const patientInfo = async () => {
    try {
      const info = await axios.get(
        "http://localhost:8521/api/user/getPatientByid/" + details._id
      );
      if (info.status === 200) {
        setpatientdetails(info.data.patientdetails);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  //   function gotoBillInvoice() {}

  useEffect(() => {
    details = JSON.parse(sessionStorage.getItem("PatientUser"));
    if (!details) {
      return alert("Please login first!!!");
    }
    patientInfo();
  }, []);

  console.log("patientdetails: ", patientdetails);

  return (
    <div>
      <h4
        style={{ backgroundColor: "#dae1f3" }}
        className="p-4 fw-bold mb-4 mt-2"
      >
        Billing
      </h4>

      <Table responsive style={{ width: "1200px" }}>
        <thead>
          <tr className="admin-table-head">
            <th className="fw-bold">S.no.</th>
            <th className="fw-bold">Service Category</th>
            <th className="fw-bold">Services</th>
            <th className="fw-bold">Cause reason</th>
            {/* <th className="fw-bold">Tax</th>
            <th className="fw-bold">Discount </th>
            <th className="fw-bold">Total </th> */}
            <th className="fw-bold">Actions </th>
          </tr>
        </thead>
        <tbody>
          {patientdetails.cause?.map((item, i) => {
            return (
              <tr className="admin-table-row">
                <td>{++i}.</td>
                <td>{item.causeServiceCat}</td>
                <td>{item.causeServices}</td>
                <td>{item.CauseName}</td>

                <td>
                  <div className="d-flex gap-3">
                    <button
                      onClick={() => {
                        navigate("/patientinvoice", {
                          state: {
                            patientCauseInfo: item,
                            patientdetails: patientdetails,
                          },
                        });
                      }}
                      className=" fs-5"
                      style={{ border: "none" }}
                    >
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{ color: "#09eb05" }}
                      />
                    </button>

                    {/* <button className="fs-5" style={{ border: "none" }}>
                      <FontAwesomeIcon
                        icon={faPrint}
                        style={{ color: "#5791f4" }}
                      />
                    </button> */}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* View Bill Modal */}
      {/* <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: '#208b8c', fontWeight: 'bold' }}>Bill Information</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Container  >
                        <div style={{
                            boxShadow: " 0px 8px 32px 0px rgba(19, 19, 20, 0.37)",
                            background: "#f5f6fa",
                            backdropFilter: "blur(4px)",
                            padding: '50px'
                        }}>
                            <div className="d-flex">
                                <div className='mb-5' >
                                    <img style={{ width: '40px', height: '40px' }} className='logo me-2 ' src="./img/logo.jpg" alt="Logo" /> <br />
                                    <span className="fw-bold fs-4" style={{ color: 'rgb(32 139 140)' }}>JANANI</span><br />
                                    <span>JananiHospital@gmail.com</span><br />
                                    <span>+1999212993</span><br />
                                    <span>Singapur Layout, Banglore</span><br />

                                </div>

                                <div className='ms-auto'>
                                    <Button style={{ backgroundColor: 'rgb(32 139 140)' }}>
                                        <FontAwesomeIcon icon={faPrint} className='me-2' /> Print Invoice
                                    </Button>
                                </div>
                            </div>
                            <div className="row mb-5">

                                <div className="col-lg-6">
                                    <span className='fw-bold text-dark'>TO:</span> <br />
                                    <span>Ganesh Kalal</span><br />
                                    <span>+1991227831</span>
                                </div>

                                <div className="col-lg-6">
                                    <span className='fw-bold text-dark'>INVOICE:</span><br />
                                    <span>#32213</span><br />
                                    <span>04/04/2023</span>

                                </div>

                            </div>

                            <h6 className='fw-bold text-dark'>PURCHASE ORDER LIST</h6>
                            <table className="table table-bordered border-dark">
                                <thead>
                                    <tr className="admin-table-head">
                                        <th className='fw-bold'>SL No</th>
                                        <th className='fw-bold'>Item</th>
                                        <th className='fw-bold'>Price</th>
                                        <th className='fw-bold'>Quantity</th>
                                        <th className='fw-bold'>Amount</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr >
                                        <td>1</td>
                                        <td>Full Body Check Up</td>
                                        <td>5</td>
                                        <td>100</td>
                                        <td>500</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Ear & Throat Examination</td>
                                        <td>14.7</td>
                                        <td>100</td>
                                        <td>1470</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td> Infection Check</td>
                                        <td>17</td>
                                        <td>100</td>
                                        <td>1700</td>
                                    </tr>
                                </tbody>

                            </table>


                        

                            <div className=' d-flex justify-content-end'>
                            <table className="table table-borderless" style={{width:'200px'}}>
                                <tbody>
                                    <tr>
                                        <td className='fw-bold p-0 text-start' >Total :</td>
                                        <td className='p-0 text-end'>$2020</td>
                                    </tr>
                                    <tr >
                                        <td className='fw-bold p-0 text-start'>Discount :</td>
                                        <td className='p-0 text-end'>$20</td>
                                    </tr>
                                    <tr >
                                        <td className='fw-bold p-0 text-start'>Gst :</td>
                                        <td className='p-0 text-end'>$20</td>
                                    </tr>
                                    <tr >
                                        <td className='fw-bold p-0 text-start'>Grand Total:</td>
                                        <td className='p-0 text-end'>$2020</td>
                                    </tr>
                                    <tr >
                                        <td className='fw-bold p-0 text-start'>Status :</td>
                                        <td className='p-0 text-end'>Paid</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>


                            <div className='text-center text-dark '>
                                <p>Thanks For Shoping. </p>
                                <p>Sales Invoice Generated By: Janani Hospital, Contact : JananiHospital@gamil.com </p>
                            </div>
                        </div>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal> */}
    </div>
  );
};
