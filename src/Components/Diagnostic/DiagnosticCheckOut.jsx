import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Modal, Row, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
// import useRazorpay from "react-razorpay";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";


export const DiagnosticCheckOut = () => {

    const [Address, setAddress] = useState(true);
    const [EditAddress, setEditAddress] = useState(false);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);



    return (
        <div>
            <Container className="mt-4">
                <div className="row">
                    <div className="col-lg-8">
                        <div>
                            <b>1) Address</b>
                        </div>
                        {Address ? (
                            <>
                                <div className="address">
                                    <div className="address-01">
                                        <div>Delivery Address</div>
                                        <ol>
                                            <>
                                                <li>
                                                    <b>Name :</b>
                                                    <span>Shruthi</span>
                                                </li>
                                                <li>
                                                    <b>Address :</b>
                                                    <span>
                                                        67 Singapoor Layout banglore
                                                    </span>
                                                </li>
                                                <li>
                                                    <b>Pincode :</b>
                                                    <span> 582101</span>
                                                </li>
                                            </>

                                            <></>

                                        </ol>
                                    </div>
                                    <div className="address-02">
                                        <Button
                                           className='all-bg-green'
                                            onClick={() => {
                                                setAddress(false);
                                                setEditAddress(true);
                                            }}
                                        >
                                            Add/Change Address
                                        </Button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {EditAddress ? (
                                    <>
                                        <div className="address">
                                            <div className="address-01">
                                                <div>Address List</div>
                                                <div className="mb-2">
                                                    <Button className='all-bg-green' onClick={handleShow}>Add Address +</Button>
                                                </div>
                                                <ol type="1">
                                                    <li>
                                                        <div>
                                                            <input
                                                                // onClick={() => setshowAress(item)}
                                                                name="Address"
                                                                type="radio"
                                                            />
                                                            <label>
                                                                <span>
                                                                    <b>Name :</b> Shruthi,
                                                                    <b>Address :</b>  67 Singapoor Layout banglore
                                                                    <b>Pincode :</b> 582101
                                                                </span>
                                                                <span
                                                                    style={{ cursor: 'pointer', fontSize: '20px' }}
                                                                    onClick={() => {
                                                                        handleShow1();
                                                                        // setedit(item);
                                                                    }}
                                                                >
                                                                    {" "}
                                                                    <FaEdit />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>
                                            <div>
                                                <Button
                                                    className='all-bg-green'
                                                    onClick={() => {
                                                        setEditAddress(false);
                                                        setAddress(true);
                                                    }}
                                                >
                                                    <TiDeleteOutline
                                                        style={{ color: "#fff", fontSize: "20px", }}
                                                    />
                                                </Button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </>
                        )}
                        <br />

                        <div>
                            <b>2) Choose Prescription</b>
                        </div>
                        <div >
                            <div>
                                <Form.Group controlId="formFileMultiple" >
                                    <Form.Control type="file" multiple />
                                </Form.Group>
                            </div>
                        </div>
                        <br />

                        <div>
                            <b>3) Select Payment Method</b>
                        </div>
                        <div className="payment-method">
                            <div>
                                <input
                                    type="radio"
                                    name="payment"
                                />
                                <label>&nbsp;&nbsp; Online payment</label>
                            </div>
                            <br />
                            <div>
                                <input
                                    type="radio"
                                    name="payment"
                                />
                                <label>&nbsp;&nbsp; Cash On Delivery</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <div className="table-rspn">
                            <Table  >
                                <thead className='all-bg-green'>
                                    <tr style={{ textAlign: "center" }}>
                                        <th className="text-light fw-bold">Sl.No</th>
                                        <th className="text-light fw-bold">Package</th>
                                        <th className="text-light fw-bold">Type</th>
                                        <th className="text-light fw-bold">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ textAlign: "center" }}>
                                        <td>1</td>
                                        <td className="fw-bold">
                                            FULL BODY DIAGNOSTIC
                                        </td>
                                        <td>  <div className="Diseases-btn fw-bold" style={{ color: 'green', border: '1px solid green' }}>Package</div></td>
                                        <td> ₹5025.00</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </div>
                        <div className="paymentsummery">
                            <div>
                                <b>Payment Summary</b>
                            </div>
                            <div>
                                <b> Total MRP: </b> <span>₹6018.00</span>
                            </div>
                            <hr />
                            <div>
                                <b>Total : </b> <span>₹5295.00</span>
                            </div>
                        </div>
                        <br />
                        <div className="text-center">
                            <Button className='all-bg-green'>Place Order</Button>
                        </div>
                    </div>

                </div>

            </Container>

            {/* Add Address */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                className="inputdesign"
                                type="text"
                                placeholder="Enter Your Name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile No.</Form.Label>
                            <Form.Control
                                className="inputdesign"
                                type="text"
                                placeholder="Enter Your Mobile No."
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email Id:</Form.Label>
                            <Form.Control
                                className="inputdesign"
                                type="text"
                                placeholder="Enter Your Email Id."
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>House No.</Form.Label>
                            <Form.Control
                                className="inputdesign"
                                type="text"
                                placeholder="Enter Your House No."
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Landmark</Form.Label>
                            <Form.Control
                                className="inputdesign"
                                type="text"
                                placeholder="Enter Your landmark"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                className="inputdesign"
                                type="text"
                                placeholder="Enter Your State"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                className="inputdesign"
                                type="text"
                                placeholder="Enter Your City"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Pincode</Form.Label>
                            <Form.Control
                                className="inputdesign"
                                type="text"
                                placeholder="Enter Your Pincode"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Update Address */}

            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                className="inputdesign"
                                type="text"
                                placeholder='Name'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile No.</Form.Label>
                            <Form.Control
                                className="inputdesign"
                                type="text"
                                placeholder='Number'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email Id:</Form.Label>
                            <Form.Control

                                className="inputdesign"
                                type="text"
                                placeholder='Email'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>House No.</Form.Label>
                            <Form.Control

                                className="inputdesign"
                                type="text"
                                placeholder='House No'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Landmark</Form.Label>
                            <Form.Control

                                className="inputdesign"
                                type="text"
                                placeholder='Land Mark'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                            <Form.Control

                                className="inputdesign"
                                type="text"
                                placeholder='State'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control

                                className="inputdesign"
                                type="text"
                                placeholder='City'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Pincode</Form.Label>
                            <Form.Control

                                className="inputdesign"
                                type="text"
                                placeholder="Pin Code"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
