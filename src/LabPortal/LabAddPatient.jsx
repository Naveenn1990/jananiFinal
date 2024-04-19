import React from 'react'
import { Button, Container, InputGroup, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CkEditorComponent } from '../CkEditor/CkEditorComponent';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LabAddPatient = () => {
    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'> Profile</h4>
            <Container>
                <div className="row">
                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Profile Name*</label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="Name"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Short Name*</label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="Name"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >SAC*</label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="SAC"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >External Test ID *</label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="Test Id"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                </div>

                <hr />

                <div className='row mb-4 justify-content-evenly'>

                    <div className="col-lg-3">
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                Separate Print :
                            </label>
                            <input type="checkbox" />
                        </div>

                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                Enable Whatsapp Approval :
                            </label>
                            <input type="checkbox" />
                        </div>
                    </div>


                    <div className="col-lg-3">
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                Show Docs :
                            </label>
                            <input type="checkbox" />
                        </div>
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                Enable Stages :
                            </label>
                            <input type="checkbox" />
                        </div>
                    </div>


                    <div className="col-lg-3">
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                Enable Auto Email Approval :
                            </label>
                            <input type="checkbox" />
                        </div>
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                Enable SMS Approval :
                            </label>
                            <input type="checkbox" />
                        </div>
                    </div>
                </div>


                <div>
                    <h5 className='fw-bold text-dark'>Select Test(s)</h5>
                    <hr />


                    <div className="d-flex gap-4 mb-5 align-items-center" >
                        <label className="form-check-label text-dark fw-bold" for="flexCheckDefault">
                            Choose Test :
                        </label>
                        <InputGroup style={{ width: '400px' }}>
                            <Form.Control
                                type='text'
                                placeholder="Type Service"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <Button style={{ backgroundColor: '#208b8c', width: '100px' }}><FontAwesomeIcon icon={faPlus} />ADD</Button>

                    </div>
                </div>


                <div className='mb-4'>
                    <h6 className='fw-bold text-dark' >Selected Test :</h6>

                    <hr />

                    <Table className='table table-bordered' responsive style={{ width: '800px' }} >
                        <thead>
                            <tr className="admin-table-head" >
                                <th className="fw-bold" style={{ color: '#208b8c' }}>#</th>
                                <th className="fw-bold" style={{ color: '#208b8c', width: '280px' }}>Test</th>
                                <th className="fw-bold" style={{ color: '#208b8c' }}>Order</th>
                                <th className="fw-bold" style={{ color: '#208b8c' }}>Price</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody >
                            <tr className="admin-table-row" >

                                <td >
                                    1.
                                </td>

                                <td>
                                    AFB - SPUTUM(3Days)
                                </td>
                                <td>
                                    <InputGroup>
                                        <Form.Control
                                            type='number'
                                            placeholder=""
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                </td>
                                <td>
                                    <InputGroup>
                                        <Form.Control
                                            placeholder=""
                                            aria-describedby="basic-addon1"
                                            disabled
                                        />
                                    </InputGroup>
                                </td>


                                <td>
                                    <FontAwesomeIcon icon={faTrash} style={{ color: "#e01f1f", cursor: 'pointer' }} />
                                </td>

                            </tr>
                        </tbody>
                    </Table>
                </div>


                <h5 className='fw-bold text-dark'>General Information</h5>
                <hr />
                <div className="row mb-4">
                    <div className="col-lg-2">
                        <label className="form-check-label text-dark fw-bold" for="flexCheckDefault">
                            Barcode Length*
                        </label>
                        <InputGroup>
                            <Form.Control
                                type='text'
                                placeholder=""
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className='col-lg-4'>
                        <label className="form-check-label text-dark fw-bold" for="flexCheckDefault"> Time Taken(mins)*</label>
                        <div className=" d-flex align-items-center ">
                            <InputGroup >
                                <Form.Control
                                    placeholder=""
                                    aria-describedby="basic-addon1"
                                />
                                <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#bfbbbb', border: '1px solid #00000040', color: '#000' }}>Unit</InputGroup.Text>
                            </InputGroup>
                            <Form.Select aria-label="Default select example" style={{ width: '100px', height: '35px' }}>
                                <option value="cap">Min</option>
                                <option value="nabl">Hr</option>
                                <option value="anab">Day</option>
                            </Form.Select>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <label className="form-check-label text-dark fw-bold" for="flexCheckDefault"> Standard stat(mins)*</label>
                        <div className=" d-flex align-items-center ">
                            <InputGroup >
                                <Form.Control
                                    placeholder=""
                                    aria-describedby="basic-addon1"
                                />
                                <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#bfbbbb', border: '1px solid #00000040', color: '#000' }}>Unit</InputGroup.Text>
                            </InputGroup>
                            <Form.Select aria-label="Default select example" style={{ width: '100px', height: '35px' }}>
                                <option value="cap">Min</option>
                                <option value="nabl">Hr</option>
                                <option value="anab">Day</option>
                            </Form.Select>
                        </div>
                    </div>

                    <div className="col-lg-2">
                        <label className="form-check-label text-dark fw-bold" for="flexCheckDefault"> Status*</label>
                        <Form.Select aria-label="Default select example" style={{ height: '35px' }}>
                            <option value="cap">Active</option>
                            <option value="nabl">Inactive</option>
                        </Form.Select>
                    </div>

                </div>

                <div className='col-lg-4 mb-4'>
                    <label className="form-check-label text-dark fw-bold" for="flexCheckDefault"> Sample Quantity*</label>
                    <div className=" d-flex align-items-center ">
                        <InputGroup >
                            <Form.Control
                                placeholder=""
                                aria-describedby="basic-addon1"
                            />
                            <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#bfbbbb', border: '1px solid #00000040', color: '#000' }}>Unit</InputGroup.Text>
                        </InputGroup>
                        <Form.Select aria-label="Default select example" style={{ width: '100px', height: '35px' }}>
                            <option value="cap">mg</option>
                            <option value="nabl">ml</option>
                            <option value="anab">g</option>
                        </Form.Select>
                    </div>
                </div>


                <div className='d-flex gap-4  justify-content-center'>
                    <label className=" text-dark fw-bold" > Interpretation  :</label>
                    <CkEditorComponent style={{ width: '700px' }} />
                </div>

                <div className='d-flex m-auto justify-content-center mb-3'>
                    <Button style={{ backgroundColor: '#208b8c', width: '200px', fontSize: '15px', marginRight:'250px' }}>Save</Button>
                </div>
            </Container >
        </div >
    )
}
