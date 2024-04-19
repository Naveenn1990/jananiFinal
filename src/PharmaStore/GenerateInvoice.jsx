import React from 'react'
import { Container, FormLabel, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const GenerateInvoice = () => {

    const navigate = useNavigate()
    

    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'>Generate Invoice</h4>

            <Container className=''>
                <div className="row mb-5">
                    <div className="col-lg-4 d-flex gap-1 align-items-center ">
                        <div>
                            <span className='fw-bold text-dark'>Supplier :</span>
                        </div>
                        <div className='' >
                            <Form.Select style={{ width: '250px' }} aria-label="Default select example">
                                <option>Select Supplier</option>
                                <option value="1" >Health care</option>
                                <option value="2">Square</option>
                                <option value="3">Lupin</option>
                                <option value="4">Sun</option>
                            </Form.Select>
                        </div>
                    </div>

                    <div className="col-lg-4 d-flex gap-1 align-items-center ">
                        <div>
                            <span className='fw-bold text-dark'>Code :</span>
                        </div>
                        <div class="">

                            <input style={{ width: '250px' }} type="number" class="form-control" placeholder="Enter Code Number" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className="col-lg-4 d-flex gap-1 align-items-center ">
                        <div>
                            <span className='fw-bold text-dark'>Date :</span>
                        </div>
                        <div class="">

                            <input style={{ width: '250px' }} type="date" class="form-control" placeholder="Select Purchase Date" aria-describedby="basic-addon1" />
                        </div>
                    </div>


                </div>

                <div className="row">
                    <div className="col-lg-4 ">

                        <div className='mb-4' >
                            <FormLabel className='fw-bold text-dark'>Category : </FormLabel>
                            <Form.Select style={{ width: '250px' }} aria-label="Default select example">
                                <option>Select Category</option>
                                <option value="1" >Parcetomal</option>
                                <option value="2">Painkiller</option>
                                <option value="3">Khasi ki dawai</option>
                                <option value="4">Dolo 650</option>
                            </Form.Select>
                        </div>

                        <div className='mb-4' >
                            <FormLabel className='fw-bold text-dark'>Medicine : </FormLabel>
                            <Form.Select style={{ width: '250px' }} aria-label="Default select example">
                                <option>Select Medicine</option>
                                <option value="1" >Parcetomal</option>
                                <option value="2">Painkiller</option>
                                <option value="3">Khasi ki dawai</option>
                                <option value="4">Dolo 650</option>
                            </Form.Select>
                        </div>

                        <div class="mb-4">
                            <FormLabel className='fw-bold text-dark'>Quantity : </FormLabel>
                            <input style={{ width: '250px' }} type="number" class="form-control" placeholder="Enter Quantity" aria-describedby="basic-addon1" />
                        </div>

                        <Button onClick={() => navigate('#')} style={{ width: "40%", height: '40px', fontSize: '12px', backgroundColor: 'rgb(32, 139, 140)' }}>Add To List</Button>


                    </div>

                    <div className="col-lg-7 p-0" >
                        <Container>
                            <div className="row mb-4 fw-bold text-dark" style={{ boxShadow: '0px 8px 32px 0px rgba(19, 19, 20, 0.37)', borderRadius: '15px', height: '200px' }}>
                                <h4 style={{ backgroundColor: '#3a4a87', borderRadius: '15px 15px 0px 0px' }} className='p-3 fw-bold mb-4 text-light' >Product List</h4>


                                <span className='  col-md-1' >#</span>
                                <span className='col-md-2'>Name</span>


                                <div className='col-md-4 ' >
                                    <span style={{ float: 'right' }}>Unit</span>
                                </div>
                                <div className='col-md-2 ' >
                                    <span style={{ float: 'right' }}>Qnt</span>
                                </div>

                                <div className=' col-md-2'>
                                    <span style={{ float: 'right' }}>Amt</span>
                                </div>

                                <hr />

                                <div className="row">
                                    <di className="col-md-9 " style={{ marginLeft: '26px' }}>
                                        <span style={{ float: 'right' }} >Total</span>
                                    </di>
                                </div>


                            </div>

                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <div>
                                        <FormLabel className='fw-bold text-dark'>Note : </FormLabel>
                                        <textarea  placeholder="Enter Notes" id="floatingTextarea2" style={{ height: "100px", width: '400px' , border:'1px solid #bdbdbd', borderRadius:'8px'}}></textarea>
                                    </div>
                                </div>

                                <div className="col-md-4 ms-auto">
                                    <div class="">
                                        <FormLabel className='fw-bold text-dark'>Discount : </FormLabel>
                                        <input style={{ width: '' }} type="number" class="form-control" placeholder="" aria-describedby="basic-addon1" />
                                    </div>

                                    <div class="">
                                        <FormLabel className='fw-bold text-dark'>GST% : </FormLabel>
                                        <input style={{ width: '' }} type="text" class="form-control" placeholder="" aria-describedby="basic-addon1" />
                                    </div>

                                    <div class="">
                                        <FormLabel className='fw-bold text-dark'>Grand Total : </FormLabel>
                                        <input style={{ width: '' }} type="number" class="form-control" placeholder="" aria-describedby="basic-addon1" />
                                    </div>
                                </div>

                            </div>

                            <div className="row mb-5 ">
                                <div className='col-md-4' >
                                    <FormLabel className='fw-bold text-dark'>Payment Method : </FormLabel>
                                    <Form.Select style={{ width: '150px' }} aria-label="Default select example">
                                        <option>Select Payment</option>
                                        <option value="1" >UPI</option>
                                        <option value="2">PHONE PAY</option>
                                        <option value="3">GOOGLE PAY</option>
                                        <option value="4">CASH</option>
                                    </Form.Select>

                                    </div>

                                <div className='col-md-4' >
                                    <FormLabel className='fw-bold text-dark'>Status : </FormLabel>
                                    <Form.Select style={{ width: '150px' }} aria-label="Default select example">
                                        <option>Select Status</option>
                                        <option value="1" >Paid</option>
                                        <option value="2">UnPaid</option>
                                        <option value="3">Pending </option>
                                    </Form.Select>
                                </div>

                                <Button style={{marginTop:'35px'}} className='green-btn-6 col-md-4  align-items-center' onClick={() => navigate('/purchaseorderinvoice')}></Button>


                            </div>

                        </Container>

                    </div>

                </div>

            </Container>


        </div>
    )
}
