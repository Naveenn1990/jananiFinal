import { faEdit, faFileArrowDown, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'

export const PurchaseOrderInvoice = () => {

    const navigate = useNavigate()

    return (
        <div>

            <Container className='p-5'>
                <div className='mb-5' >
                    <img style={{ width: '40px', height: '40px' }} className='logo me-2 ' src="./img/logo.jpg" alt="Logo" /> <br />
                    <span className="fw-bold fs-4" style={{ color: 'rgb(32 139 140)' }}>JANANI</span><br />
                    <span>JananiHospital@gmail.com</span><br />
                    <span>+1999212993</span><br />
                    <span>Singapur Layout, Banglore</span><br />

                </div>

                <div className="row mb-5">

                    <div className="col-lg-6">
                        <span className='fw-bold text-dark'>TO:</span> <br />
                        <span>Ganesh Kalal</span><br />
                        <span>+1991227831</span>
                    </div>

                    <div className="col-lg-6">
                        <span className='fw-bold text-dark'>INVOICE:</span><br />
                        <span>#32213</span><br />
                        <span>04/04/2023</span>

                    </div>

                </div>

                <h6 className='fw-bold text-dark'> ORDER LIST</h6>
                <table className="table table-bordered border-dark">
                    <thead>
                        <tr className="admin-table-head">
                            <th className='fw-bold'>SL No</th>
                            <th className='fw-bold'>Item</th>
                            <th className='fw-bold'>Price</th>
                            <th className='fw-bold'>Quantity</th>
                            <th className='fw-bold'>Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr >
                            <td>1</td>
                            <td>Seclo 250gm</td>
                            <td>5</td>
                            <td>100</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Pharma plus 250gm</td>
                            <td>14.7</td>
                            <td>100</td>
                            <td>1470</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td> plus 250gm</td>
                            <td>17</td>
                            <td>100</td>
                            <td>1700</td>
                        </tr>
                    </tbody>

                </table>

                <div className='row ms-auto align-items-center justify-content-end mb-5'>
                    <div className="col-md-2 ">
                        <span >Total :</span><br />
                        <span>Discount :</span> <br />
                        <span>Gst :</span> <br />
                        <span className='fw-bold'>Grand Total :</span> <br />
                        <span className='fw-bold'>Status :</span>


                    </div>

                    <div className="col-md-2">
                        <span>$ 2020</span> <br />
                        <span>$20</span> <br />
                        <span>$ 20</span> <br />
                        <span className='fw-bold'>$ 2020</span> <br />
                        <span className='fw-bold'>Paid</span>

                    </div>


                </div>


                <div className='text-center text-dark '>
                    <p>Thanks For Shoping. </p>
                    <p>Sales Invoice Generated By: Janani Hospital, Contact : JananiHospital@gamil.com </p>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <Button className='all-bg-green' onClick={() => navigate('/downloadinvoice')}>
                        <FontAwesomeIcon icon={faFileArrowDown} className='me-2'/> Download Invoice
                    </Button>

                    <Button className='all-bg-green'>
                        <FontAwesomeIcon icon={faEdit} className='me-2'/> Edit Invoice
                    </Button>
                </div>
            </Container>

        </div>
    )
}
