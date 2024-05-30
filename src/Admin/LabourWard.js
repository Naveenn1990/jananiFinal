import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import {
    AiFillDelete,
    AiFillFileExcel,
    AiOutlinePlusCircle,
} from "react-icons/ai";
import { MdDelete, MdEdit } from "react-icons/md";

export default function LabourWard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    return (
        <div>
            <div style={{ padding: "1%" }}>
                <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
                    Labour Ward Bed Management
                </h6>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "2%",
                    }}
                >
                    <input
                        placeholder="Search Product"
                        style={{
                            padding: "5px 10px",
                            border: "1px solid #20958c",
                            borderRadius: "0px",
                        }}
                    />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <AiOutlinePlusCircle
                            className="AddIcon1"
                            onClick={() => setShow(true)}
                        />
                    </div>

                    <button
                        style={{
                            backgroundColor: "#20958c",
                            color: "white",
                            border: "none",
                            fontSize: "12px",
                            borderRadius: "4px",
                        }}
                    >
                        EXPORT <AiFillFileExcel />
                    </button>
                </div>

                <Modal size="md" show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Add Bed </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">


                            <div className="col-lg-12">
                                <input
                                    placeholder="Floor"
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
                                    placeholder="Room No"
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
                                    placeholder="Room Type"
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
                                        marginTop: "18%",
                                        marginLeft: "10%",
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "18px",
                                    }}
                                >
                                    Choose
                                </label>
                            </div>
                            <div className="col-lg-8" style={{ marginTop: "4%" }}>
                            <select
                                    style={{
                                        width: "100%",
                                        padding: "8px 20px",
                                        borderRadius: "0px",
                                        border: "1px solid #ebebeb",
                                        backgroundColor: "#ebebeb",
                                        marginTop: "4%",
                                    }}
                                >
                                    <option>Select Charges</option>
                                    <option>Night Medical Attendance (₹1300.00)</option>
                                    <option>Emergency Medical Attendance (₹1500.00)</option>
                                    <option>Medical Attendance (₹1300.00)</option>
                                    <option>Bed Charges (₹1000.00)</option>
                                    <option>Nursing Care (₹1200.00)</option>
                                </select>
                            </div>

                            <div className="col-lg-2" style={{ marginTop: "7%" }}>
                                <Button variant="danger">ADD</Button>
                            </div>


                            <Table className='table table-bordered border-light' responsive style={{ width: '100%', marginTop: '4%' }} >
                                <thead>
                                    <tr className="admin-table-head" >
                                        <th className="fw-bold" style={{ color: '#fff' }}>#</th>
                                        <th className="fw-bold" style={{ color: '#fff', width: '280px' }}>Charges</th>
                                        <th className="fw-bold" style={{ color: '#fff' }}>Action</th>
                                    </tr>
                                </thead>

                                <tbody >
                                    <tr className="admin-table-row" >

                                        <td >
                                            1.
                                        </td>

                                        <td>
                                        Night Medical Attendance (₹1300.00)
                                        </td>
                                        <td>
                                            <MdDelete style={{ color: "#e01f1f", cursor: 'pointer' }} />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>


                            <div className="col-lg-12">
                                <select
                                    style={{
                                        width: "100%",
                                        padding: "8px 20px",
                                        borderRadius: "0px",
                                        border: "1px solid #ebebeb",
                                        backgroundColor: "#ebebeb",
                                        marginTop: "4%",
                                    }}
                                >
                                    <option>Select Status</option>
                                    <option>Occupied</option>
                                    <option>Available</option>
                                    <option>Maintance</option>
                                </select>
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
                                    padding: "4px 10px",
                                    border: "1px solid white",
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
                                    padding: "4px 10px",
                                    border: "1px solid white",
                                }}
                                onClick={() => {
                                    setShow(false);
                                    alert("Bed Added Successfully...");
                                }}
                            >
                                SUBMIT
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>

                <Modal size="md" show={show1} onHide={handleClose1}>
                    <Modal.Header>
                        <Modal.Title>Edit Bed </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">


                            <div className="col-lg-12">
                                <input
                                    placeholder="Floor"
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
                                    placeholder="Room No"
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
                                    placeholder="Room Type"
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
                                        marginTop: "18%",
                                        marginLeft: "10%",
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "18px",
                                    }}
                                >
                                    Choose
                                </label>
                            </div>
                            <div className="col-lg-8" style={{ marginTop: "4%" }}>
                            <select
                                    style={{
                                        width: "100%",
                                        padding: "8px 20px",
                                        borderRadius: "0px",
                                        border: "1px solid #ebebeb",
                                        backgroundColor: "#ebebeb",
                                        marginTop: "4%",
                                    }}
                                >
                                    <option>Select Charges</option>
                                    <option>Night Medical Attendance (₹1300.00)</option>
                                    <option>Emergency Medical Attendance (₹1500.00)</option>
                                    <option>Medical Attendance (₹1300.00)</option>
                                    <option>Bed Charges (₹1000.00)</option>
                                    <option>Nursing Care (₹1200.00)</option>
                                </select>
                            </div>

                            <div className="col-lg-2" style={{ marginTop: "7%" }}>
                                <Button variant="danger">ADD</Button>
                            </div>


                            <Table className='table table-bordered border-light' responsive style={{ width: '100%', marginTop: '4%' }} >
                                <thead>
                                    <tr className="admin-table-head" >
                                        <th className="fw-bold" style={{ color: '#fff' }}>#</th>
                                        <th className="fw-bold" style={{ color: '#fff', width: '280px' }}>Charges</th>
                                        <th className="fw-bold" style={{ color: '#fff' }}>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="admin-table-row" >

                                        <td >
                                            1.
                                        </td>

                                        <td>
                                        Night Medical Attendance (₹1300.00)
                                        </td>
                                        <td>
                                            <MdDelete style={{ color: "#e01f1f", cursor: 'pointer' }} />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>



                            <div className="col-lg-12">
                                <select
                                    style={{
                                        width: "100%",
                                        padding: "8px 20px",
                                        borderRadius: "0px",
                                        border: "1px solid #ebebeb",
                                        backgroundColor: "#ebebeb",
                                        marginTop: "4%",
                                    }}
                                >
                                    <option>Select Status</option>
                                    <option>Occupied</option>
                                    <option>Available</option>
                                    <option>Maintance</option>
                                </select>
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
                                    padding: "4px 10px",
                                    border: "1px solid white",
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
                                    padding: "4px 10px",
                                    border: "1px solid white",
                                }}
                                onClick={() => {
                                    setShow1(false);
                                    alert("Bed Added Successfully...");
                                }}
                            >
                                SUBMIT
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>


                <Table responsive="md" style={{ marginTop: "1%" }}>
                    <thead>
                        <tr style={{ fontSize: "15px", textAlign: "center" }}>
                            <th>Floor</th>
                            <th>Room No</th>
                            <th>Room Type</th>
                            <th style={{ width: '340px' }}>Charges</th>
                            <th>Status</th>

                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ fontSize: "15px", textAlign: "center" }}>
                            <td>1</td>
                            <td>20</td>
                            <td>NON-AC</td>
                            <td>
                                <ul className="text-start">
                                    <li>Night Medical Attendance (₹1300.00)</li>
                                    <li>Emergency Medical Attendance (₹1500.00)</li>
                                    <li>Medical Attendance (₹1300.00)</li>
                                    <li>Bed Charges (₹1000.00)</li>
                                    <li>Nursing Care (₹1200.00)</li>
                                </ul>
                            </td>
                            <td>Occupied</td>

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
                                        onClick={() => setShow1(true)}
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
                            <td>2</td>
                            <td>10</td>
                            <td>AC</td>
                            <td>
                                <ul className="text-start">
                                    <li>Night Medical Attendance (₹1300.00)</li>
                                    <li>Emergency Medical Attendance (₹1500.00)</li>
                                    <li>Medical Attendance (₹1300.00)</li>
                                    <li>Bed Charges (₹1000.00)</li>
                                    <li>Nursing Care (₹1200.00)</li>
                                </ul>
                            </td>
                            <td>Available</td>

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
                                        onClick={() => setShow1(true)}
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
