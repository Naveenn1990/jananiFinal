import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import {
    AiFillDelete,
    AiFillFileExcel,
    AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";

export default function AddWastageReturn() {
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
                    Add Wastage Return
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
                        <Modal.Title>Add Return </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                         

                            <div className="col-lg-12">
                                <input
                                    placeholder="Purchase ID"
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
                                    placeholder="Customer Name"
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
                                    type="date"
                                    placeholder=""
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
                                    <option>Select Reason</option>
                                    <option>Wrong Medication</option>
                                    <option>Wrong Dispensing</option>
                                    <option>Subsidence symptoms</option>
                                </select>
                            </div>

                            <div className="col-lg-12">
                                <input
                                    placeholder="Amount"
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
                                    alert("Wastage Return Added");
                                }}
                            >
                                SUBMIT
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>

                <Modal size="md" show={show1} onHide={handleClose1}>
                    <Modal.Header>
                        <Modal.Title>Edit Return </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                         

                            <div className="col-lg-12">
                                <input
                                    placeholder="Purchase ID"
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
                                    placeholder="Customer Name"
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
                                    type="date"
                                    placeholder=""
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
                                    <option>Select Reason</option>
                                    <option>Wrong Medication</option>
                                    <option>Wrong Dispensing</option>
                                    <option>Subsidence symptoms</option>
                                </select>
                            </div>

                            <div className="col-lg-12">
                                <input
                                    placeholder="Amount"
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
                                    alert("Wastage Return Added");
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
                            <th>Purchase ID</th>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Reason</th>
                            <th>Amount</th>

                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ fontSize: "15px", textAlign: "center" }}>
                            <td>#245621</td>
                            <td>Ganesh Kalal</td>
                            <td>16/01/1999</td>
                            <td>Wrong Medication</td>
                            <td>₹1299.00</td>

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
                            <td>#245621</td>
                            <td>Ganesh Kalal</td>
                            <td>16/01/1999</td>
                            <td>Wrong Medication</td>
                            <td>₹1299.00</td>

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
