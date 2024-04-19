import { faAngleLeft, faAngleRight, faBarcode, faEye, faFilePdf, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Container, Dropdown, Form, Table } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';

export const ReferDoctorLabTestList = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (data) => {setShow(true)
        setmodaldata(data)};

    const [modaldata, setmodaldata] = useState({});

console.log(modaldata);
    const [Reflabtest, setReflabtest] = useState([]);

    const getReflabtest = () => {
      axios
        .get("http://localhost:8521/api/Clinic/getRefLabtest")
        .then(function (response) {
          // handle success
          setReflabtest(response.data.UsersInfo);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    
    useEffect(() => {
      getReflabtest();
    }, []);

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
                        {Reflabtest?.map((item,index)=>{
                            return(
                                <tr className="admin-table-row" >

                                <td >
                                   
                                   {index+1}
                                </td>
    
                                <td >
                                    <a href="#" className='fw-bold'> #{item?._id.slice(0,6)}</a>
                                </td>
    
                                <td>{item?.Firstname}</td>
                                <td>{item?.PhoneNumber}</td>
    
                                <td>
                                {item?.Email}
                                </td>
    
                                <td>
                                    <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>{item?.Test}</div>
                                </td>
                                <td className='d-flex gap-2 align-items-center' >
    
                                    <button className="table-details-btn" onClick={()=>handleShow(item)}>
                                        <FontAwesomeIcon icon={faEye} />
    
    
                                    </button>
                                    <FontAwesomeIcon icon={faPrint} style={{ color: "#dc5309", fontSize: '24px', cursor: 'pointer' }} />
                                    <FontAwesomeIcon icon={faBarcode} style={{ color: "#161718", fontSize: '24px', cursor: 'pointer' }} />
    
                                </td>
                            </tr>
    
                            )
                        })}
                        {/* <tr className="admin-table-row" >

                            <td >
                             
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

                            <td >
                              
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
                        </tr> */}

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
                                <td>#{modaldata?._id?.slice(0,6)}</td>

                                <td className='fw-bold' >Patient Name :</td>
                                <td>{modaldata?.Firstname}</td>

                            </tr>

                            <tr style={{ fontSize: "13px", }}>

                                <td className='fw-bold'>Gender :</td>
                                <td>{modaldata?.Gender}</td>

                                <td className='fw-bold' >Date of birth :</td>
                                <td>{modaldata?.DOB}</td>

                            </tr>

                            <tr style={{ fontSize: "13px", }}>

                                <td className='fw-bold'>Mobile Number :</td>
                                <td>{modaldata?.PhoneNumber}</td>

                                <td className='fw-bold' >Email :</td>
                                <td>{modaldata?.Email}</td>

                            </tr>

                            <tr style={{ fontSize: "13px", }}>

                                <td className='fw-bold'>Age :</td>
                                <td> {moment().diff(modaldata?.DOB, 'years')}</td>

                                <td className='fw-bold' >Blood Group  :</td>
                                <td>{modaldata?.BloodGroup}</td>

                            </tr>

                            <tr style={{ fontSize: "13px", }}>

                                <td className='fw-bold'>Assigned Lab :</td>
                                <td>{modaldata?.RefLabId}</td>

                                <td className='fw-bold' >Test Name  :</td>
                                <td>{modaldata?.Test}</td>

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
