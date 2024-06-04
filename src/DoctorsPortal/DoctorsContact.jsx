import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { faCalendarDays, faEnvelope, faEye, faLocationDot, faPhoneVolume, faCheck, faAngleRight, faAngleLeft, faCirclePlus, faArrowsRotate, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const DoctorsContact = () => {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const AddBtnClose = () => setShow1(false);
    const AddBtnShow = () => setShow1(true);

    const EditBtnClose = () => setShow2(false);
    const EditBtnShow = () => setShow2(true);

    return (
        <div>

            <Navbar expand="lg" style={{ backgroundColor: '#dae1f3' }}>
                <Container fluid>
                    <Navbar.Brand className='fw-bold' href="#">Contacts</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-primary">Search</Button>
                        </Form>

                        <div className='ms-auto'>
                            <button className="table-details-btn me-3" onClick={AddBtnShow}>
                                <FontAwesomeIcon icon={faCirclePlus} />
                            </button>
                            <button className="table-details-btn me-3" >
                                <FontAwesomeIcon icon={faArrowsRotate} />
                            </button>
                            <a href="#"> <img style={{ width: '40px', height: '40px' }} src="./img/xl-img.png" alt="xl-img" /></a>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className='mb-5'>
                <table class="table" >
                    <thead>
                        <tr className="admin-table-head" >
                            <th className="fw-bold"><input style={{ width: '20px', height: '20px' }} type="checkbox" /></th>
                            <th className="fw-bold">Image</th>
                            <th className="fw-bold"> Name</th>
                            <th className="fw-bold">Date Of Birth</th>
                            <th className="fw-bold">Email</th>
                            <th className="fw-bold">Mobile</th>
                            <th className="fw-bold">Address</th>
                            <th className="fw-bold">Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="admin-table-row" >

                            <td><input style={{ width: '20px', height: '20px' }} type="checkbox" /></td>


                            <td className=" me-2">
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/Our-doctors-img-1.jpg"
                                    alt=""
                                />
                            </td>

                            <td>John Doe</td>
                            <td>12/05/2016 </td>
                            <td>test@email.com</td>

                            <td>
                                123456789
                            </td>
                            <td>
                                God creature is sixth was abundantly and sea gathered
                            </td>

                            <td >
                                <div style={{ display: 'flex' }}>
                                    <button className="table-details-btn" onClick={handleShow}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button className="table-details-btn ms-1" onClick={EditBtnShow}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr className="admin-table-row">

                            <td><input style={{ width: '20px', height: '20px' }} type="checkbox" /></td>

                            <td className="table-img">
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/Our-doctors-img-1.jpg"
                                    alt=""
                                />
                            </td>
                            <td>Sarah Smith</td>
                            <td>12/05/2016 </td>
                            <td>test@email.com</td>

                            <td>
                                123456789
                            </td>

                            <td>
                                God creature is sixth was abundantly and sea gathered
                            </td>

                            <td >
                                <div style={{ display: 'flex' }}>
                                    <button className="table-details-btn" onClick={handleShow}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button className="table-details-btn ms-1" onClick={EditBtnShow}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr className="admin-table-row">

                            <td><input style={{ width: '20px', height: '20px' }} type="checkbox" /></td>


                            <td className="table-img">
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/Our-doctors-img-1.jpg"
                                    alt=""
                                />
                            </td>
                            <td>Airi Satou</td>
                            <td>12/05/2016 </td>
                            <td>test@email.com</td>

                            <td>
                                123456789
                            </td>

                            <td>
                                God creature is sixth was abundantly and sea gathered

                            </td>
                            <td >
                                <div style={{ display: 'flex' }}>
                                    <button className="table-details-btn" onClick={handleShow}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button className="table-details-btn ms-1" onClick={EditBtnShow}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr className="admin-table-row">

                            <td><input style={{ width: '20px', height: '20px' }} type="checkbox" /></td>

                            <td className="table-img">
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/Our-doctors-img-1.jpg"
                                    alt=""
                                />
                            </td>
                            <td>Angelica Ramos</td>
                            <td>12/05/2016 </td>
                            <td>test@email.com</td>

                            <td>
                                123456789
                            </td>

                            <td>
                                God creature is sixth was abundantly and sea gathered

                            </td>
                            <td >
                                <div style={{ display: 'flex' }}>
                                    <button className="table-details-btn" onClick={handleShow}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button className="table-details-btn ms-1" onClick={EditBtnShow}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr className="admin-table-row">

                            <td><input style={{ width: '20px', height: '20px' }} type="checkbox" /></td>

                            <td className="table-img">
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/Our-doctors-img-1.jpg"
                                    alt=""
                                />
                            </td>
                            <td>Ashton Cox</td>

                            <td>12/05/2016 </td>
                            <td>test@email.com</td>

                            <td>
                                123456789
                            </td>
                            <td>
                                God creature is sixth was abundantly and sea gathered

                            </td>
                            <td >
                                <div style={{ display: 'flex' }}>
                                    <button className="table-details-btn" onClick={handleShow}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button className="table-details-btn ms-1" onClick={EditBtnShow}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr className="admin-table-row">

                            <td><input style={{ width: '20px', height: '20px' }} type="checkbox" /></td>

                            <td className="table-img">
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/Our-doctors-img-1.jpg"
                                    alt=""
                                />
                            </td>
                            <td>Cara Stevens</td>

                            <td>12/05/2016 </td>
                            <td>test@email.com</td>

                            <td>
                                123456789
                            </td>
                            <td>
                                God creature is sixth was abundantly and sea gathered

                            </td>
                            <td >
                                <div style={{ display: 'flex' }}>
                                    <button className="table-details-btn" onClick={handleShow}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button className="table-details-btn ms-1" onClick={EditBtnShow}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr className="admin-table-row">

                            <td><input style={{ width: '20px', height: '20px' }} type="checkbox" /></td>

                            <td className="table-img">
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/Our-doctors-img-1.jpg"
                                    alt=""
                                />
                            </td>
                            <td>ronny amd</td>

                            <td>12/05/2016 </td>
                            <td>test@email.com</td>

                            <td>
                                123456789
                            </td>
                            <td>
                                God creature is sixth was abundantly and sea gathered

                            </td>
                            <td >
                                <div style={{ display: 'flex' }}>
                                    <button className="table-details-btn" onClick={handleShow}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button className="table-details-btn ms-1" onClick={EditBtnShow}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                </div>
                            </td>
                        </tr>


                        <tr className="admin-table-row">

                            <td><input style={{ width: '20px', height: '20px' }} type="checkbox" /></td>

                            <td className="table-img">
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/Our-doctors-img-1.jpg"
                                    alt=""
                                />
                            </td>
                            <td>ganesh dr</td>

                            <td>12/05/2016 </td>
                            <td>test@email.com</td>

                            <td>
                                123456789
                            </td>
                            <td>
                                God creature is sixth was abundantly and sea gathered

                            </td>
                            <td >
                                <div style={{ display: 'flex' }}>
                                    <button className="table-details-btn" onClick={handleShow}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button className="table-details-btn ms-1" onClick={EditBtnShow}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                </div>
                            </td>
                        </tr>


                        <tr className="admin-table-row">

                            <td><input style={{ width: '20px', height: '20px' }} type="checkbox" /></td>

                            <td className="table-img">
                                <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/Our-doctors-img-1.jpg"
                                    alt=""
                                />
                            </td>
                            <td>Jhon Stevens</td>

                            <td>12/05/2016 </td>
                            <td>test@email.com</td>

                            <td>
                                123456789
                            </td>
                            <td>
                                God creature is sixth was abundantly and sea gathered

                            </td>
                            <td >
                                <div style={{ display: 'flex' }}>
                                    <button className="table-details-btn" onClick={handleShow}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button className="table-details-btn ms-1" onClick={EditBtnShow}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                </div>
                            </td>
                        </tr>


                    </tbody>


                </table>
                <div className='d-flex gap-3  '>
                    <Form.Select className=' mb-5 ms-auto' style={{ width: '100px', height: '40px' }} aria-label="Default select example">
                        <option value="1">5</option>
                        <option value="2">10</option>
                        <option value="3">15</option>
                    </Form.Select>
                    <div className='mt-2'>
                        <span className='me-4 '>1-10 of 13 page</span>
                       <button className='me-4 ' > <FontAwesomeIcon icon={faAngleLeft} /></button>
                       <button> <FontAwesomeIcon icon={faAngleRight} className='' /></button>   
                    </div>
                </div>
            </Container>


{/* VIEW DETAILS MODAL */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='d-flex align-items-center gap-3 mb-3'>
                            <img
                                style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                                src="./img/Our-doctors-img-1.jpg"
                                alt=""
                            />
                            <h4 className='fw-bold'>Jhon Deo</h4>
                        </div>
                        <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Friend</div>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className=' mb-3 fs-5'>
                        <FontAwesomeIcon icon={faCalendarDays} className='me-2' />
                        February 25, 2018 19:52
                    </div>

                    <div className=' mb-3 fs-5'>
                        <FontAwesomeIcon icon={faEnvelope} className='me-2' />
                        test@email.com
                    </div>

                    <div className=' mb-3 fs-5'>
                        <FontAwesomeIcon icon={faPhoneVolume} className='me-2' />
                        123456789
                    </div>

                    <div className=' mb-3 fs-5'>
                        <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                        God creature is sixth was abundantly and sea gathered
                    </div>

                    {/* <div className=' mb-3 fs-5'>
                        <FontAwesomeIcon icon={faBandage} className='me-2' />
                        <span className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Infection</span>
                    </div> */}

                </Modal.Body>
                <Modal.Footer >
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button  variant="danger"><FontAwesomeIcon icon={faCancel} className='fs-5 me-2' />Reject</Button>
                    <Button variant="success"><FontAwesomeIcon icon={faCheck} className='fs-5 me-2' />Approve</Button> */}
                </Modal.Footer>
            </Modal>



            {/* ADD CONTACT MODAL */}

            <Modal
                show={show1}
                onHide={AddBtnClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='d-flex align-items-center gap-3 mb-3'>
                            <img
                                style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                                src="./img/Our-doctors-img-1.jpg"
                                alt=""
                            />
                            <h4>New Contact</h4>
                        </div>
                        {/* <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Friend</div> */}

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='d-flex gap-3'>
                        <FloatingLabel className='mb-3' style={{ width: '300px' }} controlId="floatingEmail" label="Name">
                            <Form.Control type="text" placeholder="Name" />
                        </FloatingLabel>


                        <FloatingLabel className='mb-3' style={{ width: '300px' }} controlId="floatingEmail" label="Email">
                            <Form.Control type="email" placeholder="Email" />
                        </FloatingLabel>

                    </div>

                    <div className='d-flex gap-3'>
                        <FloatingLabel className='mb-3' style={{ width: '300px' }} controlId="floatingEmail" label="Mobile">
                            <Form.Control type="number" placeholder="Mobile" />
                        </FloatingLabel>

                        <FloatingLabel className='mb-3' style={{ width: '300px' }} controlId="floatingEmail" label="Birth date">
                            <Form.Control type="date" placeholder="Birth date" />
                        </FloatingLabel>
                    </div>


                    <FloatingLabel className='mb-3' style={{ width: '450px' }} controlId="floatingEmail" label="Address">
                        <Form.Control type="text" placeholder="Address" />
                    </FloatingLabel>



                    <FloatingLabel className='mb-3' style={{ width: '450px' }} controlId="floatingEmail" label="Note">
                        <Form.Control type="note" placeholder="Note" />
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer >
                    <Button variant="secondary" onClick={AddBtnClose}>
                        Cancle
                    </Button>
                    {/* <Button  variant="danger"><FontAwesomeIcon icon={faCancel} className='fs-5 me-2' />Reject</Button> */}
                    <Button variant="success"><FontAwesomeIcon icon={faCheck} className='fs-5 me-2' />Save</Button>
                </Modal.Footer>
            </Modal>


               {/* EDIT CONTACT MODAL */}

               <Modal
                show={show2}
                onHide={EditBtnClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='d-flex align-items-center gap-3 mb-3'>
                            <img
                                style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                                src="./img/Our-doctors-img-1.jpg"
                                alt=""
                            />
                            <h4>Edit Contact</h4>
                        </div>
                        {/* <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Friend</div> */}

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='d-flex gap-3'>
                        <FloatingLabel className='mb-3' style={{ width: '300px' }} controlId="floatingEmail" label="Name">
                            <Form.Control type="text" placeholder="Name" />
                        </FloatingLabel>


                        <FloatingLabel className='mb-3' style={{ width: '300px' }} controlId="floatingEmail" label="Email">
                            <Form.Control type="email" placeholder="Email" />
                        </FloatingLabel>

                    </div>

                    <div className='d-flex gap-3'>
                        <FloatingLabel className='mb-3' style={{ width: '300px' }} controlId="floatingEmail" label="Mobile">
                            <Form.Control type="number" placeholder="Mobile" />
                        </FloatingLabel>

                        <FloatingLabel className='mb-3' style={{ width: '300px' }} controlId="floatingEmail" label="Birth date">
                            <Form.Control type="date" placeholder="Birth date" />
                        </FloatingLabel>
                    </div>


                    <FloatingLabel className='mb-3' style={{ width: '450px' }} controlId="floatingEmail" label="Address">
                        <Form.Control type="text" placeholder="Address" />
                    </FloatingLabel>



                    <FloatingLabel className='mb-3' style={{ width: '450px' }} controlId="floatingEmail" label="Note">
                        <Form.Control type="note" placeholder="Note" />
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer >
                    <Button variant="secondary" onClick={EditBtnClose}>
                        Cancle
                    </Button>
                    {/* <Button  variant="danger"><FontAwesomeIcon icon={faCancel} className='fs-5 me-2' />Reject</Button> */}
                    <Button variant="success" className='d-flex align-items-center gap-1'><FontAwesomeIcon icon={faCheck} className='fs-6' />Save</Button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}
