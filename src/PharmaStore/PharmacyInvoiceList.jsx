import { faArrowRight, faBagShopping, faCalendarDays, faDownload, faEye, faFileInvoice, faFilter, faLayerGroup, faPills, faPrint, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Container, Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { FaCalendarAlt } from 'react-icons/fa';

export const PharmacyInvoiceList = () => {

    const navigate = useNavigate()

    return (
        <div>

            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'>Invoice List</h4>


            <Container>

                <div className="row">
                    <div className="col-lg-4 d-flex gap-2">

                        <Dropdown>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                <FontAwesomeIcon icon={faUpload} />  Export
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Export CSV</Dropdown.Item>
                                <Dropdown.Item href="#">Export JSON</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <p><Button variant="danger" size="md" active>
                            <FontAwesomeIcon icon={faDownload} />  Import
                        </Button></p>
                    </div>

                    <div className="col-lg-8  d-flex gap-2">
                        <Form className="">
                            <Form.Control
                                style={{ width: "400px" }}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            {/* <Button variant="outline-primary">Search</Button> */}
                        </Form>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <FontAwesomeIcon icon={faFilter} />  Filtered By
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                                <Dropdown.Item href="#">Last 1 Month</Dropdown.Item>
                                <Dropdown.Item href="#">Last 6 Months</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Button className='green-btn-10' onClick={() => navigate('/generateinvoice')}>

                        </Button>

                    </div>
                </div>



                <div>

                    <table className='table  ' style={{ fontSize: '12px' }}>
                        <thead>
                            <tr className="admin-table-head" >
                                <th className="fw-bold">INVOICE NO</th>
                                <th className="fw-bold">ORDER ID</th>
                                <th className="fw-bold">ORDER TIME</th>
                                <th className="fw-bold">CUSTOMER NAME</th>
                                <th className="fw-bold">AMOUNT</th>
                                <th className="fw-bold">LOCATION</th>
                                <th className="fw-bold">STATUS </th>
                                <th className="fw-bold">INVOICE </th>
                            </tr>
                        </thead>

                        <tbody >
                            <tr className="admin-table-row" >

                                <td>10224</td>

                                <td><a href="/purchaseorderinvoice">#gk52446</a></td>

                                <td >
                                    Jul 24, 2023 4:13 PM
                                </td>

                                <td>Helen Raymond</td>

                                <td className='fw-bold'>$437.45	</td>

                                <td>Singapoor Layout <br /> Banglore</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Pending</div>
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

                                <td>45240</td>

                                <td><a href="/purchaseorderinvoice">#ah46524</a></td>

                                <td >
                                    Jul 24, 2023 4:13 PM
                                </td>

                                <td>Ganesh kalal</td>

                                <td className='fw-bold'>$546.45	</td>

                                <td>Singapoor Layout <br /> Banglore</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Delivered</div>
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

                                <td><a href="/purchaseorderinvoice">#Ks4215</a></td>

                                <td >
                                    Jul 24, 2023 3:35 PM
                                </td>

                                <td>Akshay Vaghasiya</td>
                                <td className='fw-bold'>$111.28</td>

                                <td>Singapoor Layout <br /> Banglore</td>


                                <td>
                                    <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Delivered</div>
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

                                <td><a href="/purchaseorderinvoice">#Ks4215</a></td>


                                <td >
                                    Jun 4, 2023 3:50 PM
                                </td>

                                <td>Ganesh Kalal</td>
                                <td className='fw-bold'>$345.28</td>

                                <td>Singapoor Layout <br /> Banglore</td>


                                <td>
                                    <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Delivered</div>
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

                                <td><a href="/purchaseorderinvoice">#as1542</a></td>


                                <td >
                                    Jul 20, 2023 8:49 PM
                                </td>

                                <td>Amandeep singh</td>
                                <td className='fw-bold'>$1654.28</td>

                                <td>Singapoor Layout <br /> Banglore</td>


                                <td>
                                    <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Delivered</div>
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

                                <td><a href="/purchaseorderinvoice">#as1542</a></td>


                                <td >
                                    Jul 20, 2023 8:48 PM
                                </td>

                                <td>Sheetal ParNets</td>

                                <td className='fw-bold'>$6541.28</td>

                                <td>Singapoor Layout <br /> Banglore</td>


                                <td>
                                    <div className="Diseases-btn" style={{ color: 'Orange', border: '1px solid Orange' }}>Pending</div>
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

                                <td><a href="/purchaseorderinvoice">#wd45412</a></td>


                                <td >
                                    Jul 20, 2023 7:47 AM
                                </td>

                                <td>Venu Gopal </td>

                                <td className='fw-bold'>$451.28</td>

                                <td>Singapoor Layout <br /> Banglore</td>


                                <td>
                                    <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Canceled</div>
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

                                <td><a href="/purchaseorderinvoice">#fs45412</a></td>


                                <td >
                                    Jul 24, 2023 3:35 PM
                                </td>

                                <td>Sunny </td>

                                <td className='fw-bold'>$6542.28</td>

                                <td>Singapoor Layout <br /> Banglore</td>


                                <td>
                                    <div className="Diseases-btn" style={{ color: 'red', border: '1px solid red' }}>Canceled</div>
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

                                <td><a href="/purchaseorderinvoice">#fs45412</a></td>

                                <td >
                                    Jul 24, 2023 3:35 PM
                                </td>

                                <td>Shuruti mam </td>
                                <td className='fw-bold'>$6542.28</td>

                                <td>Singapoor Layout <br /> Banglore</td>

                                <td>
                                    <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Pending</div>
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

                                <td><a href="/purchaseorderinvoice">#th45412</a></td>


                                <td >
                                    Jul 22, 2023 3:65 PM
                                </td>

                                <td>Laxmi mam </td>
                                <td className='fw-bold'>$64.28</td>

                                <td>Singapoor Layout <br /> Banglore</td>


                                <td>
                                    <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Pending</div>
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
