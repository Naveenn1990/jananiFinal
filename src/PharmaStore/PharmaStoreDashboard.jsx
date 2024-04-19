import { faArrowRight, faBagShopping, faCalendarDays, faEye, faFileInvoice, faLayerGroup, faPills, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Container, Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { FaCalendarAlt } from 'react-icons/fa';

export const PharmaStoreDashboard = () => {

    const navigate = useNavigate()

    return (
        <div>
            <Container>

                <div className='p-4 mb-4 row align-items-center justify-content-between' style={{ backgroundColor: '#dae1f3' }} >

                    <h4 className='fw-bold col-lg-4'>Dashboard</h4>

                    <div className='col-lg-6 d-flex gap-3 '>
                        <Form.Select style={{ width: '200px', marginLeft: 'auto' }} aria-label="Default select example">
                            <option value="1">Last 30 Days</option>
                            <option value="2">Last 6 Months</option>
                            <option value="3">Last 1 Year</option>
                        </Form.Select>
                        <Button className='d-flex gap-2 all-bg-green' ><FontAwesomeIcon icon={faFileInvoice} className='fs-6' /> Report</Button>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className='col-lg-4  ' >
                        <div className="d-flex p-2 align-items-center justify-content-between mb-0" style={{ backgroundColor: '#3498db', borderRadius: '15px 15px 0px 0px' }}>
                            <div className="ms-3">
                                <span className=' fw-bold text-light' style={{ fontSize: '50px' }}>23</span>
                                <p className='fw-bold text-light fs-5'>New Orders</p>
                            </div>
                            <div className="">
                                <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: '100px', color: 'white' }} />
                            </div>
                        </div>
                        <a href="/websiteoreder"
                            className='text-light p-2 d-flex justify-content-center gap-2 align-items-center text-center '
                            style={{ backgroundColor: 'rgb(64 164 227)', borderRadius: '0px 0px 15px 15px' }} >
                            More Info <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>

                    <div className='col-lg-4  ' >
                        <div className="d-flex p-2 align-items-center justify-content-between mb-0" style={{ backgroundColor: 'rgba(46, 204, 113,1.0)', borderRadius: '15px 15px 0px 0px' }}>
                            <div className="ms-3">
                                <span className=' fw-bold text-light' style={{ fontSize: '50px' }}>7+</span>
                                <p className='fw-bold text-light fs-5'>Suppliers</p>
                            </div>
                            <div className="">
                                <FontAwesomeIcon icon={faLayerGroup} style={{ fontSize: '100px', color: 'white' }} />
                            </div>
                        </div>
                        <a href="/purchaseorderlist"
                            className='text-light p-2 d-flex justify-content-center gap-2 align-items-center text-center '
                            style={{ backgroundColor: 'rgb(89 209 104)', borderRadius: '0px 0px 15px 15px' }} >
                            More Info <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>

                    <div className='col-lg-4  ' >
                        <div className="d-flex p-2 align-items-center justify-content-between mb-0" style={{ backgroundColor: 'rgba(230, 126, 34,1.0)', borderRadius: '15px 15px 0px 0px' }}>
                            <div className="ms-3">
                                <span className=' fw-bold text-light' style={{ fontSize: '50px' }}>124</span>
                                <p className='fw-bold text-light fs-5'>Products</p>
                            </div>
                            <div className="">
                                <FontAwesomeIcon icon={faPills} style={{ fontSize: '100px', color: 'white' }} />
                            </div>
                        </div>
                        <a href="/medicinelist"
                            className='text-light p-2 d-flex justify-content-center gap-2 align-items-center text-center '
                            style={{ backgroundColor: 'rgb(231 151 52)', borderRadius: '0px 0px 15px 15px' }} >
                            More Info <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>

                </div>

                <div>

                    <h5 className='fw-bold text-dark ms-4 mb-3'>Recent Orders</h5>

                    <table className='table  '>
                        <thead>
                            <tr className="admin-table-head" >
                                <th className="fw-bold">INVOICE NO</th>
                                <th className="fw-bold">ORDER TIME</th>
                                <th className="fw-bold">CUSTOMER NAME</th>
                                <th className="fw-bold">METHOD</th>
                                <th className="fw-bold">AMOUNT</th>
                                <th className="fw-bold">STATUS </th>
                                <th className="fw-bold">ACTION </th>
                                <th className="fw-bold">INVOICE </th>
                            </tr>
                        </thead>

                        <tbody >
                            <tr className="admin-table-row" >

                                <td>10224</td>


                                <td >
                                    Jul 24, 2023 4:13 PM
                                </td>

                                <td>Helen Raymond</td>
                                <td className='fw-bold'>Cash </td>
                                <td className='fw-bold'>$437.45	</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Pending</div>
                                </td>

                                <td>
                                    <Form.Select aria-label="Default select example" style={{ height: '35px', width: '130px' }}>
                                        <option value="1">Pending</option>
                                        <option value="2">Delivered</option>
                                        <option value="3">Processing</option>
                                        <option value="4">Canceled</option>
                                    </Form.Select>
                                </td>


                                <td>

                                    <button className="table-details-btn me-2" onClick={() => navigate('/purchaseorderinvoice')}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button className="table-details-btn" onClick={() => navigate('/downloadinvoice')}>
                                        <FontAwesomeIcon icon={faPrint} />
                                    </button>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                <td>10242</td>


                                <td >
                                    Jul 24, 2023 3:36 PM
                                </td>

                                <td>Shivendra singh	</td>
                                <td className='fw-bold'>Cash </td>
                                <td className='fw-bold'>$574.55	</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Delivered</div>
                                </td>

                                <td>
                                    <Form.Select aria-label="Default select example" style={{ height: '35px', width: '130px' }}>
                                        <option value="1">Pending</option>
                                        <option value="2">Delivered</option>
                                        <option value="3">Processing</option>
                                        <option value="4">Canceled</option>
                                    </Form.Select>
                                </td>


                                <td>

                                    <button className="table-details-btn me-2" onClick={() => navigate('/purchaseorderinvoice')}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button className="table-details-btn" onClick={() => navigate('/downloadinvoice')}>
                                        <FontAwesomeIcon icon={faPrint} />
                                    </button>

                                </td>
                            </tr>


                            <tr className="admin-table-row" >

                                <td>10452</td>


                                <td >
                                    Jul 24, 2023 3:35 PM
                                </td>

                                <td>Akshay Vaghasiya</td>
                                <td className='fw-bold'>Cash </td>
                                <td className='fw-bold'>$111.28</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Delivered</div>
                                </td>

                                <td>
                                    <Form.Select aria-label="Default select example" style={{ height: '35px', width: '130px' }}>
                                        <option value="1">Pending</option>
                                        <option value="2">Delivered</option>
                                        <option value="3">Processing</option>
                                        <option value="4">Canceled</option>
                                    </Form.Select>
                                </td>


                                <td>

                                    <button className="table-details-btn me-2" onClick={() => navigate('/purchaseorderinvoice')}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button className="table-details-btn" onClick={() => navigate('/downloadinvoice')}>
                                        <FontAwesomeIcon icon={faPrint} />
                                    </button>

                                </td>
                            </tr>


                            <tr className="admin-table-row" >

                                <td>12462</td>


                                <td >
                                    Jun 4, 2023 3:50 PM
                                </td>

                                <td>Ganesh Kalal</td>
                                <td className='fw-bold'>Cash </td>
                                <td className='fw-bold'>$345.28</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Delivered</div>
                                </td>

                                <td>
                                    <Form.Select aria-label="Default select example" style={{ height: '35px', width: '130px' }}>
                                        <option value="1">Pending</option>
                                        <option value="2">Delivered</option>
                                        <option value="3">Processing</option>
                                        <option value="4">Canceled</option>
                                    </Form.Select>
                                </td>


                                <td>

                                    <button className="table-details-btn me-2" onClick={() => navigate('/purchaseorderinvoice')}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button className="table-details-btn" onClick={() => navigate('/downloadinvoice')}>
                                        <FontAwesomeIcon icon={faPrint} />
                                    </button>

                                </td>
                            </tr>


                            <tr className="admin-table-row" >

                                <td>1642</td>


                                <td >
                                    Jul 20, 2023 8:49 PM
                                </td>

                                <td>Amandeep singh</td>
                                <td className='fw-bold'>Cash </td>
                                <td className='fw-bold'>$1654.28</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Delivered</div>
                                </td>

                                <td>
                                    <Form.Select aria-label="Default select example" style={{ height: '35px', width: '130px' }}>
                                        <option value="1">Pending</option>
                                        <option value="2">Delivered</option>
                                        <option value="3">Processing</option>
                                        <option value="4">Canceled</option>
                                    </Form.Select>
                                </td>


                                <td>

                                    <button className="table-details-btn me-2" onClick={() => navigate('/purchaseorderinvoice')}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button className="table-details-btn" onClick={() => navigate('/downloadinvoice')}>
                                        <FontAwesomeIcon icon={faPrint} />
                                    </button>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                <td>1642</td>


                                <td >
                                    Jul 20, 2023 8:48 PM
                                </td>

                                <td>Sheetal ParNets</td>
                                <td className='fw-bold'>Cash </td>
                                <td className='fw-bold'>$6541.28</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'Orange', border: '1px solid Orange' }}>Pending</div>
                                </td>

                                <td>
                                    <Form.Select aria-label="Default select example" style={{ height: '35px', width: '130px' }}>
                                        <option value="1">Pending</option>
                                        <option value="2">Delivered</option>
                                        <option value="3">Processing</option>
                                        <option value="4">Canceled</option>
                                    </Form.Select>
                                </td>


                                <td>

                                    <button className="table-details-btn me-2" onClick={() => navigate('/purchaseorderinvoice')}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button className="table-details-btn" onClick={() => navigate('/downloadinvoice')}>
                                        <FontAwesomeIcon icon={faPrint} />
                                    </button>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                <td>4411</td>


                                <td >
                                    Jul 20, 2023 7:47 AM
                                </td>

                                <td>Venu Gopal </td>
                                <td className='fw-bold'>Cash </td>
                                <td className='fw-bold'>$451.28</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Canceled</div>
                                </td>

                                <td>
                                    <Form.Select aria-label="Default select example" style={{ height: '35px', width: '130px' }}>
                                        <option value="1">Pending</option>
                                        <option value="2">Delivered</option>
                                        <option value="3">Processing</option>
                                        <option value="4">Canceled</option>
                                    </Form.Select>
                                </td>


                                <td>

                                    <button className="table-details-btn me-2" onClick={() => navigate('/purchaseorderinvoice')}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button className="table-details-btn" onClick={() => navigate('/downloadinvoice')}>
                                        <FontAwesomeIcon icon={faPrint} />
                                    </button>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                <td>1245</td>


                                <td >
                                    Jul 24, 2023 3:35 PM
                                </td>

                                <td>Sunny </td>
                                <td className='fw-bold'>Cash </td>
                                <td className='fw-bold'>$6542.28</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Canceled</div>
                                </td>

                                <td>
                                    <Form.Select aria-label="Default select example" style={{ height: '35px', width: '130px' }}>
                                        <option value="1">Pending</option>
                                        <option value="2">Delivered</option>
                                        <option value="3">Processing</option>
                                        <option value="4">Canceled</option>
                                    </Form.Select>
                                </td>


                                <td>

                                    <button className="table-details-btn me-2" onClick={() => navigate('/purchaseorderinvoice')}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button className="table-details-btn" onClick={() => navigate('/downloadinvoice')}>
                                        <FontAwesomeIcon icon={faPrint} />
                                    </button>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                <td>4651</td>


                                <td >
                                    Jul 24, 2023 3:35 PM
                                </td>

                                <td>Shuruti mam </td>
                                <td className='fw-bold'>Cash </td>
                                <td className='fw-bold'>$6542.28</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Pending</div>
                                </td>

                                <td>
                                    <Form.Select aria-label="Default select example" style={{ height: '35px', width: '130px' }}>
                                        <option value="1">Pending</option>
                                        <option value="2">Delivered</option>
                                        <option value="3">Processing</option>
                                        <option value="4">Canceled</option>
                                    </Form.Select>
                                </td>


                                <td>

                                    <button className="table-details-btn me-2" onClick={() => navigate('/purchaseorderinvoice')}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button className="table-details-btn" onClick={() => navigate('/downloadinvoice')}>
                                        <FontAwesomeIcon icon={faPrint} />
                                    </button>

                                </td>
                            </tr>

                            <tr className="admin-table-row" >

                                <td>4121</td>


                                <td >
                                    Jul 22, 2023 3:65 PM
                                </td>

                                <td>Laxmi mam </td>
                                <td className='fw-bold'>Cash </td>
                                <td className='fw-bold'>$64.28</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Pending</div>
                                </td>

                                <td>
                                    <Form.Select aria-label="Default select example" style={{ height: '35px', width: '130px' }}>
                                        <option value="1">Pending</option>
                                        <option value="2">Delivered</option>
                                        <option value="3">Processing</option>
                                        <option value="4">Canceled</option>
                                    </Form.Select>
                                </td>


                                <td>

                                    <button className="table-details-btn me-2" onClick={() => navigate('/purchaseorderinvoice')}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button className="table-details-btn" onClick={() => navigate('/downloadinvoice')}>
                                        <FontAwesomeIcon icon={faPrint} />
                                    </button>

                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </Container>


        </div>
    )
}
