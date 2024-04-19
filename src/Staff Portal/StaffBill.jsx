import React from 'react'
import { Button, Container, InputGroup, Table } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

export const StaffBill = () => {
    return (
        <div>

            <h4 className='p-4 mb-4 fw-bold text-center' style={{ backgroundColor: '#dae1f3' }} > Billing </h4>


            <Container>
                <div className='row justify-content-evenly mb-4 p-3 ' style={{ border: '1px solid black', padding: '5px' }}>
                    <p className="col-lg-2"><span className='fw-bold text-dark'>Name</span> : Sonam</p>
                    <p className="col-lg-2"><span className='fw-bold text-dark'>ID</span> : DEMO VEL200</p>
                    <p className="col-lg-2"><span className='fw-bold text-dark'>Age</span> : 65</p>
                    <p className="col-lg-2"><span className='fw-bold text-dark'>Gender</span> : Female</p>
                    <p className="col-lg-2"><span className='fw-bold text-dark'>Mobile</span> : 321542265</p>
                </div>

                <div className="row mb-3">
                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Provider* :</label>
                        <Form.Select aria-label="Default select example">
                            <option>Select Credit Provider</option>
                            <option value="1">Saku (CP_2)</option>
                            <option value="2">payal (TA_1)</option>
                            <option value="3">ICICI Insurance (CP_6)</option>
                            <option value="4">Apollo B2b (CP_4)</option>
                            <option value="4">Okasd B2b (CP_4)</option>
                        </Form.Select>
                    </div>

                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Consultant* :</label>
                        <Form.Select aria-label="Default select example">
                            <option>Select a Consultant</option>
                            <option value="1">Dr. Ganesh M.B.B.S</option>
                            <option value="2">Dr. Sheetal M.B.B.S</option>
                            <option value="3">Dr. Amandeep M.B.B.S</option>
                            <option value="4">Dr. Shruuti M.B.B.S</option>
                            <option value="5">Dr. Sunny M.B.B.S</option>
                            <option value="6">Dr. DR JIHA M.B.B.S</option>
                            <option value="7">Dr. Deepa Gopinath M.B.B.S, MD (Psy)</option>
                        </Form.Select>
                    </div>

                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Ref By* :</label>
                        <Form.Select aria-label="Default select example">
                            <option>Select a Referred By</option>
                            <option value="1">Self</option>
                            <option value="2">Others</option>
                            <option value="3">Dr. Amandeep M.B.B.S</option>
                            <option value="4">Dr. Shruuti M.B.B.S</option>
                            <option value="5">Dr. Sunny M.B.B.S</option>
                            <option value="6">Dr. DR JIHA M.B.B.S</option>
                            <option value="7">Dr. Deepa Gopinath M.B.B.S, MD (Psy)</option>
                        </Form.Select>
                    </div>

                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Visit* :</label>
                        <Form.Select aria-label="Default select example">
                            <option value="Consultation" > Consultation </option>
                            <option value="Diagnostic"> Diagnostic </option>
                            <option value="MHC"> Master Health Checkup </option>
                            <option value="Others"> Others </option>
                        </Form.Select>
                    </div>


                </div>

                <div className='col-lg-3 mb-5' >
                    <label className='fw-bold text-dark' >Purpose* :</label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            type='text'
                            placeholder="Consultation"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </div>

                {/* */}
         
                    <Table responsive className="table table-bordered border-dark" style={{ width: '1500px' }} >
                        <thead className='table-secondary border-dark  '>
                            <tr >
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }} >S.No</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' , width:'25%' }}>Particulars</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }} class="ar">Qty</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold'  }} class="ar">Price</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' , width:'12%'}} class="ar taxlabel">GST(%)</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }} class="ar taxlabel">DISC(%)</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }} class="ar">Discount</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }} class="ar">Total</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }} ></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1.
                                </td>
                                <td>
                                    <InputGroup >
                                        <Form.Control
                                            type='text'
                                            placeholder="Particulars"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>
                                <td>
                                    <InputGroup >
                                        <Form.Control
                                            type='text'
                                            placeholder="Quantity"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>
                                <td>
                                    <InputGroup >
                                        <Form.Control
                                            type='text'
                                            placeholder="Price"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option value="1" > 0.00% - GST </option>
                                        <option value="2"> 5.00% - GST </option>
                                        <option value="3"> 12.00% - GST </option>
                                        <option value="4"> 18.00% - GST </option>
                                        <option value="5"> 28.00% - GST </option>
                                    </Form.Select>
                                </td>

                                <td>
                                    <InputGroup >
                                        <Form.Control
                                            type='text'
                                            placeholder="Disc"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>

                                <td>
                                    <InputGroup >
                                        <Form.Control
                                            type='text'
                                            placeholder="Amount"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>
                                <td>
                                    <InputGroup >
                                        <Form.Control
                                            disabled
                                            placeholder=""
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>
                                <td>
                                    <Button style={{ backgroundColor: '#208b8c' }}>Add</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>



                <div className='row justify-contnet-between mt-3'>
                    <div className='col-lg-6'></div>
                    <div className="col-lg-6 ">
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td className='fw-bold text-dark'>
                                        Total :
                                    </td>
                                    <td>
                                        <InputGroup >
                                            <Form.Control
                                                disabled
                                                placeholder="0.00"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='fw-bold text-dark'>
                                        Discount :
                                    </td>
                                    <td>
                                        <InputGroup >
                                            <Form.Control
                                                disabled
                                                placeholder="0.00"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='fw-bold text-dark'>
                                        Amount Receivable :
                                    </td>
                                    <td>
                                        <InputGroup >
                                            <Form.Control
                                                disabled
                                                placeholder="0.00"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                    </td>
                                </tr>

                                <tr>
                                    <td className='fw-bold text-dark'>
                                        Amount Received :
                                    </td>
                                    <td>
                                        <InputGroup >
                                            <Form.Control
                                                disabled
                                                placeholder="0.00"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row justify-content-evenly mb-3">
                    <div className="col-lg-4">
                        <label className='fw-bold text-dark mb-1'>Payment Type* :</label>
                        <Form.Select aria-label="Default select example">
                            <option value="Cash">Cash</option>
                            <option value="Card">Card</option>
                            <option value="Cheque">Cheque</option>
                            <option value="DD">DD</option>
                            <option value="Neft">Neft</option>
                            <option value="UPI">UPI</option>
                            <option value="Gpay">Gpay</option>
                            <option value="PhonePe">PhonePe</option>
                        </Form.Select>
                    </div>
                    <div className="col-lg-4">
                        <label className='fw-bold text-dark mb-1' >Amount* :</label>
                        <InputGroup >
                            <Form.Control

                                placeholder="0.00"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                </div>

                <div className=" d-flex mb-3" style={{ marginLeft: '126px', }} >
                    <div style={{ width: '600px' }}>
                        <label className='fw-bold text-dark'>Addtional Note:</label>
                        <textarea className="form-control" placeholder="Note" id="floatingTextarea"></textarea>
                    </div>
                </div>

                <div style={{ marginLeft: '126px', marginBottom: '50px' }} >
                    <label className='fw-bold text-dark'>Review :</label>
                    <div className=" d-flex mb-4">

                        <div >
                            <input className="form-control" placeholder="Review" id="floatingTextarea"></input>
                        </div>

                        <Form.Select aria-label="Default select example" style={{ width: '150px', height: '36px' }}>
                            <option value="Cash">Days</option>
                            <option value="Card">Weeks</option>
                            <option value="Cheque">Months</option>
                        </Form.Select>
                    </div>

                    <Button style={{ backgroundColor: '#208b8c' }}>Confirm Recevied</Button>

                </div>
            </Container>

        </div>
    )
}


