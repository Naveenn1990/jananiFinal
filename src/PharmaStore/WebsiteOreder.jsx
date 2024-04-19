
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, FormLabel, Form, Button } from 'react-bootstrap'
import { faArrowRight, faBagShopping, faEye, faLayerGroup, faPills, faPrint, faFileArrowDown, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export const WebsiteOreder = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'>Orders</h4>

            <Container>

                <div className="row ms-3">
                    <div class="mb-4 col-lg-4 ">
                        <FormLabel className='fw-bold text-dark'>Select Medicine Group* </FormLabel>
                        <input style={{ width: '300px' }} type="text" class="form-control" placeholder="Seacrh By Customer Name" aria-describedby="basic-addon1" />
                    </div>

                    <div className='mb-4 col-lg-4' >
                        <FormLabel className='fw-bold text-dark'>Status* </FormLabel>
                        <Form.Select style={{ width: '300px' }} aria-label="Default select example">
                            <option>Status</option>
                            <option value="1" >Delivered</option>
                            <option value="2">Pending</option>
                            <option value="3">Processing</option>
                            <option value="4">Cancled</option>
                        </Form.Select>
                    </div>

                    <div className='mb-4 col-lg-4' >
                        <FormLabel className='fw-bold text-dark'>Days* </FormLabel>
                        <Form.Select style={{ width: '300px' }} aria-label="Default select example">
                            <option value="1" >Last 5 Days Order</option>
                            <option value="2">Last 7 Days Order</option>
                            <option value="3">Last 15 Days Order</option>
                            <option value="4">Last 30 Days Order</option>
                        </Form.Select>
                    </div>
                </div>

                <div className="row mb-4 ms-3">

                    <div class="mb-4 col-lg-4">
                        <FormLabel className='fw-bold text-dark'>Start Date* </FormLabel>
                        <input style={{ width: '300px' }} type="date" class="form-control" placeholder="" aria-describedby="basic-addon1" />
                    </div>

                    <div class="mb-4 col-lg-4">
                        <FormLabel className='fw-bold text-dark'>End Date* </FormLabel>
                        <input style={{ width: '300px' }} type="date" class="form-control" placeholder="" aria-describedby="basic-addon1" />
                    </div>

                    <Button className='col-lg-4 store-download-btn'>
                        <span>Download All Orders</span> <FontAwesomeIcon icon={faFileArrowDown} className='fs-6' />
                    </Button>
                </div>


                <table className='table  '>
                    <thead>
                        <tr className="admin-table-head" >
                            <th className="fw-bold">ORDER NO</th>
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

                    </tbody>
                </table>

                <div className='d-flex gap-3  '>
                    <Form.Select className=' mb-5 ms-auto' style={{ width: '100px', height: '40px' }} aria-label="Default select example">
                        <option value="1">5</option>
                        <option value="2">10</option>
                        <option value="3">15</option>
                    </Form.Select>
                    <div className='mt-2'>
                        <span className='me-4 '  >1-10 of 13 page</span>
                        <FontAwesomeIcon icon={faAngleLeft} className='me-4 ' />
                        <FontAwesomeIcon icon={faAngleRight} className='' />
                    </div>
                </div>

            </Container>


        </div>
    )
}
