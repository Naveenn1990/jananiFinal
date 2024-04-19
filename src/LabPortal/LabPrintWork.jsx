import React from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'

export const LabPrintWork = () => {
    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'>Print WorkList</h4>

            <Container style={{ border: '1px solid #8080808f', padding: '20px' }}>

                <div className="row align-items-end mb-2 " >
                    <div className="col-lg-3 mb-2">
                        <Form.Select aria-label="Default select example">
                            <option value="1">Singapoor Layout Bangalore</option>
                        </Form.Select>
                    </div>
                    <div className="col-lg-3 mb-2">
                        <Form.Select aria-label="Default select example">
                            <option value="1">Laboratory</option>
                            <option value="1">Pathology</option>
                        </Form.Select>
                    </div>
                    <div className="col-lg-2 mb-2">
                        <Form.Select aria-label="Default select example">
                            <option value="1">Select Status</option>
                            <option value="2">All</option>
                            <option value="3">Bill Paid</option>
                            <option value="4">Sample Taken</option>
                            <option value="5">Processing</option>
                            <option value="6">Re-Test</option>
                        </Form.Select>
                    </div>

                    <div className="col-lg-2 mb-2">
                        <InputGroup >
                            <Form.Control
                                type='date'
                                placeholder=""
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                    <div className="col-lg-2 mb-2">
                        <InputGroup >
                            <Form.Control
                                type='date'
                                placeholder="date"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-3 mb-2">
                        <InputGroup >
                            <Form.Control
                                type='time'
                                placeholder="Time"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                    <Button className='col-lg-2' style={{ backgroundColor: '#208b8c', marginBottom: '20px', width: '150px' }}>Submit</Button>

                </div>


                <h5 className='fw-bold text-dark'>Filter</h5>
                <hr />

                <div className="row just mb-4">

                    <div className="col-lg-4">
                        <Form.Select aria-label="Default select example">
                            <option value="2">Department</option>
                            <option value="3">Order No</option>
                            <option value="4">Sample Id</option>
                            <option value="5">Test</option>
                            <option value="6">B2B</option>
                        </Form.Select>
                    </div>

                    <div className="col-lg-4">
                        <Form.Select aria-label="Default select example">
                            <option class="" value="ALL">ALL</option><option class="dept-option" value="HAEMATOLOGY">HAEMATOLOGY</option><option class="dept-option" value="BIOCHEMISTRY">BIOCHEMISTRY</option><option class="dept-option" value="ENDOCRINOLOGY">ENDOCRINOLOGY</option><option class="dept-option" value="HORMONES">HORMONES</option><option class="dept-option" value="IMMUNOLOGY">IMMUNOLOGY</option><option class="dept-option" value="SEROLOGY">SEROLOGY</option><option class="dept-option" value="FLUIDS">FLUIDS</option>
                        </Form.Select>
                    </div>

                </div>


                <h5 className='fw-bold text-dark'>Options</h5>

                <div className="row ">
                    <div className="col-lg-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Include Tests
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-2 mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Include Barcode
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Descending Order
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Exclude Printed
                            </label>
                        </div>
                    </div>

                </div>

                <Button className='all-bg-green'>Print</Button>

            </Container>

        </div>
    )
}
