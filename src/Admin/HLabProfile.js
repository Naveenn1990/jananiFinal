import React, { useState } from "react";
import { Button, Form, InputGroup, Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlineUserAdd } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaTrash, FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";

export default function HLabProfile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  return (
    <div>
      <div style={{ padding: "1%" }}>
        {/* <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Hospital Lab
        </h6> */}
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
            <AiOutlineUserAdd className="AddIcon1" onClick={() => setShow(true)} />

            {/* <button
              style={{
                border: "none",
                fontSize: "14px",
                fontWeight: "600",
                backgroundColor: "#20958c",
                margin: "0px 10px",
                borderRadius: "4px",
                color: "white",
              }}
              onClick={() => setShow1(true)}
            >
              {" "}
              + ADD LAB PRICE
            </button>

            <button
              style={{
                border: "none",
                fontSize: "14px",
                fontWeight: "600",
                backgroundColor: "#20958c",
                borderRadius: "4px",
                color: "white",
              }}
              onClick={() => setShow2(true)}
            >
              {" "}
              + LAB TOTAL REVENUE
            </button> */}
          </div>
        </div>

        <Modal size="md" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <input
                  placeholder="Patient ID"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Name"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="SAC"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>

              <div className="col-lg-2" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    marginTop: "14%",
                    marginLeft: "25%",
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Choose
                </label>
              </div>
              <div className="col-lg-8" style={{ marginTop: "4%" }}>
                <input
                  placeholder="Test "
                  type="text"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>

              <div className="col-lg-2" style={{ marginTop: "4%" }}>
                <Button variant="danger">ADD</Button>
              </div>


              <Table className='table table-bordered border-light' responsive style={{ width: '100%', marginTop: '4%' }} >
                <thead>
                  <tr className="admin-table-head" >
                    <th className="fw-bold" style={{ color: '#fff' }}>#</th>
                    <th className="fw-bold" style={{ color: '#fff', width: '280px' }}>Test</th>
                    <th className="fw-bold" style={{ color: '#fff' }}>Action</th>
                  </tr>
                </thead>

                <tbody >
                  <tr className="admin-table-row" >

                    <td >
                      1.
                    </td>

                    <td>
                      AFB - SPUTUM(3Days)
                    </td>
                    <td>
                      <MdDelete style={{ color: "#e01f1f", cursor: 'pointer' }} />
                    </td>
                  </tr>
                </tbody>
              </Table>

              <div className="col-lg-12">
                <input
                  placeholder="TAT(Unit)"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>

            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  border: "1px solid white",
                  fontWeight: "600",
                  marginRight: "20px",
                  padding: "4px 10px",
                }}
                onClick={() => setShow(false)}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow(false);
                  alert("Hospital lab test created");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        {/* <Modal size="md" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Lab test Price</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  <option>Select Lab Test</option>
                  <option>Test-1</option>
                  <option>Test-2</option>
                </select>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Lab Test Price"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  marginRight: "20px",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => setShow1(false)}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow1(false);
                  alert("lab test price added");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal> */}

        {/* <Modal size="md" show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Lab Total Revenue</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  <option>Select Lab test</option>
                  <option>Test-1</option>
                  <option>Test-2</option>
                </select>
              </div>

              <div
                style={{
                  borderRadius: "0px",
                  backgroundColor: "#20958c",
                  color: "white",
                  margin: "5% 20% 2% 20%",
                  width: "60%",
                  padding: "4%",
                }}
              >
                <h6 style={{ textAlign: "center", fontSize: "20px" }}>
                  Total Revenue
                </h6>
                <h6 style={{ textAlign: "center", fontSize: "30px" }}>
                  ₹ 12000
                </h6>
              </div>
            </div>
          </Modal.Body>
        </Modal> */}

        <Modal size="md" show={show4} onHide={handleClose4}>
          <Modal.Header>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <input
                  placeholder="Patient ID"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Name"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="SAC"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>

              <div className="col-lg-2" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    marginTop: "14%",
                    marginLeft: "25%",
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Choose
                </label>
              </div>
              <div className="col-lg-8" style={{ marginTop: "4%" }}>
                <input
                  placeholder="Test "
                  type="text"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>

              <div className="col-lg-2" style={{ marginTop: "4%" }}>
                <Button variant="danger">ADD</Button>
              </div>


              <Table className='table table-bordered border-light' responsive style={{ width: '100%', marginTop: '4%' }} >
                <thead>
                  <tr className="admin-table-head" >
                    <th className="fw-bold" style={{ color: '#fff' }}>#</th>
                    <th className="fw-bold" style={{ color: '#fff', width: '280px' }}>Test</th>
                    <th className="fw-bold" style={{ color: '#fff' }}>Action</th>
                  </tr>
                </thead>

                <tbody >
                  <tr className="admin-table-row" >

                    <td >
                      1.
                    </td>

                    <td>
                      AFB - SPUTUM(3Days)
                    </td>
                    <td>
                      <MdDelete style={{ color: "#e01f1f", cursor: 'pointer' }} />
                    </td>
                  </tr>
                </tbody>
              </Table>

              <div className="col-lg-12">
                <input
                  placeholder="TAT(Unit)"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>

            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  border: "1px solid white",
                  fontWeight: "600",
                  marginRight: "20px",
                  padding: "4px 10px",
                }}
                onClick={() => setShow4(false)}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow(false);
                  alert("Hospital lab test created");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>


        {/* <Modal size="md" show={show4} onHide={handleClose4}>
          <Modal.Header>
            <Modal.Title>Edit lab test</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <input
                  placeholder="Test Category"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>

              <div className="col-lg-2" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    marginTop: "14%",
                    marginLeft: "25%",
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Image
                </label>
              </div>
              <div className="col-lg-10" style={{ marginTop: "4%" }}>
                <input
                  placeholder="Test Category"
                  type="file"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Test Type"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Sub-Test"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  marginRight: "20px",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => setShow(false)}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  border: "1px solid white",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow(false);
                  alert("Hospital lab test Updated");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal> */}

        <Table responsive="lg" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Patient ID</th>
              <th>Name</th>
              <th>SAC</th>
              <th>Test</th>
              <th>TAT(Unit)</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <td>#4411</td>
              <td>
                Sarah Smith
              </td>
              <td>#2205485</td>
              <td className='fw-bold'>
                <ul>
                  <li>TOXOPLASMA - IgG</li>
                  <li>TOXOPLASMA - IgM</li>
                  <li>RUBELLA - IgG</li>
                  <li>RUBELLA - IgM</li>
                  <li>CMV - IgG</li>
                  <li>CMV - IgM</li>
                  <li>HSV II - IgG</li>
                </ul>
              </td>
              <td>
                999(min)
              </td>

              <td>
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <MdEdit
                    style={{ color: "#20958c", marginRight: "1%" }}
                    onClick={() => setShow4(true)}
                  />
                  <AiFillDelete style={{ color: "red" }} />
                  <button
                    style={{
                      fontSize: "12px",
                      border: "none",
                      backgroundColor: "#20958c",
                      color: "white",
                      fontWeight: "600",
                      borderRadius: "4px",
                    }}
                  >
                    BLOCK
                  </button>
                </div>
              </td>
            </tr>

            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <td>#4411</td>
              <td>
                Sarah Smith
              </td>
              <td>#2205485</td>
              <td className='fw-bold'>
                <ul>
                  <li>TOXOPLASMA - IgG</li>
                  <li>TOXOPLASMA - IgM</li>
                  <li>RUBELLA - IgG</li>
                  <li>RUBELLA - IgM</li>
                  <li>CMV - IgG</li>
                  <li>CMV - IgM</li>
                  <li>HSV II - IgG</li>
                </ul>
              </td>
              <td>
                999(min)
              </td>

              <td>
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <MdEdit
                    style={{ color: "#20958c", marginRight: "1%" }}
                    onClick={() => setShow4(true)}
                  />
                  <AiFillDelete style={{ color: "red" }} />
                  <button
                    style={{
                      fontSize: "12px",
                      border: "none",
                      backgroundColor: "#20958c",
                      color: "white",
                      fontWeight: "600",
                      borderRadius: "4px",
                    }}
                  >
                    BLOCK
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
