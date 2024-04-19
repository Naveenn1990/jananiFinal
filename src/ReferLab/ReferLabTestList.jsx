import { faAngleLeft, faAngleRight, faBarcode, faEye, faFilePdf, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import { Button, Container, Dropdown, Form, Table } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';

export const ReferLabTestList = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold'>Lab Test List</h4>
            <Container>
                <table className='table  '>
                    <thead>
                        <tr className="admin-table-head" >
                            {/* <th className="fw-bold"><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th> */}
                            <th className="fw-bold">S.NO</th>
                            <th className="fw-bold">TEST NUMBER</th>
                            <th className="fw-bold">PATIENT NAME</th>
                            <th className="fw-bold">MOBILE </th>
                            <th className="fw-bold">EMAIL</th>
                            <th className="fw-bold">TEST NAME</th>
                            <th className="fw-bold">Actions </th>
                        </tr>
                    </thead>

                    <tbody >
                        <tr className="admin-table-row" >

                            {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                            <td >
                                {/* <img
                                    style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                                    src="./img/Our-doctors-img-1.jpg"
                                    alt=""
                                /> */}
                                1
                            </td>

                            <td >
                                <a href="#" className='fw-bold'> #20958c</a>
                            </td>

                            <td>Anuj Kumar</td>
                            <td>1224531545</td>

                            <td>
                                test@gmail.com
                            </td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Blood test</div>
                            </td>
                            <td className='d-flex gap-2 align-items-center' >

                                <button className="table-details-btn" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faEye} />


                                </button>
                                <FontAwesomeIcon icon={faPrint} style={{ color: "#dc5309", fontSize: '24px', cursor: 'pointer' }} />
                                <FontAwesomeIcon icon={faBarcode} style={{ color: "#161718", fontSize: '24px', cursor: 'pointer' }} />

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td >

                                2
                            </td>

                            <td >
                                <a href="#" className='fw-bold'> #46541c</a>
                            </td>

                            <td>Ganesh kalal</td>
                            <td>1224531545</td>

                            <td>
                                test@gmail.com
                            </td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>KFT</div>
                            </td>

                            <td className='d-flex gap-2 align-items-center' >

                                <button className="table-details-btn" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faEye} />


                                </button>
                                <FontAwesomeIcon icon={faPrint} style={{ color: "#dc5309", fontSize: '24px', cursor: 'pointer' }} />
                                <FontAwesomeIcon icon={faBarcode} style={{ color: "#161718", fontSize: '24px', cursor: 'pointer' }} />

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td >

                                3
                            </td>

                            <td >
                                <a href="#" className='fw-bold'> #24511</a>
                            </td>

                            <td>Venu Gopal</td>
                            <td>1224531545</td>

                            <td>
                                test@gmail.com
                            </td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>H-KJA</div>
                            </td>

                            <td className='d-flex gap-2 align-items-center' >

                                <button className="table-details-btn" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faEye} />


                                </button>
                                <FontAwesomeIcon icon={faPrint} style={{ color: "#dc5309", fontSize: '24px', cursor: 'pointer' }} />
                                <FontAwesomeIcon icon={faBarcode} style={{ color: "#161718", fontSize: '24px', cursor: 'pointer' }} />

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td >

                                4
                            </td>

                            <td >
                                <a href="#" className='fw-bold'> #24621</a>
                            </td>

                            <td>Sheetal</td>
                            <td>1224531545</td>

                            <td>
                                test@gmail.com
                            </td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'purple', border: '1px solid purple' }}>GA-SH</div>
                            </td>

                            <td className='d-flex gap-2 align-items-center' >

                                <button className="table-details-btn" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faEye} />


                                </button>
                                <FontAwesomeIcon icon={faPrint} style={{ color: "#dc5309", fontSize: '24px', cursor: 'pointer' }} />
                                <FontAwesomeIcon icon={faBarcode} style={{ color: "#161718", fontSize: '24px', cursor: 'pointer' }} />

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            {/* <td><input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></td> */}
                            <td >
                                {/* <img
        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
        src="./img/Our-doctors-img-1.jpg"
        alt=""
    /> */}
                                5
                            </td>

                            <td >
                                <a href="#" className='fw-bold'> #20958c</a>
                            </td>

                            <td>Anuj Kumar</td>
                            <td>1224531545</td>

                            <td>
                                test@gmail.com
                            </td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Blood test</div>
                            </td>

                            <td className='d-flex gap-2 align-items-center' >

                                <button className="table-details-btn" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faEye} />


                                </button>
                                <FontAwesomeIcon icon={faPrint} style={{ color: "#dc5309", fontSize: '24px', cursor: 'pointer' }} />
                                <FontAwesomeIcon icon={faBarcode} style={{ color: "#161718", fontSize: '24px', cursor: 'pointer' }} />

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td >

                                6
                            </td>

                            <td >
                                <a href="#" className='fw-bold'> #46541c</a>
                            </td>

                            <td>Ganesh kalal</td>
                            <td>1224531545</td>

                            <td>
                                test@gmail.com
                            </td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>KFT</div>
                            </td>

                            <td className='d-flex gap-2 align-items-center' >

                                <button className="table-details-btn" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faEye} />


                                </button>
                                <FontAwesomeIcon icon={faPrint} style={{ color: "#dc5309", fontSize: '24px', cursor: 'pointer' }} />
                                <FontAwesomeIcon icon={faBarcode} style={{ color: "#161718", fontSize: '24px', cursor: 'pointer' }} />

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td >

                                7
                            </td>

                            <td >
                                <a href="#" className='fw-bold'> #24511</a>
                            </td>

                            <td>Venu Gopal</td>
                            <td>1224531545</td>

                            <td>
                                test@gmail.com
                            </td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>H-KJA</div>
                            </td>

                            <td className='d-flex gap-2 align-items-center' >

                                <button className="table-details-btn" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faEye} />


                                </button>
                                <FontAwesomeIcon icon={faPrint} style={{ color: "#dc5309", fontSize: '24px', cursor: 'pointer' }} />
                                <FontAwesomeIcon icon={faBarcode} style={{ color: "#161718", fontSize: '24px', cursor: 'pointer' }} />

                            </td>
                        </tr>

                        <tr className="admin-table-row" >

                            <td >

                                8
                            </td>

                            <td >
                                <a href="#" className='fw-bold'> #24621</a>
                            </td>

                            <td>Sheetal</td>
                            <td>1224531545</td>

                            <td>
                                test@gmail.com
                            </td>

                            <td>
                                <div className="Diseases-btn" style={{ color: 'purple', border: '1px solid purple' }}>GA-SH</div>
                            </td>

                            <td className='d-flex gap-2 align-items-center' >

                                <button className="table-details-btn" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faEye} />


                                </button>
                                <FontAwesomeIcon icon={faPrint} style={{ color: "#dc5309", fontSize: '24px', cursor: 'pointer' }} />
                                <FontAwesomeIcon icon={faBarcode} style={{ color: "#161718", fontSize: '24px', cursor: 'pointer' }} />

                            </td>
                        </tr>

                    </tbody>
                </table>

                <div className='d-flex gap-3 align-items-center mb-3 '>
                        <Form.Select className=' ms-auto' style={{ width: '100px', height: '40px' }} aria-label="Default select example">
                            <option value="1">5</option>
                            <option value="2">10</option>
                            <option value="3">15</option>
                        </Form.Select>
                        <div className='mt-2 align-items-center d-flex'>
                            <span className='me-4 '  >1-10 of 13 page</span>
                           <FontAwesomeIcon icon={faAngleLeft} className='me-4 page-change-btn' />
                            <FontAwesomeIcon icon={faAngleRight} className='page-change-btn'/>
                        </div>
                    </div>

            </Container>



            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bold text-dark'>Test Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table className='table-bordered border-secondary' responsive="md" style={{ marginTop: "1%", backgroundColor: '#F2EFFB' }}>
                        <thead >
                            {/* <tr style={{ fontSize: "15px", textAlign: "center" }}>
                                <th className='fw-bold'>Date</th>
                                <th className='fw-bold'>Refer Doctor</th>
                                <th className='fw-bold'>Department</th>
                                <th className='fw-bold'>Report</th>
                                <th className='fw-bold'>Earning</th>
                            </tr> */}
                        </thead>
                        <tbody style={{}}>
                            <tr style={{ fontSize: "13px", }}>

                                <td className='fw-bold'>Test Number :</td>
                                <td>#2123545</td>

                                <td className='fw-bold' >Patient Name :</td>
                                <td>Anuj Kumar</td>

                            </tr>

                            <tr style={{ fontSize: "13px", }}>

                                <td className='fw-bold'>Gender :</td>
                                <td>Male</td>

                                <td className='fw-bold' >Date of birth :</td>
                                <td>16/01/1999</td>

                            </tr>

                            <tr style={{ fontSize: "13px", }}>

                                <td className='fw-bold'>Mobile Number :</td>
                                <td>1232123545</td>

                                <td className='fw-bold' >Email :</td>
                                <td>test@gmail.com</td>

                            </tr>

                            <tr style={{ fontSize: "13px", }}>

                                <td className='fw-bold'>Age :</td>
                                <td>24</td>

                                <td className='fw-bold' >Blood Group  :</td>
                                <td>AB+</td>

                            </tr>

                            <tr style={{ fontSize: "13px", }}>

                                <td className='fw-bold'>Test Type :</td>
                                <td>HS-1AS</td>

                                <td className='fw-bold' >Test Name  :</td>
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
    )
}
