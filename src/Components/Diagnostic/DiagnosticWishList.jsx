import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Breadcrumb, Button, Container, FloatingLabel, Form, Table } from 'react-bootstrap'

export const DiagnosticWishList = () => {

    return (
        <div>
            <Container className='mt-3'>

                <Breadcrumb className='mb-4'>
                    <Breadcrumb.Item href="/diagnostic">Diagnostic</Breadcrumb.Item>
                    <Breadcrumb.Item active>Wishlist</Breadcrumb.Item>
                </Breadcrumb>


                <h3 className='fw-bold mb-3' style={{ color: '#208b8c' }}>My Wishlist</h3>

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
                                <td>$5990.00</td>
                                <td>$5990.00</td>

                                <td>
                                    <div className="d-flex gap-2">
                                        <Button className='wishlist-cart-btn'>Add To Cart</Button>
                                        <Button className='wishlist-remove-btn'>Remove</Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>2.</td>
                                <td className='fw-bold'>
                                    ADVANCE DIAGNOSTIC
                                </td>
                                <td>
                                    <div className="Diseases-btn fw-bold" style={{ color: 'green', border: '1px solid green' }}>Package</div>
                                </td>
                                <td>$3990.00</td>
                                <td>$3990.00</td>

                                <td>
                                    <div className="d-flex gap-2">
                                        <Button className='wishlist-cart-btn' >Add To Cart</Button>
                                        <Button className='wishlist-remove-btn' >Remove</Button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                </div>

            </Container >

        </div >
    )
}
