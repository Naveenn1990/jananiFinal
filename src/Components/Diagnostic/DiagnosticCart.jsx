import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Breadcrumb, Button, Container, FloatingLabel, Form, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export const DiagnosticCart = () => {

    const navigate = useNavigate();

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <Container className='mt-3'>

                <Breadcrumb className='mb-4'>
                    <Breadcrumb.Item href="/diagnostic">Diagnostic</Breadcrumb.Item>
                    <Breadcrumb.Item active>Cart</Breadcrumb.Item>
                </Breadcrumb>


                <h3 className='fw-bold mb-3' style={{ color: '#208b8c' }}>Cart</h3>

                <div className='mb-4'>
                    <Table responsive style={{ width: '860px' }} size="lg">
                        <thead className="admin-table-head">
                            <tr >
                                <th className='fw-bold'>S.No</th>
                                <th className='fw-bold'>Package/Test</th>
                                <th className='fw-bold'>Type</th>
                                <th className='fw-bold'>Unit Price($)</th>
                                <th className='fw-bold'>Net Price($)</th>
                                <th className='fw-bold'>Action</th>
                            </tr>
                        </thead>

                        <tbody class="table-group-divider" >
                            <tr >
                                <td className='fw-bold'>1.</td>
                                <td className='fw-bold'>
                                    FULL BODY DIAGNOSTIC
                                </td>
                                <td>
                                    <div className="Diseases-btn fw-bold" style={{ color: 'green', border: '1px solid green' }}>Package</div>
                                </td>
                                <td>₹5990.00</td>
                                <td>₹5990.00</td>
                                <td><FontAwesomeIcon icon={faTrash} style={{ color: "#da0b0b", cursor: 'pointer' }} /></td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>2.</td>
                                <td className='fw-bold'>
                                    ADVANCE DIAGNOSTIC
                                </td>
                                <td>
                                    <div className="Diseases-btn fw-bold" style={{ color: 'green', border: '1px solid green' }}>Package</div>
                                </td>
                                <td>₹3990.00</td>
                                <td>₹3990.00</td>
                                <td><FontAwesomeIcon icon={faTrash} style={{ color: "#da0b0b", cursor: 'pointer' }} /></td>
                            </tr>

                            <tr style={{ borderBottom: '#fff' }}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='fw-bold'>Total : ₹560.00</td>
                                <td><Button onClick={() => navigate('/diagnosticcheckout')} className='all-bg-green'>Check Out</Button></td>
                            </tr>

                        </tbody>
                    </Table>
                </div>

                <div className='d-flex gap-2  flex-1 '>
                    <label className='fw-bold text-dark'>Coupon :</label>
                    <input style={{ width: '300px' }} type="text" className="form-control" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="basic-addon1" />

                    <Button className='all-bg-green'>Update Cart</Button>
                </div>

            </Container>

        </div>
    )
}
