import React from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'

export const LabAddNewCamp = () => {
    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'> New Camp</h4>
            <Container>

                <h5 className='fw-bold text-dark'>Camp Info</h5>

<hr />

                <div className="col-lg-3 mb-4">
                    <label className='fw-bold text-dark' >Location:</label>
                    <Form.Select aria-label="Default select example">
                        <option value="1">Singapoor Layout Bangalore</option>
                    </Form.Select>
                </div>

                <div className="row align-items-end mb-4">

                    <div className="col-lg-3">
                        <label className='fw-bold text-dark' >Name :</label>
                        <InputGroup >
                            <Form.Control
                                type='text'
                                placeholder=""
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className="col-lg-3">
                        <label className='fw-bold text-dark' >Date :</label>
                        <InputGroup >
                            <Form.Control
                                type='date'
                                placeholder=""
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className="col-lg-3">
                        <label className='fw-bold text-dark' >CreditProvider :</label>
                        <Form.Select aria-label="Default select example">
                            <option value="abhishek-b2b">Ganesh B2B</option>
                            <option value="apollo-laboratory-b2b">Apollo B2b</option>
                            <option value="icici-insurance">ICICI Insurance </option>
                            <option value="payal">payal</option>
                            <option value="saku">saku</option>
                        </Form.Select>
                    </div>

                    <div className="col-lg-2 ">
                        <Button className='all-bg-green'>Go</Button>
                    </div>

                </div>

                <h5 className='fw-bold text-dark'>Test Info</h5>

                <hr />
                <table class="table table-striped table-bordered" id="prodtable" style={{ width: '800px' }}>
                    <thead>
                        <tr>
                            <th style={{ width: '2%' }}>S.No</th>
                            <th  >Tests</th>
                            <th style={{ width: '10%' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <InputGroup >
                                        <Form.Control
                                            type='text'
                                            placeholder=""
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </div>
                            </td>
                            <td >
                                <InputGroup >
                                    <Form.Control
                                        type='text'
                                        placeholder=""
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </td>
                            <td width="10%"><Button className='all-bg-green'>Add</Button></td>
                        </tr>

                    </tbody>
                </table>

                <div className='d-flex justify-content-center mb-4'  >
                    <Button style={{ backgroundColor: '#208b8c', width: '200px' }}>SAVE</Button>
                </div>
            </Container>
        </div>
    )
}
