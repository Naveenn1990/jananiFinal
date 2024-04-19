import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import { BsDot } from 'react-icons/bs';
import { FaSlack } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const DiagnosticTrackOrder = () => {

    const navigate = useNavigate()

    const [PlaceOrder, setPlaceOrder] = useState(true);
    const [OutForDelivery, setOutForDelivery] = useState(false);
    const [Cancel, setCancel] = useState(false);
    const [Delivered, setDelivered] = useState(false);

    return (
        <div>
            <Container>
                <div className="row gap-2 doctor-login-btn mb-4 mt-4">
                    <Button
                        onClick={() => {
                            setPlaceOrder(true);
                            setOutForDelivery(false);
                            setCancel(false);
                            setDelivered(false);
                        }}

                        style={{ backgroundColor: 'rgb(0 23 153)' }} className="col-sm-6 col-lg-2 ">
                        Placed Order
                    </Button>


                    <Button

                        onClick={() => {
                            setPlaceOrder(false);
                            setOutForDelivery(true);
                            setCancel(false);
                            setDelivered(false);
                        }}

                        style={{ backgroundColor: 'rgb(233 49 112)' }} className="col-sm-6 col-lg-2">
                        Out For Delivery
                    </Button>


                    <Button

                        onClick={() => {
                            setPlaceOrder(false);
                            setOutForDelivery(false);
                            setCancel(true);
                            setDelivered(false);
                        }}

                        style={{ backgroundColor: '#f44336' }} className="col-sm-6 col-lg-2 ">
                        Cancel Order
                    </Button>

                    <Button

                        onClick={() => {
                            setPlaceOrder(false);
                            setOutForDelivery(false);
                            setCancel(false);
                            setDelivered(true);
                        }}

                        style={{ backgroundColor: '#09ab09' }} className="col-sm-6 col-lg-2 ">
                        Delivered
                    </Button>

                </div>

                {PlaceOrder ? (
                    <>
                        <div>
                            <div className="row mb-3 justify-content-evenly all-bg-green text-light p-2">
                                <div className='col-lg-2 col-sm-6 mb-2'>
                                    <p className='fw-bold'>ORDER PLACED</p>
                                    <p>08/19/2023</p>
                                    <p>12:35</p>
                                </div>
                                <div className='col-lg-2 col-sm-6 mb-2'>
                                    <p className='fw-bold'> TOTAL PRICE</p>
                                    <p>₹5295.84</p>
                                </div>
                                <div className='col-lg-2 col-sm-6 mb-2'>
                                    <p className='fw-bold'>SHIP TO</p>
                                    <p>Singapoor Layout, <br /> Banglore 560652</p>
                                </div>
                                <div className='col-lg-3 col-sm-6 mb-2'>
                                    <p className='fw-bold fs-5'>PLACED ORDER</p>
                                    <p>Order</p>
                                    <p>#654Eas54ae454</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center border border-secondary justify-content-evenly flex-1">
                                <div className="mb-3">
                                    <h3 style={{ color: '#208b8c' }}>FULL BODY <br /> DIAGNOSTIC</h3>
                                    <p><div className="Diseases-btn fw-bold" style={{ color: 'green', border: '1px solid green', width: '140px' }}>Package</div></p>
                                </div>
                                <div className="mb-3">
                                    <p className='ms-4 fw-bold' style={{ color: '#208b8c', textDecoration: 'underline' }}>Placed Order</p>
                                    <ol>
                                        <li> Name : <span>FULL BODY DIAGNOSTIC</span></li>
                                        <li>Prescription : <span><FontAwesomeIcon icon={faFilePdf} style={{ color: "#df0707" , cursor:'pointer' }} /></span></li>
                                        <li> Price : <span>₹5295.84</span></li>
                                        <li>Order Date : <span>19/08/2023</span></li>
                                    </ol>
                                </div>

                                <div className="mb-3">
                                    <Button onClick={() => navigate('/diagnosticvieworder')} className='all-bg-green mb-2' >View Order</Button>
                                    <br />
                                    <Button style={{ backgroundColor: '#d51212' }}>Cancel Order</Button>
                                </div>
                            </div>
                        </div>

                    </>
                ) : (
                    <>
                        {OutForDelivery ? (
                            <>
                                {/* Out For Delivery */}

                                <div>
                                    <div className="row mb-3 justify-content-evenly all-bg-green text-light p-2" >
                                        <div className='col-lg-2 col-sm-4'>
                                            <p className='fw-bold'>ORDER PLACED</p>
                                            <p>08/19/2023</p>
                                            <p>12:35</p>
                                        </div>
                                        <div className='col-lg-2 col-sm-4'>
                                            <p className='fw-bold'> TOTAL PRICE</p>
                                            <p>₹5295.84</p>
                                        </div>
                                        <div className='col-lg-2 col-sm-4'>
                                            <p className='fw-bold'>SHIP TO</p>
                                            <p>Singapoor Layout, <br /> Banglore 560652</p>
                                        </div>
                                        <div className='col-lg-3 col-sm-4'>
                                            <p className='fw-bold fs-5'>OUT FOR DELIVERY</p>
                                            <p>Order</p>
                                            <p>#654Eas54ae454</p>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center border border-secondary justify-content-evenly flex-1">

                                        <div className="mb-3">
                                            <h3 style={{ color: '#208b8c' }}>FULL BODY <br /> DIAGNOSTIC</h3>
                                            <p><div className="Diseases-btn fw-bold" style={{ color: 'green', border: '1px solid green', width: '140px' }}>Package</div></p>
                                        </div>
                                        <div className="mb-3">
                                            <p className='ms-4 fw-bold' style={{ color: '#208b8c', textDecoration: 'underline' }}>Out For Delivery</p>
                                            <ol>
                                                <li>Name : <span>FULL BODY DIAGNOSTIC</span></li>
                                                <li>Prescription : <span><FontAwesomeIcon icon={faFilePdf} style={{ color: "#df0707" , cursor:'pointer' }} /></span></li>
                                                <li>Price : <span>₹5295.84</span></li>
                                                <li>Order Date : <span>19/08/2023</span></li>
                                            </ol>
                                        </div>

                                        <div className="mb-3">
                                            {/* <Button style={{ backgroundColor: '#208b8c', marginBottom: '10px' }}>View Order</Button> */}
                                            {/* <br /> */}
                                            <Button style={{ backgroundColor: '#d51212' }}>Cancel Order</Button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {Cancel ? (
                                    <>
                                        {/* Cancelled Product */}

                                        <div>
                                            <div className="row mb-3 justify-content-evenly all-bg-green text-light p-2" >
                                                <div className='col-lg-2 col-sm-4'>
                                                    <p className='fw-bold'>ORDER PLACED</p>
                                                    <p>08/19/2023</p>
                                                    <p>12:35</p>
                                                </div>
                                                <div className='col-lg-2 col-sm-4'>
                                                    <p className='fw-bold'>TOTAL PRICE</p>
                                                    <p>₹5295.84</p>
                                                </div>
                                                <div className='col-lg-2 col-sm-4'>
                                                    <p className='fw-bold'>SHIP TO </p>
                                                    <p>Singapoor Layout, <br /> Banglore 560652</p>
                                                </div>
                                                <div className='col-lg-3 col-sm-4'>
                                                    <p className='fw-bold fs-5'>CANCELLED </p>
                                                    <p>Order</p>
                                                    <p>#654Eas54ae454</p>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center border border-secondary justify-content-evenly flex-1">
                                                <div className="mb-3">
                                                    <h3 style={{ color: '#208b8c' }}>FULL BODY <br /> DIAGNOSTIC</h3>
                                                    <p><div className="Diseases-btn fw-bold" style={{ color: 'green', border: '1px solid green', width: '140px' }}>Package</div></p>
                                                </div>
                                                <div className="mb-3">
                                                    <p className='ms-4 fw-bold' style={{ color: '#208b8c', textDecoration: 'underline' }}>Cancelled Product</p>
                                                    <ol>
                                                        <li>Name : <span>FULL BODY DIAGNOSTIC</span></li>
                                                        <li>Prescription : <span><FontAwesomeIcon icon={faFilePdf} style={{ color: "#df0707", cursor:'pointer' }} /></span></li>
                                                        <li>Price : <span>₹5295.84</span></li>
                                                        <li>Order Date : <span>19/08/2023</span></li>
                                                    </ol>
                                                </div>

                                                <div className="mb-3">
                                                    <Button style={{ backgroundColor: '#d51212' }}>Order Canceled</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {Delivered ? (
                                            <>
                                                {/* Delivered */}

                                                <div>
                                                    <div className="row mb-3 justify-content-evenly all-bg-green text-light p-2 " >
                                                        <div className='col-lg-2 col-sm-6'>
                                                            <p className='fw-bold'>ORDER PLACED</p>
                                                            <p>08/19/2023</p>
                                                            <p>12:35</p>
                                                        </div>
                                                        <div className='col-lg-2 col-sm-6'>
                                                            <p className='fw-bold'> TOTAL PRICE</p>
                                                            <p>₹5295.84</p>
                                                        </div>
                                                        <div className='col-lg-2 col-sm-6'>
                                                            <p className='fw-bold'>SHIP TO </p>
                                                            <p>Singapoor Layout, <br /> Banglore 560652</p>
                                                        </div>
                                                        <div className='col-lg-3 col-sm-6'>
                                                            <p className='fw-bold fs-5'>DELIVERED </p>
                                                            <p>Order</p>
                                                            <p>#654Eas54ae454</p>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex align-items-center border border-secondary justify-content-evenly flex-1">
                                                        <div className="mb-3">
                                                            <h3 style={{ color: '#208b8c' }}>FULL BODY <br /> DIAGNOSTIC</h3>
                                                            <p><div className="Diseases-btn fw-bold" style={{ color: 'green', border: '1px solid green', width: '140px' }}>Package</div></p>
                                                        </div>
                                                        <div className="mb-3">
                                                            <p className='ms-4 fw-bold' style={{ color: '#208b8c', textDecoration: 'underline' }}>Delivered </p>
                                                            <ol>
                                                                <li>Name : <span>FULL BODY DIAGNOSTIC</span></li>
                                                                <li>Prescription : <span><FontAwesomeIcon icon={faFilePdf} style={{ color: "#df0707" , cursor:'pointer' }} /></span></li>
                                                                <li>Price : <span>₹5295.84</span></li>
                                                                <li>Order Date : <span>19/08/2023</span></li>
                                                            </ol>
                                                        </div>

                                                        <div className="mb-3">
                                                            <Button onClick={() => navigate('/diagnosticorderinvoice')} style={{ backgroundColor: '#09ab09' }}>Invoice</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                    </>
                                )}
                            </>
                        )

                        }
                    </>
                )}







            </Container>
        </div>
    )
}
